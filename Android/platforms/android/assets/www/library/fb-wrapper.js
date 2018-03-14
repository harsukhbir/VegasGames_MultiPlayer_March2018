var FacebookWrapper = {

	/**
	 * Configuration
	 * @type {Object}
	 */
	config: {
		appId: "",
		cookie: true,
		oauth: true,
		status: true,
		xfbml: true,
		version: 'v2.0',
		autoLogin: false
	},
	/**
	 * Configuration for login
	 * @type {Object}
	 */
	permsConfig: {
		scope: "public_profile,email,user_birthday,user_friends" // default scope
	},

	/**
	 * @type boolean
	 */

	isDebug: false,

	/**
	 * @type boolean
	 */

	isInited: false,

	/**
	 * @type boolean
	 */

	isNeedPermissionChecked: true,

	/**
	 * @type boolean
	 */

	isNeedLoadFile: true,

	/**
	 * @type boolean
	 */

	nonCached: false,

	/**
	 * @type Object
	 */

	loginResponse: null,

	/**
	 * Extend client config
	 * @param {Object} initParameters
	 * @private
	 */
	init: function (initParameters) {
		if (this.isInited) {
			this.log('Init Error. Library initialized.');
			return;
		}

		if (!initParameters.config) {
			this.log('Undefined init config.');
			return;
		}

		this.setConfig(initParameters.config);

		var that = this;
		window.fbAsyncInit = function () {
			if (initParameters.beforeInitCallback && typeof initParameters.beforeInitCallback === 'function') {
				initParameters.beforeInitCallback();
			}
			FB.init(that.config);
			if (initParameters.afterInitCallback && typeof initParameters.afterInitCallback === 'function') {
				initParameters.afterInitCallback();
			}
			if (that.config.autoLogin) {
				that.login(initParameters.successCallback, initParameters.failedCallback);
			}
		};
		this.isInited = true;
		if (this.isNeedLoadFile) {
			this.loadFile();
		}
	},

	checkInitialized: function () {
		if (!this.isInited) {
			this.log('Library is not initialized.');
			return false;
		}
		return true;
	},

	login: function (successCallback, failedCallback) {
		if (!this.checkInitialized()) {
			return;
		}
		var that = this;
		FB.getLoginStatus(function (response) {
			that.loginResponse = response;
			if (response.status === 'connected') {
				if (that.isNeedPermissionChecked) {
					that.checkPermission(
						function () {
							that.onLoginSuccess(successCallback, failedCallback);
						},
						function () {
							that.onLoginFailed(failedCallback);
						}
					);
					return;
				}
				that.onLoginSuccess(successCallback, failedCallback);
				return;
			}
			that.loginAction(successCallback, failedCallback);
		}, this.nonCached);
	},

	loginAction: function (successCallback, failedCallback, rerequest) {
		if (!this.checkInitialized()) {
			return;
		}
		var that = this;
		rerequest = rerequest || false;
		if (rerequest) {
			that.permsConfig.auth_type = 'rerequest'
		}
		FB.login(
			function (responseLogin) {
				that.loginResponse = responseLogin;
				if (responseLogin.status === 'connected') {
					if (that.isNeedPermissionChecked) {
						that.checkPermission(
							function () {
								that.onLoginSuccess(successCallback, failedCallback);
							},
							function () {
								that.onLoginFailed(failedCallback);
							}
						);
						return;
					}
					that.onLoginSuccess(successCallback, failedCallback);
					return;
				}
				that.onLoginFailed(failedCallback);
			}, that.permsConfig
		);
	},

	onLoginSuccess: function (successCallback, failedCallback) {
		if (!this.checkInitialized()) {
			return;
		}
		this.getProfile(successCallback, function () {
			this.onLoginFailed(failedCallback);
		});
	},

	getProfile: function (successCallback, failedCallback, params) {
		if (!this.checkInitialized()) {
			return;
		}
		params = params || {};
		FB.getLoginStatus(function (response) {
			if (response.status === 'connected') {
				FB.api('/me/', 'get', params, function (response) {
					if (!response || response.error || response.error_code) {
						if (failedCallback && typeof failedCallback === 'function') {
							failedCallback(response);
						}
					} else {
						if (successCallback && typeof successCallback === 'function') {
							successCallback(response);
						}
					}
				});
			} else {
				if (failedCallback && typeof failedCallback === 'function') {
					failedCallback(response);
				}
			}
		}, this.nonCached);
	},

	onLoginFailed: function (failedCallback) {
		if (!this.checkInitialized()) {
			return;
		}
		if (failedCallback && typeof failedCallback === 'function') {
			failedCallback(response);
		}
	},

	loadFile: function () {
		var that = this;
		(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			if (that.isDebug) {
				js.src = "//connect.facebook.net/en_US/sdk/debug.js";
			} else {
				js.src = "//connect.facebook.net/en_US/sdk.js";
			}

			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	},

	checkPermission: function (successCallback, failedCallback) {
		if (!this.checkInitialized()) {
			return;
		}
		var perms = this.permsConfig.scope.match(/[A-Za-z_]+/g),
			that = this;
		if (!perms.length) {
			if (failedCallback && typeof failedCallback === 'function') {
				failedCallback(response);
			}
		}

		FB.api(
			"/me/permissions",
			function (response) {
				if (!response || response.error || response.error_code) {
					if (failedCallback && typeof failedCallback === 'function') {
						failedCallback(response);
					}
				} else {
					var isGranted = true,
						needPermission = [];

					for (var j = 0; j < perms.length; j++) {
						var findPermission = false;
						for (var i = 0; i < response.data.length; i++) {
							if (response.data[i].permission == perms[j]) {
								if (response.data[i].status == 'granted') {
									findPermission = true;
								} else {
									needPermission.push(perms[j]);
								}
								break;
							}
						}
						isGranted = isGranted && findPermission;
					}

					if (isGranted) {
						if (successCallback && typeof successCallback === 'function') {
							successCallback(response);
						}
					} else {
						if (needPermission.length) {
							that.loginAction(successCallback, failedCallback, true);
						} else {
							if (failedCallback && typeof failedCallback === 'function') {
								failedCallback(response);
							}
						}
					}
				}
			}
		);
	},

	setConfig: function (config) {
		for (var i in this.config) {
			if (!this.config.hasOwnProperty(i)) {
				continue;
			}
			if (!config || typeof config[i] === 'undefined') {
				continue;
			}
			this.config[i] = config[i];
		}
	},

	share: function (data, message, successCallback, failedCallback) {
		if (!this.checkInitialized()) {
			return;
		}
		var config = {
			method: 'feed',
			name: message.text,
			link: data.appURL,
			picture: message.picture,
			caption: data.appName,
			description: data.appDescription
		};

		FB.getLoginStatus(function (response) {
			if (response.status === 'connected') {
				FB.ui(
					config,
					function (response) {
						if (!response || response.error || response.error_code) {
							if (failedCallback && typeof failedCallback === 'function') {
								failedCallback(response);
							}
							return;
						}
						if (successCallback && typeof successCallback === 'function') {
							successCallback(response);
						}
					}
				);
			} else {
				if (failedCallback && typeof failedCallback === 'function') {
					failedCallback(response);
				}
			}
		}, this.nonCached);

	},

	logout: function () {
		if (!this.checkInitialized()) {
			return;
		}
		FB.getLoginStatus(function (response) {
			if (response.status === 'connected') {
				FB.logout(function (logoutResponse) {
				});
			}
		}, this.nonCached);
	},

	invite: function (message, successCallback, failedCallback) {
		if (!this.checkInitialized()) {
			return;
		}
		if (!message) {
			return;
		}

		FB.getLoginStatus(function (response) {
			if (response.status === 'connected') {
				FB.ui({
						method: 'apprequests',
						message: message
					},
					function (response) {
						if (!response || response.error || response.error_code) {
							if (failedCallback && typeof failedCallback === 'function') {
								failedCallback(response);
							}
							return;
						}
						if (successCallback && typeof successCallback === 'function') {
							successCallback(response);
						}
					}
				);
			} else {
				if (failedCallback && typeof failedCallback === 'function') {
					failedCallback(response);
				}
			}
		}, this.nonCached);
	},

	customInvite: function (sendUIDs, message, successCallback, failedCallback) {
		if (!this.checkInitialized()) {
			return;
		}
		FB.getLoginStatus(function (response) {
			if (response.status === 'connected') {
				FB.ui({method: 'apprequests',
						to: sendUIDs,
						message: message
					},
					function (response) {
						if (!response || response.error || response.error_code) {
							if (failedCallback && typeof failedCallback === 'function') {
								failedCallback(response);
							}
							return;
						}
						if (successCallback && typeof successCallback === 'function') {
							successCallback(response);
						}
					});
			} else {
				if (failedCallback && typeof failedCallback === 'function') {
					failedCallback(response);
				}
			}
		}, this.nonCached);
	},

	/**
	 * Pay action
	 * @param {Object} productUrl
	 * @param {Object} [successCallback]
	 * @param {Object} [failedCallback]
	 */
	pay: function (productUrl, successCallback, failedCallback) {
		if (!this.checkInitialized()) {
			return;
		}
		FB.getLoginStatus(function (response) {
			if (response.status === 'connected') {
				FB.ui(
					{
						method: 'pay',
						action: 'purchaseitem',
						product: productUrl
					},
					function (response) {
						if (!response || response.error || response.error_code) {
							if (failedCallback && typeof failedCallback === 'function') {
								failedCallback(response);
							}
							return;
						}
						if (successCallback && typeof successCallback === 'function') {
							successCallback(response);
						}
					}
				);
			} else {
				if (failedCallback && typeof failedCallback === 'function') {
					failedCallback(response);
				}
			}
		}, this.nonCached);
	},

	loadFriends: function (successCallback, failedCallback) {
		if (!this.checkInitialized()) {
			return;
		}
		FB.getLoginStatus(function (response) {
			if (response.status === 'connected') {
				FB.api(
					"/me/invitable_friends",
					function (response) {
						if (!response || response.error || response.error_code) {
							if (failedCallback && typeof failedCallback === 'function') {
								failedCallback(response)
							}
							return;
						}
						if (successCallback && typeof successCallback === 'function') {
							successCallback(response);
						}
					}
				);
			} else {
				if (failedCallback && typeof failedCallback === 'function') {
					failedCallback(response);
				}
			}
		}, this.nonCached);
	},

	log: function (text) {
		if (this.isDebug) {
			console.warn(text);
		}
	}

};