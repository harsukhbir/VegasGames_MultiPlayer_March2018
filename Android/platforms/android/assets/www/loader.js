var _Tf = {
  _E9: {},
  _0l: {
    _A: {}
  },
  _41: {
    _po: {}
  },
  _a: {
    _Un: {
      _8l: {},
      __0: {}
    }
  },
  _U6: {
    _Un: {
      _8l: {},
      __0: {}
    }
  },
  _Ek: {
    _2s: {
      _3k: {},
      _o4: {},
      _bf: {}
    },
    _Fm: {
      _bf: {}
    },
    _Un: {
      _8l: {},
      __0: {}
    }
  },
  Factories: {
    _Un: {}
  },
  _A: {
    _xb: {},
    _Nc: {}
  },
  _M4: {
    _20: {},
    _9: {},
    _A3: {}
  },
  _dc: {},
  _Hc: {},
  _0r: {
    _Gs: {},
    Values: {}
  },
  _hr: {}
}, _Xl = {}, _41 = {}, _h8 = {
  _a: {
    _Un: {
      _8l: {},
      __0: {}
    }
  },
  Factories: {
    _Un: {}
  },
  _U6: {
    _Un: {
      _8l: {},
      __0: {}
    }
  },
  _Ek: {
    _Un: {
      _8l: {},
      __0: {}
    }
  },
  _Fm: {
    _bf: {}
  },
  _2s: {
    _3k: {},
    _o4: {},
    _bf: {}
  },
  _0l: {
    _Jh: {},
    GameStateAnimationEventsDelay: {}
  },
  _D3: {
    _X6: {}
  },
  _wc: {},
  _41: {
    _po: {}
  }
};

