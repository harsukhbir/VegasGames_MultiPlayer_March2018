function extend(a, b) {
  if ("function" === typeof Object.create) a.superclass = b, a.prototype = Object.create(b.prototype, {
    constructor: {
      value: a,
      enumerable: !1,
      writeable: !0,
      configurable: !0
    }
  });
  else {
    var c = function () { };
    c.prototype = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.superclass = b
  }
  a.prototype.base = b.prototype
}
function backInHistory() {
  return _Mf._Md.backInHistoryOrHideDialogs()
}
function getRandomArbitary(a, b) {
  return Math.random() * (b - a) + a
}
String.prototype.format = function () {
  var a = arguments;
  return this.replace(/\{\d+\}/g, function (b) {
    return a[b.substr(1, b.length - 2)]
  })
};
String.prototype.fill = function (a) {
  return this.replace(/\{\w+\}/g, function (b) {
    var c = b.substr(1, b.length - 2);
    return "undefined" != typeof a[c] ? a[c] : b
  })
};
Function.prototype.bind = function (a, b) {
  var c = this;
  return "undefined" === typeof b ? function () {
    return c.apply(a, arguments)
  } : function () {
    return c.call(a, b)
  }
};
(function () {
  if ("function" == typeof window.postMessage) {
    var a = [];
    window.addEventListener("message", function (b) {
      b.source == window && "zero-timeout-message" == b.data && (b.stopPropagation(), 0 < a.length && a.shift()())
    }, !0);
    window.setZeroTimeout = function (b) {
      a.push(b);
      window.postMessage("zero-timeout-message", "*")
    }
  }
})();
if (ko) ko.bindingHandlers.touch = {
  init: function (a, b, c, d) {
    a.addEventListener("ontouchstart" in document.documentElement ? "touchstart" : "click", function (a) {
      if (!("undefined" !== typeof a.target.disabled && a.target.disabled)) {
        var b = document.createEvent("Event");
        b.initEvent("touch", !0, !0);
        a.target.dispatchEvent(b);
        a.preventDefault()
      }
    }, !1);
    return ko.bindingHandlers.event.init.call(this, a, function () {
      return {
        touch: b()
      }
    }, c, d)
  }
}, ko.bindingHandlers.jqmsubmit = {
  init: function (a, b, c, d) {
    ko.bindingHandlers.submit.init(a, b,
      c, d);
    $(a).submit(function (a) {
      a.preventDefault();
      return !1
    })
  }
};
_Tf._0l._N1 = {
  _vj: "#scroll-wrapper",
  _r3: "#scroller",
  _Sd: ".scroll-refresh-button",
  _zn: ".scroll-load-more-button",
  _L5: ".scroll-load-to-last-page-button",
  _U: ".scroll-search-input",
  _b7: ".scroll-load-more-leaderboard-button",
  _d3: ".scroll-load-to-last-page-leadboard-button",
  _x8: "roller-profile",
  _j7: "#game-page-header",
  _6i: "#table-{0} ",
  _pf: ".game-area",
  _Bn: ".button-area",
  _6m: ".buttons-block",
  _ii: ".actions-block",
  _Zb: ".permanent-actions-block",
  _zd: ".stand-up-block",
  _1g: ".im-back-block",
  _Ri: ".add-money-block",
  _w9: ".join-wait-list-block",
  _Lc: ".static-canvas",
  _og: ".middle-canvas",
  _4e: ".game-canvas",
  _Rd: ".timer-canvas",
  _hs: ".extra-canvas",
  _es: ".game-svg-container",
  _B4: ".game-svg",
  _Qf: ".game-svg-group",
  _ui: ".game-svg-area",
  _Hl: ".stand-up",
  _mr: ".im-back",
  _al: ".add-money",
  _Vm: ".join-wait-list",
  _dd: ".leave-wait-list",
  _If: ".toolbar_table_card",
  _0s: ".toolbar_table_stake",
  _zg: "#raise-slider",
  _ep: "#raise-block",
  _vs: "#game-chat",
  _pi: "#players-chat",
  _R8: "#craps-stake-{type}-{point}",
  _nl: ".craps-stakes-chips-wrapper",
  _wm: ".craps-stakes-chips",
  _Ra: ".stakes-{name}",
  _J7: ".stake-chips",
  _k1: ".stake-amount",
  _wi: ".chips-{amount}",
  _73: ".hide-stakes",
  _6s: "#craps-table-dice-history",
  _w1: "#craps-table-player-money",
  _Xk: "#craps-table-total-bet-number",
  _uo: "#craps-min-bet-amount",
  _37: "#craps-max-bet-amount",
  _a5: "#craps-point-value",
  _q8: "player-avatar-{0}",
  _ai: "player-avatar-wrapper",
  _1f: "player-client-seat",
  _i8: "player-avatar",
  _dg: "craps-player-name-block",
  _4s: "craps-player-name",
  _wo: ".craps-player-balance",
  _cb: ".craps-repeat-button",
  _A4: "#lobby-table-password",
  _Jk: "#tournament-password",
  PROFILE_AVATARS_SlIDER: "slider",
  PROFILE_AVATARS_SlIDER_WRAPPER: "#slider-wrapper",
  _pm: "#avatars-profile-back-button",
  _8g: "#avatars-button-assign",
  _1h: "#avatars-button-prev",
  _Zn: "#avatars-button-next",
  _Hf: "#avatar-active",
  _xe: "#avatar-active-holder",
  _Kl: "#block-button-assign",
  _Tn: "#block-button-prev",
  _Vc: "#block-button-next",
  _zk: "#avatars-counter",
  _9i: "#avatars-error",
  _H3: "#avatars-page-content",
  _Xo: "#buy-in-form",
  _ig: "#cashier-slider",
  _T7: "#table-text-buyin",
  _v3: "#table-text-buyin-bankroll",
  _pk: "#table-cashier-ok",
  _4f: "#table-cashier-cancel",
  _nf: "#table-cashier-add-money",
  _Oe: "#table-cashier-cancel-add-money",
  _5g: "#cashier-holder-ok",
  _7: "#cashier-holder-cancel",
  _01: "#buy-in-auto-rebuy",
  _kq: "#buy-in-auto-top-up",
  _H9: ".buy-in-checkbox.auto-rebuy",
  _74: ".buy-in-checkbox.auto-top-up",
  _Mh: "#raise-dialog-popup",
  _T2: "#table-options",
  _Re: "#chat-dialog-popup",
  _ve: "#close-button-raise-ok",
  _M2: "#close-button-raise-cancel",
  _Io: "#close-button-settings",
  _t: "#close-button-chat",
  _y1: "#login-message-error",
  _j1: "#login-message",
  _2i: "#login-name",
  _G0: "#login-password",
  _d0: "#login-loading-status",
  _R4: "#remember-me-block",
  _o8: "#status-message",
  _0m: "#status-error",
  _V0: "#registration-error-message",
  _cm: "#form-registration",
  _Pk: "#registration-input-container",
  _lm: "#reg-input-password",
  _bj: "#reg-input-password-ver",
  _se: "#reg-input-eMail",
  _Rq: "#reg-input-gender-female",
  _yp: "#reg-input-gender-male",
  _xf: "#registration-page-content",
  _1d: "#table-{0}-name",
  _Do: "#table-{0}-stakes",
  _Rf: "#table-{0}-buy-in",
  _sn: "#table-{0}-level",
  _i: "#table-{0}-blinds",
  _8r: "#table-{0}-nextlevelstart",
  _Nf: "#table-{0}-nextblinds",
  _m2: "#table-{0}-break-in",
  _6: "#tableToLobbyButton",
  _Ig: ".table-bet-amount-selector",
  _he: "#bet-amount-{0}",
  _Uq: "#chat-input",
  _Om: "#table-{0}-bets",
  _Br: "#table-{0}-payout",
  _T: "#extend-table-{0}-name",
  _60: ".static-loader",
  _rc: "#confirm-form",
  _0j: "#confirm-form-button-ok",
  _J4: "#confirm-form-button-cancel",
  __3: ".confirm-dialog",
  _Sc: "#alert-form",
  _e0: "#alert-form-button-ok",
  _95: ".alert-dialog",
  _52: "#alert-dialog-close-button",
  _dr: "#info-dialog",
  _Wg: "#info-dialog-text",
  _ys: "#orientation-warning-dialog",
  _Wp: "#orientation-warning-dialog-text",
  _Ai: ".confirm-popup-back",
  _Z: ".external-dialog-page",
  _Lq: "#register-bonus-close-button",
  _bk: " .buttons-bet",
  _ug: " .buttons-bet-min",
  _Mo: " .buttons-bet-max",
  _59: " .raise-buttons"
};
_Tf._0l._N1._ff = {
  _Q6: "index",
  _1o: "status",
  _W5: "home",
  _fq: "login",
  _3f: "lobby",
  _3q: "registration",
  _2l: "table",
  _u5: "profile",
  _qa: "tournament"
};
_Tf._0l._N1._k9 = {};
_Tf._0l._N1.exeptionsPage = ["registerBonus"];
_Tf._ll = function (a) {
  this.config = a || {};
  this.cachedTemplates = {};
  this.templateData = null
};
_Tf._ll.prototype = {
  templateFormat: "{0}-tmpl",
  cachedTemplates: {},
  config: {},
  templateData: {},
  hasTemplate: function (a) {
    return 0 < this.getTemplateElement(a).length
  },
  loadTemplates: function (a) {
    for (var b in a) a.hasOwnProperty(b) && !("index" === b || "loader" === b) && this.loadTemplate(version(a[b]), b);
    a = this.config;
    for (b in a) a.hasOwnProperty(b) && this.loadTemplate(version(_gc._jr.format(a[b])), a[b])
  },
  loadTemplate: function (a, b) {
    var c = this._hr.makeUrlAbsolute(a, this._hr.parseUrl(location).hrefNoHash),
      d = this;
    $.ajax({
      url: c,
      dataType: "text",
      success: function (a) {
        var c = $('<script type="text/x-jquery-tmpl" id="{0}">'.format(d.templateFormat).format(b) + "<\/script>");
        c.appendTo($("head"));
        c.text(a)
      }
    })
  },
  renderTemplate: function (a) {
    if (!this.hasTemplate(a)) return !1;
    var b = this.appendTemplateToBody(a);
    _Mf._Md.insertPage(b, a);
    return !0
  },
  appendTemplateToBody: function (a) {
    if (!this.templateData) this.templateData = this.buildTemplateData();
    a = $(this.getTemplate(a));
    a.appendTo(document.body);
    return a
  },
  getTemplate: function (a) {
    a = this.getTemplateElement(a);
    if (a.hasClass("tpl-ready")) return a.text();
    var b = a.tmpl(this.templateData).get(0).outerHTML;
    a.addClass("tpl-ready");
    a.text(b);
    return b
  },
  getTemplateElement: function (a) {
    return this.cachedTemplates[a] ? this.cachedTemplates[a] : this.cachedTemplates[a] = $("#" + this.templateFormat.format(a), $("head"))
  },
  buildTemplateData: function () {
    var a = this.config,
      b = {}, c;
    for (c in a) a.hasOwnProperty(c) && this.hasTemplate(a[c]) && (b[a[c]] = this.getTemplateElement(a[c]).text());
    return b
  },
  _hr: {
    parseUrl: function (a) {
      a = /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/.exec(a ||
        "") || [];
      return {
        href: a[0] || "",
        hrefNoHash: a[1] || "",
        hrefNoSearch: a[2] || "",
        domain: a[3] || "",
        protocol: a[4] || "",
        doubleSlash: a[5] || "",
        authority: a[6] || "",
        username: a[8] || "",
        password: a[9] || "",
        host: a[10] || "",
        hostname: a[11] || "",
        port: a[12] || "",
        pathname: a[13] || "",
        directory: a[14] || "",
        filename: a[15] || "",
        search: a[16] || "",
        hash: a[17] || ""
      }
    },
    makePathAbsolute: function (a, b) {
      if (a && "/" === a.charAt(0)) return a;
      for (var a = a || "", c = (b = b ? b.replace(/^\/|(\/[^\/]*|[^\/]+)$/g, "") : "") ? b.split("/") : [], d = a.split("/"), e = 0; e < d.length; e++) {
        var f = d[e];
        switch (f) {
          case ".":
            break;
          case "..":
            c.length && c.pop();
            break;
          default:
            c.push(f)
        }
      }
      return "/" + c.join("/")
    },
    makeUrlAbsolute: function (a, b) {
      var c = this.parseUrl(a),
        d = this.parseUrl(b),
        e = c.protocol || d.protocol,
        f = c.protocol ? c.doubleSlash : c.doubleSlash || d.doubleSlash,
        g = c.authority || d.authority,
        h = "" !== c.pathname,
        i = this.makePathAbsolute(c.pathname || d.filename, d.pathname);
      return e + f + g + i + (c.search || !h && d.search || "") + c.hash
    }
  }
};
_Tf._xp = function () {
  this.clientOnlineInterval = null;
  this.templateManager = new _Tf._ll(_Tf._0l._N1._k9);
  var a = _Tf._0l._N1._ff;
  this.isInited = {};
  for (var b in a) a.hasOwnProperty(b) && (this.isInited[a[b]] = !1);
  this.correctPages = {};
  this.pagesEventsMap = {};
  this.historyStack = [];
  this.bindGeneral()
};
_Tf._xp.prototype = {
  templateManager: null,
  historyStack: [],
  correctPages: {},
  periodic: {
    activePage: _Tf._0l._N1._ff._Q6,
    activeExternalPage: null,
    visiblePage: "loader",
    permanentPage: _Tf._0l._N1._ff._2l,
    prevPage: _Tf._0l._N1._ff._Q6,
    delay: 1E3 * _Tf._0l.DELAY_PERIODIC_OPERATIONS_ON_ACTIVE_PAGE
  },
  clientOnlineInterval: null,
  _E8: function (a) {
    var b = this._oo();
    b in this.pagesEventsMap && this.pagesEventsMap[b]._I0(a);
    b = this.getPermanentPage();
    b in this.pagesEventsMap && this.pagesEventsMap[b]._I0(a);
    (b = this.getActiveExternalPage()) && b in this.pagesEventsMap && this.pagesEventsMap[b]._I0(a)
  },
  resizeHandler: function (a) {
    a = a || !1;
    if (!(_Tf._Hc._Og.isiOS() && !1 !== a)) {
      var b = this._oo();
      b in this.pagesEventsMap && this.pagesEventsMap[b]._am();
      b = this.getPermanentPage();
      b in this.pagesEventsMap && this.pagesEventsMap[b]._am();
      var b = $("body > div" + _Tf._0l._N1._Z),
        c = this;
      0 < b.length && b.each(function () {
        c.pagesEventsMap[$(this).attr("id")]._am()
      });
      _Mf._ks && _Mf._ks.emit("layout-resize", arguments)
    }
  },
  _Ba: function () {
    this.resizeHandler()
  },
  _In: function () {
    _me.account.isLogined(!0);
    _Mf._ks.emitAsync(_Ag.__7, null);
    this.clientOnlineInterval = setInterval(function () {
      _Mf._L2._oa() || _Mf._ks.emitAsync(_Ag.__7, null)
    }, 1E3 * _Tf._0l.DELAY_PERIODIC_OPERATIONS_THEN_ONLINE)
  },
  _Cc: function () {
    _me.account.isLogined(!1);
    clearInterval(this.clientOnlineInterval);
    this.clientOnlineInterval = null
  },
  bindClientOnline: function () {
    _Mf._ks.addListener(_Ag._J3, this._In, this);
    _Mf._ks.addListener(_Ag._ki, this._Cc, this)
  },
  bindGeneral: function () {
    this.resizeHandler = this.resizeHandler.bind(this);
    this._Ba = this._Ba.bind(this);
    $(window).bind("resize", this.resizeHandler);
    $(window).bind("orientationchange", this._Ba);
    if (_Tf._Hc._Og._2d() && !_Tf._Hc._Og.isWindowsPhone()) this.backInHistoryOrHideDialogs = this.backInHistoryOrHideDialogs.bind(this), document.addEventListener("backbutton", this.backInHistoryOrHideDialogs, !1)
  },
  _C3: function (a) {
    return this.correctPages[a]
  },
  _oo: function () {
    return this.periodic.activePage
  },
  getActiveExternalPage: function () {
    return this.periodic.activeExternalPage
  },
  getVisiblePage: function (a) {
    return a ? this.periodic.visiblePage : this.getVisiblePageFromDom()
  },
  getVisiblePageFromDom: function () {
    if ($("#" + this.getPermanentPage()).hasClass("ui-page-active")) return this.getPermanentPage();
    if (this.periodic.activePage != _Tf._0l._N1._ff._Q6) return this.periodic.activePage;
    var a = $(".ui-page-active");
    return 0 === a.length ? _Tf._0l._N1._ff._Q6 : a.get(0).id
  },
  getPermanentPage: function () {
    return this.periodic.permanentPage
  },
  getPreviousPage: function () {
    return this.periodic.prevPage
  },
  getPageEvent: function (a) {
    return !(a in this.pagesEventsMap) ? null : this.pagesEventsMap[a]
  },
  _B6: function () {
    this.bindClientOnline();
    this.executePeriodic = this.executePeriodic.bind(this);
    setTimeout(this.executePeriodic, this.periodic.delay)
  },
  executePeriodic: function () {
    var a = this.getVisiblePage(!0);
    this.pagesEventsMap[a] && this.pagesEventsMap[a]._N9 && this.pagesEventsMap[a]._N9();
    setTimeout(this.executePeriodic, this.periodic.delay)
  },
  pushInHistoryStack: function (a) {
    if (this._Xr(a) && !(a === _Tf._0l._N1._ff._Q6 || a === _Tf._0l._N1._ff._1o)) {
      var b = "";
      0 < this.historyStack.length && (b = this.historyStack[this.historyStack.length - 1]);
      b !== a && (!1 === this.pagesEventsMap[a]._Q(b) ? 1 <= this.historyStack.length && (this.historyStack[this.historyStack.length - 1] = a) : 2 <= this.historyStack.length && this.historyStack[this.historyStack.length - 2] === a ? this.historyStack.pop() : this.historyStack.push(a))
    }
  },
  clearHistoryStack: function () {
    this.historyStack = []
  },
  back: function () {
    this.changePage(this.periodic.prevPage)
  },
  backInHistoryStack: function () {
    if (2 > this.historyStack.length) return !1;
    this.changePage(this.historyStack[this.historyStack.length - 2]);
    return !0
  },
  backInHistoryOrHideDialogs: function () {
    var a = this.getVisiblePage(),
      b = $("#" + a + " .cancel-button:visible");
    if (0 < b.length) return b.each(function () {
      $(this).trigger("touch").trigger("click")
    }), "1";
    if (this.hideExternalDialogs()) return "1";
    if (0 < $("#" + a + " div.ui-selectmenu.in").length) return $("#" + a + " select").selectmenu("close"), "1";
    try {
      return "function" === typeof this.pagesEventsMap[a]._N3 && !1 === this.pagesEventsMap[a]._N3() ? this.backInHistoryStack() ? "1" : "0" : "1"
    } catch (c) { }
    return "0"
  },
  backInHistory: function () {
    var a = this.getVisiblePage();
    try {
      "function" === typeof this.pagesEventsMap[a]._N3 && !1 === this.pagesEventsMap[a]._N3() && this.backInHistoryStack()
    } catch (b) { }
  },
  refresh: function (a, b, c, d, e) {
    var f = _Tf._N1,
      g = b + "-on-create",
      e = e || !1;
    this.periodic.activePage === b ? e ? (f._Es(c), f._ab(d, a, !0)) : (f._Es(d), f._Zk(c, a), _Tf._Ek._29.hidePageLoadingMessage()) : (this.hideExternalDialogs(), _Mf._ks.addListener(g, function () {
      _Mf._ks.removeListeners(g, function (a) {
        return !a ? !1 : "ErrorEmitter" === a
      });
      e ? f._ab(d, a) : f._ab(c, a);
      _Tf._Ek._29.hidePageLoadingMessage()
    },
      "ErrorEmitter"), this.historyStack = [], b === _Tf._0l._N1._ff._fq && this.pushInHistoryStack(_Tf._0l._N1._ff._W5), this.changePage(b))
  },
  _a0: function (a) {
    this.bindPage(a.page);
    this._zs(a.page, a.config)
  },
  changePage: function (a, b) {

    if (a == 'game-type') {
      setTimeout(_me.lobby.setGameType, 0);
      this._Xr(a) && this.pagesEventsMap[a]._5c() && (b = b || {}, this.getVisiblePage() in this.pagesEventsMap && this.pagesEventsMap[this.getVisiblePage()]._jp(a), this.isPageLoaded(a) && this.getVisiblePage() === this.getPermanentPage() ? (this.pushInHistoryStack(a), this.leavePermanentPage(a), this._E8()) : a === this.periodic.activePage ? (_Tf._N1._cl(), this.onEventPageShow($("#" + a), a, !1)) : (this.pagesEventsMap[a]._rm(), this.isInited[a] ? this._zs(a, b) : this.pagesEventsMap[a]._2c(this._a0.bind(this, {
        page: a,
        config: b
      }))))
    }

    this._Xr(a) && this.pagesEventsMap[a]._5c() && (b = b || {}, this.getVisiblePage() in this.pagesEventsMap && this.pagesEventsMap[this.getVisiblePage()]._jp(a), this.isPageLoaded(a) && this.getVisiblePage() === this.getPermanentPage() ? (this.pushInHistoryStack(a), this.leavePermanentPage(a), this._E8()) : a === this.periodic.activePage ? (_Tf._N1._cl(), this.onEventPageShow($("#" + a), a, !1)) : (this.pagesEventsMap[a]._rm(), this.isInited[a] ? this._zs(a, b) : this.pagesEventsMap[a]._2c(this._a0.bind(this, {
      page: a,
      config: b
    }))))

  },
  insertPage: function (a, b) {
    var c, d = $("#" + this.periodic.prevPage);
    if (!d.length || this.periodic.prevPage === _Tf._0l._N1._ff._Q6) d = $(".ui-page-active");
    this.onEventPageCreate(a, b);
    c = this.onEventPageInit(a, b);
    this.onEventPageBeforeShow(a, b);
    d.removeClass("ui-page-active");
    a.addClass("ui-page-active");
    this.onEventPageShow(a, b, c);
    this.onEventPageHide(a, b, d)
  },
  onEventPageCreate: function (a, b) {
    this.pagesEventsMap[b]._ul();
    ko.applyBindings(_me.pagesViewModelMap[b] ? _me.pagesViewModelMap[b] : _me, a.get(0))
  },
  onEventPageInit: function (a, b) {
    this.pagesEventsMap[b].beforeInit();
    if (this.isInited[b]) return !1;
    this.isInited[b] = !0;
    this.pagesEventsMap[b]._r4();
    return !0
  },
  onEventPageBeforeShow: function (a, b) {
    this._Yc(b);
    this.pagesEventsMap[b]._am()
  },
  onEventPageShow: function (a, b, c) {
    c = c || !1;
    this.leavePermanentPage(b);
    this.leavePreviousPage();
    this.pagesEventsMap[b]._am();
    this.pagesEventsMap[b]._t6();
    c && this.pagesEventsMap[b].__6();
    _Tf._hr._Yp(function (a) {
      a.pagesEventsMap[b]._G1()
    }, this, this)
  },
  onEventPageHide: function (a, b, c) {
    if (c.length) {
      var d = $(c.get(0)).attr("id");
      d !== this.periodic.permanentPage && _Tf._hr._Yp(function (a) {
        ko.cleanNode(c.get(0));
        a.pagesEventsMap[d] && a.pagesEventsMap[d]._Sr();
        c.remove()
      }, this, this)
    }
  },
  bindPage: function (a) {
    var b = _Tf._N1,
      c = this.isInited[a],
      d = this;
    b.$("#" + a).live(EventType._l9, function () {
      d._Yc(a);
      d.pagesEventsMap[a]._am()
    });
    b.$("#" + a).live(EventType._0g, function () {
      d.leavePermanentPage(a);
      d.leavePreviousPage();
      d.pagesEventsMap[a]._am();
      d.pagesEventsMap[a]._t6();
      c || (d.pagesEventsMap[a].__6(), c = !0);
      d.pagesEventsMap[a]._G1()
    });
    b.$("#" + a).live(EventType._vb, function () {
      d.pagesEventsMap[a].beforeInit();
      d.isInited[a] || (d.isInited[a] = !0, d.pagesEventsMap[a]._r4())
    });
    b.$("#" + a).live(EventType._5j, function () {
      d.pagesEventsMap[a]._ul();
      ko.applyBindings(_me.pagesViewModelMap[a] ? _me.pagesViewModelMap[a] : _me, this)
    });
    b.$("#" + a).live(EventType._Ua,

      function () {
        _Tf._hr._Yp(function (b) {
          ko.cleanNode(this);
          b.pagesEventsMap[a]._Sr()
        }, d, this)
      })
  },
  _Yc: function (a) {
    a = _h8._0l._Kj[a];
    if ("undefined" !== typeof a) {
      var b = _Tf._N1,
        c;
      for (c in a) a.hasOwnProperty(c) && b._ab(c, a[c], !1, !0)
    }
  },
  fillPageLocale: function (a) {
    a = _h8._0l._Kj[a];
    if ("undefined" !== typeof a) {
      var b = _Tf._N1,
        c;
      for (c in a) a.hasOwnProperty(c) && $(c).prop("tagName") && b._ab(c, a[c], !0, !0)
    }
  },
  _zs: function (a, b) {
    _me.menu.activePage(a);
    _Tf._N1._cl();
    _Mf.PopupManagerInstance.isShowingNow && _Mf.PopupManagerInstance.closePopup();
    b = b || {};
    b.transition = b.transition || "none";
    b.reloadPage = !0;
    b.changeHash = !1;
    this.getPermanentPage() === a ? (this.pushInHistoryStack(a), this.goToPermanentPage(a, b)) : (this.periodic.prevPage = this.periodic.activePage, this.periodic.activePage = a, this.periodic.visiblePage = a, this.pushInHistoryStack(a), (!_Tf._0l.isCachedTemplatesUsed || !this.templateManager.renderTemplate(a, b)) && $.mobile.changePage(version(this._C3(a)), b))
  },
  goToPermanentPage: function (a, b) {
    0 < $("#" + a).length ? this._t2() : $.mobile.loadPage(version(this._C3(a)),
      b).done(this._t2.bind(this))
  },
  _t2: function () {
    var a = this.getPermanentPage(),
      b = $("#" + a);
    b.length ? (this.periodic.visiblePage = a, this.onEventPageBeforeShow(b, a), $("#" + this._oo()).removeClass("ui-page-active"), b.addClass("ui-page-active"), this.onEventPageShow(b, a, !1)) : this.periodic.visiblePage = this._oo()
  },
  leavePermanentPage: function (a) {
    var b = this.getPermanentPage(),
      c = $("#" + a);
    if (!(a === b || this.getVisiblePage() !== b)) $("#" + b).removeClass("ui-page-active"), c.addClass("ui-page-active"), this.periodic.visiblePage = a, this.pagesEventsMap[a]._am()
  },
  leavePreviousPage: function () {
    $("#" + this.getPreviousPage()).length && $("#" + this.getPreviousPage()).remove()
  },
  isPageLoaded: function (a) {
    return this._oo() === a
  },
  _Xr: function (a) {
    return !!this.correctPages[a]
  },
  addPageToEventsMap: function (a, b, c) {
    if (a && (b = b || _Tf._Ek._Fm._bf._X6)) if (this.pagesEventsMap = this.pagesEventsMap || {}, !this.pagesEventsMap[a]) c = c || _gc._jr, this.pagesEventsMap[a] = new b(this, a), this.correctPages = this.correctPages || {}, this.correctPages[a] = c.format(a)
  },
  applyPagesInEventsMap: function () {
    var a = _Tf._0l._N1._ff,
      b;
    for (b in a) a.hasOwnProperty(b) && !this.pagesEventsMap[a[b]] && this.addPageToEventsMap(a[b], _Tf._E9._Fm._bf._X6, a[b] === a._Q6 ? _gc._K3 : _gc._jr)
  },
  loadMainFilesAndDesign: function () {
    _Mf._ks.emit("loading-status", [20, 30]);
    _Tf._0l._Y1 ? LazyLoad.js(version(_gc.ReleaseLocale), function () {
      _Tf._41.init();
      LazyLoad.js(version(_gc._y2), function () {
        _Mf.createLoggerInstance();
        LazyLoad.js(version(_gc._a3), function () {
          _Mf._ks.emit("loading-status", [30, 40]);
          _Mf.configureDesign();
          LazyLoad.js(version(_gc.DesignJS),

            function () {
              _Mf._ks.emit("loading-status", [40, 70]);
              _Mf.begin()
            })
        })
      })
    }) : LazyLoad.js(version(_gc._0l), function () {
      LazyLoad.js(version(_gc.Root), function () {
        LazyLoad.js(_gc._41, function () {
          _Tf._41.init();
          LazyLoad.js(version(_gc._dc), function () {
            LazyLoad.js(version(_gc.MVVM), function () {
              LazyLoad.js(version(_gc._N1), function () {
                LazyLoad.js(version(_gc._0r), function () {
                  LazyLoad.js(version(_gc._2s), function () {
                    LazyLoad.js(version(_gc.Main), function () {
                      LazyLoad.js(version(_gc._Fm), function () {
                        LazyLoad.js(version(_gc._M4),
                          function () {
                            LazyLoad.js(version(_gc.Helpers), function () {
                              LazyLoad.js(version(_gc._A), function () {
                                LazyLoad.js(version(_gc.AppLibrary), function () {
                                  LazyLoad.js(version(_gc.GamePlayModel), function () {
                                    LazyLoad.js(version(_gc.GamePlayController), function () {
                                      LazyLoad.js(version(_gc.Factories), function () {
                                        LazyLoad.js(version(_gc._Xl), function () {
                                          _Mf.createLoggerInstance();
                                          LazyLoad.js(version(_gc._a3), function () {
                                            _Mf._ks.emit("loading-status", [30, 40]);
                                            _Mf.configureDesign();
                                            LazyLoad.js(version(_gc.DesignJS), function () {
                                              _Mf._ks.emit("loading-status", [40, 50]);
                                              _Mf.begin()
                                            })
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            })
                          })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  },
  loadGameFilesAndResources: function (a) {
    _Mf._ks.emit("loading-status", [70, 90]);
    _Tf._M4._np.load(function () {
      _Mf._ks.emit("loading-status", [90, 100]);
      _Tf._hb.buildFactories(_Tf);
      _Tf._hb.buildGameBehaviors(_Tf);
      _Tf._hb.buildGamePresenters(_Tf);
      _Mf._ks.emit("loading-status", [100, 100]);
      a()
    }, function () {
      _Mf._ks.emit("loading-status", [-1])
    })
  },
  loadTemplatesForCaching: function () {
    _Tf._0l.isCachedTemplatesUsed && this.templateManager.loadTemplates(this.correctPages)
  },
  showExternalDialog: function (a) {
    if (!this.isExternalDialogOpened(a) && this.pagesEventsMap[a]._5c(a)) {
      this.periodic.activeExternalPage = a;
      var b = this.templateManager.appendTemplateToBody(a);
      b.addClass(_Tf._0l._N1._Z.substr(1));
      this.pagesEventsMap[a]._ul();
      ko.applyBindings(_me.pagesViewModelMap[a] ? _me.pagesViewModelMap[a] : _me, b.get(0));
      this.pagesEventsMap[a]._t6();
      this.pagesEventsMap[a]._am();
      this.pagesEventsMap[a]._G1();
      this.pagesEventsMap[a].beforeInit()
    }
  },
  closeExternalDialog: function (a) {
    var b = $("#" + a);
    b.length && _Tf._hr._Yp(function () {
      ko.cleanNode(b.get(0));
      b.remove();
      this.pagesEventsMap[a]._Sr()
    }, null, this)
  },
  hideExternalDialogs: function () {
    var a = $("body > div" + _Tf._0l._N1._Z),
      b = this;
    return 0 < a.length ? (a.each(function () {
      b.closeExternalDialog($(this).attr("id"))
    }), !0) : !1
  },
  isExternalDialogOpened: function (a) {
    return 0 < $("#" + a + _Tf._0l._N1._Z).length ? !0 : !1
  }
};
_Tf._h2 = function () {
  this.basePosition = null;
  this.positions = {}
};
_Tf._h2.prototype = {
  basePosition: null,
  positions: {},
  init: function () {
    this.setPositions(_h8._0l.positions)
    // this.hellokaushalset(hellokaushal)
  },
  setPositions: function (a) {
    var b;
    this.basePosition = jQuery.extend(!0, {}, _h8._D3.Default);
    for (var c in a) a.hasOwnProperty(c) && (b = jQuery.extend(!0, {}, _h8._D3[a[c]]), this.positions[c] = jQuery.extend(!0, {}, this.basePosition, b))
  },

  // hellokaushalset: function(a) {
  //    setTimeout(_me.lobby.setGameType, 60000);
  // },

  getPositionByParentId: function (a) {
    var b = a;
    "string" == typeof b && (b = /#table-(\d+)/.exec(a)[1]);
    return this.getPositionByTableId(b)
  },
  getPositionByTableId: function (a) {
    return this.getPositionByGameType(_Mf._q1._Rm(a).gameType)
  },
  getPositionByGameType: function (a) {
    if (!this.positions[a]) throw "Not build position configuration";
    return this.positions[a]
  },
  setLobbyGameType: function (a) {
    if (!a) a = _Tf._dc.GameType._dk;
    for (var a = _Tf._dc.GameType.toString(a), b = $("body"), c = b.attr("class").split(/\s+/), d = c.length, e = /game-type-/, f = 0; f <= d; f++) e.test(c[f]) && b.removeClass(c[f]);
    b.addClass("game-type-" + a)
  },
  getBasePosition: function () {
    return this.basePosition
  }
};
_Tf.PopupManager = function () {
  this.queue = [];
  this.isPaused = this.isShowingNow = !1
};
_Tf.PopupManager.prototype = {
  queue: [],
  isShowingNow: !1,
  isPaused: !1,
  init: function () {
    _Mf._ks.addListener(_Ag._0g, this.pageShowHandler, this);
    _Mf._ks.addListener(_Tf._0l._N1._ff.LOADING_TABLE + "-on-hide", this.loadingTableHideHandler, this)
  },
  push: function (a) {
    this.queue.push(a);
    this.checkQueue()
  },
  showImmediately: function (a) {
    this.hideVisisblePopups();
    this.queue.unshift(a);
    this.checkQueue()
  },
  checkQueue: function () {
    0 < this.queue.length && !this.isShowingNow && !this.isPaused && this.showNext()
  },
  showNext: function () {
    if (0 != this.queue.length) this.isShowingNow = !0, this.queue[0]()
  },
  closePopup: function () {
    0 < this.queue.length && this.queue.shift();
    this.isShowingNow = !1
  },
  hideVisisblePopups: function () {
    if (0 != this.queue.length) {
      this.isShowingNow = !1;
      try {
        _Tf._N1.$(_Tf._0l._N1._Ai).remove()
      } catch (a) { }
    }
  },
  onClose: function () {
    this.closePopup();
    this.checkQueue()
  },
  pageShowHandler: function (a) {
    if (!this.isPaused) {
      var b = _Tf._0l._N1._ff;
      "undefined" !== typeof b.LOADING_TABLE && a == b.LOADING_TABLE ? this.isPaused = !0 : this.checkQueue()
    }
  },
  loadingTableHideHandler: function () {
    this.isPaused = !1;
    this.checkQueue()
  }
};
_Tf._h2 = function () {
  this.basePosition = null;
  this.positions = {}
};
_Tf._h2.prototype = {
  basePosition: null,
  positions: {},
  init: function () {
    this.setPositions(_h8._0l.positions)
    // this.hellokaushalset(hellokaushal)
  },
  setPositions: function (a) {
    var b;
    this.basePosition = jQuery.extend(!0, {}, _h8._D3.Default);
    for (var c in a) a.hasOwnProperty(c) && (b = jQuery.extend(!0, {}, _h8._D3[a[c]]), this.positions[c] = jQuery.extend(!0, {}, this.basePosition, b))
  },

  // hellokaushalset: function(a) {
  //   // setTimeout(_me.lobby.setGameType, 75000);
  //   // alert('hellokaushalset '+ JSON.stringify(a));
  // },

  // hellokaushalsetGo: function(a) {
  //   alert('GO');
  //   _me.lobby.setGameType();
  //   // alert('hellokaushalset '+ JSON.stringify(a));
  // },


  getPositionByParentId: function (a) {
    var b = a;
    "string" == typeof b && (b = /#table-(\d+)/.exec(a)[1]);
    return this.getPositionByTableId(b)
  },
  getPositionByTableId: function (a) {
    return this.getPositionByGameType(_Mf._q1._Rm(a).gameType)
  },
  getPositionByGameType: function (a) {
    if (!this.positions[a]) throw "Not build position configuration";
    return this.positions[a]
  },
  setLobbyGameType: function (a) {
    // alert('setLobbyGameTypes '+a);
    if (!a) a = _Tf._dc.GameType._dk;
    for (var a = _Tf._dc.GameType.toString(a), b = $("body"), c = b.attr("class").split(/\s+/), d = c.length, e = /game-type-/, f = 0; f <= d; f++) e.test(c[f]) && b.removeClass(c[f]);
    b.addClass("game-type-" + a)
  },
  getBasePosition: function () {
    return this.basePosition
  }
};
_Tf._hb = {
  resetAppBridge: function (a) {
    a._E9._Fm = {
      _bf: {}
    };
    a._E9._Y3 = {};
    a._E9._Un = {
      _8l: {},
      __0: {},
      __b: null,
      _83: null
    };
    a._E9._2s = {
      _bf: {},
      _o4: {},
      _3k: {}
    };
    a._E9.Factories = {
      _Un: {}
    }
  },
  buildAppEvents: function (a, b) {
    var c = (b = b || !1) ? Sandbox : _Tf,
      d;
    for (d in a._Ek._Fm._bf) a._Ek._Fm._bf.hasOwnProperty(d) && (c._E9._Fm._bf[d] = "undefined" === typeof _h8._Fm._bf[d] ? a._Ek._Fm._bf[d] : _h8._Fm._bf[d], !b && "undefined" != typeof Sandbox._E9._Fm._bf[d] && (c._E9._Fm._bf[d] = Sandbox._E9._Fm._bf[d]), _Mf._Md.addPageToEventsMap(c._E9._Fm._bf[d]._ff,
      c._E9._Fm._bf[d]));
    for (d in _h8._Fm._bf) _h8._Fm._bf.hasOwnProperty(d) && !(d in a._Ek._Fm._bf) && (c._E9._Fm._bf[d] = _h8._Fm._bf[d], !b && "undefined" != typeof Sandbox._E9._Fm._bf[d] && (c._E9._Fm._bf[d] = Sandbox._E9._Fm._bf[d]), _Mf._Md.addPageToEventsMap(c._E9._Fm._bf[d]._ff, c._E9._Fm._bf[d]))
  },
  buildAppPresenters: function (a, b) {
    var c = (b = b || !1) ? Sandbox : _Tf,
      d;
    for (d in a._a) a._a.hasOwnProperty(d) && a._a[d] != a._a._Un && (c._E9._Y3[d] = "undefined" === typeof _h8._a[d] ? a._a[d] : _h8._a[d], !b && "undefined" != typeof Sandbox._E9._Y3[d] && (c._E9._Y3[d] = Sandbox._E9._Y3[d]))
  },
  buildGamePresenters: function (a, b) {
    var c = (b = b || !1) ? Sandbox : _Tf,
      d;
    for (d in a._a._Un._8l) a._a._Un._8l.hasOwnProperty(d) && (c._E9._Un._8l[d] = "undefined" === typeof _h8._a._Un._8l[d] ? a._a._Un._8l[d] : _h8._a._Un._8l[d], !b && "undefined" != typeof Sandbox._E9._Un._8l[d] && (c._E9._Un._8l[d] = Sandbox._E9._Un._8l[d]));
    for (d in a._a._Un.__0) a._a._Un.__0.hasOwnProperty(d) && (c._E9._Un.__0[d] = "undefined" === typeof _h8._a._Un.__0[d] ? a._a._Un.__0[d] : _h8._a._Un.__0[d], !b && "undefined" != typeof Sandbox._E9._Un.__0[d] && (c._E9._Un.__0[d] = Sandbox._E9._Un.__0[d]));
    c._E9._Un.__b = c._E9._Un.__b || ("undefined" === typeof _h8._a._Un.__b ? a._a._Un.__b : _h8._a._Un.__b);
    c._E9._Un.BlackJackGameManager = c._E9._Un.BlackJackGameManager || ("undefined" === typeof _h8._a._Un.BlackJackGameManager ? a._a._Un.BlackJackGameManager : _h8._a._Un.BlackJackGameManager);
    c._E9._Un.BaccaratGameManager = c._E9._Un.BaccaratGameManager || ("undefined" === typeof _h8._a._Un.BaccaratGameManager ? a._a._Un.BaccaratGameManager : _h8._a._Un.BaccaratGameManager);
    c._E9._Un.PaigowGameManager = c._E9._Un.PaigowGameManager || ("undefined" === typeof _h8._a._Un.PaigowGameManager ? a._a._Un.PaigowGameManager : _h8._a._Un.PaigowGameManager);
    c._E9._Un.CrapsGameManager = c._E9._Un.CrapsGameManager || ("undefined" === typeof _h8._a._Un.CrapsGameManager ? a._a._Un.CrapsGameManager : _h8._a._Un.CrapsGameManager);
    if (!b && "undefined" != typeof Sandbox._E9._Un.__b) c._E9._Un.__b = Sandbox._E9._Un.__b;
    c._E9._Un._83 = "undefined" === typeof _h8._a._Un._83 ? a._a._Un._83 : _h8._a._Un._83;
    if (!b && "undefined" != typeof Sandbox._E9._Un._83) c._E9._Un._83 = Sandbox._E9._Un._83
  },
  buildAppBehaviors: function (a, b) {
    var c = (b = b || !1) ? Sandbox : _Tf,
      d;
    for (d in a._Ek._2s._bf) a._Ek._2s._bf.hasOwnProperty(d) && (c._E9._2s._bf[d] = "undefined" === typeof _h8._2s._bf[d] ? a._Ek._2s._bf[d] : _h8._2s._bf[d], !b && "undefined" != typeof Sandbox._E9._2s._bf[d] && (c._E9._2s._bf[d] = Sandbox._E9._2s._bf[d]))
  },
  buildGameBehaviors: function (a, b) {
    var c = (b = b || !1) ? Sandbox : _Tf,
      d;
    for (d in a._Ek._2s._o4) a._Ek._2s._o4.hasOwnProperty(d) && (c._E9._2s._o4[d] = "undefined" === typeof _h8._2s._o4[d] ? a._Ek._2s._o4[d] : _h8._2s._o4[d], !b && "undefined" != typeof Sandbox._E9._2s._o4[d] && (c._E9._2s._o4[d] = Sandbox._E9._2s._o4[d]));
    for (d in a._Ek._2s._3k) a._Ek._2s._3k.hasOwnProperty(d) && (c._E9._2s._3k[d] = "undefined" === typeof _h8._2s._3k[d] ? a._Ek._2s._3k[d] : _h8._2s._3k[d], !b && "undefined" != typeof Sandbox._E9._2s._3k[d] && (c._E9._2s._3k[d] = Sandbox._E9._2s._3k[d]))
  },
  buildFactories: function (a, b) {
    var c = (b = b || !1) ? Sandbox : _Tf,
      d;
    for (d in a.Factories._Un) a.Factories._Un.hasOwnProperty(d) && (c._E9.Factories._Un[d] = "undefined" === typeof _h8.Factories._Un[d] ? a.Factories._Un[d] : _h8.Factories._Un[d], !b && "undefined" != typeof Sandbox._E9.Factories._Un[d] && (c._E9.Factories._Un[d] = Sandbox._E9.Factories._Un[d]))
  }
};
var Sandbox = {
  _E9: {},
  loadModules: function () {
    for (var a in _Xl) if (_Xl.hasOwnProperty(a)) _Xl[a]._hj = new _Xl[a]._co, _Xl[a]._hj.extractClasses(), this.registerPages(a), this.updateLocaleForModule(a, _Tf._0l._41)
  },
  initializeModules: function () {
    for (var a in _Xl) _Xl.hasOwnProperty(a) && (_Tf._hb.buildFactories(_Xl[a], !0), _Tf._hb.buildAppBehaviors(_Xl[a], !0), _Tf._hb.buildAppPresenters(_Xl[a], !0), _Tf._hb.buildGameBehaviors(_Xl[a], !0), _Tf._hb.buildGamePresenters(_Xl[a], !0), _Xl[a]._hj.initialize(), _Xl[a]._hj.subscribeToEvents());
    _Mf._ks.emitAsync(_Ag._fj, null)
  }
};
Sandbox.registerPages = function (a) {
  if (_Xl[a]._0l._N1._ff) {
    _Tf._hb.buildAppEvents(_Xl[a], !0);
    var b = "",
      c, d = _Xl[a]._0l._N1._ff,
      e;
    for (e in d) if (d.hasOwnProperty(e)) {
      b = "";
      c = e.split("_");
      for (var f = 0; f < c.length; f++) b += c[f][0] + c[f].substr(1).toLowerCase();
      _Mf._Md.addPageToEventsMap(d[e], Sandbox._E9._Fm._bf[b], _Xl[a]._0l._gc ? _Xl[a]._0l._gc._jr : null)
    }
  }
};
Sandbox.updateLocaleForModule = function (a) {
  _Xl[a]._h8._wc._an && _Xl[a]._h8._wc._an.init();
  _Xl[a]._h8._0l._Kj && _Xl[a]._h8._0l._Kj.init()
};
var SandBoxObject = {
  _hj: null,
  _co: null,
  _0l: {
    _N1: {
      _ff: {}
    },
    _xj: {}
  },
  _41: {
    _po: {}
  },
  Factories: {
    _Un: {}
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
  _A: {},
  _h8: {
    _0l: {},
    _wc: {}
  }
}, _Mf = {
  _ks: null,
  _20: {
    _W6: null,
    _wf: null,
    _f0: null,
    _ad: null,
    _qr: null
  },
  _L2: null,
  _Ta: null,
  _Up: null,
  _X1: null,
  _q1: null,
  _Md: null,
  PopupManagerInstance: null,
  _b1: null,
  init: function (a) {
    a && _Tf._Hc._Og.setPlatform(a);
    this._ks = new _ks;
    this._Md = new _Tf._xp;
    this._Md.loadMainFilesAndDesign();
    this.PopupManagerInstance = new _Tf.PopupManager;
    this._b1 = new _Tf._h2;
    var b = this;
    window.onerror = function (a, d, e) {
      return b.runtimeErrorHandler(a, d, e)
    }
  },
  runtimeErrorHandler: function (a, b, c) {
    if ("undefined" === typeof a && "undefined" === typeof b && "undefined" === typeof c) return !_Tf._0l._53;
    var d = "";
    if ("string" === typeof a) {
      if (/jqjsp/.test(b) || "undefined" === typeof b || "undefined" === b || !c) return !1;
      d = "[ERROR] {0} [FILE] {1} [LINE] {2}".format(a,
        b, c)
    } else if ("object" === typeof a) {
      if (!a.srcElement) return !1;
      d += a.srcElement;
      if (/HTMLScriptElement/.test(d)) return !1
    } else return !1;
    return this._q2(d, !0)
  },
  _q2: function (a, b) {
    b = b || !1;
    _Tf._0l._Y1 && this._20._qr && this._20._qr.send(_Tf._0r._Tr._le, {
      message: a,
      device: _Tf._Hc._Og ? _Tf._Hc._Og.getPlatform() : "unknown"
    });
    if (!b || !_Tf._N1 || !_Tf._41) return !_Tf._0l._53;
    if (_Tf._N1 && _Tf._41) try {
      var c = _Tf._41.$("_e5._w6");
      "undefined" != typeof window.WebPoker && (c = a + " " + c);
      _Tf._Hc._Og.isWindowsPhone() ? _Tf._N1._zh("", c, null,
        _Tf._41.$("_j3._76")) : _Tf._Hc._Og.isAndroid() || _Tf._Hc._Og.isiOS() ? _Tf._N1.__i("", c, function () {
          navigator && navigator.app && "function" === typeof navigator.app.exitApp && navigator.app.exitApp()
        }, null, _Tf._41.$("_j3._D"), _Tf._41.$("_j3._76")) : _Tf._N1.__i("", c, function () {
          location.reload()
        }, null, _Tf._41.$("_41._u6"), _Tf._41.$("_j3._76"))
    } catch (d) {
      this.showDefaultPopupWithText(a)
    }
    return !_Tf._0l._53
  },
  startApplication: function () {
    if (_Tf._Hc._Og.isWebApplication("facebook")) _Mf._Md.changePage(_Tf._0l._N1._ff._fq);
    else {
      var a = _h8._0l.START_PAGE_FOR_APPLICATION || _Tf._0l._N1._ff._W5;
      _Mf._Md.changePage(a);
      a === _Tf._0l._N1._ff._fq && _Mf._Md.clearHistoryStack();
      _Mf._ks.emit(_Ag._3r, null)
    }
  },
  configureDesign: function () {
    this._Ta = new _Tf._a._Vb;
    this._Ta.initDesign()
  },
  begin: function () {
    _h8._0l._Kj.init();
    _h8._wc._an.init();
    _Tf._N1.showOrientationDialog();
    _Tf._hb.resetAppBridge(_Tf);
    _Tf._hb.resetAppBridge(Sandbox);
    Sandbox.loadModules();
    Sandbox.initializeModules();
    _Tf._hb.buildAppEvents(_Tf);
    _Tf._hb.buildAppBehaviors(_Tf);
    _Tf._hb.buildAppPresenters(_Tf);
    this._Md.applyPagesInEventsMap();
    this._Md._B6();
    this._Md.loadTemplatesForCaching();
    this.PopupManagerInstance.init();
    this._b1.init();
    this.checkConnectionConfig() && (this.createInstances(), this.startEventEmitter(), this._L2.getNodeProxyAddress(), _Mf._b1.init())
  },
  checkConnectionConfig: function () {
    if (!_Tf._0l._xj) {
      var a = _Tf._0l._N1;
      this._pj("Connection config has not been set!", a._ff._1o, a._0m, a._o8, !1);
      return !1
    }
    return !0
  },
  createInstances: function () {
    this.createMasterProxyInstance();
    this._L2 = new _Tf._E9._Y3._je;
    this._q1 = new _Tf._E9._Y3._Z9;
    this._Up = new _Tf._E9._Y3._n8;
    this._X1 = new _Tf._E9._Y3._kj;
    if (_h8._0l.useCanvasFields) _Mf.CanvasFieldInstance = new _Tf._Hc.CanvasField
  },
  createMasterProxyInstance: function () {
    var a = _Tf._0l._xj;
    if (a._m7) {
      var b = new _Tf._M4._9._55,
        c = new _Tf._M4._A3._55(a._m7);
      this._20._Wo = new _Tf._M4._20._55(a._m7, c, b)
    }
  },
  isMasterProxyInstanceExists: function () {
    return "undefined" !== typeof this._20._Wo
  },
  createLoggerInstance: function () {
    if (_Tf._0l._Y1) {
      var a = _Tf._0l._xj;
      if (a) {
        var b = new _Tf._M4._9._uh,
          c = new _Tf._M4._A3._Kf(a.__5);
        this._20._qr = new _Tf._M4._20._uh(a.__5, c, b)
      }
    }
  },
  startEventEmitter: function () {
    _Mf._ks.addListener(_Ag._s4, function () {
      this._km()
    }, this._L2);
    _Mf._ks.addListener(_Ag._Cb, function (a) {
      a ? _Tf._Hc._L8.disableSound() : _Tf._Hc._L8.enableSound()
    }, null);
    _Mf._ks.addListener(_Ag._P3, function () {
      this._ih()
    }, this._L2);
    _Mf._ks.addListener(_Ag.__7, function () {
      this._N9()
    }, this._L2);
    _Mf._ks.addListener(_Ag._f4, function (a, b) {
      this._l1({
        success: !0,
        auth: a
      }, {
          provider: b
        })
    },
      this._L2);
    _Mf._ks.addListener(_Ag._Pg, function () {
      this.view.prepareToLogin()
    }, this._L2);
    _Mf._ks.addListener(_Ag._sc, function (a) {
      this.view._b2(a)
    }, this._L2)
  },
  refresh: function (a) {
    var b = _Tf._0l._N1;
    this._pj(a, b._ff._fq, b._y1, b._j1, !0);
    _Mf._L2._ub() ? this._L2._Fd(!1) : this._L2._Fd(!0)
  },
  refreshDueToConnectionErrors: function (a) {
    var b = _Tf._0l._N1;
    this._pj(a, b._ff._1o, b._0m, b._o8, !1);
    this._L2.model.setNeedRedirectAfterRecconect(!0);
    this._m1();
    this._Ob();
    this._x4(!0, a)
  },
  refreshDueToAuthenticationErrors: function (a) {
    var b = _Tf._0l._N1;
    this._m1();
    this._Ob();
    this._L2._Fd(!0);
    this._x4(!1);
    this._pj(a, b._ff._fq, b._y1, b._j1, !1)
  },
  loginDueToAuthenticationErrors: function (a) {
    this._L2.model.hasUserData() ? (this._m1(), this._Ob(), this._L2.model.setNeedRelogin(!0), this._L2.model.setNeedRedirectAfterRecconect(!0), this._L2._Fd(!0), this._x4(!1)) : this.refreshDueToAuthenticationErrors(a)
  },
  end: function () {
    this._m1();
    this._Ob();
    this._L2._Fd(!0);
    this._x4(!1);
    this._Md.changePage(_Tf._0l._N1._ff._fq)
  },
  _Ob: function () {
    this._q1._m3()
  },
  _m1: function () {
    for (var a in this._20) this._20.hasOwnProperty(a) && this._20[a] && this._20[a].clear()
  },
  _x4: function (a, b) {
    this._L2 && !a && (this._L2._Q7(), a ? this._L2._Fj(b) : this._L2._j3())
  },
  _pj: function (a, b, c, d, e) {
    this._Md && this._Md.refresh(a, b, c, d, e)
  },
  showDefaultPopupWithText: function (a) {
    var b = jQuery("<div/>", {
      id: "default-popup-with-text-wrapper",
      "class": "default-popup-with-text-wrapper",
      text: a
    });
    b.css({
      width: "80%",
      top: "25%",
      left: "10%",
      possition: "relative",
      position: "relative",
      background: "#551365",
      border: "2px solid #fab17a",
      "border-radius": "0.5em",
      padding: "2.3em",
      "margin-left": "-2.3em",
      "margin-top": "-2.3em",
      "text-align": "center"
    });
    a = jQuery("<div/>", {
      id: "default-popup-with-text",
      "class": "default-popup-with-text",
      html: b
    });
    a.css({
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      possition: "absolute",
      "z-index": "99999"
    });
    var c = jQuery("<div/>", {
      id: "default-button",
      text: _Tf._41.$("_41._u6"),
      onclick: "location.reload"
    });
    c.css({
      width: "15em",
      height: "2em",
      margin: "0 auto",
      "margin-top": "2em",
      "padding-top": "1em",
      background: "#20a1d5",
      border: "2px solid #fab17a",
      "border-radius": "0.5em",
      cursor: "pointer"
    });
    b.append(c);
    b = $("div[data-role='page']");
    b.css("height", "100%");
    b.html(a)
  }
}, _ks = function () {
  this.events = {}
};
_ks.prototype.events = {};
_ks.prototype.addListener = function (a, b, c) {
  this.events[a] || (this.events[a] = []);
  this.events[a].push({
    handler: b,
    scope: c || null
  })
};
_ks.prototype.removeListeners = function (a, b) {
  if (this.events[a]) if ("function" != typeof b) delete this.events[a];
  else {
    for (var c = 0, d = this.events[a].length, e = [], f = 0; f < d; f++) this.events[a][f] && (b(this.events[a][f].scope) ? (this.events[a][f] = null, c++) : e.push(this.events[a][f]));
    this.events[a] = e
  }
};
_ks.prototype.emit = function (a, b) {
  if (!this.events[a]) return !0;
  var c, d = this.events[a],
    e = !0;
  for (c = 0; c < d.length; c++) if (d[c] && d[c].handler) try {
    if (!1 === d[c].handler.apply(d[c].scope || this, b)) {
      e = !1;
      break
    }
  } catch (f) { }
  return e
};
_ks.prototype.emitAsync = function (a, b) {
  if (!this.events[a]) return !0;
  var c, d = this.events[a],
    e = _Tf._hr;
  for (c = 0; c < d.length; c++) d[c] && d[c].handler && e._Yp(this.emitAsyncHandler, [c, a, d[c], b], this, !0);
  return !0
};
_ks.prototype.emitAsyncHandler = function (a, b, c, d) {
  try {
    c.handler.apply(c.scope || this, d)
  } catch (e) { }
};
_Tf._Hc.SupportedFeaturesChecker = {
  isLocalStorageAvailable: function () {
    try {
      return "localStorage" in window && null !== window.localStorage
    } catch (a) {
      return !1
    }
  }
};
_Tf._41 = {
  _po: {},
  currentLocale: _Tf._0l._41,
  tmpLocale: "",
  $: function (a, b) {
    if ("undefined" == typeof this._po) return "";
    "undefined" === typeof b && (b = null);
    var c = "",
      d = a;
    if ("string" === typeof a) {
      d = a.split(".");
      if (0 == d.length) return "";
      1 == d.length ? d = d[0] : (c = d[0], d = d[1])
    }
    var e;
    if (c) {
      if ("object" != typeof this._po[c]) if ("string" === typeof b) this._po[c] = {};
      else return "";
      e = this._po[c][d];
      "string" === typeof b && (this._po[c][d] = b, e = e || "")
    } else e = this._po[d], "string" === typeof b && (this._po[d] = b, e = e || "");
    return "undefined" === typeof e ? "" : e
  },
  init: function () {
    var a = this.getKnownLocaleAction();
    this.currentLocale = a ? a : _Tf._0l._41;
    this._po = _41[this.currentLocale];
    this._Zc()
  },
  getLocale: function () {
    return this._po
  },
  format: function (a, b) {
    return this.$(a).format(b)
  },
  change: function (a) {
    _Tf._Ek._29.showPageLoadingMessage();
    _Tf._0l.isSaveLocaleOnDevice && _Tf._Hc.SupportedFeaturesChecker.isLocalStorageAvailable() && localStorage.setItem("locale", a);
    this.tmpLocale = a;
    _Mf._20._wf.send(_Tf._0r._Tr._49, {
      locale: a
    })
  },
  getKnownLocaleAction: function () {
    return !_Tf._Hc.SupportedFeaturesChecker.isLocalStorageAvailable() ? null : localStorage.getItem("locale") ? localStorage.getItem("locale") : null
  },
  hasLocale: function (a) {
    return "undefined" != typeof this._po && a in _Tf._0l._8h
  },
  _2e: function () {
    var a = this.tmpLocale ? this.tmpLocale : this.currentLocale;
    if (null === this.tmpLocale || "object" != typeof this._po) return !1;
    if (a == this.currentLocale) return !0;
    this._po = _41[a];
    this.tmpLocale = null;
    this.currentLocale = a;
    this._Zc();
    return !0
  },
  _Zc: function () {
    if ("en" != this.currentLocale) this._po = this.diffLocale(_41.en, this._po);
    document.documentElement.setAttribute("lang",
      this.currentLocale)
  },
  diffLocale: function (a, b) {
    var c;
    if ("object" === typeof a || Array.isArray(a)) {
      c = {};
      for (var d in a) c[d] = this.diffLocale(a[d], b && b[d] ? b[d] : null)
    } else c = b ? b : a;
    return c
  },
  _Ip: function () {
    !_Mf._L2._oa() && _Xl.RememberMe && _Xl.RememberMe._hj && _Xl.RememberMe._hj.rememberLocaleAction(this.currentLocale);
    $.mobile.loadingMessage = this.$("_a5");
    _Mf._ks.emit(_Ag._Ah, [this.currentLocale]);
    _h8._0l._Kj.init();
    _h8._wc._an.init();
    _me && _me.currentLocale(this.currentLocale);
    _Mf._Md.fillPageLocale(_Mf._Md._oo());
    _Tf._N1._ab(_Tf._0l._N1._Wp, _Tf._41.$("_e5._H1"))
  },
  applyNewLocale: function (a) {
    if (!this._2e()) return _Tf._Ek._29.hidePageLoadingMessage(), !1;
    a && !_Tf._0l.isUseDeviceLocale && this.fillText(a.convertersXML);
    this._Ip();
    _Tf._Ek._29.hidePageLoadingMessage();
    return !0
  },
  _Kd: function (a) {
    return this.applyNewLocale(a)
  },
  fillText: function (a) {
    try {
      var b = $.parseXML(a);
      $(b).find("converter").each(function (a, b) {
        $(b).find("item").each(function (a, b) {
          var c = $(b),
            d = /(\w+)\.([\w0-9-]+)\s?/g,
            e = [];
          if ("" !== c.attr("key")) switch (e = d.exec(c.attr("key")), e[3] = c.attr("text"), e[5] = c.attr("format"), e[1]) {
            case "mt":
              _Tf._41.$("_l3." + _Tf._dc.MoneyType._O3(e[2]), e[3]);
              _Tf._41.$("_z0." + _Tf._dc.MoneyType._O3(e[2]), e[5].replace("%1", "{0}"));
              break;
            case "pa":
              _Tf._41.$("_6." + _Tf._dc.PlayerAction._O3(e[2]), e[3]);
              break;
            case "gt":
              _Tf._41.$("_B6." + _Tf._dc.GameType._O3(e[2]), e[3]);
              break;
            case "ts":
              _Tf._41.$("_t." + _Tf._dc.TournamentState._O3(e[2]), e[3]);
              break;
            case "tt":
              _Tf._41.$("_b6." + _Tf._dc.TournamentType._O3(e[2]), e[3]);
              break;
            case "pt":
              _Tf._41.$("_c8." + _Tf._dc.PotType._O3(e[2]), e[3])
          }
        })
      })
    } catch (c) {
      _Mf._20._qr && _Mf._20._qr.send(_Tf._0r._Tr._le, {
        message: c,
        device: _Tf._Hc._Og ? _Tf._Hc._Og.getPlatform() : "unknown"
      })
    }
  }
};