function version(a) {
  if (_Tf._Hc._Og._2d() || !_Tf._0l._Y1) return a;
  if ("string" === typeof a) a += "?" + _Tf._0l._g8;
  else if ("object" === typeof a) for (var b = 0; b < a.length; b++) a[b] += "?" + _Tf._0l._g8;
  return a
}
window.requestAnimFrame = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a, b, c) {
    return window.setTimeout(a, c)
  }
}();
window.cancelRequestAnimFrame = function() {
  return window.cancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || function(a) {
    window.clearTimeout(a)
  }
}();
_Tf._0l._53 = !1;
_Tf._0l._Y1 = !0;
_Tf._0l.FRAME_RATE = 30;
_Tf._0l.FONT_COEFF = 35;
_Tf._0l.MAX_GAME_STATES_DELAY = 3;
_Tf._0l.MAX_RESUMING_GAME_STATES_DELAY = 10;
_Tf._0l._G6 = {
  phone: {
    width: 0,
    theme: "Vegas"
  },
  tablet: {
    width: 0,
    theme: "Vegas"
  },
  desktop: {
    width: null,
    theme: "Vegas"
  }
};
_Tf._0l._41 = "en";
_Tf._0l.isUseDeviceLocale = !0;
_Tf._0l._8h = {
  en: "English",
  ar: "Arabic",
  zhs: "Chinese (Simplified)",
  zht: "Chinese (Traditional)",
  fr: "French",
  de: "German",
  hi: "Hindi",
  it: "Italian",
  ja: "Japanese",
  pte: "Portugese (EU)",
  ptb: "Portugese (Brazilian)",
  ru: "Russian",
  ese: "Spanish (EU)",
  ess: "Spanish (SA)",
  th: "Thai",
  tr: "Turkish",
  vi: "Vietnamese"
};
_Tf._0l._g8 = "1.0.16357";
_Tf._0l.DELAY_PERIODIC_OPERATIONS_ON_ACTIVE_PAGE = 15;
_Tf._0l.DELAY_PERIODIC_OPERATIONS_THEN_ONLINE = 30;
_Tf._0l.maxOpenedTables = 2;
_Tf._0l.needCloseInactiveTables = !0;
_Tf._0l.isShortRegistration = !0;
_Tf._0l._Nr = 10;
_Tf._0l.isCachedTemplatesUsed = !0;
_Tf._0l.canAddMoneyAtTableWhenNonZeroCash = !0;
_Tf._0l.loadPredefinedAvatarsFromAvatarService = !1;
_Tf._0l.countOnChatMessages = 50;
_Tf._0l.isLimitedCountOnChat = !0;
_Tf._0l.CountLimitedChat = 50;
_Tf._0l.loadPredefinedAvatarsFromAvatarService = !1;
_Tf._0l.maxSplit = 4;
_Tf._0l.baccaratHidePairActions = !0;
_Tf._0l.autoLoginIfDisconnected = !0;
_Tf._0l.isSaveLocaleOnDevice = !0;
_Tf._Hc._Og = {
  platforms: {
    Android: "Android",
    iOS: "iOS",
    WindowsPhone: "WinCE",
    Web: "NotPhoneGap"
  },
  device: {
    platform: null,
    platformName: null
  },
  webApplicationsName: {
    facebook: "WebFacebook"
  },
  checkPlatform: function() {
    this.device.platform = this.platforms.Web;
    this.device.platformName = "Web";
    if ("undefined" != typeof device && device.platform) for (var a in this.platforms) if (this.platforms.hasOwnProperty(a) && this.platforms[a] === device.platform) {
      this.device.platform = this.platforms[a];
      this.device.platformName = a;
      break
    }
  },
  setPlatform: function(a) {
    if (a && a in this.webApplicationsName && (this.device.platform || this.checkPlatform(), !this._2d())) this.device.platformName = this.webApplicationsName[a]
  },
  isWebApplication: function(a) {
    return !a ? !this._2d() : !(a in this.webApplicationsName) ? !1 : !this._2d() && this.device.platformName === this.webApplicationsName[a]
  },
  _2d: function() {
    this.device.platform || this.checkPlatform();
    return this.device.platform != this.platforms.Web
  },
  isWindowsPhone: function() {
    this.device.platform || this.checkPlatform();
    return this.device.platform === this.platforms.WindowsPhone
  },
  isiOS: function() {
    this.device.platform || this.checkPlatform();
    return this.device.platform === this.platforms.iOS
  },
  isAndroid: function() {
    this.device.platform || this.checkPlatform();
    return this.device.platform === this.platforms.Android
  },
  isAndroidTablet: function() {
    this.device.platform || this.checkPlatform();
    return this.device.platform === this.platforms.Android && !/Mobile/.test(navigator.userAgent)
  },
  isSamsungGalaxy: function() {
    return this.isAndroid() && window.device && /Galaxy/.test(window.device.model)
  },
  getPlatform: function() {
    this.device.platform || this.checkPlatform();
    return this.device.platformName
  },
  getAssetPath: function() {
    var a = window.location.pathname;
    return a.substring(0, a.lastIndexOf("/") + 1)
  }
};
var Loader = {
  text: {
    LOADING: "Loading...",
    CONNECTING: "Connecting to the server...",
    LOADING_RESOURCES: "Loading resources...",
    LOADING_RESOURCES_FAILED: "Loading resources was failed. Please, try later."
  },
  indicator: null,
  staticLoaderStatus: !1,
  start: function() {
    var a = this;
    this.configureViewport();
    this.indicator = new this._hi(this.text.LOADING);
    $("#loader").live("pagecreate", function() {
      ko.applyBindings(a.indicator, this)
    });
    $("#loader").live("pagehide", function() {
      ko.cleanNode(this)
    });
    $.mobile.changePage(version(_gc._86), {
      transition: "none",
      reloadPage: !1,
      changeHash: !1
    });
    LazyLoad.js(version(_gc._c5), function() {
      "apps.facebook.com" === window.location.host ? _Mf.init("facebook") : _Mf.init();
      _Mf._ks.addListener("loading-status", a._Qm, a)
    })
  },
  configureViewport: function() {
    if (null !== navigator.userAgent.match(/iPhone/i)) {
      var a = $("html"),
        b = window.devicePixelRatio;
      2 < b && (b = 2);
      var c = Math.max(screen.width, screen.height) * b,
        b = Math.min(screen.width, screen.height) * b;
      a.css("width", c + "px");
      a.css("height", b + "px");
      a.css("position", "absolute");
      $("meta[name=viewport]").attr("content", "user-scalable=no, width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5, target-densityDpi=device-dpi")
    }
  },
  design: function() {
    var a = Math.min(_Tf._0l._Y1 ? screen.width : window.innerWidth, _Tf._0l._Y1 ? screen.height : window.innerHeight),
      b = _Tf._0l,
      c = b._G6;
    b._h8 = a <= c.phone.width ? c.phone.theme : a <= c.tablet.width ? c.tablet.theme : c.desktop.theme
  },
  _Qm: function(a, b) {
    -1 === a ? this.indicator.status(this.text.LOADING_RESOURCES_FAILED) : 40 === a ? this.indicator.status(this.text.CONNECTING) : 70 === a && this.indicator.status(this.text.LOADING_RESOURCES);
    this.indicator._Gh(a, b)
  },
  onShowStaticLoader: function() {
    if (!this.staticLoaderStatus) _Tf._N1._c6("#" + _Mf._Md.getVisiblePage(), _h8._wc._an._60), this.staticLoaderStatus = !0
  },
  onHideStaticLoader: function() {
    var a = $(_Tf._0l._N1._60);
    a && $(a).remove();
    this.staticLoaderStatus = !1
  },
  _hi: function(a, b) {
    this.status = ko.observable(a);
    this.state = ko.observable(0);
    this.stateSteps = b || 12;
    this.elements = ko.observableArray();
    this.percentState = ko.observable(0);
    this.nextPercentState = ko.observable(0);
    this.buildElements = function() {
      for (var a = [], b = 0; b < this.stateSteps; b++) a.push(0);
      return a
    };
    this._Gh = function(a, b) {
      var d;
      this.percentState(a);
      this.nextPercentState(b || 0); - 1 === a ? (d = this.stateSteps, this.percentState(100), this.nextPercentState(100)) : d = parseInt(a * this.stateSteps / 100);
      0 === this.elements().length && this.elements(this.buildElements());
      this.state(d)
    };
    this._Gh(0, 10)
  }
};
Loader.design();
var _gc = {
  _yb: "locale/{0}.js"
};
_gc._jr = "design/" + _Tf._0l._h8 + "/templates/{0}.html";
_gc._86 = "design/" + _Tf._0l._h8 + "/templates/loader.html";
_gc._K3 = "index.html";
_gc.DesignJS = function(a, b) {
  return ["design/{0}/commonDes.js".format(a), "design/{0}/positions/{1}.js".format(a, b), "design/{0}/positions/Default.js".format(a), "design/{0}/positions/Positions.Baccarat.js".format(a), "design/{0}/positions/Positions.Paigow.js".format(a), "design/{0}/positions/Positions.Craps.js".format(a), "design/{0}/positions/Positions.BlackJack.js".format(a), "design/{0}/positions/Positions.Holdem.js".format(a), "design/{0}/positions/Positions.Stud.js".format(a), "design/{0}/positions/Positions.StudHL.js".format(a),
    "design/{0}/positions/Positions.Omaha.js".format(a), "design/{0}/positions/Positions.OmahaHL.js".format(a)]
};
_gc._a3 = "design/" + _Tf._0l._h8 + "/DeviceType.js";
_gc._Aq = "design/" + _Tf._0l._h8 + "/css/style.min.css";
_gc._y2 = ["common.js"];
_gc.ReleaseLocale = "locale/en.js,locale/ar.js,locale/zhs.js,locale/zht.js,locale/fr.js,locale/de.js,locale/hi.js,locale/it.js,locale/ja.js,locale/pte.js,locale/ptb.js,locale/ru.js,locale/ese.js,locale/ess.js,locale/th.js,locale/tr.js,locale/vi.js".split(",");
_gc._c5 = ["start.js"];