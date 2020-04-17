_Tf._0l._xj = {
  _af: {
    address: "https://test.vegasgames.com:7443/poker/",
    __j: "message",
    _La: "updates",
    _6l: "presence",
    _25: "create_token",
    _61: 2,
    _p: 3E4
  },
  _m7: {
    address: "https://test.vegasgames.com/html5service/html5poker-services/",
    _Vq: "loadrotation"
  },
  _dl: {
    address: "https://test.vegasgames.com/html5service/html5poker-services/avatars/index/",
    _eo: "list",
    __8: "assign",
    _0c: "https://test.vegasgames.com/dav/avatars/{0}.png"
  },
  _4l: {
    address: "https://test.vegasgames.com/html5service/html5poker-services/auth/index/",
    controllerGetAuth: "get-auth"
  },
  __5: {
    address: "https://test.vegasgames.com/html5service/html5poker-services/logger"
  },
  _Eb: 1E3
};
_Tf._0l._A._Nc = {
  path: "design/" + _Tf._0l._h8 + "/images/",
  mapTag: "tpl",
  _0q: "design/" + _Tf._0l._h8 + "/images/player.png"
};
_Tf._0l._A._xb = {
  pathEvents: "design/" + _Tf._0l._h8 + "/sounds/",
  pathActions: "design/" + _Tf._0l._h8 + "/sounds/actions/"
};
var customVar = false;
var playOnce = true;
var latestChips = 0;
var addOnce = true;
CustomKeyboard = new function () {
  this.show = ko.observable(false);

  this.setClass = function (d, e) {
    window.addEventListener('keyboardDidHide', () => {
       this.show(false);
    });
  }.bind(this);

  this.getTypeInput = function (inputId) {

    if (inputId == 'reg-input-password') {
      $('.scroll-wrapper-child').scrollTop(50);
      this.show(true);
    }
    if (inputId == 'reg-input-password-ver') {
      $('.scroll-wrapper-child').scrollTop(100);
      this.show(true);
    }
    if (inputId == 'reg-input-eMail') {
      $('#form-registration').scrollTop(500);
      this.show(true);
    }

    if (inputId == 'registration-button') {
      $('#form-registration').submit();
      this.show(false);
    }

  }.bind(this);
}


_8n = function (a, b) {
  this.x = a;
  this.y = b
};
_8n.prototype = {
  x: 0,
  y: 0,
  clone: function () {
    return new _8n(this.x, this.y)
  },
  plus: function  (a) {
    this.x += a.x;
    this.y += a.y
  },
  sub: function (a) {
    this.x -= a.x;
    this.y -= a.y
  },
  _L6: function (a) {
    return !(this.x != a.x || this.y != a.y)
  }
};
Position = function (a) {
  a = a || {};
  this.width = a.width || 0;
  this.height = a.height || 0;
  this.top = a.top || 0;
  this.left = a.left || 0;
  this.angle = a.angle || 0
};
Position.prototype = {
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  angle: 0,
  clone: function () {
    return new Position(this._Pp())
  },
  _Pp: function () {
    return {
      width: this.width,
      height: this.height,
      top: this.top,
      left: this.left,
      angle: this.angle
    }
  },
  _L6: function (a) {
    return !(this.x != a.x || this.y != a.y)
  }
};
_Tf._hr._Yp = function (a, b, c, d) {
  d = d || !1;
  (window.setZeroTimeout || window.setTimeout)(function () {
    c ? d ? a.apply(c, b) : a.call(c, b) : a(b)
  }, 0)
};
_Tf._hr.extendObject = function (a, b) {
  if (!("object" != typeof a || "object" != typeof b)) for (var c in a) a.hasOwnProperty(c) && ("object" != typeof a[c] ? b[c] = a[c] : ("undefined" === typeof b[c] && (b[c] = {}), _Tf._hr.extendObject(a[c], b[c])))
};
_Tf._hr.extendFunction = function (a, b) {
  return function () {
    a.apply(this, arguments);
    b && "function" === typeof b && b.apply(this, arguments)
  }
};
_Tf._hr.overrideFunction = function (a, b) {
  return b && "function" === typeof b ? b : a
};
_Tf._Hc._ad = {
  _bn: function (a, b, c, d, e) {
    if (a) {
      var f = new Image;
      f.onload = function () {
        b && (b[c] = f);
        "function" === typeof e && e(a, f.src)
      };
      f.src = _Tf._0l._xj._dl._0c.format(a) + (d ? "?" + (new Date).getTime() : "")
    }
  },
  loadAvatarByUrl: function (a, b, c, d, e) {
    if (a) {
      var f = new Image;
      f.onload = function () {
        d && (d[e] = f);
        "function" === typeof c && c(a)
      };
      f.src = a + (b ? "?" + (new Date).getTime() : "")
    }
  },
  _u2: function (a, b) {
    for (var c = [], d = null, e = 0, f = [], g = 0; g < a.length; g++) d = new Image, d.onload = function () {
      e++
    }, d.onerror = function () {
      e++
    }, d.onabort = function () {
      e++
    },
      d.src = a[g], c.push(d);
    var h = 0,
      j = setInterval(function () {
        if (e >= a.length || 120 < h) {
          clearInterval(j);
          for (var d = 0; d < c.length; d++) c[d].width && c[d].height && f.push(c[d]);
          "function" === typeof b && b(f)
        }
        h++
      }, 1E3)
  }
};
var EventType = {
  _5j: "pagecreate",
  _Ua: "pagehide",
  _vb: "pageinit",
  _0g: "pageshow",
  _l9: "pagebeforeshow",
  _qc: ("ontouchstart" in document.documentElement ? "touchstart" : "click") + " poker-click",
  _Ls: "poker-click",
  _db: ("ontouchstart" in document.documentElement ? "touchstart" : "click") + " so-event-on-bottom",
  _Fa: "so-event-on-top",
  _Ul: "change",
  _28: "keyup",
  _Qb: "swipeleft",
  _ms: "swiperight"
}, _Ag = {
  _3r: "application-ready",
  _U4: "w.c.c-d",
  _H2: "w.c.c-r",
  _T5: "w.c.c-rg",
  _ki: "w.c.c-l-out",
  _J3: "w.c.c-l-in",
  __7: "online-periodic",
  _vk: "w.c.c-signing-in",
  _f4: "client-external-login",
  _Pg: "client-before-external-login",
  _sc: "client-cancel-external-login",
  _eh: "client-external-share",
  _tn: "client-external-invite",
  _Ni: "client-external-buy-chips",
  _7k: "client-external-like",
  _u: "jackpot",
  _76: "reserve-seat-not-enough-money",
  _c0: "layout-resize",
  _Nj: "game-layout-changed",
  _W9: "game-canvas-clicked",
  _Ah: "locale-changed",
  _6f: "select-purchase-item",
  _Sm: "confirm-purchase-item",
  __4: "buy-gift-item",
  _uk: "level-up",
  _em: "protocol-message",
  _9a: "table-register-chair",
  _Z0: "table-prepare-chair",
  _Yj: "table-chair-ready",
  _pp: "w.c.g.g-g",
  _Cb: "w.c.g.g-d",
  _Q9: "w.c.g.g-start",
  _f8: "w.c.g.g-stop",
  _Tk: "g-first-game-state",
  _Qk: "g-high-cards",
  _Oj: "g-low-cards",
  _sl: "g-stand-up",
  __c: "g-client-cards",
  _e7: "g-active-actions",
  _O8: "g-call-funds",
  _e8: "g-open-chat",
  _Df: "g-send-chat",
  _uq: "g-need-redraw-chair",
  _u7: "g-need-clear-canvas",
  _vo: "g-in-deal-status-changed",
  _lj: "g-pots",
  _r1: "t-message-wait-button",
  _rq: "w.i.r.p-c",
  _s4: "a-n-a",
  _P3: "m-o-t",
  _Zo: "a-t-c",
  _gq: "s-for-a",
  _Mg: "s-for-e",
  _fj: "design-load-css",
  _0g: "page-show",
  _lj: "game-pots",
  _Vi: "game-type-change"
};
_Tf._dc.ResourceType = {
  _K1: 0,
  _An: 1
};
_Tf._dc.AutoAction = {
  __f: 30,
  _6d: 31,
  _kh: 32,
  _mk: 33,
  _D4: 34,
  _Jr: 40,
  _x2: 41,
  _mi: 42,
  _fn: 43,
  _B7: 44,
  _v8: 50,
  _vp: 51
};
_Tf._dc._W2 = {
  _Dg: ["c", "d", "h", "s"],
  _ip: "2,3,4,5,6,7,8,9,T,J,Q,K,A,Jk".split(","),
  _G7: "back",
  _rj: "backStud",
  _Al: "backL",
  _c7: "backBj",
  _C8: function (a) {
    a = parseInt(a);
    return 0 > a ? this._G7 : this._Dg[a % 4] + this._ip[(a - a % 4) / 4]
  },
  getCardsByCodesString: function (a) {
    if (!a) return [];
    for (var a = a.split(";"), b = [], c = 0; c < a.length; c++) b.push({
      card: this._C8(a[c])
    });
    return b
  },
  getCardsValuesByCodesString: function (a) {
    if (!a) return [];
    var a = a.split(";"),
      b = [],
      c, d;
    for (c = 0; c < a.length; c++) d = this._C8(a[c]).substr(1, 1), b.push("T" === d ? "10" : d);
    return b
  }
};
_Tf._dc.CardState = {
  _08: 0,
  _vc: 1,
  _4g: 2,
  _5r: 3,
  _2o: 4,
  _x2: 5
};
_Tf._dc.ChipState = {
  _bk: 0,
  _or: 1,
  _D9: 2
};
_Tf._dc.CommandType = {
  _jf: 0,
  _Xg: 1
};
_Tf._dc.GameType = {
  _dk: 72,
  _1: 74,
  _6e: 79,
  _u9: 80,
  _Ll: 83,
  _zj: 84,
  _Ak: 86,
  _c: 71,
  _d4: 75,
  isBlackJack: function (a) {
    return a === this._1
  },
  isPaigow: function (a) {
    return a === this._c
  },
  isCraps: function (a) {
    return a === this._d4
  },
  isBaccarat: function (a) {
    return a === this._Ak
  },
  _rk: function (a) {
    return a === this._dk
  },
  _qo: function (a) {
    return a === this._6e || a === this._u9
  },
  _98: function (a) {
    return a === this._Ll || a === this._zj
  },
  isHighLow: function (a) {
    return a === this._u9 || a === this._zj
  },
  toString: function (a) {
    var b = "";
    switch (a) {
      case this._u9:
        b =
          "omaha-hl";
        break;
      case this._6e:
        b = "omaha";
        break;
      case this._Ll:
        b = "stud";
        break;
      case this._zj:
        b = "stud-hl";
        break;
      case this._dk:
        b = "holdem";
        break;
      case this._1:
        b = "blackjack";
        break;
      case this._Ak:
        b = "baccarat";
        break;
      case this._c:
        b = "paigow";
        break;
      case this._d4:
        b = "craps"
    }
    return b
  },
  _O3: function (a) {
    var b = 0;
    switch (a) {
      case "omaha-hl":
        b = this._u9;
        break;
      case "stud":
        b = this._Ll;
        break;
      case "omaha":
        b = this._6e;
        break;
      case "stud-hl":
        b = this._zj;
        break;
      case "holdem":
        b = this._dk;
        break;
      case "blackjack":
        b = this._1;
        break;
      case "baccarat":
        b = this._Ak;
        break;
      case "paigow":
        b = this._c;
        break;
      case "craps":
        b = this._d4
    }
    return b
  }
};
_Tf._dc.MaxPlayerCards = {
  _f2: 2,
  _Sp: 4,
  _b9: 7,
  count: function (a) {
    return _Tf._dc.GameType._rk(a) ? this._f2 : _Tf._dc.GameType._qo(a) ? this._Sp : this._b9
  }
};
_Tf._dc.PlayerAction = {
  _x2: 1,
  _B7: 2,
  _pq: 3,
  _Fe: 4,
  _id: 5,
  _jd: 6,
  _S5: 7,
  _bk: 8,
  _c8: 9,
  _3b: 10,
  _Vj: 11,
  _M6: 12,
  _Vo: 13,
  _22: 14,
  _I3: 15,
  _jl: 16,
  _1r: 17,
  _p9: 18,
  _Dn: 24,
  _B9: 25,
  _P9: 26,
  _O7: 27,
  _30: 28,
  _04: 29,
  _Y8: 30,
  _kg: 31,
  _v7: 32,
  _ml: 38,
  _lp: 39,
  _K4: 42,
  _dp: 33,
  _c1: 34,
  _32: 35,
  _fm: 36,
  _Mq: 37,
  _Y7: 40,
  _c4: 41,
  _jq: 43,
  _t9: 44,
  _t0: 45,
  _Eg: 46,
  _dh: 47,
  _72: 48,
  _Bk: 52,
  _51: 53,
  _O3: function (a) {
    var b = 0;
    switch (a) {
      case "fold-show":
        b = this._1r;
        break;
      case "wait-bb":
        b = this._22;
        break;
      case "muck":
        b = this._Vj;
        break;
      case "check":
        b = this._B7;
        break;
      case "wait":
        b = this._M6;
        break;
      case "bring-in":
        b = this._id;
        break;
      case "time":
        b = this._I3;
        break;
      case "small-blind":
        b = this._jd;
        break;
      case "hide-winning":
        b = this._jl;
        break;
      case "ante":
        b = this._Fe;
        break;
      case "big-blind":
        b = this._S5;
        break;
      case "sit-out":
        b = this._Vo;
        break;
      case "call":
        b = this._pq;
        break;
      case "raise":
        b = this._c8;
        break;
      case "fold":
        b = this._x2;
        break;
      case "show-cards":
        b = this._3b;
        break;
      case "bet":
        b = this._bk;
        break;
      case "bj-complete-bet":
        b = this._Dn;
        break;
      case "bj-bet":
        b = this._B9;
        break;
      case "bj-hit":
        b = this._P9;
        break;
      case "bj-stand":
        b = this._O7;
        break;
      case "bj-double":
        b = this._30;
        break;
      case "bj-split":
        b = this._04;
        break;
      case "bj-accept-insurance":
        b = this._Y8;
        break;
      case "bj-decline-insurance":
        b = this._kg;
        break;
      case "bj-clear-bet":
        b = this._v7;
        break;
      case "bj-dealer-open-card":
        b = this._ml;
        break;
      case "bj-dealer-hit":
        b = this._lp;
        break;
      case "bj-triple":
        b = this._K4;
        break;
      case "baccarat-player-bet":
        b = this._dp;
        break;
      case "baccarat-dealer-bet":
        b = this._c1;
        break;
      case "baccarat-clear-bet":
        b = this._fm;
        break;
      case "baccarat-tie-bet":
        b = this._32;
        break;
      case "baccarat-complete-bet":
        b = this._Mq;
        break;
      case "baccarat-player-pair-bet":
        b = this._Y7;
        break;
      case "baccarat-dealer-pair-bet":
        b = this._c4;
        break;
      case "paigow-bet":
        b = this._jq;
        break;
      case "paigow-deal":
        b = this._t9;
        break;
      case "paigow-clear":
        b = this._t0;
        break;
      case "paigow-play":
        b = this._Eg;
        break;
      case "paigow-play-auto":
        b = this._dh;
        break;
      case "paigow-reset-cards":
        b = this._72;
        break;
      case "craps-roll":
        b = this._Bk;
        break;
      case "craps-clear":
        b = this._51
    }
    return b
  },
  toString: function (a) {
    var b = "unknown";
    switch (a) {
      case this._1r:
        b = "fold-show";
        break;
      case this._22:
        b =
          "wait-bb";
        break;
      case this._Vj:
        b = "muck";
        break;
      case this._B7:
        b = "check";
        break;
      case this._M6:
        b = "wait";
        break;
      case this._id:
        b = "bring-in";
        break;
      case this._I3:
        b = "time";
        break;
      case this._jd:
        b = "small-blind";
        break;
      case this._jl:
        b = "hide-winning";
        break;
      case this._Fe:
        b = "ante";
        break;
      case this._S5:
        b = "big-blind";
        break;
      case this._Vo:
        b = "sit-out";
        break;
      case this._pq:
        b = "call";
        break;
      case this._c8:
        b = "raise";
        break;
      case this._x2:
        b = "fold";
        break;
      case this._3b:
        b = "show-cards";
        break;
      case this._bk:
        b = "bet";
        break;
      case this._Dn:
        b =
          "bj-complete-bet";
        break;
      case this._B9:
        b = "bj-bet";
        break;
      case this._P9:
        b = "bj-hit";
        break;
      case this._O7:
        b = "bj-stand";
        break;
      case this._30:
        b = "bj-double";
        break;
      case this._04:
        b = "bj-split";
        break;
      case this._Y8:
        b = "bj-accept-insurance";
        break;
      case this._kg:
        b = "bj-decline-insurance";
        break;
      case this._v7:
        b = "bj-clear-bet";
        break;
      case this._ml:
        b = "bj-dealer-open-card";
        break;
      case this._lp:
        b = "bj-dealer-hit";
        break;
      case this._K4:
        b = "bj-triple";
        break;
      case this._dp:
        b = "baccarat-player-bet";
        break;
      case this._c1:
        b = "baccarat-dealer-bet";
        break;
      case this._fm:
        b = "baccarat-clear-bet";
        break;
      case this._32:
        b = "baccarat-tie-bet";
        break;
      case this._Mq:
        b = "baccarat-complete-bet";
        break;
      case this._Y7:
        b = "baccarat-player-pair-bet";
        break;
      case this._c4:
        b = "baccarat-dealer-pair-bet";
        break;
      case this._jq:
        b = "paigow-bet";
        break;
      case this._t9:
        b = "paigow-deal";
        break;
      case this._t0:
        b = "paigow-clear";
        break;
      case this._Eg:
        b = "paigow-play";
        break;
      case this._dh:
        b = "paigow-play-auto";
        break;
      case this._72:
        b = "paigow-reset-cards";
        break;
      case this._Bk:
        b = "craps-roll";
        break;
      case this._51:
        b =
          "craps-clear"
    }
    return b
  }
};
_Tf._dc.PlayerFlag = {
  _R2: 1,
  _3i: 2,
  _Lo: 4,
  _5e: 8,
  _wn: 16,
  _ch: 32,
  _J8: 64,
  _V4: 128,
  _2r: 256,
  _q7: 512,
  _tk: 1024,
  has: function (a, b) {
    return (a & b) === b
  }
};
_Tf._dc.PlayerState = {
  _w: 0,
  _22: 1,
  _R2: 2,
  _2r: 3
};
_Tf._dc.TableState = {
  _Be: 0,
  _vc: 1,
  _D8: 2,
  _Is: 3
};
_Tf._dc.TableFlag = {
  _n1: 1,
  _t4: 2,
  _Zh: 4,
  _Li: 8,
  has: function (a, b) {
    return (a & b) === b
  }
};
_Tf._dc.AnimationType = {
  _08: 0,
  _Gf: 1,
  _Ch: 2,
  _wq: 3,
  _tm: 4,
  _hg: 5,
  _0: 6,
  _t8: 7,
  _Q3: 8,
  _Yh: 9,
  _X9: 10,
  _Qg: 11,
  __g: 12,
  _U9: 13,
  _7g: 14,
  _F9: 15,
  _L0: 17,
  __o: 32,
  _ef: 22,
  _a8: 23,
  _P5: 24,
  _Cf: 25,
  _G2: 26,
  _t7: 27,
  _ac: 28,
  _15: 29,
  _K0: 30,
  _M3: 31,
  _7h: 33,
  _5i: 34,
  _Ff: 35,
  _n2: 36,
  _um: 37,
  _o0: 38,
  _P4: 39,
  _Kk: 40,
  _Kb: 41,
  _a1: 42,
  _2j: 44,
  _h7: 45,
  _21: 46,
  _4: 47,
  _xm: 48,
  _Xq: 49,
  _l8: 50,
  _Uc: 51
};
_Tf._dc.MoneyType = {
  _i4: 80,
  _Ok: 82,
  _Xm: 65,
  _82: 66,
  _qa: 84,
  toString: function (a) {
    var b = "";
    switch (a) {
      case this._i4:
        b = "play-money";
        break;
      case this._Ok:
        b = "real-money"
    }
    return b
  },
  _O3: function (a) {
    var b = 0;
    switch (a) {
      case "play-money":
        b = this._i4;
        break;
      case "real-money":
        b = this._Ok;
        break;
      case "tour":
        b = this._qa;
        break;
      case "custom1":
        b = this._Xm;
        break;
      case "custom2":
        b = this._82
    }
    return b
  }
};
_Tf._dc.ResultCode = {
  _jh: 0,
  _8i: 1,
  _ph: 2,
  _I5: 3,
  _gr: 4,
  _O2: 5,
  _ro: 6
};
_Tf._dc.TableMessageType = {
  _08: 0,
  _l0: 1,
  _L0: 2
};
_Tf._dc.TournamentType = {
  _Tc: 71,
  _Y: 77,
  _Nd: 83,
  toString: function (a) {
    var b = "";
    switch (a) {
      case this._Tc:
        b = "sit-and-go";
        break;
      case this._Nd:
        b = "scheduled";
        break;
      case this._Y:
        b = "manual"
    }
    return b
  },
  _O3: function (a) {
    var b = 0;
    switch (a) {
      case "manual":
        b = this._Y;
        break;
      case "scheduled":
        b = this._Nd;
        break;
      case "sit-and-go":
        b = this._Tc
    }
    return b
  }
};
_Tf._dc.TournamentState = {
  _Qa: 65,
  _2k: 71,
  _Td: 83,
  _Il: 82,
  _t5: 67,
  _Kp: 68,
  _O3: function (a) {
    var b = 0;
    switch (a) {
      case "done":
        b = this._Kp;
        break;
      case "registering":
        b = this._2k;
        break;
      case "announced":
        b = this._Qa;
        break;
      case "seating":
        b = this._Td;
        break;
      case "cancelled":
        b = this._t5;
        break;
      case "running":
        b = this._Il
    }
    return b
  }
};
_Tf._dc.TournamentFlag = {
  _Ca: 1,
  _27: 2,
  _0i: 4,
  _Yb: 8,
  _S9: 16,
  _3: 32,
  _e: 64,
  _9l: 128,
  _V7: 256,
  _j5: 512,
  has: function (a, b) {
    return (a & b) === b
  }
};
_Tf._dc.PotType = {
  _O1: 70,
  _Mn: 80,
  _Wd: 85,
  _O3: function (a) {
    var b = 0;
    switch (a) {
      case "fixed":
        b = this._O1;
        break;
      case "unlimited":
        b = this._Wd;
        break;
      case "pot-limit":
        b = this._Mn
    }
    return b
  }
};
_Tf._dc.TableEventType = {
  _08: 0,
  _mg: 1,
  _Am: 2,
  _hk: 3,
  _rf: 4,
  _58: 5,
  _90: 6,
  _6b: 7,
  _Qi: 9
};
_Tf._dc.GameEvent = {
  _R2: 1,
  _Yd: 2,
  __p: 3,
  _M: 4,
  _qs: 5,
  _sm: 6,
  _Bp: 7,
  _bg: 8,
  _be: 9
};
_Tf._dc.NodeProxyResultCode = {
  _nc: 1,
  _xh: 2,
  _o9: 3,
  _I8: 4,
  _s7: 5,
  _M7: 6,
  _Vr: 7,
  _ur: 8,
  _nr: 9,
  _on: 10,
  _Dh: 11,
  _Tb: 12
};
_Tf._dc.PlayerGender = {
  _qb: 77,
  _J8: 70
};
_Tf._dc.BaseTimeout = {
  _lr: 2,
  _6n: 3,
  _qj: 5,
  _F6: 8,
  _xg: 12
};
_Tf._dc.JackpotPlayerType = {
  _I8: 95,
  _A6: 76,
  _X8: 87,
  _il: 79,
  _ol: 78,
  _Yk: 82
};
_Tf._dc.JackpotType = {
  _I8: 95,
  _O0: 66,
  _Ko: 77,
  toString: function (a) {
    return a === this._O0 ? "bad-beat" : a === this._Ko ? "monte-carlo" : ""
  }
};
_Tf._dc.BaccaratTableState = {
  _I8: 0,
  _cs: 1,
  _Ae: 2,
  _De: 3,
  _qi: 4,
  _j: 5,
  _Is: 6,
  _K2: 7,
  _84: 8
};
_Tf._dc.BlackJackTableState = {
  _I8: 0,
  _Ae: 1,
  _De: 2,
  _Tl: 3,
  _zo: 4,
  _pb: 5,
  _gg: 6,
  _qi: 7,
  _j: 8,
  _Is: 9,
  _K2: 10,
  _84: 11
};
_Tf._dc.PaigowTableState = {
  _I8: 0,
  _Ae: 1,
  _De: 2,
  _Tl: 3,
  _gg: 4,
  _qi: 5,
  _j: 6,
  _Is: 7,
  _K2: 8,
  _84: 9
};
_Tf._dc.CrapsTableState = {
  _Be: 0,
  _p4: 1,
  _Ep: 2,
  _Is: 3
};
_Tf._dc.Dice = {
  _ip: "1,2,3,4,5,6".split(","),
  _C8: function (a) {
    a = parseInt(a);
    return this._ip[a]
  },
  getCardsByCodesString: function () { }
};
_Tf._dc.DiceState = {
  _08: 0,
  _vc: 1,
  _4g: 2,
  _5r: 3,
  _2o: 4,
  _x2: 5
};
var _me = new function () {
  this.pagesViewModelMap = {};
  this.device = _Tf._Hc._Og.getPlatform();
  this.reduceViewModelForPage = function (a, b) {
    if (b && a) {
      for (var c = {}, d = 0; d < b.length; d++) "undefined" !== typeof this[b[d]] && (c[b[d]] = this[b[d]]);
      this.pagesViewModelMap[a] = c
    }
  }
};
_me.currentLocale = ko.observable(_Tf._41.currentLocale);
_me.locale = ko.computed(function () {
  _me.currentLocale();
  return _Tf._41.getLocale()
});
_me.localeName = ko.computed(function () {
  return _Tf._0l._8h[_me.currentLocale()]
});
_me.changeLocale = function (a) {
  _Tf._41.change(a)
};
_me.availableLocales = ko.observableArray();
(function (a) {
  for (var b in _Tf._0l._8h) {
    if (!_Tf._0l._8h.hasOwnProperty(b)) break;
    a.availableLocales.push({
      locale: b,
      name: _Tf._0l._8h[b]
    })
  }
})(_me);
_me.menu = new function (a) {
  this.activePage = ko.observable(_Tf._0l._N1._ff._Q6);
  this.openedSettings = ko.observable(!1);
  this.activePage.subscribe(function (b) {
    a.lobbyFilters.toggleFilters("");
    /home/.test(b) || /login/.test(b) || /registration/.test(b) ? this.activeMenuItem("home") : /lobby/.test(b) || /tournament/.test(b) ? (this.lastLobbyPage(b), this.activeMenuItem("lobby")) : /profile/.test(b) && this.activeMenuItem("profile")
  }.bind(this));
  this.activeMenuItem = ko.observable("home");
  this.lastLobbyPage = ko.observable("");
  this.openPage = function (b) {
    if (b) {
      if ("object" != typeof b || !1 != b.isClearSearch) this.isInternalSearchVisible(!1), a.lobby.isSearchFull(!1);
      b = "string" === typeof b ? b : b.page;
      this.lastLobbyPage() || this.lastLobbyPage(_Tf._0l._N1._ff._3f);
      "lobby" === b ? this.lastLobbyPage() != this.activePage() && _Mf._Md.changePage(this.lastLobbyPage()) : this.activePage() !== b && _Mf._Md.changePage("tables" === b ? "table" : b)
    }
  }.bind(this);
  this.openMultiTables = function () {
    a.tablesSnap.getOpenedTable() ? this.openPage("tables") : this.openPage(_Tf._0l._N1._ff.LOBBY_TABLES_LIST)
  };
  this.openExternalDialog = function (a) {
    _Mf._Md.showExternalDialog(a)
  }.bind(this);
  this.closeExternalDialog = function (a) {
    _Mf._Md.closeExternalDialog(a)
  }.bind(this);
  this.refreshPageList = function () {
    _Mf._Md._E8()
  };
  this.search = function () {
    this.isOpenFullSearch() ? (this.isInternalSearchVisible(!0), a.lobby.isSearchFull(!0), this.onOpenFullSearch()) : (this.isInternalSearchVisible(!this.isInternalSearchVisible()), a.lobby.isSearchFull(!1))
  }.bind(this);
  this.isOpenFullSearch = function () {
    return !1
  };
  this.onOpenFullSearch = function () { };
  this.logout = function () {
    a.account.logout()
  };
  this.back = function () {
    _Mf._Md.backInHistory()
  };
  this.isInternalSearchVisible = ko.observable(!1);
  this.isInternalSearchVisible.subscribe(function (b) {
    !1 === b && (a.lobby.tables.cancelSearch(), a.lobby.tournaments.cancelSearch())
  });
  this.openStartPage = function () {
    _Mf._Md.changePage(_h8._0l.START_PAGE_FOR_APPLICATION)
  };
  this.goToLobby = function () {
    _Mf._Md.changePage(_Tf._0l._N1._ff._3f)
  }
}(_me);
var _c2 = function (a, b, c, d, e) {
  this.isLimitedByPage = d || !1;
  this.countLimitedPages = e || 1;
  this.filter = a || null;
  this.allElements = [];
  this.length = ko.observable(0);
  this.totalLength = ko.observable(0);
  this.filteredElements = [];
  this.elements = ko.observableArray();
  this.pages = ko.observable(1);
  this.countOnPages = c || 10;
  this.refreshHandler = null;
  this.setRefreshHandler = function (a) {
    "function" !== typeof a && (a = null);
    this.refreshHandler = a
  };
  this.removeRefreshHandler = function () {
    this.refreshHandler = null
  };
  this.callRefreshHandler = function (a) {
    a = a || {};
    "function" === typeof this.refreshHandler && this.refreshHandler(a)
  };
  this.growPage = function () {
    this.pages(this.pages() + 1);
    this.update();
    this.isLimitedByPage && this.callRefreshHandler({
      scrollToMiddle: !0
    })
  }.bind(this);
  this.reducePage = function () {
    var a = this.pages();
    2 > a || (a -= 1, this.pages(a), this.update(), this.isLimitedByPage && this.callRefreshHandler(1 < a ? {
      scrollToMiddle: !0,
      afterReducePage: !0
    } : {
        scrollToTop: !0
      }))
  }.bind(this);
  this.goToFirstPage = function () {
    this.callRefreshHandler({
      scrollToTop: !0
    });
    this.pages(1);
    this.update()
  };
  this.goToLastPage = function () {
    this.pages(Math.ceil(this.allElements.length / this.countOnPages));
    this.update()
  };
  this.hasOtherElements = function () {
    return (this.pages() + 1) * this.countOnPages > this.allElements.length && this.allElements.length < this.totalLength()
  };
  this.hasMorePages = ko.observable(!1);
  this.hasElements = ko.observable(!1);
  this.set = function (a, b) {
    this.allElements = a;
    this.length(a.length);
    this.totalLength(b || a.length);
    0 === a.length && !b && (this.callRefreshHandler({
      scrollToTop: !0
    }), this.pages(1));
    this.update()
  };
  this.searchString = ko.observable("");
  this.searchParam = ko.observable("name");
  this.searchByAll = b;
  this.searchedElements = ko.observableArray();
  this.search = function () {
    for (var a = this.searchByAll() ? this.allElements : this.filteredElements, b = this.searchParam(), c = this.searchString(), d = [], e = 0; e < a.length; e++) this._Lh(a[e][b], c) && d.push(a[e]);
    this.searchedElements(d)
  }.bind(this);
  this.cancelSearch = function () {
    this.searchString("")
  };
  this.update = function () {
    var a = this.updateByFilter(this.allElements),
      b = parseInt(a.length / this.countOnPages, 10);
    if (0 !== a.length % this.countOnPages || 0 === b) b += 1;
    this.filteredElements = a;
    this.pages() > b && this.pages(b);
    var b = 0,
      c = this.pages(),
      d = c * this.countOnPages;
    this.isLimitedByPage && c > this.countLimitedPages && (b = (c - this.countLimitedPages) * this.countOnPages);
    this.elements(a.slice(b, d));
    0 < this.totalLength() ? this.hasMorePages(d < this.totalLength()) : this.hasMorePages(d < a.length);
    this.hasElements(0 < this.elements().length);
    this.callRefreshHandler()
  }
};
_c2.prototype = {
  updateByFilter: function (a) {
    if (!this.filter) return a;
    for (var b = [], c, d, e, f = 0; f < a.length; f++) {
      e = !0;
      for (var g in this.filter.values) if (this.filter.values.hasOwnProperty(g) && (c = "undefined" === typeof this.filter.params[g] ? this.filter.values[g]() : this.filter.params[g][this.filter.values[g]()], -1 !== c && (d = a[f][g], e = "array" !== typeof c && "object" !== typeof c ? e && this._Lh(d, c) : e && this._Z3(d, c), !e))) break;
      e && b.push(a[f])
    }
    return b
  },
  _Lh: function (a, b) {
    return "number" === typeof b ? a === b : -1 < ("" + a).toLowerCase().indexOf(("" + b).toLowerCase())
  },
  _Z3: function (a, b) {
    var c = b[0],
      d = b[1];
    return -1 === d ? c <= a : c <= a && a <= d
  }
};
_me.profile = new function (a) {
  this.details = ko.observable();
  this.balance = ko.observable(null);
  this.avatar = ko.observable(_Tf._0l._A._Nc._0q);
  this.onClientLogout = function () {
    this.details(null);
    this.avatar(_Tf._0l._A._Nc._0q)
  };
  _Mf._ks.addListener(_Ag._ki, this.onClientLogout, this);
  this.nick = ko.computed(function () {
    var b = this.details();
    return !b ? a.locale()._e9._R7 : b.nickName
  }.bind(this));
  this.fullNameWithNick = ko.computed(function () {
    var b = "",
      c = "",
      d = "",
      e = "(",
      f = ")",
      g = this.details();
    if (!g) return a.locale()._e9._R7;
    if (g.firstName) c = g.firstName;
    if (g.familyName) "" != c && (b = " "), d = g.familyName;
    "" === c && "" === d && (e = f = "");
    return _h8._wc._an.PLAYER_NAME_ON_LOBBY.fill({
      nick: g.nickName,
      left: e,
      fname: c,
      space: b,
      sname: d,
      right: f
    })
  }.bind(this));
  this.fullName = ko.computed(function () {
    var b = "",
      c = "",
      d = "",
      e = this.details();
    if (!e) return a.locale()._e9._R7;
    if (e.firstName) c = e.firstName;
    if (e.familyName) "" != c && (b = " "), d = e.familyName;
    return c + b + d
  }.bind(this));
  this.playCash = ko.computed(function () {
    var a = 0;
    this.details() ? (a = this.details().playCash,
      this.balance(a)) : this.balance(null);
    console.log("player cash details " + JSON.stringify(this.balance()));
    console.log('++++++++++' + customVar)
    console.log('latestChipslatestChipslatestChipslatestChips' + latestChips)
    // if (customVar) {
    //   this.details().playCash = latestChips;
    //   console.log('inside!!!!!!!!!!!!!' + latestChips)
    //   customVar = false;
    // }
   // if (customVar) {
   //   return "undefined" === typeof _Tf._Ek._29 ? latestChips : _Tf._Ek._29._ca(latestChips, _Tf._dc.MoneyType._i4, !0)
   // } else {
      return "undefined" === typeof _Tf._Ek._29 ? a : _Tf._Ek._29._ca(a, _Tf._dc.MoneyType._i4, !0)
   // }
  }.bind(this));

  this.MeplayCash = ko.computed(function () {
    var a = 0;
    this.details() ? (a = this.details().playCash,
      this.balance(a)) : this.balance(null);
    // alert(a);
    // console.log("Player "+ JSON.stringify(_Tf._Ek._29));
    return "undefined" === typeof _Tf._Ek._29 ? a : a
  }.bind(this));


  this.realCash = ko.computed(function () {
    var a = 0;
    if (this.details()) a = this.details().realCash;
    return "undefined" === typeof _Tf._Ek._29 ? a : _Tf._Ek._29._ca(a, _Tf._dc.MoneyType._Ok)
  }.bind(this))
}(_me);
_me.avatars = new function (a) {
  this.list = ko.observableArray([]);
  this.isWaitingAnswer = ko.observable(!1);
  this.selectedAvatar = a.profile.avatar();
  this.setAvatars = function (a) {
    this.list(a);
    this.isWaitingAnswer(!1)
  };
  this.confirm = function () {
    if (!this.isWaitingAnswer()) {
      var a = "";
      try {
        a = _Mf._Md.getPageEvent(_Tf._0l._N1._ff._u5)._8j() - 1
      } catch (c) { }
      "number" != typeof a || 0 > a || a >= this.list().length || this.confirmAvatar(this.list()[a])
    }
  };
  this.confirmAvatar = function (a) {
    if (!this.isWaitingAnswer()) this.isWaitingAnswer(!0),
      this.selectedAvatar = a, _Mf._L2._sb(a)
  };
  this.onConfirmSuccess = function () {
    this.isWaitingAnswer(!1);
    a.profile.avatar(this.selectedAvatar)
  };
  this.onConfirmFailed = function () {
    this.isWaitingAnswer(!1)
  }
}(_me);
_me.lobbyFilters = new function () {
  this.activeFilterType = ko.observable("");
  this.toggleFilters = function (a) {
    a = a || "";
    this.activeFilterType() !== a ? this.activeFilterType(a) : this.activeFilterType("")
  }
};
_me.lobbyTablesFilters = new function (a) {
  this.isChanged = !1;
  this.params = {
    gameType: {
      any: -1,
      holdem: _Tf._dc.GameType._dk,
      omaha: _Tf._dc.GameType._6e,
      omaha_hl: _Tf._dc.GameType._u9,
      stud: _Tf._dc.GameType._Ll,
      stud_hl: _Tf._dc.GameType._zj,
      blackjack: _Tf._dc.GameType._1,
      baccarat: _Tf._dc.GameType._Ak,
      $: []
    },
    moneyType: {
      any: -1,
      play: _Tf._dc.MoneyType._i4,
      real: _Tf._dc.MoneyType._Ok,
      $: []
    },
    potType: {
      any: -1,
      unlimited: _Tf._dc.PotType._Wd,
      fixed: _Tf._dc.PotType._O1,
      limited: _Tf._dc.PotType._Mn,
      $: []
    },
    baseStake: {
      any: -1,
      $: []
    },
    minCash: {
      any: -1,
      $: []
    },
    maxPlayer: {
      any: -1,
      $: []
    },
    baseTimeout: {
      any: -1,
      veryFast: _Tf._dc.BaseTimeout._lr,
      fast: _Tf._dc.BaseTimeout._6n,
      normal: _Tf._dc.BaseTimeout._qj,
      slow: _Tf._dc.BaseTimeout._F6,
      verySlow: _Tf._dc.BaseTimeout._xg,
      $: []
    },
    paramType: {
      $: []
    }
  };
  this.values = {
    gameType: ko.observable("holdem"),
    moneyType: ko.observable("play"),
    potType: ko.observable("unlimited"),
    baseStake: ko.observable("any"),
    minCash: ko.observable("any"),
    maxPlayer: ko.observable("any"),
    baseTimeout: ko.observable("any")
  };
  this.names = {
    gameType: "",
    moneyType: "",
    potType: "",
    baseStake: "",
    minCash: "",
    maxPlayer: "",
    baseTimeout: ""
  };
  this.playNow = function () {
    a.tablesSnap.canAdd() ? _Mf._Up._2f(_Tf._dc.MoneyType._i4, this.getFilterParams()) : _Mf._ks.emit(_Ag._P3, null)
  };
  this.getFilterParams = function () {
    var a = {}, c = _Mf._Up._9p();
    if ("any" != this.values.potType()) a.potTypes = this.params.potType[this.values.potType()];
    if ("any" != this.values.baseStake()) a.baseStakes = this.params.baseStake[this.values.baseStake()];
    if ("any" != this.values.minCash()) {
      var d = this.params.minCash[this.values.minCash()];
      if (2 === d.length && 0 < d[0]) a.minBuyIn = d[0];
      if (2 === d.length && 0 < d[1]) a.maxBuyIn = d[1]
    }
    d = this.values.maxPlayer();
    _Tf._dc.GameType.isBlackJack(c) ? d = this.values.maxPlayerBlackJack() : _Tf._dc.GameType.isBaccarat(c) && (d = this.values.maxPlayerBaccarat());
    if ("any" != d) {
      var e = this.params.maxPlayer[d];
      _Tf._dc.GameType.isBlackJack(c) ? e = this.params.maxPlayerBlackJack[d] : _Tf._dc.GameType.isBaccarat(c) && (e = this.params.maxPlayerBaccarat[d]);
      a.tableAllowedSeats = "object" == typeof e && 2 === e.length ? _Mf._Ta._Gp(e[0], e[1]) : e
    }
    if ("any" != this.values.baseTimeout()) a.baseTimeout = this.params.baseTimeout[this.values.baseTimeout()];
    return a
  };
  this.wasChanged = function () {
    return !0 == this.isChanged
  };
  this.setGameType = function (a) {
    _Mf._Up._qq(a);
    this.values.gameType(a)
  };
  this.setPotType = function (a) {
    this.values.potType(a);
    this.isChanged = !0
  };
  this.setMoneyType = function (a) {
    this.values.moneyType(a);
    this.isChanged = !0
  };
  this.setBaseStake = function (a) {
    this.values.baseStake(a);
    this.isChanged = !0
  };
  this.setMinCash = function (a) {
    this.values.minCash(a);
    this.isChanged = !0
  };
  this.setMaxPlayer = function (a) {
    this.values.maxPlayer(a);
    this.isChanged = !0
  };
  this.setMaxPlayerBlackJack = function (a) {
    this.values.maxPlayerBlackJack(a);
    this.isChanged = !0
  };
  this.setMaxPlayerBaccarat = function (a) {
    this.values.maxPlayerBaccarat(a);
    this.isChanged = !0
  };
  this.setBaseTimeout = function (a) {
    this.values.baseTimeout(a);
    this.isChanged = !0
  };
  this.getNumberPlayers = function (a) {
    return a.numberPlayers + "/" + a.maxPlayer
  };
  this.getStakes = function (a) {
    return _Tf._Ek._29._ca(a.baseStake, a.moneyType, !0) + "/" + _Tf._Ek._29._ca(2 * a.baseStake, a.moneyType, !0)
  };
  this.getBets = function (a) {
    return _Tf._Ek._29._ca(a.minBet, a.moneyType, !0) + "/" + _Tf._Ek._29._ca(a.maxBet, a.moneyType, !0)
  };
  this.getDecksInShoe = function (a) {
    return a.numberOfDecks
  };
  this.getPayout = function () {
    return "3:2"
  };
  this.getPotType = function (b) {
    return a.locale()._c8[b.potType]
  };
  this.getBuyIn = function (a) {
    return _Tf._Ek._29._ca(a.minCash, a.moneyType, !0)
  };
  this.getGameType = function (b) {
    return a.locale()._B6[b.gameType]
  }
}(_me);
_me.lobbyTournamentsFilters = new function (a) {
  this.params = {
    gameType: {
      any: -1,
      holdem: _Tf._dc.GameType._dk,
      omaha: _Tf._dc.GameType._6e,
      omaha_hl: _Tf._dc.GameType._u9,
      stud: _Tf._dc.GameType._Ll,
      stud_hl: _Tf._dc.GameType._zj,
      $: []
    },
    moneyType: {
      any: -1,
      play: _Tf._dc.MoneyType._i4,
      real: _Tf._dc.MoneyType._Ok,
      $: []
    },
    tournamentType: {
      any: -1,
      scheduled: _Tf._dc.TournamentType._Nd,
      sng: _Tf._dc.TournamentType._Tc,
      $: []
    },
    state: {
      any: -1,
      announced: _Tf._dc.TournamentState._Qa,
      registering: _Tf._dc.TournamentState._2k,
      seating: _Tf._dc.TournamentState._Td,
      running: _Tf._dc.TournamentState._Il,
      completed: _Tf._dc.TournamentState._Kp,
      canceled: _Tf._dc.TournamentState._t5,
      $: []
    },
    buyIn: {
      any: -1,
      $: []
    }
  };
  this.values = {
    gameType: ko.observable("holdem"),
    moneyType: ko.observable("play"),
    tournamentType: ko.observable("scheduled"),
    state: ko.observable("any"),
    buyIn: ko.observable("any")
  };
  this.names = {
    gameType: "",
    moneyType: "",
    tournamentType: "",
    state: "",
    buyIn: ""
  };
  this.setGameType = function (b) {
    // alert("common_gametype "+b);
    this.values.gameType(b);
    a.lobby.tournaments.update()
  };
  this.setTournamentType = function (a) {
    _Mf._X1._r(this.params.tournamentType[a]);
    this.values.tournamentType(a)
  };
  this.setMoneyType = function (b) {
    this.values.moneyType(b);
    a.lobby.tournaments.update()
  };
  this.setTournamentState = function (b) {
    this.values.state(b);
    a.lobby.tournaments.update()
  };
  this.setBuyIn = function (b) {
    this.values.buyIn(b);
    a.lobby.tournaments.update()
  };
  this.getNumberPlayers = function (a) {
    return a.numberPlayers
  };
  this.getState = function (b) {
    return a.locale()._t[b.state]
  };
  this.getPotType = function (b) {
    return a.locale()._c8[b.potType]
  };
  this.getBuyIn = function (a) {
    return _Tf._Ek._29._ca(a.buyIn,
      a.moneyType, !0)
  };
  this.getStartDate = function (a) {
    return _Tf._Ek._29._97(a.startDate)
  }
}(_me);
_me.lobby = new function (a, b) {
  this.state = ko.observable({
    sessions: 0,
    activePlayers: 0,
    activeTables: 0,
    activeTournaments: 0,
    badBeatJackpot: 0,
    monteCarloBoardJackpot: 0
  });
  this.isSearchFull = ko.observable(!1);
  this.tables = new _c2(null, this.isSearchFull, b._Nr, b.isLimitedCountOnPagesInListView, b.CountLimitedPages);
  this.activeClientTables = new _c2(null, !1, b._Nr);
  this.tournaments = new _c2(a.lobbyTournamentsFilters, this.isSearchFull, b._Nr, b.isLimitedCountOnPagesInListView, b.CountLimitedPages);
  this.openTable = function (b) {
    b &&
      "undefined" !== typeof b.id && (a.tablesSnap.canOpen(b) ? b.tournamentId && 0 != b.tournamentId ? _Mf._X1.selectTournamentTableAction(b) : _Mf._Up._P0(b) : _Mf._ks.emit(_Ag._P3, null))
  };
  this.openTournament = function (a) {
    a && "undefined" !== typeof a.id && _Mf._X1._oq(a.id)
  };
  this.getJackpotState = function (a) {
    a = this.state()[a] || 0;
    return _Tf._Ek._29._ca(a, _Tf._dc.MoneyType._i4)
  }.bind(this);
  this.gameType = ko.observable("");
  this.tableListTemplateName = ko.computed(function () {
    var a = this.gameType(),
      b = _Tf._0l._N1._ff,
      e = _Tf._dc.GameType;
    return (e._O3(a) == e._1 ? b.BLACK_JACK_TABLE_LIST : e._O3(a) == e._Ak ? b.BACCARAT_TABLE_LIST : e._O3(a) == e._c ? b.PAIGOW_TABLE_LIST : e._O3(a) == e._d4 ? b.CRAPS_TABLE_LIST : b.POKER_TABLE_LIST) + "-tmpl"
  }, this)
}(_me, _Tf._0l);
_me.tournament = new function (a, b) {
  this.details = ko.observable({});
  this.details.subscribe(function (a) {
    var b = _Tf._Ek._29;
    !a || "undefined" === typeof a.id ? (this.buyIn(0), this.entryFee(0)) : (this.buyIn(b._ca(a.buyIn, a.moneyType)), this.entryFee(b._ca(a.entryFee, a.moneyType)), this.setDates(a))
  }.bind(this));
  this.buyIn = ko.observable(0);
  this.entryFee = ko.observable(0);
  this.startDate = ko.observable("-");
  this.endDate = ko.observable("-");
  this.playersList = new _c2(null, !1, b._Nr, b.isLimitedCountOnPagesInListView, b.CountLimitedPages);
  this.tablesList = new _c2(null, !1, b._Nr, b.isLimitedCountOnPagesInListView, b.CountLimitedPages);
  this.registerButton = ko.observable(!1);
  this.playButton = ko.observable(!1);
  this.unregisterButton = ko.observable(!1);
  this.isRegistered = ko.observable(!0);
  this.isLateRegistered = ko.observable(!1);
  this.lateRegistrationTime = ko.observable("");
  this.getState = function () {
    return a.locale()._t[this.details().state]
  };
  this.getGameType = function () {
    return a.locale()._B6[this.details().gameType]
  };
  this.getTournamentType = function () {
    return a.locale()._b6[this.details().tournamentType]
  };
  this.getPlayerCash = function (a) {
    return _Tf._Ek._29._He(a.mainPrizeAmount, a.secondPrizeAmount, this.details().moneyType)
  };
  this.getPlayerPlace = function (a) {
    return _Tf._Ek._29._Lm(a.place)
  };
  this.getPlayerDisplayName = function (a) {
    return _Tf._Ek._29.getPlayerDisplayName(a.playerNick, a.playerDisplayName)
  };
  this.setDates = function (b) {
    var d = _Tf._Ek._29,
      e = _Tf._dc.TournamentState;
    b.state == e._Qa || b.state == e._2k ? (b.tournamentType === _Tf._dc.TournamentType._Tc ? this.startDate(a.locale()._c6._x5.format(b.maxPlayers)) : this.startDate(d._97(b.startDate)), this.endDate("-")) : b.state === e._Td || b.state === e._Il ? (this.startDate(d._97(b.startDate)), this.endDate("-")) : (this.startDate(d._97(b.startDate)), this.endDate(d._97(b.lastEvent)))
  };
  this.getTableMaxCash = function (a) {
    return _Tf._Ek._29._ca(a.maxCash, a.moneyType)
  };
  this.getTableMinCash = function (a) {
    return _Tf._Ek._29._ca(a.minCash, a.moneyType)
  };
  this.clearDetailsIfNeed = function (a) {
    this.details() && this.details().id !== a && this.details({})
  };
  this.clearButtonsIfNeed = function (a) {
    this.details() && this.details().id !== a && (this.registerButton(!1), this.unregisterButton(!1), this.playButton(!1))
  };
  this.updateRegisterButton = function (a) {
    this.isRegistered(a);
    a ? this._enableRegisterButton() : this._enableUnregisterButton()
  };
  this._enableRegisterButton = function () {
    this.registerButton(!1);
    this.playButton(!1);
    this.unregisterButton(!0)
  };
  this._enableUnregisterButton = function () {
    this.registerButton(!0);
    this.playButton(!1);
    this.unregisterButton(!1)
  };
  this.registerTournament = function () {
    _Mf._X1.opennedTournament.__9()
  };
  this.unregisterTournament = function () {
    _Mf._X1.opennedTournament._y()
  };
  this.playTournament = function () {
    _Mf._X1.opennedTournament._M0()
  };
  this.openTable = function (b) {
    b && "undefined" !== typeof b.id && (a.tablesSnap.canAdd() ? _Mf._X1.opennedTournament._k6(b) : _Mf._ks.emit(_Ag._P3, null))
  }
}(_me, _Tf._0l);
_me.tablesSnap = new function (a) {
  this.openedTables = ko.observableArray();
  this.activeTable = ko.observable(0);
  this.isAutoBlind = ko.observable(!1);
  this.isAutoMuck = ko.observable(!1);
  this.activeTableId = ko.computed(function () {
    if (0 === this.openedTables().length) return _Mf._ks.emit(_Ag._Zo, [null]), null;
    var a = this.openedTables()[this.activeTable()];
    _Mf._ks.emit(_Ag._Zo, [a || null]);
    return a ? a.id : null
  }.bind(this));
  this.getOpenedTable = function () {
    return 0 === this.openedTables().length ? null : this.openedTables()[this.activeTable()] || null
  };
  this.onClientAtTable = function (a, c) {
    if (a) for (var d = this.openedTables(), e = 0; e < d.length; e++) if (d[e].id == a) {
      d[e].hasTableMessageToWaitNextHand(c);
      d[e].hasTableMessageToWaitButton(!1);
      d[e].hasStandUpButton(c);
      c && this.isNowRequestedSeatAtAnyTable(!1);
      break
    }
  };
  _Mf._ks.addListener(_Ag._sl, this.onClientAtTable, this);
  this.hasStandUpButton = ko.computed(function () {
    var a = this.getOpenedTable();
    return !a ? !1 : a.hasStandUpButton() && 0 === a.tournamentId
  }.bind(this));
  this.isClientAtOpenedTable = ko.computed(function () {
    var a = this.getOpenedTable();
    return !a ? !1 : a.hasStandUpButton()
  }.bind(this));
  this.isNowRequestedSeatAtAnyTable = ko.observable(!1);
  this.hasImBackButton = ko.computed(function () {
    var a = this.getOpenedTable();
    return !a ? !1 : a.hasImBackButton()
  }.bind(this));
  this.hasHighCardsBlock = ko.computed(function () {
    var a = this.getOpenedTable();
    return !a ? !1 : a.hasStandUpButton()
  }.bind(this));
  this.hasLowCardsBlock = ko.computed(function () {
    var a = this.getOpenedTable();
    return !a ? !1 : a.hasStandUpButton() && !1 != a.lowCards
  }.bind(this));
  this.standUp = function () {
    var a = this.getOpenedTable();
    a && a.hasStandUpButton() && (a.hasStandUpButton(!1), a.cards([]), a.activeActions(!1), a.hasTableMessageToWaitButton(!1), a.hasTableMessageToWaitNextHand(!1), (a = _Mf._q1._5p(this.tableId)) && a._b8())
  }.bind(this);
  this.showTable = function (a) {
    if (!a || !a.name) return !1;
    for (var c = this.openedTables(), d = 0; d < c.length; d++) if (c[d].id === a.id) return this.goToTable(d), !1;
    a.hasStandUpButton = ko.observable(!1);
    a.hasImBackButton = ko.observable(!1);
    a.hasTableMessageToWaitNextHand = ko.observable(!0);
    a.hasTableMessageToWaitButton = ko.observable(!1);
    a.callFunds = ko.observable(0);
    a.mainPot = ko.observable(0);
    a.sidePot = ko.observable(0);
    a.sidePots = ko.observableArray([]);
    a.getFormatedBaseStake = function (a) {
      return _Tf._Ek._29._ca(((a || 0) + 1) * this.baseStake, this.moneyType, !0)
    }.bind(a);
    this.bindClientCards(a);
    this.bindClientHighAndLowCards(a);
    this.bindClientActiveActions(a);
    this.openedTables.push(a);
    this.goToTable(c.length - 1);
    if (a.tournamentId) _me.tablesSnap.onShowTournamentTable(a.tournamentId);
    return !0
  }.bind(this);
  this.bindClientActiveActions = function (a) {
    a.activeActions = ko.observable(!1);
    a.activeActionsType = ko.observable("active")
  };
  this.bindClientCards = function (a) {
    a.cards = ko.observableArray([]);
    a.getCards = ko.computed(function () {
      for (var c = _h8._wc._an, d = null === a.cards ? 0 : a.cards().length, e = 0 == d || 1 == d, d = _Tf._dc.GameType, f = d._rk(a.gameType), g = d._qo(a.gameType), d = e ? 0 : c.getVisibleCardsCount(f, g), e = e ? 0 : c.getInvisibleCardsCount(f, g), h = "", j = "", f = c.getCardLeftPositionRatio(f, g), g = _Tf._0l._A._Nc._N7, k = c.TABLE_TABS_CARD,
        l = 0, n = 0, m = 0; m < d; m++) j = a.cards()[m], n = c.getVisibleCardTopPosition(m), l = c.getVisibleCardPosition(f, m), h += k.fill({
          left: l,
          top: n,
          cardImage: g.format(j)
        });
      for (m = 0; m < e; m++) l = c.getInvisibleCardPosition(f, m, d), h = k.fill({
        left: l,
        cardImage: g.format(j)
      }) + h;
      return h
    }.bind(this))
  };
  this.bindClientHighAndLowCards = function (a) {
    a.highCards = {
      name: ko.observable(""),
      mnemocode: ko.observableArray([]),
      cardValues: ko.observable("")
    };
    a.lowCards = _Tf._dc.GameType.isHighLow(a.gameType) ? {
      name: ko.observable(""),
      mnemocode: ko.observableArray([]),
      cardValues: ko.observable("")
    } : !1
  };
  this.onUpdateCards = function (a, c, d, e) {
    var b;
    if (!("lowCards" !== e && "highCards" !== e) && a) for (var f = this.openedTables(), g = _Tf._dc._W2, h = 0; h < f.length; h++) if (f[h].id === a) {
      if (!1 === f[h][e]) break;
      f[h][e].name(c);
      0 < d.length && (b = (a = d.split(".")) && 2 <= a.length ? a[1] : "", d = b);
      f[h][e].mnemocode(g.getCardsByCodesString(d));
      f[h][e].cardValues(g.getCardsValuesByCodesString(d).join(" "));
      break
    }
  };
  this.onUpdateHighCards = function (a, c, d) {
    this.onUpdateCards(a, c, d, "highCards")
  };
  _Mf._ks.addListener(_Ag._Qk,
    this.onUpdateHighCards, this);
  this.onUpdateLowCards = function (a, c, d) {
    this.onUpdateCards(a, c, d, "lowCards")
  };
  _Mf._ks.addListener(_Ag._Oj, this.onUpdateLowCards, this);
  this.onUpdateActiveActions = function (a, c, d) {
    if (a) for (var e = this.openedTables(), f = 0; f < e.length; f++) if (e[f].id === a) {
      e[f].activeActions(c);
      e[f].activeActionsType(c ? d || "active" : "active");
      break
    }
  };
  _Mf._ks.addListener(_Ag._e7, this.onUpdateActiveActions, this);
  this.onUpdateGamePots = function (a, c) {
    if (a) for (var d = this.openedTables(), e = _Tf._Ek._29, f = 0; f < d.length; f++) d[f].id === a && (d[f].mainPot(e._ca(c[0])), d[f].sidePots(c.slice(1, c.length)))
  };
  this.closeInactiveTables = function (a) {
    var c = this.openedTables(),
      d;
    for (d in c) if (c.hasOwnProperty(d)) {
      var e = c[d];
      if (e.id !== a) {
        var f = e.id;
        _Mf._q1._Rm(f).isClientSittingAction() || (e = _Mf._q1._5p(f), this.finishToTakeSeatAtTable(f), this.openedTables.remove(function (a) {
          return a.id === f
        }), e._8q())
      }
    }
  };
  _Mf._ks.addListener(_Ag._lj, this.onUpdateGamePots, this);
  this.canAdd = ko.computed(function () {
    return this.openedTables().length < _Tf._0l.maxOpenedTables
  }.bind(this));
  this.canOpen = function (a) {
    _Tf._0l.needCloseInactiveTables && this.closeInactiveTables(a.id);
    var c = this.openedTables();
    if (this.isTableCraps(a.gameType) && 1 == c.length && c[0].id != a.id) return !1;
    if (c.length < _Tf._0l.maxOpenedTables) return !0;
    for (var d = 0; d < c.length; d++) if (c[d].id === a.id) return !0;
    return !1
  };
  this.canClose = ko.computed(function () {
    return 0 < this.openedTables().length && this.openedTables().length < _Tf._0l.maxOpenedTables - 1
  }.bind(this));
  this.add = function () {
    a.lobbyTablesFilters.playNow()
  };
  this.close = function () {
    var a = this.getOpenedTable();
    if (a) {
      var c = _Mf._q1._5p(a.id);
      if (c) c._8q();
      else this.onClose(a.id)
    }
  }.bind(this);
  this.onClose = function (b) {
    this.finishToTakeSeatAtTable(b);
    this.openedTables.remove(function (a) {
      return a.id === b
    });
    a.menu.refreshPageList();
    0 < this.openedTables().length ? this.goToTable(0) : _Mf._Md.getVisiblePage() === _Tf._0l._N1._ff._2l && a.menu.openPage("lobby")
  };
  this.goToTable = function (a) {
    this.activeTable(a);
    _Mf._Md.getPageEvent(_Mf._Md.getPermanentPage())._am();
    if (a = _Mf._q1._Aa(this.getOpenedTable().id)) this.isAutoBlind(a.isAutoActionSet(_Tf._dc.AutoAction.__f)),
      this.isAutoMuck(a.isAutoActionSet(_Tf._dc.AutoAction._kh)), a = _me.tablesSnap.getOpenedTable(), _Mf._q1._5p(a.id)._F7()
  };
  this.openSettingsDialog = function () {
    a.options.currentOptionsPage("main");
    _Tf._N1.$(_Tf._0l._N1._T2).show()
  }.bind(this);
  this.closeSettingsDialog = function () {
    _Tf._N1.$(_Tf._0l._N1._T2).hide()
  };
  this.sendChatMessage = function () {
    var a = _Mf._q1.activeTableId;
    if (a) {
      var c = $(_Tf._0l._N1._Uq),
        d = c.val();
      if ((d = _Tf._Ek._29.htmlspecialchars(d)) && d.length) c.val(""), !1 !== _Mf._ks.emit(_Ag._Df, [a.id, d]) && (a = _Mf._q1._5p(a.id)) && a._sr(d)
    }
  }.bind(this);
  this.onClientCards = function (a, c) {
    for (var d = 0; d < this.openedTables().length; d++) if (this.openedTables()[d].id === a) {
      this.openedTables()[d].cards(c);
      break
    }
  };
  _Mf._ks.addListener(_Ag.__c, this.onClientCards, this);
  this.onClientCallFundsChanged = function (a, c) {
    for (var d = 0; d < this.openedTables().length; d++) if (this.openedTables()[d].id === a) {
      this.openedTables()[d].callFunds(c);
      break
    }
  };
  _Mf._ks.addListener(_Ag._O8, this.onClientCallFundsChanged, this);
  this.changeTableMessagesToWait = function (a, c, d) {
    for (var e = 0; e < this.openedTables().length; e++) if (this.openedTables()[e].id === a) {
      this.openedTables()[e].hasTableMessageToWaitNextHand(c || !1);
      this.openedTables()[e].hasTableMessageToWaitButton(d || !1);
      break
    }
  };
  _Mf._ks.addListener(_Ag._vo, function (a) {
    this.changeTableMessagesToWait(a, !1, !1)
  }, this);
  _Mf._ks.addListener(_Ag._r1, function (a) {
    this.changeTableMessagesToWait(a, !1, !0)
  }, this);
  this.isTableStud = function (a) {
    return _Tf._dc.GameType._98(a)
  };
  this.isTableCraps = function (a) {
    return _Tf._dc.GameType.isCraps(a)
  };
  this.hasTableFixedLimit = function (a) {
    return _Tf._dc.PotType._O1 === a
  };
  this.isWaitingResponseOnReserveSeatAndSitDown = function (a) {
    return "undefined" === typeof this.reservedSeat[a] ? !1 : !0
  };
  this.isWaitingResponseOnBuyIn = function (a) {
    return "undefined" === typeof this.buyInRequest[a] ? !1 : !0
  };
  this.reservedSeat = {};
  this.buyInRequest = {};
  this.getReservedSeatIndex = function (a) {
    return this.isWaitingResponseOnReserveSeatAndSitDown(a) ? this.reservedSeat[a] : null
  };
  this.beginToTakeSeatAtTable = function (a, c) {
    this.reservedSeat[a] = c
  };
  this.beginToBuyIn = function (a) {
    this.buyInRequest[a] = !0
  };
  this.cancelToBuyIn = function (a) {
    this.isWaitingResponseOnBuyIn(a) && delete this.buyInRequest[a]
  };
  this.finishToTakeSeatAtTable = function (a) {
    this.isWaitingResponseOnReserveSeatAndSitDown(a) && delete this.reservedSeat[a];
    this.cancelToBuyIn(a)
  };
  this.changeIsAutoBlindAtCurrentTable = function () {
    this.isAutoBlind(!this.isAutoBlind());
    _Mf._q1.setPermanentAutoActionValueAction(_Tf._dc.AutoAction.__f, this.isAutoBlind(), !0)
  }.bind(this);
  this.changeIsAutoMuckAtCurrentTable = function () {
    this.isAutoMuck(!this.isAutoMuck());
    _Mf._q1.setPermanentAutoActionValueAction(_Tf._dc.AutoAction._kh, this.isAutoMuck(), !0);
    _Mf._q1._Aa(this.getOpenedTable().id)
  }.bind(this);
  this.isTournament = ko.computed(function () {
    var a = this.getOpenedTable();
    return !a ? !1 : 0 !== a.tournamentId
  }.bind(this));
  this.minBet = ko.computed(function () {
    var a = this.getOpenedTable();
    return !a ? !1 : _Tf._Ek._29._ca(a.minBet, a.moneyType, !0)
  }.bind(this));
  this.maxBet = ko.computed(function () {
    var a = this.getOpenedTable();
    return !a ? !1 : _Tf._Ek._29._ca(a.maxBet, a.moneyType, !0)
  }.bind(this));
  this.onShowTournamentTable = function (a) {
    var c = _Mf._X1.opennedTournament;
    _Tf._Ek._29.getLocalDateFromString(c.model.info.startDate, !0) ? this.showSeatingTimerAction(a) : c.getLobbyTournamentInfoFromTournament()
  };
  this.onChangeTournamentInfo = function (a) {
    var c = this.getOpenedTable();
    if (!c) return !1;
    c = _Mf._q1._5p(c.id);
    if (a.id !== c.model.info.tournamentId) return !1;
    this.showSeatingTimerAction(a.id)
  };
  this.showSeatingTimerAction = function () {
    var a = _Mf._X1.opennedTournament.model.info,
      c = _Tf._Ek._29.getLocalDateFromString(a.startDate, !0);
    if (c) {
      var d = new Date,
        a = (new Date(c.getTime() + 1E3 * a.seatingTime)).getTime();
      d.getTime() < a && _me.tableTimer.showSeatingTimer(a)
    }
  }
}(_me);
_me.account = new function (a, b) { console.log('2081');
  this.isLogining = ko.observable(!1);
  this.loginigIndicator = new a(b.locale()._A8._20);
  this.onSigningInStatus = function (a) { console.log('2084'); console.log(a);
    this.loginigIndicator.status(b.locale()._A8._20);
    this.loginigIndicator._Gh(a)
  };
  _Mf._ks.addListener(_Ag._vk, this.onSigningInStatus, this);
  this.isRegistering = ko.observable(!1);
  this.isLogined = ko.observable(!1);
  this.canSocialLogin = function () {  console.log('2091')
    return "undefined" != typeof _Xl._yn
  };
  this.login = function () { console.log('2094');
    this.isLogining() || (this.isLogining(!0), _Mf._L2._k8())
  };
  console.log('this.start'); 
  this.start = function () { console.log('2097');
    this.isLogined() ? b.lobbyTablesFilters.playNow() : b.menu.openPage("login")
  };
  this.register = function () {
    this.isRegistering(!0);
    _Mf._L2._zq()
  };
  this._B3 = function () {
    _Mf._Md._E8(0)
  };
  this.isLogined.subscribe(function (a) {
    a || this.isProcessingLogout(!1)
  }.bind(this));
  this.isProcessingLogout = ko.observable(!1);
  this.logout = function () {
    this.isProcessingLogout() || (this.isProcessingLogout(!0), _Mf._L2._Z4())
  }
}(Loader._hi, _me);
_me.home = new function () { }(_me);
_me.options = new function (a) {
  this.openOptionsDialog = function () {
    _Mf._Md.showExternalDialog(_Tf._0l._N1._ff.OPTIONS);
    _me.options.isNeedReopenSettingsDialog = !0
  }.bind(this);
  this.openChangeableGraphicsSettings = function (b) {
    this.hideOptionsDialog();
    a.changeableGraphics.openPageToSelectStyle(b)
  }.bind(this);
  this.closeOptionsDialog = function () {
    _me.options.isNeedReopenSettingsDialog = !1;
    _Mf._Md.closeExternalDialog(_Tf._0l._N1._ff.OPTIONS)
  }.bind(this);
  this.hideOptionsDialog = function () {
    _Mf._Md.closeExternalDialog(_Tf._0l._N1._ff.OPTIONS)
  }.bind(this);
  this.openLanguageSettingsDialog = function () {
    _Mf._Md.closeExternalDialog(_Tf._0l._N1._ff.OPTIONS);
    _Mf._Md.showExternalDialog(_Tf._0l._N1._ff.OPTIONS_LANGUAGE)
  }.bind(this);
  this.closeLanguageSettingsDialog = function () {
    _me.options.isNeedReopenSettingsDialog && this.openOptionsDialog();
    _Mf._Md.closeExternalDialog(_Tf._0l._N1._ff.OPTIONS_LANGUAGE)
  }.bind(this);
  this.backFromLanguageSettingsDialog = function () {
    _Mf._Md.closeExternalDialog(_Tf._0l._N1._ff.OPTIONS_LANGUAGE)
  }.bind(this);
  this.openSettingsDialog = function () {
    _Mf._Md.showExternalDialog(_Tf._0l._N1._ff.OPTIONS_SETTINGS)
  }.bind(this);
  this.closeSettingsDialog = function () {
    _Mf._Md.closeExternalDialog(_Tf._0l._N1._ff.OPTIONS_SETTINGS);
    this.closeOptionsDialog()
  }.bind(this);
  this.backFromSettingsDialog = function () {
    _Mf._Md.closeExternalDialog(_Tf._0l._N1._ff.OPTIONS_SETTINGS)
  }.bind(this);
  this.openPage = function (b) {
    console.log('2155');
    this.hideOptionsDialog();
    a.menu.openPage(b)
  }.bind(this);
  this.isNeedReopenSettingsDialog = !1;
  this.logout = function () {
    _me.menu.logout();
    this.closeOptionsDialog()
  }.bind(this)
}(_me);
_me.chat = new function (a, b) {
  this.chatHistory = new _c2(null, !1, b.countOnChatMessages, b.isLimitedCountOnChat, b.CountLimitedChat);
  this.miniChatHistory = new _c2(null, !1, b.countOnChatMessages, b.isLimitedCountOnChat, b.CountLimitedChat);
  this.isOpenChat = ko.observable(!1);
  this.isNewMessageInChat = ko.observable(!1);
  this.currentChatTab = ko.observable("chat");
  this.getMaxChatStringLength = function () {
    return parseInt(_Mf._Ta.clientConfig.MaxChatStringLength)
  };
  this.openChatTab = function () {
    a.chat.currentChatTab("chat")
  };
  this.openDealerTab = function () {
    a.chat.currentChatTab("dealer")
  };
  this.openChat = function () {
    this.isOpenChat(!0);
    this.isNewMessageInChat(!1);
    var a = _me.tablesSnap.getOpenedTable();
    if (a && (_Mf._ks.emit(_Ag._e8, [a.id]), a = _Mf._q1._5p(a.id))) this.openChatDialog(), a._F7()
  }.bind(this);
  this.closeChat = function () {
    this.isOpenChat(!1);
    _Tf._N1.$(_Tf._0l._N1._Uq).blur();
    this.closeChatDialog()
  }.bind(this);
  this.openChatDialog = function () {
    _Mf._Md.showExternalDialog(_Tf._0l._N1._ff.TABLE_CHAT)
  }.bind(this);
  this.closeChatDialog = function () {
    _Mf._Md.closeExternalDialog(_Tf._0l._N1._ff.TABLE_CHAT)
  }.bind(this);
  this.isOpenChat.subscribe(function (a) {
    a || _Tf._hr._Yp(function () {
      _Mf._Md._E8({
        scrollToBottom: !0
      }, "table")
    })
  })
}(_me, _Tf._0l);
_me.tableTimer = new function (a) {
  this.timeStart = 0;
  this.remainingTime = ko.observable(0);
  this.isActiveTimer = ko.observable(!1);
  this.isSeatingTimer = ko.observable(!0);
  this.titleTableTimer = ko.computed(function () {
    return this.isSeatingTimer() ? a.locale()._T8._G3 : a.locale()._T8._l0
  }, this);
  this.valueTableTimer = ko.computed(function () {
    var a = this.remainingTime();
    return !_Tf._Ek._29 ? "" : _Tf._Ek._29.getRemainingTimeString(a)
  }, this);
  this.showSeatingTimer = function (a) {
    this.isSeatingTimer(!0);
    this.timeStart = a;
    this.isActiveTimer() ? this.isActiveTimer(!0) : (this.isActiveTimer(!0), this.onTimerTick())
  }.bind(this);
  this.showBreakTimer = function (a) {
    this.isSeatingTimer(!1);
    this.timeStart = a;
    this.isActiveTimer() ? this.isActiveTimer(!0) : (this.isActiveTimer(!0), this.onTimerTick())
  }.bind(this);
  this.hideTimer = function () {
    this.isActiveTimer(!1);
    this.timeStart = 0;
    this.remainingTime(0)
  }.bind(this);
  this.onTimerTick = function () {
    var a = (new Date).getTime();
    !this.isActiveTimer() || a > this.timeStart ? this.hideTimer() : (this.remainingTime(this.timeStart - a),
      setTimeout(this.onTimerTick, 500))
  }.bind(this)
}(_me);
_Tf._N1 = {
  cache: {},
  _cl: function (a) {
    a && "#" === a[0] && this._F5(a) ? delete this.cache[a] : this.cache = {}
  },
  $: function (a, b) {
    return b ? $(a) : "#" === a[0] && -1 === a.search(".") ? this._F5(a) || $(a) : this._Rl(a)
  },
  _F5: function (a) {
    if ("undefined" === typeof this.cache[a] || null === this.cache[a]) this.cache[a] = $(a), "undefined" === typeof this.cache[a][0] && (this.cache[a] = null);
    return this.cache[a]
  },
  _Rl: function (a) {
    return $(a)
  },
  _ab: function (a, b, c, d) {
    d = d || !1;
    (a = c ? $(a) : this._F5(a)) && (d && "input" === a.prop("tagName").toLowerCase() ? a.attr("placeholder",
      b) : a.text(b))
  },
  _4k: function (a, b) {
    var c = this._F5(a);
    c && c.append(b)
  },
  _Zk: function (a, b) {
    var c = this._F5(a);
    c && -1 == c.text().search(b) && c.append(" " + b)
  },
  _Es: function (a) {
    (a = this._F5(a)) && a.text("")
  },
  _Sn: function (a, b, c) {
    c = c || !1;
    (a = this._F5(a)) && (c ? $(b).insertBefore(a) : $(b).appendTo(a))
  },
  _c6: function (a, b, c) {
    c = c || !1;
    //   console.log("sign up profile a ====> " + JSON.stringify(a));
    //   console.log("sign up profile b ====> " + JSON.stringify(b));
    //   console.log("sign up profile c ====> " + JSON.stringify(c));

    (a = this._F5(a)) && (c ? $(b).prependTo(a) : $(b).appendTo(a))
  },
  insertOptionsToSelect: function (a, b) {
    var c = this._F5(a);
    c && ($(b).appendTo(c), c.selectmenu("refresh", !0))
  },
  _4d: function (a) {
    var b = this._F5(a);
    b && "UL" == b.prop("tagName").toUpperCase() && (b.listview("refresh"), this._E3(a))
  },
  _E3: function (a) {
    a = this._F5(a).prev().find("input:jqmData(type=search)");
    0 !== a.length && a.trigger("keyup")
  },
  _Lb: function (a) {
    (a = $(a)) && a.attr("disabled", "disabled")
  },
  _E: function (a) {
    (a = $(a)) && a.removeAttr("disabled")
  },
  disableLinkButton: function (a) {
    (a = $(a)) && a.addClass("ui-disabled")
  },
  enableLinkButton: function (a) {
    (a = $(a)) && a.removeClass("ui-disabled")
  },
  disableBlock: function (a) {
    (a = $(a)) && a.addClass("ui-disabled")
  },
  enableBlock: function (a) {
    (a = $(a)) && a.removeClass("ui-disabled")
  },
  _H0: function (a, b) {
    var c = $(a);
    if (c) if ("undefined" != typeof b) c.attr("checked", b).checkboxradio("refresh");
    else return c.next().hasClass("ui-checkbox-on")
  },
  _Wc: function (a, b) {
    this._H0(a, b)
  },
  _36: function (a, b, c, d, e) {
    e = e || b;
    if (a = $(a)) a.slider().attr("min", b).attr("max", c).attr("step", d).val(e), a.slider("refresh")
  },
  valSliderWithoutBound: function (a, b) {
    if ("undefined" !== typeof b) {
      var c = $(a);
      c && (c.slider().val(b), c.slider("refresh"))
    }
  },
  valSelectByIndex: function (a, b) {
    var c = this._F5(a);
    if (c) c[0].selectedIndex = b, c.selectmenu("refresh")
  },
  valSelectByValue: function (a, b) {
    var c = 0;
    $(a + " option").each(function (a, e) {
      e.value == b && (c = a)
    });
    this.valSelectByIndex(a, c)
  },
  val: function (a, b) {
    var c = this._F5(a);
    if (c) {
      if ("undefined" === typeof b) return c.val();
      c.val(b)
    }
  },
  _x: function (a, b) {
    var c = this._F5(a);
    c && c.attr("src", b)
  },
  _dm: function (a) {
    $(a + " input").val("")
  },
  _Dp: function () {
    return this.$("html").hasClass("ui-loading")
  },
  remove: function (a) {
    (a = this._F5(a)) && a.remove()
  },
  __i: function (a, b, c, d,
    e, f) {
    var g = _Tf._0l._N1,
      h = _Tf._41,
      e = e || h.$("_j3._70"),
      f = f || h.$("_j3._S4"),
      d = d || function () { }, j = ("" + Math.random()).substr(2);
    $(g._0j + j).live(EventType._qc, function (a) {
      _Tf._N1.eventCorrection(a, !0);
      try {
        !1 !== c() && $(g._rc + j).remove()
      } catch (b) { }
    });
    $(g._J4 + j).live(EventType._qc, function (a) {
      _Tf._N1.eventCorrection(a, !0);
      try {
        d(), $(g._rc + j).remove()
      } catch (b) { }
    });
    this._c6("#" + _Mf._Md.getVisiblePage(), _h8._wc._an.CONFIRM_FORM.fill({
      header: a || h.$("_X5._z2"),
      text: b,
      oktext: e,
      canceltext: f,
      id: g._rc.substr(1) + j,
      idok: g._0j.substr(1) + j,
      idcancel: g._J4.substr(1) + j
    }));
    return g._rc + j
  },
  _zh: function (a, b, c, d, e) {
    if (b) {
      var f = _Tf._0l._N1,
        g = _Tf._41,
        d = d || g.$("_j3._B0"),
        c = c || function () { }, e = e || function () { }, h = ("" + Math.random()).substr(2);
      $(f._e0 + h).live(EventType._qc, function (a) {
        _Tf._N1.eventCorrection(a, !0);
        try {
          $(f._Sc + h).remove()
        } catch (b) { }
        c();
        e();
        a.preventDefault()
      });
      $(f._52 + h).live(EventType._qc, function (a) {
        _Tf._N1.eventCorrection(a, !0);
        try {
          $(f._Sc + h).remove(), "undefined" !== typeof e && e()
        } catch (b) { }
        a.preventDefault()
      });
      this._c6("#" + _Mf._Md.getVisiblePage(),
        _h8._wc._an.ALERT_FORM.fill({
          header: a || g.$("_X5._N"),
          text: b,
          oktext: d,
          id: f._Sc.substr(1) + h,
          idok: f._e0.substr(1) + h,
          idclose: f._52.substr(1) + h
        }));
      return f._Sc + h
    }
  },
  showInputDialog: function (a, b, c, d) {
    this.__i("", '{1}<input id="{0}" type="password" value="" style="width: 90%; background: #fff; color: #000;"></input>'.format(a, b), c, d, _Tf._41.$("_j3._B0"), _Tf._41.$("_j3._76"))
  },
  showInfoDialog: function (a, b, c, d, e, f) {
    e = e || _Mf._Md.getVisiblePage();
    this._c6("#" + e + " .ui-content " + (f || ""), (d ? _h8._wc._an.BLOCKED_INFO_FORM : _h8._wc._an.INFO_FORM).fill({
      text: c,
      idtext: b,
      id: a
    }))
  },
  showOrientationDialog: function (a, b, c) {
    this._c6("body", _h8._wc._an.INFO_ORIENTATION_FORM.fill({
      text: c || _Tf._41.$("_e5._H1"),
      id: a || _Tf._0l._N1._ys.substr(1),
      idtext: b || _Tf._0l._N1._Wp.substr(1)
    }))
  },
  showPageError: function () { },
  eventCorrection: function (a, b, c) {
    a = a || window.event;
    if (!0 === b) a.preventDefault ? a.preventDefault() : a.returnValue = !1;
    if (!0 === c) a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
  }
};
_Tf._0r._qn = {
  _f: {
    $: "ClientPlayNowRequest",
    strategy: "",
    gameType: "",
    moneyType: "",
    cashAmount: 0
  },
  _p: {
    $: "AddPlayMoney"
  },
  _B: {
    $: "Logout"
  },
  _: {
    $: "Logout"
  },
  _3: {
    $: "ClientVersion",
    locale: "en",
    clientVersion: "HTML5"
  },
  _w: {
    $: "Login",
    oldAuth: "null",
    password: "",
    login: ""
  },
  _7: {
    $: "Login",
    oldAuth: "null",
    password: "",
    login: ""
  },
  _E: {
    $: "Login",
    oldAuth: "null",
    password: "",
    login: ""
  },
  _M: {
    $: "Register",
    nickName: "",
    displayName: "",
    firstName: "",
    familyName: "",
    middleName: "",
    password: "",
    country: "",
    state: "",
    zipCode: "",
    city: "",
    phoneNumber: "",
    eMail: "",
    address: "",
    gender: 77,
    bonusCode: "",
    referredBy: "",
    tag: "",
    pre: "",
    dob: "",
    pro: 0,
    proColor: 0
  },
  _5: {
    $: "GetGameServer",
    gameType: ""
  },
  _t: {
    $: "GetBalance"
  },
  _d: {
    $: "GetLobbyState"
  },
  _P: {
    $: "GetFirstPartOfTablesList",
    gameType: "",
    filter: "",
    maxNumberOfTables: 0
  },
  _8: {
    $: "GetPartOfTablesList",
    gameType: "",
    tableIndexFrom: 0,
    tableIndexTo: 0
  },
  _6: {
    $: "SelectTable",
    password: "",
    tableId: ""
  },
  _c: {
    $: "ReserveSeat",
    seatIdx: "",
    tableId: ""
  },
  _2: {
    $: "UnreserveSeat",
    tableId: ""
  },
  _b: {
    $: "SitDown",
    password: "",
    tableId: "",
    seatIdx: "",
    cash: ""
  },
  _D: {
    $: "SitDown",
    password: "",
    tableId: "",
    seatIdx: "",
    cash: ""
  },
  _G: {
    $: "Play",
    funds: "",
    action: "",
    tableId: ""
  },
  _i: {
    $: "PlayEx",
    funds: "",
    action: "",
    tableId: "",
    cardIndexes: []
  },
  _K: {
    $: "CrapsPlay",
    action: "",
    tableId: "",
    stakes: []
  },
  _e: {
    $: "LeaveTableWithoutUnsubsribe",
    tableId: ""
  },
  _r: {
    $: "LeaveTable",
    tableId: ""
  },
  _O: {
    $: "GoToAway",
    tableId: ""
  },
  _l: {
    $: "ReturnFromAway",
    tableId: ""
  },
  _s: {
    $: "GetTableState",
    tableId: ""
  },
  _q: {
    $: "GetTableState",
    tableId: ""
  },
  _u: {
    $: "JoinWaitList",
    tableId: "",
    join: "",
    password: ""
  },
  _C: {
    $: "GetTableState",
    tableId: ""
  },
  _n: {
    $: "Login",
    oldAuth: "null",
    password: "",
    login: ""
  },
  _v: {
    $: "GetTournamentsList",
    tournamentType: ""
  },
  _k: {
    $: "GetLobbyTournamentInfo",
    tournamentId: ""
  },
  _y: {
    $: "GetLobbyTournamentInfo",
    tournamentId: ""
  },
  _a: {
    $: "RegisterInTournament",
    tournamentId: "",
    password: "",
    couponId: "0"
  },
  _m: {
    $: "UnregisterInTournament",
    tournamentId: ""
  },
  _g: {
    $: "UnsubscribeTournament",
    tournamentId: ""
  },
  _9: {
    $: "SubscribeTournament",
    tournamentId: ""
  },
  _1: {
    $: "GetPlayerTournaments",
    playerId: ""
  },
  _N: {
    $: "GetTournamentServer",
    tournamentId: ""
  },
  _I: {
    $: "GetTournamentTables",
    tournamentId: ""
  },
  _J: {
    $: "PlayerInTournamentStatusRequest",
    tournamentId: ""
  },
  _4: {
    $: "GetPlayerTablesByPlayerId",
    playerId: "",
    synchronous: "true"
  },
  _L: {
    $: "GetPlayerTablesByPlayerId",
    playerId: "",
    synchronous: "true"
  },
  _j: {
    $: "SelectTable",
    password: "",
    tableId: ""
  },
  _z: {
    $: "Play",
    funds: "",
    action: "",
    tableId: ""
  },
  _Q: {
    $: "LeaveTableWithoutUnsubsribe",
    tableId: ""
  },
  _x: {
    $: "LeaveTable",
    tableId: ""
  },
  _A: {
    $: "GoToAway",
    tableId: ""
  },
  _h: {
    $: "ReturnFromAway",
    tableId: ""
  },
  _F: {
    $: "SitDown",
    password: "",
    tableId: "",
    seatIdx: "",
    cash: ""
  },
  _0: {
    $: "TournamentConfirm",
    tournamentId: ""
  },
  _o: {
    $: "Chat",
    tableId: "",
    chatMessage: '<a><chat-message creation-time="{time}" author="" level="0" message="{text}" author-id="{player}" /></a>'
  },
  _H: {
    $: "Chat",
    tableId: "",
    chatMessage: '<a><chat-message creation-time="{time}" author="" level="0" message="{text}" author-id="{player}" /></a>'
  }
};
_Tf._0r._Tr = {
  _l: "ServerDown",
  _5m: "ClientPlayNowResponse",
  _Hm: "AuthState",
  _S7: "ConfigureClient",
  _Dm: "RulesConfig",
  _B8: "LobbyState",
  _g5: "Chat",
  _z3: "GameServer",
  _bp: "Result",
  _Y9: "UserDetails",
  _3m: "PartOfTablesList",
  _sf: "GoToTable",
  _G8: "BaccaratGameState",
  _H6: "BlackJackGameState",
  _xs: "PaiGowGameState",
  _Wj: "CrapsGameState",
  _Hq: "CrapsTableDescription",
  _81: "GameState",
  _l2: "TableEvent",
  _Zg: "NotifyFromServer",
  _Q8: "TableState",
  _N: "SeatReserved",
  _u: "JackpotAwarded",
  _d2: "TournamentsList",
  _U7: "LobbyTournamentInfo",
  _88: "PlayerTournaments",
  _d7: "TournamentClosed",
  _j4: "TournamentStarted",
  _K8: "TournamentInvite",
  _aq: "TournamentServer",
  _Gq: "TournamentTables",
  _ga: "TournamentState",
  _4j: "PlayerInTournamentStatusNotification",
  _fr: "TournamentStateChanged",
  _ld: "PlayerTables",
  _E1: "TournamentSeatedDown",
  _oi: "Ping",
  _Za: "_p",
  _3n: "_f",
  _49: "_3",
  _7s: "_",
  _j0: "_B",
  _Ce: "_5",
  _qh: "_E",
  _vg: "_w",
  _D7: "_7",
  _5o: "_t",
  _Tg: "_P",
  _V8: "_8",
  _ck: "_s",
  _A1: "_q",
  __e: "_u",
  _Bs: "_d",
  _Bj: "_6",
  _0n: "_M",
  _E2: "_c",
  _wr: "_2",
  _U8: "_b",
  _r5: "_D",
  _i4: "_G",
  _Dq: "_e",
  _e6: "_r",
  _Fr: "_O",
  _6p: "_l",
  _Jg: "_C",
  _18: "_o",
  _o1: "_L",
  _x6: "_n",
  _u8: "_v",
  _71: "_k",
  _7m: "_y",
  _Jm: "_a",
  _Jj: "_m",
  _Wb: "_9",
  _Ds: "_g",
  _Gl: "_1",
  _3s: "_N",
  _9r: "_I",
  _Y2: "_J",
  _ye: "_4",
  _kn: "_j",
  _Aj: "_z",
  _ea: "_Q",
  _oj: "_x",
  _Op: "_A",
  _yk: "_h",
  _md: "_F",
  _Lp: "_H",
  _X: "_0",
  _I1: "AvatarsList",
  _66: "AvatarAssign",
  _z0: "GetAuth",
  _1i: "GetAuthAfterRegistration",
  _Yi: "CreateToken",
  _5n: "CreateTokenGuest",
  _m9: "GetNodeProxyAddress",
  _is: "_z",
  _h: "_i",
  _Xc: "_K",
  _le: "LoggerMessage"
};
_Tf._0r.parse = {
  Int: function (a) {
    return "" === a ? 0 : parseInt(a)
  },
  String: function (a) {
    return "string" != typeof a ? "" + a : a
  },
  Bool: function (a) {
    return "true" === a
  },
  JSON: function (a) {
    return $.parseJSON(a)
  },
  _Sf: function (a) {
    var a = a.replace(/^[\s\n\r\t]*[<][\?][xml][^<^>]*[\?][>]/, ""),
      b;
    window.ActiveXObject ? (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = !1, b.loadXML(a)) : b = (new DOMParser).parseFromString(a, "application/xml");
    return b
  },
  __m: function (a) {
    var b = null,
      c;
    try {
      c = _Tf._0r.parse._Sf(a);
      if (9 != c.nodeType) throw "not root node";
      c = c.firstChild;
      var d = _Tf._0r.parse._J9(c.attributes);
      if (!d.t || "undefined" === typeof _Tf._0r._Gs[d.t]) throw "unknown type";
      b = new _Tf._0r._Gs[d.t];
      b.id = _Tf._0r.parse.Int(d.id);
      b.type = d.t;
      if (!b._n9(c)) throw "bad message structure in " + d.t;
    } catch (e) {
      return null
    }
    return b
  },
  _J9: function (a) {
    for (var b = {}, c = a.length, d, e = 0; e < c; e++) d = a[e], b[d.nodeName] = d.nodeValue;
    return b
  }
};
_Tf._0r.build = {
  Value: function (a, b, c, d, e) {
    c = "undefined" != typeof e ? c[e][a] : c[a];
    e = b;
    c && (e = _Tf._0r.parse[c[0] || "String"](b), a = c[1] || a);
    d[a] = e
  },
  Object: function (a, b, c) {
    for (var d = {}, e = b.length, f = 0; f < e; f++) this.Value(b[f].nodeName, b[f].nodeValue, c.values, d, a);
    return d
  },
  Array: function (a, b) {
    for (var c = a.length, d = [], e = 0; e < c; e++) d.push(this.Object(a[e].nodeName, a[e].attributes, b));
    return d
  }
};
_Tf._0r.Values["chat-message"] = {
  level: ["Int"],
  "author-id": ["Int", "authorId"],
  "creation-time": [null, "creationTime"],
  author: null,
  message: null
};
_Tf._0r.Values.GameState = {};
_Tf._0r.Values.GameState.g = {
  ti: ["Int", "tableId"],
  ts: ["Int", "tableState"],
  gi: ["Int", "gameId"]
};
_Tf._0r.Values.GameState.d = {
  p: ["Int", "pot"],
  r: ["Int", "rake"],
  c: [null, "cards"]
};
_Tf._0r.Values.GameState.s = {
  i: ["Int", "id"],
  c: ["Int", "cash"],
  b: ["Int", "bet"],
  a: ["Int", "avatar"],
  r: ["Int", "rate"],
  f: ["Int", "flags"],
  d: [null, "cards"],
  n: [null, "name"],
  dn: [null, "displayName"],
  y: [null, "address"]
};
_Tf._0r.Values.GameState.ss = {
  l: ["Bool", "isLosing"],
  hc: [null, "highCombination"],
  lc: [null, "lowCombination"],
  hcm: [null, "highCombinationMnemocode"],
  lcm: [null, "lowCombinationMnemocode"]
};
_Tf._0r.Values.GameState.t = {
  bt: ["Int", "brokenTime"],
  tm: ["Int", "timePerMove"],
  tr: ["Int", "timeRemains"],
  b: ["Bool", "isBroken"]
};
_Tf._0r.Values.GameState.m = {
  r: ["Int", "round"],
  di: ["Int", "dealerIndex"],
  sb: ["Int", "smallBlindIndex"],
  bb: ["Int", "bigBlindIndex"],
  ai: ["Int", "activeIndex"],
  ci: ["Int", "clientIndex"]
};
_Tf._0r.Values.GameState.f = {
  c: ["Int", "callFunds"],
  mn: ["Int", "minRaise"],
  mb: ["Int", "virtualMaxBet"],
  mx: ["Int", "maxRaise"],
  s: ["Int", "step"]
};
_Tf._0r.Values.GameState.p = {
  v: ["Int", "value"]
};
_Tf._0r.Values.GameState.a = {
  t: ["Int", "type"]
};
_Tf._0r.Values.GameState.animationevent = {
  type: ["Int"],
  action: ["Int"],
  amount: ["Int"],
  "seat-idx": ["Int", "seatIndex"],
  "table-msg": [null, "tableMessage"],
  "side-pot": ["Int", "sidePot"],
  hcm: [null, "highCombinationMnemocode"],
  lcm: [null, "lowCombinationMnemocode"]
};
_Tf._0r.Values["player-in-tournament-info"] = {
  i: ["Int", "id"],
  "player-id": ["Int", "playerId"],
  "player-nick": ["String", "playerNick"],
  "display-name": ["String", "playerDisplayName"],
  "player-country": [null, "playerCountry"],
  "player-city": [null, "playerCity"],
  "player-level": ["Int", "playerLevel"],
  "out-level": ["Int", "outLevel"],
  cash: ["Int"],
  place: ["Int"],
  placeTo: ["Int"],
  participated: ["Bool", "isParticipated"],
  "player-rate": [null, "playerRate"],
  "table-id": ["Int", "tableId"],
  "main-prize-amount": ["Int", "mainPrizeAmount"],
  "second-prize-amount": ["Int", "secondPrizeAmount"],
  "extra-buy-in": ["Int", "extraBuyIn"],
  "number-rebuy": ["Int", "numberRebuy"],
  "number-addon": ["Int", "numberAddon"],
  "expected-place": ["Int", "expectedPlace"],
  "expected-placeTo": ["Int", "expectedPlaceTo"],
  "with-ticket": ["Bool", "isWithTicket"],
  pro: ["Bool"],
  "pro-color": [null, "proColor"]
};
_Tf._0r.Values.l = {
  a: ["Int", "ante"],
  b: ["Int", "blind"]
};
_Tf._0r.Values["seat-info"] = {
  "player-id": ["Int", "playerId"],
  "player-nick": [null, "playerNick"],
  "display-name": [null, "playerDisplayName"],
  "player-country": [null, "playerCountry"],
  "player-city": [null, "playerCity"],
  cash: ["Int"],
  "player-rate": [null, "playerRate"],
  "player-avatar": ["Int", "playerAvatar"],
  pro: ["Bool"],
  "pro-color": [null, "proColor"]
};
_Tf._0r.Values["server-info"] = {
  id: ["Int"],
  "slot-idx": ["Int", "slotIndex"],
  "game-type": ["Int", "gameType"],
  "up-time": ["Int", "upTime"],
  terminating: ["Bool"]
};
_Tf._0r.Values["table-event"] = {
  "table-id": ["Int", "tableId"],
  "event-type": ["Int", "type"],
  text: null
};
_Tf._0r.Values.tb = {
  i: ["Int", "id"],
  t: ["Int", "tournamentId"],
  g: ["Int", "gameType"],
  s: ["Int", "baseStake"],
  p: ["Int", "potType"],
  m: ["Int", "moneyType"],
  tm: ["Int", "baseTimeout"],
  mp: ["Int", "maxPlayer"],
  np: ["Int", "numberPlayers"],
  mn: ["Int", "minCash"],
  mx: ["Int", "maxCash"],
  h: ["Int", "handsPerHour"],
  a: ["Int", "avgPot"],
  d: ["Bool", "isChatDisabled"],
  b: ["Bool", "isBroken"],
  n: [null, "name"],
  f: [null, "flags"],
  tag: null,
  minb: ["Int", "minBet"],
  maxb: ["Int", "maxBet"],
  nod: ["Int", "numberOfDecks"]
};
_Tf._0r.Values["table-seat"] = {
  tableId: ["Int"],
  seatIdx: ["Int"]
};
_Tf._0r.Values.tr = {
  i: ["Int", "id"],
  n: [null, "name"],
  tt: ["Int", "tournamentType"],
  sd: [null, "startDate"],
  s: ["Int", "state"],
  b: ["Int", "buyIn"],
  e: [null, "entryFee"],
  na: ["Int", "numberPlayersActive"],
  mx: ["Int", "maxPlayers"],
  np: ["Int", "numberPlayers"],
  g: ["Int", "gameType"],
  m: ["Int", "moneyType"],
  p: ["Int", "potType"],
  tm: ["Int", "baseTimeout"],
  f: [null, "flags"],
  gp: [null, "guaranteedPrize"],
  ts: [null, "tableSize"],
  npwt: null,
  npnp: null,
  nkp: null
};
_Tf._0r.Values.trx = {
  i: ["Int", "id"],
  n: [null, "name"],
  tt: ["Int", "tournamentType"],
  sd: [null, "startDate"],
  s: ["Int", "state"],
  b: ["Int", "buyIn"],
  e: [null, "entryFee"],
  na: ["Int", "numberPlayersActive"],
  mx: ["Int", "maxPlayers"],
  np: ["Int", "numberPlayers"],
  mn: ["Int", "minPlayers"],
  g: ["Int", "gameType"],
  m: ["Int", "moneyType"],
  p: ["Int", "potType"],
  tm: ["Int", "baseTimeout"],
  f: [null, "flags"],
  gp: [null, "guaranteedPrize"],
  l: [null, "level"],
  le: [null, "lastEvent"],
  st: [null, "seatingTime"],
  bt: [null, "breakTime"],
  lt: [null, "levelTime"],
  rp: [null, "regularPeriod"],
  sf: [null, "startFunds"],
  ts: [null, "tableSize"],
  rd: [null, "registrationDate"],
  tl: [null, "playingTimeLimit"],
  pi: ["Int", "parentId"],
  ns: [null, "numSelectedPlayers"],
  ci: ["Int", "creatorId"],
  ml: ["Int", "minPlayerLevel"],
  p2m: [null, "prize2MoneyType"],
  p2: [null, "prize2"],
  p2p: [null, "prize2Players"],
  p2d: [null, "prize2Distribution"],
  c: [null, "comment"],
  rpt: [null, "requirePlayerTag"],
  tag: null,
  ra: [null, "rebuyAllowed"],
  ra2: [null, "rebuy2xAllowed"],
  aa: [null, "addonAllowed"],
  sb: [null, "startingBlindAmount"],
  bi: [null, "blindIncreaseCoeff"],
  tp: [null, "prizeDistribution"],
  atl: [null, "addonTimeLimit"],
  acha: [null, "addonChipsAmount"],
  achc: [null, "addonChipsCost"],
  tpsch: [null, "tournamentPrizeSchemeId"],
  uc: [null, "useCoupons"],
  mecv: [null, "minEntryCouponValue"],
  lrtl: ["Int", "lateRegistrationTimeLimit"],
  npwt: null,
  npnp: null,
  nkp: null,
  pt: null,
  nra: null,
  rtl: null,
  rhthr: null,
  rcha: null,
  rchc: null,
  pts: null
};
_Tf._0r.Values["personal-jackpot"] = {
  "player-id": ["Int", "playerId"],
  "player-nick": [null, "playerNick"],
  amount: ["Int"],
  "jackpot-type": ["Int", "jackpotType"],
  "jackpot-player-type": ["Int", "jackpotPlayerType"],
  combination: null
};
_Tf._0r.Values.BaccaratGameState = {};
_Tf._0r.Values.BaccaratGameState.g = {
  ti: ["Int", "tableId"],
  tableState: ["Int"],
  tm: ["Int", "timePerMove"],
  tr: ["Int", "timeRemains"],
  playerCards: ["String"],
  dealerCards: ["String"],
  playerRank: ["Int"],
  dealerRank: ["Int"],
  cards_in_shoe: ["Int", "cardsInShoe"],
  gi: ["Int", "gameId"],
  min_ba: ["Int", "minBetAmount"],
  max_ba: ["Int", "maxBetAmount"]
};
_Tf._0r.Values.BaccaratGameState.s = {
  seatIdx: ["Int"],
  playerId: ["Int", "id"],
  playerNick: [null, "nick"],
  playerBetAmount: ["Int"],
  dealerBetAmount: ["Int"],
  tieBetAmount: ["Int"],
  dealerPairBetAmount: ["Int"],
  playerPairBetAmount: ["Int"],
  cards: ["String"],
  b: ["Int", "bet"],
  c: ["Int", "cash"],
  d: ["Int"],
  f: ["Int", "flags"]
};
_Tf._0r.Values.BaccaratGameState.a = {
  t: ["Int", "type"]
};
_Tf._0r.Values.BaccaratGameState.animationevent = {
  type: ["Int"],
  action: ["Int"],
  amount: ["Int"],
  "bet-idx": ["Int", "betIndex"],
  "seat-idx": ["Int", "seatIndex"],
  hcm: [null, "highCombinationMnemocode"],
  lcm: [null, "lowCombinationMnemocode"]
};
_Tf._0r.Values.PaiGowGameState = {};
_Tf._0r.Values.PaiGowGameState.g = {
  ti: ["Int", "tableId"],
  tableState: ["Int"],
  tm: ["Int", "timePerMove"],
  tr: ["Int", "timeRemains"],
  playerCards: ["String"],
  dealerCards: ["String"],
  playerRank: ["Int"],
  dealerRank: ["Int"],
  cards_in_shoe: ["Int", "cardsInShoe"],
  gi: ["Int", "gameId"],
  min_ba: ["Int", "minBetAmount"],
  max_ba: ["Int", "maxBetAmount"],
  wfdc: ["Bool"]
};
_Tf._0r.Values.PaiGowGameState.s = {
  f: ["Int", "flags"],
  c: ["Int", "cash"],
  playerId: ["Int", "id"],
  playerNick: [null, "nick"],
  displayName: [null, "name"],
  seatIdx: ["Int"],
  splitActive: ["Bool"],
  splitIndex: ["Int"],
  cards1: null,
  cards2: null,
  cards3: null,
  cards4: null,
  rank1: ["Int"],
  rank2: ["Int"],
  rank3: ["Int"],
  bet1: ["Int"],
  bet2: ["Int"],
  bet3: ["Int"],
  bet4: ["Int"],
  insuranceAmount: ["Int"]
};
_Tf._0r.Values.PaiGowGameState.a = {
  t: ["Int", "type"]
};
_Tf._0r.Values.PaiGowGameState.animationevent = {
  type: ["Int"],
  action: ["Int"],
  amount: ["Int"],
  "bet-idx": ["Int", "betIndex"],
  "bet-idx2": ["Int", "betIndex2"],
  "seat-idx": ["Int", "seatIndex"],
  hcm: [null, "highCombinationMnemocode"],
  lcm: [null, "lowCombinationMnemocode"]
};
_Tf._0r.Values.BlackJackGameState = {};
_Tf._0r.Values.BlackJackGameState.ds = {
  cards: ["String", "cards"],
  rank: ["Int", "rank"]
};
_Tf._0r.Values.BlackJackGameState.g = {
  ti: ["Int", "tableId"],
  activePlayerIndex: ["Int", "activePlayerIndex"],
  tableState: ["Int"],
  tm: ["Int", "timePerMove"],
  tr: ["Int", "timeRemains"],
  cards_in_shoe: ["Int", "cardsInShoe"],
  min_ba: ["Int", "minBetAmount"],
  max_ba: ["Int", "maxBetAmount"],
  gi: ["Int", "gameId"]
};
_Tf._0r.Values.BlackJackGameState.s = {
  f: ["Int", "flags"],
  c: ["Int", "cash"],
  playerId: ["Int", "id"],
  playerNick: [null, "nick"],
  displayName: [null, "name"],
  seatIdx: ["Int"],
  splitActive: ["Bool"],
  splitIndex: ["Int"],
  cards1: null,
  cards2: null,
  cards3: null,
  cards4: null,
  rank1: ["Int"],
  rank2: ["Int"],
  rank3: ["Int"],
  bet1: ["Int"],
  bet2: ["Int"],
  bet3: ["Int"],
  bet4: ["Int"],
  insuranceAmount: ["Int"]
};
_Tf._0r.Values.BlackJackGameState.a = {
  t: ["Int", "type"]
};
_Tf._0r.Values.BlackJackGameState.animationevent = {
  type: ["Int"],
  action: ["Int"],
  amount: ["Int"],
  "bet-idx": ["Int", "betIndex"],
  "bet-idx2": ["Int", "betIndex2"],
  "seat-idx": ["Int", "seatIndex"],
  hcm: [null, "highCombinationMnemocode"],
  lcm: [null, "lowCombinationMnemocode"]
};
_Tf._0r.Values.CrapsGameState = {};
_Tf._0r.Values.CrapsGameState.g = {
  ti: ["Int", "tableId"],
  gi: ["Int", "gameId"],
  ts: ["Int", "tableState"],
  pt: ["Int", "pointValue"],
  sm: ["Int", "secondsPerPlayerMove"],
  tr: ["Int", "remainSecondsPerPlayerMove"],
  tm: ["Int", "timePerMove"],
  min_ba: ["Int", "minBetAmount"],
  max_ba: ["Int", "maxBetAmount"],
  tp: ["Int", "tablePauseType"],
  ps: ["Int", "pausedSeconds"],
  plrs: ["Int", "seats"],
  dc: ["Int", "diceValues"],
  aa: [null, "availableActions"],
  zn: [null, "allowedStakes "]
};
_Tf._0r.Values.CrapsGameState.s = {
  a: ["Int", "avatar"],
  b: ["Int", "bet"],
  c: ["Int", "cash"],
  d: [null, "dice"],
  dn: [null, "displayName"],
  f: ["Int", "flags"],
  i: ["Int", "id"],
  n: [null, "name"],
  p: ["Int", "point"],
  r: ["Int", "rate"],
  st: [null, "stakes"],
  y: [null, "playerCity"]
};
_Tf._0r.Values.CrapsGameState.st = {
  a: ["Int", "amount"],
  p: ["Int", "point"],
  t: ["Int", "type"]
};
_Tf._0r.Values.CrapsGameState.a = {
  t: ["Int", "type"]
};
_Tf._0r.Values.CrapsGameState.z = {
  t: ["Int", "type"]
};
_Tf._0r.Values.CrapsGameState.v = {
  f: ["Int", "first"],
  s: ["Int", "second"]
};
_Tf._0r.Values.CrapsGameState.animationevent = {
  type: ["Int"],
  action: ["Int"],
  amount: ["Int"],
  "bet-idx": ["Int", "betIndex"],
  "bet-idx2": ["Int", "betIndex2"],
  "seat-idx": ["Int", "seatIndex"],
  hcm: [null, "highCombinationMnemocode"],
  lcm: [null, "lowCombinationMnemocode"]
};
_Tf._0r.Values.CrapsTableDescription = {};
_Tf._0r.Values.CrapsTableDescription.deskLayout = {
  dz: ["Int"]
};
_Tf._0r.Values.CrapsTableDescription.dz = {
  t: ["Int", "type"],
  p: ["Int", "point"],
  n: ["Int"],
  d: ["Int"],
  name: ["String"]
};
_Tf._0r._Gs.ClientPlayNowResponse = function () {
  this.srcMsgId = 0;
  this.success = !0;
  this.tableSeats = []
};
_Tf._0r._Gs.ClientPlayNowResponse.prototype = {
  fields: {
    srcMsgId: ["Int"],
    success: ["Bool"]
  },
  values: {
    "table-seat": _Tf._0r.Values["table-seat"]
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if ("a" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Array(a[d].firstChild.childNodes, this);
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.AuthState = function () {
  this.srcMsgId = 0;
  this.auth = ""
};
_Tf._0r._Gs.AuthState.prototype = {
  fields: {
    srcMsgId: ["Int"],
    auth: null
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      a[d].firstChild && 3 == a[d].firstChild.nodeType ? _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this) : _Tf._0r.build.Value(c.n, null, this.fields, this)
    }
    return !0
  }
};
_Tf._0r._Gs.Chat = function () {
  this.tableId = 0;
  this.chatMessage = []
};
_Tf._0r._Gs.Chat.prototype = {
  fields: {
    tableId: ["Int"]
  },
  values: {
    "chat-message": _Tf._0r.Values["chat-message"]
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if ("a" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Array(a[d].firstChild.childNodes, this);
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.GameServer = function () {
  this.port = this.address = "";
  this.info = {};
  this.srcMsgId = 0
};
_Tf._0r._Gs.GameServer.prototype = {
  fields: {
    id: ["Int"],
    srcMsgId: ["Int"],
    address: null,
    port: null
  },
  values: {
    "server-info": _Tf._0r.Values["server-info"]
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if ("server-info" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Object("server-info", a[d].firstChild.attributes,
        this);
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.GameState = function () {
  this.gameState = {};
  this.events = []
};
_Tf._0r._Gs.GameState.prototype = {
  fields: {
    id: ["Int"]
  },
  values: {
    g: _Tf._0r.Values.GameState.g,
    d: _Tf._0r.Values.GameState.d,
    s: _Tf._0r.Values.GameState.s,
    t: _Tf._0r.Values.GameState.t,
    ss: _Tf._0r.Values.GameState.ss,
    m: _Tf._0r.Values.GameState.m,
    f: _Tf._0r.Values.GameState.f,
    p: _Tf._0r.Values.GameState.p,
    a: _Tf._0r.Values.GameState.a,
    animationevent: _Tf._0r.Values.GameState.animationevent
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n) || a[d].firstChild && 3 == a[d].firstChild.nodeType) return !1;
      if ("a" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Array(a[d].firstChild.childNodes, this);
      else if ("g" == a[d].firstChild.nodeName) {
        for (var e = _Tf._0r.build.Object("g", a[d].firstChild.attributes, this), f = a[d].firstChild.childNodes, g = f.length, h, j = 0; j < g; j++) switch (h = f[j].nodeName, h) {
          case "d":
            e.desk = _Tf._0r.build.Object(h, f[j].attributes, this);
            break;
          case "s":
            e.seats = _Tf._0r.build.Array(f[j].childNodes, this);
            break;
          case "t":
            e.time = _Tf._0r.build.Object(h,
              f[j].attributes, this);
            break;
          case "ss":
            e.seatState = _Tf._0r.build.Object(h, f[j].attributes, this);
            break;
          case "m":
            e.moves = _Tf._0r.build.Object(h, f[j].attributes, this);
            break;
          case "f":
            e.funds = _Tf._0r.build.Object(h, f[j].attributes, this);
            break;
          case "sp":
            e.pots = _Tf._0r.build.Array(f[j].childNodes, this);
            break;
          case "aa":
            e.availableActions = _Tf._0r.build.Array(f[j].childNodes, this);
            break;
          default:
            return !1
        }
        this[c.n] = e
      } else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.GoToTable = function () {
  this.seatIdx = 0;
  this.info = {};
  this.srcMsgId = 0
};
_Tf._0r._Gs.GoToTable.prototype = {
  fields: {
    srcMsgId: ["Int"],
    seatIdx: ["Int"]
  },
  values: {
    tb: _Tf._0r.Values.tb
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if ("tb" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Object("tb", a[d].firstChild.attributes, this);
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.LobbyState = function () {
  this.srcMsgId = 0;
  this.softPaused = this.chatDisabled = !1;
  this.jackpot = this.activeTournaments = this.activeTables = this.activePlayers = this.loggedInSessions = this.sessions = this.upTime = 0; console.log('3524');console.log(this.sessions);
  this.playingPlayersEffective = this.sessionsEffective = this.tablesEffective = this.monteCarloBoardJackpot = this.badBeatJackpot = this.omahaJackpot = this["omaha-jackpot"] = 0
};
_Tf._0r._Gs.LobbyState.prototype = {
  fields: {
    srcMsgId: ["Int"],
    upTime: ["Int"],
    sessions: ["Int"],
    loggedInSessions: ["Int"],
    activePlayers: ["Int"],
    activeTables: ["Int"],
    activeTournaments: ["Int"],
    jackpot: ["Int"],
    tablesEffective: ["Int"],
    sessionsEffective: ["Int"],
    playingPlayersEffective: ["Int"],
    chatDisabled: ["Bool"],
    softPaused: ["Bool"],
    "omaha-jackpot": ["Int", "omahaJackpot"],
    monteCarloBoardJackpot: ["Int"],
    badBeatJackpot: ["Int"]
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) throw "bad message's property syntax";
      a[d].firstChild && 3 == a[d].firstChild.nodeType ? _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this) : _Tf._0r.build.Value(c.n, null, this.fields, this)
    }
    delete this["omaha-jackpot"];
    return !0
  }
};
_Tf._0r._Gs.NotifyFromServer = function () {
  this.message = "";
  this.resultCode = 0
};
_Tf._0r._Gs.NotifyFromServer.prototype = {
  fields: {
    resultCode: ["Int"],
    message: null
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      a[d].firstChild && 3 == a[d].firstChild.nodeType ? _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this) : _Tf._0r.build.Value(c.n, null, this.fields, this)
    }
    return !0
  }
};
_Tf._0r._Gs.Ping = function () { };
_Tf._0r._Gs.Ping.prototype = {
  fields: {},
  _n9: function () {
    return !0
  }
};
_Tf._0r._Gs.Result = function () {
  this.resultCode = this.srcMsgId = 0;
  this.text = ""
};
_Tf._0r._Gs.Result.prototype = {
  fields: {
    srcMsgId: ["Int"],
    resultCode: ["Int"],
    text: null
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      a[d].firstChild && 3 == a[d].firstChild.nodeType ? _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this) : _Tf._0r.build.Value(c.n, null, this.fields, this)
    }
    return !0
  }
};
_Tf._0r._Gs.PartOfTablesList = function () {
  this.totalSizeOfTablesList = this.tableIndexTo = this.tableIndexFrom = this.srcMsgId = 0;
  this.tables = [];
  this.snapshotExpired = !1
};
_Tf._0r._Gs.PartOfTablesList.prototype = {
  fields: {
    srcMsgId: ["Int"],
    tableIndexFrom: ["Int"],
    tableIndexTo: ["Int"],
    totalSizeOfTablesList: ["Int"],
    snapshotExpired: ["Bool"]
  },
  values: {
    tb: _Tf._0r.Values.tb
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if ("a" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Array(a[d].firstChild.childNodes,
        this);
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.UserDetails = function () {
  this.custom2Cash = this.custom1Cash = this.playCash = this.realCash = this.srcMsgId = 0;
  // alert(this.custom2Cash);
  this.eMail = this.phoneNumber = this.city = this.address = this.zipCode = this.country = this.middleName = this.familyName = this.firstName = this.displayName = this.nickName = "";
  this.avatar = this.gender = 0;
  this.dob = this.pre = this.tag = this.referredBy = this.bonusCode = "";
  this.playerLevel = 0;
  this.needApprove = !0;
  this.playerRate = 1;
  this.blocked = !1;
  this.affiliate = !0;
  this.pro = !1;
  this.proColor = ""
};
_Tf._0r._Gs.UserDetails.prototype = {
  fields: {
    srcMsgId: ["Int"],
    realCash: ["Int"],
    playCash: ["Int"],
    custom1Cash: ["Int"],
    custom2Cash: ["Int"],
    gender: ["Int"],
    avatar: ["Int"],
    playerLevel: ["Int"],
    playerRate: ["Int"],
    nickName: null,
    displayName: null,
    firstName: null,
    familyName: null,
    middleName: null,
    country: null,
    zipCode: null,
    state: null,
    city: null,
    phoneNumber: null,
    eMail: null,
    address: null,
    bonusCode: null,
    referredBy: null,
    tag: null,
    pre: null,
    dob: null,
    proColor: null,
    activationCode: null,
    needApprove: ["Bool"],
    blocked: ["Bool"],
    affiliate: ["Bool"],
    pro: ["Bool"],
    active: ["Bool"]
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) c = _Tf._0r.parse._J9(a[d].attributes), a[d].firstChild && 3 == a[d].firstChild.nodeType ? _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this) : _Tf._0r.build.Value(c.n, null, this.fields, this);
    return !0
  }
};
_Tf._0r._Gs.TournamentClosed = function () {
  this.info = {}
};
_Tf._0r._Gs.TournamentClosed.prototype = {
  fields: {},
  values: {
    trx: _Tf._0r.Values.trx
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) if (c = _Tf._0r.parse._J9(a[d].attributes), this.hasOwnProperty(c.n) && a[d].firstChild && 1 == a[d].firstChild.nodeType) if ("trx" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Object("trx", a[d].firstChild.attributes, this);
    else return !1;
    else return !1;
    return !0
  }
};
_Tf._0r._Gs.TournamentStarted = function () {
  this.info = {};
  this.port = this.address = ""
};
_Tf._0r._Gs.TournamentStarted.prototype = {
  fields: {
    address: null,
    port: null
  },
  values: {
    trx: _Tf._0r.Values.trx
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if (a[d].firstChild && 1 == a[d].firstChild.nodeType) if ("trx" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Object("trx", a[d].firstChild.attributes,
        this);
      else return !1;
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.TournamentInvite = function () {
  this.info = {};
  this.port = this.address = ""
};
_Tf._0r._Gs.TournamentInvite.prototype = {
  fields: {
    address: null,
    port: null
  },
  values: {
    trx: _Tf._0r.Values.trx
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if (a[d].firstChild && 1 == a[d].firstChild.nodeType) if ("trx" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Object("trx", a[d].firstChild.attributes,
        this);
      else return !1;
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.TournamentState = function () {
  this.breakTime = this.levelTime = this.nextAnte = this.nextBlind = this.currentAnte = this.currentBlind = this.level = this.tournamentId = 0
};
_Tf._0r._Gs.TournamentState.prototype = {
  fields: {
    level: ["Int"],
    tournamentId: ["Int"],
    currentBlind: ["Int"],
    currentAnte: ["Int"],
    nextBlind: ["Int"],
    nextAnte: ["Int"],
    levelTime: ["Int"],
    breakTime: ["Int"]
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) throw "bad message's property syntax";
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.TournamentsList = function () {
  this.srcMsgId = 0;
  this.tournaments = []
};
_Tf._0r._Gs.TournamentsList.prototype = {
  fields: {
    srcMsgId: ["Int"]
  },
  values: {
    tr: _Tf._0r.Values.tr
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if ("a" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Array(a[d].firstChild.childNodes, this);
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.LobbyTournamentInfo = function () {
  this.srcMsgId = 0;
  this.info = {};
  this.tables = [];
  this.players = []
};
_Tf._0r._Gs.LobbyTournamentInfo.prototype = {
  fields: {
    srcMsgId: ["Int"]
  },
  values: {
    trx: _Tf._0r.Values.trx,
    tb: _Tf._0r.Values.tb,
    "player-in-tournament-info": _Tf._0r.Values["player-in-tournament-info"]
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if ("a" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Array(a[d].firstChild.childNodes,
        this);
      else if ("trx" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Object("trx", a[d].firstChild.attributes, this);
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.TournamentServer = function () {
  this.port = this.address = "";
  this.srcMsgId = this.tournamentId = 0
};
_Tf._0r._Gs.TournamentServer.prototype = {
  fields: {
    id: ["Int"],
    srcMsgId: ["Int"],
    tournamentId: ["Int"],
    address: null,
    port: null
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) if (c = _Tf._0r.parse._J9(a[d].attributes), this.hasOwnProperty(c.n) && a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
    else return !1;
    return !0
  }
};
_Tf._0r._Gs.TournamentTables = function () {
  this.tournamentId = this.srcMsgId = 0;
  this.tables = []
};
_Tf._0r._Gs.TournamentTables.prototype = {
  fields: {
    srcMsgId: ["Int"],
    tournamentId: ["Int"]
  },
  values: {
    tb: _Tf._0r.Values.tb
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if ("a" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Array(a[d].firstChild.childNodes, this);
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.PlayerInTournamentStatusNotification = function () {
  this.tournamentId = this.srcMsgId = 0;
  this.addonAllowed = this.rebuyAllowed = !1;
  this.numberOfRebuyConsumed = this.secondsToAddonPeriodEnd = this.secondsToRebuyPeriodEnd = this.numberOfRebuyAllowed = 0;
  this.chipsAmountLessThreshold = !1;
  this.secondsToLateRegistrationPeriodEnd = 0
};
_Tf._0r._Gs.PlayerInTournamentStatusNotification.prototype = {
  fields: {
    srcMsgId: ["Int"],
    tournamentId: ["Int"],
    numberOfRebuyAllowed: ["Int"],
    secondsToRebuyPeriodEnd: ["Int"],
    secondsToAddonPeriodEnd: ["Int"],
    numberOfRebuyConsumed: ["Int"],
    secondsToLateRegistrationPeriodEnd: ["Int"],
    rebuyAllowed: ["Bool"],
    addonAllowed: ["Bool"],
    chipsAmountLessThreshold: ["Bool"]
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) throw "bad message's property syntax";
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.TournamentStateChanged = function () {
  this.state = this.tournamentId = 0
};
_Tf._0r._Gs.TournamentStateChanged.prototype = {
  fields: {
    tournamentId: ["Int"],
    state: ["Int"]
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) throw "bad message's property syntax";
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.TableState = function () {
  this.tableId = this.srcMsgId = 0;
  this.waitList = [];
  this.seats = []
};
_Tf._0r._Gs.TableState.prototype = {
  fields: {
    srcMsgId: ["Int"],
    tableId: ["Int"]
  },
  values: {
    "seat-info": _Tf._0r.Values["seat-info"]
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if ("a" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Array(a[d].firstChild.childNodes, this);
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.PlayerTables = function () {
  this.playerId = this.srcMsgId = 0;
  this.tables = []
};
_Tf._0r._Gs.PlayerTables.prototype = {
  fields: {
    srcMsgId: ["Int"],
    playerId: ["Int"]
  },
  values: {
    tb: _Tf._0r.Values.tb
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if ("a" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Array(a[d].firstChild.childNodes, this);
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.TournamentSeatedDown = function () {
  this.info = {};
  this.tournamentId = 0
};
_Tf._0r._Gs.TournamentSeatedDown.prototype = {
  fields: {
    tournamentId: ["Int"]
  },
  values: {
    tb: _Tf._0r.Values.tb
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if ("tb" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Object("tb", a[d].firstChild.attributes, this);
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.TableEvent = function () {
  this.event = {}
};
_Tf._0r._Gs.TableEvent.prototype = {
  fields: {},
  values: {
    "table-event": _Tf._0r.Values["table-event"]
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if ("table-event" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Object("table-event", a[d].firstChild.attributes, this);
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.ConfigureClient = function () {
  this.serverUTCTime = this.miniConfigXML = this.convertersXML = ""
};
_Tf._0r._Gs.ConfigureClient.prototype = {
  fields: {
    convertersXML: null,
    miniConfigXML: null,
    serverUTCTime: null
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) throw "bad message's property syntax";
      a[d].firstChild && 3 == a[d].firstChild.nodeType ? _Tf._0r.build.Value(c.n, a[d].textContent, this.fields, this) : _Tf._0r.build.Value(c.n, null, this.fields, this)
    }
    return !0
  }
};
_Tf._0r._Gs.RulesConfig = function () {
  this.levelsConfig = this.prizeConfig = ""
};
_Tf._0r._Gs.RulesConfig.prototype = {
  fields: {},
  values: {
    l: _Tf._0r.Values.l
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) throw "bad message's property syntax";
      a[d].firstChild && 3 == a[d].firstChild.nodeType ? _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this) : "levels" == a[d].firstChild.nodeName ? this[c.n] = _Tf._0r.build.Array(a[d].firstChild.childNodes, this) : _Tf._0r.build.Value(c.n, null, this.fields, this)
    }
    return !0
  }
};
_Tf._0r._Gs.SeatReserved = function () {
  this.seatIdx = this.tableId = 0;
  this.tableName = "";
  this.timeout = 0
};
_Tf._0r._Gs.SeatReserved.prototype = {
  fields: {
    srcMsgId: ["Int"],
    seatIdx: ["Int"],
    tableName: null,
    timeout: ["Int"]
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) throw "bad message's property syntax";
      a[d].firstChild && 3 == a[d].firstChild.nodeType ? _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this) : _Tf._0r.build.Value(c.n, null, this.fields, this)
    }
    return !0
  }
};
_Tf._0r._Gs.JackpotAwarded = function () {
  this.tableId = 0;
  this.message = "";
  this.jackpot = []
};
_Tf._0r._Gs.JackpotAwarded.prototype = {
  fields: {
    tableId: ["Int"],
    message: null
  },
  values: {
    "personal-jackpot": _Tf._0r.Values["personal-jackpot"]
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if ("a" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Array(a[d].firstChild.childNodes, this);
      else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.BaccaratGameState = function () {
  this.gameState = {};
  this.events = []
};
_Tf._0r._Gs.BaccaratGameState.prototype = {
  fields: {
    id: ["Int"]
  },
  values: {
    a: _Tf._0r.Values.BaccaratGameState.a,
    g: _Tf._0r.Values.BaccaratGameState.g,
    s: _Tf._0r.Values.BaccaratGameState.s,
    animationevent: _Tf._0r.Values.BaccaratGameState.animationevent
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n) || a[d].firstChild && 3 == a[d].firstChild.nodeType) return !1;
      if ("a" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Array(a[d].firstChild.childNodes,
        this);
      else if ("g" == a[d].firstChild.nodeName) {
        for (var e = _Tf._0r.build.Object("g", a[d].firstChild.attributes, this), f = a[d].firstChild.childNodes, g = f.length, h, j = 0; j < g; j++) switch (h = f[j].nodeName, h) {
          case "plrs":
            e.seats = _Tf._0r.build.Array(f[j].childNodes, this);
            break;
          case "aa":
            e.availableActions = _Tf._0r.build.Array(f[j].childNodes, this);
            break;
          default:
            return !1
        }
        this[c.n] = e
      } else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.PaiGowGameState = function () {
  this.gameState = {};
  this.events = []
};
_Tf._0r._Gs.PaiGowGameState.prototype = {
  fields: {
    id: ["Int"]
  },
  values: {
    a: _Tf._0r.Values.PaiGowGameState.a,
    g: _Tf._0r.Values.PaiGowGameState.g,
    s: _Tf._0r.Values.PaiGowGameState.s,
    animationevent: _Tf._0r.Values.PaiGowGameState.animationevent
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n) || a[d].firstChild && 3 == a[d].firstChild.nodeType) return !1;
      if ("a" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Array(a[d].firstChild.childNodes,
        this);
      else if ("g" == a[d].firstChild.nodeName) {
        for (var e = _Tf._0r.build.Object("g", a[d].firstChild.attributes, this), f = a[d].firstChild.childNodes, g = f.length, h, j = 0; j < g; j++) switch (h = f[j].nodeName, h) {
          case "plrs":
            e.seats = _Tf._0r.build.Array(f[j].childNodes, this);
            break;
          case "aa":
            e.availableActions = _Tf._0r.build.Array(f[j].childNodes, this);
            break;
          default:
            return !1
        }
        this[c.n] = e
      } else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.BlackJackGameState = function () {
  this.gameState = {};
  this.events = []
};
_Tf._0r._Gs.BlackJackGameState.prototype = {
  fields: {
    id: ["Int"]
  },
  values: {
    ds: _Tf._0r.Values.BlackJackGameState.ds,
    a: _Tf._0r.Values.BlackJackGameState.a,
    g: _Tf._0r.Values.BlackJackGameState.g,
    s: _Tf._0r.Values.BlackJackGameState.s,
    animationevent: _Tf._0r.Values.BlackJackGameState.animationevent
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n) || a[d].firstChild && 3 == a[d].firstChild.nodeType) return !1;
      if ("a" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Array(a[d].firstChild.childNodes, this);
      else if ("g" == a[d].firstChild.nodeName) {
        for (var e = _Tf._0r.build.Object("g", a[d].firstChild.attributes, this), f = a[d].firstChild.childNodes, g = f.length, h, j = 0; j < g; j++) switch (h = f[j].nodeName, h) {
          case "ds":
            e.desk = _Tf._0r.build.Object(h, f[j].attributes, this);
            break;
          case "plrs":
            e.seats = _Tf._0r.build.Array(f[j].childNodes, this);
            break;
          case "aa":
            e.availableActions = _Tf._0r.build.Array(f[j].childNodes, this);
            break;
          default:
            return !1
        }
        this[c.n] = e
      } else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.CrapsGameState = function () {
  this.gameState = {};
  this.events = []
};
_Tf._0r._Gs.CrapsGameState.prototype = {
  fields: {
    id: ["Int"]
  },
  values: {
    a: _Tf._0r.Values.CrapsGameState.a,
    g: _Tf._0r.Values.CrapsGameState.g,
    s: _Tf._0r.Values.CrapsGameState.s,
    z: _Tf._0r.Values.CrapsGameState.z,
    v: _Tf._0r.Values.CrapsGameState.v,
    st: _Tf._0r.Values.CrapsGameState.st,
    animationevent: _Tf._0r.Values.CrapsGameState.animationevent
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c = new X2JS, d, e = 0; e < b; e++) {
      d = c.xml_str2json((new XMLSerializer).serializeToString(a[e]));
      if (!this.hasOwnProperty(d.h._n)) return !1;
      if (d.h.hasOwnProperty("a")) this[d.h._n] = _Tf._0r.build.Array(a[e].firstChild.childNodes, this);
      else if (d.h.hasOwnProperty("g")) {
        var f = {
          tableId: parseInt(d.h.g._ti),
          gameId: parseInt(d.h.g._gi),
          tableState: parseInt(d.h.g._ts),
          pointValue: parseInt(d.h.g._pt),
          timePerMove: parseInt(d.h.g._tm),
          remainSecondsPerPlayerMove: parseInt(d.h.g._tr),
          maxBetAmount: parseInt(d.h.g._max_ba),
          minBetAmount: parseInt(d.h.g._min_ba),
          tablePauseType: parseInt(d.h.g._tp),
          diceValues: []
        };
        if (d.h.g.dc && d.h.g.dc.v) if (1 < d.h.g.dc.v.length) for (var g = 0; g < d.h.g.dc.v.length; g++) f.diceValues.push({
          first: parseInt(d.h.g.dc.v[g]._f),
          second: parseInt(d.h.g.dc.v[g]._s)
        });
        else f.diceValues.push({
          first: parseInt(d.h.g.dc.v._f),
          second: parseInt(d.h.g.dc.v._s)
        });
        if (d.h.g.hasOwnProperty("plrs")) {
          f.seats = [];
          var h = d.h.g.plrs.s,
            g = h.length,
            j = {};
          if (Array.isArray(h)) for (var k = 0; k < g; k++) {
            h = [];
            j = {};
            if (d.h.g.plrs.s[k]) {
              if (d.h.g.plrs.s[k].st) if (Array.isArray(d.h.g.plrs.s[k].st.st)) for (j = 0; j < d.h.g.plrs.s[k].st.st.length; j++) h.push({
                amount: parseInt(d.h.g.plrs.s[k].st.st[j]._a),
                point: parseInt(d.h.g.plrs.s[k].st.st[j]._p),
                type: parseInt(d.h.g.plrs.s[k].st.st[j]._t)
              });
              else h.push({
                amount: parseInt(d.h.g.plrs.s[k].st.st._a),
                point: parseInt(d.h.g.plrs.s[k].st.st._p),
                type: parseInt(d.h.g.plrs.s[k].st.st._t)
              });
              j = {
                avatar: d.h.g.plrs.s[k]._a,
                bet: parseInt(d.h.g.plrs.s[k]._b),
                cash: parseInt(d.h.g.plrs.s[k]._c),
                dice: d.h.g.plrs.s[k]._d,
                displayName: d.h.g.plrs.s[k]._dn,
                flags: parseInt(d.h.g.plrs.s[k]._f),
                id: parseInt(d.h.g.plrs.s[k]._i),
                name: d.h.g.plrs.s[k]._n,
                point: parseInt(d.h.g.plrs.s[k]._p),
                rate: parseInt(d.h.g.plrs.s[k]._r),
                stakes: h,
                playerCity: d.h.g.plrs.s[k]._y
              }
            }
            f.seats.push(j)
          } else {
            h = [];
            if (d.h.g.plrs.s.st) if (Array.isArray(d.h.g.plrs.s.st.st)) for (j = 0; j < d.h.g.plrs.s.st.st.length; j++) h.push({
              amount: parseInt(d.h.g.plrs.s.st.st[j]._a),
              point: parseInt(d.h.g.plrs.s.st.st[j]._p),
              type: parseInt(d.h.g.plrs.s.st.st[j]._t)
            });
            else h.push({
              amount: parseInt(d.h.g.plrs.s.st.st._a),
              point: parseInt(d.h.g.plrs.s.st.st._p),
              type: parseInt(d.h.g.plrs.s.st.st._t)
            });
            j = {
              avatar: d.h.g.plrs.s._a,
              bet: parseInt(d.h.g.plrs.s._b),
              cash: parseInt(d.h.g.plrs.s._c),
              dice: d.h.g.plrs.s._d,
              displayName: d.h.g.plrs.s._dn,
              flags: parseInt(d.h.g.plrs.s._f),
              id: parseInt(d.h.g.plrs.s._i),
              name: d.h.g.plrs.s._n,
              point: parseInt(d.h.g.plrs.s._p),
              rate: parseInt(d.h.g.plrs.s._r),
              stakes: h,
              playerCity: d.h.g.plrs.s._y
            };
            f.seats.push(j)
          }
        }
        if (d.h.g.hasOwnProperty("aa")) {
          g = d.h.g.aa.a;
          j = [];
          h = {};
          k = 0;
          if (d.h.g.aa) if (Array.isArray(g)) for (k = 0; k < g.length; k++) h = {
            type: parseInt(g[k]._t)
          }, j.push(h);
          else j.push({
            type: parseInt(g._t)
          });
          f.availableActions = j
        }
        d.h.g.hasOwnProperty("dc");
        if (d.h.g.hasOwnProperty("zn")) {
          g = d.h.g.zn.z;
          j = [];
          h = {};
          k = 0;
          if (d.h.g.zn) if (Array.isArray(g)) for (k = 0; k < g.length; k++) h = {
            type: parseInt(g[k]._t)
          }, j.push(h);
          else j.push({
            type: parseInt(g._t)
          });
          f.allowedStakes = j
        }
        this[d.h._n] = f
      } else return !1
    }
    return !0
  }
};
_Tf._0r._Gs.CrapsTableDescription = function () {
  this.deskLayout = {};
  this.tableId = {}
};
_Tf._0r._Gs.CrapsTableDescription.prototype = {
  fields: {
    id: ["Int"]
  },
  values: {
    dz: _Tf._0r.Values.CrapsTableDescription.dz
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if ("a" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Array(a[d].firstChild.childNodes, this);
      else return !1
    }
    return !0
  }
};
_Tf._Ek._2s._bf._je = function () { };
_Tf._Ek._2s._bf._je.prototype = {
  _we: function (a) {
    _me.profile.details(a)
  },
  drawAuthorizationStatus: function (a) {
    _Mf._ks.emit(_Ag._vk, [a])
  },
  _ym: function () {
    return _Tf._N1.val(_Tf._0l._N1._2i)
  },
  _va: function () {
    return _Tf._N1.val(_Tf._0l._N1._G0)
  },
  _7j: function () {
    var a = _Tf._N1,
      b = _Tf._0l._N1,
      c = b._cm,
      d = a.$(c + " " + b._lm, !0),
      e = a.$(c + " " + b._bj, !0),
      f = {};
    f.password = d.val();
    if (f.password !== e.val()) return e.focus(), a.enableBlock(b._cm), null;
    if (0 < a.$(c + " " + b._se, !0).length) f.eMail = a.$(c + " " + b._se, !0).val();
    a.$(c + " input:text", !0).each(function () {
      f[$(this).attr("name")] = $(this).val()
    });
    if (0 < a.$(c + " input[name=gender]:checked", !0).length) f.gender = a.$(c + " input[name=gender]:checked", !0).val();
    if (_Mf._Ta.isUseDisplayNameInsteadOfNickInClient() && !f.displayName) f.displayName = f.nickName;
    return f
  },
  _cg: function () {
    $.mobile.showPageLoadingMsg()
  },
  prepareToLogin: function () {
    _me.account.isLogining(!0); console.log('4391');
    var a = _Tf._N1,
      b = _Tf._0l._N1;
    a._Es(b._y1);
    a._Es(b._j1);
    _Mf._ks.emit(_Ag._vk, [0])
  },
  _Ti: function () {
    $.mobile.showPageLoadingMsg()
  },
  _Tp: function (a) {
    _me.profile.avatar(a)
  },
  setDefaultAvatars: function (a) {
    0 < _me.avatars.list().length || (_me.avatars.setAvatars(a), _Tf._Hc._ad._u2(a))
  },
  _nk: function () {
    _me.avatars.setAvatars([])
  },
  _t1: function () {
    $.mobile.showPageLoadingMsg()
  },
  _g: function (a) {
    _me.avatars.onConfirmFailed(a);
    _Tf._N1.showPageError(a);
    $.mobile.hidePageLoadingMsg()
  },
  __h: function () {
    _me.avatars.onConfirmSuccess();
    $.mobile.hidePageLoadingMsg()
  },
  _K6: function () {
    $.mobile.hidePageLoadingMsg()
  },
  _k5: function () {
    _me.account.isRegistering(!1);
    $.mobile.hidePageLoadingMsg()
  },
  _B3: function (a) {
    _me.account.isRegistering(!1);
    _me.account._B3();
    $.mobile.hidePageLoadingMsg();
    var b = _Tf._N1,
      c = _Tf._0l._N1;
    b._ab(c._V0, a);
    b.$(c._xf).scrollTop(0)
  },
  _Bf: function () {
    this.drawAuthorizationStatus(100);
    _me.account.isLogining(!1)
  },
  _b2: function (a) {
    this.drawAuthorizationStatus(100);
    _me.account.isLogining(!1);
    var b = _Tf._N1,
      c = _Tf._0l._N1;
    b._Es(c._d0);
    b._ab(c._y1, a)
  },
  _6j: function (a) {
    _me.account.isLogining(!1);
    $.mobile.hidePageLoadingMsg();
    _Tf._N1.showPageError(a)
  },
  _Wf: function () {
    _me.account.isLogining(!1);
    $.mobile.hidePageLoadingMsg()
  }
};
_Tf._Ek._2s._bf._n8 = function () { };
_Tf._Ek._2s._bf._n8.prototype = {
  getCurrentFilterParams: function () {
    return _me.lobbyTablesFilters.getFilterParams()
  },
  preparePlayNow: function () {
    $.mobile.showPageLoadingMsg();
    _me.tablesSnap.isNowRequestedSeatAtAnyTable(!0)
  },
  _Pn: function (a) {
    _me.lobby.state(a)
  },
  _2n: function (a, b, c, d) {
    _me.lobby.tables.set(a, c);
    d ? _me.lobby.tables.growPage() : _me.lobby.tables.goToFirstPage();
    this.afterDrawTablesList()
  },
  afterDrawTablesList: function () {
    $.mobile.hidePageLoadingMsg()
  },
  drawPlayerActiveTablesList: function (a) {
    _me.lobby.activeClientTables.set(a)
  },
  preparePlayerTablesList: function () { },
  _Gc: function () {
    var a = _Mf._Md._oo(),
      b = _Tf._0l._N1._ff;
    a != b.LOBBY_TABLES_FILTER_GAME_TYPE && a != b.LOBBY_TABLES_FILTERS && a != b.LOBBY_TABLES_LIST || $.mobile.showPageLoadingMsg()
  },
  _1a: function (a) {
    _Tf._N1.showPageError(a);
    $.mobile.hidePageLoadingMsg()
  },
  _ee: function () {
    $.mobile.hidePageLoadingMsg()
  }
};
_Tf._Ek._2s._bf._kj = function () { };
_Tf._Ek._2s._bf._kj.prototype = {
  _Oi: function (a) {
    _me.lobby.tournaments.goToFirstPage();
    _me.lobby.tournaments.set(a);
    $.mobile.hidePageLoadingMsg()
  },
  _lb: function () {
    var a = _Mf._Md._oo(),
      b = _Tf._0l._N1._ff;
    a != b.LOBBY_TOURNAMENTS_FILTER_TOURNAMENT_TYPE && a != b.LOBBY_TOURNAMENTS_FILTERS && a != b.LOBBY_TOURNAMENTS_LIST || $.mobile.showPageLoadingMsg()
  }
};
_Tf._Ek._2s._bf._l7 = function () {
  this.updateTournamentBreakTimeInterval = this.updateTournamentLevelTimeInterval = null
};
_Tf._Ek._2s._bf._l7.prototype = {
  draw: function (a) {
    var b = _Tf._N1,
      c = _Tf._0l._N1,
      d = _Tf._Ek._29;
    _Tf._dc.GameType.isBlackJack(a.gameType) || _Tf._dc.GameType.isBaccarat(a.gameType) || _Tf._dc.GameType.isPaigow(a.gameType) ? (b._ab(c._T.format(a.id), a.name), b._ab(c._Om.format(a.id), _h8._wc._an.TABLE_BETS_NO_LABEL.fill({
      min: d._ca(a.minBet, a.moneyType),
      max: d._ca(a.maxBet, a.moneyType)
    })), b._ab(c._Br.format(a.id), _h8._wc._an.TABLE_PAYOUT_NO_LABEL.fill({
      first: 3,
      last: 2
    }))) : _Tf._dc.GameType.isCraps(a.gameType) ? (a = _Mf._q1._5p().model.info,
      d = _Tf._Ek._29, b._ab(c._uo, a.minBet), b._ab(c._37, d._gm(a.maxBet, 0))) : (b._ab(c._1d.format(a.id), a.name), b._ab(c._Do.format(a.id), _h8._wc._an.TABLE_STAKES_NO_LABEL.fill({
        small: d._ca(a.baseStake, a.moneyType),
        big: d._ca(2 * a.baseStake, a.moneyType)
      })), b._ab(c._Rf.format(a.id), d._ca(a.minCash, a.moneyType)))
  },
  _C1: function (a, b) {
    if (a) {
      var c = _Tf._N1,
        d = _Tf._0l._N1,
        e = _Tf._dc.GameType._98(b.gameType),
        f = _Tf._Ek._29;
      clearInterval(this.updateTournamentLevelTimeInterval);
      clearInterval(this.updateTournamentBreakTimeInterval);
      c._ab(d._sn.format(b.id), f._63(a.level));
      c._ab(d._i.format(b.id), _h8._wc._an.TABLE_STAKES_NO_LABEL.fill({
        small: f._ca(e ? a.currentAnte : a.currentBlind, b.moneyType),
        big: f._ca(2 * (e ? a.currentAnte : a.currentBlind), b.moneyType)
      }));
      c._ab(d._Nf.format(b.id), _h8._wc._an.TABLE_STAKES_NO_LABEL.fill({
        small: f._ca(e ? a.nextAnte : a.nextBlind, b.moneyType),
        big: f._ca(2 * (e ? a.nextAnte : a.nextBlind), b.moneyType)
      }));
      c._ab(d._8r.format(b.id), -1 < a.level ? f._nj(a.levelTime) : "-");
      c._ab(d._m2.format(b.id), -1 < a.level ? f._nj(a.breakTime) :
        "-");
      var g = a.levelTime || 0,
        h = a.breakTime || 0,
        j = this;
      this.updateTournamentLevelTimeInterval = setInterval(function () {
        g -= 60;
        0 > g && (g = 0);
        c._ab(d._8r.format(b.id), f._nj(g));
        if (0 >= g) clearInterval(j.updateTournamentLevelTimeInterval), j.updateTournamentLevelTimeInterval = null
      }, 6E4);
      this.updateTournamentBreakTimeInterval = setInterval(function () {
        h -= 60;
        0 > h && (h = 0);
        c._ab(d._m2.format(b.id), f._nj(h));
        if (0 >= h) clearInterval(j.updateTournamentBreakTimeInterval), j.updateTournamentBreakTimeInterval = null
      }, 6E4)
    }
  },
  _Hh: function () { },
  _tb: function () { },
  _ne: function () {
    $.mobile.showPageLoadingMsg()
  },
  _Pl: function () {
    $.mobile.hidePageLoadingMsg()
  },
  selectTableFailed: function () {
    $.mobile.hidePageLoadingMsg()
  },
  _d5: function () {
    $.mobile.showPageLoadingMsg();
    _Mf._Md.hideExternalDialogs()
  },
  _Ki: function () {
    $.mobile.showPageLoadingMsg()
  },
  _ed: function () {
    $.mobile.showPageLoadingMsg()
  },
  _v5: function (a) {
    _me.tablesSnap.onClose(a);
    $.mobile.hidePageLoadingMsg()
  },
  _p7: function () {
    $.mobile.hidePageLoadingMsg()
  },
  _Sa: function () {
    $.mobile.hidePageLoadingMsg()
  },
  _b3: function (a) {
    _me.tablesSnap.finishToTakeSeatAtTable(a);
    $.mobile.hidePageLoadingMsg()
  },
  _67: function (a, b) {
    _me.tablesSnap.finishToTakeSeatAtTable(a);
    $.mobile.hidePageLoadingMsg();
    _Tf._N1.showPageError(b)
  },
  _2a: function (a) {
    _Tf._N1.showPageError(a)
  },
  _kb: function (a) {
    _me.tablesSnap.finishToTakeSeatAtTable(a);
    $.mobile.hidePageLoadingMsg()
  },
  sendChatFailed: function (a) {
    _Tf._N1._zh("", a)
  },
  reserveSeat: function (a, b) {
    _me.tablesSnap.beginToTakeSeatAtTable(a, b)
  },
  canReserveSeat: function (a) {
    return !_me.tablesSnap.isWaitingResponseOnReserveSeatAndSitDown(a)
  }
};
_Tf._Ek._2s._bf._xl = function () {
  this.intervalLateRegistration = null
};
_Tf._Ek._2s._bf._xl.prototype = {
  clear: function (a) {
    _me.tournament.clearButtonsIfNeed(a);
    _me.tournament.clearDetailsIfNeed(a)
  },
  _2n: function (a) {
    _me.tournament.tablesList.goToFirstPage();
    _me.tournament.tablesList.set(a)
  },
  _Sj: function (a) {
    _me.tournament.playersList.goToFirstPage();
    _me.tournament.playersList.set(a)
  },
  _we: function (a, b) {
    _me.tournament.details(a);
    this.drawLateRegistrationInfo(a, b)
  },
  _if: function (a) {
    _Tf._N1._zh("", a)
  },
  drawLateRegistrationInfo: function (a, b) {
    var c = _Tf._dc.TournamentState,
      d = _Tf._Ek._29,
      e = _Tf._0l._N1._ff,
      f = _Mf._Md._oo(),
      g = this.clearLateRegistrationInfo.bind(this);
    if (f != e._qa && f != e.TOURNAMENT_PLAYERS && f != e._Gq) g();
    else if (a.state === c._t5 || a.state === c._Kp || a.tournamentType != _Tf._dc.TournamentType._Nd) this.clearLateRegistrationInfo();
    else {
      _me.tournament.isLateRegistered(!0);
      var h = a.lateRegistrationTimeLimit;
      a.state === c._Il && (h = b ? b.secondsToLateRegistrationPeriodEnd : 0);
      this.clearLateRegistrationInfo(h);
      if (0 !== h && (_me.tournament.lateRegistrationTime(d._nj(h, !0)), a.state === c._Il && h)) this.intervalLateRegistration = setInterval(function () {
        h -= 1;
        !h || _Mf._Md._oo() != page ? g() : _me.tournament.lateRegistrationTime(d._nj(h, !0))
      }, 1E3)
    }
  },
  clearLateRegistrationInfo: function (a) {
    if (this.intervalLateRegistration) clearInterval(this.intervalLateRegistration), this.intervalLateRegistration = null;
    a || (_me.tournament.isLateRegistered(!1), _me.tournament.lateRegistrationTime(""))
  },
  _Vg: function (a) {
    _me.tournament.updateRegisterButton(a)
  },
  _eb: function () {
    _me.tournament.playButton(!0)
  },
  _Od: function () {
    _me.tournament.playButton(!1)
  },
  _L3: function () {
    _me.tournament.registerButton(!1);
    _me.tournament.unregisterButton(!1);
    _me.tournament.playButton(!1)
  },
  _yg: function () {
    _me.tournament.registerButton(!1)
  },
  _Z1: function () {
    _me.tournament.unregisterButton(!1)
  },
  enableRegisterButton: function () {
    _me.tournament.registerButton(!0)
  },
  enableUnregisterButton: function () {
    _me.tournament.unregisterButton(!1)
  },
  prepareToSelectTournament: function (a) {
    /tournament/.test(_Mf._Md.getVisiblePage()) && _me.tournament.details().id !== a && $.mobile.showPageLoadingMsg()
  },
  _9o: function () {
    $.mobile.hidePageLoadingMsg()
  }
};
_Tf._Ek._2s._o4._hl = function (a, b, c) {
  this.appendResources();
  this.context = a;
  this.middleContext = b;
  this.designPosition = _Mf._b1.getPositionByParentId(c);
  this.locate()
};
_Tf._Ek._2s._o4._hl.prototype = {
  appendResources: function () { },
  locate: function () {
    this.position = this.designPosition.bank.posCenter.clone()
  },
  update: function () { },
  draw: function () { },
  getPosition: function () {
    return this.position
  },
  getRakePosition: function () {
    var a = this.designPosition.bank;
    return a.posRake ? a.posRake.clone() : a.posCenter.clone()
  },
  getContext: function () {
    return this.context
  },
  drawMiddle: function () { },
  clearMiddle: function () { }
};
_Tf._Ek._2s._o4._W2 = function (a, b, c, d, e) {
  this.appendResources();
  this.factory = e;
  this.isTableCard = d || !1;
  this.angle = 0;
  this.isVisible = !0;
  this.designPosition = c;
  this.isSmallSize = !0;
  this.isTableCard = d || !1;
  this.positionCurrent = b.clone();
  this.positionTarget = b.clone();
  this.moving = {
    isMoving: !1,
    isMovingOpened: !1,
    speed: 30 * this.designPosition.cardDown.speed,
    dx: 0,
    dy: 0,
    steps: -1
  };
  this.turning = {
    isTurning: !1,
    steps: -1,
    maxStepsCount: 3
  };
  this.rotating = {
    isRotating: !1,
    angleDelta: this.designPosition.cardDown.angleDelta,
    currentAngle: 0
  };
  this.pushup = {
    isPushUp: !1,
    stepDelta: this.isTableCard ? this.designPosition.cardUpOnTable.stepUp : this.designPosition.cardUp.stepUp
  };
  this.context = a;
  this.middleContext = null;
  this.isNeedClear = this.isClientCard = !1
};
_Tf._Ek._2s._o4._W2.prototype = {
  appendResources: function () { },
  setIsClientCard: function (a) {
    this.isClientCard = a || !1
  },
  update: function () {
    if (this.moving.isMoving) if (0 != this.moving.steps) {
      if (-1 === this.moving.steps) {
        var a = this.positionTarget.x - this.positionCurrent.x,
          b = this.positionTarget.y - this.positionCurrent.y,
          c = Math.sqrt(a * a + b * b),
          c = Math.floor(c / this.moving.speed * _Tf._0l.FRAME_RATE);
        this.moving.steps = c;
        this.moving.dx = 0 < c ? Math.floor(a / c) : 0;
        this.moving.dy = 0 < c ? Math.floor(b / c) : 0;
        if (this.rotating.isRotating) this.rotating.currentAngle = this.angle
      }
      this.moving.steps = 0 < this.moving.steps ? this.moving.steps - 1 : 0;
      this.rotating.isRotating && (this.rotating.currentAngle += this.rotating.angleDelta);
      this.positionCurrent.x += this.moving.dx;
      this.positionCurrent.y += this.moving.dy
    } else {
      if (this.moving.steps = -1, this.moving.isMoving = !1, this.positionCurrent = this.positionTarget, this.rotating.isRotating) this.currentAngle = 0, this.rotating.isRotating = !1
    } else if (this.turning.isTurning) - 1 != this.turning.steps ? 0 != this.turning.steps ? this.turning.steps -= 1 : (this.turning.steps = -1, this.turning.isTurning = !1) : this.turning.steps = this.turning.maxStepsCount;
    else if (this.pushup.isPushUp) this.positionCurrent.y -= this.pushup.stepDelta, this.pushup.isPushUp = !1
  },
  draw: function (a, b, c, d, e, f) {
    var g = this.context.globalAlpha;
    if (d) this.context.globalAlpha = this.isTableCard ? this.designPosition.cardUpOnTable.transparent : f ? this.designPosition.cardUpActive.transparent : this.designPosition.cardUp.transparent;
    try {
      this.moving.isMoving ? this._drawMoving(a, b, c, d, f) : this.turning.isTurning ? this._drawTurning(a,
        b, c, d, f) : this.isVisible && this._drawVisible(a, b, c, d, e, f)
    } catch (h) { }
    if (d) this.context.globalAlpha = g
  },
  _solveDrawMovingParams: function (a, b, c, d, e) {
    e ? (a = this.designPosition.cardDownActive.width, d = this.designPosition.cardDownActive.height) : (a = this.designPosition.cardDown.width, d = this.designPosition.cardDown.height);
    if (!this.isClientCard && (c == _Tf._dc._W2._G7 || c == _Tf._dc._W2._Al)) a = this.designPosition.backCard.width, d = this.designPosition.backCard.height;
    if (!this.moving.isMovingOpened || !b) this.isSmallSize ? c = _Tf._dc._W2._G7 : (c = this.getCardBack(), this.isTableCard ? (a = this.designPosition.cardUpOnTable.width, d = this.designPosition.cardUpOnTable.height) : e ? (a = this.designPosition.cardUpActive.width, d = this.designPosition.cardUpActive.height) : (a = this.designPosition.cardUp.width, d = this.designPosition.cardUp.height));
    this.isClientCard || (c = this.resolveCard(c));
    if (this.isTableCard) a = this.designPosition.cardUpOnTable.width, d = this.designPosition.cardUpOnTable.height;
    return {
      card: c,
      width: a,
      height: d,
      isActive: e
    }
  },
  _drawMoving: function (a,
    b, c, d, e) {
    a = this._solveDrawMovingParams(a, b, c, d, e);
    c = this.context.globalAlpha;
    if (!this.moving.isMovingOpened || !b) this.context.globalAlpha = this.designPosition.cardDown.transparent;
    this._drawCard(this.context, a, this.positionCurrent.x, this.positionCurrent.y, this.rotating.isRotating ? this.rotating.currentAngle : 0);
    if (!this.moving.isMovingOpened || !b) this.context.globalAlpha = c
  },
  _solveDrawTurningParams: function (a, b, c, d, e) {
    this.isTableCard ? (a = this.designPosition.cardUpOnTable.width, b = this.designPosition.cardUpOnTable.height) : this.isClientCard ? (c == _Tf._dc._W2._G7 || c == _Tf._dc._W2._Al ? (a = this.designPosition.backCard.width, b = this.designPosition.backCard.height) : e ? (a = this.designPosition.cardUpClientActive.width, b = this.designPosition.cardUpClientActive.height) : (a = this.designPosition.cardUpClient.width, b = this.designPosition.cardUpClient.height), c = this.resolveCard(c)) : e ? (a = this.designPosition.cardUpActive.width, b = this.designPosition.cardUpActive.height) : (a = this.designPosition.cardUp.width, b = this.designPosition.cardUp.height);
    return {
      card: 2 > this.turning.steps ? c : _Tf._dc._W2._Al,
      width: a,
      height: b
    }
  },
  _drawTurning: function (a, b, c, d, e) {
    a = this._solveDrawTurningParams(a, b, c, d, e);
    b = this.positionCurrent.x;
    c = this.positionCurrent.y;
    if (1 === this.turning.steps || 2 === this.turning.steps) a.width /= 2, b += a.width / 2;
    this._drawCard(this.context, a, b, c)
  },
  _solveDrawVisibleParams: function (a, b, c, d, e, f) {
    if (this.isTableCard) a = this.designPosition.cardUpOnTable.width, d = this.designPosition.cardUpOnTable.height;
    else if (this.isClientCard) f ? (a = this.designPosition.cardUpClientActive.width,
      d = this.designPosition.cardUpClientActive.height) : (a = this.designPosition.cardUpClient.width, d = this.designPosition.cardUpClient.height);
    else if (f ? (a = this.designPosition.cardUpActive.width, d = this.designPosition.cardUpActive.height) : (a = this.designPosition.cardUp.width, d = this.designPosition.cardUp.height), c == _Tf._dc._W2._G7 || c == _Tf._dc._W2._Al) a = this.designPosition.backCard.width, d = this.designPosition.backCard.height;
    if (b) c == _Tf._dc._W2._G7 && !this.isSmallSize && (c = this.getCardBack());
    else if (this.isSmallSize) c = _Tf._dc._W2._G7, f ? (a = this.designPosition.cardDownActive.width, d = this.designPosition.cardDownActive.height) : (a = this.designPosition.cardDown.width, d = this.designPosition.cardDown.height);
    else if (!this.isClientCard) c = _Tf._dc._W2._Al;
    this.isClientCard || (c = this.resolveCard(c));
    if (this.isTableCard) a = this.designPosition.cardUpOnTable.width, d = this.designPosition.cardUpOnTable.height;
    return {
      card: c,
      width: a,
      height: d,
      isSelected: e,
      isActive: f
    }
  },
  _drawVisible: function (a, b, c, d, e, f) {
    b = this._solveDrawVisibleParams(a,
      b, c, d, e, f);
    c = null;
    a === _Tf._dc.CardState._4g && !this.isNeedClear ? (c = this.middleContext, this.isNeedClear = !0) : c = this.context;
    this._drawCard(c, b)
  },
  _drawCard: function (a, b, c, d, e) {
    var e = e || this.angle,
      f = this._getCachedCard(b);
    try {
      0 === e ? (b.isSelected && a && _Tf._Ek._29.drawRoundRect(a, c || this.positionCurrent.x, d || this.positionCurrent.y, b.width, b.height, _h8._0l._vn.CARD_SELECTED, Math.round(0.1 * b.width), Math.round(0.1 * b.width)), a && a.drawImage(f, c || this.positionCurrent.x, d || this.positionCurrent.y, b.width, b.height)) : a && _Tf._Ek._29.drawImage(a, f, c || this.positionCurrent.x, d || this.positionCurrent.y, e, b.width, b.height)
    } catch (g) { }
  },
  _cachedCards: {
    items: {},
    length: 0
  },
  _getCachedCard: function (a) {
    if (this._cachedCards.items[a.card]) {
      var b = this._cachedCards.items[a.card][a.width + " " + a.height];
      if (b) return b
    } else {
      if (this._cachedCards.length === _h8._0l.MAX_CACHED_CARDS) this._cachedCards.items = {}, this._cachedCards.length = 0;
      this._cachedCards.items[a.card] = {};
      this._cachedCards.length++
    }
    b = document.createElement("canvas");
    b.width = a.width;
    b.height = a.height;
    b.getContext("2d").drawImage(_Tf._M4._np.deckManager.getElement()._46(a.card), 0, 0, a.width, a.height);
    return this._cachedCards.items[a.card][a.width + " " + a.height] = b
  },
  clear: function (a) {
    var b;
    if (this.middleContext) this.isNeedClear = !1, this.isTableCard ? (a = this.designPosition.cardUpOnTable.width, b = this.designPosition.cardUpOnTable.height) : a ? (a = this.designPosition.cardUpActive.width, b = this.designPosition.cardUpActive.height) : (a = this.designPosition.cardUp.width, b = this.designPosition.cardUp.height),
      _Tf._Ek._29.fillRectToClear(this.middleContext, this.positionCurrent.x - 3, this.positionCurrent.y - 3, a + 6, b + 6)
  },
  _Bo: function (a) {
    this.isSmallSize = a
  },
  setAngle: function (a) {
    this.angle = a
  },
  setMiddleContext: function (a) {
    this.middleContext = a
  },
  _Oq: function (a) {
    this.positionTarget = a.clone();
    this.rotating.isRotating = !0;
    this.moving.isMoving = !0;
    this.moving.steps = -1;
    this.isVisible = this.isSmallSize = !0
  },
  __n: function (a, b) {
    this.turning.isTurning = b || !1;
    this.positionTarget = a.clone();
    this.rotating.isRotating = !1;
    this.isVisible = this.isSmallSize = this.moving.isMoving = !0
  },
  _Zf: function (a) {
    this.positionTarget = a.clone();
    this.positionCurrent = a.clone();
    this.rotating.isRotating = !1;
    this.moving.isMoving = !1;
    this.moving.isMovingOpened = !1;
    this.turning.isTurning = !0;
    this.isSmallSize = !1;
    this.isVisible = !0
  },
  _05: function (a) {
    this._o6(a);
    this.isSmallSize = this.moving.isMovingOpened = !1;
    this.isVisible = !0
  },
  _o6: function (a) {
    this.positionTarget = a.clone();
    this.rotating.isRotating = !1;
    this.moving.isMoving = !0;
    this.moving.isMovingOpened = !0;
    this.isSmallSize = this.turning.isTurning = !1;
    this.isVisible = !0
  },
  open: function () {
    if (!this.turning.isTurning) this.turning.isTurning = !0, this.isSmallSize = !1, this.isVisible = !0
  },
  _s1: function () {
    this.isVisible = this.pushup.isPushUp = !0
  },
  _Yq: function (a) {
    this.isVisible = a
  },
  _Kg: function (a) {
    this.positionCurrent = a.clone();
    this.positionTarget = a.clone()
  },
  correctClientCardPosition: function (a) {
    this.isClientCard && (a = (a = a ? this.designPosition.cardUpClientLast : this.designPosition.cardUpClientFirst) || {
      dx: 0,
      dy: 0,
      angle: 0
    }, this.positionTarget.x += a.dx + this.designPosition.cardUpClient.dx || 0, this.positionTarget.y += a.dy + this.designPosition.cardUpClient.dy || 0, this.setAngle(a.angle || 0))
  },
  correctBackCardPosition: function () {
    var a = this.designPosition.backCard,
      a = a || {
        dx: 0,
        dy: 0,
        angle: 0
      };
    this.positionTarget.x += a.dx || 0;
    this.positionTarget.y += a.dy || 0
  },
  isAnimating: function () {
    return this.moving.isMoving || this.rotating.isRotating || this.turning.isTurning || this.pushup.isPushUp
  },
  fixPosition: function () {
    this.moving.isMoving = !1;
    this.moving.isMovingOpened = !1;
    this.moving.steps = 0;
    this.turning.isTurning = !1;
    this.turning.steps = 0
  },
  resolveCard: function (a) {
    return (a == _Tf._dc._W2._G7 || a == _Tf._dc._W2._Al) && _Tf._dc.GameType._98(this.factory.gameType) ? _Tf._dc._W2._rj : (a == _Tf._dc._W2._G7 || a == _Tf._dc._W2._Al) && _Tf._dc.GameType.isBlackJack(this.factory.gameType) ? _Tf._dc._W2._c7 : a
  },
  getCardBack: function () {
    return _Tf._dc._W2._Al
  }
};
_Tf._Ek._2s._o4._a6 = function (a, b, c, d) {
  this.appendResources();
  this.isActive = !1;
  this.designPosition = c;
  this.numberHolder = d;
  this.realNumber = b;
  this.designIndex = d;
  this.locate(b);
  this.currentCount = 0;
  this.context = a;
  this.isSelected = this.isShadow = !1
};
_Tf._Ek._2s._o4._a6.prototype = {
  appendResources: function () { },
  locate: function (a) {
    var b = this.designPosition.playerClient,
      c = this.designPosition.chairs[a];
    this.realNumber = a;
    this.position = c.posCenter.clone();
    this.positionActive = c.posCenter.clone();
    this.positionClient = this.designPosition.playerClient.posCenter.clone();
    this.positionClientActive = this.designPosition.playerClient.posCenter.clone();
    c.posCardHolder && (a = "undefined" !== typeof c.posCardHolder[this.numberHolder] ? c.posCardHolder[this.numberHolder].clone() : c.posCardHolder.clone(), this.position.plus(a));
    b.posCardHolder && (a = "undefined" !== typeof b.posCardHolder[this.numberHolder] ? b.posCardHolder[this.numberHolder].clone() : b.posCardHolder.clone(), this.positionClient.plus(a));
    c.posCardHolderActive && this.positionActive.plus(c.posCardHolderActive.clone());
    b.posCardHolderActive && this.positionClientActive.plus(b.posCardHolderActive.clone());
    this.isDirectOrder = c.dirCardHolder;
    this.clearCurrentCount()
  },
  update: function (a, b, c, d) {
    var c = a.length,
      e, f, g = d ? this.designPosition.chairCardHolderActive : this.designPosition.chairCardHolder;
    if (this.currentCount === c || 0 === c) this.currentCount = c;
    else {
      this.currentCount = c;
      b ? d ? (g = this.designPosition.chairCardHolderActive ? this.designPosition.clientChairCardHolderActive : g, f = this.positionClientActive, e = this.designPosition.cardUpClientActive) : (g = this.designPosition.chairCardHolder ? this.designPosition.clientChairCardHolder : g, f = this.positionClient, e = this.designPosition.cardUpClient) : d ? (f = this.positionActive, e = this.designPosition.cardUpActive) : (f = this.position,
        e = this.designPosition.cardUp);
      e = this.getPointsArray(c, e.width, 0, -Math.round(0.6 * e.width), new _8n(f.x + g.width / 2, f.y), e.stepUp, g, b, d);
      for (var g = (f = 1 == c) ? c : c - 1, h = 0; h < g; h++) b || (e[h].y += this.designPosition.player.offsetOpenCardY, e[h].x += this.designPosition.player.offsetOpenCardX), a[h]._47(e[h], b, d), a[h]._ss(d), a[h]._rl();
      f ? a[0]._24(e[0], b) : (b || (e[h].y += this.designPosition.player.offsetOpenCardY, e[h].x += this.designPosition.player.offsetOpenCardX), a[c - 1]._24(e[c - 1], b))
    }
  },
  draw: function () { },
  setShadow: function (a) {
    this.isShadow = a
  },
  decCurrentCount: function () {
    this.currentCount--
  },
  clearCurrentCount: function () {
    this.currentCount = 0
  },
  hasShadow: function () {
    return this.isShadow
  },
  getPosition: function (a, b) {
    return a ? b ? this.positionClientActive : this.positionClient : b ? this.positionActive : this.position
  },
  getContext: function () {
    return this.context
  },
  setDesignIndex: function (a, b) {
    this.isActive = b || !1;
    this.designIndex = a;
    this.locate(this.realNumber)
  },
  getPointsArray: function (a, b, c, d, e, f) {
    return _Tf._Ek._29._T9(a, b, c, d, e, f)
  }
};
_Tf._Ek._2s._o4._Na = function (a, b, c, d, e, f) {
  this.appendResources();
  this.parentId = f;
  this.designPosition = _Mf._b1.getPositionByParentId(f);
  this.countCards = e;
  this.realNumber = d;
  this.locate(d);
  this.isFlash = !1;
  this.isFlashWelcomeTimeStamp = 0;
  this.context = a;
  this.staticContext = c;
  this.middleContext = b
};
_Tf._Ek._2s._o4._Na.prototype = {
  appendResources: function () {
    this.chair = _Tf._M4._np.table._62();
    this.flashWelcomeImage = _Tf._M4._np.table.getElement("welcomeBack")
  },
  locate: function (a) {
    var b = this.designPosition.chairs[a],
      c = Math.PI / 180;
    this.position = b.posCenter.clone();
    this.angle = b.angle * c;
    this.realNumber = a;
    a = [];
    if (2 === this.countCards) {
      var d = b.cards[1].pos.clone();
      d.plus(this.position);
      a[0] = {
        point: d,
        angle: b.cards[1].angle * c
      };
      d = b.cards[2].pos.clone();
      d.plus(this.position);
      a[1] = {
        point: d,
        angle: b.cards[2].angle * c
      }
    } else 4 === this.countCards && (d = b.cards[0].pos.clone(), d.plus(this.position), a[0] = {
      point: d,
      angle: b.cards[0].angle * c
    }, d = b.cards[1].pos.clone(), d.plus(this.position), a[1] = {
      point: d,
      angle: b.cards[1].angle * c
    }, d = b.cards[2].pos.clone(), d.plus(this.position), a[2] = {
      point: d,
      angle: b.cards[2].angle * c
    }, d = b.cards[3].pos.clone(), d.plus(this.position), a[3] = {
      point: d,
      angle: b.cards[3].angle * c
    });
    this.positionCardsOnTable = a;
    this.positionChipOnTable = [];
    if (b.posChips[0]) for (var e in b.posChips) this.positionChipOnTable[e] = b.posChips[e].clone();
    else this.positionChipOnTable[0] = b.posChips.clone();
    if (b.positionInsurance) this.positionInsurance = b.positionInsurance.clone()
  },
  update: function () {
    if (0 < this.isFlashWelcomeTimeStamp && (new Date).getTime() - this.isFlashWelcomeTimeStamp > this.designPosition.chair.flashWelcomeTicks) this.isFlashWelcomeTimeStamp = 0
  },
  draw: function (a) {
    a || (0 < this.isFlashWelcomeTimeStamp && this._Ms(), this.isFlash && this._h3())
  },
  drawMiddle: function (a, b) {
    a && b && this._zp()
  },
  _h3: function () { },
  _Ms: function () {
    0 < this.isFlashWelcomeTimeStamp && _Tf._Ek._29.drawRoundRect(this.context, this.position.x - this.designPosition.player.width / 2 - 1, this.position.y - this.designPosition.player.height / 2 - 1, this.designPosition.player.width + 2, this.designPosition.player.height + 2, _h8._0l._vn.NEW_PLAYER, Math.round(0.04 * this.designPosition.player.width), Math.round(0.1 * this.designPosition.player.width))
  },
  _I9: function () {
    _Tf._Ek._29.drawImage(this.staticContext, this.chair, this.position.x, this.position.y, this.angle, this.designPosition.chair.width, this.designPosition.chair.height)
  },
  _zp: function () {
    var a = this.middleContext.globalAlpha;
    this.middleContext.globalAlpha = 0.5;
    _Tf._Ek._29.fillText(this.middleContext, this.designPosition, _Tf._41.$("_P7._p7"), this.position.x, this.position.y - this.designPosition.chair.textEmptyChair, _h8._0l._vn.FREE_CHAIR_TEXT, this.designPosition.chair.textEmptyChair);
    _Tf._Ek._29.fillText(this.middleContext, this.designPosition, _Tf._41.$("_P7._a2"), this.position.x, this.position.y + this.designPosition.chair.textEmptyChair, _h8._0l._vn.FREE_CHAIR_TEXT, this.designPosition.chair.textEmptyChair);
    this.middleContext.globalAlpha = a
  },
  _x1: function () {
    this.isFlash = !0
  },
  _X0: function () {
    this.isFlash = !1
  },
  _hq: function () {
    if (this.designPosition.chair.flashWelcomeTicks) this.isFlashWelcomeTimeStamp = (new Date).getTime()
  },
  _3p: function (a, b) {
    var c = this.getPosition(),
      d = c.x - a,
      c = c.y - b,
      e = this.designPosition.chair.radius;
    return d * d + c * c <= e * e
  },
  hasAvatarPointAction: function (a, b, c) {
    return this._3p(a, b, c)
  },
  clearItselfOnMiddle: function (a) {
    var b = 2 * this.designPosition.chair.radius + 20,
      c = this.designPosition.player.textNameFontSize * this.designPosition.textSizeCoeff + this.designPosition.player.offsetYTextBox + 5 + this.designPosition.chair.radius / 2,
      d;
    d = this.position;
    1 == a && (b += 180, d = this.designPosition.playerClient.posCenter.clone(), d.sub({
      x: this.designPosition.playerClient.offsetChairX,
      y: this.designPosition.playerClient.offsetChairY
    }));
    _Tf._Ek._29.fillRectToClear(this.middleContext, d.x - this.designPosition.chair.radius - 10, d.y - this.designPosition.chair.radius - 10, b, c)
  },
  getCardPositionByIndex: function (a) {
    return "undefined" === typeof this.positionCardsOnTable[a] ? {
      point: this.position.clone(),
      angle: 0
    } : this.positionCardsOnTable[a]
  },
  getChipPosition: function (a) {
    return this.positionChipOnTable[a]
  },
  getInsurancePosition: function () {
    return this.positionInsurance.clone()
  },
  getContext: function () {
    return this.context
  },
  getMiddleContext: function () {
    return this.middleContext
  },
  getPosition: function () {
    return this.position
  },
  isActive: function () {
    return this.isFlash
  }
};
_Tf._Ek._2s._o4._No = function (a, b, c, d) {
  this.appendResources();
  this.designPosition = c;
  this.isVisible = !0;
  this.positionCurrent = b.clone();
  this.positionTarget = b.clone();
  this.betIndex = d;
  this.positionChipText = b.clone();
  this.isPotChip = !1;
  this.moving = {
    isMoving: !1,
    speed: 30 * this.getChipDesign().speed,
    dx: 0,
    dy: 0,
    steps: -1
  };
  this.context = a;
  this.callback = null
};
_Tf._Ek._2s._o4._No.prototype = {
  appendResources: function () { },
  update: function () {
    if (this.moving.isMoving) if (0 != this.moving.steps) {
      if (-1 === this.moving.steps) {
        var a = this.positionTarget.x - this.positionCurrent.x,
          b = this.positionTarget.y - this.positionCurrent.y,
          c = Math.sqrt(a * a + b * b),
          c = Math.floor(c / this.moving.speed * _Tf._0l.FRAME_RATE);
        this.moving.steps = c;
        this.moving.dx = 0 < c ? Math.floor(a / c) : 0;
        this.moving.dy = 0 < c ? Math.floor(b / c) : 0
      }
      this.moving.steps = 0 < this.moving.steps ? this.moving.steps - 1 : 0;
      this.positionCurrent.x += this.moving.dx;
      this.positionCurrent.y += this.moving.dy
    } else if (this.moving.steps = -1, this.moving.isMoving = !1, this.positionCurrent = this.positionTarget, this.callback) this.callback(), this.callback = null
  },
  lastMoneyValue: 0,
  lastMoneyString: "",
  _customizeText: function (a, b, c) {
    if (0 != a) {
      if (a != this.lastMoneyValue) this.lastMoneyString = _Tf._Ek._29._ca(a, b, !0), this.lastMoneyValue = a;
      this._drawText(this.lastMoneyString, c)
    }
  },
  _drawText: function (a) {
    if (this.isPotChip) {
      var b = this.getChipDesign(),
        c = _h8._0l._vn;
      _Tf._Ek._29.drawBlocks(this.context,
        this.positionChipText.x + b.offsetXTextBox, this.positionChipText.y + b.offsetYTextBox, b.textWidth, b.textHeight, c.PLAYER_BLOCKS, c.PLAYER_BLOCKS_BORDER, Math.round(0.2 * b.textWidth));
      _Tf._Ek._29.fillText(this.context, this.designPosition, a, this.positionChipText.x + b.offsetXTextBox + b.offsetXTextAmount + b.textWidth / 2, this.positionChipText.y + b.offsetYTextBox + b.offsetYTextAmount, _h8._0l._vn.TEXT_CHIP, b.textChip, !1, "", !1, !1, b.textWeight)
    }
  },
  draw: function (a, b, c, d) {
    if (a) try {
      var e = this.getChipDesign();
      if (this.moving.isMoving) {
        var f = this.context.globalAlpha;
        this.context.globalAlpha = e.transparent;
        this.context.drawImage(_Tf._M4._np.chip.getElement("1"), this.positionCurrent.x, this.positionCurrent.y, e.width, e.height);
        this.context.globalAlpha = f
      } else if (this.isVisible) {
        if (d) {
          var g = e.width / 2;
          _Tf._Ek._29._r9(this.context, _h8._0l._vn.CHIP_SELECTED, this.positionCurrent.x + g, this.positionCurrent.y + g, g + 2)
        }
        this.context.drawImage(_Tf._M4._np.chip.getElement("1"), this.positionCurrent.x, this.positionCurrent.y, e.width, e.height);
        this._customizeText(a,
          b, c)
      }
    } catch (h) { }
  },
  move: function (a) {
    this.positionTarget = a.clone();
    this.moving.isMoving = !0
  },
  _Kg: function (a) {
    this.positionCurrent = a.clone()
  },
  _lk: function (a, b) {
    if (!this.positionCurrent._L6(a)) {
      if (b) this.callback = b;
      this.isVisible = !0;
      this.move(a)
    }
  },
  _C5: function (a) {
    this.isVisible = !1;
    this.move(a)
  },
  fixTextPosition: function (a) {
    this.positionChipText = a.clone()
  },
  setPotChip: function (a) {
    this.isPotChip = a || !1
  },
  isAnimating: function () {
    return this.moving.isMoving
  },
  getChipDesign: function () {
    return this.designPosition.chip[this.betIndex] || this.designPosition.chip
  }
};
_Tf._Ek._2s._o4.Command = function (a, b, c, d, e, f, g, h, j, k) {
  this.parentId = _Tf._0l._N1._6i.format(k);
  this.appendResources();
  this.factory = a;
  this.type = b;
  this.potType = d;
  this.moneyType = e;
  this.code = g;
  this.label = f;
  this.parent = null;
  this.autoActionManager = c;
  this.button = null;
  this.value = !1;
  this.callback = {
    code: g,
    funds: h,
    fn: j
  };
  this.id = "";
  this.isButtonClicked = !1;
  this._ri()
};
_Tf._Ek._2s._o4.Command.prototype = {
  cardHolder1: [],
  cardHolder2: [],
  lastCardArray: [],
  _ri: function () {
    this._g7 = this._g7.bind(this);
    this.clickBetHandler = this.clickBetHandler.bind(this)
  },
  appendResources: function () { },
  _g7: function (a) {
    var b = _Tf._N1,
      c = _Tf._0l._N1,
      d = _Mf._q1.map[_Mf._q1.activeTableId].gameManager;
    b.eventCorrection(a, !0);
    if (!this.isButtonClicked && this.type === _Tf._dc.CommandType._jf) {
      var e = 0;
      switch (this.callback.code) {
        case _Tf._dc.PlayerAction._dp:
        case _Tf._dc.PlayerAction._c1:
        case _Tf._dc.PlayerAction._32:
          d.isStateInited[_Tf._dc.BaccaratTableState._84] = !1;
          break;
        case _Tf._dc.PlayerAction._fm:
          d.isStateInited[_Tf._dc.BaccaratTableState._De] = !1;
          break;
        case _Tf._dc.PlayerAction._B9:
          d.isStateInited[_Tf._dc.BlackJackTableState._84] = !1;
          break;
        case _Tf._dc.PlayerAction._v7:
          d.isStateInited[_Tf._dc.BlackJackTableState._De] = !1;
          break;
        case _Tf._dc.PlayerAction._jq:
          d.isStateInited[_Tf._dc.PaigowTableState._84] = !1;
          break;
        case _Tf._dc.PlayerAction._t0:
          d.isStateInited[_Tf._dc.PaigowTableState._De] = !1
      }
      if (this.callback.code === _Tf._dc.PlayerAction._c8 || this.callback.code === _Tf._dc.PlayerAction._bk || this.callback.code === _Tf._dc.PlayerAction._B9 || this.callback.code === _Tf._dc.PlayerAction._dp || this.callback.code === _Tf._dc.PlayerAction._c1 || this.callback.code === _Tf._dc.PlayerAction._32 || this.callback.code === _Tf._dc.PlayerAction._Y7 || this.callback.code === _Tf._dc.PlayerAction._c4 || this.callback.code === _Tf._dc.PlayerAction._jq) {
        var f = this,
          a = this.parentId,
          d = function (a) {
            e = _Tf._U6._29._Xh(_Tf._N1.$(a + " " + _Tf._0l._N1._zg).val());
            f.callback.fn(f.callback.code, e);
            f.isButtonClicked = !0;
            f.value = !f.value
          };
        if (this.potType === _Tf._dc.PotType._O1) {
          d(a);
          return
        }
        d(a);
        b.$(a + " " + c._Mh).hide();
        return
      }
      if (this.callback.code === _Tf._dc.PlayerAction._B9) e = this.callback.funds.amount;
      else if (this.callback.code === _Tf._dc.PlayerAction._Eg) {
        b = this.getCardIndexes();
        c = this.callback.code;
        if (7 > b.length) c = _Tf._dc.PlayerAction._dh;
        this.callback.fn(c, e, !1, b);
        this.isButtonClicked = !0;
        this.hideDragAndDrop();
        return
      }
      this.callback.fn(this.callback.code, e);
      this.isButtonClicked = !0
    }
    this.value = !this.value;
    this.type === _Tf._dc.CommandType._Xg && this.autoActionManager._p3(this.callback.code, this.value)
  },
  getCardIndexes: function () {
    var a = this.lastCardArray.slice(0, 2),
      a = this.lastCardArray.slice(2, 7).concat(a),
      b = [],
      c, d, e = "";
    for (c = 0; c < this.cardHolder2.length; c++) {
      e = this.getCardCode(this.cardHolder2[c]);
      for (d = 0; d < a.length; d++) if (e == a[d].model.value) {
        b.push(d);
        break
      }
    }
    for (c = 0; c < this.cardHolder1.length; c++) {
      e = this.getCardCode(this.cardHolder1[c]);
      for (d = 0; d < a.length; d++) if (e == a[d].model.value) {
        b.push(d);
        break
      }
    }
    return b
  },
  getCardCode: function (a) {
    a =
      /card-code-(\w+)/.exec(a);
    return a[1] ? a[1] : ""
  },
  draw: function (a) {
    this.button && this.parent != a && this.clear();
    this.parent = a;
    a = /#table-(\d+)/.exec(a);
    if ((!this.parentId || 0 === this.parentId.length) && a) this.parentId = _Tf._0l._N1._6i.format(a[1]);
    this.remove();
    this.id = "{0}-{1}-{2}".format(a ? a[1] : "", this.type, this.code);
    if (this.type === _Tf._dc.CommandType._jf) {
      if (!(this.code === _Tf._dc.PlayerAction._dh || this.code === _Tf._dc.PlayerAction._72)) (this.code === _Tf._dc.PlayerAction._c8 || this.code === _Tf._dc.PlayerAction._B9 || this.callback.code === _Tf._dc.PlayerAction._dp || this.callback.code === _Tf._dc.PlayerAction._c1 || this.callback.code === _Tf._dc.PlayerAction._32 || this.callback.code === _Tf._dc.PlayerAction._Y7 || this.callback.code === _Tf._dc.PlayerAction._c4 || this.callback.code === _Tf._dc.PlayerAction._jq) && this._Mk(), this.code === _Tf._dc.PlayerAction._B9 ? this.drawBetsBlock() : this.code === _Tf._dc.PlayerAction._Eg ? (this.buildButtonTemplate(), this.isButtonClicked = !1, a = _Tf._dc.PlayerAction.toString(this.code) + "-button", $(this.parent).addClass(a),
        $(this.button).bind(EventType._qc, this.showDragAndDrop.bind(this)).appendTo(this.parent), $(_Tf._0l._N1.DRAG_AND_DROP_PLAY_BUTTON).unbind(), $(_Tf._0l._N1.DRAG_AND_DROP_PLAY_BUTTON).bind(EventType._qc, this._g7)) : (this.buildButtonTemplate(), this.isButtonClicked = !1, a = _Tf._dc.PlayerAction.toString(this.code) + "-button", $(this.parent).addClass(a), $(this.button).bind(EventType._qc, this._g7).appendTo(this.parent))
    } else if (this.type === _Tf._dc.CommandType._Xg) this.value = this.autoActionManager.isAutoActionSet(this.code),
      this.buildCheckboxTemplate(), $(this.button).change(this._g7).appendTo(this.parent)
  },
  buildButtonTemplate: function () {
    this.button = _h8._wc._an.GAME_BUTTON.fill({
      id: this.id,
      label: this.label,
      cssclass: "game-button"
    })
  },
  buildCheckboxTemplate: function () {
    this.button = _h8._wc._an.GAME_CHECKBOX.fill({
      id: this.id,
      label: this.label,
      value: this.value ? "checked" : ""
    })
  },
  _Mk: function () {
    var a = _Tf._N1,
      b = _Tf._0l._N1,
      c = this.parentId;
    a._36(c + b._zg, _Tf._U6._29._ps(this.callback.funds.minRaise + this.callback.funds.clientBetBeforeRaise),
      _Tf._U6._29._ps(this.callback.funds.maxRaise + this.callback.funds.clientBetBeforeRaise), _Tf._U6._29._ps(this.callback.funds.step));
    a.$(c + b._ep).show();
    a.$(c + b._Mh).show()
  },
  drawBetsBlock: function () {
    var a = _Tf._0l._N1,
      b = _Tf._41;
    this.clearBetsButtons();
    this.createBetButton(a._bk, b.$("_F2._z6"), this.callback.code)
  },
  getClientCard: function () {
    for (var a = _Mf._q1.map[_Mf._q1.activeTableId].gameManager.game.model.chairs, b = [], c = [], d = 0; d < a.length; d++) if (a[d].model.isClientChair) b = a[d].model.holders[0].model.cards,
      c = a[d].model.holders[1].model.cards;
    return c.concat(b)
  },
  clearBetsButtons: function () {
    this.callback.code !== _Tf._dc.PlayerAction._c8 && this.callback.code !== _Tf._dc.PlayerAction._bk && this.callback.code !== _Tf._dc.PlayerAction._B9 || $(this.parentId + " .bets" + this.callback.code).remove()
  },
  createBetButton: function (a, b, c) {
    b = _h8._wc._an.GAME_BUTTON.fill({
      id: "",
      cssclass: "bets" + c,
      label: b
    });
    $(b).bind(EventType._qc, this._g7).appendTo(this.parentId + a)
  },
  clear: function () {
    this.clearBetsButtons();
    $("#" + this.id).remove();
    this.type === _Tf._dc.CommandType._jf && this.button && $(this.parent).removeClass(_Tf._dc.PlayerAction.toString(this.code) + "-button");
    this.clearBetsButtons();
    this.button = null
  },
  _B5: function (a) {
    this.callback.funds = a
  },
  remove: function () {
    $(this.parent).empty();
    this.type === _Tf._dc.CommandType._jf && this.button && $(this.parent).removeClass(_Tf._dc.PlayerAction.toString(this.code) + "-button")
  },
  _p3: function (a) {
    this.value = a;
    this.type === _Tf._dc.CommandType._Xg && _Tf._N1._H0("#" + this.id, a)
  },
  clickBetHandler: function (a) {
    var b = _Tf._N1,
      c = _Tf._0l._N1,
      d = 0,
      e = this.callback.funds;
    _Tf._Hc._L8._Hi(_Tf._dc.PlayerAction._qc);
    b.eventCorrection(a, !0);
    a = $(a.target).parent();
    if (a.hasClass(c._ug.substr(2))) d = e.minBet;
    else if (a.hasClass(c._Mo.substr(2))) d = e.maxBet;
    if (this.callback.code === _Tf._dc.PlayerAction._dp || this.callback.code === _Tf._dc.PlayerAction._c1 || this.callback.code === _Tf._dc.PlayerAction._32 || this.callback.code === _Tf._dc.PlayerAction._Y7 || this.callback.code === _Tf._dc.PlayerAction._c4) d = e.amount;
    this.callback.fn(this.callback.code,
      d);
    this.isButtonClicked = !0
  },
  createMainHolder: function () {
    var a = this.getClientCard(),
      b = "",
      c = _Tf._M4._np.deckManager.getElement();
    this.cardHolder1 = [];
    this.cardHolder2 = [];
    this.lastCardArray = a;
    for (var d = 0; d < a.length; d++) b = c._46(a[d].model.value), jQuery("<div/>", {
      id: "card-code-" + a[d].model.value,
      html: b
    }).addClass("card card-" + (d + 1)).appendTo(_Tf._0l._N1.DRAG_AND_DROP_MAIN_CARD_HOLDER)
  },
  clearDragAndDrop: function () {
    $(_Tf._0l._N1.DRAG_AND_DROP_CARD).remove()
  },
  initDragAndDrop: function () {
    var a = Modernizr.prefixed("transform"),
      b = this;
    this.createMainHolder();
    DragAndDrop.init({
      dragElement: _Tf._0l._N1.DRAG_AND_DROP_CARD,
      dropElement: _Tf._0l._N1.DRAG_AND_DROP_DROP_ZONE,
      onmove: function (b) {
        b.currentTarget.style[a] = "translate(" + b.dx + "px," + b.dy + "px)"
      },
      onend: function (b) {
        $(b.currentTarget).css(a, "")
      },
      ondropactivate: function (a) {
        $(a.currentTarget).addClass(_Tf._0l._N1.DRAG_AND_DROP_ACTIVE_CARD)
      },
      ondrop: function (a, d) {
        var e = $(d),
          f = $(a.currentTarget),
          g = f.attr("id"),
          h = 0;
        b.clearCard(g, f);
        e.hasClass(_Tf._0l._N1.DRAG_AND_DROP_HOLDER1) && (h = b.cardHolder1.length + 1, 2 >= h && (f.addClass(_Tf._0l._N1.DRAG_AND_DROP_TO_HOLDER1), f.addClass(_Tf._0l._N1.DRAG_AND_DROP_CARD_ITEM + h), b.cardHolder1.push(g)));
        e.hasClass(_Tf._0l._N1.DRAG_AND_DROP_HOLDER2) && (h = b.cardHolder2.length + 1, 5 >= h && (f.addClass(_Tf._0l._N1.DRAG_AND_DROP_TO_HOLDER2), f.addClass(_Tf._0l._N1.DRAG_AND_DROP_CARD_ITEM + h), b.cardHolder2.push(g)))
      },
      ondropdeactivate: function (a) {
        $(a.currentTarget).removeClass(_Tf._0l._N1.DRAG_AND_DROP_ACTIVE_CARD)
      }
    })
  },
  clearCard: function (a, b) {
    var c = this.cardHolder1.indexOf(a),
      d = this.cardHolder2.indexOf(a),
      e = /card-item-(\d+)/.exec(b.attr("class")),
      f = !1,
      g = 0;
    e && 0 < e.length && (f = e[1]);
    f && b.removeClass(_Tf._0l._N1.DRAG_AND_DROP_CARD_ITEM + f);
    0 <= c && (this.cardHolder1.splice(c, 1), b.removeClass(_Tf._0l._N1.DRAG_AND_DROP_TO_HOLDER1));
    0 <= d && (this.cardHolder2.splice(d, 1), b.removeClass(_Tf._0l._N1.DRAG_AND_DROP_TO_HOLDER2));
    for (g = 0; g < this.cardHolder1.length; g++) if (d = g + 1, c = $("#" + this.cardHolder1[g]), (e = /card-item-(\d+)/.exec(c.attr("class"))) && 0 < e.length && e[1] != d) c.removeClass(_Tf._0l._N1.DRAG_AND_DROP_CARD_ITEM + e[1]), c.addClass(_Tf._0l._N1.DRAG_AND_DROP_CARD_ITEM + d);
    for (g = 0; g < this.cardHolder2.length; g++) if (d = g + 1, c = $("#" + this.cardHolder2[g]), (e = /card-item-(\d+)/.exec(c.attr("class"))) && 0 < e.length && e[1] != d) c.removeClass(_Tf._0l._N1.DRAG_AND_DROP_CARD_ITEM + e[1]), c.addClass(_Tf._0l._N1.DRAG_AND_DROP_CARD_ITEM + d)
  },
  showDragAndDrop: function () {
    $(_Tf._0l._N1.DRAG_AND_DROP_POPUP).show();
    this.initDragAndDrop();
    window.initDragAndDrop = this.initDragAndDrop.bind(this);
    $(_Tf._0l._N1.DRAG_AND_DROP_POPUP_CLOSE).bind(EventType._qc,
      this.hideDragAndDrop.bind(this))
  },
  hideDragAndDrop: function () {
    $(_Tf._0l._N1.DRAG_AND_DROP_POPUP).hide();
    $(_Tf._0l._N1.DRAG_AND_DROP_POPUP_CLOSE).unbind(EventType._qc);
    this.clearDragAndDrop()
  }
};
_Tf._Ek._2s._o4.GameArea = function (a, b, c, d) {
  this.area = this.id = null;
  this.design = c;
  this.code = a;
  this.parent = null;
  this.isAreaClicked = !1;
  this.callback = {
    code: a,
    funds: b,
    fn: d
  };
  this._ri()
};
_Tf._Ek._2s._o4.GameArea.prototype = {
  _ri: function () {
    this._g7 = this._g7.bind(this)
  },
  _g7: function (a) {
    _Tf._N1.eventCorrection(a, !0);
    this.callback.fn(this.callback.code, 10)
  },
  draw: function (a) {
    this.area && this.parent != a && this.clear();
    this.parent = a;
    a = /#table-(\d+)/.exec(a);
    this.id = "{0}-{1}".format(a ? a[1] : "", this.code);
    this.buildAreaTemplate();
    this.isAreaClicked = !1;
    $(this.area).bind(EventType._qc, this._g7).appendTo(this.parent)
  },
  clear: function () {
    this.area.remove();
    this.area = null
  },
  _B5: function (a) {
    this.callback.funds = a
  },
  buildAreaTemplate: function () {
    var a = this.design.paths[this.code];
    this.area = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.area.setAttribute("id", this.id);
    this.area.setAttribute("d", a.d)
  }
};
_Tf._Ek._2s._o4._0q = function (a, b, c, d, e, f) {
  this.parentId = f;
  this.factory = a;
  this.chair = null;
  this.designPosition = _Mf._b1.getPositionByParentId(f);
  this.appendResources();
  this._9j(d, d != _Mf._L2._d1(), e);
  this.previousAvatar = this.avatar;
  this.realNumber = c;
  this.locate(c, !1);
  this.isShadow = !1;
  this.middleContext = this.context = b
};
_Tf._Ek._2s._o4._0q.prototype = {
  appendResources: function () {
    this.avatar = _Tf._M4._np.table.getElement("playerEmpty");
    this.avatarBack = _Tf._M4._np.table.getElement("playerBack");
    this.avatarActiveBack = _Tf._M4._np.table.getElement("playerActiveBack");
    this.avatarBar = _Tf._M4._np.table.getElement("playerBar");
    this.avatarBarAway = _Tf._M4._np.table.getElement("playerBarAway")
  },
  locate: function (a, b) {
    var c = this.designPosition.chairs[a],
      d = b ? this.designPosition.playerClient : this.designPosition.player;
    this.realNumber = a;
    this.chair = c;
    this.position = b ? this.designPosition.playerClient.posCenter.clone() : c.posCenter.clone();
    this.position.plus(c.posPlayerCenter.clone());
    this.position.sub(new _8n(d.width / 2, d.height / 2))
  },
  isAvatarChanged: function () {
    return this.previousAvatar != this.avatar ? !0 : !1
  },
  completeAvatarChanging: function () {
    this.previousAvatar = this.avatar
  },
  _9j: function (a, b, c) {
    this.avatar = _Tf._M4._np.table.getElement("playerEmpty");
    "undefined" === typeof c ? _Tf._Hc._ad._bn(a, this, "avatar", !b) : "string" === typeof c && _Tf._Hc._ad.loadAvatarByUrl(c, !b, null, this, "avatar")
  },
  setMiddleContext: function (a) {
    this.middleContext = a
  },
  getMiddleContext: function () {
    return this.middleContext
  },
  _qp: function (a, b, c) {
    // alert(JSON.stringify(this.designPosition.player))
    a = c ? this.designPosition.playerClient : this.designPosition.player;
    this.middleContext.drawImage(this.avatarBack, this.position.x, this.position.y, a.width, a.height);
    this.middleContext.drawImage(this.avatar, this.position.x + (a.width - a.avatarWidth) / 2, this.position.y + (a.height - a.avatarHeight) / 2, a.avatarWidth, a.avatarHeight);
    this.middleContext.drawImage(this.avatarBar,
      this.position.x + (a.width - a.avatarWidth) / 2, this.position.y + (a.height - a.statusHeight - (a.height - a.avatarHeight) / 2), a.statusWidth, a.statusHeight)
  },
  _drawBlocks: function () { },
  _drawStatus: function (a, b, c) {
    a && (a = c ? this.designPosition.playerClient : this.designPosition.player, this.context.drawImage(this.avatarBarAway, this.position.x + (a.width - a.avatarWidth) / 2 + a.offsetXBox, this.position.y + (a.height - a.statusHeight - (a.height - a.avatarHeight) / 2) + a.offsetYBoxOperation, a.statusWidth, a.statusHeight))
  },
  _drawActiveShape: function (a,
    b) {
    if (a) {
      var c = b ? this.designPosition.playerClient : this.designPosition.player;
      _Tf._Ek._29.drawRoundRect(this.context, this.position.x, this.position.y, c.width, c.height, _h8._0l._vn.ACTIVE_PLAYER, Math.round(0.03 * c.width), Math.round(0.1 * c.width))
    }
  },
  _Pm: function (a, b) {
    var c = b ? this.designPosition.playerClient : this.designPosition.player;
    _Tf._Ek._29.fillText(this.middleContext, this.designPosition, a, this.position.x + c.width / 2, this.position.y + c.offsetYname, _h8._0l._vn.PLAYER_NAME, c.textNameFontSize)
  },
  lastMoneyValue: 0,
  lastMoneyString: "",
  _customizeMoney: function (a, b) {
    if (0 < a.moneyString.length) this._G(a.moneyString, b);
    else {
      var c = this.lastMoneyString;
      if (this.lastMoneyValue != a.cash) this.lastMoneyString = c = _Tf._Ek._29._ca(a.cash, a.type, !0), this.lastMoneyValue = a.cash;
      this._G(c, b)
    }
  },
  _G: function (a, b) {
    var c = b ? this.designPosition.playerClient : this.designPosition.player;
    _Tf._Ek._29.fillText(this.context, this.designPosition, a, this.position.x + c.width / 2, this.position.y + c.offsetYcash, _h8._0l._vn.PLAYER_CASH, c.textCashFontSize)
  },
  _uc: function (a, b) {
    var c = b ? this.designPosition.playerClient : this.designPosition.player,
      d = a ? _Tf._41.getLocale()._6[a.action] : "",
      e = _h8._0l._vn;
    "" != d && (_Tf._Ek._29.drawBlocks(this.context, this.position.x + c.width - c.textActionWidth + c.offsetXBox, this.position.y + c.offsetYTextBox + c.offsetYBoxOperation, c.textActionWidth, c.textActionHeight, e.PLAYER_BLOCKS, e.PLAYER_BLOCKS_BORDER, Math.round(c.textActionCornerRadius)), _Tf._Ek._29.fillText(this.context, this.designPosition, d, this.position.x + c.width - c.textActionWidth / 2 + c.offsetXBox, this.position.y + c.offsetYTextBox + c.offsetYTextAction + c.offsetYBoxOperation, e._Yh, c.textActionFontSize))
  },
  _E0: function (a, b) {
    if (a != _Tf._dc.PlayerState._w) {
      var c = b ? this.designPosition.playerClient : this.designPosition.player;
      _Tf._Ek._29.fillText(this.context, this.designPosition, _Tf._41.$("_Q5." + a), this.position.x + c.width / 2, this.position.y + c.offsetYstatus, _h8._0l._vn.TEXT_STATUS, c.textStatusFontSize)
    }
  },
  _drawLevel: function () { },
  _Ej: function () {
    this.isShadow = !0
  },
  _B1: function () {
    this.isShadow = !1
  },
  drawAfter: function (a, b, c, d, e, f, g) {
    a = this.context.globalAlpha;
    if (this.isShadow || d != _Tf._dc.PlayerState._w) this.context.globalAlpha = this.designPosition.player.transparent;
    d === _Tf._dc.PlayerState._w && this._customizeMoney(b, g);
    this._uc(c, g);
    this.context.globalAlpha = a;
    this._E0(d, g);
    this._drawActiveShape(e, g)
  },
  drawMiddle: function (a, b, c, d, e, f) {
    var g = this.middleContext.globalAlpha;
    if (this.isShadow || b != _Tf._dc.PlayerState._w) this.context.globalAlpha = this.designPosition.player.transparent;
    e || this._qp(b != _Tf._dc.PlayerState._w, c, f);
    this._drawBlocks(b != _Tf._dc.PlayerState._w, c, f);
    this._Pm(a, f);
    this._drawLevel(d, f);
    this.middleContext.globalAlpha = g
  },
  draw: function (a, b, c) {
    this._drawStatus(a != _Tf._dc.PlayerState._w, b, c)
  },
  update: function () { },
  destroy: function () { }
};
_Tf._Ek._2s._o4._nq = function (a, b, c, d) {
  this.appendResources();
  this.designPosition = _Mf._b1.getPositionByParentId(d);
  this.context = a;
  this.parentId = d;
  this.countChairs = c;
  this.numberStep = 0;
  this._Js(b)
};
_Tf._Ek._2s._o4._nq.prototype = {
  appendResources: function () {
    this.dealer = _Tf._M4._np.table._E6()
  },
  locateByStep: function (a, b) {
    var c = _Tf._Ek._29.getIndexAfterRotation(a, b, this.countChairs);
    this.numberStep = b;
    this.locate(this.designPosition.tableSeats[this.countChairs][c])
  },
  locate: function (a) {
    this.positionCurrent = (a = this.designPosition.chairs[a]) ? a.posDealerButton.clone() : null
  },
  draw: function () {
    if (this.positionCurrent) {
      var a = this.designPosition.dealerButton.width,
        b = this.designPosition.dealerButton.height;
      this.context.drawImage(this.dealer, this.positionCurrent.x - a / 2, this.positionCurrent.y - b / 2, a, b)
    }
  },
  update: function () { },
  _Js: function (a) {
    this.locate(this.designPosition.tableSeats[this.countChairs][_Tf._Ek._29.getIndexAfterRotation(a, this.numberStep, this.countChairs)])
  }
};
_Tf._Ek._2s._o4.Dealer = function (a, b, c) {
  this.dealerChair = null;
  this.designPosition = _Mf._b1.getPositionByGameType(c);
  this.appendResources();
  this.locate();
  this.context = a;
  this.middleContext = b
};
_Tf._Ek._2s._o4.Dealer.prototype = {
  locate: function () {
    this.position = this.designPosition.dealerChair
  },
  getPosition: function () {
    return this.position
  },
  getContext: function () {
    return this.context
  },
  appendResources: function () {
    this.dealerChair = _Tf._M4._np.table.getElement("dealerChair")
  },
  drawMiddle: function () {
    this.clearMiddle();
    this.appendResources();
    if (this.dealerChair) {
      var a = this.getPosition();
      _Tf._Ek._29.drawImage(this.middleContext, this.dealerChair, a.posCenter.x, a.posCenter.y, 0, a.width, a.height)
    }
  },
  clearMiddle: function () {
    if (this.dealerChair) {
      var a = this.getPosition();
      _Tf._Ek._29.fillRectToClear(this.middleContext, a.posCenter.x - a.width / 2, a.posCenter.y - a.height / 2, a.width, a.height + 2)
    }
  }
};
_Tf._Ek._2s._o4._rs = function (a, b) {
  this.appendResources();
  this.designPosition = b;
  this.locate();
  this.currentCount = 0;
  this.context = a;
  this._U3 = this._U3.bind(this)
};
_Tf._Ek._2s._o4._rs.prototype = {
  appendResources: function () { },
  locate: function () {
    this.positions = this.designPosition.tablePots
  },
  _U3: function (a, b) {
    a._q3(this.positions[b])
  },
  update: function (a, b) {
    if (0 !== b) {
      if (this.currentCount != b) this.currentCount = b;
      a.forEach(this._U3)
    }
  },
  draw: function () { },
  getContext: function () {
    return this.context
  },
  getPositionByIndex: function (a) {
    return this.positions[a]
  }
};
_Tf._Ek._2s._o4._l7 = function (a, b, c, d, e) {
  this.appendResources();
  this.designPosition = d;
  this.locate();
  this.context = a;
  this.middleContext = b;
  this.staticContext = c;
  this.factory = e
};
_Tf._Ek._2s._o4._l7.prototype = {
  appendResources: function () {
    this.table = _Tf._M4._np.table._tl()
  },
  locate: function () {
    var a = this.designPosition.table;
    this.position = a.posCenter.clone();
    this.position.sub(new _8n(a.width / 2, a.height / 2));
    this.positionCardsInCenter = this.designPosition.tableCards
  },
  _I9: function () {
    this.staticContext.drawImage(this.table, this.position.x, this.position.y, this.designPosition.table.width, this.designPosition.table.height)
  },
  getTmpChip: function (a, b, c) {
    return this.factory.createChipController(this.factory,
      this.context, a, b, c, this.moneyType, _Tf._dc.ChipState._D9, this.designPosition)
  },
  getPositionCardInCenterByIndex: function (a, b) {
    return this.designPosition.tableCardHolder ? _Tf._Ek._29._T9(b, this.designPosition.cardUpOnTable.width, 0, -Math.round(0.6 * this.designPosition.cardUpOnTable.width), new _8n(this.designPosition.tableCardHolder.pos.x + this.designPosition.tableCardHolder.width / 2, this.designPosition.tableCardHolder.pos.y), this.designPosition.tableCardHolder.spaceY)[a] : this.positionCardsInCenter[a]
  },
  getContext: function () {
    return this.context
  },
  getMiddleContext: function () {
    return this.middleContext
  }
};
_Tf._Ek._2s._o4.TableMessage = function (a, b) {
  this.appendResources();
  this.context = a;
  this.parentId = b;
  this.designPosition = _Mf._b1.getPositionByParentId(b);
  this.locate();
  this.blinking = {
    lastValue: "",
    lastValueCount: 0,
    lastValueCountMax: 8,
    waitTick: 3
  };
  this.textSize = null
};
_Tf._Ek._2s._o4.TableMessage.prototype = {
  appendResources: function () { },
  locate: function () {
    this.position = this.designPosition.tableMessage.posCenter.clone()
  },
  _drawMessage: function (a) {
    this.clear();
    var b = _Tf._Ek._29,
      c = _h8._0l._vn,
      d = this.position.clone(),
      e = this.designPosition.tableMessageBox,
      f = new _8n(0, this.designPosition.tableMessage.spaceY),
      g = this.designPosition.tableMessage.text;
    if (1 < a.text.length) this.textSize = b.fillText(this.context, this.designPosition, a.text, d.x + 5, d.y, c.TEXT_TABLE_MESSAGE, g, !1, !1, !1, !1, e.textWeight, e.width), d.plus(f)
  },
  draw: function (a) {
    if (!(0 === a.length || 0 > this.blinking.lastValueCount)) this._drawMessage(a[0]), this.blinking.lastValue = a[0], this.blinking.lastValueCount++
  },
  clear: function () {
    var a = this.designPosition.tableMessageBox;
    this.textSize && this.context.clearRect(a.posCenter.x - 20, a.posCenter.y - 10, a.width + 40, a.height + 20);
    this.textSize = null
  },
  update: function (a) {
    if (0 > this.blinking.lastValueCount) this.blinking.lastValueCount++;
    else {
      if (1 < a.messages.length && this.blinking.lastValueCount >= this.blinking.lastValueCountMax && a.messages[0] === this.blinking.lastValue) a.messages.shift(), this.blinking.lastValueCount = -this.blinking.waitTick, this.blinking.lastValue = "";
      if (0 == a.messages.length) this.blinking.lastValueCount = 0
    }
  }
};
_Tf._Ek._2s._o4._D = function (a, b, c, d) {
  this.countChairs = d;
  this.numberStep = 0;
  this.designPosition = _Mf._b1.getPositionByParentId(c);
  this._Kg(b, !1);
  this.appendResources();
  this.isClient = this.isShow = !1;
  this.parentId = c;
  b = this.designPosition.timer.width;
  this.moving = {
    isMoving: !1,
    angleDelta: 6,
    angleStart: b,
    angleCurrent: b,
    angleTarget: 0,
    height: this.designPosition.timer.height,
    steps: -1
  };
  this.context = a;
  this.updateBrokenTimeInterval = this.interval = null;
  this.updateBrokenTimeDialogId = ("" + Math.random()).substr(2)
};
_Tf._Ek._2s._o4._D.prototype = {
  appendResources: function () {
    this.timer = _Tf._M4._np.table.getElement("playerBarTimer")
  },
  draw: function () {
    if (this.positionCurrent && this.isShow && 0 !== this.moving.angleCurrent) {
      var a = this.designPosition.timer;
      _Tf._Ek._29.drawImage(this.context, this.timer, this.positionCurrent.x, this.positionCurrent.y, 0, this.moving.angleCurrent, this.moving.height, this.moving.angleCurrent, this.moving.height, a.width, a.height)
    }
  },
  update: function () {
    if (this.moving.isMoving && this.isShow && 0 >= this.moving.steps && (this.moving.steps = -1, this.moving.isMoving = !1, this.moving.angleCurrent = this.moving.angleTarget, this.interval)) clearInterval(this.interval), this.interval = null
  },
  locate: function (a, b) {
    var c = this.designPosition.chairs[a];
    c ? b ? this.positionCurrent = this.designPosition.playerClient.posCenter.clone() : (this.positionCurrent = c.posCenter.clone(), this.positionCurrent.plus(c.posTimer.clone())) : this.positionCurrent = null
  },
  locateByStep: function (a, b) {
    var c = _Tf._Ek._29.getIndexAfterRotation(a, b, this.countChairs);
    this.numberStep = b;
    this.locate(this.designPosition.tableSeats[this.countChairs][c])
  },
  _Kg: function (a, b) {
    this.isClient = b || !1;
    this.locate(this.designPosition.tableSeats[this.countChairs][_Tf._Ek._29.getIndexAfterRotation(a, this.numberStep, this.countChairs)], b)
  },
  hide: function () {
    this.moving.isMoving = !1;
    this.moving.steps = -1;
    this.moving.angleCurrent = this.moving.angleStart;
    this.isClient = this.isShow = !1
  },
  _U3: function () {
    this.moving.angleCurrent += this.moving.angleDelta;
    if (0 > this.moving.angleCurrent) this.moving.angleCurrent = 0;
    this.moving.steps--;
    if (0 === this.moving.steps) clearInterval(this.interval), this.interval = null
  },
  show: function (a, b) {
    this.interval && clearInterval(this.interval);
    this.isShow = !0;
    this.moving.isMoving = !0;
    this.moving.steps = b;
    this.moving.angleDelta = -this.timer.width / a;
    this.moving.angleCurrent = this.moving.angleStart + this.moving.angleDelta * (a - b);
    var c = this._U3.bind(this);
    this.interval = setInterval(c, 1E3)
  },
  showBrokenTime: function (a) {
    a = Math.abs(a);
    clearInterval(this.updateBrokenTimeInterval);
    var b = _Tf._N1,
      c = _Tf._0l._N1,
      d = _Tf._Ek._29,
      e = 1 === a ? _Tf._41.$("__6._u0") : _Tf._41.$("__6._u") + d._nj(a, !0);
    0 < b.$(c._dr + this.updateBrokenTimeDialogId, !0).length ? b._ab(c._Wg + this.updateBrokenTimeDialogId, e, !0) : b.showInfoDialog(c._dr.substr(1) + this.updateBrokenTimeDialogId, c._Wg.substr(1) + this.updateBrokenTimeDialogId, e, !1, _Tf._0l._N1._ff._2l, this.parentId);
    if (1 !== a) {
      var f = a,
        g = this;
      this.updateBrokenTimeInterval = setInterval(function () {
        f -= 1;
        0 > f && (f = 0);
        b._ab(c._Wg + g.updateBrokenTimeDialogId, _Tf._41.$("__6._u") + d._nj(f, !0), !0);
        if (0 >= f || !b.$(c._dr + g.updateBrokenTimeDialogId, !0).length) clearInterval(g.updateBrokenTimeInterval), g.updateBrokenTimeInterval = null
      }, 1E3)
    }
  },
  hideBrokenTime: function () {
    clearInterval(this.updateBrokenTimeInterval);
    this.updateBrokenTimeInterval = null;
    var a = _Tf._N1,
      b = _Tf._0l._N1;
    0 < a.$(b._dr + this.updateBrokenTimeDialogId, !0).length && a.$(b._dr + this.updateBrokenTimeDialogId, !0).remove()
  }
};
_Tf._Ek._2s._o4._kr = function (a, b, c, d) {
  this.appendResources();
  this.designPosition = d;
  this.context = a;
  this.gameType = b;
  this.locate(c);
  this.blinking = {
    lastValue: "",
    lastValueCount: 0,
    lastValueCountMax: 40,
    waitTick: 3
  }
};
_Tf._Ek._2s._o4._kr.prototype = {
  appendResources: function () {
    this.winTable = _Tf._M4._np.table.getElement("winTable")
    //   alert("winTab "+ JSON.stringify(this.winTable));
  },
  locate: function (a) {
    this.position = null === a ? this.designPosition.bank.posCenter.clone() : this.designPosition.chairs[a].posCenter.clone()
  },
  _drawMessage: function (a, b) {
    var c = _Tf._Ek._29,
      d = _h8._0l._vn,
      e = this.position.clone(),
      f = this.designPosition.winTable;
    c.drawImage(this.context, this.winTable, e.x, e.y, 0, f.width, f.height);
    var g = _Tf._Ek._29._ca(a, b, !0),
      h;
    h = _Tf._dc.GameType;
    h = h.isBlackJack(this.gameType) || h.isBaccarat(this.gameType) ? _Tf._41.$("_b8._q") : _Tf._41.$("_x._f");
    //   alert("h "+JSON.stringify(h));
    c.fillText(this.context, this.designPosition, h, e.x, e.y + f.offsetYtitle, d.TEXT_WIN_TABLE, f.textTitle);
    c.fillText(this.context, this.designPosition, g, e.x, e.y + f.offsetYpot, d.TEXT_WIN_TABLE, f.textPot)
  },
  draw: function (a, b, c) {
    if (!(0 === a.length || 0 > this.blinking.lastValueCount || this.blinking.lastValueCount >= this.blinking.lastValueCountMax)) this._drawMessage(a[0], b, c), this.blinking.lastValue = a[0], this.blinking.lastValueCount++
  },
  update: function (a) {
    if (0 > this.blinking.lastValueCount) this.blinking.lastValueCount++;
    else if (1 < a.messages.length && this.blinking.lastValueCount >= this.blinking.lastValueCountMax && a.messages[0] === this.blinking.lastValue) a.messages.shift(), this.blinking.lastValueCount = -this.blinking.waitTick, this.blinking.lastValue = ""
  }
};
_Tf._Ek._2s._o4.Rank = function (a, b, c, d, e, f) {
  this.appendResources();
  this.parentId = d;
  this.rankId = e;
  this.isDealer = f;
  this.realNumber = c;
  this.context = a;
  this.middleContext = b;
  this.designPosition = _Mf._b1.getPositionByParentId(d);
  this.locate(c)
};
_Tf._Ek._2s._o4.Rank.prototype = {
  appendResources: function () { },
  locate: function (a) {
    this.realNumber = a;
    this.position = this.isDealer ? this.designPosition.dealerRank.pos.clone() : this.designPosition.chairs[a].posRanks[this.rankId].clone()
  },
  update: function () { },
  draw: function (a) {
    var a = a ? a : "",
      b = _Tf._Ek._29,
      c = _h8._0l._vn,
      d = this.getPosition();
    b.fillText(this.context, this.designPosition, a, d.x, d.y, c.CHAIR_RANK, this.isDealer ? this.designPosition.dealerRank.text : this.designPosition.playerRank.text)
  },
  getPosition: function () {
    return this.position.clone()
  },
  _Kg: function (a) {
    this.position = a.clone()
  },
  getContext: function () {
    return this.context
  },
  drawMiddle: function () { },
  clearMiddle: function () { },
  clear: function () { }
};
_Tf._Ek._2s._3k._gl = function (a, b) {
  this.parentId = _Tf._0l._N1._6i.format(a) || "";
  this.gameType = b;
  this.topMargin = this.leftMargin = 0;
  this.gameSvg = this.extraCanvas = this.middleCanvas = this.gameCanvas = this.staticCanvas = null;
  this.designPosition = _Mf._b1.getPositionByParentId(a);
  this.init()
};
_Tf._Ek._2s._3k._gl.prototype = {
  _R0: function () { },
  _kp: function () { },
  _E4: function () {
    var a = _Tf._N1,
      b = _Tf._0l._N1;
    0 < a.$(this.parentId + b._mr).length || ($(this.parentId + ".player-actions-buttons").addClass("has-back-button"), a._c6(this.parentId + b._1g, _h8._wc._an.BUTTON_IM_BACK))
  },
  _Qo: function () {
    var a = _Tf._N1,
      b = _Tf._0l._N1;
    $(this.parentId + ".player-actions-buttons").removeClass("has-back-button");
    a.$(this.parentId + b._mr).remove()
  },
  showJoinWaitListButton: function () {
    this.hideLeaveWaitListButton();
    var a = _Tf._N1,
      b = _Tf._0l._N1;
    0 < a.$(this.parentId + b._Vm).length || ($(this.parentId + ".player-actions-buttons").addClass("has-join-button"), a._c6(this.parentId + b._w9, _h8._wc._an.BUTTON_JOIN_WAIT_LIST))
  },
  hideJoinWaitListButton: function () {
    var a = _Tf._N1,
      b = _Tf._0l._N1;
    $(this.parentId + ".player-actions-buttons").removeClass("has-join-button");
    a.$(this.parentId + b._Vm).remove()
  },
  showLeaveWaitListButton: function () {
    this.hideJoinWaitListButton();
    var a = _Tf._N1,
      b = _Tf._0l._N1;
    0 < a.$(this.parentId + b._dd).length || ($(this.parentId + ".player-actions-buttons").addClass("has-leave-button"),
      a._c6(this.parentId + b._w9, _h8._wc._an.BUTTON_LEAVE_WAIT_LIST))
  },
  hideLeaveWaitListButton: function () {
    var a = _Tf._N1,
      b = _Tf._0l._N1;
    $(this.parentId + ".player-actions-buttons").removeClass("has-leave-button");
    a.$(this.parentId + b._dd).remove()
  },
  hideWaitListButtons: function () {
    this.hideJoinWaitListButton();
    this.hideLeaveWaitListButton()
  },
  _7f: function () {
    var a = _Tf._N1,
      b = _Tf._0l._N1;
    0 < a.$(this.parentId + b._al).length || a._c6(this.parentId + b._Ri, _h8._wc._an.BUTTON_ADD_MONEY)
  },
  _p8: function () {
    _Tf._N1.$(this.parentId + _Tf._0l._N1._al).remove()
  },
  _7q: function (a, b, c) {
    var d = _Tf._N1,
      e = _Tf._0l._N1;
    this.showParamsOnBuyInForm(a, b, c, !0);
    d._c6(e._5g, _h8._wc._an.BUTTON_OK_ADD_MONEY);
    d._c6(e._7, _h8._wc._an.BUTTON_CANCEL_ADD_MONEY);
    d.$(e._Xo).show()
  },
  _fi: function (a) {
    _Mf._q1._y9() == a && this._i9(a)
  },
  _Ze: function (a, b, c) {
    var d = _Tf._N1,
      e = _Tf._0l._N1;
    this.showParamsOnBuyInForm(a, b, c, !0);
    d._c6(e._5g, _h8._wc._an.BUTTON_OK_BUY_IN);
    d._c6(e._7, _h8._wc._an.BUTTON_CANCEL_BUY_IN);
    d.$(e._Xo).show()
  },
  _i9: function (a) {
    if (_Mf._q1._y9() == a) {
      var a = _Tf._N1,
        b = _Tf._0l._N1;
      a.$(b._Xo).hide();
      a.$(b._5g).empty();
      a.$(b._7).empty()
    }
  },
  showParamsOnBuyInForm: function (a, b, c, d) {
    var e = _Tf._N1,
      f = _Tf._0l._N1,
      g = _Tf._Ek._29,
      h = _Tf._U6._29,
      j = _Tf._41,
      k = 1E3 >= c ? 100 : 1E3;
    if ("undefined" !== typeof d && d) k = a.baseStake;
    if (_Tf._dc.GameType.isBlackJack(a.gameType) || _Tf._dc.GameType.isBaccarat(a.gameType)) k = 100 > a.minBet ? a.minBet : 100;
    e.$(f._5g).empty();
    e.$(f._7).empty();
    e._36(f._ig, h._ps(b), h._ps(c), h._ps(k));
    e._ab(f._T7, j.$("_l9._U").format(j.$("_l9.__3").format(g._ca(a.minCash,
      a.moneyType, !0), g._ca(a.maxCash, a.moneyType, !0))));
    e._ab(f._v3, j.$("_l9._i").format(g._ca(_Mf._L2._Z5(a.moneyType), a.moneyType)));
    if ((a = _Mf._q1._Rm(a.id)) && a.autoActionManager) 0 < e.$(f._H9).length && (e.$(f._H9).empty(), e._c6(f._H9, _h8._wc._an.GAME_CHECKBOX.fill({
      id: f._01.substr(1),
      label: j.$("_l9._L6"),
      value: a.autoActionManager.isBuyInAutoActionSet(_Tf._dc.AutoAction._v8) ? "checked" : ""
    })), $(f._H9).trigger("create")), 0 < e.$(f._74).length && (e.$(f._74).empty(), e._c6(f._74, _h8._wc._an.GAME_CHECKBOX.fill({
      id: f._kq.substr(1),
      label: j.$("_l9._h6"),
      value: a.autoActionManager.isBuyInAutoActionSet(_Tf._dc.AutoAction._vp) ? "checked" : ""
    })), $(f._74).trigger("create"))
  },
  _Di: function () {
    return this.gameCanvas.getContext()
  },
  getMiddleCanvasContext: function () {
    return this.middleCanvas.context
  },
  getExtraCanvasContext: function () {
    return this.extraCanvas ? this.extraCanvas.context : null
  },
  _vi: function () {
    return this.staticCanvas.context
  },
  getStaticCanvas: function () {
    return this.staticCanvas
  },
  getGameSvg: function () {
    return this.gameSvg
  },
  getScales: function () {
    var a = this.gameCanvas.getDevicePixelRatio();
    return {
      scaleX: this.gameCanvas.scaleX / a,
      scaleY: this.gameCanvas.scaleY / a
    }
  },
  getMargins: function () {
    return {
      top: this.topMargin,
      left: this.leftMargin
    }
  },
  init: function () {
    var a = _Tf._N1,
      b = _Tf._0l._N1,
      c = this.designPosition.canvas;
    this.staticCanvas = new _Tf._Hc._Uf(this.parentId + b._Lc, c.width, c.height);
    this.gameCanvas = new _Tf._Hc._Uf(this.parentId + b._4e, c.width, c.height);
    this.middleCanvas = new _Tf._Hc._Uf(this.parentId + b._og, c.width, c.height);
    this.gameSvg = a.$(this.parentId + b._B4)[0];
    if (0 < $(this.parentId + b._hs).length) this.extraCanvas = new _Tf._Hc._Uf(this.parentId + b._hs, c.width, c.height)
  },
  clearCanvasByContext: function (a) {
    a === this.staticCanvas.getContext() ? this.staticCanvas.clear() : a === this.gameCanvas.getContext() ? this.gameCanvas.clear() : a === this.middleCanvas.getContext() ? this.middleCanvas.clear() : 0 < $(this.parentId + config._hs).length && a === this.extraCanvas.getContext() && this.extraCanvas.clear()
  },
  resize: function () {
    var a = _Tf._N1,
      b = _Tf._0l._N1,
      c = a.$(this.parentId + b._pf),
      d = a.$(this.parentId + b._es)[0],
      e = a.$(this.parentId + b._Qf)[0],
      f = c.width(),
      g = f,
      h = c.height(),
      c = h,
      j = this.designPosition.canvas,
      k = j.width / j.height,
      l = f / h;
    f >= j.width && h >= j.height ? (g = j.width, c = j.height) : l > k ? g = parseInt(c * k) : c = parseInt(g / k);
    k = g / j.width;
    j = c / j.height;
    this.leftMargin = parseInt((f - g) / 2);
    this.topMargin = parseInt((h - c) / 2);
    this.gameCanvas.replace(this.topMargin, this.leftMargin);
    this.staticCanvas.replace(this.topMargin, this.leftMargin);
    this.middleCanvas.replace(this.topMargin, this.leftMargin);
    this.extraCanvas && this.extraCanvas.replace(this.topMargin,
      this.leftMargin);
    f = _h8._wc._3k[this.gameType];
    if (d) d.style.width = g + "px", d.style.height = c + "px";
    f && (d = f.scale.x * k, e.setAttribute("transform", "translate(" + f.offset.x * d + "," + (this.topMargin + f.offset.y * j) + ") scale(" + d + "," + f.scale.y * j + ")"));
    this.topMargin += 0 < a.$(b._j7).length ? a.$(b._j7).height() : 0;
    this.gameCanvas.resize(g, c);
    this.staticCanvas.resize(g, c);
    this.middleCanvas.resize(g, c);
    this.extraCanvas && this.extraCanvas.resize(g, c)
  },
  clear: function () {
    this.gameCanvas.clear()
  }
};
_Tf._Ek._2s._3k._Ic = function (a) {
  this.parentId = _Tf._0l._N1._6i.format(a);
  this.selectBetAmountButtons = [];
  this.clickBetAmountHandler = this.clickBetAmountHandler.bind(this);
  this.currentBetAmountButtonId = 0
};
_Tf._Ek._2s._3k._Ic.prototype = {
  draw: function (a, b) {
    var c = 0;
    a.forEach(function (a) {
      a.isShow ? a.object._K5(b + c++) : a.object._Q7()
    })
  },
  _Ja: function (a) {
    this.draw(a, this.parentId + _Tf._0l._N1._6m + "-")
  },
  drawBetSelector: function (a, b) {
    var c, d = a.length,
      e = _Tf._0l._N1;
    if (this.currentBetAmountButtonId > d) this.currentBetAmountButtonId = 0;
    for (c = 0; c < d; c++) this.drawBetAmountButton(c, a[c].funds, b);
    _Tf._N1.$(this.parentId + e._Ig).show()
  },
  clearBetSelector: function () {
    _Tf._N1.$(this.parentId + _Tf._0l._N1._Ig).empty();
    this.selectBetAmountButtons = [];
    this.hideAmountSelector()
  },
  drawBetAmountButton: function (a, b, c) {
    var d = _Tf._0l._N1,
      b = _h8._wc._an.SELECT_BET_AMOUNT_BUTTON.fill({
        id: d._he.format(a),
        label: _Tf._Ek._29._ca(b, c),
        cssclass: this.currentBetAmountButtonId == a ? "bet-amount selected" : "bet-amount"
      });
    this.selectBetAmountButtons[a] = $(b).bind(EventType._qc, this.clickBetAmountHandler).appendTo(this.parentId + d._Ig)[0]
  },
  clickBetAmountHandler: function (a) {
    this.deselectBetAmountButtons("selected");
    a.currentTarget.addClassName("selected");
    this.currentBetAmountButtonId =
      /#bet-amount-(\d+)/.exec(a.currentTarget.id)[1]
  },
  deselectBetAmountButtons: function () {
    var a, b = this.selectBetAmountButtons.length;
    for (a = 0; a < b; a++) this.selectBetAmountButtons[a].removeClassName("selected")
  },
  _Wh: function (a) {
    this.draw(a, this.parentId + _Tf._0l._N1._ii + "-")
  },
  _a7: function (a) {
    this.draw(a, _Tf._0l._N1._Zb + "-")
  },
  hideAmountSelector: function () {
    _Tf._N1.$(this.parentId + _Tf._0l._N1._Ig).hide()
  },
  hideRaiseBlock: function () {
    _Tf._N1.$(this.parentId + " " + _Tf._0l._N1._Mh).hide()
  },
  clearDragAndDrop: function () {
    $(_Tf._0l._N1.DRAG_AND_DROP_CARD).remove()
  },
  hideDragAndDrop: function () {
    $(_Tf._0l._N1.DRAG_AND_DROP_POPUP).hide();
    $(_Tf._0l._N1.DRAG_AND_DROP_POPUP_CLOSE).unbind(EventType._qc);
    this.clearDragAndDrop()
  }
};
_Tf._Ek._2s._3k.GameAreas = function (a) {
  this.parentId = _Tf._0l._N1._6i.format(a)
};
_Tf._Ek._2s._3k.GameAreas.prototype = {
  draw: function (a, b) {
    a.forEach(function (a) {
      a.isShow ? a.object._K5(b) : a.object._Q7()
    })
  },
  drawAreas: function (a) {
    this.draw(a, this.parentId + _Tf._0l._N1._Qf)
  }
};
_Tf._Ek._2s._o4.BaccaratCardHolder = function (a, b, c) {
  this.appendResources();
  this.designPosition = b;
  this.position = c;
  this.currentCount = 0;
  this.context = a;
  this.isSelected = this.isShadow = !1
};
_Tf._Ek._2s._o4.BaccaratCardHolder.prototype = {
  appendResources: function () { },
  update: function (a) {
    var b = a.length;
    if (this.currentCount === b || 0 === b) this.currentCount = b;
    else {
      this.currentCount = b;
      for (var c = 0; c < b - 1; c++) a[c]._47(this.position[c]);
      a[b - 1]._24(this.position[b - 1])
    }
  },
  draw: function () { },
  setShadow: function (a) {
    this.isShadow = a
  },
  decCurrentCount: function () {
    this.currentCount--
  },
  clearCurrentCount: function () {
    this.currentCount = 0
  },
  hasShadow: function () {
    return this.isShadow
  },
  getPosition: function () {
    return this.position
  },
  getContext: function () {
    return this.context
  }
};
_Tf._Ek._2s._o4.BaccaratRank = function (a, b, c, d) {
  this.appendResources();
  this.design = d;
  this.context = a;
  this.middleContext = b;
  this.designPosition = c
};
_Tf._Ek._2s._o4.BaccaratRank.prototype = {
  appendResources: function () { },
  update: function () { },
  draw: function (a) {
    var a = null !== a ? a : "",
      b = _Tf._Ek._29,
      c = _h8._0l._vn,
      d = this.design.pos.clone();
    b.fillText(this.context, this.designPosition, a, d.x, d.y, c.CHAIR_RANK, this.design.text)
  },
  getContext: function () {
    return this.context
  },
  drawMiddle: function () { },
  clearMiddle: function () { }
};
_Tf._Ek._2s._o4.BaccaratTable = function (a, b, c, d, e) {
  this.appendResources();
  this.designPosition = d;
  this.factory = e;
  this.locate();
  this.context = a;
  this.middleContext = b;
  this.staticContext = c
};
_Tf._Ek._2s._o4.BaccaratTable.prototype = {
  appendResources: function () { },
  locate: function () {
    var a = this.designPosition.table;
    this.position = a.posCenter.clone();
    this.position.sub(new _8n(a.width / 2, a.height / 2));
    this.positionCardsInCenter = this.designPosition.tableCards
  },
  _I9: function () { },
  getTmpChip: function (a, b, c) {
    return this.factory.createChipController(this.factory, this.context, a, b, c, this.moneyType, _Tf._dc.ChipState._D9, this.designPosition)
  },
  getContext: function () {
    return this.context
  },
  getMiddleContext: function () {
    return this.middleContext
  }
};
_Tf._Ek._2s._o4.BaccaratChair = function (a, b, c, d, e, f) {
  _Tf._Ek._2s._o4.BaccaratChair.superclass.apply(this, arguments)
};
extend(_Tf._Ek._2s._o4.BaccaratChair, _Tf._Ek._2s._o4._Na);
_Tf._Ek._2s._o4.BaccaratPlayer = function (a, b, c, d, e) {
  _Tf._Ek._2s._o4.BaccaratPlayer.superclass.apply(this, arguments)
};
extend(_Tf._Ek._2s._o4.BaccaratPlayer, _Tf._Ek._2s._o4._0q);
_Tf._Ek._2s._o4.BaccaratWinTable = function (a, b, c, d, e) {
  _Tf._Ek._2s._o4.BaccaratWinTable.superclass.apply(this, arguments)
};
extend(_Tf._Ek._2s._o4.BaccaratWinTable, _Tf._Ek._2s._o4._kr);
_Tf._Ek._2s._o4.BaccaratTimer = function () {
  _Tf._Ek._2s._o4.BaccaratTimer.superclass.apply(this, arguments)
};
extend(_Tf._Ek._2s._o4.BaccaratTimer, _Tf._Ek._2s._o4._D);
_Tf._Ek._2s._o4.BaccaratTimer.prototype.appendResources = function () {
  _Tf._Ek._2s._o4.BaccaratTimer.superclass.prototype.appendResources.apply(this, arguments);
  this.globalTimer = _Tf._M4._np.table.getElement("globalTimer")
};
_Tf._Ek._2s._o4.BaccaratTimer.prototype._Kg = function (a, b) {
  this.isClient = b || !1;
  (this.isGlobal = 255 == a) || this.locate(this.designPosition.tableSeats[this.countChairs][_Tf._Ek._29.getIndexAfterRotation(a, this.numberStep, this.countChairs)], b)
};
_Tf._Ek._2s._o4.BaccaratTimer.prototype.draw = function () {
  this.isGlobal ? this.drawGlobalTimer() : this.drawChairTimer()
};
_Tf._Ek._2s._o4.BaccaratTimer.prototype.drawChairTimer = function () {
  _Tf._Ek._2s._o4.BaccaratTimer.superclass.prototype.draw.apply(this, arguments)
};
_Tf._Ek._2s._o4.BaccaratTimer.prototype.drawGlobalTimer = function () {
  var a = this.designPosition.globalTimer,
    b = parseInt(a.width * (1 - this.moving.angleCurrent / 360));
  this.clearGlobalTimer();
  this.isShow && !(0 > this.moving.steps) && _Tf._Ek._29.drawPartImage(this.context, this.globalTimer, 0, 0, b, a.height, a.posCenter.x - a.width / 2, a.posCenter.y - a.height / 2, b, a.height)
};
_Tf._Ek._2s._o4.BaccaratTimer.prototype.clearGlobalTimer = function () {
  var a = this.designPosition.globalTimer;
  a && _Tf._Ek._29.fillRectToClear(this.context, a.pos.x, a.pos.y, a.width, a.height)
};
_Tf._Ek._2s._o4.BlackJackShoe = function (a, b, c) {
  this.appendResources();
  this.context = a;
  this.middleContext = b;
  this.designPosition = c
};
_Tf._Ek._2s._o4.BlackJackShoe.prototype = {
  appendResources: function () {
    this.shoeImage = _Tf._M4._np.table.getElement("cardShoe")
  },
  update: function () { },
  draw: function (a, b) {
    var c = _Tf._Ek._29,
      d = this.designPosition.cardShoe;
    c.fillText(this.context, this.designPosition, _Tf._41.$("_Y4._H6").format(b), d.posDeckShoeText.x, d.posDeckShoeText.y, _h8._0l._vn.CARD_SHOE, d.textSize);
    c.fillText(this.context, this.designPosition, _Tf._41.$("_Y4.__0").format(a), d.posRemainingText.x, d.posRemainingText.y, _h8._0l._vn.CARD_SHOE,
      d.textSize)
  },
  getPosition: function () {
    return this.position.clone()
  },
  getContext: function () {
    return this.context
  },
  drawMiddle: function () {
    var a = this.designPosition.cardShoe;
    _Tf._Ek._29.drawImage(this.middleContext, this.shoeImage, a.pos.x, a.pos.y, 0, a.width, a.height)
  },
  clearMiddle: function () {
    var a = this.designPosition.cardShoe;
    _Tf._Ek._29.fillRectToClear(this.middleContext, a.pos.x - a.width / 2, a.pos.y - a.height / 2, a.width + 8, a.height + 8)
  }
};
_Tf._Ek._2s._o4.BlackJackChair = function (a, b, c, d, e, f) {
  _Tf._Ek._2s._o4.BlackJackChair.superclass.apply(this, arguments)
};
extend(_Tf._Ek._2s._o4.BlackJackChair, _Tf._Ek._2s._o4._Na);
_Tf._Ek._2s._o4.BlackJackPlayer = function (a, b, c, d, e) {
  _Tf._Ek._2s._o4.BlackJackPlayer.superclass.apply(this, arguments)
};
extend(_Tf._Ek._2s._o4.BlackJackPlayer, _Tf._Ek._2s._o4._0q);
_Tf._Ek._2s._o4.BlackJackRank = function () {
  _Tf._Ek._2s._o4.BlackJackRank.superclass.apply(this, arguments)
};
extend(_Tf._Ek._2s._o4.BlackJackRank, _Tf._Ek._2s._o4.Rank);
_Tf._Ek._2s._o4.BlackJackCardHolder = function (a, b, c, d) {
  _Tf._Ek._2s._o4.BlackJackCardHolder.superclass.apply(this, arguments)
};
extend(_Tf._Ek._2s._o4.BlackJackCardHolder, _Tf._Ek._2s._o4._a6);
_Tf._Ek._2s._o4.BlackJackCardHolder.prototype.update = function (a, b, c, d) {
  c = a.length;
  if (this.currentCount === c || 0 === c) this.currentCount = c;
  else {
    this.currentCount = c;
    for (var e = this.getCardsPositions(c, b, d), f = 0; f < c - 1; f++) a[f]._47(e[f], b, d), a[f]._ss(d);
    a[c - 1]._24(e[c - 1], b, d)
  }
};
_Tf._Ek._2s._o4.BlackJackCardHolder.prototype.getCardsPositions = function (a, b, c) {
  var d, e, f = c ? this.designPosition.chairCardHolderActive : this.designPosition.chairCardHolder;
  b ? c ? (f = this.designPosition.chairCardHolderActive ? this.designPosition.clientChairCardHolderActive : f, e = this.positionClientActive, d = this.designPosition.cardUpClientActive) : (f = this.designPosition.chairCardHolder ? this.designPosition.clientChairCardHolder : f, e = this.positionClient, d = this.designPosition.cardUpClient) : c ? (e = this.positionActive,
    d = this.designPosition.cardUpActive) : (e = this.position, d = this.designPosition.cardUp);
  return positions = _Tf._Ek._29._T9(a, d.width, 0, -Math.round(0.6 * d.width), new _8n(e.x + f.width / 2, e.y), d.stepUp, f, b, c)
};
_Tf._Ek._2s._o4.BlackJackCard = function (a, b, c, d, e) {
  _Tf._Ek._2s._o4.BlackJackCard.superclass.apply(this, arguments);
  this.insurance = {
    posY: 0,
    isInsurance: !1,
    steps: -1,
    maxStepsCount: 11
  }
};
extend(_Tf._Ek._2s._o4.BlackJackCard, _Tf._Ek._2s._o4._W2);
_Tf._Ek._2s._o4.BlackJackCard.prototype.getCardBack = function () {
  return _Tf._dc._W2._c7
};
_Tf._Ek._2s._o4.BlackJackCard.prototype.afterInsurance = function () {
  this.insurance.steps = this.insurance.maxStepsCount;
  this.insurance.isInsurance = !0;
  this.insurance.posY = this.positionCurrent.y
};
_Tf._Ek._2s._o4.BlackJackCard.prototype.update = function () {
  if (this.insurance.isInsurance && !this.turning.isTurning) {
    var a = this.designPosition.insuranceAnimation.offsetY / this.insurance.maxStepsCount;
    this.insurance.posY = this.insurance.steps >= this.insurance.maxStepsCount / 2 ? this.insurance.posY - a : this.insurance.posY + a;
    this.positionCurrent.y = this.insurance.posY;
    this.insurance.steps--
  }
  if (this.turning.isTurning || 0 > this.insurance.steps) this.insurance.isInsurance = !1, this.insurance.steps = -1, _Tf._Ek._2s._o4.BlackJackCard.superclass.prototype.update.apply(this,
    arguments)
};
_Tf._Ek._2s._o4.BlackJackCard.prototype.draw = function (a, b, c, d, e, f) {
  var g = this.context.globalAlpha;
  if (d) this.context.globalAlpha = this.isTableCard ? this.designPosition.cardUpOnTable.transparent : f ? this.designPosition.cardUpActive.transparent : this.designPosition.cardUp.transparent;
  try {
    if (this.insurance.isInsurance) this._drawInsurance(a, b, c, d, f);
    else {
      if (d) this.context.globalAlpha = g;
      _Tf._Ek._2s._o4.BlackJackCard.superclass.prototype.draw.apply(this, arguments);
      return
    }
  } catch (h) { }
  if (d) this.context.globalAlpha = g
};
_Tf._Ek._2s._o4.BlackJackCard.prototype._solveDrawInsuranceParams = function (a, b, c) {
  var a = this.designPosition.cardUpOnTable.width,
    b = this.designPosition.cardUpOnTable.height,
    d = this.designPosition.insuranceAnimation.sizeY,
    e = 0,
    c = this.getCardBack(),
    f = this.insurance.steps + 1;
  f <= this.insurance.maxStepsCount && (e = f >= this.insurance.maxStepsCount / 2 ? 2 * b * (1 - d) * (this.insurance.maxStepsCount - f) / this.insurance.maxStepsCount : 2 * b * (1 - d) * f / this.insurance.maxStepsCount);
  return {
    card: c,
    width: a,
    height: b - e,
    isSelected: !1,
    isActive: !1
  }
};
_Tf._Ek._2s._o4.BlackJackCard.prototype._drawInsurance = function (a, b, c, d, e, f) {
  this._drawCard(this.context, this._solveDrawInsuranceParams(a, b, c, d, e, f))
};
_Tf._Ek._2s._o4.BlackJackCard.prototype._Kg = function (a) {
  if (!this.insurance.isInsurance) this.positionCurrent = a.clone(), this.positionTarget = a.clone()
};
_Tf._Ek._2s._o4.BlackJackWinTable = function (a, b, c, d) {
  _Tf._Ek._2s._o4.BlackJackWinTable.superclass.apply(this, arguments)
  // console.log("testing one  "+JSON.stringify(this) + JSON.stringify(arguments));
};
extend(_Tf._Ek._2s._o4.BlackJackWinTable, _Tf._Ek._2s._o4._kr);
_Tf._Ek._2s._o4.BlackJackTimer = function () {
  _Tf._Ek._2s._o4.BlackJackTimer.superclass.apply(this, arguments)
  // console.log("testing two  "+JSON.stringify(this) + JSON.stringify(arguments));
};
extend(_Tf._Ek._2s._o4.BlackJackTimer, _Tf._Ek._2s._o4._D);
_Tf._Ek._2s._o4.BlackJackTimer.prototype.appendResources = function () {
  _Tf._Ek._2s._o4.BlackJackTimer.superclass.prototype.appendResources.apply(this, arguments);
  this.globalTimer = _Tf._M4._np.table.getElement("globalTimer")
};
_Tf._Ek._2s._o4.BlackJackTimer.prototype._Kg = function (a, b) {
  this.isClient = b || !1;
  (this.isGlobal = 255 == a) || this.locate(this.designPosition.tableSeats[this.countChairs][_Tf._Ek._29.getIndexAfterRotation(a, this.numberStep, this.countChairs)], b)
};
_Tf._Ek._2s._o4.BlackJackTimer.prototype.draw = function () {
  this.isGlobal ? this.drawGlobalTimer() : this.drawChairTimer()
};
_Tf._Ek._2s._o4.BlackJackTimer.prototype.drawChairTimer = function () {
  _Tf._Ek._2s._o4.BlackJackTimer.superclass.prototype.draw.apply(this, arguments)
};
_Tf._Ek._2s._o4.BlackJackTimer.prototype.drawGlobalTimer = function () {
  var a = this.designPosition.globalTimer,
    b = parseInt(a.width * (1 - this.moving.angleCurrent / 360));
  this.clearGlobalTimer();
  this.isShow && !(0 > this.moving.steps) && _Tf._Ek._29.drawPartImage(this.context, this.globalTimer, 0, 0, b, a.height, a.posCenter.x - a.width / 2, a.posCenter.y - a.height / 2, b, a.height)
};
_Tf._Ek._2s._o4.BlackJackTimer.prototype.clearGlobalTimer = function () {
  var a = this.designPosition.globalTimer;
  a && _Tf._Ek._29.fillRectToClear(this.context, a.pos.x, a.pos.y, a.width, a.height)
};
_Tf._Ek._2s._o4.BlackJackTable = function () {
  _Tf._Ek._2s._o4.BlackJackTable.superclass.apply(this, arguments)
};
extend(_Tf._Ek._2s._o4.BlackJackTable, _Tf._Ek._2s._o4._l7);
_Tf._Ek._2s._o4.BlackJackTable.prototype.getPositionCardInCenterByIndex = function (a, b) {
  return this.designPosition.tableCardHolder ? _Tf._Ek._29._T9(b, this.designPosition.cardUpOnTable.width, 0, -Math.round(0.6 * this.designPosition.cardUpOnTable.width), new _8n(this.designPosition.tableCardHolder.pos.x + this.designPosition.tableCardHolder.width / 2, this.designPosition.tableCardHolder.pos.y), this.designPosition.tableCardHolder.spaceY, this.designPosition.tableCardHolder.cardsAlign)[a] : this.positionCardsInCenter[a]
};
_Tf._Ek._2s._o4.PaigowCard = function (a, b, c, d, e) {
  _Tf._Ek._2s._o4.PaigowCard.superclass.apply(this, arguments);
  this.insurance = {
    posY: 0,
    isInsurance: !1,
    steps: -1,
    maxStepsCount: 11
  }
};
extend(_Tf._Ek._2s._o4.PaigowCard, _Tf._Ek._2s._o4._W2);
_Tf._Ek._2s._o4.PaigowCard.prototype.getCardBack = function () {
  return _Tf._dc._W2._c7
};
_Tf._Ek._2s._o4.PaigowCard.prototype.afterInsurance = function () {
  this.insurance.steps = this.insurance.maxStepsCount;
  this.insurance.isInsurance = !0;
  this.insurance.posY = this.positionCurrent.y
};
_Tf._Ek._2s._o4.PaigowCard.prototype.update = function () {
  if (this.insurance.isInsurance && !this.turning.isTurning) {
    var a = this.designPosition.insuranceAnimation.offsetY / this.insurance.maxStepsCount;
    this.insurance.posY = this.insurance.steps >= this.insurance.maxStepsCount / 2 ? this.insurance.posY - a : this.insurance.posY + a;
    this.positionCurrent.y = this.insurance.posY;
    this.insurance.steps--
  }
  if (this.turning.isTurning || 0 > this.insurance.steps) this.insurance.isInsurance = !1, this.insurance.steps = -1, _Tf._Ek._2s._o4.PaigowCard.superclass.prototype.update.apply(this,
    arguments)
};
_Tf._Ek._2s._o4.PaigowCard.prototype.draw = function (a, b, c, d, e, f) {
  var g = this.context.globalAlpha;
  if (d) this.context.globalAlpha = this.isTableCard ? this.designPosition.cardUpOnTable.transparent : f ? this.designPosition.cardUpActive.transparent : this.designPosition.cardUp.transparent;
  try {
    if (this.insurance.isInsurance) this._drawInsurance(a, b, c, d, f);
    else {
      if (d) this.context.globalAlpha = g;
      _Tf._Ek._2s._o4.PaigowCard.superclass.prototype.draw.apply(this, arguments);
      return
    }
  } catch (h) { }
  if (d) this.context.globalAlpha = g
};
_Tf._Ek._2s._o4.PaigowCard.prototype._solveDrawInsuranceParams = function (a, b, c) {
  var a = this.designPosition.cardUpOnTable.width,
    b = this.designPosition.cardUpOnTable.height,
    d = this.designPosition.insuranceAnimation.sizeY,
    e = 0,
    c = this.getCardBack(),
    f = this.insurance.steps + 1;
  f <= this.insurance.maxStepsCount && (e = f >= this.insurance.maxStepsCount / 2 ? 2 * b * (1 - d) * (this.insurance.maxStepsCount - f) / this.insurance.maxStepsCount : 2 * b * (1 - d) * f / this.insurance.maxStepsCount);
  return {
    card: c,
    width: a,
    height: b - e,
    isSelected: !1,
    isActive: !1
  }
};
_Tf._Ek._2s._o4.PaigowCard.prototype._drawInsurance = function (a, b, c, d, e, f) {
  this._drawCard(this.context, this._solveDrawInsuranceParams(a, b, c, d, e, f))
};
_Tf._Ek._2s._o4.PaigowCard.prototype._Kg = function (a) {
  if (!this.insurance.isInsurance) this.positionCurrent = a.clone(), this.positionTarget = a.clone()
};
_Tf._Ek._2s._o4.PaigowChair = function (a, b, c, d, e, f) {
  _Tf._Ek._2s._o4.PaigowChair.superclass.apply(this, arguments)
};
extend(_Tf._Ek._2s._o4.PaigowChair, _Tf._Ek._2s._o4._Na);
_Tf._Ek._2s._o4.PaigowDealerCard = function (a, b, c, d, e) {
  this.appendResources();
  this.factory = e;
  this.isTableCard = d || !1;
  this.angle = 0;
  this.isVisible = !0;
  this.designPosition = c;
  this.isSmallSize = !0;
  this.isTableCard = d || !1;
  this.positionCurrent = b.clone();
  this.positionTarget = b.clone();
  this.moving = {
    isMoving: !1,
    isMovingOpened: !1,
    speed: 30 * this.designPosition.cardDown.speed,
    dx: 0,
    dy: 0,
    steps: -1
  };
  this.turning = {
    isTurning: !1,
    steps: -1,
    maxStepsCount: 3
  };
  this.rotating = {
    isRotating: !1,
    angleDelta: this.designPosition.cardDown.angleDelta,
    currentAngle: 0
  };
  this.pushup = {
    isPushUp: !1,
    stepDelta: this.isTableCard ? this.designPosition.cardUpOnTable.stepUp : this.designPosition.cardUp.stepUp
  };
  this.context = a;
  this.middleContext = null;
  this.isNeedClear = this.isClientCard = !1
};
_Tf._Ek._2s._o4.PaigowDealerCard.prototype = {
  appendResources: function () { },
  setIsClientCard: function (a) {
    this.isClientCard = a || !1
  },
  update: function () {
    if (this.moving.isMoving) if (0 != this.moving.steps) {
      if (-1 === this.moving.steps) {
        var a = this.positionTarget.x - this.positionCurrent.x,
          b = this.positionTarget.y - this.positionCurrent.y,
          c = Math.sqrt(a * a + b * b),
          c = Math.floor(c / this.moving.speed * _Tf._0l.FRAME_RATE);
        this.moving.steps = c;
        this.moving.dx = 0 < c ? Math.floor(a / c) : 0;
        this.moving.dy = 0 < c ? Math.floor(b / c) : 0;
        if (this.rotating.isRotating) this.rotating.currentAngle = this.angle
      }
      this.moving.steps = 0 < this.moving.steps ? this.moving.steps - 1 : 0;
      this.rotating.isRotating && (this.rotating.currentAngle += this.rotating.angleDelta);
      this.positionCurrent.x += this.moving.dx;
      this.positionCurrent.y += this.moving.dy
    } else {
      if (this.moving.steps = -1, this.moving.isMoving = !1, this.positionCurrent = this.positionTarget, this.rotating.isRotating) this.currentAngle = 0, this.rotating.isRotating = !1
    } else if (this.turning.isTurning) - 1 != this.turning.steps ? 0 != this.turning.steps ? this.turning.steps -= 1 : (this.turning.steps = -1, this.turning.isTurning = !1) : this.turning.steps = this.turning.maxStepsCount;
    else if (this.pushup.isPushUp) this.positionCurrent.y -= this.pushup.stepDelta, this.pushup.isPushUp = !1
  },
  draw: function (a, b, c, d, e, f) {
    var g = this.context.globalAlpha;
    if (d) this.context.globalAlpha = this.isTableCard ? this.designPosition.cardUpOnTable.transparent : f ? this.designPosition.cardUpActive.transparent : this.designPosition.cardUp.transparent;
    try {
      this.moving.isMoving ? this._drawMoving(a, b, c, d, f) : this.turning.isTurning ? this._drawTurning(a,
        b, c, d, f) : this.isVisible && this._drawVisible(a, b, c, d, e, f)
    } catch (h) { }
    if (d) this.context.globalAlpha = g
  },
  _solveDrawMovingParams: function (a, b, c, d, e) {
    e ? (a = this.designPosition.dealerCardDownActive.width, d = this.designPosition.dealerCardDownActive.height) : (a = this.designPosition.dealerCardDown.width, d = this.designPosition.dealerCardDown.height);
    if (!this.isClientCard && (c == _Tf._dc._W2._G7 || c == _Tf._dc._W2._Al)) a = this.designPosition.dealerBackCard.width, d = this.designPosition.dealerBackCard.height;
    if (!this.moving.isMovingOpened || !b) this.isSmallSize ? c = _Tf._dc._W2._G7 : (c = this.getCardBack(), this.isTableCard ? (a = this.designPosition.dealerCardUpOnTable.width, d = this.designPosition.dealerCardUpOnTable.height) : e ? (a = this.designPosition.dealerCardUpActive.width, d = this.designPosition.dealerCardUpActive.height) : (a = this.designPosition.dealerCardUp.width, d = this.designPosition.dealerCardUp.height));
    this.isClientCard || (c = this.resolveCard(c));
    if (this.isTableCard) a = this.designPosition.dealerCardUpOnTable.width, d = this.designPosition.dealerCardUpOnTable.height;
    return {
      card: c,
      width: a,
      height: d,
      isActive: e
    }
  },
  _drawMoving: function (a, b, c, d, e) {
    a = this._solveDrawMovingParams(a, b, c, d, e);
    c = this.context.globalAlpha;
    if (!this.moving.isMovingOpened || !b) this.context.globalAlpha = this.designPosition.cardDown.transparent;
    this._drawCard(this.context, a, this.positionCurrent.x, this.positionCurrent.y, this.rotating.isRotating ? this.rotating.currentAngle : 0);
    if (!this.moving.isMovingOpened || !b) this.context.globalAlpha = c
  },
  _solveDrawTurningParams: function (a, b, c, d, e) {
    this.isTableCard ? (a = this.designPosition.dealerCardUpOnTable.width, b = this.designPosition.dealerCardUpOnTable.height) : this.isClientCard ? (c == _Tf._dc._W2._G7 || c == _Tf._dc._W2._Al ? (a = this.designPosition.dealerBackCard.width, b = this.designPosition.dealerBackCard.height) : e ? (a = this.designPosition.dealerCardUpClientActive.width, b = this.designPosition.dealerCardUpClientActive.height) : (a = this.designPosition.dealerCardUpClient.width, b = this.designPosition.dealerCardUpClient.height), c = this.resolveCard(c)) : e ? (a = this.designPosition.dealerCardUpActive.width,
      b = this.designPosition.dealerCardUpActive.height) : (a = this.designPosition.dealerCardUp.width, b = this.designPosition.dealerCardUp.height);
    return {
      card: 2 > this.turning.steps ? c : _Tf._dc._W2._Al,
      width: a,
      height: b
    }
  },
  _drawTurning: function (a, b, c, d, e) {
    a = this._solveDrawTurningParams(a, b, c, d, e);
    b = this.positionCurrent.x;
    c = this.positionCurrent.y;
    if (1 === this.turning.steps || 2 === this.turning.steps) a.width /= 2, b += a.width / 2;
    this._drawCard(this.context, a, b, c)
  },
  _solveDrawVisibleParams: function (a, b, c, d, e, f) {
    if (this.isTableCard) a = this.designPosition.dealerCardUpOnTable.width, d = this.designPosition.dealerCardUpOnTable.height;
    else if (this.isClientCard) f ? (a = this.designPosition.dealerCardUpClientActive.width, d = this.designPosition.dealerCardUpClientActive.height) : (a = this.designPosition.dealerCardUpClient.width, d = this.designPosition.dealerCardUpClient.height);
    else if (f ? (a = this.designPosition.dealerCardUpActive.width, d = this.designPosition.dealerCardUpActive.height) : (a = this.designPosition.dealerCardUp.width, d = this.designPosition.dealerCardUp.height),
      c == _Tf._dc._W2._G7 || c == _Tf._dc._W2._Al) a = this.designPosition.dealerBackCard.width, d = this.designPosition.dealerBackCard.height;
    if (b) c == _Tf._dc._W2._G7 && !this.isSmallSize && (c = this.getCardBack());
    else if (this.isSmallSize) c = _Tf._dc._W2._G7, f ? (a = this.designPosition.dealerCardDownActive.width, d = this.designPosition.dealerCardDownActive.height) : (a = this.designPosition.dealerCardDown.width, d = this.designPosition.dealerCardDown.height);
    else if (!this.isClientCard) c = _Tf._dc._W2._Al;
    this.isClientCard || (c = this.resolveCard(c));
    if (this.isTableCard) a = this.designPosition.dealerCardUpOnTable.width, d = this.designPosition.dealerCardUpOnTable.height;
    return {
      card: c,
      width: a,
      height: d,
      isSelected: e,
      isActive: f
    }
  },
  _drawVisible: function (a, b, c, d, e, f) {
    b = this._solveDrawVisibleParams(a, b, c, d, e, f);
    c = null;
    a === _Tf._dc.CardState._4g && !this.isNeedClear ? (c = this.middleContext, this.isNeedClear = !0) : c = this.context;
    this._drawCard(c, b)
  },
  _drawCard: function (a, b, c, d, e) {
    var e = e || this.angle,
      f = this._getCachedCard(b);
    try {
      0 === e ? (b.isSelected && a && _Tf._Ek._29.drawRoundRect(a,
        c || this.positionCurrent.x, d || this.positionCurrent.y, b.width, b.height, _h8._0l._vn.CARD_SELECTED, Math.round(0.1 * b.width), Math.round(0.1 * b.width)), a && a.drawImage(f, c || this.positionCurrent.x, d || this.positionCurrent.y, b.width, b.height)) : a && _Tf._Ek._29.drawImage(a, f, c || this.positionCurrent.x, d || this.positionCurrent.y, e, b.width, b.height)
    } catch (g) { }
  },
  _cachedCards: {
    items: {},
    length: 0
  },
  _getCachedCard: function (a) {
    if (this._cachedCards.items[a.card]) {
      var b = this._cachedCards.items[a.card][a.width + " " + a.height];
      if (b) return b
    } else {
      if (this._cachedCards.length === _h8._0l.MAX_CACHED_CARDS) this._cachedCards.items = {}, this._cachedCards.length = 0;
      this._cachedCards.items[a.card] = {};
      this._cachedCards.length++
    }
    b = document.createElement("canvas");
    b.width = a.width;
    b.height = a.height;
    b.getContext("2d").drawImage(_Tf._M4._np.deckManager.getElement()._46(a.card), 0, 0, a.width, a.height);
    return this._cachedCards.items[a.card][a.width + " " + a.height] = b
  },
  clear: function (a) {
    var b;
    if (this.middleContext) this.isNeedClear = !1, this.isTableCard ? (a = this.designPosition.dealerCardUpOnTable.width, b = this.designPosition.dealerCardUpOnTable.height) : a ? (a = this.designPosition.dealerCardUpActive.width, b = this.designPosition.dealerCardUpActive.height) : (a = this.designPosition.dealerCardUp.width, b = this.designPosition.dealerCardUp.height), _Tf._Ek._29.fillRectToClear(this.middleContext, this.positionCurrent.x - 3, this.positionCurrent.y - 3, a + 6, b + 6)
  },
  _Bo: function (a) {
    this.isSmallSize = a
  },
  setAngle: function (a) {
    this.angle = a
  },
  setMiddleContext: function (a) {
    this.middleContext = a
  },
  _Oq: function (a) {
    this.positionTarget = a.clone();
    this.rotating.isRotating = !0;
    this.moving.isMoving = !0;
    this.moving.steps = -1;
    this.isVisible = this.isSmallSize = !0
  },
  __n: function (a, b) {
    this.turning.isTurning = b || !1;
    this.positionTarget = a.clone();
    this.rotating.isRotating = !1;
    this.isVisible = this.isSmallSize = this.moving.isMoving = !0
  },
  _Zf: function (a) {
    this.positionTarget = a.clone();
    this.positionCurrent = a.clone();
    this.rotating.isRotating = !1;
    this.moving.isMoving = !1;
    this.moving.isMovingOpened = !1;
    this.turning.isTurning = !0;
    this.isSmallSize = !1;
    this.isVisible = !0
  },
  _05: function (a) {
    this._o6(a);
    this.isSmallSize = this.moving.isMovingOpened = !1;
    this.isVisible = !0
  },
  _o6: function (a) {
    this.positionTarget = a.clone();
    this.rotating.isRotating = !1;
    this.moving.isMoving = !0;
    this.moving.isMovingOpened = !0;
    this.isSmallSize = this.turning.isTurning = !1;
    this.isVisible = !0
  },
  open: function () {
    if (!this.turning.isTurning) this.turning.isTurning = !0, this.isSmallSize = !1, this.isVisible = !0
  },
  _s1: function () {
    this.isVisible = this.pushup.isPushUp = !0
  },
  _Yq: function (a) {
    this.isVisible = a
  },
  _Kg: function (a) {
    this.positionCurrent = a.clone();
    this.positionTarget = a.clone()
  },
  correctClientCardPosition: function (a) {
    this.isClientCard && (a = (a = a ? this.designPosition.cardUpClientLast : this.designPosition.cardUpClientFirst) || {
      dx: 0,
      dy: 0,
      angle: 0
    }, this.positionTarget.x += a.dx + this.designPosition.cardUpClient.dx || 0, this.positionTarget.y += a.dy + this.designPosition.cardUpClient.dy || 0, this.setAngle(a.angle || 0))
  },
  correctBackCardPosition: function () {
    var a = this.designPosition.backCard,
      a = a || {
        dx: 0,
        dy: 0,
        angle: 0
      };
    this.positionTarget.x += a.dx || 0;
    this.positionTarget.y += a.dy || 0
  },
  isAnimating: function () {
    return this.moving.isMoving || this.rotating.isRotating || this.turning.isTurning || this.pushup.isPushUp
  },
  fixPosition: function () {
    this.moving.isMoving = !1;
    this.moving.isMovingOpened = !1;
    this.moving.steps = 0;
    this.turning.isTurning = !1;
    this.turning.steps = 0
  },
  resolveCard: function (a) {
    return (a == _Tf._dc._W2._G7 || a == _Tf._dc._W2._Al) && _Tf._dc.GameType._98(this.factory.gameType) ? _Tf._dc._W2._rj : (a == _Tf._dc._W2._G7 || a == _Tf._dc._W2._Al) && _Tf._dc.GameType.isBlackJack(this.factory.gameType) ? _Tf._dc._W2._c7 : a
  },
  getCardBack: function () {
    return _Tf._dc._W2._Al
  }
};
_Tf._Ek._2s._o4.PaigowDealerCardHolder = function (a, b, c) {
  this.appendResources();
  this.designPosition = b;
  this.position = c;
  this.currentCount = 0;
  this.context = a;
  this.isSelected = this.isShadow = !1
};
_Tf._Ek._2s._o4.PaigowDealerCardHolder.prototype = {
  appendResources: function () { },
  update: function (a) {
    var b = a.length;
    if (this.currentCount === b || 0 === b) this.currentCount = b;
    else {
      this.currentCount = b;
      for (var c = 0; c < b - 1; c++) a[c]._47(this.position[c]);
      a[b - 1]._24(this.position[b - 1])
    }
  },
  draw: function () { },
  setShadow: function (a) {
    this.isShadow = a
  },
  decCurrentCount: function () {
    this.currentCount--
  },
  clearCurrentCount: function () {
    this.currentCount = 0
  },
  hasShadow: function () {
    return this.isShadow
  },
  getPosition: function () {
    return this.position
  },
  getContext: function () {
    return this.context
  }
};
_Tf._Ek._2s._o4.PaigowPlayer = function (a, b, c, d, e) {
  _Tf._Ek._2s._o4.PaigowPlayer.superclass.apply(this, arguments)
};
extend(_Tf._Ek._2s._o4.PaigowPlayer, _Tf._Ek._2s._o4._0q);
_Tf._Ek._2s._o4.PaigowTable = function (a, b, c, d, e) {
  this.appendResources();
  this.designPosition = d;
  this.factory = e;
  this.locate();
  this.context = a;
  this.middleContext = b;
  this.staticContext = c
};
_Tf._Ek._2s._o4.PaigowTable.prototype = {
  appendResources: function () { },
  locate: function () {
    var a = this.designPosition.table;
    this.position = a.posCenter.clone();
    this.position.sub(new _8n(a.width / 2, a.height / 2));
    this.positionCardsInCenter = this.designPosition.tableCards
  },
  _I9: function () { },
  getTmpChip: function (a, b, c) {
    return this.factory.createChipController(this.factory, this.context, a, b, c, this.moneyType, _Tf._dc.ChipState._D9, this.designPosition)
  },
  getContext: function () {
    return this.context
  },
  getMiddleContext: function () {
    return this.middleContext
  }
};
_Tf._Ek._2s._o4.PaigowTimer = function () {
  _Tf._Ek._2s._o4.PaigowTimer.superclass.apply(this, arguments)
};
extend(_Tf._Ek._2s._o4.PaigowTimer, _Tf._Ek._2s._o4._D);
_Tf._Ek._2s._o4.PaigowTimer.prototype.appendResources = function () {
  _Tf._Ek._2s._o4.PaigowTimer.superclass.prototype.appendResources.apply(this, arguments);
  this.globalTimer = _Tf._M4._np.table.getElement("globalTimer")
};
_Tf._Ek._2s._o4.PaigowTimer.prototype._Kg = function (a, b) {
  this.isClient = b || !1;
  (this.isGlobal = 255 == a) || this.locate(this.designPosition.tableSeats[this.countChairs][_Tf._Ek._29.getIndexAfterRotation(a, this.numberStep, this.countChairs)], b)
};
_Tf._Ek._2s._o4.PaigowTimer.prototype.draw = function () {
  this.isGlobal ? this.drawGlobalTimer() : this.drawChairTimer()
};
_Tf._Ek._2s._o4.PaigowTimer.prototype.drawChairTimer = function () {
  _Tf._Ek._2s._o4.PaigowTimer.superclass.prototype.draw.apply(this, arguments)
};
_Tf._Ek._2s._o4.PaigowTimer.prototype.drawGlobalTimer = function () {
  var a = this.designPosition.globalTimer,
    b = parseInt(a.width * (1 - this.moving.angleCurrent / 360));
  this.clearGlobalTimer();
  this.isShow && !(0 > this.moving.steps) && _Tf._Ek._29.drawPartImage(this.context, this.globalTimer, 0, 0, b, a.height, a.posCenter.x - a.width / 2, a.posCenter.y - a.height / 2, b, a.height)
};
_Tf._Ek._2s._o4.PaigowTimer.prototype.clearGlobalTimer = function () {
  var a = this.designPosition.globalTimer;
  a && _Tf._Ek._29.fillRectToClear(this.context, a.posCenter.x, a.posCenter.y, a.width, a.height)
};
_Tf._Ek._2s._o4.PaigowWinTable = function (a, b, c, d, e) {
  _Tf._Ek._2s._o4.PaigowWinTable.superclass.apply(this, arguments)
};
extend(_Tf._Ek._2s._o4.PaigowWinTable, _Tf._Ek._2s._o4._kr);
_Tf._Ek._2s._o4.CrapsCommand = function (a, b, c) {
  _Tf._Ek._2s._o4.CrapsCommand.superclass.apply(this, arguments)
};
extend(_Tf._Ek._2s._o4.CrapsCommand, _Tf._Ek._2s._o4.Command);
_Tf._Ek._2s._o4.CrapsCommand.prototype.tableIdValue = 0;
_Tf._Ek._2s._o4.CrapsCommand.prototype.draw = function (a) {
  this.button && this.parent != a && this.clear();
  this.parent = a;
  a = /#table-(\d+)/.exec(a);
  this.tableIdValue = a[1];
  if ((!this.parentId || 0 === this.parentId.length) && a) this.parentId = _Tf._0l._N1._6i.format(a[1]);
  this.code != _Tf._dc.PlayerAction._51 && this.remove();
  this.id = "{0}-{1}-{2}".format(a ? a[1] : "", this.type, this.code);
  if (this.code != _Tf._dc.PlayerAction._51) if (this.type === _Tf._dc.CommandType._jf) {
    this.buildButtonTemplate();
    this.isButtonClicked = !1;
    var b = _Tf._dc.PlayerAction.toString(this.code) +
      "-button";
    $(this.parent).addClass(b);
    this.code === _Tf._dc.PlayerAction._Bk && (this.drawStakes(), this.drawChips(), this.isCrapsClearButtonAvailable() && this.drawCrapsClearButton(this.tableIdValue), this.isCrapsRepeatButtonAvailable() && this.drawCrapsRepeatButton(a[1]), $(this.button).bind(EventType._qc, this._g7).appendTo(this.parent))
  } else if (this.type === _Tf._dc.CommandType._Xg) this.value = this.autoActionManager.isAutoActionSet(this.code), this.buildCheckboxTemplate(), $(this.button).change(this._g7).appendTo(this.parent)
};
_Tf._Ek._2s._o4.CrapsCommand.prototype._g7 = function (a) {
  var b = _Tf._N1,
    c = _Mf._q1.getFromMapGameTableAction();
  b.eventCorrection(a, !0);
  if (!this.isButtonClicked && this.type === _Tf._dc.CommandType._jf) {
    if (this.callback.code === _Tf._dc.PlayerAction._Bk) {
      a = c.getNewStakes();
      b = c.getStakes();
      if (0 == a.length && 0 == b.length) return;
      this.callback.fn(this.callback.code, a);
      this.isButtonClicked = !0;
      this.clearChips();
      this.clearStakes();
      this.removeCrapsClearButton();
      this.removeCrapsRepeatButton();
      c.setLastStakes();
      c.unsetClearSecondaryStakes();
      return
    }
    this.callback.fn(this.callback.code, "");
    this.isButtonClicked = !0
  }
  this.value = !this.value;
  this.type === _Tf._dc.CommandType._Xg && this.autoActionManager._p3(this.callback.code, this.value)
};
_Tf._Ek._2s._o4.CrapsCommand.prototype.drawStakes = function () {
  var a = _Tf._N1,
    b = _Tf._0l._N1,
    c = _Mf._q1._5p(_Mf._q1.activeTableId),
    d = c.getAllowedStakes(),
    c = c.getStakes(),
    e, f, g, h, j, k = this;
  for (e in d) {
    g = d[e];
    for (f in c[g.type]) h = c[g.type][f], j = b._R8.fill({
      type: h.type,
      point: h.point
    }), a.$(j).on(EventType._qc, function () {
      var b = a.$(this).data("stake"),
        c = _Mf._q1.getFromMapGameTableAction();
      c.addStake(b);
      c.redrawStakes();
      k.isCrapsClearButtonAvailable() && k.drawCrapsClearButton(k.tableIdValue);
      k.drawChips()
    }), a.$(j).data("stake", {
      type: h.type,
      point: h.point
    }), a.$(j).show();
    a.$(b._ui).show()
  }
};
_Tf._Ek._2s._o4.CrapsCommand.prototype.drawChips = function () {
  var a = _Tf._N1,
    b = _Tf._0l._N1,
    c = [500, 100, 50, 25, 10, 5, 1],
    d, e, f = _Mf._q1._5p(_Mf._q1.activeTableId),
    g = _Mf._q1.getFromMapGameTableAction().getSumStakes(),
    h = this.callback.funds.clientCash,
    j = !1;
  for (d in c) e = b._wi.fill({
    amount: c[d]
  }), f.model.info.minBet <= c[d] && h >= c[d] && h - g >= c[d] ? (a.$(e).show(), j = !0) : a.$(e).hide();
  if (!j || f.model.info.maxBet <= g) this.clearChips(), this.clearStakes();
  a.$(b._nl).show();
  a.$(b._wm).on(EventType._qc, function () {
    a.$(b._wm).removeClass("active");
    a.$(this).addClass("active");
    var c = _Mf._q1.getFromMapGameTableAction(),
      d = a.$(this).data("amount");
    c.setActiveChipsAmount(d)
  })
};
_Tf._Ek._2s._o4.CrapsCommand.prototype.clearChips = function () {
  var a = _Tf._N1,
    b = _Tf._0l._N1;
  a.$(b._nl).hide();
  _Mf._q1.getFromMapGameTableAction().setActiveChipsAmount();
  a.$(b._wm).removeClass("active")
};
_Tf._Ek._2s._o4.CrapsCommand.prototype.clearStakes = function () {
  var a = _Tf._N1,
    b = _Tf._0l._N1;
  a.$(b._73).hide();
  a.$(b._ui).hide();
  a.$(b._73).off()
};
_Tf._Ek._2s._o4.CrapsCommand.prototype.remove = function () {
  $(this.parent).empty();
  this.type === _Tf._dc.CommandType._jf && this.button && $(this.parent).removeClass(_Tf._dc.PlayerAction.toString(this.code) + "-button")
};
_Tf._Ek._2s._o4.CrapsCommand.prototype.clear = function () {
  this.clearBetsButtons();
  $("#" + this.id).remove();
  this.type === _Tf._dc.CommandType._jf && this.button && $(this.parent).removeClass(_Tf._dc.PlayerAction.toString(this.code) + "-button");
  this.clearBetsButtons();
  this.button = null;
  this.clearChips();
  this.clearStakes();
  this.removeCrapsClearButton();
  this.removeCrapsRepeatButton()
};
_Tf._Ek._2s._o4.CrapsCommand.prototype.clearNewStakes = function () {
  var a = _Mf._q1.getFromMapGameTableAction(),
    b = a.getStakes(),
    c = _Tf._N1,
    d = _Tf._0l._N1;
  0 < b.length && (a.setActiveChipsAmount(), c.$(d._wm).removeClass("active"), a.clearNewStakes(), a.clearSecondaryStakes(), a.redrawStakes(), this.isCrapsClearButtonAvailable() || this.removeCrapsClearButton(this.tableIdValue));
  b = a.getStakes();
  c = a.getNewStakes();
  0 == b.length && 0 < c.length && a.unsetClearSecondaryStakes()
};
_Tf._Ek._2s._o4.CrapsCommand.prototype.repeatLastStakes = function () {
  _Mf._q1.getFromMapGameTableAction().setStakesFromRepeat();
  this.isCrapsClearButtonAvailable() && this.drawCrapsClearButton(this.tableIdValue)
};
_Tf._Ek._2s._o4.CrapsCommand.prototype.isCrapsClearButtonAvailable = function () {
  return _Mf._q1.getFromMapGameTableAction().model.hasClearStakesAvailable()
};
_Tf._Ek._2s._o4.CrapsCommand.prototype.isCrapsRepeatButtonAvailable = function () {
  return _Mf._q1.getFromMapGameTableAction().model.isStakesFromRepeat()
};
_Tf._Ek._2s._o4.CrapsCommand.prototype.drawCrapsClearButton = function (a) {
  var a = a + "-0-53",
    b = _Tf._dc.PlayerAction.toString(_Tf._dc.PlayerAction._51) + "-button";
  if (!(0 < $("#" + a).length)) {
    var c = _h8._wc._an.GAME_BUTTON.fill({
      id: a,
      cssclass: "game-button",
      label: _Tf._41.$("_6.53")
    });
    $(c).bind(EventType._qc, this.clearNewStakes.bind(this)).appendTo("." + b);
    var d = this;
    $("#" + a).live(EventType._qc, function () {
      d.drawChips()
    })
  }
};
_Tf._Ek._2s._o4.CrapsCommand.prototype.removeCrapsClearButton = function () {
  var a = _Tf._dc.PlayerAction.toString(_Tf._dc.PlayerAction._51) + "-button";
  $("." + a + " button").remove()
};
_Tf._Ek._2s._o4.CrapsCommand.prototype.drawCrapsRepeatButton = function () {
  var a = $(_Tf._0l._N1._cb),
    b = _h8._wc._an.GAME_BUTTON.fill({
      id: "rebet",
      cssclass: "game-button",
      label: _Tf._41.$("_F2._i8")
    });
  $(b).bind(EventType._qc, this.repeatLastStakes.bind(this)).appendTo(a);
  var c = this;
  $("#rebet").live(EventType._qc, function () {
    c.drawChips()
  })
};
_Tf._Ek._2s._o4.CrapsCommand.prototype.removeCrapsRepeatButton = function () {
  var a = $(_Tf._0l._N1._cb);
  $(a).children().remove()
};
_Tf._Ek._2s._o4.CrapsDice = function (a, b, c) {
  this.factory = a;
  this.dicesImage = [];
  this.position = this.diceShadow = null;
  this.lastPosition = {};
  this.diceValue = 0;
  this.context = c;
  this.startAnimation = !1;
  this.designPosition = b;
  this.isNeedClear = !1;
  this.appendResources()
};
_Tf._Ek._2s._o4.CrapsDice.prototype = {
  appendResources: function () {
    this.dicesImage = [];
    this.diceShadow = _Tf._M4._np.table.getElement("diceShadow");
    this.dicesImage[0] = _Tf._M4._np.table.getElement("dice1");
    this.dicesImage[1] = _Tf._M4._np.table.getElement("dice2");
    this.dicesImage[2] = _Tf._M4._np.table.getElement("dice3");
    this.dicesImage[3] = _Tf._M4._np.table.getElement("dice4");
    this.dicesImage[4] = _Tf._M4._np.table.getElement("dice5");
    this.dicesImage[5] = _Tf._M4._np.table.getElement("dice6")
  },
  getPosition: function () {
    return this.position
  },
  initAnimatePositions: function () {
    this.animateSteps = jQuery.extend(!0, {}, this.designPosition.steps);
    this.animateSteps.endStep3.y = getRandomArbitary(this.designPosition.randomY[0], this.designPosition.randomY[1])
  },
  drawRollAnimation: function (a) {
    this.startAnimation = !0;
    this.diceValue = a.value;
    var b = _Mf._q1._y9(),
      b = _Tf._0l._N1._6i.format(b);
    this.parentContext = b = document.querySelector(b);
    this.context = document.createElement("div");
    this.context.className = "dice dice-name-" + this.designPosition.name + " dice-" + a.value;
    b.appendChild(this.context);
    this.initAnimatePositions();
    this.animationStep1()
  },
  updateAnimation: function () {
    var a = this.parentContext.clientWidth / 100 * this.position.x,
      b = this.parentContext.clientHeight / 100 * this.position.y;
    this.context.style[Modernizr.prefixed("transform")] = "translateX(" + a + "px) translateY(" + b + "px) rotate(" + Math.round(this.position.rotation) + "deg)";
    this.lastPosition = this.position
  },
  clear: function () {
    $(".dice").remove()
  },
  draw: function (a) {
    this.startAnimation && TWEEN.update(a)
  },
  onComplit: function () {
    this.startAnimation = !1
  },
  animationStep1: function () {
    this.lastPosition = this.animateSteps.startStep1;
    this.position = jQuery.extend(!0, {}, this.animateSteps.startStep1);
    (new TWEEN.Tween(this.position)).to(jQuery.extend(!0, {}, this.animateSteps.endStep1), 400).easing(TWEEN.Easing.Linear.None).onUpdate(this.updateAnimation.bind(this)).start().interpolation(TWEEN.Interpolation.Bezier).onComplete(this.animationStep2.bind(this))
  },
  animationStep2: function () {
    this.position = jQuery.extend(!0, {}, this.animateSteps.startStep2);
    (new TWEEN.Tween(this.position)).to(jQuery.extend(!0, {}, this.animateSteps.endStep2), 300).easing(TWEEN.Easing.Linear.None).onUpdate(this.updateAnimation.bind(this)).start().interpolation(TWEEN.Interpolation.Bezier).onComplete(this.animationStep3.bind(this))
  },
  animationStep3: function () {
    this.position = jQuery.extend(!0, {}, this.animateSteps.startStep3);
    (new TWEEN.Tween(this.position)).to(jQuery.extend(!0, {}, this.animateSteps.endStep3), 600).easing(TWEEN.Easing.Quadratic.Out).onUpdate(this.updateAnimation.bind(this)).start().onComplete(this.onComplit.bind(this))
  }
};
_Tf._Ek._2s._o4.CrapsTimer = function (a, b, c, d) {
  _Tf._Ek._2s._o4.CrapsTimer.superclass.apply(this, arguments);
  this.context = $("{0} {1}".format(c, _Tf._0l._N1._Rd)).get(0).getContext("2d");
  this.moving.angleDelta = 1;
  this.moving.angleStart = 0;
  this.moving.angleCurrent = 0;
  this.moving.angleTarget = _h8._0l._Jh._Nc._jn.timer.count - 1
};
extend(_Tf._Ek._2s._o4.CrapsTimer, _Tf._Ek._2s._o4._D);
_Tf._Ek._2s._o4.CrapsTimer.prototype.appendResources = function () {
  this.timer = _Tf._M4._np.table.getElement("timer");
  this.timerTail = _Tf._M4._np.table.getElement("timerTail");
  this.timerBack = _Tf._M4._np.table.getElement("timerBack");
  this.globalTimer = _Tf._M4._np.table.getElement("timer");
  this.globalTimerBg = _Tf._M4._np.table.getElement("globalTimerBgPaigow")
};
_Tf._Ek._2s._o4.CrapsTimer.prototype.hide = function () {
  this.isShow = !1;
  this.clearItself();
  this.clearGlobalTimer();
  this.moving.isMoving = !1;
  this.moving.steps = -1;
  this.moving.angleCurrent = this.moving.angleStart;
  this.isShow = !1
};
_Tf._Ek._2s._o4.CrapsTimer.prototype._Kg = function (a, b) {
  this.isClient = b || !1;
  (this.isGlobal = 255 == a) || this.locate(this.designPosition.tableSeats[this.countChairs][_Tf._Ek._29.getIndexAfterRotation(a, this.numberStep, this.countChairs)], b)
};
_Tf._Ek._2s._o4.CrapsTimer.prototype.show = function (a, b) {
  if (!this.isShow) {
    this.interval && clearInterval(this.interval);
    this.isShow = !0;
    this.moving.isMoving = !0;
    this.moving.steps = b;
    this.moving.stepsAll = a;
    this.moving.angleDelta = (this.moving.angleTarget + 1) / a;
    this.moving.angleCurrent = this.moving.angleStart + this.moving.angleDelta * (a - b);
    var c = this._U3.bind(this);
    this.interval = setInterval(c, 1E3)
  }
};
_Tf._Ek._2s._o4.CrapsTimer.prototype.clearItself = function () {
  var a = this.isClient ? this.designPosition.timerClient : this.designPosition.timer;
  a && this.positionCurrent && _Tf._Ek._29.fillRectToClear(this.context, this.positionCurrent.x - a.width / 2, this.positionCurrent.y - a.height / 2, a.width, a.height)
};
_Tf._Ek._2s._o4.CrapsTimer.prototype.draw = function () {
  this.drawChairTimer()
};
_Tf._Ek._2s._o4.CrapsTimer.prototype.drawChairTimer = function () {
  if (this.positionCurrent && this.isShow && !(0 > this.moving.steps)) {
    var a = this.isClient ? this.designPosition.timerClient : this.designPosition.timer,
      b = _h8._0l._Jh._Nc._jn.timer.count >> 1,
      c = Math.round(this.moving.angleCurrent),
      d = Math.round(this.moving.angleTarget);
    this.clearItself();
    _Tf._Ek._29.drawImage(this.context, this.timerBack, this.positionCurrent.x, this.positionCurrent.y, 0, a.width, a.height, 0, 0, 0, 0, !0);
    b = c >= b ? this.timerTail : this.timer;
    this.context.save();
    this.context.beginPath();
    var e = 2 * Math.PI / 180;
    this.context.arc(this.positionCurrent.x, this.positionCurrent.y, a.width / 2, -Math.PI / 2 + e + 2 * (c / d) * Math.PI, -Math.PI / 2 + e, !0);
    this.context.lineTo(this.positionCurrent.x, this.positionCurrent.y);
    this.context.closePath();
    this.context.clip();
    _Tf._Ek._29.drawImage(this.context, b, this.positionCurrent.x, this.positionCurrent.y, 0, a.width, a.height, 0, 0, a.width, a.height, !0);
    this.context.restore()
  }
};
_Tf._Ek._2s._o4.CrapsTimer.prototype.update = function () {
  if (this.moving.isMoving && this.isShow && 0 >= this.moving.steps) {
    if (this.moving.steps = -1, this.moving.isMoving = !1, this.moving.angleCurrent = this.moving.angleTarget, this.clearItself(), this.interval) clearInterval(this.interval), this.interval = null
  } else if (0 >= this.moving.steps && this.isShow) _Mf._q1.map[_Mf._q1.activeTableId].gameManager.button._Q7(), this.isShow = !1;
  else if (this.moving.maxAngleCurrent = (this.moving.stepsAll - this.moving.steps + 2) * this.moving.angleDelta,
    this.moving.angleCurrent < this.moving.maxAngleCurrent && (this.moving.angleCurrent += (this.moving.maxAngleCurrent - this.moving.angleCurrent) / (_Tf._0l.FRAME_RATE / 1.5)), this.moving.angleCurrent > this.moving.angleTarget) this.moving.angleCurrent = this.moving.angleTarget
};
_Tf._Ek._2s._o4.CrapsTimer.prototype._U3 = function () {
  this.moving.steps--;
  if (0 === this.moving.steps) this.clearItself(), clearInterval(this.interval), this.interval = null
};
_Tf._Ek._2s._o4.CrapsTimer.prototype.drawGlobalTimer = function () { };
_Tf._Ek._2s._o4.CrapsTimer.prototype.clearGlobalTimer = function () {
  var a = this.designPosition.globalTimer.bg;
  a && _Tf._Ek._29.fillRectToClear(this.context, a.posCenter.x - a.width / 2, a.posCenter.y - a.height / 2, a.width, a.height)
};
_Tf._Ek._2s._o4.CrapsWinTable = function (a, b, c, d) {
  _Tf._Ek._2s._o4.CrapsWinTable.superclass.apply(this, arguments)
};
extend(_Tf._Ek._2s._o4.CrapsWinTable, _Tf._Ek._2s._o4.PaigowWinTable);
_Tf._Ek._2s._o4.CrapsWinTable.prototype._drawMessage = function (a, b, c) {
  var d = _Tf._Ek._29,
    e = _h8._0l._vn,
    f = this.position.clone(),
    g = c ? this.designPosition.winTableClient : this.designPosition.winTable;
  c ? f.plus(this.designPosition.winTableClient.pos) : f.plus(this.designPosition.winTable.pos);

  // Nothing update
  // alert("winTable "+JSON.stringify(this.designPosition.winTable.pos));
  // alert("winTableClient "+JSON.stringify(this.designPosition.winTableClient.pos));
  // alert("winTable ccc "+JSON.stringify(c));
  // alert("winTableClient "+JSON.stringify(this.designPosition.winTableClient));

  0 > a ? (b = _Tf._Ek._29._ca(-1 * a, b, !0), a = e.PAIGOW_WIN_TABLE_BG, b = _Tf._41.$("_b8._B7").toUpperCase() + " " + b) : 0 === a ? (a = e.PAIGOW_WIN_TABLE_BG, b = _Tf._41.$("_b8._C7").toUpperCase()) : (b = _Tf._Ek._29._ca(a, b, !0), a = e.PAIGOW_WIN_TABLE_BG,
    b = _Tf._41.$("_b8._q").toUpperCase() + " " + b);

  d.drawBlocks(this.context, f.x, f.y, g.width, g.height, a, e.BJ_WIN_TABLE_BORDER, Math.round(0.05 * g.width), g.borderWidth);
  d.fillText(this.context, this.designPosition, b, f.x + g.width / 2, f.y + g.offsetYtitle, e.PAIGOW_TEXT_WIN_TABLE, g.textTitle, null, null, null, null, null, g.width, g.textFace, g.textStrokeThickness, e.BJ_TEXT_WIN_TABLE_STROKE)
};
_Tf._Ek._2s._o4.CrapsDealer = function (a, b, c) {
  this.dealerChair = null;
  this.designPosition = _Mf._b1.getPositionByGameType(c);
  this.appendResources();
  this.locate();
  this.context = a;
  this.middleContext = b
};
_Tf._Ek._2s._o4.CrapsDealer.prototype = {
  locate: function () {
    this.position = this.designPosition.dealerChair
  },
  getPosition: function () {
    return this.position
  },
  getContext: function () {
    return this.context
  },
  appendResources: function () {
    this.dealerChair = _Tf._M4._np.table.getElement("dealerChair")
  },
  drawMiddle: function () { },
  clearMiddle: function () { }
};
_Tf._Ek._2s._o4.CrapsTable = function (a, b, c, d, e) {
  this.appendResources();
  this.designPosition = d;
  this.factory = e;
  this.locate();
  this.position = {};
  this.animateStep = {};
  this.context = b;
  this.contextShadow = {}
};
_Tf._Ek._2s._o4.CrapsTable.prototype = {
  appendResources: function () { },
  locate: function () {
    var a = this.designPosition.table;
    this.position = a.posCenter.clone();
    this.position.sub(new _8n(a.width / 2, a.height / 2));
    this.positionCardsInCenter = this.designPosition.tableCards
  },
  getPosition: function () {
    return this.position
  },
  redrawStakes: function (a) {
    var b, c, d = [500, 100, 50, 25, 10, 5, 1],
      e = 0,
      f = {};
    for (b in a) {
      c = a[b];
      var g = c.amount;
      f[c.type + "_" + c.point] = {};
      for (var h in d) e = Math.floor(g / d[h]), f[c.type + "_" + c.point][d[h]] = e, g -= e * d[h]
    }
    this.drawStakes(f)
  },
  drawStakes: function (a) {
    var b = _Tf._0l._N1,
      c = [500, 100, 50, 25, 10, 5, 1],
      d, e, f = "",
      g = 1,
      h = 0;
    $(b._J7).remove();
    $(b._k1).remove();
    for (d in a) {
      f = b._Ra.fill({
        name: d
      });
      g = 1;
      h = 0;
      for (e in c) {
        var j = a[d][c[e]],
          h = h + j * c[e];
        if (0 < j) j = _h8._wc._an.STAKES_BLOCK, $(f).append(j.fill({
          1: g,
          2: c[e]
        })), g++
      }
      $(f).append('<div class="stake-amount stake-amount-text stake-amount-text-' + (g - 1) + '">' + _Tf._Ek._29._gm(h, 0) + "</div>")
    }
  },
  drawDiceHistory: function (a) {
    var b = _Tf._N1,
      c = _Tf._0l._N1,
      d = _h8._wc._an.DICE_HISTORY_WRAPPER;
    b.$(c._6s).children().remove();
    for (var e = a.length - 1; e > a.length - 4; e--) if (a[e]) {
      var f = d.fill({
        1: a[e].first,
        2: a[e].second,
        3: a[e].first + a[e].second
      });
      b.$(c._6s).append(f)
    } else break
  },
  redrawTotalBet: function (a) {
    _Tf._N1._ab(_Tf._0l._N1._Xk, a)
  },
  updatePointValue: function (a) {
    var b = _Tf._N1,
      c = _Tf._0l._N1,
      d = _Tf._41;
    0 === a ? b._ab(c._a5, d.$("_l9._21")) : b._ab(c._a5, a)
  },
  getContext: function () {
    return this.context
  }
};
_Tf._Ek._2s._o4.CrapsPlayer = function (a, b, c, d, e) {
  _Tf._Ek._2s._o4.CrapsPlayer.superclass.apply(this, arguments);
  this.playerBlock = null
};
extend(_Tf._Ek._2s._o4.CrapsPlayer, _Tf._Ek._2s._o4._0q);
_Tf._Ek._2s._o4.CrapsPlayer.prototype.appendResources = function () {
  this.avatarCircle = _Tf._M4._np.table.getElement("avatarCircleBaccarat")
};
_Tf._Ek._2s._o4.CrapsPlayer.prototype.locate = function (a, b) {
  this.realNumber != a && this.destroy();
  this.realNumber = a;
  var c = this.designPosition.chairs[a],
    d = b ? this.designPosition.playerClient : this.designPosition.player;
  b ? this.position = this.designPosition.playerClient.posCenter.clone() : (this.position = c.posCenter.clone(), this.position.plus(c.posPlayerCenter.clone()));
  this.position.sub(new _8n(d.width / 2, d.height / 2))
};
_Tf._Ek._2s._o4.CrapsPlayer.prototype._qp = function () { };
_Tf._Ek._2s._o4.CrapsPlayer.prototype._drawBlocks = function () { };
_Tf._Ek._2s._o4.CrapsPlayer.prototype._Pm = function () { };
_Tf._Ek._2s._o4.CrapsPlayer.prototype._uc = function () { };
_Tf._Ek._2s._o4.CrapsPlayer.prototype._E0 = function () { };
_Tf._Ek._2s._o4.CrapsPlayer.prototype._drawStatus = function () { };
_Tf._Ek._2s._o4.CrapsPlayer.prototype._drawActiveShape = function () { };
_Tf._Ek._2s._o4.CrapsPlayer.prototype.drawMiddle = function (a, b, c, d, e, f, g) {
  var b = _Mf._q1._y9(),
    b = _Tf._0l._N1._6i.format(b),
    b = jQuery(b),
    e = _Tf._0l._N1,
    c = e._q8.format(this.realNumber),
    d = e._ai,
    h = _Mf._q1._Rm();
  f && (d = d + " " + e._1f);
  0 < $("#" + c).length && $("#" + c).remove();
  f = jQuery("<div/>", {
    "class": e._i8
  });
  f.css("background-image", "url(" + this.avatar.src + ")");
  a = jQuery("<div/>", {
    "class": e._dg,
    html: _h8._wc._an.CRAPS_PLAYER_NAME.fill({
      name: a
    })
  });
  this.playerBlock = jQuery("<div/>", {
    id: c,
    "class": d
  });
  this.playerBlock.append(f);
  this.playerBlock.append(a);
  b.append(this.playerBlock);
  this.playerBlock.on("click", function () {
    h._T1(this.realNumber, g)
  })
};
_Tf._Ek._2s._o4.CrapsPlayer.prototype.drawAfter = function (a, b, c, d, e, f, g) {
  a = this.context.globalAlpha;
  if (this.isShadow || d != _Tf._dc.PlayerState._w) this.context.globalAlpha = this.designPosition.player.transparent;
  d === _Tf._dc.PlayerState._w && this._customizeMoney(b, g);
  this._uc(c, g);
  this.context.globalAlpha = a;
  this._E0(d, g);
  this._drawActiveShape(e, g)
};
_Tf._Ek._2s._o4.CrapsPlayer.prototype.destroy = function () {
  this.playerBlock && (this.playerBlock.off(), this.playerBlock.remove())
};
_Tf._Ek._2s._o4.CrapsPlayer.prototype._G = function (a, b) {
  var c = _Tf._N1,
    d = _Tf._0l._N1,
    e = d._q8.format(this.realNumber);
  b && c._ab(d._w1, a);
  $("#" + e + " " + d._wo).html(a)
};
_Tf._Ek._2s._o4.CrapsChair = function (a, b, c, d, e, f) {
  _Tf._Ek._2s._o4.CrapsChair.superclass.apply(this, arguments)
};
extend(_Tf._Ek._2s._o4.CrapsChair, _Tf._Ek._2s._o4._Na);
_Tf._Ek._2s._o4.CrapsChair.prototype.appendResources = function () {
  this.chair = [];
  this.chair[0] = _Tf._M4._np.table.getElement("sitDownButtonCraps1");
  this.chair[1] = _Tf._M4._np.table.getElement("sitDownButtonCraps2");
  this.chair[2] = _Tf._M4._np.table.getElement("sitDownButtonCraps3");
  this.chair[3] = _Tf._M4._np.table.getElement("sitDownButtonCraps4");
  this.chair[4] = _Tf._M4._np.table.getElement("sitDownButtonCraps5");
  this.chair[5] = _Tf._M4._np.table.getElement("sitDownButtonCraps6")
};
_Tf._Ek._2s._o4.CrapsChair.prototype.drawBetBlock = function (a, b) {
  var c = b ? this.designPosition.clientBetBlock : this.designPosition.betBlock,
    d = _h8._0l._vn,
    e = this.designPosition.chairs[this.realNumber].betBlockPos,
    f;
  b ? (f = c.pos.x, e = c.pos.y) : (f = this.position.x + e.x, e = this.position.y + e.y);
  _Tf._Ek._29.drawBlocks(this.context, f, e, c.width, c.height, d.BACCARAT_BET_BLOCK_BG, d.BACCARAT_BET_BLOCK_BORDER, c.cornerRadius, c.borderWidth);
  _Tf._Ek._29.fillText(this.context, this.designPosition, a, f + c.offsetTextX, e + c.offsetTextY,
    d.BACCARAT_BET_TEXT_COLOR, c.text, !1, !1, !1, null, null, c.width, c.textFace, c.textStrokeThickness, d.BACCARAT_BET_TEXT_BORDER)
};
_Tf._Ek._2s._o4.CrapsChair.prototype.drawMiddle = function (a, b, c) {
  a && b && this._I9(c)
};
_Tf._Ek._2s._o4.CrapsChair.prototype._I9 = function (a) {
  a || (a = 0);
  _Tf._Ek._29.drawImage(this.middleContext, this.chair[a], this.position.x, this.position.y, this.angle, this.designPosition.chair.imageWidth, this.designPosition.chair.imageHeight)
};
_Tf._Ek._2s._o4.CrapsChair.prototype.clearItselfOnMiddle = function () {
  $(_Tf._0l._N1._w1).html("");
  _Tf._Ek._29.fillRectToClear(this.middleContext, this.position.x - this.designPosition.chair.imageWidth / 2 - 50, this.position.y - this.designPosition.chair.imageHeight / 2 - 150, this.designPosition.chair.imageWidth + 100, this.designPosition.chair.imageHeight + 300)
};
_Tf._Ek._2s._o4.CrapsChair.prototype._Ms = function () { };
_Tf._Ek._2s._o4.CrapsChair.prototype._3p = function (a, b) {
  var c = this.designPosition.chair;
  return this.position.x - c.imageWidth / 2 < a && a < this.position.x + c.imageWidth / 2 && this.position.y - c.imageHeight / 2 < b && b < this.position.y + c.imageHeight / 2 ? !0 : !1
};
_Tf._Ek._2s._o4.CrapsChair.prototype.hasAvatarPointAction = function (a, b, c) {
  var d = this.designPosition.chairs[this.realNumber],
    e = c ? this.designPosition.playerClient : this.designPosition.player;
  c ? c = this.designPosition.playerClient.posCenter.clone() : (c = d.posCenter.clone(), c.plus(d.posPlayerCenter.clone()));
  a = c.x - a;
  b = c.y - b;
  e = e.avatarWidth / 2;
  return a * a + b * b <= e * e
};
_Tf._a._Vb = function () {
  this._Iq = "";
  this.screen = null
};
_Tf._a._Vb.prototype = {
  clientConfig: {},
  _33: function (a) {
    for (var b = /name=\"(\w+)\" value=\"([\w\u0410-\u042f\u0430-\u044f0-9-]+)\"/g, c = null; null != (c = b.exec(a));) this.clientConfig[c[1]] = c[2]
  },
  _Kd: function (a) {
    if (_Tf._41._Kd(a)) {
      switch (_Mf._Md._oo()) {
        case _Tf._0l._N1._ff._Q6:
        case _Tf._0l._N1._ff._1o:
          _Mf.startApplication()
      }
      this._33(a.miniConfigXML);
      var b = _Tf._Ek._29;
      this.clientConfig.serverTimeOffset = b.getTimeInterval(b.getDateFromString(a.serverUTCTime), new Date)
    }
  },
  getServerTimeOffset: function () {
    return this.clientConfig.serverTimeOffset
  },
  checkDevice: function () {
    for (var a = Math.min(window.innerWidth, window.innerHeight), b = _h8._0l.DeviceType, c = -1, d = b.separators.length - 1; 0 <= d; d--) if (b.separators[d] >= a) {
      c = d;
      break
    }
    return -1 == c ? 0 < b.titles.length ? b.titles[0] : "Default" : b.titles[c]
  },
  initDesign: function () {
    LazyLoad.css(version(_gc._Aq));
    this._Iq = this.checkDevice();
    _gc.DesignJS = _gc.DesignJS(_Tf._0l._h8, this._Iq)
  },
  _Fh: function (a, b) {
    if ("undefined" === typeof a) return !0;
    var b = _Mf._Up._9p(),
      c = _Mf._b1.getPositionByGameType(b);
    if ("undefined" === typeof c.tableSeats[a]) return !1;
    var d = _Tf._dc.GameType,
      c = c.maxChairsByGameType;
    return d._rk(b) ? a <= c.holdem : d._qo(b) ? a <= c.omaha : d._98(b) ? a <= c.stud : d.isBlackJack(b) ? a <= c.blackjack : d.isBaccarat(b) ? a <= c.baccarat : d.isPaigow(b) ? a <= c.paigow : d.isCraps(b) ? a <= c.craps : !1
  },
  getAllowedTablesList: function (a) {
    for (var b = [], c = 0; c < a.length; c++) this._Fh(a[c].maxPlayer, a[c].gameType) && (b[b.length] = a[c]);
    return b
  },
  _Gp: function (a, b) {
    var c = "",
      d = _Mf._Up._9p(),
      d = _Mf._b1.getPositionByGameType(d),
      e;
    for (e in d.tableSeats) d.tableSeats.hasOwnProperty(e) && ("undefined" != typeof a && 0 < a && e < a || "undefined" != typeof b && 0 < b && e > b || (c += (0 < c.length ? "," : "") + e));
    return c
  },
  _n4: function (a) {
    a !== _Tf._Hc._L8.isSoundOn && _Tf._Hc._L8.toogleSound()
  },
  _Qp: function () {
    return _Tf._Hc._L8.hasSound()
  },
  setScreenAction: function (a, b) {
    this.screen = {
      width: a,
      height: b
    }
  },
  getScreenAction: function () {
    return this.screen
  },
  RegistrationParams: {
    nickName: {
      show: !0,
      need: !0,
      required: !0,
      pattern: "^[\\w\u0410-\u042f\u0430-\u044f\\.\\-\\'\\`\\s\\,\\(\\)\\+]{4,16}$"
    },
    firstName: {
      show: !0,
      need: !1,
      required: !0,
      pattern: "^[\\w\u0410-\u042f\u0430-\u044f\\.\\-\\'\\`\\s\\,\\(\\)\\+]{1,60}$"
    },
    familyName: {
      show: !0,
      need: !1,
      required: !1,
      pattern: "^[\\w\u0410-\u042f\u0430-\u044f\\.\\-\\'\\`\\s\\,\\(\\)\\+]{1,60}$"
    },
    middleName: {
      show: !0,
      need: !1,
      required: !1,
      pattern: "^[\\w\u0410-\u042f\u0430-\u044f\\.\\-\\'\\`\\s\\,\\(\\)\\+]{1,60}$"
    },
    password: {
      show: !0,
      need: !0,
      required: !0,
      pattern: "^[^\\s]{5,20}$"
    },
    country: {
      show: !0,
      need: !1,
      required: !0,
      pattern: "^[\\w\u0410-\u042f\u0430-\u044f\\.\\-\\'\\`\\s\\,\\(\\)\\+]{1,255}$"
    },
    state: {
      show: !0,
      need: !1,
      required: !1,
      pattern: "^[\\w\u0410-\u042f\u0430-\u044f\\.\\-\\'\\`\\s\\,\\(\\)\\+]{1,255}$"
    },
    zipCode: {
      show: !0,
      need: !1,
      required: !0,
      pattern: "^[\\d\\s]{1,255}$"
    },
    city: {
      show: !0,
      need: !1,
      required: !0,
      pattern: "^[\\w\u0410-\u042f\u0430-\u044f\\.\\-\\'\\`\\s\\,\\(\\)\\+]{1,16}$"
    },
    phoneNumber: {
      show: !0,
      need: !1,
      required: !1,
      pattern: "^(\\d+-\\d+-\\d+){1,20}$"
    },
    eMail: {
      show: !0,
      need: !0,
      required: !0,
      pattern: "[^@]+@[^@]+"
    },
    address: {
      show: !0,
      need: !1,
      required: !0,
      pattern: "^[\\w\u0410-\u042f\u0430-\u044f\\.\\-\\'\\`\\s\\,\\(\\)\\+]{1,16}$"
    },
    gender: {
      show: !0,
      need: !1,
      required: !1,
      pattern: ""
    },
    bonusCode: {
      show: !0,
      need: !1,
      required: !1,
      pattern: "^[\\w\u0410-\u042f\u0430-\u044f\\.\\-\\'\\`\\s\\,\\(\\)\\+]{1,255}$"
    },
    referredBy: {
      show: !1
    },
    tag: {
      show: !1
    },
    pre: {
      show: !1
    },
    dob: {
      show: !1
    },
    pro: {
      show: !1
    },
    proColor: {
      show: !1
    }
  },
  isRegistrationRequireMinimumFields: function () {
    return "true" === this.clientConfig.RegistrationRequireMinimumFields
  },
  isUseFundsThousandsSeparator: function () {
    return "true" === this.clientConfig.UseFundsThousandsSeparator
  },
  isUseFundsDecimalSeparator: function () {
    return "true" === this.clientConfig.UseFundsDecimalSeparator
  },
  isUseDisplayNameInsteadOfNickInClient: function () {
    return "true" === this.clientConfig.UseDisplayNameInsteadOfNickInClient
  },
  _gp: function (a) {
    "undefined" !== typeof window.WebPoker && alert("Update #" + a + " for application has been loaded. Please restart.")
  }
};

function reloadApp(a) {
  _Mf && _Mf._Ta && _Mf._Ta._gp(a)
}
function getAppVersion() {
  return _Tf._0l._g8
}
_Tf._a._Un._83 = function (a) {
  this.initAutoActions(a);
  this.initValuesForAutoActions()
};
_Tf._a._Un._83.prototype = {
  autoActions: {},
  buyInAutoActions: {},
  initAutoActions: function (a) {
    var a = a || {}, b = _Tf._dc.AutoAction,
      c = _Tf._dc.PlayerAction;
    this.autoActions = {};
    this.autoActions[b.__f] = {
      value: a[b.__f] || !1,
      numbers: [c._jd, c._S5]
    };
    this.autoActions[b._6d] = {
      value: a[b._6d] || !1,
      numbers: [c._Fe]
    };
    this.autoActions[b._kh] = {
      value: a[b._kh] || !1,
      numbers: [c._Vj]
    };
    this.autoActions[b._mk] = {
      value: a[b._mk] || !1,
      numbers: [c._22]
    };
    this.autoActions[b._D4] = {
      value: a[b._D4] || !1,
      numbers: [c._Vo]
    };
    this.autoActions[b._Jr] = {
      value: a[b._Jr] || !1,
      numbers: [c._x2, c._B7]
    };
    this.autoActions[b._x2] = {
      value: a[b._x2] || !1,
      numbers: [c._x2]
    };
    this.autoActions[b._mi] = {
      value: a[b._mi] || !1,
      numbers: [c._pq]
    };
    this.autoActions[b._fn] = {
      value: a[b._fn] || !1,
      numbers: [c._c8]
    };
    this.autoActions[b._B7] = {
      value: a[b._B7] || !1,
      numbers: [c._B7]
    };
    this.buyInAutoActions = {};
    this.buyInAutoActions[b._v8] = {
      value: a[b._v8] || !1
    };
    this.buyInAutoActions[b._vp] = {
      value: a[b._vp] || !1
    }
  },
  initValuesForAutoActions: function () {
    var a = _Tf._dc.PlayerAction;
    this.message = {};
    this.message[a._Fe] = !1;
    this.message[a._jd] = !1;
    this.message[a._S5] = !1;
    this.message[a._Vj] = !1;
    this.message[a._Vo] = !1;
    this.message[a._22] = !1;
    this.message[a._x2] = !1;
    this.message[a._B7] = !1;
    this.message[a._pq] = !1;
    this.message[a._c8] = !1;
    var b, c;
    for (b in this.autoActions) if (this.autoActions.hasOwnProperty(b) && this.autoActions[b].value) {
      c = this.autoActions[b].numbers;
      for (a = 0; a < c.length; a++) this.message[c[a]] = !0
    }
  },
  _p3: function (a, b) {
    a = parseInt(a);
    if ("undefined" !== typeof this.autoActions[a]) {
      this._O6(a, b);
      var c = this.autoActions[a].numbers;
      this.autoActions[a].value = b;
      for (var d = 0; d < c.length; d++) this.message[c[d]] = b
    }
  },
  isPlayerActionAuto: function (a) {
    a = parseInt(a);
    return this.message[a] ? !0 : !1
  },
  isAutoActionSet: function (a) {
    a = parseInt(a);
    return "undefined" === typeof this.autoActions[a] ? !1 : this.autoActions[a].value
  },
  _O6: function () { },
  _Im: function (a) {
    this._O6 = a
  },
  isBuyInAutoActionSet: function (a) {
    a = parseInt(a);
    return "undefined" === typeof this.buyInAutoActions[a] ? !1 : this.buyInAutoActions[a].value
  },
  _kc: function (a, b) {
    a = parseInt(a);
    if ("undefined" !== typeof this.buyInAutoActions[a]) this.buyInAutoActions[a].value = b
  }
};
_Tf._U6._je = function () {
  this.id = 0;
  this.avatar = new Image;
  this.avatar.src = _Tf._0l._A._Nc._0q;
  this.auth = "";
  this.isGuest = !0;
  this.info = null;
  this.provider = this.password = this.login = "";
  this.needRedirectAfterRecconect = this.needRelogin = !1
};
_Tf._U6._je.prototype = {
  id: 0,
  avatar: null,
  auth: "",
  isGuest: !0,
  info: null,
  clear: function () {
    this.id = 0;
    this.info = null;
    this.isGuest = !0;
    this.avatar.src = _Tf._0l._A._Nc._0q
  },
  _p0: function (a) {
    if (a) this.id = a, this.isGuest = !1
  },
  _87: function (a, b) {
    _Tf._Hc._ad._bn(this.id, this, "avatar", !a, b)
  },
  _fe: function (a) {
    this.isGuest = !a;
    this.info = a
  },
  _T0: function (a) {
    this.auth = a
  },
  _3a: function () {
    return this.auth
  },
  setUser: function (a) { console.log('8032');
    this.login = a.login;
    this.password = a.password;
    this.provider = a.provider
  },
  clearUser: function () {
    this.provider = this.password = this.login = ""
  },
  hasUserData: function () {
    return this.password || this.provider
  },
  setNeedRelogin: function (a) {
    this.needRelogin = a
  },
  setNeedRedirectAfterRecconect: function (a) {
    this.needRedirectAfterRecconect = a
  },
  _I6: function (a) {
    if (!this.info) return 0;
    var b = _Tf._dc.MoneyType,
      a = a || b._i4;
    switch (a) {
      case b._i4:
      case b._qa:
        // alert(JSON.stringify(this.info.playCash));
        return this.info.playCash;
      case b._Ok:
        return this.info.realCash;
      case b._Xm:
        return this.info.custom1Cash;
      case b._82:
        // alert(JSON.stringify(this.info.custom2Cash));
        return this.info.custom2Cash
    }
    return 0
  },
  _o: function () {
    var a = this.info || {};
    a.avatarSrc = this.avatar.src;
    return a
  }
};
_Tf._a._je = function () {
  this.model = new this.model;
  this.view = new _Tf._E9._2s._bf._je
};
_Tf._a._je.prototype = {
  model: _Tf._U6._je,
  view: null,
  _oa: function () {
    return this.model.isGuest
  },
  _5q: function () {
    !1 !== _Mf._ks.emit(_Ag._U4, arguments) && this.model.info && (this.view._we(this.model.info), this.view._Tp(this.model.avatar.src))
  },
  _K5: function () {
    _Tf._hr._Yp(this._5q, null, this)
  },
  _V2: function (a) {
    this.view.drawAuthorizationStatus(a)
  },
  _d1: function () {
    return this.model.id
  },
  _ub: function () {
    return this.model._3a()
  },
  _Rj: function () {
    return this.model._o()
  },
  _Z5: function (a) {
    return this.model._I6(a)
  },
  _Q7: function () {
    _Mf._Up._io();
    this.model.clear();
    this.view._b2("");
    _Mf._ks.emit(_Ag._ki, arguments)
  },
  _Fj: function (a) {
    this.view._b2(a)
  },
  _j3: function () {
    this.model._T0("")
  },
  _Yn: function () {
    this._oa() || _Mf._20._wf.send(_Tf._0r._Tr._5o)
  },
  _k8: function (a, b) {
    this.view.prepareToLogin();
    this._V2(10);
    var c = a || {
      login: this.view._ym(),
      password: this.view._va()
    };
    c.sequence = b || !1;
    //alert(_Tf._0r._Gs.UserDetails.email)
   // keys = Object.keys(localStorage)
    //alert(localStorage.getItem('user'))
   // alert(keys)
    _Mf._20._f0.send(_Tf._0r._Tr._z0, c, {
      login: c.login,
      password: c.password,
      sequence: b || !1
    })
  },
  loginToAuthServiceAfterRegistrationAction: function (a, b) {
    this.view.prepareToLogin();
    var c = a || {
      login: this.view._ym(),
      password: this.view._va(),
      sequence: b || !1
    };
    _Mf._20._f0.send(_Tf._0r._Tr._1i, c, {
      login: c.login,
      password: c.password,
      sequence: b || !1
    })
  },
  _Fd: function (a) {
    if (a || this._ub()) a || this._V2(30), _Mf._20._W6.send(a ? _Tf._0r._Tr._5n : _Tf._0r._Tr._Yi, {
      auth: this._ub(),
      guest: a,
      keep_connection: !a
    })
  },
  getNodeProxyAddress: function () {
    _Mf.isMasterProxyInstanceExists() ? _Mf._20._Wo.send(_Tf._0r._Tr._m9) : this._jo()
  },
  _mj: function () {
    this._V2(60);
    _Mf._20._wf.send(_Tf._0r._Tr._qh, {
      password: this._ub()
    })
  },
  _zq: function () {
    if (!1 !== _Mf._ks.emit(_Ag._H2, arguments)) {
      var a = this.view._7j();
      null != a && (this.view._cg(), _Mf._20._wf.send(_Tf._0r._Tr._0n, a))
    }
  },
  _Z4: function () {
    _Mf._20._wf.send(_Tf._0r._Tr._7s);
    this.view._Ti()
  },
  _Mj: function () {
    this._oa() || _Mf._20._wf.send(_Tf._0r._Tr._Za)
  },
  _k0: function () {
    _Mf._20._ad.send(_Tf._0r._Tr._I1)
  },
  _sb: function (a) {
    if (a) if (this._oa()) _Mf._ks.emitAsync(_Ag._s4, arguments);
    else {
      var b = a.indexOf("?"); - 1 < b && (a = a.substr(0, b));
      _Mf._20._ad.send(_Tf._0r._Tr._66, {
        auth: this._ub(),
        image: a
      });
      this.view._t1()
    }
  },
  _Fs: function (a) {
    var b = _Tf._0l._41,
      c = null;
    a && _Xl.RememberMe && _Xl.RememberMe._hj && (c = _Tf._41.getKnownLocaleAction());
    _Tf._41.hasLocale(c) ? _Tf._41.change(c) : _Mf._20._wf.send(_Tf._0r._Tr._49, {
      locale: b
    })
  },
  _km: function () {
    _Mf._L2._oa() && _Tf._N1.__i("", _Tf._41.$("_e5._r0"), function () {
      _Mf._Md.changePage(_Tf._0l._N1._ff._fq)
    }, null, _Tf._41.$("_A8._E"), _Tf._41.$("_j3._76"))
  },
  _ih: function () {
    _Tf._N1._zh("", _Tf._41.$("_e5._N4"))
  },
  onServerDown: function () {
    console.log("SERVER DOWN!!!")
  },
  _l1: function (a,
    b) {
    this._V2(20);
    a.success ? (this.model._T0(a.auth || a.data.auth), this._Fd(!1), _Xl.RememberMe && _Xl.RememberMe._hj && _Xl.RememberMe._hj.rememberUserAction(b), this.model.setUser(b)) : (_Xl.RememberMe && _Xl.RememberMe._hj && _Xl.RememberMe._hj.forgetUserAction(), this.view._b2(a.desc))
  },
  onLoginToAuthServiceAfterRegistration: function () { },
  _Nl: function (a, b) {
    a.success ? this.model.needRelogin ? this.reloginAction() : (this._Fs(!b), b ? this._c3({
      isGuest: !0
    }) : (this._V2(40), this._mj(), _Mf._Up._z8())) : (this.view._b2(a.desc),
      this.model._T0(""))
  },
  reloginAction: function () { console.log('8225');
    this.model.needRelogin = !1;
    var a = this.model.provider;
    console.log('line 8228 :'+a);
    "facebook" == a ? _Mf._ks.emitAsync(_Xl._Af._dc._Ag.FACEBOOK_LOGIN_ACTION, [a]) : "google" == a ? _Mf._ks.emitAsync(_Xl._Ma._dc._Ag.GOOGLE_LOGIN_ACTION, [a]) : this._k8({
      login: this.model.login,
      password: this.model.password
    }, !0)
  },
  _z6: function (a) {
    this._oa() || (a.type === _Tf._0r._Tr._bp && a.resultCode === _Tf._dc.ResultCode._gr ? _Mf.refreshDueToAuthenticationErrors(a.text) : this._7o(a))
  },
  _7o: function (a) {
    this.model._fe(a);
    this._K5()
  },
  _1q: function (a) {
    a.resultCode != _Tf._dc.ResultCode._jh ? this.view._B3(a.text) : (this.view._k5(), a = _Tf._0l._N1, _Mf._pj(_Tf._41.$("_P2._84"), a._ff._fq, a._y1, a._j1, !0))
  },
  _c3: function (a) {
    this._V2(80);
    _Tf._0l.loadPredefinedAvatarsFromAvatarService && this._k0();
    a.isGuest ? (_Mf._Up._z8(), this.view._Bf()) : a.resultCode === _Tf._dc.ResultCode._ph ? (this._V2(90), this.model._p0(parseInt(a.text)), this.model._87(this._d1(), !0, this._5q), this._Yn(), _Mf._ks.emit(_Ag._J3, arguments), _Mf._Up._z8(), _Mf._Up._v0(), _Mf._Up._Ee(this._d1()),
      _Mf._Md.changePage(this.model.needRedirectAfterRecconect ? _h8._0l.START_PAGE_AFTER_RECONNECT : _h8._0l.START_PAGE_AFTER_LOGIN || _Tf._0l._N1._ff._W5), this.view._Bf(), this.model.needRedirectAfterRecconect = !1) : (this.view._b2(a.text), this.model._T0(""))
  },
  _Wl: function (a, b) {
    a = a || {};
    b = b || {};
    this._oa() ? (this.view._Wf(), _Mf._Up._io(b.gameType), _Mf._Up._fp(b.isFromView, !1), _Mf._X1._r(_Mf._X1._bm())) : a.resultCode != _Tf._dc.ResultCode._ph ? (_Mf._Up._io(b.gameType), this.view._6j(a.text)) : (_Mf._Up._p5(b.gameType), b.isDirectlyOpenTable ? _Mf._Up._19(b.table, b.address) : (this.view._Wf(), _Mf._Up._fp(b.isFromView, !1), _Mf._X1._r(_Mf._X1._bm())))
  },
  _K6: function (a) {
    a.resultCode === _Tf._dc.ResultCode._O2 && (this.view._K6(), _Mf.end(), this.model.clearUser())
  },
  _Ho: function () { },
  _w7: function (a) {
    var b = a.data ? a.data.list : [];
    !a.success || 0 == b.length ? this.view._nk() : this.view.setDefaultAvatars(b)
  },
  _n0: function (a) {
    a.success ? (this.model._87(!1), this.view.__h()) : this.view._g(a.desc)
  },
  _jo: function (a) {
    if (a && a.success) _Tf._0l._xj._af.address = a.data.proxy;
    var a = new _Tf._M4._9._Or,
      b = new _Tf._M4._9._17,
      c = new _Tf._M4._9._Xj,
      d = new _Tf._M4._9._A5,
      e = new _Tf._M4._A3._Or(_Tf._0l._xj._af, a),
      f = new _Tf._M4._A3._Kf(_Tf._0l._xj._af),
      g = new _Tf._M4._A3._Kf;
    _Mf._20._W6 = new _Tf._M4._20._17(_Tf._0l._xj._af, e, b);
    _Mf._20._wf = new _Tf._M4._20._Or(_Tf._0l._xj._af, e, a);
    _Mf._20._f0 = new _Tf._M4._20._Xj(_Tf._0l._xj._4l, f, c);
    _Mf._20._ad = new _Tf._M4._20._A5(_Tf._0l._xj._dl, g, d);
    _Mf._L2._Fd(!0)
  },
  _N9: function () {
    _Mf._Up._Ee(this._d1());
    this._Yn()
  }
};
_Tf._U6._l7 = function () {
  this.info = {};
  this.tournamentState = this.allowedStakes = this.stakes = null;
  this.seats = [];
  this.waitList = [];
  this.password = "";
  this.chat = [];
  this.gameServerAddress = "";
  this.sitDownRequested = !1
};
_Tf._U6._l7.prototype = {
  chat: [],
  info: {},
  stakes: {},
  allowedStakes: {},
  tournamentState: {},
  seats: [],
  waitList: [],
  clear: function () {
    this.setPassword("");
    this.setTournamentState(null);
    this._fe(null);
    this.waitList = [];
    this.seats = [];
    this.chat = [];
    this.gameServerAddress = ""
  },
  _fe: function (a) {
    this.info && a && this.info.id != a.id && this.setTournamentState(null);
    this.info = a
  },
  _ud: function (a) {
    this.gameServerAddress = a
  },
  _z4: function () {
    if (!this.info) return "";
    this.gameServerAddress || this._ud(_Mf._Up._13(this.info.gameType));
    return this.gameServerAddress
  },
  setTableState: function (a) {
    this.seats = a.seats || [];
    this.waitList = a.waitList || []
  },
  setTournamentState: function (a) {
    this.tournamentState = a || null
  },
  getTournamentState: function () {
    return this.tournamentState
  },
  setPassword: function (a) {
    this.password = a || ""
  },
  _va: function () {
    return this.password
  },
  addChatMessages: function (a, b) {
    this.chat = this.chat.concat(a);
    "undefined" !== typeof b && this.checkMessagesHistorySize(b)
  },
  checkMessagesHistorySize: function (a) {
    this.chat.splice(0, this.chat.length - a - 1)
  },
  getChatMessages: function () {
    return this.chat
  },
  isFull: function () {
    return !this.info ? !1 : this.seats.length === this.info.maxPlayer
  },
  isClientPlaying: function () {
    return null != this.getClientPositionOnTable()
  },
  getClientPositionOnTable: function () {
    if (0 == this.seats.length) return null;
    for (var a = _Mf._L2._d1(), b = 0; b < this.seats.length; b++) if (this.seats[b].playerId === a) return b;
    return null
  },
  isClientInWaitList: function () {
    if (0 == this.waitList.length) return !1;
    for (var a = _Mf._L2._d1(), b = 0; b < this.waitList.length; b++) if (this.waitList[b].playerId === a) return !0;
    return !1
  },
  _h0: function () {
    return !this.info ? !1 : 0 != this.info.tournamentId
  },
  setStakes: function (a) {
    var b, c, d = [];
    for (b in a) (c = a[b]) && (d[c.type] ? d[c.type].push(c) : d[c.type] = [c]);
    this.stakes = d
  },
  getStakes: function () {
    return this.stakes
  },
  setAllowedStakes: function (a) {
    this.allowedStakes = a
  },
  getAllowedStakes: function () {
    return this.allowedStakes
  }
};
_Tf._a._l7 = function () {
  this.model = new this.model;
  this.view = new _Tf._E9._2s._bf._l7
};
_Tf._a._l7.prototype = {
  model: _Tf._U6._l7,
  view: null,
  _d1: function () {
    return this.model.info ? this.model.info.id : 0
  },
  _8d: function (a) {
    this.model._fe(a)
  },
  _m5: function () {
    return this.model.info
  },
  _Q7: function () {
    this.view._v5(this._d1());
    this.model.clear()
  },
  _d9: function () {
    this.view._ed();
    _Mf._20._wf.send(this.model._h0() ? _Tf._0r._Tr._yk : _Tf._0r._Tr._6p, {
      tableId: this._d1(),
      _address: this.model._z4()
    }, {
        srcTableId: this._d1()
      })
  },
  _Ao: function (a) {
    this.view.canReserveSeat(this._d1()) ? (this.view.reserveSeat(this._d1(),
      a), _Mf._20._wf.send(_Tf._0r._Tr._E2, {
        tableId: this._d1(),
        seatIdx: a,
        _address: this.model._z4()
      }, {
          srcTableId: this._d1()
        })) : (a = _Mf._q1._Rm(this._d1())) && a._jg()
  },
  _u0: function () {
    if (_Mf._q1._Rm(this._d1())) {
      var a = this._d1();
      _Mf._20._wf.send(_Tf._0r._Tr._wr, {
        tableId: a,
        _address: this.model._z4()
      }, {
          tableId: a,
          srcTableId: a
        })
    }
  },
  _U2: function (a, b, c) {
    b ? b < this._de() && this._Qr(this._K9(b), a) : (b = c ? this._j9() : this._sj(), this._Qr(b, a))
  },
  _5b: function (a, b) {
    if (!this.model.sitDownRequested) if ("undefined" === typeof a || null === a) {
      this.view._67(this._d1(), "");
      var c = _Mf._q1._Rm(this._d1());
      c && c._1l()
    } else if (b = b || 0, c = _Mf._q1._Rm(this._d1())) {
      var c = this._d1(),
        d = !this.model._h0() ? _Tf._0r._Tr._U8 : _Tf._0r._Tr._md;
      _Mf._20._wf.send(d, {
        tableId: c,
        seatIdx: a,
        cash: b,
        _address: this.model._z4()
      }, {
          tableId: c,
          index: a,
          srcTableId: c
        });
      this.model.sitDownRequested = !0
    }
  },
  _Qr: function (a, b) {
    if (!this.model.sitDownRequested) if (!a || "undefined" === typeof b || null === b) this.view._67(this._d1(), "");
    else if (_Mf._q1._Rm(this._d1())) {
      var c = this._d1();
      _Mf._20._wf.send(_Tf._0r._Tr._r5, {
        tableId: c,
        seatIdx: b,
        cash: a,
        _address: this.model._z4()
      }, {
          tableId: c,
          index: b,
          srcTableId: c
        });
      this.model.sitDownRequested = !0
    }
  },
  _b8: function () {
    this.view._Ki();
    _Mf._20._wf.send(this.model._h0() ? _Tf._0r._Tr._ea : _Tf._0r._Tr._Dq, {
      tableId: this._d1(),
      _address: this.model._z4()
    }, {
        srcTableId: this._d1()
      })
  },
  _8q: function () {
    var a = _Mf._q1._Rm(this._d1());
    if (!a || !a._Ga()) this.sendLeaveTableMessage();
    else {
      var b = this;
      _Tf._N1.__i("", _Tf._41.$("_l9._C1").format(this._m5().name), function () {
        b.sendLeaveTableMessage()
      })
    }
  },
  sendLeaveTableMessage: function () {
    _Mf._20._wf.send(this.model._h0() ? _Tf._0r._Tr._oj : _Tf._0r._Tr._e6, {
      tableId: this._d1(),
      _address: this.model._z4()
    }, {
        srcTableId: this._d1()
      });
    this.model.isClientInWaitList() && this._im();
    this.view._d5()
  },
  _89: function (a, b, c) {
    !c || 0 === c.length ? _Mf._20._wf.send(this.model._h0() ? _Tf._0r._Tr._Aj : _Tf._0r._Tr._i4, {
      tableId: this._d1(),
      action: a,
      funds: b,
      _address: this.model._z4()
    }, {
        srcTableId: this._d1()
      }) : _Mf._20._wf.send(this.model._h0() ? _Tf._0r._Tr._is : _Tf._0r._Tr._h, {
        tableId: this._d1(),
        action: a,
        funds: b,
        cardIndexes: c,
        _address: this.model._z4()
      }, {
          srcTableId: this._d1()
        })
  },
  crapsPlayAction: function (a, b) {
    _Mf._20._wf.send(_Tf._0r._Tr._Xc, {
      tableId: this._d1(),
      action: a,
      stakes: b,
      _address: this.model._z4()
    }, {
        srcTableId: this._d1()
      })
  },
  _sr: function (a) {
    _Mf._L2._oa() ? _Mf._ks.emitAsync(_Ag._s4, arguments) : a && _Mf._20._wf.send(this.model._h0() ? _Tf._0r._Tr._Lp : _Tf._0r._Tr._18, {
      tableId: this._d1(),
      time: (new Date).toUTCString(),
      text: a,
      player: _Mf._L2._d1(),
      _address: this.model._z4()
    }, {
        srcTableId: this._d1()
      })
  },
  _M8: function () {
    _Mf._20._wf.send(this.model._h0() ? _Tf._0r._Tr._Op : _Tf._0r._Tr._Fr, {
      tableId: this._d1(),
      _address: this.model._z4()
    }, {
        srcTableId: this._d1()
      })
  },
  _h5: function (a, b, c) {
    this.model._fe({
      id: a
    });
    this.view._ne();
    this.model.setPassword(b);
    this.model._ud(c)
  },
  _19: function () {
    this.view._Pl(this.model.info.gameType);
    this.model._h0() ? (this.view._tb(this.model.info.gameType), this.view._C1(this.model.getTournamentState(), this.model.info)) : this.view._Hh();
    this.view.draw(this.model.info);
    var a = _Mf._q1._Rm(this._d1());
    a && a._V1(this.model.info.id, this.model.info.gameType, this.model.info.maxPlayer,
      this.model._h0())
  },
  _s9: function () {
    _Mf._q1._Yr(this._d1())
  },
  _g3: function (a) {
    var b = _Tf._dc.GameType,
      a = a.gameState.seats,
      c = _Mf._L2._d1(),
      d = 0;
    if (_Mf._Up._3h()) {
      if ((b.isBlackJack(this.model.info.gameType) || b.isBaccarat(this.model.info.gameType)) && this.model.info.minBet) d = this.model.info.minBet;
      else if (this.model.info.minCash) d = this.model.info.minCash;
      b.isCraps(this.model.info.gameType) && this.model.info.minBet ? d = 100 * this.model.info.minBet : this.model.info.minCash && (d = 100 * this.model.info.minCash)
    }
    for (b = 0; b < a.length; b++) if (a[b].id == c) {
      this._5b(b, d);
      break
    }
    _Mf._Up._mq();
    (b = _Mf._q1._Rm(this._d1())) && b._os()
  },
  _Rh: function () {
    _Mf._20._wf.send(_Tf._0r._Tr.__e, {
      tableId: this._d1(),
      join: !0,
      password: this.model._va(),
      _address: this.model._z4()
    })
  },
  _im: function () {
    _Mf._20._wf.send(_Tf._0r._Tr.__e, {
      tableId: this._d1(),
      join: !1,
      password: this.model._va(),
      _address: this.model._z4()
    })
  },
  _M9: function () {
    if (!this.model.info) return 0;
    var a = _Tf._dc.GameType,
      b = this.model.info.gameType;
    return a.isBlackJack(b) || a.isBaccarat(b) ? this.model.info.minBet : a.isCraps(b) ? 100 * this.model.info.minBet : this.model.info.minCash
  },
  _de: function () {
    if (!this.model.info) return 0;
    var a = _Tf._dc.GameType,
      b = this.model.info.gameType;
    return a.isBlackJack(b) || a.isBaccarat(b) ? this.model.info.maxBet : this.model.info.maxCash
  },
  _sj: function () {
    return this._M9()
  },
  _j9: function () {
    return _Mf._L2._Z5(this._Dj()) < this._de() || 0 == this._de() ? _Mf._L2._Z5(this._Dj()) : this._de()
  },
  _K9: function (a) {
    a = this._j9() - a;
    return 0 < a ? a : 0
  },
  _I4: function () {
    return this.model.info ? this.model.info.baseStake : 0
  },
  _up: function () {
    return this.model.info ? this.model.info.tournamentId : 0
  },
  _Dj: function () {
    return this.model.info ? this.model.info.moneyType : _Tf._dc.MoneyType._i4
  },
  _Mi: function () {
    return this.model.info ? this.model.info.potType : _Tf._dc.PotType._O1
  },
  _7l: function () {
    return this.model.info ? this.model.info.gameType : _Tf._dc.GameType._dk
  },
  _: function () {
    return this.model._h0()
  },
  _Z6: function () {
    return _Mf._L2._Z5(this._Dj()) >= this._sj()
  },
  _m8: function () {
    _Mf._20._wf.send(_Tf._0r._Tr._A1, {
      tableId: this._d1(),
      _address: this.model._z4()
    })
  },
  _10: function () {
    this._() || _Mf._20._wf.send(_Tf._0r._Tr._ck, {
      tableId: this._d1(),
      _address: this.model._z4()
    })
  },
  _4r: function (a) {
    var b = _Mf._q1._Rm(this._d1());
    b && (b._Fk() || this._g3(a), _Tf._hr._Yp(b._s8, a, b))
  },
  onGameTableDescription: function (a) {
    this.model.setStakes(a)
  },
  setAllowedStakes: function (a) {
    this.model.setAllowedStakes(a)
  },
  getAllowedStakes: function () {
    return this.model.getAllowedStakes()
  },
  getStakes: function () {
    return this.model.getStakes()
  },
  _x3: function (a) {
    this.model.info && this.model.info.tournamentId === a.tournamentId && (this.model.setTournamentState(a), this.view._C1(a, this.model.info))
  },
  _u1: function (a) {
    var b = _Mf._q1._Rm(this._d1());
    b && (a.resultCode != _Tf._dc.ResultCode._jh ? (b._Ap(), this.view._2a(a.text)) : b._O())
  },
  _Ef: function (a) {
    a.type === _Tf._0r._Tr._bp && a.resultCode != _Tf._dc.ResultCode._jh ? this._ah(a.text) : _Mf._Ta._Fh(a.info.maxPlayer, a.info.gameType) ? (this._8d(a.info), this._yh()) : this._ah(_Tf._41.$("_e5._k"))
  },
  _yh: function (a) {
    _Mf._Md.changePage(_Tf._0l._N1._ff._2l);
    this._10();
    "undefined" !== typeof a && _Mf._Up._3h() && (this._5b(a, this.model.info.minCash), _Mf._Up._mq())
  },
  _ah: function (a) {
    _Tf._N1._zh("", a);
    this.view.selectTableFailed(a);
    _Mf._q1._Yr(this._d1())
  },
  _R: function () {
    this._s9()
  },
  _Ur: function () {
    this.view._p7()
  },
  _Ng: function (a) {
    var b = _Tf._41,
      c = this,
      d = _Tf._dc.TableEventType,
      e = _Mf._q1,
      f = _Tf._dc.GameEvent,
      g = this._d1();
    switch (a.event.type) {
      case d._mg:
        this._s9();
        break;
      case d._58:
        e._ls(f._Yd, g);
      case d._90:
      case d._6b:
        _Tf._N1.__i("", a.event.text, function () {
          c._s9()
        }, function () { }, b.$("_l9._b2"), b.$("_j3._B0"));
        break;
      case d._rf:
        _Tf._N1._zh("", a.event.text);
        break;
      case d._Am:
        e._ls(f._Bp, g);
        _Mf._ks.emitAsync(_Ag._e7, [g, !0, "warn1"]);
        break;
      case d._hk:
        e._ls(f._bg, g);
        _Mf._ks.emitAsync(_Ag._e7, [g, !0, "warn2"]);
        break;
      case d._Qi:
        _Mf._ks.emitAsync(_Ag._r1, [g])
    }
  },
  _r0: function (a) {
    if (this.model.info && !(a.tableId != this._d1() || 0 === a.chatMessage.length)) this.model.addChatMessages(a.chatMessage, _Tf._0l.countOnChatMessages), _Mf._q1.activeTableId === a.tableId && this.view.addChatMessages(this.model.getChatMessages())
  },
  _F7: function () {
    this.view.addChatMessages(this.model.getChatMessages())
  },
  _f3: function (a) {
    a.resultCode != _Tf._dc.ResultCode._jh && this.view.sendChatFailed(a.text)
  },
  _ie: function (a) {
    if (a.resultCode === _Tf._dc.ResultCode._jh) {
      a = _Mf._q1._Rm(this._d1());
      if (!a) return;
      a._ie()
    }
    this.view._Sa()
  },
  _a4: function () { },
  _N4: function (a) {
    var b = _Mf._q1._Rm(this._d1());
    b && (a.resultCode === _Tf._dc.ResultCode._jh ? b._n6() : b._jg())
  },
  _Vh: function () {
    this.view._kb(this._d1());
    var a = _Mf._q1._Rm(this._d1());
    a && a._1l()
  },
  _45: function (a, b) {
    a ? this.view._b3(this._d1()) : this.view._67(this._d1(), b)
  },
  _Fn: function (a) {
    this.model.sitDownRequested = !1;
    var b = _Mf._q1._Rm(this._d1());
    b && (a.resultCode === _Tf._dc.ResultCode._jh ? (this._45(!0), b._Bq()) : (this._45(!1, a.text), b._1l()))
  },
  _sa: function (a) {
    var b = _Mf._q1._Rm(this._d1());
    b && (a.resultCode === _Tf._dc.ResultCode._jh ? (this._45(!0), b._w5()) : (this._45(!1, a.text), b._1l()))
  },
  _Hd: function (a) {
    this.model.sitDownRequested = !1;
    a.resultCode === _Tf._dc.ResultCode._jh ? this._45(!0) : this._45(!1, a.text)
  },
  _Jd: function (a) {
    a.tableId == this._d1() && (this.model.setTableState(a), this.model._h0() || (a = _Mf._q1._Rm(this._d1())) && (!this._Z6() && !_Mf._L2._oa() ? a._35() : !this.model.isFull() || this.model.isClientPlaying() ? a._35() : this.model.isClientInWaitList() ? a._bo() : a._Sl()))
  },
  _hc: function (a) {
    a.tableId == this._d1() && (this.model.setTableState(a), a = this.model.getClientPositionOnTable(), null !== a && this._5b(a, 0))
  },
  _O9: function (a) {
    a.type === _Tf._0r._Tr._Q8 && this._Jd(a)
  },
  _Dk: function (a) {
    if (_Mf._Md.getVisiblePage() == _Tf._0l._N1._ff._2l && _Mf._q1._Rm(this._d1())) {
      var b = this,
        c = this._sj(),
        d = _Tf._N1.__i("", _Tf._41.$("_l9._B4"), function () {
          b._5b(a.seatIdx,
            c)
        });
      setTimeout(function () {
        try {
          $(d).remove()
        } catch (a) { }
      }, 1E3 * a.timeout)
    }
  },
  _ue: function (a) {
    !1 !== _Mf._ks.emit(_Ag._u, arguments) && _Tf._N1._zh("", a.message)
  }
};
_Tf._U6._n8 = function () {
  this.tables = this.state = null;
  this.tablesTotalLength = 0;
  this.isPlayNowActive = !1;
  this.gameServers = {};
  this._w3()
};
_Tf._U6._n8.prototype = {
  state: null,
  tables: [],
  isPlayNowActive: !1,
  gameServers: {},
  _w3: function () {
    this.gameServers.current = _Tf._dc.GameType._dk;
    this.gameServers[_Tf._dc.GameType._dk] = {
      address: "",
      isAuthorized: !1
    };
    this.gameServers[_Tf._dc.GameType._6e] = {
      address: "",
      isAuthorized: !1
    };
    this.gameServers[_Tf._dc.GameType._u9] = {
      address: "",
      isAuthorized: !1
    };
    this.gameServers[_Tf._dc.GameType._Ll] = {
      address: "",
      isAuthorized: !1
    };
    this.gameServers[_Tf._dc.GameType._zj] = {
      address: "",
      isAuthorized: !1
    }
  },
  usePlayNow: function () {
    this.isPlayNowActive = !0
  },
  clearPlayNow: function () {
    this.isPlayNowActive = !1
  },
  isPlayNow: function () {
    return this.isPlayNowActive
  },
  _Gh: function (a) {
    this.state = a
  },
  _jj: function (a, b, c) {
    this.tables = c ? this.tables.concat(a) : a;
    this.tablesTotalLength = b || this.tables.length || 0
  },
  getTablesList: function () {
    return this.tables
  },
  getTablesCount: function () {
    return null != this.tables ? this.tables.length : 0
  },
  getTotalTablesCount: function () {
    return this.tablesTotalLength
  },
  _2: function (a) {
    this.gameServers.current = a
  },
  clearGameServerAuthorization: function (a) {
    if (a in this.gameServers) this.gameServers[a].isAuthorized = !1
  },
  clearAuthorizationsToGameServers: function () {
    this.gameServers[_Tf._dc.GameType._dk].isAuthorized = !1;
    this.gameServers[_Tf._dc.GameType._6e].isAuthorized = !1;
    this.gameServers[_Tf._dc.GameType._u9].isAuthorized = !1;
    this.gameServers[_Tf._dc.GameType._Ll].isAuthorized = !1;
    this.gameServers[_Tf._dc.GameType._zj].isAuthorized = !1
  },
  getKnownGameServersAddresses: function () {
    var a = [],
      b;
    for (b in this.gameServers) this.gameServers.hasOwnProperty(b) && "object" === typeof this.gameServers[b] && this.gameServers[b].address && !this.gameServers[b].isAuthorized && a.push({
      address: this.gameServers[b].address,
      gameType: b
    });
    return a
  },
  _ud: function (a, b, c) {
    c = c || this.gameServers.current;
    a += ":" + b;
    if (!(this.gameServers[c] && this.gameServers[c].address === a)) this.gameServers[c] || (this.gameServers[c] = {}), this.gameServers[c].address = a, this.gameServers[c].isAuthorized = !1
  },
  _z4: function (a) {
    a = a || this.gameServers.current;
    return !this.gameServers[a] ? null : this.gameServers[a].address
  },
  isAuthorizedGameServer: function (a) {
    a = a || this.gameServers.current;
    return !this.gameServers[a] ? !1 : this.gameServers[a].isAuthorized
  },
  setAuthorizedStateForGameServer: function (a, b) {
    a = a || this.gameServers.current;
    if (this.gameServers[a]) this.gameServers[a].isAuthorized = b
  },
  getCurrentGameType: function () {
    return this.gameServers.current
  },
  buildPlayNowStrategy: function (a, b) {
    var c = {};
    if (b) c.PartOfName = b;
    if (!a) return c.TableAllowedSeats = _Mf._Ta._Gp(), c;
    c.TableAllowedSeats = a.tableAllowedSeats || _Mf._Ta._Gp();
    if (a.potTypes && !_Tf._dc.GameType.isBlackJack(this.gameServers.current) && !_Tf._dc.GameType.isBaccarat(this.gameServers.current)) c.PotTypes = a.potTypes;
    if (a.minBuyIn) c.MinBuyIn = a.minBuyIn;
    if (a.maxBuyIn) c.MaxBuyIn = a.maxBuyIn;
    if (a.baseStakes) c.BaseStakes = a.baseStakes;
    if (a.baseTimeout) c.BaseTimeout = a.baseTimeout;
    return c
  },
  formatPlayNowStrategy: function (a) {
    var b = "",
      c;
    for (c in a) a.hasOwnProperty(c) && (b += c + "=" + a[c] + ";");
    return b
  }
};
_Tf._a._n8 = function () {
  this.model = new this.model;
  this.view = new _Tf._E9._2s._bf._n8
};
_Tf._a._n8.prototype = {
  model: _Tf._U6._n8,
  view: null,
  _io: function (a) {
    a ? this.model.clearGameServerAuthorization(a) : this.model.clearAuthorizationsToGameServers()
  },
  _p5: function (a) {
    this.model.setAuthorizedStateForGameServer(a, !0)
  },
  _K5: function () {
    this._x9();
    this._u3()
  },
  _vh: function () {
    this.model.state && this.view._Pn(this.model.state)
  },
  _x9: function () {
    _Tf._hr._Yp(this._vh, null, this)
  },
  _V5: function () {
    this.model.tables && this.view._2n(this.model.tables, this.model.getCurrentGameType())
  },
  _u3: function () {
    _Tf._hr._Yp(this._V5,
      null, this)
  },
  _3h: function () {
    return this.model.isPlayNow()
  },
  _mq: function () {
    this.model.clearPlayNow()
  },
  _2f: function (a, b) {
    _Mf._L2._oa() ? _Mf._ks.emitAsync(_Ag._s4, arguments) : this._3h() || (this.view.preparePlayNow(), this.model.usePlayNow(), _Mf._20._wf.send(_Tf._0r._Tr._3n, {
      strategy: this.model.formatPlayNowStrategy(this.model.buildPlayNowStrategy(b)),
      moneyType: a,
      gameType: this.model.getCurrentGameType(),
      cashAmount: _Mf._L2._Z5(a)
    }))
  },
  _Ee: function (a) {
    _Mf._L2._oa() || !1 === _Tf._0l.loadPlayerActiveTables || (_Mf._20._wf.send(_Tf._0r._Tr._o1, {
      playerId: a
    }), this.view.preparePlayerTablesList())
  },
  _fp: function (a, b, c) {
    a = a || !1;
    b = b || !1;
    c = c || null;
    a || (b = !1);
    if (b) {
      b = this.model.getTotalTablesCount() - this.model.getTablesCount();
      if (b > _Tf._0l._Nr) b = _Tf._0l._Nr;
      _Mf._20._wf.send(_Tf._0r._Tr._V8, {
        gameType: this.model.getCurrentGameType(),
        tableIndexFrom: this.model.getTablesCount(),
        tableIndexTo: this.model.getTablesCount() + b - 1
      }, {
          isNextPage: !0
        })
    } else b = this.model.formatPlayNowStrategy(this.model.buildPlayNowStrategy(this.view.getCurrentFilterParams(), c)), _Mf._20._wf.send(_Tf._0r._Tr._Tg, {
      gameType: this.model.getCurrentGameType(),
      maxNumberOfTables: _Tf._0l._Nr,
      filter: b
    }, {
        isNextPage: !1
      });
    a && this.view._Gc()
  },
  _qq: function (a, b) {
    b = b || {};
    b.gameType = a;
    b.isFromView = !0;
    this.view._Gc();
    _Mf._20._wf.send(_Tf._0r._Tr._Ce, {
      gameType: a
    }, b)
  },
  _z8: function () {
    var a = {
      gameType: this._9p(),
      isFromView: !1
    };
    _Mf._20._wf.send(_Tf._0r._Tr._Ce, {
      gameType: a.gameType
    }, a)
  },
  _v0: function () {
    if (!_Mf._L2._oa()) for (var a = this.model.getKnownGameServersAddresses(), b = _Mf._L2._ub(), c = 0; c < a.length; c++) _Mf._20._wf.send(_Tf._0r._Tr._D7, {
      password: b
    }, {
        _address: a[c].address,
        gameType: a[c].gameType
      })
  },
  _bl: function (a, b, c, d, e, f) {
    _Mf._q1._Fq(a, f, c, d, e) && _Mf._20._wf.send(!b ? _Tf._0r._Tr._Bj : _Tf._0r._Tr._kn, {
      tableId: a,
      password: c || ""
    }, {
        srcTableId: a,
        address: d
      })
  },
  _19: function (a, b) {
    a.gameType = a.gameType || this._9p();
    _Mf._Ta._Fh(a.maxPlayer, a.gameType) ? (b = b || this._13(a.gameType), a.isProtected || a.isPrivate || "undefined" != typeof a.flags && _Tf._dc.TableFlag.has(a.flags, _Tf._dc.TableFlag._n1) ? _Tf._N1.showInputDialog(_Tf._0l._N1._A4.substr(1), _Tf._41.$("_X6._s4"),

      function () {
        var c = _Tf._N1.$(_Tf._0l._N1._A4, !0).val();
        _Mf._Up._bl(a.id, !!a.tournamentId, c, b, null, a.gameType)
      }) : this._bl(a.id, !!a.tournamentId, null, b, null, a.gameType)) : _Tf._N1._zh("", _Tf._41.$("_e5._k"))
  },
  _P0: function (a) {
    var b = this.model._z4(a.gameType);
    !b || !_Mf._L2._oa() && !this.model.isAuthorizedGameServer(a.gameType) ? this._qq(a.gameType, {
      isDirectlyOpenTable: !0,
      table: a
    }) : this._19(a, b)
  },
  _9p: function () {
    return this.model.getCurrentGameType()
  },
  _13: function (a) {
    return this.model._z4(a)
  },
  _Oa: function (a) {
    if (a.success) for (var b = 0; b < a.tableSeats.length; b++) this._bl(a.tableSeats[b].tableId, !1, "", this.model._z4(), a.tableSeats[b].seatIdx, this.model.getCurrentGameType());
    else this.view._ee(), _Tf._N1._zh("", _Tf._41.$("_e5._O8")), this._mq()
  },
  _m0: function (a) {
    this.view._Pn(a);
    this.model._Gh(a)
  },
  onTablesList: function (a, b) {
    a.type === _Tf._0r._Tr._bp && a.resultCode != _Tf._dc.ResultCode._jh ? this.view.afterDrawTablesList() : (this.model._jj(a.tables, a.totalSizeOfTablesList, b.isNextPage), this.view._2n(this.model.getTablesList(), this.model.getCurrentGameType(),
      this.model.getTotalTablesCount(), b.isNextPage))
  },
  _Hp: function (a) {
    this.view.drawPlayerActiveTablesList(_Mf._Ta.getAllowedTablesList(a.tables))
  },
  _Ck: function (a, b) {
    a.type === _Tf._0r._Tr._bp && a.resultCode != _Tf._dc.ResultCode._jh ? (this.model.clearGameServerAuthorization(b.gameType), this.view._1a(a.text)) : (this.model._ud(a.address, a.port, b.gameType), this.model._2(b.gameType), _Mf._20._wf._ic({
      game: this.model._z4(b.gameType)
    }), b.address = this.model._z4(b.gameType), _Mf._L2._oa() ? _Mf._L2._Wl(a, b) : _Mf._20._wf.send(_Tf._0r._Tr._vg, {
      password: _Mf._L2._ub()
    }, b))
  },
  _Q1: function (a) {
    a.resultCode === _Tf._dc.ResultCode._gr && _Mf.refreshDueToAuthenticationErrors(a.message)
  },
  _Sg: function (a, b) {
    a = a || {};
    b = b || {};
    _Mf._L2._oa() ? _Mf._Up._io(b.gameType) : a.resultCode != _Tf._dc.ResultCode._ph ? _Mf._Up._io(b.gameType) : (_Mf._Up._p5(b.gameType), _Mf._q1._m8(b.gameType))
  }
};
_Tf._U6._kj = function () {
  this.tournaments = null;
  this.tournamentsType = _Tf._dc.TournamentType._Nd;
  this.rulesConfig = null
};
_Tf._U6._kj.prototype = {
  tournaments: [],
  tournamentsType: _Tf._dc.TournamentType._Nd,
  rulesConfig: null,
  _Bd: function () {
    return this.tournamentsType
  },
  _Bi: function (a) {
    this.tournamentsType = a
  },
  _v9: function (a) {
    this.tournaments = a
  },
  _z2: function (a) {
    this.rulesConfig = a
  },
  _cr: function () {
    return this.rulesConfig
  }
};
_Tf._a._kj = function () {
  this.model = new this.model;
  this.view = new _Tf._E9._2s._bf._kj;
  this.opennedTournament = new _Tf._E9._Y3._xl
};
_Tf._a._kj.prototype = {
  model: _Tf._U6._kj,
  view: null,
  opennedTournament: null,
  _5q: function () {
    this.model.tournaments && this.view._Oi(this.model.tournaments, this.model._Bd())
  },
  _K5: function () {
    _Tf._hr._Yp(this._5q, null, this)
  },
  _r: function (a) {
    this.model._Bi(a);
    _Mf._20._wf.send(_Tf._0r._Tr._u8, {
      tournamentType: a
    });
    this.view._lb()
  },
  _oq: function (a) {
    this.opennedTournament._Q7(a);
    _Mf._20._wf.send(_Tf._0r._Tr._71, {
      tournamentId: a
    });
    _Mf._Md.changePage(_Tf._0l._N1._ff._qa);
    this.opennedTournament.view.prepareToSelectTournament(a)
  },
  selectTournamentTableAction: function (a) {
    a = a || {};
    a.isSelectFromLobby = !0;
    _Mf._20._wf.send(_Tf._0r._Tr._3s, {
      tournamentId: a.tournamentId
    }, a)
  },
  _bm: function () {
    return this.model._Bd()
  },
  _cp: function () {
    return this.model._cr()
  },
  _Sb: function (a) {
    this.view._Oi(a.tournaments, this.model._Bd());
    this.model._v9(a.tournaments)
  },
  _Pi: function (a) {
    this.opennedTournament._Pi(a)
  },
  _Er: function (a) {
    a.tournamentId === this.opennedTournament._d1() && this.opennedTournament._Er(a)
  },
  _Ib: function (a) {
    a.tournamentId === this.opennedTournament._d1() && this.opennedTournament._Ib(a)
  },
  _nb: function (a) {
    a.tournamentId === this.opennedTournament._d1() && this.opennedTournament._nb(a)
  },
  _gn: function (a) {
    this.model._z2(a)
  }
};
_Tf._U6._xl = function () {
  this.id = 0;
  this.players = this.tables = this.info = null;
  this.isClientFinishedTournament = this.isClientRegistered = !1;
  this.tournamentServerAddress = "";
  this.isNeedSubscribe = !0;
  this.isStateChangedByEvent = !1;
  this.playerInTournamentStatusNotification = this.activeTournamentTable = null
};
_Tf._U6._xl.prototype = {
  info: null,
  tables: null,
  players: null,
  _so: function (a, b) {
    this.tournamentServerAddress = !a && !b ? "" : a + ":" + b
  },
  _Wi: function () {
    return this.tournamentServerAddress
  },
  _Hb: function (a) {
    this.isNeedSubscribe = a === _Tf._dc.TournamentState._Td || a === _Tf._dc.TournamentState._Il
  },
  isTournamentPrivate: function () {
    var a = _Tf._dc.TournamentFlag;
    return a.has(this.info.flags, a._27)
  },
  _E5: function () {
    return this.info ? this.info.state != _Tf._dc.TournamentState._Td && this.info.state != _Tf._dc.TournamentState._Il : !0
  },
  _Gh: function (a) {
    if (this.info) this.info.state = a, this._Hb(a), this.isStateChangedByEvent = !0
  },
  _fe: function (a) {
    if (a) {
      if (this.info) if (a.state != this.info.state) {
        var b = this.info.state;
        this.info = a;
        this.isStateChangedByEvent ? this.info.state = b : this._Hb(a.state)
      } else this.isStateChangedByEvent = !1, this._Hb(a.state), this.info = a;
      else this._Hb(a.state), this.info = a;
      this.id = this.info.id
    } else this.info = null
  },
  _p0: function (a) {
    this.id = a
  },
  _us: function () {
    return this.id
  },
  _o: function () {
    return this.info
  },
  isSupportLateRegistration: function () {
    return !this.info ? !1 : this.info.tournamentType == _Tf._dc.TournamentType._Nd && 0 < this.info.lateRegistrationTimeLimit
  },
  isLateRegistrationActive: function () {
    return !this.getPlayerInTournamentStatusNotification() ? !1 : 0 < this.getPlayerInTournamentStatusNotification().secondsToLateRegistrationPeriodEnd
  },
  _jj: function (a) {
    this.tables = a
  },
  _94: function () {
    return this.tables
  },
  _g1: function (a) {
    this.players = a.sort(function (a, b) {
      return -1 === a.place ? 1 : a.place - b.place
    });
    this.isClientFinishedTournament = this.isClientRegistered = !1;
    if (a) for (var b = _Mf._L2._d1(), c = 0; c < a.length; c++) if (a[c].playerId === b) {
      this.isClientRegistered = !0;
      if (-1 != a[c].place) this.isClientFinishedTournament = !0;
      break
    }
  },
  _Ro: function () {
    return this.players
  },
  setPlayerInTournamentStatusNotification: function (a) {
    this.playerInTournamentStatusNotification = a
  },
  getPlayerInTournamentStatusNotification: function () {
    return this.playerInTournamentStatusNotification
  },
  _Dr: function (a) {
    this.isClientFinishedTournament = this.isClientRegistered = !1;
    this.isNeedSubscribe = !0;
    this.isStateChangedByEvent = !1;
    this.playerInTournamentStatusNotification = null;
    this.id = a;
    if (this.info && this.info.id !== a) this.info = this.tables = this.players = this.activeTournamentTable = null
  }
};
_Tf._a._xl = function () {
  this.model = new this.model;
  this.view = new _Tf._E9._2s._bf._xl
};
_Tf._a._xl.prototype = {
  model: _Tf._U6._xl,
  view: null,
  _Dj: function () {
    return this.model._o() ? this.model._o().moneyType : _Tf._dc.MoneyType._i4
  },
  _K5: function () {
    this.drawTournamentInfo();
    this.drawTournamentButtons();
    this.drawTournamentTables();
    this._Pj()
  },
  _06: function () {
    this.model._o() && (this.view._we(this.model._o(), this.model.getPlayerInTournamentStatusNotification()), this.view._9o())
  },
  drawTournamentInfo: function () {
    _Tf._hr._Yp(this._06, null, this)
  },
  _vf: function () {
    this._R9();
    this.model._o() && this.view.drawLateRegistrationInfo(this.model._o(),
      this.model.getPlayerInTournamentStatusNotification())
  },
  drawLateRegistrationInfo: function () {
    _Tf._hr._Yp(this._vf, null, this)
  },
  _R9: function () {
    this.view._L3();
    this.view._Od();
    this.model._o() && (this.model.info.state === _Tf._dc.TournamentState._2k ? this.view._Vg(this.model.isClientRegistered) : this.model.isClientRegistered ? !this.model._E5() && !this.model.isClientFinishedTournament && this.view._eb() : this.model.info.state === _Tf._dc.TournamentState._Td && this.model.isSupportLateRegistration() ? this.view._Vg(!1) : this.model.info.state === _Tf._dc.TournamentState._Il && this.model.isLateRegistrationActive() && this.view._Vg(!1))
  },
  drawTournamentButtons: function () {
    _Tf._hr._Yp(this._R9, null, this)
  },
  _Uj: function () {
    if (this.model._94()) {
      var a = _Mf._X1._cp().levelsConfig[this.model.info.level];
      this.view._2n(this.model._94(), a)
    }
  },
  drawTournamentTables: function () {
    _Tf._hr._Yp(this._Uj, null, this)
  },
  _ma: function () {
    this.model._Ro() && this.view._Sj(this.model._Ro(), this._Dj())
  },
  _Pj: function () {
    _Tf._hr._Yp(this._ma, null, this)
  },
  _Q7: function (a) {
    this.model._Dr(a);
    this.view.clear(a)
  },
  _M0: function () {
    _Mf._L2._oa() ? _Mf._ks.emitAsync(_Ag._s4, arguments) : this.model.isClientRegistered && !this.model.isClientFinishedTournament && this.model.activeTournamentTable && _Mf._Up._19(this.model.activeTournamentTable, this.model._Wi())
  },
  _k6: function (a) {
    if (!a.tournamentId) a.tournamentId = this._d1();
    _Mf._Up._19(a, this.model._Wi())
  },
  _d1: function () {
    return this.model._us()
  },
  _Ln: function (a) {
    _Mf._20._wf.send(_Tf._0r._Tr._X, {
      tournamentId: a
    })
  },
  _Z2: function (a, b, c) {
    c = c || {};
    this.model._so(a,
      b);
    _Mf._20._wf._ic({
      tournament: this.model._Wi()
    });
    _Mf._20._wf.send(_Tf._0r._Tr._x6, {
      password: _Mf._L2._ub()
    }, c)
  },
  _kf: function () { },
  _z9: function () {
    this.view.clearLateRegistrationInfo();
    this._J6()
  },
  _J6: function () {
    _Mf._20._wf.send(_Tf._0r._Tr._Ds, {
      tournamentId: this._d1()
    })
  },
  _3e: function () {
    _Mf._20._wf.send(_Tf._0r._Tr._3s, {
      tournamentId: this._d1()
    })
  },
  __9: function () {
    if (_Mf._L2._oa()) _Mf._ks.emitAsync(_Ag._s4, arguments);
    else {
      var a = this.view,
        b = this._d1(),
        c = _Tf._N1,
        d = _Tf._0l._N1;
      a._yg();
      this.model.isTournamentPrivate() ? c.showInputDialog(d._Jk.substr(1), _Tf._41.$("_c6._s4"), function () {
        _Mf._20._wf.send(_Tf._0r._Tr._Jm, {
          tournamentId: b,
          password: c.$(d._Jk, !0).val()
        })
      }, function () {
        a.enableRegisterButton()
      }) : _Mf._20._wf.send(_Tf._0r._Tr._Jm, {
        tournamentId: this._d1()
      })
    }
  },
  _y: function () {
    _Mf._L2._oa() ? _Mf._ks.emitAsync(_Ag._s4, arguments) : (this.view._Z1(), _Mf._20._wf.send(_Tf._0r._Tr._Jj, {
      tournamentId: this._d1()
    }))
  },
  _10: function () {
    this.model._E5() ? _Mf._20._wf.send(_Tf._0r._Tr._71, {
      tournamentId: this._d1()
    }) : (this.getLobbyTournamentInfoFromTournament(), (!this.model.getPlayerInTournamentStatusNotification() || this.model.isLateRegistrationActive()) && _Mf._20._wf.send(_Tf._0r._Tr._Y2, {
      tournamentId: this._d1()
    }));
    this.model.info && !this.model._E5() && !_Mf._L2._oa() && _Mf._20._wf.send(_Tf._0r._Tr._ye, {
      playerId: _Mf._L2._d1()
    })
  },
  getLobbyTournamentInfoFromTournament: function () {
    _Mf._20._wf.send(_Tf._0r._Tr._7m, {
      tournamentId: this._d1()
    })
  },
  _q: function (a) {
    // alert(JSON.stringify(a))
    _Mf._Up._19(a.info, this.model._Wi())
  },
  _4h: function (a) {
    this._Z2(a.address, a.port, {
      isInvited: !0,
      tournamentId: a.info.id,
      tournamentName: a.info.name
    })
  },
  _3o: function (a) {
    a.resultCode != _Tf._dc.ResultCode._jh && _Tf._N1._zh("", a.text)
  },
  _Pi: function (a) {
    a.type === _Tf._0r._Tr._bp ? a.resultCode === _Tf._dc.ResultCode._8i && this.view._if(a.text) : this.model._o() && this.model._us() != a.info.id || (this.model._fe(a.info), this.model.isNeedSubscribe && this._3e(), this.model._jj(a.tables), this.model._g1(a.players), this._K5(), _me.tablesSnap.onChangeTournamentInfo(a.info))
  },
  _g0: function (a) {
    a.resultCode !== _Tf._dc.ResultCode._jh ? (this.view.enableRegisterButton(),
      this.view._if(a.text)) : !this.model.info || this.model.info.state === _Tf._dc.TournamentState._Td || this.model.info.state === _Tf._dc.TournamentState._Il ? this.view._L3() : (this.view._Vg(!0), this._10())
  },
  _5l: function (a) {
    a.resultCode !== _Tf._dc.ResultCode._jh ? (this.view.enableUnregisterButton(), this.view._if(a.text)) : (this.view._Vg(!1), this._10())
  },
  _x3: function (a) {
    _Mf._q1._x3(a)
  },
  _Hp: function (a) {
    if (!(a.playerId != _Mf._L2._d1() || this.model._E5()) && this.model.isClientRegistered && !this.model.isClientFinishedTournament) for (var b = 0; b < a.tables.length; b++) if (a.tables[b].tournamentId === this._d1()) {
      this.model.activeTournamentTable = a.tables[b];
      this.view._eb();
      break
    }
  },
  _m6: function (a, b) {
    if (a.tournamentId == this._d1() || b) a.type === _Tf._0r._Tr._bp ? a.resultCode != _Tf._dc.ResultCode._jh && _Tf._N1._zh("", a.text) : this._Z2(a.address, a.port, b)
  },
  _V9: function (a) {
    a.tournamentId == this._d1() && (this.model._jj(a.tables), this.drawTournamentTables())
  },
  _p2: function () {
    this.model.isNeedSubscribe = !1
  },
  _99: function () {
    this.model.isNeedSubscribe = !1
  },
  _H8: function (a) {
    this.model.setPlayerInTournamentStatusNotification(a);
    this.drawLateRegistrationInfo()
  },
  _ti: function (a, b) {
    b = b || {};
    a.resultCode != _Tf._dc.ResultCode._ph && !_Mf._L2._oa() ? this.view._if(a.text) : b.isInvited ? _Tf._N1.__i("", _Tf._41.$("_c6._c5").format(b.tournamentName), function () {
      this._Ln(b.tournamentId)
    }.bind(this)) : b.isSelectFromLobby ? this._k6(b) : (_Mf._20._wf.send(_Tf._0r._Tr._Wb, {
      tournamentId: this._d1()
    }), _Mf._20._wf.send(_Tf._0r._Tr._9r, {
      tournamentId: this._d1()
    }), _Mf._20._wf.send(_Tf._0r._Tr._Y2, {
      tournamentId: this._d1()
    }), _Mf._L2._oa() || _Mf._20._wf.send(_Tf._0r._Tr._ye, {
      playerId: _Mf._L2._d1()
    }))
  },
  _nb: function (a) {
    a.tournamentId == this._d1() && (this.model._Gh(a.state), this._10(), this._K5())
  },
  _Er: function () { },
  _Ib: function () { },
  _Jd: function (a) {
    this.view._12(a.seats, this._Dj())
  }
};
_Tf._a._Un.__b = function (a, b, c) {
  this.game = null;
  this.factory = new _Tf._E9.Factories._Un.PokerFactory(b);
  this.gameType = b;
  this.button = null;
  this.eventQueue = new _1j;
  this.tableId = a;
  this.currentGameStateNumber = 0;
  this.fps = {
    time: 0
  };
  this.lastStaticGameState = {
    hasButtons: !1,
    highCombinationMnemocode: "",
    lowCombinationMnemocode: "",
    clientCards: "",
    clientCallFundsInCurrentRound: 0,
    callFundsInCurrentRound: 0,
    minBetInCurrentRound: 0,
    blindsPosted: !1
  };
  this._ri();
  this._Ei = this._Ei.bind(this);
  (this.autoActionManager = c) && c._Im(this._n3);
  this.isResumingDetected = this.isLagDetected = !1;
  this.isStateInited = {
    "0": !1,
    1: !1,
    2: !1,
    3: !1,
    4: !1,
    5: !1,
    6: !1,
    7: !1,
    8: !1,
    9: !1,
    10: !1,
    11: !1
  }
};
_Tf._a._Un.__b.prototype = {
  autoActionManager: null,
  game: null,
  button: null,
  areas: null,
  eventQueue: null,
  currentGameStateNumber: 0,
  fps: {
    time: 0
  },
  isLagDetected: !1,
  isResumingDetected: !1,
  lastStaticGameState: null,
  isStateInited: {
    "0": !1,
    1: !1,
    2: !1,
    3: !1,
    4: !1,
    5: !1,
    6: !1,
    7: !1,
    8: !1,
    9: !1,
    10: !1,
    11: !1
  },
  clearInitedState: function () {
    for (var a in this.isStateInited) this.isStateInited[a] = !1
  },
  setBuyInAutoActions: function (a) {
    a && (this.autoActionManager._kc(_Tf._dc.AutoAction._v8, a.rebuy || !1), this.autoActionManager._kc(_Tf._dc.AutoAction._vp,
      a.topUp || !1))
  },
  _Fk: function () {
    return 0 < this.currentGameStateNumber
  },
  _Ga: function () {
    return !this.game ? !1 : this.game.isClientSitAtTable()
  },
  isClientSittingAction: function () {
    return !this.game ? !1 : this.game.isClientSitting()
  },
  _ap: function () {
    this.game && this.game._Xn();
    this.button && this.button._Q7();
    this.areas && this.areas._Q7();
    var a = _Mf._q1._5p(this.tableId);
    a && a._45(!1)
  },
  showPermanentActions: function () {
    this.button && this.button._a7()
  },
  _Kn: function (a) {
    if (_Mf._L2._oa()) _Mf._ks.emitAsync(_Ag._s4, arguments), this._jg();
    else {
      var b = _Mf._q1._5p(this.tableId);
      if (b) if (b._Z6()) b._Ao(a);
      else {
        var c = this;
        if (!1 != _Mf._ks.emit(_Ag._76, [b, function () {
          c._Kn(a)
        }])) {
          var d = b._M9(),
            b = b._Dj(),
            e = _Mf._L2._Z5(b),
            f = _Tf._Ek._29;
          _Tf._N1._zh("", _Tf._41.$("_e5._W6").format(f._ca(d, b), f._ca(e, b)))
        }
        this._jg()
      }
    }
  },
  _T1: function (a, b) {
    _Mf._ks.emit(_Ag._pp, arguments)
  },
  _w4: function () {
    return this.game ? this.game._w4() : null
  },
  _Um: function () {
    return this.game ? this.game._Um() : null
  },
  _X2: function () {
    this._ap()
  },
  _Zq: function () {
    var a = _Mf._q1._5p(this.tableId);
    a && a._d9()
  },
  _vr: function () {
    var a = _Mf._q1._5p(this.tableId);
    a && a._Rh()
  },
  _W3: function () {
    var a = _Mf._q1._5p(this.tableId);
    a && a._im()
  },
  _6o: function (a, b, c) {
    this.game.model.timer._ze(this.game.model.clientIndex);
    c = c || !1;
    this.button._Gd();
    var d = _Tf._41,
      e = _Tf._dc.PlayerAction,
      f = _Mf._q1._5p(this.tableId);
    !c && a === e._x2 && this.button._ra(e._B7) ? _Tf._N1.__i("", d.$("_l9._J1"), function () {
      f && f._89(e._x2, 0)
    }, function () {
      f && f._89(e._B7, 0)
    }, d.$("_j3._70"), d.$("_l9._p8")) : f && f._89(a, b);
    this.button._Hg()
  },
  _Km: function () {
    var a = _Tf._dc.AutoAction;
    this.game._h0 ? this.button._48([a._kh, a._D4]) : _Tf._dc.GameType._98(this.game.gameType) ? this.button._48([a._6d, a._kh, a._D4]) : this.button._48([a._mk, a.__f, a._kh, a._D4]);
    this.showPermanentActions();
    _Tf._N1.$(_Tf._0l._N1._6i.format(this.tableId) + _Tf._0l._N1._ii).hide();
    this.button._8p([a._Jr, a._x2, a._mi, a._fn, a._B7]);
    this.game._S6()
  },
  _Zi: function (a) {
    if (this.game.inGame) {
      var b = this.game.model;
      this.checkAllowAddMoney(a);
      if (!(255 === b.clientIndex || b.chairs[b.clientIndex] && b.chairs[b.clientIndex]._8s())) !b._qk && b.chairs[b.clientIndex] && b.chairs[b.clientIndex]._sd() ? (this._3c(_Tf._dc.GameEvent._R2), this._ie(), this.game._oh()) : b._qk && !b.chairs[b.clientIndex]._sd() && this.game._Sa(), b.chairs[b.clientIndex] && b.chairs[b.clientIndex]._y8() && this.button._C() && !b._qk ? (_Mf._ks.emit(_Ag._vo, [this.tableId]), this.lastStaticGameState.blindsPosted && _Tf._N1.$(_Tf._0l._N1._6i.format(this.tableId) + _Tf._0l._N1._ii).show()) : _Tf._N1.$(_Tf._0l._N1._6i.format(this.tableId) + _Tf._0l._N1._ii).hide(), a = this.autoActionManager, b = _Mf._q1._5p(this.tableId), a && b && a.isAutoActionSet(_Tf._dc.AutoAction._D4) && this._Z7() && b._M8()
    }
  },
  checkAllowAddMoney: function (a) {
    var b = this.game.model;
    if (b.clientIndex == a) if (255 != a && this._Tj(b.chairs[a], this.tableId) && b.chairs[a]._q6()) {
      var c = b.chairs[a]._Fg();
      this.checkAutoActionsToRebuy(a, c) ? _Tf._0l.canAddMoneyAtTableWhenNonZeroCash || this.game._I7() : ((0 === c || 0 < c && _Tf._0l.canAddMoneyAtTableWhenNonZeroCash) && this.game._0k(), 0 === c && _Mf._q1._y9() === this.tableId && !b.chairs[a]._Bm() && this.game._yi())
    } else this.game._I7()
  },
  checkAutoActionsToRebuy: function (a,
    b) {
    var c = _Mf._q1._5p(this.tableId),
      d = _Mf._L2._Z5(c._Dj());
    if (!c || this.game.model.chairs[a]._Bm()) return !1;
    if (this.autoActionManager.isBuyInAutoActionSet(_Tf._dc.AutoAction._vp) && b < c._de() && d >= c._M9()) return c._U2(a, b, !0), this._kk(), !0;
    return this.autoActionManager.isBuyInAutoActionSet(_Tf._dc.AutoAction._v8) && 0 === b ? (c._U2(a, b), this._kk(), !0) : !1
  },
  _35: function () {
    this.game && this.game.disAllowWaitList()
  },
  _Sl: function () {
    this.game && this.game.allowJoinWaitList()
  },
  _bo: function () {
    this.game && this.game.allowLeaveWaitList()
  },
  _Z7: function () {
    var a = this.game.model,
      b = a.clientIndex;
    return 255 === b || a.chairs[b]._8s() || a.chairs[b]._sd() ? !1 : a.chairs[b]._y8() ? a.table._te() : !0
  },
  _Tj: function (a, b) {
    var c = _Mf._q1._5p(this.tableId);
    return !c || c._d1() != b || a._8s() ? !1 : !a._y8() && !c._() && _Mf._L2._Z5(c._Dj()) >= c._M9() && c._K9(a._Fg())
  },
  _s8: function (a) {
    if (_Tf._Ek._29.isSupportingCanvas()) {
      var b = "Default" === _Mf._Ta._Iq && !this.isLagDetected && _h8._0l.FRAME_RATE >= _Tf._0l.FRAME_RATE;
      _h8._0l.FRAME_RATE = _h8._0l.FRAME_RATE || _Tf._0l.FRAME_RATE;
      this.next(this.currentGameStateNumber++,
        a, b)
    }
  },
  _n6: function () {
    var a = _Mf._q1._5p(this.tableId),
      b = a._j9();
    a && this.game.view._Ze(a._m5(), a._sj(), b ? b : _Mf._L2._Z5())
  },
  _jg: function () {
    this.game._Xn()
  },
  _kk: function () {
    this.game.view._fi(this.tableId);
    var a = this.game._w4();
    a && a._fo(!0)
  },
  _Bq: function () {
    this.game && this.game.view && this.game.view._i9(this.tableId)
  },
  _w5: function () { },
  _1l: function () {
    this.game._Xn()
  },
  _ie: function () {
    this.button._gh(_Tf._dc.AutoAction._D4, !1, this.autoActionManager)
  },
  _n3: function (a, b) {
    a = parseInt(a);
    if (a === _Tf._dc.AutoAction._D4 && b) {
      var c = _Mf._q1._5p(this.tableId);
      this._Z7() && c && c._M8()
    }
    b && this.button && this.button._Hg(a)
  },
  _O: function () { },
  _Ap: function () {
    this.button._Fb("", [])
  },
  _os: function () {
    _Tf._Ek._29.isSupportingCanvas()
  },
  _J5: function (a) {
    a = a || !1;
    this.isLagDetected != a && _Mf._ks.emit(_Ag._Cb, arguments);
    this.isLagDetected = a
  },
  _o5: function (a) {
    a = a || !1;
    if (this.isResumingDetected !== a) {
      var b = _Tf._N1,
        c = _Tf._0l._N1;
      a ? b.showInfoDialog(c._dr.substr(1) + this.tableId, c._Wg.substr(1) + this.tableId, _Tf._41.$("__6._t8"), !1, _Tf._0l._N1._ff._2l,
        c._6i.format(this.tableId)) : (b = $(c._6i.format(this.tableId) + c._dr + this.tableId), 0 < b.length && b.remove(), this.game._Oh());
      this.isResumingDetected = a
    }
  },
  _Ei: function () {
    if (this.game && this.eventQueue) {
      var a = (new Date).getTime(),
        b = this.currentGameStateNumber - this.eventQueue.lastStateExecuted,
        c = b <= _Tf._0l.MAX_GAME_STATES_DELAY;
      this._J5(!c);
      var d = !1;
      _Tf._Hc._Ml._Ge() || _Mf._Md.getVisiblePage(!0) != _Tf._0l._N1._ff._2l ? d = !0 : _Mf._q1._y9() != this.tableId && (d = !0);
      if (d ? 0 : c) this.loopStep(!0);
      else {
        this._o5(!d && b > _Tf._0l.MAX_RESUMING_GAME_STATES_DELAY);
        for (c = 0; c < b - 1; c++) this.loopStep(!1);
        this.loopStep(!this.isResumingDetected)
      }
      a = (new Date).getTime() - a;
      1 > a && (a = 1);
      var b = 500 / a << 1,
        e = _Tf._0l.FRAME_RATE,
        c = 500 / e << 1,
        e = b > e ? c : a || 1;
      e > 2 * c && (e = 2 * c);
      _h8._0l.FRAME_RATE = b;
      if ("undefined" != typeof Logger && 10 < Math.abs(this.fps.time - a)) this.fps.time = a;
      d ? setTimeout(this._Ei, 100) : setTimeout(this._Ei, e)
    }
  },
  loopStep: function (a) {
    this.game && this.eventQueue && (this.game._Ei(a), this.eventQueue.update())
  },
  _V1: function (a, b, c, d) {
    if (_Tf._Ek._29.isSupportingCanvas()) {
      if (this.tableId != a) this.eventQueue = new _1j;
      this.button = this.factory.createCommandsController(this.factory, a);
      this.areas = this.factory.createGameAreasController(this.factory, a);
      this.game = this.factory.createSceneController(this.factory, b, c, d, this);
      _Mf._ks.emit(_Ag._Q9, [this]);
      this.game._d6();
      this._Ei()
    }
  },
  _Fc: function () {
    this.eventQueue.destroy();
    _Mf._ks.emit(_Ag._f8, [this]);
    this.game && (this.game.model.timer._xd(), this.game._Xn(), this.game.unbind());
    this.button && this.button._Q7();
    this.areas && this.areas._Q7();
    this.areas = this.button = this.game = null
  },
  _ri: function () {
    this._jc = this._jc.bind(this);
    this._Rn = this._Rn.bind(this);
    this._S8 = this._S8.bind(this);
    this._w8 = this._w8.bind(this);
    this._6a = this._6a.bind(this);
    this._ob = this._ob.bind(this);
    this._N2 = this._N2.bind(this);
    this._un = this._un.bind(this);
    this._U5 = this._U5.bind(this);
    this._r8 = this._r8.bind(this);
    this._X7 = this._X7.bind(this);
    this._2h = this._2h.bind(this);
    this._ho = this._ho.bind(this);
    this._P = this._P.bind(this);
    this._qd = this._qd.bind(this);
    this._Po = this._Po.bind(this);
    this._zl = this._zl.bind(this);
    this._o3 = this._o3.bind(this);
    this._Cr = this._Cr.bind(this);
    this._W4 = this._W4.bind(this);
    this._hf = this._hf.bind(this);
    this._B2 = this._B2.bind(this);
    this._6o = this._6o.bind(this);
    this._X2 = this._X2.bind(this);
    this._Zq = this._Zq.bind(this);
    this._Zi = this._Zi.bind(this);
    this._Km = this._Km.bind(this);
    this._n3 = this._n3.bind(this);
    this._Ap = this._Ap.bind(this);
    this._ie = this._ie.bind(this);
    this._Z7 = this._Z7.bind(this);
    this._ap = this._ap.bind(this)
  },
  next: function (a, b, c) {
    var d = b.gameState.seats;
    d.forEach(function (b) {
      if ("undefined" != typeof b.id && 1 !== b.id) b.cardsArray = this.getCardsArray(b.cards), b.isAnimate = c, b.isInFirstGameState = 0 === a
    }.bind(this));
    var e = b.gameState.desk;
    e.cardsArray = this.getCardsArray(e.cards);
    var f = b.gameState.time,
      g = b.gameState.pots,
      h = b.gameState.moves,
      j = b.gameState.seatState;
    this.eventQueue.push(new _J0("round", h, this._B2, 1));
    if (0 < a) for (var k = b.events, l = 0; l < k.length; l++) this._h1(k[l], d, e, g, c);
    this.eventQueue.push(new _J0("move", h, this._hf, 1));
    this.eventQueue.push(new _J0("players",
      d, this._o3, 1));
    this.eventQueue.push(new _J0("seat-state", j, this._Cr, 1));
    e.tableState = b.gameState.tableState;
    this.eventQueue.push(new _J0("desk", e, this._W4, 1));
    this.eventQueue.push(new _J0("pot-chips", g, this._qd, 1));
    this.eventQueue.push(new _J0("timer", f, this._Po, 1));
    this.eventQueue.push(new _J0("button", {
      actionsAndButtons: b.gameState.availableActions,
      funds: b.gameState.funds,
      pot: e.pot
    }, this._zl, 1));
    this.eventQueue.push(new _J0("number", a, this._jc, 1))
  },
  _h1: function (a, b, c, d, e) {
    this.eventQueue.push(new _J0("timer",
      null, this._Rn, 1));
    var f = _Tf._dc.AnimationType;
    switch (a.type) {
      case f._Gf:
        if (!e) break;
        a.cardsArray = _Tf._dc._W2._C8(b[a.seatIndex].cardsArray.shift());
        this.eventQueue.push(new _J0(a.type, a, this._S8, 3));
        break;
      case f._Ch:
        if (!e) break;
        this.eventQueue.push(new _J0(a.type, c.cardsArray, this._w8, 3));
        break;
      case f._wq:
        if (!e) break;
        this.eventQueue.push(new _J0(a.type, a, this._6a, 5));
        this.eventQueue.push(new _J0("pot-chips", d, this._qd, 1));
        break;
      case f._tm:
        if (!e) break;
        this.eventQueue.push(new _J0(a.type, a, this._ob,
          2));
        break;
      case f._hg:
        this.eventQueue.push(new _J0(a.type, a, this._N2, 1));
        break;
      case f._0:
        this.eventQueue.push(new _J0(a.type, a, this._un, 1));
        break;
      case f._t8:
        if (!e) break;
        this.eventQueue.push(new _J0(a.type, a, this._U5, 3));
        break;
      case f._Q3:
        a.isAnimate = e;
        this.eventQueue.push(new _J0(a.type, a, this._r8, 3));
        break;
      case f._Yh:
        c = 1;
        if (a.action === _Tf._dc.PlayerAction._x2 || a.action === _Tf._dc.PlayerAction._3b) c = 5;
        a.cardsArray = b[a.seatIndex].cardsArray;
        a.isAnimate = e;
        this.eventQueue.push(new _J0(a.type, a, this._X7,
          c));
        break;
      case f._X9:
        this.eventQueue.push(new _J0(a.type, a, this._2h, e ? _h8._0l.GameStateAnimationEventsDelay[f._X9] || 10 : 1));
        break;
      case f._F9:
        this.eventQueue.push(new _J0(a.type, a, this._ho, 1));
        break;
      case f._L0:
        this.eventQueue.push(new _J0(a.type, a, this._P, 1))
    }
  },
  _jc: function (a) {
    0 < a || _Mf._ks.emit(_Ag._Tk, [this.tableId])
  },
  _Rn: function () {
    this.game.model.timer._P1()
  },
  _ho: function (a) {
    this.game.model.tableMessage._40({
      text: a.tableMessage,
      type: _Tf._dc.TableMessageType._l0
    })
  },
  _P: function (a) {
    var b = this.game.model.chairs;
    b.length - 1 < a.seatIndex || this.game.model.tableMessage._40({
      text: b[a.seatIndex]._b4(),
      type: _Tf._dc.TableMessageType._L0
    })
  },
  _S8: function (a) {
    var b = this.game.model;
    this._3c(_Tf._dc.GameEvent._qs);
    b.chairs[a.seatIndex]._j8(b.bank._L9(a.cardsArray), 0)
  },
  _w8: function (a) {
    var b = this.game.model,
      c = b.table._Jn();
    this._3c(_Tf._dc.GameEvent._qs);
    b.table._0d(b.bank._Fp(_Tf._dc._W2._C8(a[c])), c, !0, a.length)
  },
  _6a: function () {
    var a = this.game.model;
    this._3c(_Tf._dc.GameEvent._sm);
    a.table._Ve()
  },
  _ob: function (a) {
    var b = this.game.model;
    this._3c(_Tf._dc.GameEvent._sm);
    a = b.chairs[a.seatIndex]._j6(a.amount, !0);
    b.table._i6(a)
  },
  _N2: function (a) {
    this.game.model.dealerButton._7d(a.seatIndex)
  },
  _un: function (a) {
    var b = this.game.model;
    255 != b.currentActiveChair && b.chairs[b.currentActiveChair]._hh();
    b.currentActiveChair = a.seatIndex;
    255 != b.currentActiveChair && b.chairs[b.currentActiveChair]._ss()
  },
  _U5: function (a) {
    var b = this.game.model;
    this._3c(_Tf._dc.GameEvent._sm);
    var c = b.table._C9(a.sidePot, a.amount);
    b.chairs[a.seatIndex]._Db(c)
  },
  _r8: function (a) {
    var b = this.game.model;
    this._3c(_Tf._dc.GameEvent._sm);
    var c = b.table._C9(a.sidePot, a.amount);
    b.bank._Db(c, a.isAnimate)
  },
  _X7: function (a) {
    var b = this.game.model;
    this._Hi(a.action);
    b.chairs[a.seatIndex]._F({
      action: a.action,
      amount: a.amount
    });
    a.action === _Tf._dc.PlayerAction._x2 && (a.isAnimate || b.chairs[a.seatIndex]._q6()) && b.bank._C7(b.chairs[a.seatIndex]._sh());
    if (a.isAnimate && a.action === _Tf._dc.PlayerAction._3b) for (var b = [], a = a.cardsArray, c = a.length, d = 0; d < c; d++) "-1" != a[d] && b.push(_Tf._dc._W2._C8(parseInt(a[d])))
  },
  _2h: function (a) {
    var b = this.game.model;
    b.timer._P1();
    b.chairs[a.seatIndex]._q6() && this._3c(_Tf._dc.GameEvent._Yd);
    b.chairs[a.seatIndex]._S(a.amount)
  },
  _qd: function (a) {
    var b = this.game.model;
    if (0 == a.length) b.table._K7();
    else {
      var c = [];
      a.forEach(function (a) {
        c.push(a.value)
      });
      b.table._ak(c);
      _Mf._ks.emit(_Ag._lj, [this.tableId, c])
    }
  },
  _Po: function (a) {
    var b = this.game.model;
    0 === a.timePerMove ? b.timer._P1() : b.timer._bc(b.currentActiveChair, a.timePerMove, a.timeRemains, 255 != b.clientIndex && b.clientIndex === b.currentActiveChair);
    a.isBroken ? b.timer._G5(a.brokenTime) : b.timer._xd()
  },
  checkButtonsInStaticGameState: function (a) {
    if (a !== this.lastStaticGameState.hasButtons) this.lastStaticGameState.hasButtons = a, _Mf._ks.emit(_Ag._e7, [this.tableId, a])
  },
  checkCallFundsInStaticGameState: function (a) {
    if (a !== this.lastStaticGameState.clientCallFundsInCurrentRound) this.checkAvailableCallAutoAction(a, this.lastStaticGameState.clientCallFundsInCurrentRound), this.lastStaticGameState.clientCallFundsInCurrentRound = a, _Mf._ks.emit(_Ag._O8, [this.tableId,
      a])
  },
  checkAvailableCallAutoAction: function () { },
  solveCurrentPossibleCallAutoActions: function (a) {
    var b = this._w4();
    this.lastStaticGameState.minBetInCurrentRound = a.virtualMaxBet;
    this.checkAvailableCallAutoAction(a.callFunds, this.lastStaticGameState.callFundsInCurrentRound);
    this.lastStaticGameState.callFundsInCurrentRound = a.callFunds;
    if (!b || !this.lastStaticGameState.blindsPosted || !b._y8() || this.game.model.table.isShowStateAction()) return Number.NEGATIVE_INFINITY;
    var c = b._Fg();
    if (!c) return Number.NEGATIVE_INFINITY;
    b = b._4i();
    a = a.virtualMaxBet - b;
    return a < c ? a : c
  },
  _zl: function (a) {
    if (255 === this.game.model.clientIndex) this.checkCallFundsInStaticGameState(0);
    else {
      var b = this.solveCurrentPossibleCallAutoActions(a.funds);
      0 < a.actionsAndButtons.length ? (this.checkAvailableCallAutoAction(a.funds.virtualMaxBet, this.lastStaticGameState.minBetInCurrentRound), this.checkCallFundsInStaticGameState(Number.NEGATIVE_INFINITY)) : this.checkCallFundsInStaticGameState(b);
      var c = "",
        d = this.autoActionManager;
      this.checkButtonsInStaticGameState(0 < a.actionsAndButtons.length);
      if (0 < a.actionsAndButtons.length) {
        var c = c + this.game._l3(),
          e = [],
          f = -1;
        a.actionsAndButtons.forEach(function (a) {
          if (d.isPlayerActionAuto(a.type)) f = a.type;
          e.push(a.type);
          c += "#" + a.type
        });
        if (255 !== this.game.model.clientIndex) if (-1 != f && d.isPlayerActionAuto(f)) this.button._l4() != c && (this._6o(f, 0, !0), this.button._oc(c));
        else {
          a.funds.tableId = this.tableId;
          a.funds.amountForCall = b;
          b = this.game._w4();
          a.funds.allin = b ? b._Fg() : 0;
          b = this.calculateRaisePot(a.pot, a.funds.callFunds);
          a.funds.currentPot = b.totalPot;
          a.funds.clientBetBeforeRaise = b.clientBetBeforeRaise;
          if (b = _Mf._q1._5p(this.tableId)) a.funds.baseStake = b._I4();
          this.button._Fb(c, e, a.funds, this._6o)
        }
      } else this.button._Fb(c, [])
    }
  },
  calculateRaisePot: function (a, b) {
    var c, d = this.game.model.chairs,
      e = this.game.model.clientIndex;
    c = a + 2 * b;
    for (var f = 0; f < d.length; f++) c += d[f]._4i();
    return {
      totalPot: c,
      clientBetBeforeRaise: d[e]._4i()
    }
  },
  checkClientCardsInStaticGameState: function (a, b) {
    if (this.lastStaticGameState.clientCards !== a) this.lastStaticGameState.clientCards = a, _Mf._ks.emit(_Ag.__c, [this.tableId, b])
  },
  _o3: function (a) {
    for (var b = this.game.model, c = a.length, d, e, f = !1, g = _Mf._L2._d1(), h = !1, j = !1, k = 0; k < c; k++) if (d = a[k], e = b.chairs[k], "undefined" == typeof d.id) e._8s() || e._4p();
    else if (1 === d.id) !e._8s() && e._q6() && this._Zi(k);
    else if ("*RESERVED*" !== d.name) {
      h = d.id === g;
      d.name = _Tf._Ek._29.getPlayerDisplayName(d.name, d.displayName);
      if (e._8s()) e._a2(d, h), h && this._Km(k);
      else {
        var l = e._Sq(),
          f = e._Kc(d, h);
        h && (l != e._Sq() && this._Km(k), f && this._Zi(k))
      }
      f = [];
      if ("" == d.cards) e._Ql();
      else {
        d.cardsArray = d.cards.split(";");
        for (var h = d.cardsArray.length, l = !1, j = j || 1 < h, n = 0; n < h; n++) f.push(_Tf._dc._W2._C8(parseInt(d.cardsArray[n]))), "-1" != d.cardsArray[n] && (l = !0);
        l ? e._x5(f, d.isAnimate) : (e.model.holders[0]._Ql(e._q6()), e._Ug(h))
      }
      e._q6() && this.checkClientCardsInStaticGameState(d.cards, f);
      0 != d.bet ? b.table._Yl(e._j6(d.bet), !1) : b.table._iq(k)
    }
    this.lastStaticGameState.blindsPosted = this.lastStaticGameState.blindsPosted || j
  },
  checkHighCardsInStaticGameState: function (a, b) {
    if (this.lastStaticGameState.highCombinationMnemocode !== b) this.lastStaticGameState.highCombinationMnemocode = b, _Mf._ks.emit(_Ag._Qk, [this.tableId, a, b])
  },
  checkLowCardsInStaticGameState: function (a, b) {
    if (this.lastStaticGameState.lowCombinationMnemocode !== b) this.lastStaticGameState.lowCombinationMnemocode = b, _Mf._ks.emit(_Ag._Qk, [this.tableId, a, b])
  },
  _Cr: function (a) {
    this.checkHighCardsInStaticGameState(a.highCombination, a.highCombinationMnemocode);
    this.checkLowCardsInStaticGameState(a.lowCombination, a.lowCombinationMnemocode)
  },
  _W4: function (a) {
    var b = this.game.model;
    if ("" == a.cards) b.table._Cn();
    else {
      var c = a.cardsArray.length;
      if (c != b.table._Ec()) {
        for (var d = [], e = 0; e < c; e++) d.push(_Tf._dc._W2._C8(parseInt(a.cardsArray[e])));
        b.table._Ug(d)
      }
    }
    b.table._s2(a.tableState);
    b.bank._Cj(a.rake)
  },
  _hf: function (a) {
    var b = this.game.model,
      c = a.activeIndex,
      d = a.clientIndex;
    255 != b.clientIndex && 255 === d && this._ap();
    b.setClientIndex(d);
    255 != b.currentActiveChair && b.chairs[b.currentActiveChair]._hh();
    b.currentActiveChair = c;
    255 != b.currentActiveChair && b.chairs[b.currentActiveChair]._ss();
    b.dealerButton._7d(a.dealerIndex);
    b.currentActiveChair != b.clientIndex && !this.button._C() && this._Ap()
  },
  _B2: function (a) {
    if (a = this.game.model._sg(a.round)) this.lastStaticGameState.blindsPosted = !1, this.button._Hg();
    a && !this.button._C() && this._Ap();
    return a
  },
  _Hi: function (a) {
    _Mf._ks.emit(_Ag._gq, [a, this.tableId])
  },
  _3c: function (a) {
    _Mf._ks.emit(_Ag._Mg, [a, this.tableId])
  },
  getCardsArray: function (a) {
    var b = [];
    "" !== a && (b = a.split(";"));
    return b
  }
};
_Tf._a._Un.BlackJackGameManager = function () {
  _Tf._a._Un.BlackJackGameManager.superclass.apply(this, arguments);
  this.factory = new _Tf._E9.Factories._Un.BlackJackFactory(this.gameType)
};
extend(_Tf._a._Un.BlackJackGameManager, _Tf._a._Un.__b);
_Tf._a._Un.BlackJackGameManager.prototype.next = function (a, b, c) {
  var d, e = b.gameState.seats,
    f = e.length,
    g = 0,
    h = 0,
    j = _Mf._L2._d1();
  this.needBuyIn = !0;
  for (d = 0; d < f; d++) {
    if ("undefined" == typeof e[d].id || 1 === e[d].id) return;
    e[d].cards = [];
    e[d].bets = [];
    e[d].ranks = [];
    for (k = 1; k <= _Tf._0l.maxSplit; k++) "undefined" !== typeof e[d]["cards" + k] ? (e[d].cards.push(this.getCardsArray(e[d]["cards" + k])), e[d].bets.push(e[d]["bet" + k]), e[d].ranks.push(e[d]["rank" + k])) : (e[d].cards.push([]), e[d].bets.push(0), e[d].ranks.push(0));
    e[d].isAnimate = c;
    if (e[d].id == j && (g = e[d].cash, h = e[d].bets[e[d].splitIndex - 1], 0 < g || 0 < h)) this.needBuyIn = !1
  }
  f = b.gameState.desk;
  f.cardsArray = this.getCardsArray(f.cards);
  f.cardsInShoe = b.gameState.cardsInShoe;
  f.tableState = b.gameState.tableState;
  this.game && (this.game.model._sg(0), this.game.model.table._s2(f.tableState), this.changeActivePlayer(b.gameState));
  if (this.game && 0 < a) {
    var k, j = [],
      l = b.events,
      n;
    for (d = 0; d < l.length; d++) {
      if (l[d].type == _Tf._dc.AnimationType._K0) k = l[d].seatIndex, n = l[d].betIndex, j[k] || (j[k] = []), j[k][n] || (j[k][n] = []), j[k][n].push(e[k].cards[n].pop());
      if (l[d].type == _Tf._dc.AnimationType._M3) {
        if (!e[l[d].seatIndex].winBets) e[l[d].seatIndex].winBets = {};
        e[l[d].seatIndex].winBets[l[d].betIndex] = !0
      }
    }
    d = this.game.model;
    n = d.chairs;
    var m = d.table;
    for (d = 0; d < e.length; d++) {
      var o = e[d],
        p = o.splitActive ? o.splitIndex - 1 : 0;
      o.cards = j[d] ? j[d] : [];
      var q = 0,
        r = [0, 0, 0, 0];
      for (k = 0; k < r.length; k++) r[k] = q, p !== k && (o["cards" + (k + 1)] || o["bet" + (k + 1)]) && q++;
      m.setActiveBetAction(d, p, r, o.splitActive, o.splitIndex - 1, n[d].view.realNumber);
      n[d].setActiveBetAction(p,
        r, o.splitActive, o.splitIndex - 1)
    }
    for (d = 0; d < l.length; d++) this._h1(l[d], e, f, c)
  }
  this.eventQueue.push(new _J0("players", e, this._o3, 1));
  this.eventQueue.push(new _J0("desk", f, this._W4, 1));
  this.eventQueue.push(new _J0("timer", b.gameState, this._Po, 1));
  this.eventQueue.push(new _J0("button", {
    actionsAndButtons: b.gameState.availableActions,
    funds: {},
    pot: f.pot,
    clientCash: g,
    clientBet: h,
    minBetAmount: b.gameState.minBetAmount,
    maxBetAmount: b.gameState.maxBetAmount
  }, this._zl, 1));
  this.eventQueue.push(new _J0("number",
    a, this._jc, 1));
  (b.gameState.tableState == _Tf._dc.BlackJackTableState._K2 || b.gameState.tableState == _Tf._dc.BlackJackTableState._I8 || b.gameState.tableState == _Tf._dc.BlackJackTableState._Ae) && this.clearInitedState()
};
_Tf._a._Un.BlackJackGameManager.prototype._ri = function () {
  this.animationEventDealerActedHandler = this.animationEventDealerActedHandler.bind(this);
  this.animationEventPushHandler = this.animationEventPushHandler.bind(this);
  this.animationEventSplittedHandler = this.animationEventSplittedHandler.bind(this);
  this.animationEventPlayerBustedHandler = this.animationEventPlayerBustedHandler.bind(this);
  this.animationEventDeckShuffledHandler = this.animationEventDeckShuffledHandler.bind(this);
  this.animationEventAfterInsuranceHandler = this.animationEventAfterInsuranceHandler.bind(this);
  _Tf._a._Un.BlackJackGameManager.superclass.prototype._ri.call(this)
};
_Tf._a._Un.BlackJackGameManager.prototype.changeActivePlayer = function (a) {
  var b = this.game.model;
  255 != b.currentActiveChair && b.chairs[b.currentActiveChair]._hh();
  b.currentActiveChair = a.activePlayerIndex;
  255 != b.currentActiveChair && b.chairs[b.currentActiveChair]._ss()
};
_Tf._a._Un.BlackJackGameManager.prototype._Po = function (a) {
  var b = this.game.model;
  0 === a.timePerMove ? b.timer._P1() : b.timer._bc(b.currentActiveChair, a.timePerMove, a.timeRemains, 255 != b.clientIndex && b.clientIndex === b.currentActiveChair)
};
_Tf._a._Un.BlackJackGameManager.prototype._o3 = function (a) {
  for (var b = this.game.model, c = a.length, d, e, f = !1, g = _Mf._L2._d1(), h = !1, j = 0; j < c; j++) if (d = a[j], e = b.chairs[j], e._q6() && d.id !== g && this.game._Xn(), d.id) {
    h = d.id === g;
    d.name = _Tf._Ek._29.getPlayerDisplayName(d.nick, d.name);
    if (e._8s()) e._a2(d, h), h && (this.game.model.setClientIndex(j), this._Km(j));
    else {
      var k = e._Sq(),
        f = e._Kc(d, h);
      h && (k != e._Sq() && (this.game.model.setClientIndex(j), this._Km(j)), f && this._Zi(j))
    }
    d.cards = [];
    for (f = 1; f <= _Tf._0l.maxSplit; f++) "undefined" !== typeof d["cards" + f] ? d.cards.push(this.getCardsArray(d["cards" + f])) : d.cards.push([]);
    for (f = 0; f < d.cards.length; f++) if (k = d.cards[f].length, 0 == k) e._Ql(f);
    else {
      for (var l = [], n = !1, h = 0; h < k; h++) l.push(_Tf._dc._W2._C8(parseInt(d.cards[f][h]))), "-1" !== d.cards[f][h] && (n = !0);
      n ? e._x5(l, d.isAnimate, f) : (e.model.holders[f]._Ql(e._q6()), e._Ug(k, f));
      e._q6() && this.checkClientCardsInStaticGameState(d.cards[f], l)
    }
    for (f = h = 0; f < d.bets.length; f++) {
      if (!d.winBets || !d.winBets[f]) 0 < d.bets[f] ? (h += d.bets[f], b.table._Yl(e._j6(d.bets[f], !1, f), !1, f)) : b.table._iq(j, f);
      if (!d.winBets || !d.winBets[-1]) 0 < d.insuranceAmount ? (h += d.insuranceAmount, b.table.model.insuranceChips[j] || (k = e.insuranceAction(d.insuranceAmount, d.isAnimate && !b.table.hasInsuranceChip(j)), b.table.takeInsuranceChipAction(k, d.isAnimate))) : b.table.insuranceToDealerAction(j, d.isAnimate)
    }
    e.setChipsAmount(h);
    for (f = 0; f < d.ranks.length; f++) 0 !== d.ranks[f] ? e.setRankAction(d.ranks[f], f) : e.clearRankAction(f)
  } else if (!e._8s()) {
    e._4p();
    for (f = 0; f < d.bets.length; f++) b.table._iq(j, f), b.table.giveInsuranceChipAction(j)
  }
};
_Tf._a._Un.BlackJackGameManager.prototype._zl = function (a) {
  var b = !1;
  if (0 < a.actionsAndButtons.length && (a.actionsAndButtons.forEach(function (a) {
    a.type == _Tf._dc.PlayerAction._v7 && (b = !0)
  }), this.game.model.table.model.state == _Tf._dc.BlackJackTableState._De)) if (b) {
    if (this.isStateInited[_Tf._dc.BlackJackTableState._84]) return;
    this.isStateInited[_Tf._dc.BlackJackTableState._84] = !0
  } else {
      if (this.isStateInited[_Tf._dc.BlackJackTableState._De]) return;
      this.isStateInited[_Tf._dc.BlackJackTableState._De] = !0;
      this.isStateInited[_Tf._dc.BlackJackTableState._84] = !1
    }
  _Mf._q1._5p(this.tableId);
  var c = a.maxBetAmount,
    d = a.minBetAmount;
  a.funds.tableId = this.tableId;
  a.funds.clientBetBeforeRaise = 0;
  a.funds.step = 100 > d ? d : 100;
  if (c > d) a.funds.minRaise = d, a.funds.maxRaise = c;
  else if (d == c) a.funds.minRaise = d, a.funds.maxRaise = d;
  var e = "";
  this.checkButtonsInStaticGameState(0 < a.actionsAndButtons.length);
  this.button._Q7();
  if (0 < a.actionsAndButtons.length) {
    var e = e + this.game._l3(),
      f = [];
    a.actionsAndButtons.forEach(function (a) {
      f.push(a.type);
      e += "#" + a.type
    });
    this.button._Fb(e, f, a.funds,
      this._6o)
  } else this.button._Fb(e, [])
};
_Tf._a._Un.BlackJackGameManager.prototype._Km = function () {
  this.showPermanentActions();
  _Tf._N1.$(_Tf._0l._N1._6i.format(this.tableId) + _Tf._0l._N1._ii).hide();
  this.game._S6()
};
_Tf._a._Un.BlackJackGameManager.prototype._h1 = function (a, b, c, d) {
  var e = _Tf._dc.AnimationType;
  switch (a.type) {
    case e._K0:
      if (!d) break;
      a.card = _Tf._dc._W2._C8(b[a.seatIndex].cards[a.betIndex].pop());
      this.eventQueue.push(new _J0(a.type, a, this._S8, 5));
      break;
    case e._15:
      if (!d) break;
      a.splitIndex = b[a.seatIndex].splitActive ? b[a.seatIndex].splitIndex - 1 : 0;
      a.splitActive = b[a.seatIndex].splitActive;
      this.eventQueue.push(new _J0(a.type, a, this._ob, 2));
      break;
    case e._M3:
      a.isAnimate = d;
      this.eventQueue.push(new _J0(a.type,
        a, this._2h, 1));
      break;
    case e._Yh:
      a.cardsArray = b[a.seatIndex].cards;
      a.isAnimate = d;
      a.amount = b[a.seatIndex].b;
      this.eventQueue.push(new _J0(a.type, a, this._X7, 1));
      break;
    case e._ef:
      a.isAnimate = d;
      a.cardsArray = c.cardsArray;
      this.eventQueue.push(new _J0(a.type, a, this.animationEventDealerActedHandler, 3));
      break;
    case e._t7:
      a.isAnimate = d;
      this.eventQueue.push(new _J0(a.type, a, this.animationEventPlayerBustedHandler, 3));
      break;
    case e._ac:
      a.isAnimate = d;
      a.cardsArray = c.cardsArray;
      this.eventQueue.push(new _J0(a.type, a,
        this._w8, 3));
      break;
    case e._P5:
      a.isAnimate = d;
      this.eventQueue.push(new _J0(a.type, a, this.animationEventPushHandler, 1));
      break;
    case e._Cf:
      a.isAnimate = d;
      this.eventQueue.push(new _J0(a.type, a, this.animationEventSplittedHandler, 2));
      break;
    case e.__o:
      a.isAnimate = d;
      this.eventQueue.push(new _J0(a.type, a, this.animationEventDeckShuffledHandler, 3));
      break;
    case e._G2:
      a.isAnimate = d, this.eventQueue.push(new _J0(a.type, a, this.animationEventAfterInsuranceHandler, 0))
  }
};
_Tf._a._Un.BlackJackGameManager.prototype._S8 = function (a) {
  var b = this.game.model;
  this._3c(_Tf._dc.GameEvent._qs);
  b.chairs[a.seatIndex]._j8(b.bank._L9(a.card), a.betIndex, !0)
};
_Tf._a._Un.BlackJackGameManager.prototype._w8 = function (a) {
  var b = !1,
    c = this.game.model,
    d = c.table._Jn(),
    e = a.cardsArray;
  this._3c(_Tf._dc.GameEvent._qs);
  "-1" == e[d] ? c.table.setCloseCardIndex(d) : b = !0;
  c.table._0d(c.bank._Fp(_Tf._dc._W2._C8(e[d])), d, b, e.length, a.isAnimate)
};
_Tf._a._Un.BlackJackGameManager.prototype._X7 = function (a) {
  var b = this.game.model;
  this._Hi(a.action);
  b.chairs[a.seatIndex]._F({
    action: a.action,
    amount: a.amount
  })
};
_Tf._a._Un.BlackJackGameManager.prototype._W4 = function (a) {
  var b = this.game.model;
  if ("" == a.cards) b.table._Cn();
  else {
    var c = a.cardsArray.length;
    if (c != b.table._Ec()) {
      for (var d = [], e = 0; e < c; e++) "-1" == a.cardsArray[e] && b.table.setCloseCardIndex(e), d.push(_Tf._dc._W2._C8(parseInt(a.cardsArray[e])));
      b.table._Ug(d)
    } else b.table.updateCardsPositions()
  }
  b.rank.setRankAction(a.rank);
  b.cardShoe.setCardsInShoeAction(a.cardsInShoe);
  if (b.table.model.state == _Tf._dc.BlackJackTableState._K2) {
    c = b.chairs.length;
    for (a = 0; a < c; a++) b.chairs[a]._r2()
  }
};
_Tf._a._Un.BlackJackGameManager.prototype.animationEventDealerActedHandler = function (a) {
  var b = this.game.model,
    c = b.table.model.cards,
    d = b.table.takeCloseCard(),
    e = a.cardsArray;
  d && b.table.turnCardInCenterAction(_Tf._dc._W2._C8(e[d]), d, c.length, a.isAnimate)
};
_Tf._a._Un.BlackJackGameManager.prototype._ob = function (a) {
  var b, c = this.game.model;
  b = a.splitIndex;
  var d = a.splitActive;
  this._3c(_Tf._dc.GameEvent._sm);
  b = c.chairs[a.seatIndex]._j6(a.amount, !0, a.betIndex, b, d);
  c.table._i6(b, a.betIndex)
};
_Tf._a._Un.BlackJackGameManager.prototype._2h = function (a) {
  var b, c, d = this.game.model,
    e = d.chairs[a.seatIndex];
  d.timer._P1();
  d.chairs[a.seatIndex]._q6() && this._3c(_Tf._dc.GameEvent._Yd);
  d.chairs[a.seatIndex]._S(a.amount);
  if (a.isAnimate) {
    if (-1 == a.betIndex) {
      b = 0;
      for (c = e.model.ranks.length; b < c; b++) d.table.betToDealerAction(a.seatIndex, b);
      b = d.table.getInsuranceChip(a.seatIndex)
    } else b = d.table.getBetChip(a.seatIndex, a.betIndex);
    c = a.amount - b._xi();
    d.table.dealerToBetAction(b, c, a.amount, -1 !== a.betIndex ? a.betIndex : 255, d.chairs[a.seatIndex].realNumber, e.takeBetToPlayerAction.bind(e))
  }
};
_Tf._a._Un.BlackJackGameManager.prototype.animationEventPushHandler = function (a) {
  this.game.model.chairs[a.seatIndex].playerPushAction(a.betIndex)
};
_Tf._a._Un.BlackJackGameManager.prototype.animationEventSplittedHandler = function (a) {
  this.game.model.chairs[a.seatIndex].splitAction(a.betIndex, a.betIndex2)
};
_Tf._a._Un.BlackJackGameManager.prototype.animationEventDeckShuffledHandler = function () {
  this._3c(_Tf._dc.GameEvent._be)
};
_Tf._a._Un.BlackJackGameManager.prototype.animationEventAfterInsuranceHandler = function () {
  this.game.model.table.afterInsuranceAction()
};
_Tf._a._Un.BlackJackGameManager.prototype.animationEventPlayerBustedHandler = function (a) {
  var b = this.game.model;
  b.chairs[a.seatIndex].playerBustedAction(a.betIndex);
  a.isAnimate && b.table.betToDealerAction(a.seatIndex, a.betIndex)
};
_Tf._a._Un.BlackJackGameManager.prototype.checkAllowAddMoney = function (a) {
  var b = this.game.model,
    c = b.chairs[a],
    d = _Mf._q1._5p(this.tableId).model.info.minBet;
  if (!(b.clientIndex != a || c._8s()) && this.needBuyIn && _Tf._0l.canAddMoneyAtTableWhenNonZeroCash) b = c._Fg(), b < d && !c._y8() && (this.checkAutoActionsToRebuy(a, b) || this.game._yi())
};
_Tf._a._Un.BlackJackGameManager.prototype._6o = function (a, b) {
  this.game.model.timer._ze(this.game.model.clientIndex);
  this.button._Gd();
  var c = _Mf._q1._5p(this.tableId);
  c && c._89(a, b);
  this.button._Hg()
};
_Tf._a._Un.BlackJackGameManager.prototype._n6 = function () {
  var a = _Mf._q1._5p(this.tableId),
    b = a._j9();
  a && this.game.view._Ze(a._m5(), a.model.info.minBet, b ? b : _Mf._L2._Z5())
};
_Tf._a._Un.BaccaratGameManager = function () {
  _Tf._a._Un.BaccaratGameManager.superclass.apply(this, arguments);
  this.factory = new _Tf._E9.Factories._Un.BaccaratFactory(this.gameType);
  var a = _Tf._dc.PlayerAction;
  this.betsIndexes = [a._dp, a._c1, a._32, a._c4, a._Y7]
};
extend(_Tf._a._Un.BaccaratGameManager, _Tf._a._Un.__b);
_Tf._a._Un.BaccaratGameManager.prototype.next = function (a, b, c) {
  var d, e, f = b.gameState.seats,
    g = f.length,
    h = 0,
    j = 0,
    k = _Mf._L2._d1(),
    l = b.gameState,
    n = _Tf._dc.PlayerAction,
    m = _Mf._q1._5p(this.tableId);
  this.needBuyIn = !0;
  for (d = 0; d < g; d++) {
    if ("undefined" == typeof f[d].id || 1 === f[d].id) return;
    f[d].bet = 0;
    f[d].bets = [];
    f[d].bets[this.getBetIndex(n._dp)] = f[d].playerBetAmount;
    f[d].bets[this.getBetIndex(n._c1)] = f[d].dealerBetAmount;
    f[d].bets[this.getBetIndex(n._32)] = f[d].tieBetAmount;
    f[d].bets[this.getBetIndex(n._c4)] = f[d].dealerPairBetAmount;
    f[d].bets[this.getBetIndex(n._Y7)] = f[d].playerPairBetAmount;
    for (e = 0; e < f[d].bets.length; e++) f[d].bet += f[d].bets[e];
    f[d].isAnimate = c;
    if (f[d].id == k && (h = f[d].cash, j = f[d].bet, h >= m.model.info.minBet || 0 < j)) this.needBuyIn = !1
  }
  e = this.getCardsArray(l.playerCards);
  g = this.getCardsArray(l.dealerCards);
  k = {
    newPlayerCards: [],
    newDealerCards: [],
    playerRank: l.playerRank,
    dealerRank: l.dealerRank,
    tableState: b.gameState.tableState,
    cardsInShoe: b.gameState.cardsInShoe
  };
  this.game && (this.game.model._sg(0), this.game.model.table._s2(k.tableState));
  if (this.game && 0 < a) {
    n = b.events;
    for (d = 0; d < n.length; d++) n[d].type == _Tf._dc.AnimationType._Gf && k.newPlayerCards.unshift(e.pop()), n[d].type == _Tf._dc.AnimationType._ac && k.newDealerCards.unshift(g.pop());
    for (d = 0; d < n.length; d++) this._h1(n[d], f, k, c)
  }
  this.eventQueue.push(new _J0("state", k.tableState, this.animationEventStateHandler, 1));
  this.eventQueue.push(new _J0("players", f, this.animationEventPlayersHandler, 1));
  k.playerCards = this.getCardsArray(l.playerCards);
  k.dealerCards = this.getCardsArray(l.dealerCards);
  this.eventQueue.push(new _J0("desk", k, this._W4, 1));
  this.eventQueue.push(new _J0("timer", b.gameState, this._Po, 1));
  this.eventQueue.push(new _J0("button", {
    actionsAndButtons: b.gameState.availableActions,
    funds: {},
    pot: k.pot,
    clientCash: h,
    clientBet: j,
    minBetAmount: b.gameState.minBetAmount,
    maxBetAmount: b.gameState.maxBetAmount
  }, this._zl, 1));
  this.eventQueue.push(new _J0("number", a, this._jc, 1));
  (b.gameState.tableState == _Tf._dc.BaccaratTableState._K2 || b.gameState.tableState == _Tf._dc.BaccaratTableState._I8 || b.gameState.tableState == _Tf._dc.BaccaratTableState._Ae) && this.clearInitedState()
};
_Tf._a._Un.BaccaratGameManager.prototype._ri = function () {
  this.animationEventPlayersHandler = this.animationEventPlayersHandler.bind(this);
  this._S8 = this._S8.bind(this);
  this.animationEventCardToDealerHandler = this.animationEventCardToDealerHandler.bind(this);
  this.animationEventLostHandler = this.animationEventLostHandler.bind(this);
  this.animationEventWinHandler = this.animationEventWinHandler.bind(this);
  this.animationEventStateHandler = this.animationEventStateHandler.bind(this);
  this.animationDeckShuffledHandler = this.animationDeckShuffledHandler.bind(this);
  _Tf._a._Un.BaccaratGameManager.superclass.prototype._ri.call(this)
};
_Tf._a._Un.BaccaratGameManager.prototype._Km = function () {
  this.showPermanentActions();
  _Tf._N1.$(_Tf._0l._N1._6i.format(this.tableId) + _Tf._0l._N1._ii).hide();
  this.game._S6()
};
_Tf._a._Un.BaccaratGameManager.prototype._h1 = function (a, b, c, d) {
  var b = _Tf._dc.AnimationType,
    e = _Tf._dc.PlayerAction;
  switch (a.type) {
    case b._tm:
      if (!d) break;
      this.eventQueue.push(new _J0(a.type, a, this._ob, 2));
      break;
    case b._Gf:
      if (!d) break;
      a.card = _Tf._dc._W2._C8(c.newPlayerCards.shift());
      this.eventQueue.push(new _J0(a.type, a, this._S8, 3));
      break;
    case b._ac:
      if (!d) break;
      a.card = _Tf._dc._W2._C8(c.newDealerCards.shift());
      this.eventQueue.push(new _J0(a.type, a, this.animationEventCardToDealerHandler, 3));
      break;
    case b._X9:
      this.eventQueue.push(new _J0(a.type,
        a, this._2h, 1));
      break;
    case b._Yh:
      a.isAnimate = d;
      this.eventQueue.push(new _J0(a.type, a, this._X7, 2));
      break;
    case b._7h:
      a.isAnimate = d;
      a.betIndex = this.getBetIndex(e._dp);
      this.eventQueue.push(new _J0(a.type, a, this.animationEventLostHandler, 0));
      break;
    case b._5i:
      a.isAnimate = d;
      a.betIndex = this.getBetIndex(e._c1);
      this.eventQueue.push(new _J0(a.type, a, this.animationEventLostHandler, 0));
      break;
    case b._Ff:
      a.isAnimate = d;
      a.betIndex = this.getBetIndex(e._32);
      this.eventQueue.push(new _J0(a.type, a, this.animationEventLostHandler,
        0));
      break;
    case b._n2:
      a.isAnimate = d;
      a.betIndex = this.getBetIndex(e._Y7);
      this.eventQueue.push(new _J0(a.type, a, this.animationEventLostHandler, 0));
      break;
    case b._um:
      a.isAnimate = d;
      a.betIndex = this.getBetIndex(e._c4);
      this.eventQueue.push(new _J0(a.type, a, this.animationEventLostHandler, 0));
      break;
    case b._o0:
      a.isAnimate = d;
      a.betIndex = this.getBetIndex(e._dp);
      this.eventQueue.push(new _J0(a.type, a, this.animationEventWinHandler, 0));
      break;
    case b._P4:
      a.isAnimate = d;
      a.betIndex = this.getBetIndex(e._c1);
      this.eventQueue.push(new _J0(a.type,
        a, this.animationEventWinHandler, 0));
      break;
    case b._Kk:
      a.isAnimate = d;
      a.betIndex = this.getBetIndex(e._32);
      this.eventQueue.push(new _J0(a.type, a, this.animationEventWinHandler, 0));
      break;
    case b._Kb:
      a.isAnimate = d;
      a.betIndex = this.getBetIndex(e._Y7);
      this.eventQueue.push(new _J0(a.type, a, this.animationEventWinHandler, 0));
      break;
    case b._a1:
      a.isAnimate = d;
      a.betIndex = this.getBetIndex(e._c4);
      this.eventQueue.push(new _J0(a.type, a, this.animationEventWinHandler, 0));
      break;
    case b.__o:
      if (!d) break;
      this.eventQueue.push(new _J0(a.type,
        a, this.animationDeckShuffledHandler, 3))
  }
};
_Tf._a._Un.BaccaratGameManager.prototype.checkAllowAddMoney = function (a) {
  var b = this.game.model,
    c = b.chairs[a],
    d = _Mf._q1._5p(this.tableId).model.info.minBet;
  if (!(b.clientIndex != a || c._8s()) && this.needBuyIn && _Tf._0l.canAddMoneyAtTableWhenNonZeroCash) b = c._Fg(), b < d && (this.checkAutoActionsToRebuy(a, b) || this.game._yi())
};
_Tf._a._Un.BaccaratGameManager.prototype.animationEventPlayersHandler = function (a) {
  for (var b, c = this.game.model, d = a.length, e, f, g = _Mf._L2._d1(), h = !1, j = 0; j < d; j++) if (e = a[j], f = c.chairs[j], f._q6() && e.id !== g && this.game._Xn(), e.id) {
    h = e.id === g;
    e.name = _Tf._Ek._29.getPlayerDisplayName(e.nick, e.displayName);
    if (f._8s()) f._a2(e, h), h && (this.game.model.setClientIndex(j), this._Km(j));
    else {
      b = f._Sq();
      var k = f._Kc(e, h, c.table.model.state == _Tf._dc.BaccaratTableState._Is);
      h && (b != f._Sq() && (this.game.model.setClientIndex(j),
        this._Km(j)), k && this._Zi(j))
    }
    for (b = 0; b < e.bets.length; b++) if (!e.winBets || !e.winBets[b]) 0 < e.bets[b] ? c.table._Yl(f._j6(e.bets[b], !1, b, h), !1, b) : c.table._iq(j, b)
  } else if (!f._8s()) {
    f._4p();
    for (b = 0; b < e.bets.length; b++) c.table._iq(j, b)
  }
};
_Tf._a._Un.BaccaratGameManager.prototype._zl = function (a) {
  var b = !1;
  if (0 < a.actionsAndButtons.length) if (a.actionsAndButtons.forEach(function (a) {
    a.type == _Tf._dc.PlayerAction._fm && (b = !0)
  }), this.game.model.table.model.state == _Tf._dc.BaccaratTableState._De) if (b) {
    if (this.isStateInited[_Tf._dc.BaccaratTableState._84]) return;
    this.isStateInited[_Tf._dc.BaccaratTableState._84] = !0
  } else {
      if (this.isStateInited[_Tf._dc.BaccaratTableState._De]) return;
      this.isStateInited[_Tf._dc.BaccaratTableState._De] = !0;
      this.isStateInited[_Tf._dc.BaccaratTableState._84] = !1
    } else {
    if (this.isStateInited[this.game.model.table.model.state]) return;
    this.isStateInited[this.game.model.table.model.state] = !0
  }
  _Mf._q1._5p(this.tableId);
  var c = a.minBetAmount,
    d = a.maxBetAmount;
  a.funds.tableId = this.tableId;
  a.funds.clientBetBeforeRaise = 0;
  a.funds.step = 100 > c ? c : 100;
  if (d > c) a.funds.minRaise = c, a.funds.maxRaise = d;
  else if (c == d) a.funds.minRaise = c, a.funds.maxRaise = c;
  var e = "";
  this.checkButtonsInStaticGameState(0 < a.actionsAndButtons.length);
  this.button._Q7();
  if (0 < a.actionsAndButtons.length) {
    var e = e + this.game._l3(),
      f = [];
    a.actionsAndButtons.forEach(function (a) {
      if (!_Tf._0l.baccaratHidePairActions || !(a.type == _Tf._dc.PlayerAction._Y7 || a.type == _Tf._dc.PlayerAction._c4)) f.push(a.type), e += "#" + a.type
    });
    this.button._Fb(e, f, a.funds, this._6o)
  } else this.button._Fb(e, [])
};
_Tf._a._Un.BaccaratGameManager.prototype._S8 = function (a) {
  var b = this.game.model;
  this._3c(_Tf._dc.GameEvent._qs);
  a = b.bank._L9(a.card);
  b.table.moveToPlayerCardHolder(a)
};
_Tf._a._Un.BaccaratGameManager.prototype.animationEventCardToDealerHandler = function (a) {
  var b = this.game.model;
  this._3c(_Tf._dc.GameEvent._qs);
  a = b.bank._L9(a.card);
  b.table.moveToDealerCardHolder(a)
};
_Tf._a._Un.BaccaratGameManager.prototype._W4 = function (a) {
  var b = this.game.model;
  0 < a.playerCards.length ? (b.table.getPlayerCountCards() !== a.playerCards.length && b.table.setPlayerCardsAction(a.playerCards), b.table.setPlayerRankAction(a.playerRank)) : (b.table.playerCardHolder._Cn(), b.table.clearPlayerRankAction());
  0 < a.dealerCards.length ? (b.table.getDealerCountCards() !== a.dealerCards.length && b.table.setDealerCardsAction(a.dealerCards), b.table.setDealerRankAction(a.dealerRank)) : (b.table.dealerCardHolder._Cn(),
    b.table.clearDealerRankAction());
  b.cardShoe.setCardsInShoeAction(a.cardsInShoe);
  if (b.table.model.state == _Tf._dc.BaccaratTableState._K2) for (var a = b.chairs.length, c = 0; c < a; c++) b.chairs[c]._r2()
};
_Tf._a._Un.BaccaratGameManager.prototype._ob = function (a) {
  if (a.action) {
    var b = this.game.model,
      c = this.getBetIndex(a.action),
      d = b.chairs[a.seatIndex].model.isClientChair;
    this._3c(_Tf._dc.GameEvent._sm);
    a = b.chairs[a.seatIndex]._j6(a.amount, !0, c, d);
    b.table._i6(a, c)
  }
};
_Tf._a._Un.BaccaratGameManager.prototype._Po = function (a) {
  var b = this.game.model;
  0 === a.timePerMove ? b.timer._P1() : b.timer._bc(255, a.timePerMove, a.timeRemains, !1)
};
_Tf._a._Un.BaccaratGameManager.prototype.animationEventWinHandler = function (a) {
  var b, c, d = this.game.model,
    e = d.chairs[a.seatIndex];
  d.timer._P1();
  d.chairs[a.seatIndex]._q6() && this._3c(_Tf._dc.GameEvent._Yd);
  b = d.table.getBetChip(a.seatIndex, a.betIndex);
  c = a.amount - b._xi();
  d.table.dealerToBetAction(b, c, a.amount, -1 !== a.betIndex ? a.betIndex : 255, d.chairs[a.seatIndex].realNumber, e.takeBetToWinAction.bind(e))
};
_Tf._a._Un.BaccaratGameManager.prototype.animationEventStateHandler = function (a) {
  var b = this.game.model;
  b.table._s2(a);
  if (a == _Tf._dc.BaccaratTableState._K2) {
    b.table.winChipsToDealerAction();
    for (var a = 0, c = b.chairs.length; a < c; a++) b.chairs[a].winChipsToPlayerAction()
  }
};
_Tf._a._Un.BaccaratGameManager.prototype.animationEventLostHandler = function (a) {
  this.game.model.table.betToDealerWinAction(a.seatIndex, a.betIndex)
};
_Tf._a._Un.BaccaratGameManager.prototype.animationDeckShuffledHandler = function () {
  this._3c(_Tf._dc.GameEvent._be)
};
_Tf._a._Un.BaccaratGameManager.prototype.getBetIndex = function (a) {
  return this.betsIndexes.indexOf(a)
};
_Tf._a._Un.BaccaratGameManager.prototype._6o = function (a, b) {
  this.game.model.timer._ze(this.game.model.clientIndex);
  this.button._Gd();
  var c = _Mf._q1._5p(this.tableId);
  c && c._89(a, b);
  this.button._Hg()
};
_Tf._a._Un.BaccaratGameManager.prototype._n6 = function () {
  var a = _Mf._q1._5p(this.tableId),
    b = a._j9();
  a && this.game.view._Ze(a._m5(), a.model.info.minBet, b ? b : _Mf._L2._Z5())
};
_Tf._a._Un.PaigowGameManager = function () {
  _Tf._a._Un.PaigowGameManager.superclass.apply(this, arguments);
  this.factory = new _Tf._E9.Factories._Un.PaigowFactory(this.gameType)
};
extend(_Tf._a._Un.PaigowGameManager, _Tf._a._Un.__b);
_Tf._a._Un.PaigowGameManager.prototype.next = function (a, b, c) {
  var d, e = b.gameState,
    f = e.seats,
    g = f.length,
    h = 0,
    j = 0,
    k = _Mf._L2._d1(),
    l = _Mf._q1._5p(this.tableId);
  this.needBuyIn = !0;
  for (d = 0; d < g; d++) {
    if ("undefined" == typeof f[d].id || 1 === f[d].id) return;
    f[d].cards = this.getCardsArray(f[d].d);
    f[d].isAnimate = c;
    if (f[d].id == k && (h = f[d].cash, j = f[d].b, h >= l.model.info.minBet || 0 < j)) this.needBuyIn = !1
  }
  g = {
    dealerCards: this.getCardsArray(e.dealerCards)
  };
  e = {
    dealerCards: this.getCardsArray(e.dealerCards)
  };
  this.game && (this.game.model._sg(0),
    this.game.model.table._s2(b.gameState.tableState));
  if (this.game && 0 < a) {
    k = b.events;
    d = this.game.model;
    var l = d.chairs,
      n = d.table;
    for (d = 0; d < f.length; d++) {
      var m = f[d],
        o = m.splitActive ? m.splitIndex - 1 : 0,
        p, q = 0,
        r = [0, 0, 0, 0];
      for (p = 0; p < r.length; p++) r[p] = q, o !== p && q++;
      n.setActiveBetAction(d, o, r, m.splitActive, m.splitIndex - 1, l[d].view.realNumber);
      l[d].setActiveBetAction(o, r, m.splitActive, m.splitIndex - 1)
    }
    for (d = 0; d < k.length; d++) this._h1(k[d], f, g, c)
  }
  this.eventQueue.push(new _J0("players", f, this._o3, 1));
  this.eventQueue.push(new _J0("desk",
    e, this._W4, 1));
  this.eventQueue.push(new _J0("timer", b.gameState, this._Po, 1));
  this.eventQueue.push(new _J0("button", {
    actionsAndButtons: b.gameState.availableActions,
    funds: {},
    clientCash: h,
    clientBet: j,
    minBetAmount: b.gameState.minBetAmount,
    maxBetAmount: b.gameState.maxBetAmount
  }, this._zl, 1));
  this.eventQueue.push(new _J0("number", a, this._jc, 1));
  (b.gameState.tableState == _Tf._dc.PaigowTableState._K2 || b.gameState.tableState == _Tf._dc.PaigowTableState._I8 || b.gameState.tableState == _Tf._dc.PaigowTableState._Ae) && this.clearInitedState()
};
_Tf._a._Un.PaigowGameManager.prototype.getCardsArray = function (a) {
  var b = [];
  "" !== a && (b = a.split(";"));
  0 < b.length && (b = b.splice(5, 2).concat(b));
  return b
};
_Tf._a._Un.PaigowGameManager.prototype._ri = function () {
  this._S8 = this._S8.bind(this);
  this._Po = this._Po.bind(this);
  this._zl = this._zl.bind(this);
  this._6o = this._6o.bind(this);
  this._X7 = this._X7.bind(this);
  this._ob = this._ob.bind(this);
  this._o3 = this._o3.bind(this);
  this._W4 = this._W4.bind(this);
  this.animationEventDealerActedHandler = this.animationEventDealerActedHandler.bind(this);
  this.animationEventCardToDealerHandler = this.animationEventCardToDealerHandler.bind(this);
  this.animationEventWinHandler = this.animationEventWinHandler.bind(this);
  this.animationEventTieHandler = this.animationEventTieHandler.bind(this);
  this.animationEventPlayerLoseHandler = this.animationEventPlayerLoseHandler.bind(this)
};
_Tf._a._Un.PaigowGameManager.prototype._zl = function (a) {
  var b = !1;
  if (0 < a.actionsAndButtons.length) if (a.actionsAndButtons.forEach(function (a) {
    a.type == _Tf._dc.PlayerAction._t0 && (b = !0)
  }), this.game.model.table.model.state == _Tf._dc.PaigowTableState._De) if (b) {
    if (this.isStateInited[_Tf._dc.PaigowTableState._84]) return;
    this.isStateInited[_Tf._dc.PaigowTableState._84] = !0
  } else {
      if (this.isStateInited[_Tf._dc.PaigowTableState._De]) return;
      this.isStateInited[_Tf._dc.PaigowTableState._De] = !0;
      this.isStateInited[_Tf._dc.PaigowTableState._84] = !1
    } else {
    if (this.isStateInited[this.game.model.table.model.state]) return;
    this.isStateInited[this.game.model.table.model.state] = !0
  }
  _Mf._q1._5p(this.tableId);
  var c = a.minBetAmount,
    d = a.maxBetAmount;
  a.funds.tableId = this.tableId;
  a.funds.clientBetBeforeRaise = 0;
  a.funds.step = 100 > c ? c : 100;
  if (d > c) a.funds.minRaise = c, a.funds.maxRaise = d;
  else if (c == d) a.funds.minRaise = c, a.funds.maxRaise = c;
  var e = "";
  this.checkButtonsInStaticGameState(0 < a.actionsAndButtons.length);
  this.button._Q7();
  if (0 < a.actionsAndButtons.length) {
    var e = e + this.game._l3(),
      f = [];
    a.actionsAndButtons.forEach(function (a) {
      f.push(a.type);
      e += "#" + a.type
    });
    this.button._Fb(e, f, a.funds, this._6o)
  } else this.button._Fb(e, [])
};
_Tf._a._Un.PaigowGameManager.prototype._Po = function (a) {
  var b = this.game.model;
  0 === a.timePerMove ? b.timer._P1() : b.timer._bc(255, a.timePerMove, a.timeRemains, !1)
};
_Tf._a._Un.PaigowGameManager.prototype._S8 = function (a) {
  var b = this.game.model;
  this._3c(_Tf._dc.GameEvent._qs);
  b.chairs[a.seatIndex]._j8(b.bank._L9(a.card), a.holderIndex)
};
_Tf._a._Un.PaigowGameManager.prototype._X7 = function (a) {
  var b = this.game.model;
  this._Hi(a.action);
  b.chairs[a.seatIndex]._F({
    action: a.action,
    amount: a.amount
  })
};
_Tf._a._Un.PaigowGameManager.prototype._ob = function (a) {
  var b = this.game.model,
    c = b.chairs[a.seatIndex].model.isClientChair;
  this._3c(_Tf._dc.GameEvent._sm);
  a = b.chairs[a.seatIndex]._j6(a.amount, !0, 0, c);
  b.table._i6(a, 0)
};
_Tf._a._Un.PaigowGameManager.prototype._o3 = function (a) {
  for (var b = this.game.model, c = a.length, d, e, f = !1, g = _Mf._L2._d1(), h = !1, j = 0; j < c; j++) if (d = a[j], e = b.chairs[j], e._q6() && d.id !== g && this.game._Xn(), d.id) {
    if ("*RESERVED*" !== d.name) {
      h = d.id === g;
      d.name = _Tf._Ek._29.getPlayerDisplayName(d.nick, d.name);
      if (e._8s()) e._a2(d, h), h && (this.game.model.setClientIndex(j), this._Km(j));
      else {
        var k = e._Sq(),
          f = e._Kc(d, h);
        h && (k != e._Sq() && (this.game.model.setClientIndex(j), this._Km(j)), f && this._Zi(j))
      }
      f = [];
      if ("" == d.d) e._Ql(0),
        e._Ql(1);
      else {
        d.cardsArray = this.getCardsArray(d.d);
        for (var h = d.cardsArray.length, k = !0, l = 0; l < h; l++) f.push(_Tf._dc._W2._C8(parseInt(d.cardsArray[l]))), "-1" != d.cardsArray[l] && (k = !0);
        k ? (h = f.splice(0, 2), e._x5(h, d.isAnimate, 1), e._x5(f, d.isAnimate, 0)) : (e.model.holders[0]._Ql(e._q6()), e.model.holders[1]._Ql(e._q6()), e._Ug(h))
      }
      e._q6() && this.checkClientCardsInStaticGameState(d.cards, f);
      0 != d.b ? b.table._Yl(e._j6(d.b), !1) : b.table._iq(j)
    }
  } else e._8s() || e._4p()
};
_Tf._a._Un.PaigowGameManager.prototype._W4 = function (a) {
  var b = this.game.model;
  0 < a.dealerCards.length ? b.table.setDealerCardsAction(a.dealerCards) : b.table.dealerCardHolder._Cn();
  if (b.table.model.state == _Tf._dc.PaigowTableState._K2) for (var a = b.chairs.length, c = 0; c < a; c++) b.chairs[c]._r2()
};
_Tf._a._Un.PaigowGameManager.prototype.animationEventDealerActedHandler = function (a) {
  var b = this.game.model,
    c = b.table.model.cards,
    d = b.table.takeCloseCard(),
    e = a.cardsArray;
  d && b.table.turnCardInCenterAction(_Tf._dc._W2._C8(e[d]), d, c.length, a.isAnimate)
};
_Tf._a._Un.PaigowGameManager.prototype.animationEventCardToDealerHandler = function (a) {
  var b = this.game.model;
  this._3c(_Tf._dc.GameEvent._qs);
  a = b.bank.dealDealerCardAction(a.card);
  b.table.moveToDealerCardHolder(a)
};
_Tf._a._Un.PaigowGameManager.prototype._h1 = function (a, b, c, d) {
  var e = _Tf._dc.AnimationType;
  switch (a.type) {
    case e._tm:
      if (!d) break;
      this.eventQueue.push(new _J0(a.type, a, this._ob, 2));
      break;
    case e._K0:
      if (!d) break;
      a.card = _Tf._dc._W2._C8(b[a.seatIndex].cards.shift());
      a.holderIndex = 5 <= b[a.seatIndex].cards.length ? 1 : 0;
      this.eventQueue.push(new _J0(a.type, a, this._S8, 5));
      break;
    case e._ac:
      if (!d) break;
      a.card = _Tf._dc._W2._C8(c.dealerCards.shift());
      this.eventQueue.push(new _J0(a.type, a, this.animationEventCardToDealerHandler,
        3));
      break;
    case e._2j:
      a.isAnimate = d;
      this.eventQueue.push(new _J0(a.type, a, this.animationEventWinHandler, 0));
      break;
    case e._h7:
      a.isAnimate = d;
      this.eventQueue.push(new _J0(a.type, a, this.animationEventTieHandler, 0));
      break;
    case e._21:
      a.isAnimate = d;
      this.eventQueue.push(new _J0(a.type, a, this.animationEventPlayerLoseHandler, 0));
      break;
    case e._Yh:
      a.isAnimate = d, b = b[a.seatIndex].b, a.amount = b ? b : 0, this.eventQueue.push(new _J0(a.type, a, this._X7, 2))
  }
};
_Tf._a._Un.PaigowGameManager.prototype.checkAllowAddMoney = function (a) {
  var b = this.game.model,
    c = b.chairs[a],
    d = _Mf._q1._5p(this.tableId).model.info.minBet;
  if (!(b.clientIndex != a || c._8s()) && this.needBuyIn && _Tf._0l.canAddMoneyAtTableWhenNonZeroCash) b = c._Fg(), b < d && !c._y8() && (this.checkAutoActionsToRebuy(a, b) || this.game._yi())
};
_Tf._a._Un.PaigowGameManager.prototype._6o = function (a, b, c, d) {
  this.game.model.timer._ze(this.game.model.clientIndex);
  d = d || [];
  this.button._Gd();
  (c = _Mf._q1._5p(this.tableId)) && c._89(a, b, d);
  this.button._Hg()
};
_Tf._a._Un.PaigowGameManager.prototype._n6 = function () {
  var a = _Mf._q1._5p(this.tableId),
    b = a._j9();
  a && this.game.view._Ze(a._m5(), a.model.info.minBet, b ? b : _Mf._L2._Z5())
};
_Tf._a._Un.PaigowGameManager.prototype.animationEventWinHandler = function (a) {
  var b = this.game.model,
    c = b.chairs[a.seatIndex];
  b.timer._P1();
  b.chairs[a.seatIndex]._q6() && this._3c(_Tf._dc.GameEvent._Yd);
  b.chairs[a.seatIndex].clearPlayerOperationAction();
  c._S(a.amount)
};
_Tf._a._Un.PaigowGameManager.prototype.animationEventTieHandler = function (a) {
  var b = this.game.model,
    c = b.chairs[a.seatIndex];
  b.timer._P1();
  b.chairs[a.seatIndex].clearPlayerOperationAction();
  c.playerTieAction()
};
_Tf._a._Un.PaigowGameManager.prototype.animationEventPlayerLoseHandler = function (a) {
  var b = this.game.model,
    c = b.chairs[a.seatIndex];
  b.timer._P1();
  b.chairs[a.seatIndex].clearPlayerOperationAction();
  c.playerBustedAction()
};
_Tf._a._Un.CrapsGameManager = function () {
  _Tf._a._Un.CrapsGameManager.superclass.apply(this, arguments);
  this.factory = new _Tf._E9.Factories._Un.CrapsFactory(this.gameType)
};
extend(_Tf._a._Un.CrapsGameManager, _Tf._a._Un.__b);
_Tf._a._Un.CrapsGameManager.prototype.next = function (a, b, c) {
  var d, e = b.gameState,
    f = e.seats,
    g = f.length,
    h = _Mf._L2._d1(),
    j = [],
    k = 0,
    l = _Tf._dc.AnimationType,
    n = !1;
  if (this.game && 0 < a) {
    var m = b.events;
    for (d = 0; d < m.length; d++) if (m[d] && m[d].type && m[d].type == l._4) {
      this.eventQueue.push(new _J0(m[d].type, m[d], this.animationEventRollDice, 1));
      n = !0;
      break
    }
    if (n) {
      b.events.splice(d, 1);
      var o = this;
      setTimeout(function () {
        o.next(a, b, c)
      }, 1800);
      return
    }
  }
  for (d = 0; d < g; d++) if (!("undefined" == typeof f[d].id || 1 === f[d].id)) if (f[d].isAnimate = c, f[d].id == h) j = f[d].stakes, k = f[d].cash;
  this.game && (e.diceValues && this.game.model.table.drawDiceHistory(e.diceValues), this.game.model._sg(0), this.game.model.table._s2(b.gameState.tableState));
  if (this.game && 0 < a) {
    d = [];
    g = [];
    for (h = 0; h < b.events.length; h++) {
      l = b.events[h];
      if (l.type == _Tf._dc.AnimationType._xm) {
        m = -1;
        for (n = 0; n < d.length; n++) if (d[n].seatIndex == l.seatIndex) {
          m = n;
          break
        }
        0 <= m ? (d[m].amount = parseInt(d[m].amount) + parseInt(l.amount), d[m].amount2 = parseInt(d[m].amount2) + parseInt(l.amount2)) : d.push(l);
        b.events.splice(h,
          1)
      }
      if (l.type == _Tf._dc.AnimationType._Xq) {
        m = -1;
        for (n = 0; n < g.length; n++) if (g[n].seatIndex == l.seatIndex) {
          m = n;
          break
        }
        0 <= m ? (g[m].amount = parseInt(g[m].amount) + parseInt(l.amount), g[m].amount2 = g[m].amount) : g.push(l);
        b.events.splice(h, 1)
      }
    }
    for (h = 0; h < g.length; h++) g[h].type && b.events.push(g[h]);
    for (g = 0; g < d.length; g++) d[g].type && 0 <= parseInt(d[g].amount2) && b.events.push(d[g]);
    for (d = 0; d < b.events.length; d++) this._h1(b.events[d], e, c)
  }
  this.eventQueue.push(new _J0("stakes", j, this.animationEventStakesHandler, 1));
  this.eventQueue.push(new _J0("players",
    f, this._o3, 1));
  this.eventQueue.push(new _J0("timer", e, this._Po, 1));
  this.eventQueue.push(new _J0("button", {
    actionsAndButtons: e.availableActions,
    funds: {
      clientCash: k
    },
    allowedStakes: e.allowedStakes,
    minBetAmount: e.minBetAmount,
    maxBetAmount: e.maxBetAmount
  }, this._zl, 1));
  this.eventQueue.push(new _J0("number", a, this._jc, 1))
};
_Tf._a._Un.CrapsGameManager.prototype._ri = function () {
  this._Po = this._Po.bind(this);
  this._zl = this._zl.bind(this);
  this._6o = this._6o.bind(this);
  this._o3 = this._o3.bind(this);
  this.animationEventRollDice = this.animationEventRollDice.bind(this);
  this._h1 = this._h1.bind(this);
  this.animationEventStakesHandler = this.animationEventStakesHandler.bind(this);
  this._2h = this._2h.bind(this);
  this._ho = this._ho.bind(this);
  this._X7 = this._X7.bind(this);
  this._s8 = this._s8.bind(this);
  this._Rn = this._Rn.bind(this);
  this.animationEventBetToPlayerHandler = this.animationEventBetToPlayerHandler.bind(this);
  this.animationEventBetToDealerHandler = this.animationEventBetToDealerHandler.bind(this)
};
_Tf._a._Un.CrapsGameManager.prototype._zl = function (a) {
  var b = _Mf._q1._5p(this.tableId);
  a.funds.tableId = this.tableId;
  var c = "";
  this.checkButtonsInStaticGameState(0 < a.actionsAndButtons.length);
  this.button._Q7();
  b.setAllowedStakes(a.allowedStakes);
  if (0 < a.actionsAndButtons.length) {
    var c = c + this.game._l3(),
      d = [];
    a.actionsAndButtons.forEach(function (a) {
      d.push(a.type);
      c += "#" + a.type
    });
    this.button._Fb(c, d, a.funds, this._6o)
  } else this.button._Fb(c, [])
};
_Tf._a._Un.CrapsGameManager.prototype._Po = function (a) {
  for (var b = _Tf._dc.PlayerFlag, c = this.game.model, d = c.chairs.length, e, f = !1, g = 0; g < d; g++) e = c.chairs[g], 0 === a.timePerMove ? e.model.timer._ze(e.rotateNumber) : (f = !1, a.seats[e.model.number] && (f = b.has(a.seats[e.model.number].flags, b._Lo)), a.seats[e.model.number] && f || !e.model.player ? e.model.timer._ze(e.rotateNumber) : e.model.timer._bc(e.rotateNumber, a.timePerMove, a.remainSecondsPerPlayerMove, 255 != c.clientIndex && c.clientIndex === e.model.number))
};
_Tf._a._Un.CrapsGameManager.prototype.animationEventStakesHandler = function (a) {
  var b = this.game.model;
  b.table.clearAllStakes();
  for (var c in a) b.table.setStake(a[c]);
  b.table.redrawStakes();
  b.table.model.state == _Tf._dc.CrapsTableState._Be && b.table.clearDiceAction()
};
_Tf._a._Un.CrapsGameManager.prototype._o3 = function (a) {
  for (var b = this.game.model, c = a.length, d, e, f = !1, g = _Mf._L2._d1(), h = !1, j = 0; j < c; j++) if (d = a[j], e = b.chairs[j], e._q6() && d.id !== g && this.game._Xn(), d.id) {
    if ("*RESERVED*" !== d.name) {
      h = d.id === g;
      d.name = _Tf._Ek._29.getPlayerDisplayName(d.displayName, d.name);
      if (e._8s()) e._a2(d, h), h && (this.game.model.setClientIndex(j), this._Km(j));
      else {
        var k = e._Sq(),
          f = e._Kc(d, h);
        h && (k != e._Sq() && (this.game.model.setClientIndex(j), this._Km(j)), f && this._Zi(j))
      }
      0 != d.b ? b.table._Yl(e._j6(d.b), !1) : b.table._iq(j)
    }
  } else e._8s() || e._4p()
};
_Tf._a._Un.CrapsGameManager.prototype._6o = function (a, b) {
  var c = this.game.model,
    c = c.chairs[c.clientIndex];
  c.model.timer._ze(c.rotateNumber);
  this.button._Gd();
  (c = _Mf._q1._5p(this.tableId)) && c.crapsPlayAction(a, b);
  this.button._Hg()
};
_Tf._a._Un.CrapsGameManager.prototype._2h = function (a) {
  var b = this.game.model;
  b.chairs[a.seatIndex]._q6() && this._3c(_Tf._dc.GameEvent._Yd);
  b.chairs[a.seatIndex]._S(a.amount)
};
_Tf._a._Un.CrapsGameManager.prototype.animationEventRollDice = function (a) {
  var b = this.game.model,
    a = [a.dice1, a.dice2];
  b.table.clearDiceAction();
  b.table.setDiceAction(a);
  b.table.rollDiceAction()
};
_Tf._a._Un.CrapsGameManager.prototype._ho = function (a) {
  this.game.model.tableMessage._40({
    text: a.tableMessage,
    type: _Tf._dc.TableMessageType._l0
  })
};
_Tf._a._Un.CrapsGameManager.prototype._h1 = function (a, b, c) {
  this.eventQueue.push(new _J0("timer", null, this._Rn, 1));
  b = _Tf._dc.AnimationType;
  switch (a.type) {
    case b._Yh:
      a.isAnimate = c;
      this.eventQueue.push(new _J0(a.type, a, this._X7, 1));
      break;
    case b._F9:
      this.eventQueue.push(new _J0(a.type, a, this._ho, 1));
      break;
    case b._4:
      this.eventQueue.push(new _J0(a.type, a, this.animationEventRollDice, 1));
      break;
    case b._xm:
      this.eventQueue.push(new _J0(a.type, a, this.animationEventBetToPlayerHandler, 1));
      break;
    case b._Xq:
      this.eventQueue.push(new _J0(a.type,
        a, this.animationEventBetToDealerHandler, 1));
      break;
    case b._l8:
      this.eventQueue.push(new _J0(a.type, a, this.animationEventStakeTypeChangedHandler, 1));
      break;
    case b._Uc:
      this.eventQueue.push(new _J0(a.type, a, this.animationEventPointValueChangedHandler, 1))
  }
};
_Tf._a._Un.CrapsGameManager.prototype._X7 = function (a) {
  var b = this.game.model;
  this._Hi(a.action);
  b.chairs[a.seatIndex]._F({
    action: a.action,
    amount: a.amount
  });
  a.action === _Tf._dc.PlayerAction._x2 && (a.isAnimate || b.chairs[a.seatIndex]._q6()) && b.bank._C7(b.chairs[a.seatIndex]._sh());
  if (a.isAnimate && a.action === _Tf._dc.PlayerAction._3b) for (var b = [], a = a.cardsArray, c = a.length, d = 0; d < c; d++) "-1" != a[d] && b.push(_Tf._dc._W2._C8(parseInt(a[d])))
};
_Tf._a._Un.CrapsGameManager.prototype._s8 = function (a) {
  if (this.game && this.game.model && _Tf._Ek._29.isSupportingCanvas()) {
    var b = "Default" === _Mf._Ta._Iq && !this.isLagDetected && _h8._0l.FRAME_RATE >= _Tf._0l.FRAME_RATE;
    _h8._0l.FRAME_RATE = _h8._0l.FRAME_RATE || _Tf._0l.FRAME_RATE;
    this.next(this.currentGameStateNumber++, a, b)
  }
};
_Tf._a._Un.CrapsGameManager.prototype._Km = function () {
  this.showPermanentActions();
  _Tf._N1.$(_Tf._0l._N1._6i.format(this.tableId) + _Tf._0l._N1._ii).hide();
  this.button._8p([]);
  this.game._S6()
};
_Tf._a._Un.CrapsGameManager.prototype.animationEventBetToPlayerHandler = function (a) {
  var b = this.game.model;
  b.chairs[a.seatIndex]._q6() && this._3c(_Tf._dc.GameEvent._Yd);
  b.chairs[a.seatIndex]._S(parseInt(a.amount2))
};
_Tf._a._Un.CrapsGameManager.prototype.animationEventBetToDealerHandler = function (a) {
  var b = this.game.model;
  b.chairs[a.seatIndex]._q6();
  b.chairs[a.seatIndex].playerBustedAction(-1 * a.amount)
};
_Tf._a._Un.CrapsGameManager.prototype.animationEventStakeTypeChangedHandler = function () { };
_Tf._a._Un.CrapsGameManager.prototype.animationEventPointValueChangedHandler = function (a) {
  _Mf._q1.getFromMapGameTableAction().updatePointValue(parseInt(a["point-value"]))
};
_Tf._a._Un.CrapsGameManager.prototype._Rn = function () {
  for (var a = this.game.model, b, c = 0; c < a.chairs.length; c++) b = a.chairs[c], b.model.timer._ze(b.rotateNumber)
};
_Tf._a._Z9 = function () {
  this.map = {};
  this.activeTableId = null;
  _Mf._ks.addListener(_Ag._Zo, this._2m, this);
  _Mf._ks.addListener(_Ag._gq, this._Mr, this);
  _Mf._ks.addListener(_Ag._Mg, this._ls, this)
};
_Tf._a._Z9.prototype = {
  map: {},
  activeTableId: null,
  _Fq: function (a, b, c, d, e) {
    var f, g = !0;
    this.hasTable(a) ? (g = !1, f = this.map[a]) : (f = new _Tf._E9._Un._83(_h8._0l.DefaultAutoActions), b = this.createGameManager(a, b, f), f = {
      tableInstance: new _Tf._E9._Y3._l7,
      gameManager: b,
      autoActionManager: f
    }, this.map[a] = f);
    _Mf._Md.getPageEvent(_Tf._0l._N1._ff._2l)._Zp(f);
    g ? f.tableInstance._h5(a, c, d) : f.tableInstance._yh(e);
    return g
  },
  _Yr: function (a) {
    this.hasTable(a) && (this.map[a].gameManager && this.map[a].gameManager._Fc(), this.map[a].tableInstance && this.map[a].tableInstance._Q7(), delete this.map[a])
  },
  _m3: function () {
    for (var a in this.map) this.map.hasOwnProperty(a) && this._Yr(a);
    this.activeTableId = null
  },
  _m8: function (a) {
    var a = parseInt(a),
      b;
    for (b in this.map) this.map.hasOwnProperty(b) && this.map[b].tableInstance && this.map[b].tableInstance._7l() == a && this.map[b].tableInstance._m8()
  },
  createGameManager: function (a, b, c) {
    var d = _Tf._dc.GameType;
    return d.isBlackJack(b) ? new _Tf._E9._Un.BlackJackGameManager(a, b, c) : d.isBaccarat(b) ? new _Tf._E9._Un.BaccaratGameManager(a,
      b, c) : d.isPaigow(b) ? new _Tf._E9._Un.PaigowGameManager(a, b, c) : d.isCraps(b) ? new _Tf._E9._Un.CrapsGameManager(a, b, c) : new _Tf._E9._Un.__b(a, b, c)
  },
  _5p: function (a) {
    a = a || this.activeTableId;
    return !this.hasTable(a) ? null : this.map[a].tableInstance
  },
  _Rm: function (a) {
    a = a || this.activeTableId;
    return !this.hasTable(a) ? null : this.map[a].gameManager
  },
  getFromMapGameTableAction: function (a) {
    a = a || this.activeTableId;
    return !this.hasTable(a) ? null : this.map[a].gameManager.game.model.table
  },
  _Aa: function (a) {
    a = a || this.activeTableId;
    return !this.hasTable(a) ? null : this.map[a].autoActionManager
  },
  hasTable: function (a) {
    return a in this.map
  },
  _y9: function () {
    return this.activeTableId
  },
  _57: function () {
    if (null === this.activeTableId) return 0;
    var a = 0,
      b, c;
    for (c in this.map) this.map.hasOwnProperty(c) && this.map[c].gameManager && (b = this.map[c].gameManager._w4(), a += b ? b._Fg() : 0);
    return a
  },
  setPermanentAutoActionValueAction: function (a, b, c, d) {
    var e = null,
      f = _h8._0l;
    if ("undefined" === typeof f.isUseGlobalTableOptions || !f.isUseGlobalTableOptions || "undefined" !== typeof c && c) this.setPermanentAutoActionValueForTableAction(a, b, this._y9());
    else {
      if ("undefined" === typeof f.DefaultAutoActions) f.DefaultAutoActions = {};
      f.DefaultAutoActions[a] = b;
      if (!("undefined" !== typeof d && d)) for (e in this.map) this.map.hasOwnProperty(e) && this.setPermanentAutoActionValueForTableAction(a, b, e)
    }
  },
  setPermanentAutoActionValueForTableAction: function (a, b, c) {
    var d = this._Rm(c),
      c = this._Aa(c);
    d && d.button && c && d.button._gh(a, b, c)
  },
  _2m: function (a) {
    this.activeTableId = a ? a.id : null
  },
  _Mr: function (a, b) {
    _Mf._Md.getVisiblePage() != _Tf._0l._N1._ff._2l || this._y9() != b || _Tf._Hc._L8._Hi(a)
  },
  _ls: function (a, b) {
    _Mf._Md.getVisiblePage() != _Tf._0l._N1._ff._2l || this._y9() != b || _Tf._Hc._L8._3c(a)
  },
  _Xf: function () {
    for (var a in this.map) this.map.hasOwnProperty(a) && this.map[a].tableInstance && this.map[a].tableInstance._10()
  },
  _x3: function (a) {
    if (a && a.type == _Tf._0r._Tr._ga) for (var b in this.map) this.map.hasOwnProperty(b) && this.map[b].tableInstance && this.map[b].tableInstance._x3(a)
  },
  _4r: function (a) {
    if (a && a.type) {
      var b = _Tf._0r._Tr;
      if (!(a.type != b._81 && a.type != b._H6 && a.type != b._G8 && a.type != b._xs && a.type != b._Wj)) b = a.gameState.tableId, this.hasTable(b) && (b = this._5p(b)) && b._4r(a)
    }
  },
  onGameTableDescription: function (a) {
    if (a && a.type) {
      var b = a.tableId;
      if (this.hasTable(b) && (b = this._5p(b))) b.onGameTableDescription(a.deskLayout)
    }
  },
  _u1: function (a, b) {
    if (a && a.type == _Tf._0r._Tr._bp) {
      var c = b.srcTableId;
      this.hasTable(c) && (c = this._5p(c)) && c._u1(a)
    }
  },
  onCrapsPlay: function (a, b) {
    if (a && a.type == _Tf._0r._Tr._bp) {
      var c = b.srcTableId;
      this.hasTable(c) && (c = this._5p(c)) && c._u1(a)
    }
  },
  _Ef: function (a, b) {
    var c = _Tf._0r._Tr;
    if (a && !(a.type != c._bp && a.type != c._sf)) {
      var d = b.srcTableId || a.info.id;
      a.type === c._sf && 0 === a.srcMsgId && this._Fq(d, a.info.gameType, "", b.address);
      this.hasTable(d) && (c = this._5p(d)) && c._Ef(a)
    }
  },
  _R: function (a, b) {
    if (a && a.type == _Tf._0r._Tr._bp) {
      var c = b.srcTableId;
      this.hasTable(c) && (c = this._5p(c)) && c._R(a, b)
    }
  },
  _Ur: function (a, b) {
    if (a && a.type == _Tf._0r._Tr._bp) {
      var c = b.srcTableId;
      this.hasTable(c) && (c = this._5p(c)) && c._Ur(a)
    }
  },
  _Ng: function (a) {
    if (a && a.type == _Tf._0r._Tr._l2) {
      var b = a.event.tableId;
      this.hasTable(b) && (b = this._5p(b)) && b._Ng(a)
    }
  },
  _r0: function (a) {
    if (a && a.type == _Tf._0r._Tr._g5) {
      var b = a.tableId;
      this.hasTable(b) && (b = this._5p(b)) && b._r0(a)
    }
  },
  _f3: function (a, b) {
    if (a && a.type == _Tf._0r._Tr._bp) {
      var c = b.srcTableId;
      this.hasTable(c) && (c = this._5p(c)) && c._f3(a)
    }
  },
  _ie: function (a, b) {
    if (a && a.type == _Tf._0r._Tr._bp) {
      var c = b.srcTableId;
      this.hasTable(c) && (c = this._5p(c)) && c._ie(a)
    }
  },
  _a4: function (a, b) {
    if (a && a.type == _Tf._0r._Tr._bp) {
      var c = b.srcTableId;
      this.hasTable(c) && (c = this._5p(c)) && c._a4(a)
    }
  },
  _N4: function (a, b) {
    if (a && a.type == _Tf._0r._Tr._bp) {
      var c = b.srcTableId;
      this.hasTable(c) && (c = this._5p(c)) && c._N4(a)
    }
  },
  _Vh: function (a, b) {
    if (a && a.type == _Tf._0r._Tr._bp) {
      var c = b.srcTableId;
      this.hasTable(c) && (c = this._5p(c)) && c._Vh(a)
    }
  },
  _Fn: function (a, b) {
    if (a && a.type == _Tf._0r._Tr._bp) {
      var c = b.srcTableId;
      this.hasTable(c) && (c = this._5p(c)) && c._Fn(a)
    }
  },
  _sa: function (a, b) {
    if (a && a.type == _Tf._0r._Tr._bp) {
      var c = b.srcTableId;
      this.hasTable(c) && (c = this._5p(c)) && c._sa(a)
    }
  },
  _Hd: function (a, b) {
    if (a && a.type == _Tf._0r._Tr._bp) {
      var c = b.srcTableId;
      this.hasTable(c) && (c = this._5p(c)) && c._Hd(a)
    }
  },
  _Jd: function (a) {
    if (a && a.type == _Tf._0r._Tr._Q8) {
      var b = a.tableId;
      this.hasTable(b) && (b = this._5p(b)) && b._Jd(a)
    }
  },
  _hc: function (a) {
    if (a && a.type == _Tf._0r._Tr._Q8) {
      var b = a.tableId;
      this.hasTable(b) && (b = this._5p(b)) && b._hc(a)
    }
  },
  _O9: function (a) {
    if (a && a.type == _Tf._0r._Tr._Q8) {
      var b = a.tableId;
      this.hasTable(b) && (b = this._5p(b)) && b._O9(a)
    }
  },
  _Dk: function (a) {
    if (a && a.type == _Tf._0r._Tr._N) {
      var b = a.tableId;
      this.hasTable(b) && (b = this._5p(b)) && b._Dk(a)
    }
  },
  _ue: function (a) {
    if (a && a.type == _Tf._0r._Tr._u) {
      var b = a.tableId;
      this.hasTable(b) && (b = this._5p(b)) && b._ue(a)
    }
  }
};
_Tf._Ek._Fm._bf._X6 = function (a, b) {
  this.page = b;
  this.pageManager = a;
  this.scroller = null
};
_Tf._Ek._Fm._bf._X6.prototype = {
  pageManager: null,
  page: "",
  touchMoveEvent: {
    target: null,
    isPrevented: !0,
    last: 0
  },
  scroller: null,
  _oe: function () {
    var a = $("#{0} {1}".format(this.page, _Tf._0l._N1._vj));
    0 !== a.length && this.initScroll(a[0], _Tf._Hc._Og.getPlatform(), {
      onScrollPullDown: this.onScrollPullDown.bind(this),
      showScrollBar: !0
    })
  },
  initScroll: function (a, b, c) {
    this.scroller = new _Tf._Hc.Scroller(a, b, c)
  },
  extendSmartOverflowConfig: function (a) {
    var b = {}, c;
    for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
    return b
  },
  _A9: function (a) {
    if (!_Tf._Hc._Og.isWebApplication()) return a;
    a.animateTransitionDuration = 100;
    a.animateStep = 20;
    return a
  },
  _Gg: function () {
    if (this.scroller) this.scroller.destroy(), this.scroller = null
  },
  _I0: function (a) {
    this.scroller && this.scroller.refresh(a)
  },
  _ul: function () {
    return !1 !== _Mf._ks.emit(this.page + "-on-create", arguments)
  },
  _am: function () {
    if (!1 === _Mf._ks.emit(this.page + "-on-resize", arguments)) return !1;
    this._hr.setBaseFontSize(this.page, this._hr.stretchPageOnScreen(this.page));
    this._I0();
    return !1 === _Mf._ks.emit(this.page + "-on-after-resize", arguments) ? !1 : !0
  },
  time: 0,
  _5c: function () {
    return !0
  },
  _Q: function () {
    return !0
  },
  _rm: function () {
    if ("undefined" != typeof Logger) this.time = new Date;
    return !1 !== _Mf._ks.emit(this.page + "-on-before-change-page", arguments)
  },
  _2c: function (a) {
    if (!1 === _Mf._ks.emit(this.page + "-on-change", arguments)) return !1;
    "function" === typeof a && a();
    return !0
  },
  _t6: function () {
    if ("undefined" != typeof Logger) this.time = 0;
    _Mf._ks.emitAsync(_Ag._0g, [this.page]);
    return !1 !== _Mf._ks.emit(this.page + "-on-show", arguments)
  },
  __6: function () {
    return !1 !== _Mf._ks.emit(this.page +
      "-on-ready-first", arguments)
  },
  _G1: function () {
    this._oe();
    return !1 !== _Mf._ks.emit(this.page + "-on-ready", arguments)
  },
  beforeInit: function () {
    return !1 !== _Mf._ks.emit(this.page + "-on-before-init", arguments)
  },
  _r4: function () {
    return !1 !== _Mf._ks.emit(this.page + "-on-init", arguments)
  },
  _N3: function () {
    return !1
  },
  _Sr: function () {
    this._Gg();
    return !1 !== _Mf._ks.emit(this.page + "-on-hide", arguments)
  },
  _jp: function (a) {
    _Tf._Ek._29.hidePageLoadingMessage();
    return !1 !== _Mf._ks.emit(this.page + "-on-leave", arguments)
  },
  _N9: null,
  onScrollPullDown: function () { },
  _hr: {
    stretchPageOnScreen: function (a) {
      var a = _Tf._N1.$("#" + a),
        b = $(window).get(0).innerWidth,
        c = $(window).get(0).innerHeight;
      a.width(b);
      a.height(c);
      return {
        width: b,
        height: c
      }
    },
    setBaseFontSizeToPage: function (a, b) {
      _Tf._N1.$("#" + a).css("fontSize", b)
    },
    setBaseFontSize: function (a, b, c, d) {
      var d = d || _Tf._0l.FONT_COEFF,
        e = 0;
      switch (c || 0) {
        case 0:
          e = Math.min(b.width, b.height);
          break;
        case 1:
          e = b.width;
          break;
        case 2:
          e = b.height;
          break;
        default:
          e = Math.min(b.width, b.height)
      }
      this.setBaseFontSizeToPage(a, e / d)
    }
  }
};
_Tf._Ek._Fm._bf._S1 = function (a, b) {
  _Tf._Ek._Fm._bf._S1.superclass.apply(this, arguments)
};
extend(_Tf._Ek._Fm._bf._S1, _Tf._Ek._Fm._bf._X6);
_Tf._Ek._Fm._bf._S1._ff = _Tf._0l._N1._ff._W5;
_Tf._Ek._Fm._bf._S1.prototype._2c = function (a) {
  !1 !== _Mf._ks.emit(this.page + "-on-change", arguments) && this.pageManager.loadGameFilesAndResources(a)
};
_Tf._Ek._Fm._bf._S1.prototype._ul = function () {
  !1 !== _Mf._ks.emit(this.page + "-on-create", arguments) && _me.options.isNeedReopenSettingsDialog && _me.options.openOptionsDialog()
};
_Tf._Ek._Fm._bf._S1.prototype._N3 = function () {
  if (_Tf._Hc._Og.isWindowsPhone()) return !1;
  _Tf._Hc._Og._2d() && _Tf._N1.__i("", _Tf._41.$("_X6._d0"), function () {
    navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp && navigator.device.exitApp()
  });
  return !1
};
_Tf._Ek._Fm._bf._Sk = function (a, b) {
  _Tf._Ek._Fm._bf._Sk.superclass.apply(this, arguments)
};
extend(_Tf._Ek._Fm._bf._Sk, _Tf._Ek._Fm._bf._X6);
_Tf._Ek._Fm._bf._Sk._ff = _Tf._0l._N1._ff._1o;
_Tf._Ek._Fm._bf._Sk.prototype._N3 = function () {
  if (_Tf._Hc._Og.isWindowsPhone()) return !1;
  _Tf._Hc._Og._2d() && _Tf._N1.__i("", _Tf._41.$("_X6._d0"), function () {
    navigator && navigator.app && "function" === typeof navigator.app.exitApp && navigator.app.exitApp()
  });
  return !1
};
_Tf._Ek._Fm._bf._l7 = function (a, b) {
  _Tf._Ek._Fm._bf._l7.superclass.apply(this, arguments);
  this.tableHub = null
};
extend(_Tf._Ek._Fm._bf._l7, _Tf._Ek._Fm._bf._X6);
_Tf._Ek._Fm._bf._l7._ff = _Tf._0l._N1._ff._2l;
_Tf._Ek._Fm._bf._l7.prototype._Zp = function (a) {
  this.tableHub = a
};
_Tf._Ek._Fm._bf._l7.prototype._am = function () {
  this.base._am.apply(this, arguments) && _Mf._ks.emit(_Ag._c0, arguments)
};
_Tf._Ek._Fm._bf._l7.prototype._5c = function () {
  if (!this.tableHub || !this.tableHub.tableInstance) return !0;
  var a = this.tableHub.tableInstance._m5();
  return !a || !a.name ? !1 : !0
};
_Tf._Ek._Fm._bf._l7.prototype._t6 = function () {
  if (this.base._t6.apply(this, arguments)) {
    var a = _Mf._q1._5p();
    a && a._F7();
    if (this.tableHub && this.tableHub.tableInstance && (a = this.tableHub.tableInstance._m5()) && a.name) _me.tablesSnap.showTable(a) && this.tableHub.tableInstance._19(), _Tf._Ek._29.setDirectionForCanvas(), this.tableHub = null
  }
};
_Tf._Ek._Fm._bf._l7.prototype._jp = function (a) {
  _Tf._Ek._29.hidePageLoadingMessage();
  _me.tableTimer.hideTimer();
  return !1 !== _Mf._ks.emit(this.page + "-on-leave", arguments)
};
_Tf._Ek._Fm._bf._l7.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._N1,
      b = _Tf._0l._N1;
    a.$(b._pk).live(EventType._qc, function () {
      var c = _me.tablesSnap.getOpenedTable();
      if (c && "undefined" !== typeof c.id && !_me.tablesSnap.isWaitingResponseOnBuyIn(c.id)) {
        _me.tablesSnap.beginToBuyIn(c.id);
        var e = _Mf._q1._5p(c.id);
        if (e) {
          if (a._Lb(b._pk), a._Lb(b._4f), _Tf._Ek._29.showPageLoadingMessage(), e._5b(_me.tablesSnap.getReservedSeatIndex(c.id), _Tf._U6._29._Xh(a.val(b._ig))), c = _Mf._q1._Rm(c.id)) {
            e = {};
            if (0 < a.$(b._01).length) e.rebuy = a._H0(b._01);
            if (0 < a.$(b._kq).length) e.topUp = a._H0(b._kq);
            c.setBuyInAutoActions(e)
          }
        } else _me.tablesSnap.cancelToBuyIn(c.id)
      }
    });
    a.$(b._4f).live(EventType._qc, function () {
      var c = _me.tablesSnap.getOpenedTable();
      if (c && "undefined" !== typeof c.id && !_me.tablesSnap.isWaitingResponseOnBuyIn(c.id)) {
        _me.tablesSnap.beginToBuyIn(c.id);
        var e = _Mf._q1._5p(c.id);
        e ? (a._Lb(b._pk), a._Lb(b._4f), _Tf._Ek._29.showPageLoadingMessage(), e._u0()) : _me.tablesSnap.cancelToBuyIn(c.id)
      }
    });
    a.$(b._nf).live(EventType._qc,

      function () {
        var c = _me.tablesSnap.getOpenedTable();
        if (c && "undefined" !== typeof c.id && !_me.tablesSnap.isWaitingResponseOnBuyIn(c.id)) {
          _me.tablesSnap.beginToBuyIn(c.id);
          var e = _Mf._q1._5p(c.id),
            f = _Mf._q1._Rm(c.id);
          if (!e || !f) _me.tablesSnap.cancelToBuyIn(c.id);
          else if (a._Lb(b._nf), a._Lb(b._Oe), _Tf._Ek._29.showPageLoadingMessage(), f._kk(), e._Qr(_Tf._U6._29._Xh(a.val(b._ig)), f._Um()), f = _Mf._q1._Rm(c.id)) {
            c = {};
            if (0 < a.$(b._01).length) c.rebuy = a._H0(b._01);
            if (0 < a.$(b._kq).length) c.topUp = a._H0(b._kq);
            f.setBuyInAutoActions(c)
          }
        }
      });
    a.$(b._Oe).live(EventType._qc, function () {
      var c = _me.tablesSnap.getOpenedTable();
      if (c && "undefined" !== typeof c.id && !_me.tablesSnap.isWaitingResponseOnBuyIn(c.id)) {
        _me.tablesSnap.beginToBuyIn(c.id);
        var e = _Mf._q1._Rm(c.id);
        e && (a._Lb(b._nf), a._Lb(b._Oe), e._kk());
        _me.tablesSnap.cancelToBuyIn(c.id)
      }
    });
    var c = table.id;
    a.$(b._M2).live(EventType._qc, function () {
      a.$(_Tf._0l._N1._6i.format(c) + " " + b._Mh).hide()
    })
  }
};
_Tf._Ek._Fm._bf._l7.prototype._N9 = function () {
  !1 !== _Mf._ks.emit("table-on-periodic", arguments) && _Mf._q1._Xf()
};
_Tf._Ek._Fm._bf._l7.prototype.__6 = function () {
  this._oe();
  return !1 !== _Mf._ks.emit(this.page + "-on-ready-first", arguments)
};
_Tf._Ek._Fm._bf._l7.prototype._G1 = function () {
  _me.options.isNeedReopenSettingsDialog && _me.options.openOptionsDialog();
  return !1 !== _Mf._ks.emit(this.page + "-on-ready", arguments)
};
_Tf._Ek._Fm._bf._c9 = function (a, b) {
  _Tf._Ek._Fm._bf._c9.superclass.apply(this, arguments)
};
extend(_Tf._Ek._Fm._bf._c9, _Tf._Ek._Fm._bf._X6);
_Tf._Ek._Fm._bf._c9._ff = _Tf._0l._N1._ff._3q;
_Tf._Ek._Fm._bf._c9.prototype._rm = function () {
  this.base._ul.apply(this, arguments) && _Mf._ks.emit(_Ag._T5, arguments)
};
_Tf._Ek._Fm._bf._c9.prototype._ul = function () {
  if (this.base._ul.apply(this, arguments)) {
    var a = _Tf._N1,
      b = _Tf._0l._N1,
      c = _h8._wc._an,
      d = _Mf._Ta.isRegistrationRequireMinimumFields(),
      e = _Mf._Ta.RegistrationParams,
      f = _Tf._0l.isShortRegistration && d ? c.REGISTRATION_SHORT_MAP : c.REGISTRATION_MAP,
      g = "",
      h, j;
    for (j in e) if (e.hasOwnProperty(j)) {
      h = {};
      h[j] = "";
      if (e[j].show) {
        switch (j) {
          case "gender":
            g = c.REGISTRATION_GENDER;
            break;
          case "eMail":
            g = c._se;
            break;
          case "password":
            g = c._lm;
            break;
          default:
            g = c.REGISTRATION_INPUT
        }
        g = g.fill({
          name: j,
          pattern: e[j].pattern,
          required: d && e[j].need || !d && e[j].required ? "required" : ""
        });
        g = g.fill({
          value: ""
        });
        h[j] = g
      }
      f = f.fill(h)
    }
    a._c6(b._Pk, f)
  }
};
_Tf._Ek._Fm._bf._c9.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._N1,
      b = _Tf._0l._N1,
      c = function () {
        var c = a.$(b._lm),
          e = a.$(b._bj);
        c.val() !== e.val() ? e.addClass("invalid") : e.removeClass("invalid")
      };
    a.$(b._lm).live("keyup", c);
    a.$(b._bj).live("keyup", c)
  }
};
_Tf._Ek._Fm._bf._xl = function (a, b) {
  _Tf._Ek._Fm._bf._xl.superclass.apply(this, arguments)
};
extend(_Tf._Ek._Fm._bf._xl, _Tf._Ek._Fm._bf._X6);
_Tf._Ek._Fm._bf._xl._ff = _Tf._0l._N1._ff._qa;
_Tf._Ek._Fm._bf._xl.prototype._Sr = function () {
  !1 !== _Mf._ks.emit("tournament-on-hide", arguments) && _Mf._X1.opennedTournament && _Mf._X1.opennedTournament._z9()
};
_Tf._Ek._Fm._bf._xl.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._0l._N1;
    _Tf._N1.$("#{0} ".format(this.page) + a._Sd).live(EventType._qc, function () {
      _Mf._X1.opennedTournament && _Mf._X1.opennedTournament._10()
    })
  }
};
_Tf._Ek._Fm._bf._xl.prototype._N9 = function () {
  !1 !== _Mf._ks.emit("tournament-on-periodic", arguments) && _Mf._X1.opennedTournament && _Mf._X1.opennedTournament._10()
};
_Tf._Ek._Fm._bf._Pa = function (a, b) {
  _Tf._Ek._Fm._bf._Pa.superclass.apply(this, arguments);
  this.contentFlow = null
};
extend(_Tf._Ek._Fm._bf._Pa, _Tf._Ek._Fm._bf._X6);
_Tf._Ek._Fm._bf._Pa._ff = _Tf._0l._N1._ff._u5;
_Tf._Ek._Fm._bf._Pa.prototype._ul = function () {
  !1 !== _Mf._ks.emit("profile-on-create", arguments) && (_Mf._L2._Yn(), _Mf._L2._k0())
};
_Tf._Ek._Fm._bf._Pa.prototype._G1 = function () {
  if (!1 !== _Mf._ks.emit("profile-on-ready", arguments) && !this.contentFlow) this.contentFlow = new ContentFlow(_Tf._0l._N1.PROFILE_AVATARS_SlIDER, {
    useAddOns: "none",
    reflectionHeight: 0,
    visibleItems: 2,
    startItem: 0,
    scrollInFrom: "none",
    fixItemSize: !0,
    onclickActiveItem: function () { }
  }), this.contentFlow.init()
};
_Tf._Ek._Fm._bf._Pa.prototype._8j = function () {
  return this.contentFlow ? this.contentFlow.getActiveItem().index : 0
};
_Tf._Ek._Fm._bf._Pa.prototype._r4 = function () {
  if (!1 !== _Mf._ks.emit("profile-on-init", arguments)) {
    var a = _Tf._N1,
      b = _Tf._0l._N1,
      c = this;
    a.$(b.PROFILE_AVATARS_SlIDER_WRAPPER).live(EventType._Qb, function () {
      c.contentFlow && c.contentFlow.moveTo("next")
    });
    a.$(b.PROFILE_AVATARS_SlIDER_WRAPPER).live(EventType._ms, function () {
      c.contentFlow && c.contentFlow.moveTo("pre")
    })
  }
};
_Tf._Ek._Fm._bf._Pa.prototype._Sr = function () {
  if (!1 !== _Mf._ks.emit("profile-on-hide", arguments)) _Tf._N1.$(_Tf._0l._N1.PROFILE_AVATARS_SlIDER_WRAPPER).die(), this.contentFlow = null
};
_Tf._Ek._Fm._bf._Pa.prototype._N9 = function () {
  !1 !== _Mf._ks.emit("profile-on-periodic", arguments) && _Mf._L2._Yn()
};
_Tf._M4._9._Kf = function (a) {
  this.messageTypes = a || this.messageTypes;
  this.callbackID = 1E3;
  this.callbacksArray = {};
  this.callbacksMap = {};
  this._6g();
  this._S2 = this._S2.bind(this);
  this._L4 = this._L4.bind(this)
};
_Tf._M4._9._Kf.prototype = {
  messageTypes: _Tf._0r._Tr,
  callbackID: 0,
  callbacksArray: {},
  callbacksMap: {},
  subscribers: {},
  _Ui: function (a, b) {
    var c = this.callbackID++;
    this.callbacksArray["" + c] = {
      type: a,
      data: b
    };
    return c
  },
  executeCallbackFromMap: function (a, b) {
    try {
      if ("undefined" != typeof b) {
        var c = this.callbacksMap[b];
        "function" === typeof c && c(a)
      }
    } catch (d) { }
  },
  _L4: function (a, b) {
    var c = this.callbacksArray[a],
      d;
    if ("undefined" != typeof c) try {
      "undefined" != typeof c && (d = this.callbacksMap[c.type], "function" === typeof d && d(b, c.data),
        delete this.callbacksArray[a])
    } catch (e) { }
  },
  clear: function () {
    this.callbacksArray = {}
  },
  _6g: function () { },
  _S2: function (a, b, c) {
    _Tf._hr._Yp(this._L4, [c.id, this._G9(a, b)], this, !0)
  },
  _G9: function (a) {
    return a
  }
};
_Tf._M4._9._uh = function () {
  _Tf._M4._9._uh.superclass.apply(this, arguments)
};
extend(_Tf._M4._9._uh, _Tf._M4._9._Kf);
_Tf._M4._9._uh.prototype.subscribers = {
  _b0: function () { }
};
_Tf._M4._9._uh.prototype._6g = function () {
  this.callbacksMap[this.messageTypes._le] = this.subscribers._b0
};
_Tf._M4._9._Or = function () {
  _Tf._M4._9._Or.superclass.apply(this, arguments)
};
extend(_Tf._M4._9._Or, _Tf._M4._9._Kf);
_Tf._M4._9._Or.prototype._G9 = _Tf._0r.parse.__m;
_Tf._M4._9._Or.prototype._S2 = function (a) {
  for (var b in a) a.hasOwnProperty(b) && setTimeout(this._B0.bind(this, a[b]), 0)
};
_Tf._M4._9._Or.prototype._B0 = function (a) {
  var b, c = this.messageTypes,
    a = this._G9(a);
  if (null !== a) switch (b = a.type, b) {
    case c._l:
    case c._S7:
    case c._Dm:
    case c._G8:
    case c._H6:
    case c._xs:
    case c._Wj:
    case c._Hq:
    case c._81:
    case c._Zg:
    case c._B8:
    case c._g5:
    case c._fr:
    case c._j4:
    case c._d7:
    case c._K8:
    case c._ga:
    case c._E1:
    case c._l2:
    case c._N:
    case c._u:
      this.executeCallbackFromMap(a, b);
      break;
    case c._3m:
    case c._z3:
    case c._Hm:
    case c._d2:
    case c._U7:
    case c._Gq:
    case c._aq:
    case c._88:
    case c._ld:
    case c._X:
    case c._5m:
      b = a.srcMsgId;
      this._L4(b, a);
      break;
    case c._sf:
      b = a.srcMsgId;
      if (0 === b) {
        this.executeCallbackFromMap(a, c._Bj);
        break
      }
      this._L4(b, a);
      break;
    case c._Q8:
      b = a.srcMsgId;
      if (0 === b) {
        this.executeCallbackFromMap(a, c._ck);
        break
      }
      this._L4(b, a);
      break;
    case c._4j:
      b = a.srcMsgId;
      if (0 === b) {
        this.executeCallbackFromMap(a, c._Y2);
        break
      }
      this._L4(b, a);
      break;
    case c._Y9:
    case c._bp:
      b = a.srcMsgId;
      if (0 === b) {
        this.executeCallbackFromMap(a, c._5o);
        break
      }
      this._L4(b, a);
      break;
    case c._oi:
      break;
    default:
      _Tf._hr._Yp(function (a) {
        _Mf._ks.emit(_Ag._em, [a])
      },
        a)
  }
};
_Tf._M4._9._Or.prototype.subscribers = {
  serverDownCallback: function (a, b) {
    _Mf._L2.onServerDown(a, b)
  },
  _P2: function (a, b) {
    _Mf._q1._ie(a, b)
  },
  _3d: function (a, b) {
    _Mf._q1._a4(a, b)
  },
  _vm: function (a, b) {
    _Mf._q1._4r(a, b)
  },
  gameTableDescriptionCallback: function (a, b) {
    _Mf._q1.onGameTableDescription(a, b)
  },
  _ns: function (a) {
    _Mf._L2._c3(a)
  },
  _op: function (a, b) {
    _Mf._L2._Wl(a, b)
  },
  _jk: function (a, b) {
    _Mf._Up._Sg(a, b)
  },
  _el: function (a) {
    _Mf._L2._z6(a)
  },
  _W: function (a) {
    _Mf._Up._Q1(a)
  },
  _V3: function (a) {
    _Mf._ks.emit(_Ag._rq, arguments)
  },
  _Ad: function (a) {
    _Mf._Ta._Kd(a)
  },
  _s0: function (a) {
    _Mf._X1._gn(a)
  },
  _lo: function (a, b) {
    _Mf._Up._Ck(a, b)
  },
  _kd: function (a, b) {
    _Mf._Up.onTablesList(a, b)
  },
  _F2: function (a, b) {
    _Mf._Up.onTablesList(a, b)
  },
  _mb: function (a, b) {
    _Mf._q1._Ef(a, b)
  },
  _Q4: function (a, b) {
    _Mf._q1._R(a, b)
  },
  _fh: function (a, b) {
    _Mf._q1._Ur(a, b)
  },
  _4o: function (a, b) {
    _Mf._q1._r0(a, b)
  },
  _Jq: function (a, b) {
    _Mf._q1._f3(a, b)
  },
  _hd: function (a, b) {
    _Mf._Up._m0(a, b)
  },
  _rg: function (a, b) {
    _Mf._q1._N4(a, b)
  },
  _td: function (a, b) {
    _Mf._q1._Vh(a, b)
  },
  _Vd: function (a, b) {
    _Mf._q1._Fn(a, b)
  },
  _26: function (a, b) {
    _Mf._q1._sa(a,
      b)
  },
  _Ka: function (a, b) {
    _Mf._q1._Hd(a, b)
  },
  _i2: function (a, b) {
    _Mf._q1._u1(a, b)
  },
  crapsPlayCallback: function (a, b) {
    _Mf._q1.onCrapsPlay(a, b)
  },
  _v1: function (a) {
    _Mf._L2._1q(a)
  },
  _Qq: function () { },
  _On: function (a) {
    _Mf._X1._Sb(a)
  },
  _Nb: function (a) {
    _Mf._X1._Pi(a)
  },
  _Ha: function (a) {
    _Mf._X1.opennedTournament._g0(a)
  },
  _Bb: function (a) {
    _Mf._X1.opennedTournament._5l(a)
  },
  _0a: function (a, b) {
    _Mf._X1.opennedTournament._ti(a, b)
  },
  _y6: function (a, b) {
    _Mf._X1.opennedTournament._m6(a, b)
  },
  _fb: function (a) {
    _Mf._X1.opennedTournament._V9(a)
  },
  _Zr: function (a) {
    _Mf._X1.opennedTournament._p2(a)
  },
  _T3: function (a) {
    _Mf._X1.opennedTournament._99(a)
  },
  _L7: function (a) {
    _Mf._X1.opennedTournament._H8(a)
  },
  _Uh: function (a) {
    _Mf._X1._nb(a)
  },
  _l5: function (a) {
    _Mf._X1._Er(a)
  },
  _en: function (a) {
    _Mf._X1._Ib(a)
  },
  _as: function (a) {
    _Mf._X1.opennedTournament._4h(a)
  },
  _ln: function (a) {
    _Mf._X1.opennedTournament._x3(a)
  },
  _w2: function (a) {
    _Mf._X1.opennedTournament._Jd(a)
  },
  _jb: function (a, b) {
    _Mf._q1._Jd(a, b)
  },
  _rn: function (a, b) {
    _Mf._q1._hc(a, b)
  },
  _Gm: function (a) {
    _Mf._Up._Hp(a)
  },
  _Ia: function (a) {
    _Mf._X1.opennedTournament._Hp(a)
  },
  _2p: function (a) {
    _Mf._X1.opennedTournament._3o(a)
  },
  _go: function (a) {
    // alert("_go "+JSON.stringify(a));
    _Mf._X1.opennedTournament._q(a)
  },
  _Da: function (a, b) {
    _Mf._q1._Ng(a, b)
  },
  _Cp: function (a) {
    _Mf._L2._K6(a)
  },
  _2q: function (a) {
    _Mf._L2._Ho(a)
  },
  _Jl: function (a) {
    _Mf._Up._Oa(a)
  },
  _sk: function (a, b) {
    _Mf._q1._O9(a, b)
  },
  _od: function (a, b) {
    _Mf._q1._Dk(a, b)
  },
  _nm: function (a, b) {
    _Mf._q1._ue(a, b)
  }
};
_Tf._M4._9._Or.prototype._6g = function () {
  var a = this.messageTypes;
  // alert("a._A1 "+JSON.stringify(a._E1));
  this.callbacksMap[a._l] = this.subscribers.serverDownCallback;
  this.callbacksMap[a._G8] = this.subscribers._vm;
  this.callbacksMap[a._H6] = this.subscribers._vm;
  this.callbacksMap[a._xs] = this.subscribers._vm;
  this.callbacksMap[a._Wj] = this.subscribers._vm;
  this.callbacksMap[a._Hq] = this.subscribers.gameTableDescriptionCallback;
  this.callbacksMap[a._81] = this.subscribers._vm;
  this.callbacksMap[a._qh] = this.subscribers._ns;
  this.callbacksMap[a._vg] = this.subscribers._op;
  this.callbacksMap[a._D7] = this.subscribers._jk;
  this.callbacksMap[a._7s] = this.subscribers._Cp;
  this.callbacksMap[a._j0] = this.subscribers._Cp;
  this.callbacksMap[a._Za] = this.subscribers._2q;
  this.callbacksMap[a._5o] = this.subscribers._el;
  this.callbacksMap[a._Zg] = this.subscribers._W;
  this.callbacksMap[a._49] = this.subscribers._V3;
  this.callbacksMap[a._S7] = this.subscribers._Ad;
  this.callbacksMap[a._Dm] = this.subscribers._s0;
  this.callbacksMap[a._Ce] = this.subscribers._lo;
  this.callbacksMap[a._Tg] = this.subscribers._kd;
  this.callbacksMap[a._V8] = this.subscribers._F2;
  this.callbacksMap[a._Bj] = this.subscribers._mb;
  this.callbacksMap[a._g5] = this.subscribers._4o;
  this.callbacksMap[a._18] = this.subscribers._Jq;
  this.callbacksMap[a._B8] = this.subscribers._hd;
  this.callbacksMap[a._Bs] = this.subscribers._hd;
  this.callbacksMap[a._bp] = this.subscribers._Qq;
  this.callbacksMap[a._0n] = this.subscribers._v1;
  this.callbacksMap[a._E2] = this.subscribers._rg;
  this.callbacksMap[a._wr] = this.subscribers._td;
  this.callbacksMap[a._U8] = this.subscribers._Vd;
  this.callbacksMap[a._r5] = this.subscribers._Ka;
  this.callbacksMap[a._i4] = this.subscribers._i2;
  this.callbacksMap[a._Fr] = this.subscribers._3d;
  this.callbacksMap[a._6p] = this.subscribers._P2;
  this.callbacksMap[a._e6] = this.subscribers._Q4;
  this.callbacksMap[a._Dq] = this.subscribers._fh;
  this.callbacksMap[a._ck] = this.subscribers._jb;
  this.callbacksMap[a._A1] = this.subscribers._rn;
  this.callbacksMap[a._Jg] = this.subscribers._w2;
  this.callbacksMap[a._l2] = this.subscribers._Da;
  this.callbacksMap[a._u8] = this.subscribers._On;
  this.callbacksMap[a._71] = this.subscribers._Nb;
  this.callbacksMap[a._7m] = this.subscribers._Nb;
  this.callbacksMap[a._Jm] = this.subscribers._Ha;
  this.callbacksMap[a._Jj] = this.subscribers._Bb;
  this.callbacksMap[a._x6] = this.subscribers._0a;
  this.callbacksMap[a._Wb] = this.subscribers._Zr;
  this.callbacksMap[a._Ds] = this.subscribers._T3;
  this.callbacksMap[a._3s] = this.subscribers._y6;
  this.callbacksMap[a._9r] = this.subscribers._fb;
  this.callbacksMap[a._Y2] = this.subscribers._L7;
  this.callbacksMap[a._fr] = this.subscribers._Uh;
  this.callbacksMap[a._j4] = this.subscribers._l5;
  this.callbacksMap[a._d7] = this.subscribers._en;
  this.callbacksMap[a._K8] = this.subscribers._as;
  this.callbacksMap[a._ga] = this.subscribers._ln;
  this.callbacksMap[a._o1] = this.subscribers._Gm;
  this.callbacksMap[a._ye] = this.subscribers._Ia;
  this.callbacksMap[a._kn] = this.subscribers._mb;
  this.callbacksMap[a._Aj] = this.subscribers._i2;
  this.callbacksMap[a._is] = this.subscribers._i2;
  this.callbacksMap[a._h] = this.subscribers._i2;
  this.callbacksMap[a._Xc] = this.subscribers.crapsPlayCallback;
  this.callbacksMap[a._Op] = this.subscribers._3d;
  this.callbacksMap[a._yk] = this.subscribers._P2;
  this.callbacksMap[a._Lp] = this.subscribers._Jq;
  this.callbacksMap[a._oj] = this.subscribers._Q4;
  this.callbacksMap[a._ea] = this.subscribers._fh;
  this.callbacksMap[a._md] = this.subscribers._26;
  this.callbacksMap[a._X] = this.subscribers._2p;
  this.callbacksMap[a._E1] = this.subscribers._go;
  this.callbacksMap[a._3n] = this.subscribers._Jl;
  this.callbacksMap[a.__e] = this.subscribers._sk;
  this.callbacksMap[a._N] = this.subscribers._od;
  this.callbacksMap[a._u] = this.subscribers._nm
};
_Tf._M4._9._Xj = function () {
  _Tf._M4._9._Xj.superclass.apply(this, arguments)
};
extend(_Tf._M4._9._Xj, _Tf._M4._9._Kf);
_Tf._M4._9._Xj.prototype.subscribers = {
  _Rg: function (a, b) {
    _Mf._L2._l1(a, b);
    _Xl.CordovaGuest && _Xl.CordovaGuest._hj._l1(a, b)
  },
  getAuthAfterRegistrationHandler: function (a, b) {
    _Mf._L2.onLoginToAuthServiceAfterRegistration(a, b);
    if (_Xl.CordovaGuest) _Xl.CordovaGuest._hj.onLoginToAuthServiceAfterRegistration(a, b)
  }
};
_Tf._M4._9._Xj.prototype._6g = function () {
  var a = this.messageTypes;
  this.callbacksMap[a._z0] = this.subscribers._Rg;
  this.callbacksMap[a._1i] = this.subscribers.getAuthAfterRegistrationHandler
};
_Tf._M4._9._17 = function () {
  _Tf._M4._9._17.superclass.apply(this, arguments)
};
extend(_Tf._M4._9._17, _Tf._M4._9._Kf);
_Tf._M4._9._17.prototype.subscribers = {
  _Qc: function (a) {
    _Mf._L2._Nl(a, !1)
  },
  _Pe: function (a) {
    _Mf._L2._Nl(a, !0)
  }
};
_Tf._M4._9._17.prototype._6g = function () {
  var a = this.messageTypes;
  this.callbacksMap[a._Yi] = this.subscribers._Qc;
  this.callbacksMap[a._5n] = this.subscribers._Pe
};
_Tf._M4._9._55 = function () {
  _Tf._M4._9._55.superclass.apply(this, arguments)
};
extend(_Tf._M4._9._55, _Tf._M4._9._Kf);
_Tf._M4._9._55.prototype.subscribers = {
  _V: function (a) {
    _Mf._L2._jo(a)
  }
};
_Tf._M4._9._55.prototype._6g = function () {
  this.callbacksMap[this.messageTypes._m9] = this.subscribers._V
};
_Tf._M4._9._A5 = function () {
  _Tf._M4._9._A5.superclass.apply(this, arguments)
};
extend(_Tf._M4._9._A5, _Tf._M4._9._Kf);
_Tf._M4._9._A5.prototype.subscribers = {
  _pc: function (a) {
    _Mf._L2._w7(a)
  },
  _S0: function (a) {
    _Mf._L2._n0(a)
  }
};
_Tf._M4._9._A5.prototype._6g = function () {
  var a = this.messageTypes;
  this.callbacksMap[a._I1] = this.subscribers._pc;
  this.callbacksMap[a._66] = this.subscribers._S0
};
_Tf._M4._A3._Kf = function (a) {
  a = a || {};
  this.attemptCountOnError = 0;
  this._61 = a._61 || 5;
  this.config = a;
  this.delay = a._p || 3E4
};
_Tf._M4._A3._Kf.prototype = {
  attemptCountOnError: 0,
  _61: 3,
  delay: 3E4,
  config: null,
  send: function (a, b, c, d, e) {
    this._39(a, b, c, d, e)
  },
  simplePolling: function (a, b, c, d, e) {
    $.ajax({
      url: a,
      type: "POST",
      data: b,
      context: this,
      success: function (f) {
        this._Ya(f, a, b, c, d, e)
      },
      error: function (a, b) {
        this._q2(a, b)
      }
    })
  },
  _39: function (a, b, c, d, e) {
    $.jsonp({
      url: a,
      callbackParameter: "callback",
      data: b,
      context: this,
      success: function (f) {
        this._Ya(f, a, b, c, d, e)
      },
      error: function (a, b) {
        this._q2(a, b)
      }
    })
  },
  _Ya: function (a, b, c, d, e, f) {
    this.hasConnectionError() && this.clearConnectionErrors();
    d.call(e || this, a, f, c)
  },
  _q2: function (a) {
    this.isDisconnecting() && this.catchConnectionError();
    this.isDisconnectingTooLong() ? this.catchDisconnectionState(a) : this.isDisconnected() ? this.catchDisconnectionState(a) : this._7e(a.url) && $.jsonp(a)
  },
  _Bc: function (a, b) {
    return -1 < a.search(b)
  },
  _7e: function () {
    return !1
  },
  _44: function () {
    return !1
  },
  hasConnectionError: function () {
    return 0 < this.attemptCountOnError
  },
  isDisconnected: function () {
    return this.attemptCountOnError > this._61
  },
  isDisconnecting: function () {
    return this.attemptCountOnError < this._61
  },
  isDisconnectingTooLong: function () {
    return this._61 === this.attemptCountOnError
  },
  clearConnectionErrors: function () {
    this.attemptCountOnError = 0
  },
  catchConnectionError: function () {
    this.attemptCountOnError++
  },
  _0e: function () {
    this.attemptCountOnError = this._61 + 1
  },
  catchDisconnectionState: function (a) {
    this._0e();
    this._44(a.url) && setTimeout(function () {
      $.jsonp(a)
    }, this.delay)
  }
};
_Tf._M4._A3._Or = function (a, b) {
  this.receiver = b;
  _Tf._M4._A3._Or.superclass.apply(this, arguments);
  this.cursor = this.token = 0;
  this.isListening = !0;
  this.isWaitNewToken = !1;
  // alert(a._La);
  this.urlUpdates = a.address + a._La;
  this.urlPresence = a.address + a._6l;
  this.presenceInterval = null;
  this._p = a._p;
  this._Zj = this._Zj.bind(this)
};
extend(_Tf._M4._A3._Or, _Tf._M4._A3._Kf);
_Tf._M4._A3._Or.prototype._Jo = function (a, b) {
  this.isListening = !0;
  if (!(this.token === a && !this.isWaitNewToken && !b)) this._1n(), this.cursor = 0, this.token = a, this._Zj(), this.presenceInterval = setInterval(this._Zj, this._p), this.listening()
};
_Tf._M4._A3._Or.prototype._cq = function () {
  this.isListening = !1
};
_Tf._M4._A3._Or.prototype._1n = function () {
  clearInterval(this.presenceInterval);
  this.presenceInterval = null
};
_Tf._M4._A3._Or.prototype._N6 = function (a) {
  this._Jo(a)
};
_Tf._M4._A3._Or.prototype._0e = function () {
  this._cq();
  this.attemptCountOnError = this._61 + 1;
  _Mf.refreshDueToConnectionErrors(_Tf._41.$("_e5._S0"))
};
_Tf._M4._A3._Or.prototype._fs = function () {
  this._cq();
  this._1n();
  var a = _Tf._41.$("_e5._c0");
  _Tf._0l.autoLoginIfDisconnected ? _Mf.loginDueToAuthenticationErrors(a) : _Mf.refreshDueToAuthenticationErrors(a)
};
_Tf._M4._A3._Or.prototype._Kq = function () {
  this._Jo(this.token, !0);
  _Mf.refresh(_Tf._41.$("_e5._v4"));
  this.clearConnectionErrors()
};
_Tf._M4._A3._Or.prototype.send = function (a, b, c, d, e) {
  b.token = this.token;
  this._Bc(a, _Tf._0l._xj._4l.controllerGetAuth) ? this._39(a, b, c, d, e) : this._39(a, b, this._Oc)
};
_Tf._M4._A3._Or.prototype._Q5 = function (a, b, c, d, e) {
  b.old_token = this.token;
  this.isWaitNewToken = !b.keep_connection;
  this._39(a, b, function (a) {
    this._wa(a) && (this._N6(a.token), c.call(d, a, e, b))
  }, this, e)
};
_Tf._M4._A3._Or.prototype.listening = function () {
  this._39(this.urlUpdates, {
    token: this.token,
    cursor: this.cursor
  }, this._S2)
};
_Tf._M4._A3._Or.prototype._Zj = function () {
  this._39(this.urlPresence, {
    token: this.token
  }, this._Go)
};
_Tf._M4._A3._Or.prototype._Ya = function (a, b, c, d, e, f) {
  var g = _Tf._0l._xj._af;
  this.hasConnectionError() && (this._Bc(b, g._6l) || this._Bc(b, g._25)) ? (this.isDisconnected() && this._Kq(), this.clearConnectionErrors(), this._Bc(b, g._25) && d.call(this, a)) : d.call(e || this, a, f, c)
};
_Tf._M4._A3._Or.prototype._Oc = function (a) {
  if (a.token == this.token && !a.success && !this.isWaitNewToken && !this.hasConnectionError()) switch (a.errorcode) {
    case _Tf._dc.NodeProxyResultCode._s7:
    case _Tf._dc.NodeProxyResultCode._ur:
      this._0e();
      break;
    case _Tf._dc.NodeProxyResultCode._M7:
      this._fs()
  }
};
_Tf._M4._A3._Or.prototype._Go = function (a) {
  if (a.token == this.token && !a.success && !this.isWaitNewToken && !this.hasConnectionError()) switch (a.errorcode) {
    case _Tf._dc.NodeProxyResultCode._M7:
      this._fs()
  }
};
_Tf._M4._A3._Or.prototype._S2 = function (a) {
  if (a.token == this.token) if (a.success) this.cursor = a.cursor, _Tf._hr._Yp(this.receiver._S2, a.messages, this.receiver), this.isListening && this.listening();
  else if (!this.isWaitNewToken && !this.hasConnectionError()) switch (a.errorcode) {
    case _Tf._dc.NodeProxyResultCode._M7:
      this._fs()
  }
};
_Tf._M4._A3._Or.prototype._wa = function (a) {
  this.isWaitNewToken = !1;
  if (!a.success) switch (a.errorcode) {
    case _Tf._dc.NodeProxyResultCode._s7:
      return this._0e(), !1
  }
  return !0
};
_Tf._M4._A3._Or.prototype._7e = function (a) {
  var b = _Tf._0l._xj;
  return this._Bc(a, b._af.__j) || this._Bc(a, b._af._La) || this._Bc(a, b._af._25) || this._Bc(a, b._4l.controllerGetAuth)
};
_Tf._M4._A3._Or.prototype._44 = function (a) {
  return this._Bc(a, _Tf._0l._xj._af._25)
};
_Tf._M4._A3._55 = function (a) {
  _Tf._M4._A3._55.superclass.apply(this, arguments);
  this._61 = a._61 || 1
};
extend(_Tf._M4._A3._55, _Tf._M4._A3._Kf);
_Tf._M4._A3._55.prototype._0e = function () {
  this.attemptCountOnError = this._61 + 1;
  _Mf._L2._jo()
};
_Tf._M4._A3._55.prototype._7e = function (a) {
  return this._Bc(a, _Tf._0l._xj._m7._Vq)
};
_Tf._M4._20._Kf = function (a, b, c, d, e) {
  // alert("messageTemplates a "+JSON.stringify(a));
  // alert("messageTemplates b "+JSON.stringify(b));
  // alert("messageTemplates c "+JSON.stringify(c));
  // alert("messageTemplates d "+JSON.stringify(d));
  // alert("messageTemplates e "+JSON.stringify(e));
  this.messageTypes = d || this.messageTypes;
  this.messageTemplates = e || this.messageTemplates;
  // alert("messageTemplates aa "+JSON.stringify(this.messageTemplates._q));
  this.receiver = c;
  this.ambassador = b;
  this.connectionConfig = a
};
_Tf._M4._20._Kf.prototype = {
  receiver: null,
  ambassador: null,
  connectionConfig: null,
  messageTypes: _Tf._0r._Tr,
  messageTemplates: _Tf._0r._qn,
  _Cs: function (a, b) {
    return b
  },
  _i0: function () {
    return ""
  },
  send: function (a, b, c) {
    b = b || {};
    c = c || {};
    b.id = this.receiver._Ui(a, c);
    b = this._Cs(a, b);
    _Tf._hr._Yp(this._09, [a, b], this, !0)
  },
  _09: function (a, b) {
    this.ambassador.send(this._i0(a), b, this.receiver._S2, this.receiver, a)
  },
  clear: function () {
    this.receiver.clear()
  },
  isDisconnected: function () {
    return this.ambassador.isDisconnected()
  }
};
_Tf._M4._20._uh = function (a, b, c) {
  _Tf._M4._20._uh.superclass.apply(this, arguments)
};
extend(_Tf._M4._20._uh, _Tf._M4._20._Kf);
_Tf._M4._20._uh.prototype._i0 = function () {
  return this.connectionConfig.address
};
_Tf._M4._20._Xj = function (a, b, c) {
  _Tf._M4._20._Xj.superclass.apply(this, arguments)
};
extend(_Tf._M4._20._Xj, _Tf._M4._20._Kf);
_Tf._M4._20._Xj.prototype._i0 = function (a) {
  var b = this.messageTypes,
    c = "";
  switch (a) {
    case b._z0:
      c = this.connectionConfig.address + this.connectionConfig.controllerGetAuth;
      break;
    case b._1i:
      c = this.connectionConfig.address + this.connectionConfig.controllerGetAuthAfterRegistration
  }
  return c
};
_Tf._M4._20._Or = function (a, b, c) {
  _Tf._M4._20._Or.superclass.apply(this, arguments)
};
extend(_Tf._M4._20._Or, _Tf._M4._20._Kf);
_Tf._M4._20._Or.prototype.servers = {
  lobby: "",
  game: "",
  tournament: ""
};
_Tf._M4._20._Or.prototype._ic = function (a) {
  var a = a || {}, b;
  for (b in a) a.hasOwnProperty(b) && b in this.servers && (this.servers[b] = a[b])
};
_Tf._M4._20._Or.prototype._i0 = function (a) {
  var b = "";
  switch (a) {
    default: b = this.connectionConfig.address + this.connectionConfig.__j
  }
  return b
};
_Tf._M4._20._Or.prototype._Cs = function (a, b) {
  var c = this.messageTypes,
    d = {
      message: this.fillTemplate(this.messageTemplates[a], b),
      address: b._address || ""
    };
  switch (a) {
    case c._49:
    case c._Ce:
    case c._5o:
    case c._Bs:
    case c._qh:
    case c._0n:
    case c._u8:
    case c._71:
    case c._Jm:
    case c._Jj:
    case c._3s:
    case c._7s:
    case c._Za:
    case c._o1:
    case c._ye:
      d.address = d.address || this.servers.lobby;
      break;
    case c._Tg:
    case c._V8:
    case c._ck:
    case c._A1:
    case c.__e:
    case c._Bj:
    case c._vg:
    case c._D7:
    case c._E2:
    case c._wr:
    case c._U8:
    case c._r5:
    case c._i4:
    case c._h:
    case c._Xc:
    case c._Dq:
    case c._e6:
    case c._Fr:
    case c._6p:
    case c._j0:
    case c._18:
    case c._3n:
      d.address = d.address || this.servers.game;
      break;
    case c._x6:
    case c._9r:
    case c._Y2:
    case c._Wb:
    case c._Ds:
    case c._Jg:
    case c._7m:
    case c._kn:
    case c._Aj:
    case c._is:
    case c._ea:
    case c._oj:
    case c._Op:
    case c._md:
    case c._yk:
    case c._Lp:
    case c._X:
      d.address = d.address || this.servers.tournament
  }
  return d
};
_Tf._M4._20._Or.prototype.escape = function (a) {
  var b = {
    "&": "amp",
    "<": "lt",
    ">": "gt",
    '"': "quot",
    "'": "#39"
  };
  return a.replace(/[&<>"']/g, function (a) {
    return "&" + b[a] + ";"
  })
};
_Tf._M4._20._Or.prototype.fillTemplate = function (a, b) {
  var c = {}, d;
  for (d in a) if (a.hasOwnProperty(d)) if ("undefined" === typeof b[d]) c[d] = ("" + a[d]).fill(b);
  else if (Array.isArray(b[d])) {
    for (var e = [], f = 0; f < b[d].length; f++) e[f] = b[d][f];
    c[d] = e
  } else c[d] = this.escape("" + b[d]);
  d = '<m t="' + c.$ + '" id="' + b.id + '">';
  delete c.$;
  for (var g in c) if (c.hasOwnProperty(g)) if (Array.isArray(c[g])) {
    d += '<h n="' + g + '"><a>';
    for (f = 0; f < c[g].length; f++) d = "stakes" == g ? d + ('<st t="' + c[g][f].type + '" a="' + c[g][f].amount + '" p="' + c[g][f].point +
      '"/>') : d + ("<n>" + c[g][f] + "</n>");
    d += "</a></h>"
  } else d += '<h n="' + g + '">' + c[g] + "</h>";
  return d + "</m>"
};
_Tf._M4._20._17 = function (a, b, c) {
  _Tf._M4._20._17.superclass.apply(this, arguments)
};
extend(_Tf._M4._20._17, _Tf._M4._20._Kf);
_Tf._M4._20._17.prototype._i0 = function (a) {
  var b = this.messageTypes,
    c = "";
  switch (a) {
    case b._Yi:
    case b._5n:
      c = this.connectionConfig.address + this.connectionConfig._25
  }
  return c
};
_Tf._M4._20._17.prototype._09 = function (a, b) {
  this.ambassador._Q5(this._i0(a), b, this.receiver._S2, this.receiver, a)
};
_Tf._M4._20._55 = function (a, b, c) {
  _Tf._M4._20._55.superclass.apply(this, arguments)
};
extend(_Tf._M4._20._55, _Tf._M4._20._Kf);
_Tf._M4._20._55.prototype._i0 = function (a) {
  var b = this.messageTypes,
    c = "";
  switch (a) {
    case b._m9:
      c = this.connectionConfig.address + this.connectionConfig._Vq
  }
  return c
};
_Tf._M4._20._A5 = function (a, b, c) {
  _Tf._M4._20._A5.superclass.apply(this, arguments)
};
extend(_Tf._M4._20._A5, _Tf._M4._20._Kf);
_Tf._M4._20._A5.prototype._i0 = function (a) {
  var b = this.messageTypes,
    c = "";
  switch (a) {
    case b._I1:
      c = this.connectionConfig.address + this.connectionConfig._eo;
      break;
    case b._66:
      c = this.connectionConfig.address + this.connectionConfig.__8
  }
  return c
};
_Tf._Ek._29 = {
  _isSupportingCanvas: null,
  isSupportingCanvas: function () {
    if (null == this._isSupportingCanvas) this._isSupportingCanvas = !!document.createElement("canvas").getContext;
    return this._isSupportingCanvas
  },
  fillRectToClear: function (a, b, c, d, e) {
    a.clearRect(b, c, d, e)
  },
  _ca: function (a, b, c) {
    b = b || _Tf._dc.MoneyType._i4;
    c = c || !1;
    "number" != typeof a && (a = parseInt(a));
    var d = _Tf._U6._29._ps(a),
      a = 0 == a % 100 || a == d ? 0 : 2,
      c = c || d >= _Tf._41.$("_L4.__9") ? this._gm(d, a) : this.getSeparatedByThousandsMoneyString(d.toFixed(a));
    return _Tf._41.getLocale()._z0[b].format(c)
  },
  _gm: function (a, b) {
    var c = a.toFixed(b),
      d = _Tf._41.getLocale()._L4,
      e = "";
    if (a >= d._O4) a = Math.round(a / d.__9 / 10), e = d._H3;
    else if (a >= d.__9) a = Math.round(a / d._37 / 10), e = d._g9;
    else if (a >= d._37) a = Math.round(a / d._K1 / 10), e = d._V;
    else if (a >= d._K1) a = Math.round(a / 10), e = d._w2;
    return c = e && 0 < e.length ? this.getSeparatedByThousandsMoneyString((a / 100).toFixed(0 == a % 100 ? 0 : 1)) + e : this.getSeparatedByThousandsMoneyString(c)
  },
  getSeparatedByThousandsMoneyString: function (a) {
    if (!_Mf._Ta.isUseFundsThousandsSeparator()) return a;
    a = a.toString();
    if (/,/.test(a)) return a;
    var b = null,
      c = "",
      d = a,
      e = "";
    if (b = /(\d+)\.(\d+)/.exec(a)) d = b[1], e = b[2];
    if (!d || 3 > d.length) return a;
    a = d.length % 3;
    for (0 != a && (c += d.substr(0, a)); a < d.length; a += 3) 0 != a && (c += ","), c += d.substr(a, 3);
    0 < e.length && (c += "." + e);
    return c
  },
  getPlayerDisplayName: function (a, b) {
    return !_Mf._Ta.isUseDisplayNameInsteadOfNickInClient() || !b || 0 === b.length ? a : b
  },
  getDateFromString: function (a) {
    if ("0000-00-00 00:00:00" === a) return null;
    a = a.match(/(\d+)-(\d+)-(\d+)\s(\d+):(\d+):(\d+)/);
    return new Date(a[1], a[2] - 1, a[3], a[4], a[5], a[6], 0)
  },
  getTimeInterval: function (a, b) {
    return b.getTime() - a.getTime()
  },
  getLocalDateFromString: function (a, b) {
    var c = this.getDateFromString(a);
    if (!c) return null;
    c.setTime(c.getTime() + _Mf._Ta.getServerTimeOffset());
    b || c.setSeconds(0);
    return c
  },
  _97: function (a, b) {
    var c = this.getLocalDateFromString(a),
      d = 0,
      e = 0,
      f = "",
      g = _Tf._41.getLocale()._N5,
      f = "";
    if (!c) return "-";
    f = "undefined" === typeof b ? "undefined" === typeof g.type ? "undefined" === typeof _h8._0l.hourFormat ? "24" : _h8._0l.hourFormat : 12 == g.type ? "12" :
      "24" : b ? "12" : "24";
    d = c.getHours();
    e = c.getMinutes();
    if ("12" == f) if (f = g._A2, 12 < d) d -= 12, f = g._n1;
    else if (0 == d) d = 12;
    else {
      if (12 == d) d = 0, f = g._A2
    } else f = "";
    10 > e && (e = "0" + e);
    return _Tf._41.$("_o6")[c.getMonth() + 1] + ". " + c.getDate() + ", " + c.getFullYear() + ", " + d + ":" + e + f
  },
  _Lm: function (a) {
    return -1 === a ? "?" : "" + (a + 1)
  },
  _63: function (a) {
    return "" + (a + 1)
  },
  _He: function (a, b, c) {
    return !b ? this._ca(a, c, !0) : this._ca(a, c, !0) + _Tf._41.$("_m") + this._ca(b, c, !0)
  },
  _nj: function (a, b, c) {
    var b = b || !1,
      d = _Tf._41.getLocale()._88,
      e = {
        d: {
          label: d._v8,
          value: 86400
        },
        h: {
          label: d._5,
          value: 3600
        },
        m: {
          label: d._H4,
          value: 60
        }
      };
    b && (e.s = {
      label: d._e7,
      value: 1
    });
    var b = "",
      f;
    for (f in e) e.hasOwnProperty(f) && (d = Math.floor(a / e[f].value), 0 != d && (a -= e[f].value * d, 0 < a && "undefined" === typeof e["" + (parseInt(f) + 1)] && (d += 1), b += d + e[f].label + " ", c && (c[f] = d)));
    return b ? b : "< 1m"
  },
  getRemainingTimeString: function (a) {
    var b = _Tf._41.getLocale()._88,
      c = "",
      d = Math.floor(a % 31536E6 / 864E5),
      e = Math.floor(a % 864E5 / 36E5),
      f = Math.floor(a % 36E5 / 6E4),
      a = Math.round(a % 6E4 / 1E3);
    d && (c += d + b._v8 + ", ");
    return c + ((10 > e ? "0" + e : e) + ":" + (10 > f ? "0" + f : f) + ":" + (10 > a ? "0" + a : a))
  },
  _T9: function (a, b, c, d, e, f, g) {
    var g = g || "center",
      h = Math.floor(a / 2),
      j = e.x,
      c = Math.round(e.y - c / 2),
      e = [],
      k = b + d,
      f = f || 0;
    "center" == g && (j = 2 * h != a ? j - ((h + 0.5) * b + h * d) : j - (h * b + (h - 0.5) * d));
    "right" == g && (j -= k * a + d);
    for (b = 0; b < a; b++) e.push(new _8n(Math.round(j), c)), j += k, c += f;
    return e
  },
  drawImage: function (a, b, c, d, e, f, g, h, j, k, l) {
    b && (0 != e ? this.drawImageWithAngle(a, b, c, d, e, f, g, h, j, k, l) : f && g ? h && j ? (k = k || b.width, l = l || b.height, a.drawImage(b, c, d, h * (b.width / k), j * (b.height / l), -k >> 1, -l >> 1, f, g)) : a.drawImage(b, c - (f >> 1), d - (g >> 1), f, g) : a.drawImage(b, c - (b.width >> 1), c - (b.height >> 1)))
  },
  drawPartImage: function (a, b, c, d, e, f, g, h, j, k) {
    b && a.drawImage(b, c, d, e, f, g, h, j, k)
  },
  drawImageWithAngle: function (a, b, c, d, e, f, g, h, j, k, l) {
    a.save();
    var n = Math.sin(e),
      e = Math.cos(e);
    a.transform(e, n, -n, e, c, d);
    f && g ? h && j ? (k = k || b.width, l = l || b.height, a.drawImage(b, 0, 0, h * (b.width / k), j * (b.height / l), -k >> 1, -l >> 1, f, g)) : a.drawImage(b, -f >> 1, -g >> 1, f, g) : a.drawImage(b, -b.width >> 1, -b.height >> 1);
    a.restore()
  },
  fillText: function (a,
    b, c, d, e, f, g, h, j, k, l, n, m, o, p, q) {
    var b = b || null,
      k = k || !1,
      l = l || "left",
      f = f || _h8._0l._vn.DEFAULT,
      h = h || !1,
      j = j || f,
      m = m || null,
      n = n ? n : b.textWeight,
      o = o ? o : b.textFace,
      r = _Tf._41.$("_Y1");
    "string" != typeof c && (c = "" + c);
    var s = a.font,
      t = a.fillStyle,
      o = g + "px " + o,
      n = n + " " + o,
      p = p || b.strokeThickness,
      q = q || b.strokeColor,
      g = g * b.textSizeCoeff;
    if (o != s) a.font = n;
    if (f != t) a.fillStyle = f;
    s = a.measureText(c).width;
    if (m && s > m) {
      b = a.measureText("...").width;
      for (f = ""; a.measureText(f).width < m - b;) f += c[f.length];
      c = f.slice(0, -1) + "..."
    }
    s = a.measureText(c).width;
    if (m && s > m) {
      b = a.measureText("...").width;
      for (f = ""; a.measureText(f).width < m - b;) f += c[f.length];
      c = f.slice(0, -1) + "..."
    }
    f = a.measureText(c);
    b = f.width || c.length * g;
    f = f.height || g + 6;
    s = a.measureText(c).width;
    "right" == l ? d += m - s : "center" == l && (d += (m - s) / 2);
    r && (d += s);
    h && j && "string" !== typeof j && this.drawImage(a, j, k ? d + (b >> 1) : d, e + 2, 0, b + 8, f);
    d = k ? d : d - (b >> 1);
    if (0 < p && q) h = a.lineJoin, a.lineJoin = "round", a.strokeStyle = q, a.lineWidth = p, a.strokeText(c, d, e + (g >> 1)), a.lineJoin = h;
    a.fillText(c, d, e + (g >> 1));
    return {
      width: b,
      height: f,
      x: d,
      y: e - (g >> 1) - 2
    }
  },
  fillOperationText: function (a, b, c, d, e, f, g, h, j, k, l, n, m, o, p, q, r, s) {
    var b = b || null,
      l = l || !1,
      n = n || "left",
      g = g || _h8._0l._vn.DEFAULT,
      j = j || !1,
      k = k || g,
      o = o || null,
      p = p || null,
      m = m ? m : b.textWeight,
      q = q ? q : b.textFace,
      t = _Tf._41.$("_Y1");
    "string" != typeof c && (c = "" + c);
    var u = a.font,
      v = a.fillStyle,
      q = h + "px " + q,
      m = m + " " + q,
      r = r || b.strokeThickness,
      s = s || b.strokeColor,
      h = h * b.textSizeCoeff;
    if (q != u) a.font = m;
    if (g != v) a.fillStyle = g;
    b = a.measureText(c).width;
    if (p && b > p) {
      b = a.measureText("...").width;
      for (g = ""; a.measureText(g).width < p - b;) g += c[g.length];
      c = g.slice(0, -1) + "..."
    }
    c += d;
    b = a.measureText(c).width;
    if (o && b > o) {
      b = a.measureText("...").width;
      for (g = ""; a.measureText(g).width < o - b;) g += c[g.length];
      c = g.slice(0, -1) + "..."
    }
    p = a.measureText(c);
    d = p.width || c.length * h;
    p = p.height || h + 6;
    b = a.measureText(c).width;
    "right" == n ? e += o - b : "center" == n && (e += (o - b) / 2);
    t && (e += b);
    j && k && "string" !== typeof k && this.drawImage(a, k, l ? e + (d >> 1) : e, f + 2, 0, d + 8, p);
    e = l ? e : e - (d >> 1);
    if (0 < r && s) j = a.lineJoin, a.lineJoin = "round", a.strokeStyle = s, a.lineWidth = r, a.strokeText(c, e, f + (h >> 1)), a.lineJoin = j;
    a.fillText(c, e, f + (h >> 1));
    return {
      width: d,
      height: p,
      x: e,
      y: f - (h >> 1) - 2
    }
  },
  setDirectionForCanvas: function () {
    var a = _Tf._41.$("_Y1") ? "rtl" : "ltr",
      b = _Tf._N1.$(_Tf._0l._N1._og),
      c = _Tf._N1.$(_Tf._0l._N1._Rd),
      d = _Tf._N1.$(_Tf._0l._N1._hs),
      e = _Tf._N1.$(_Tf._0l._N1._Lc),
      f = _Tf._N1.$(_Tf._0l._N1._4e);
    0 < b.length && b.attr("dir", a);
    0 < c.length && c.attr("dir", a);
    0 < d.length && d.attr("dir", a);
    0 < e.length && e.attr("dir", a);
    0 < f.length && f.attr("dir", a);
    _Mf._ks.emit(_Ag._c0)
  },
  _r9: function (a, b, c, d, e) {
    a.save();
    var f = a.createRadialGradient(c,
      d, 0.5 * e, c, d, e);
    f.addColorStop(0, b);
    f.addColorStop(1, "rgba(255, 255, 255, 0)");
    a.fillStyle = f;
    a.beginPath();
    a.arc(c, d, e, 0, 2 * Math.PI, !1);
    a.closePath();
    a.fill();
    a.restore()
  },
  _F4: function (a, b, c, d, e, f) {
    f = f || !1;
    a.save();
    a.beginPath();
    a.arc(c, d, e, 0, 2 * Math.PI, !1);
    a.closePath();
    f ? (a.lineWidth = 1, a.strokeStyle = b, a.stroke()) : (a.fillStyle = b, a.fill());
    a.restore()
  },
  _Uk: function (a, b, c, d, e, f) {
    a.save();
    var g = a.createRadialGradient(c, d, 0.3 * e, c, d, e);
    g.addColorStop(0, b);
    g.addColorStop(1, "rgba(255, 255, 255, 0)");
    a.fillStyle = g;
    a.fillRect(c - e / 2, d - f / 2, e, f);
    a.strokeStyle = "#000000";
    a.strokeRect(c - e / 2, d - f / 2, e, f);
    a.restore()
  },
  drawRoundRect: function (a, b, c, d, e, f, g, h, j) {
    j = j || !1;
    g = g || 2;
    h = h || 5;
    f = f || _h8._0l._vn.DEFAULT;
    a.save();
    a.beginPath();
    a.moveTo(b + h, c);
    a.lineTo(b + d - h, c);
    a.quadraticCurveTo(b + d, c, b + d, c + h);
    a.lineTo(b + d, c + e - h);
    a.quadraticCurveTo(b + d, c + e, b + d - h, c + e);
    a.lineTo(b + h, c + e);
    a.quadraticCurveTo(b, c + e, b, c + e - h);
    a.lineTo(b, c + h);
    a.quadraticCurveTo(b, c, b + h, c);
    a.closePath();
    j ? (a.fillStyle = f, a.fill()) : (a.lineWidth = g, a.strokeStyle = f, a.stroke());
    a.restore()
  },
  drawBlocks: function (a, b, c, d, e, f, g, h, j) {
    h = h || Math.round(0.05 * d);
    j = j || 1;
    this.drawRoundRect(a, b, c, d, e, f, j, h, !0);
    this.drawRoundRect(a, b, c, d, e, g, j, h, !1)
  },
  loadImage: function (a, b, c, d, e, f) {
    var g = new Image;
    g.onload = function () {
      b && (b[c] = g);
      "function" === typeof e && e(a)
    };
    if ("function" === typeof f) g.onerror = function () {
      f(a)
    };
    g.src = a + (d ? "?" + (new Date).getTime() : "")
  },
  getIndexAfterRotation: function (a, b, c) {
    a += b;
    a > c - 1 ? a -= c : 0 > a && (a = c + a);
    return a
  },
  htmlspecialchars: function (a) {
    return a.replace(/&/g,
      "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&apos;")
  },
  _isPageLoadingMessageVisible: !1,
  showPageLoadingMessage: function () {
    if (!this._isPageLoadingMessageVisible) $.mobile.showPageLoadingMsg(), this._isPageLoadingMessageVisible = !0
  },
  hidePageLoadingMessage: function () {
    if (this._isPageLoadingMessageVisible) $.mobile.hidePageLoadingMsg(), this._isPageLoadingMessageVisible = !1
  }
};
_Tf._U6._29 = {
  _ps: function (a) {
    "number" != typeof a && (a = parseInt(a));
    return !_Mf._Ta.isUseFundsDecimalSeparator() ? a : a / 100
  },
  _Xh: function (a) {
    "number" != typeof a && (a = parseFloat(a));
    return !_Mf._Ta.isUseFundsDecimalSeparator() ? a : 100 * a
  },
  _H7: function (a, b) {
    a.sort(function (a, d) {
      return a[b] < d[b] ? -1 : a[b] > d[b] ? 1 : 0
    });
    return a
  }
};
_Tf._A._X6 = function (a) {
  this.countLoaded = this.countAll = 0;
  this.elements = {};
  this.type = a;
  this.isReady = this.isError = !1
};
_Tf._A._X6.prototype = {
  addElement: function (a, b) {
    var c, d = this;
    if (this.type === _Tf._dc.ResourceType._K1) {
      try {
        c = new Image
      } catch (e) {
        this.isError = !0;
        return
      }
      c.onload = function () {
        d.countLoaded++
      }
    } else if (this.type === _Tf._dc.ResourceType._An) {
      try {
        c = _Tf._Hc._Og._2d() ? _Tf._Hc._Og.isAndroid() ? new _I2(_Tf._Hc._Og.getAssetPath() + a) : new _I2(a) : new Audio
      } catch (f) {
        this.isError = !0;
        return
      }
      this.countLoaded++
    } else return;
    if (!this.isError) this.type === _Tf._dc.ResourceType._An && _Tf._Hc._Og._2d() ? this.countAll++ : (c.onerror = function () {
      d.isError = !0
    }, c.onabort = function () {
      d.isError = !0
    }, this.countAll++ , c.src = version(a)), this.elements[b] = c
  },
  getElement: function (a) {
    var b = a;
    "en" != _Tf._41.currentLocale && (b = _Tf._41.currentLocale + b);
    return "undefined" === typeof this.elements[b] && (b = a, "undefined" === typeof this.elements[b]) ? null : this.elements[b]
  },
  setElement: function (a, b) {
    "undefined" !== typeof this.elements[a] && b && (this.elements[a] = b)
  },
  getType: function () {
    return this.type
  },
  _Qh: function () {
    var a = this.countAll === this.countLoaded;
    if (!this.isReady && a) this.isReady = !0, this._e4();
    return a
  },
  hasError: function () {
    return this.isError
  },
  removeAllElements: function () {
    this.countLoaded = this.countAll = 0;
    this.elements = {};
    this.isReady = !1
  },
  _e4: function () { }
};
_Tf._A._Nc._No = function () {
  _Tf._A._Nc._No.superclass.call(this, _Tf._dc.ResourceType._K1)
};
extend(_Tf._A._Nc._No, _Tf._A._X6);
_Tf._A._Nc._No.prototype.init = function (a) {
  for (var b = _Tf._0l._A._Nc._No, c = 1; c <= a; c++) this.addElement(b.format(c), c)
};
_Tf._A._Nc._N7 = function () {
  _Tf._A._Nc._N7.superclass.call(this, _Tf._dc.ResourceType._K1)
};
extend(_Tf._A._Nc._N7, _Tf._A._X6);
_Tf._A._Nc._N7.prototype.init = function () {
  var a = _Tf._0l._A._Nc._N7,
    b = _Tf._dc._W2._ip,
    c = _Tf._dc._W2._Dg,
    d, e;
  for (e in b) if (b.hasOwnProperty(e)) for (var f in c) c.hasOwnProperty(f) && (d = c[f] + b[e], this.addElement(a.format(d), d));
  this.addElement(a.format(_Tf._dc._W2._G7), _Tf._dc._W2._G7);
  this.addElement(a.format(_Tf._dc._W2._rj), _Tf._dc._W2._rj);
  this.addElement(a.format(_Tf._dc._W2._c7), _Tf._dc._W2._c7);
  this.addElement(a.format(_Tf._dc._W2._Al), _Tf._dc._W2._Al)
};
_Tf._A._Nc._N7.prototype._46 = function (a) {
  return !this.getElement(a) ? this.getElement(_Tf._dc._W2._Al) : this.getElement(a)
};
_Tf._A._Nc._l7 = function () {
  _Tf._A._Nc._l7.superclass.call(this, _Tf._dc.ResourceType._K1);
  this.backupImageStyles = {}
};
extend(_Tf._A._Nc._l7, _Tf._A._X6);
_Tf._A._Nc._l7.prototype.init = function () {
  var a = _Tf._0l._A._Nc;
  this.addElement(a._l7, "table");
  this.addElement(a._Na, "chair");
  this.addElement(a._0q, "player");
  this.addElement(a._nq, "dealer");
  if (a._jn) {
    for (var b in a._jn) a._jn.hasOwnProperty(b) && this.addElement(a._jn[b], b);
    for (var c in a._41) if (a._41.hasOwnProperty(c)) for (var d in a._41[c]._jn) a._41[c]._jn.hasOwnProperty(d) && this.addElement(a._41[c]._jn[d], c + d)
  }
};
_Tf._A._Nc._l7.prototype._tl = function () {
  return this.getElement("table")
};
_Tf._A._Nc._l7.prototype._62 = function () {
  return this.getElement("chair")
};
_Tf._A._Nc._l7.prototype._5 = function () {
  return this.getElement("player")
};
_Tf._A._Nc._l7.prototype._E6 = function () {
  return this.getElement("dealer")
};
_Tf._A._Nc._l7.prototype._om = function (a, b) {
  if (this.getElement(a)) {
    var c = new Image,
      d = this;
    c.onload = function () {
      d._k3(a, c)
    };
    c.src = b
  }
};
_Tf._A._Nc._l7.prototype._tf = function (a, b) {
  this.getElement(a) && this.backupImageStyles[a] && (this.setElement(a, this.backupImageStyles[a]), delete this.backupImageStyles[a], !1 !== b && _Mf._ks.emit(_Ag._c0, arguments))
};
_Tf._A._Nc._l7.prototype._k3 = function (a, b) {
  this.backupImageStyles[a] = this.getElement(a);
  this.setElement(a, b);
  _Mf._ks.emit(_Ag._c0, arguments)
};
_Tf._A._xb.SoundResourceManager = function (a, b) {
  _Tf._A._xb.SoundResourceManager.superclass.call(this, _Tf._dc.ResourceType._An);
  this._mResourceList = a;
  this._mGameSoundMap = b
};
extend(_Tf._A._xb.SoundResourceManager, _Tf._A._X6);
_Tf._A._xb.SoundResourceManager.prototype._mResourceList = {};
_Tf._A._xb.SoundResourceManager.prototype._mGameSoundMap = {};
_Tf._A._xb.SoundResourceManager.prototype.init = function (a) {
  for (var b in this._mResourceList) this._mResourceList.hasOwnProperty(b) && this.addElement(this._mResourceList[b], a[b])
};
_Tf._A._xb.SoundResourceManager.prototype.getSound = function (a) {
  var a = this._mGameSoundMap[a],
    b = jQuery.type(a),
    c = 0;
  if ("string" === b) return this.getElement(a);
  return "array" === b ? (c = Math.floor(Math.random() * (a.length - 1 + 1)), this.getElement(a[c])) : null
};
_Tf._A._of = function () {
  this.elements = []
};
_Tf._A._of.prototype = {
  addResource: function (a, b) {
    if (a) {
      if ("undefined" === typeof b) b = this.elements.length;
      this.elements[b] = a
    }
  },
  removeLast: function () {
    if (0 < this.elements.length) for (this.elements.pop(); 0 < this.elements.length && "undefined" === typeof this.elements[this.elements.length - 1];) this.elements.pop()
  },
  removeByPriority: function (a) {
    a == this.elements.length - 1 ? this.removeLast() : this.elements.splice(a, 1)
  },
  getElement: function () {
    var a = this.elements.length - 1;
    this.elements[a]._Qh() || (a = 0);
    return this.elements[a] ? this.elements[a] : null
  }
};
_Tf._M4._np = {
  deckManager: null,
  chip: null,
  table: null,
  actions: null,
  events: null,
  _Qh: !1,
  configureImages: function (a) {
    var b = _Tf._0l._A._Nc,
      c = _h8._0l._Jh._Nc,
      d = b.mapTag + "Default";
    b.mapTag += a;
    b._N7 = b.path + (c.deck[b.mapTag] || c.deck[d]);
    b.smallDeck = b.path + (c.smallDeck[b.mapTag] || c.smallDeck[d]);
    b._No = b.path + (c.chip[b.mapTag] || c.chip[d]);
    b._l7 = b.path + (c.table[b.mapTag] || c.table[d]);
    b._Na = b.path + (c.chair[b.mapTag] || c.chair[d]);
    b._0q = b.path + (c.player[b.mapTag] || c.player[d]);
    b._nq = b.path + (c.dealer[b.mapTag] || c.dealer[d]);
    b._jn = {};
    if ("undefined" != typeof c._jn) for (var e in c._jn) c._jn.hasOwnProperty(e) && null !== c._jn[e][b.mapTag] && (b._jn[e] = b.path + (c._jn[e][b.mapTag] || c._jn[e][d]));
    b._41 = {};
    if ("undefined" != typeof c._41) for (var f in c._41) if (c._41.hasOwnProperty(f) && (b._41[f] = {}, b._41[f]._jn = {}, "undefined" != typeof c._41[f]._jn)) for (var g in c._41[f]._jn) c._41[f]._jn.hasOwnProperty(g) && null !== c._41[f]._jn[g][b.mapTag] && (b._41[f]._jn[g] = b.path + (c._41[f]._jn[g][b.mapTag] || c._41[f]._jn[g][d]))
  },
  configureSounds: function () {
    var a = _Tf._0l._A._xb,
      b = _h8._0l._xb;
    a._qf = this._prependSoundPath(b.Action, a.pathActions);
    a._Fm = this._prependSoundPath(b.Event, a.pathEvents)
  },
  load: function (a, b) {
    this.configureImages(_Mf._Ta._Iq);
    this.configureSounds();
    var c = new _Tf._A._Nc._N7;
    c.init();
    this.deckManager = new _Tf._A._of;
    this.deckManager.addResource(c);
    this.chip = new _Tf._A._Nc._No;
    this.table = new _Tf._A._Nc._l7;
    this.chip.init(_h8._0l._Jh._Nc.chip.count);
    this.table.init();
    this.actions = new _Tf._A._xb.SoundResourceManager(_Tf._0l._A._xb._qf, _h8._0l._xb.Map.ActionSound);
    this.events = new _Tf._A._xb.SoundResourceManager(_Tf._0l._A._xb._Fm, _h8._0l._xb.Map.EventSound);
    this.actions.init(_h8._0l._xb.Action);
    this.events.init(_h8._0l._xb.Event);
    this.successCallback = a;
    this.errorCallback = b;
    this.check = this.check.bind(this);
    this.check()
  },
  check: function () {
    var a = _Tf._0l._xj._Eb;
    this.table.hasError() || this.chip.hasError() || this.deckManager.getElement().hasError() ? ("function" === typeof this.errorCallback && this.errorCallback(), this._Qh = !0) : this.table._Qh() && this.chip._Qh() && this.deckManager.getElement()._Qh() && this.actions._Qh() && this.events._Qh() ? ("function" === typeof this.successCallback && this.successCallback(), this._Qh = !0) : setTimeout(this.check, a)
  },
  _prependSoundPath: function (a, b) {
    var c = {}, d;
    for (d in a) a.hasOwnProperty(d) && (c[d] = b + a[d]);
    return c
  }
};
_Tf._Hc._Uf = function (a, b, c, d, e) {
  e = e || !1;
  this.id = a;
  this.origWidth = b;
  this.origHeight = c;
  this.centerX = this.origWidth / 2;
  this.centerY = this.origHeight / 2;
  this.scaleY = this.scaleX = 1;
  this.canvas = _Tf._N1.$(this.id, !0).get(0);
  this.context = this.canvas.getContext("2d");
  this.canvasField = d || null;
  this.context._canvasHash = a;
  this.doubleCanvasContext = this.doubleCanvas = null;
  if (e) this.doubleCanvas = $("<canvas></canvas>").get(0), this.doubleCanvasContext = this.doubleCanvas.getContext("2d"), this.doubleCanvasContext._canvasHash = a, this.doubleCanvas.style.visibility = "hidden"
};
_Tf._Hc._Uf.prototype = {
  id: "",
  canvas: null,
  context: null,
  scaleX: 1,
  scaleY: 1,
  origWidth: 0,
  origHeight: 0,
  centerX: 0,
  centerY: 0,
  devicePixelRatio: 1,
  getContext: function () {
    return this.doubleCanvasContext || this.context
  },
  setDevicePixelRatio: function (a) {
    this.devicePixelRatio = a || 1
  },
  getDevicePixelRatio: function () {
    return this.devicePixelRatio
  },
  cropDevicePixelRatio: function (a) {
    return 2 <= a ? 1.5 : parseInt(a) == a ? a : parseInt(10 * a) / 10
  },
  resize: function (a, b) {
    if (a && b) {
      var c = this.cropDevicePixelRatio(window.devicePixelRatio) || 1,
        d = a * c,
        e = b * c;
      this.setDevicePixelRatio(c);
      this.canvas.width = d;
      this.canvas.height = e;
      if (this.doubleCanvas) this.doubleCanvas.width = d, this.doubleCanvas.height = e;
      this.scaleX = (d / this.origWidth).toFixed(2);
      this.scaleY = (e / this.origHeight).toFixed(2);
      _h8._0l.Scale = {
        x: this.scaleX / c,
        y: this.scaleY / c
      };
      this.doubleCanvas || this.context.scale(this.scaleX, this.scaleY);
      this.canvas.style.width = a + "px";
      this.canvas.style.height = b + "px";
      if (this.doubleCanvas) this.doubleCanvasContext.scale(this.scaleX, this.scaleY), this.doubleCanvas.style.width = a + "px", this.doubleCanvas.style.height = b + "px"
    }
  },
  replace: function (a, b) {
    this.canvas.style.marginLeft = b + "px";
    this.canvas.style.marginTop = a + "px"
  },
  clear: function () {
    if (this.doubleCanvas) this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.drawImage(this.doubleCanvas, 0, 0), this.canvasField ? this.canvasField.clearField(this.doubleCanvasContext._canvasHash, this.doubleCanvasContext) : this.doubleCanvasContext.clearRect(0, 0, this.origWidth + 6, this.origHeight + 6);
    else {
      var a = this.canvas,
        b = this.context,
        c = this.origWidth + 6,
        d = this.origHeight + 6;
      _Tf._Hc._Og.isAndroidTablet() ? (a.width = a.width, b.scale(this.scaleX, this.scaleY)) : this.canvasField ? this.canvasField.clearField(b._canvasHash, b) : _Tf._Ek._29.fillRectToClear(b, 0, 0, c, d)
    }
  }
};
_Tf._Hc.CanvasField = function () {
  this._fields = {}
};
_Tf._Hc.CanvasField.prototype = {
  register: function (a, b, c, d, e) {
    this._fields[a] || this.reset(a);
    a = this._fields[a];
    if (-1 === a.x1 || b < a.x1) a.x1 = b, a.isEmpty = !1;
    if (-1 === a.y1 || c < a.y1) a.y1 = c;
    if (-1 === a.x2 || b + d > a.x2) a.x2 = b + d;
    if (-1 === a.y2 || c + e > a.y2) a.y2 = c + e
  },
  reset: function (a) {
    this._fields[a] = {
      x1: -1,
      y1: -1,
      x2: -1,
      y2: -1,
      isEmpty: !0
    }
  },
  clearField: function (a, b) {
    var c = this._fields[a];
    c && !c.isEmpty && (b.clearRect(c.x1 - 10, c.y1 - 10, c.x2 - c.x1 + 20, c.y2 - c.y1 + 20), "undefined" != typeof Logger && b.strokeRect(c.x1 - 10, c.y1 - 10, c.x2 - c.x1 + 20,
      c.y2 - c.y1 + 20), this.reset(a))
  }
};
_Tf._Hc.Sprite = function (a, b) {
  this._scale = {
    x: 1,
    y: 1
  };
  this.destroy();
  this._container = a || document.body;
  this._spriteStyle = b || "";
  _Mf._ks.addListener(_Ag._c0, this.onCanvasResize, this)
};
_Tf._Hc.Sprite.prototype = {
  _currentParams: {},
  _element: null,
  _container: null,
  _spriteStyle: "",
  _scale: {
    x: 1,
    y: 1
  },
  _create: function () {
    if (!this._element) this._element = $('<div class="' + this._spriteStyle + '"></div>'), this._element.appendTo(this._container)
  },
  isExist: function () {
    return null != this._element
  },
  display: function (a) {
    this._element || this._create();
    if (!("undefined" === typeof a.top || "undefined" === typeof a.left)) if (a.top != this._currentParams.top || a.left != this._currentParams.left) {
      var b = this._element.get(0);
      if (b) {
        this._scale = {
          x: _h8._0l.Scale ? _h8._0l.Scale.x : 1,
          y: _h8._0l.Scale ? _h8._0l.Scale.y : 1
        };
        this._currentParams.top = a.top;
        b.style.top = a.top * this._scale.y + "px";
        if ("undefined" != typeof a.height) this._currentParams.height = a.height, b.style.height = a.height * this._scale.y + "px";
        this._currentParams.left = a.left;
        b.style.left = a.left * this._scale.x + "px";
        if ("undefined" != typeof a.width) this._currentParams.width = a.width, b.style.width = a.width * this._scale.x + "px"
      }
    }
  },
  setBackgroundImage: function (a) {
    if (!(!this.isExist() || "undefined" === typeof a || a === this._currentParams.backgroundImage)) {
      this._currentParams.backgroundImage = a;
      var b = this._element.get(0);
      b && (b.style["background-image"] = 'url("' + a + '")')
    }
  },
  setText: function (a, b, c) {
    if (!(!this.isExist() || "undefined" === typeof a || a === this._currentParams.text)) if (this._currentParams.text = a, this._element.text(a), a = this._element.get(0)) {
      if ("undefined" != typeof b && b != this._currentParams.fontSize) this._currentParams.fontSize = b, a.style["font-size"] = b * this._scale.y + "px";
      if ("undefined" != typeof c && c != this._currentParams.color) this._currentParams.color = c, a.style.color = c
    }
  },
  onCanvasResize: function () {
    if (_h8._0l.Scale && (this._scale = {
      x: _h8._0l.Scale.x || 1,
      y: _h8._0l.Scale.y || 1
    }, this.isExist())) {
      var a = this._element.get(0);
      if (a) {
        if (null != this._currentParams.top) a.style.top = this._currentParams.top * this._scale.y + "px";
        if (null != this._currentParams.left) a.style.left = this._currentParams.left * this._scale.x + "px";
        if (null != this._currentParams.width) a.style.width = this._currentParams.width * this._scale.x + "px";
        if (null != this._currentParams.height) a.style.height = this._currentParams.height * this._scale.y + "px";
        null != this._currentParams.fontSize && (a.style["font-size"] = this._currentParams.fontSize * this._scale.y + "px")
      }
    }
  },
  onRemoveListeners: function (a) {
    var b = "string" === typeof this._container ? this._container : null;
    return !b ? !1 : -1 < b.indexOf(a + "")
  },
  destroy: function () {
    this._element && this._element.remove();
    this._currentParams = {
      top: null,
      left: null,
      backgroundImage: null,
      text: null,
      fontSize: null,
      color: null,
      width: null,
      height: null
    };
    this._element = null
  }
};
var _J0 = function (a, b, c, d) {
  this.type = a;
  this.event = b;
  this.fn = c;
  this.ticks = d;
  this.nextEvent = null
};
_J0.prototype = {
  type: 0,
  event: {},
  fn: function () { },
  execute: function () {
    this.fn(this.event);
    this.nextEvent && this.nextEvent.execute()
  },
  _Of: function (a) {
    this.nextEvent = a
  }
};
var _b5 = {
  NOT_YET: -1,
  IN_EXECUTING: 1,
  EXECUTED: 0,
  EXECUTED_WITH_ERROR: -2
}, _4b = function (a) {
  this.events = [];
  this.waitTicks = 0;
  this.stateExecuted = _b5.NOT_YET;
  this.add(a);
  this.type = a.type
};
_4b.prototype = {
  type: 0,
  stateExecuted: _b5.NOT_YET,
  waitTicks: 0,
  events: [],
  add: function (a) {
    this.events.push(a);
    this.sleep(a.ticks);
    var b = this.events.length;
    2 <= b && (this.events[b - 2]._Of(a), this.sleep(2))
  },
  sleep: function (a) {
    this.waitTicks += a
  },
  _xq: function () {
    this.stateExecuted = _b5.EXECUTED_WITH_ERROR;
    this.waitTicks = 0
  },
  execute: function () {
    if (0 === this.events.length) this.waitTicks = 0, this.stateExecuted = _b5.EXECUTED;
    else {
      this.stateExecuted = _b5.IN_EXECUTING;
      try {
        this.events[0].execute()
      } catch (a) {
        this._xq()
      }
    }
  },
  update: function () {
    this.waitTicks -= 0 < this.waitTicks ? 1 : 0;
    if (0 === this.waitTicks) this.stateExecuted = _b5.EXECUTED
  },
  _d8: function () {
    return this.stateExecuted === _b5.NOT_YET
  },
  _ia: function () {
    return this.stateExecuted === _b5.EXECUTED || this.stateExecuted === _b5.EXECUTED_WITH_ERROR
  },
  destroy: function () {
    this.events = []
  }
};
var _1j = function () {
  this.events = [];
  this.lastStateExecuted = this.lastType = 0
};
_1j.prototype = {
  events: [],
  lastType: 0,
  lastStateExecuted: 0,
  push: function (a) {
    var b = !1;
    this.lastType === a.type && !this.events[this.events.length - 1] && !this.events[this.events.length - 1]._d8() && (b = !0);
    b ? this.events[this.events.length - 1].add(a) : (this.events.push(new _4b(a)), this.lastType = a.type)
  },
  update: function () {
    if (0 !== this.events.length) {
      var a = this.events[0];
      if (a._d8()) a.execute();
      else if (a.update(), a._ia()) {
        if ("number" === a.type && a.events[0].event > this.lastStateExecuted) this.lastStateExecuted = a.events[0].event;
        a.destroy();
        this.events.shift()
      }
    }
  },
  destroy: function () {
    for (var a = this.events.length, b = 0; b < a; b++) this.events[b].destroy(), delete this.events[b]
  }
};
_Tf._Hc._L8 = {
  isSoundOn: !0,
  isSoundEnable: !0,
  _Hi: function (a) {
    this.isSoundOn && this.isSoundEnable && _Tf._M4._np && _Tf._M4._np.actions && (a = _Tf._M4._np.actions.getSound(a)) && a.play()
  },
  _3c: function (a) {
    this.isSoundOn && this.isSoundEnable && _Tf._M4._np && _Tf._M4._np.events && (a = _Tf._M4._np.events.getSound(a)) && a.play()
  },
  toogleSound: function () {
    this.isSoundOn = !this.isSoundOn
  },
  hasSound: function () {
    return this.isSoundOn
  },
  isEnable: function () {
    return this.isSoundEnable
  },
  enableSound: function () {
    this.isSoundEnable = !0
  },
  disableSound: function () {
    this.isSoundEnable = !1
  }
};
_I2 = function (a) {
  this.src = a;
  this.media = new Media(this.src, this.onSuccess, this.onError)
};
_I2.prototype = {
  play: function () {
    this.media.play()
  },
  onSuccess: function () { },
  onError: function () { }
};
_Tf._Hc._Ml = function () {
  var a = function () {
    var a = ["webkit", "moz", "ms"];
    this.property = null;
    if ("undefined" === typeof document.hidden) for (var c = 0; c < a.length; c++) {
      if ("undefined" != typeof document[a[c] + "Hidden"]) {
        this.property = a[c] + "Hidden";
        break
      }
    } else this.property = "hidden"
  };
  a.prototype._Ge = function () {
    return null === this.property ? !1 : !!document[this.property]
  };
  return new a
}();
_Tf._Hc.Scroller = function (a, b, c) {
  this._init(a, b, c)
};
_Tf._Hc.Scroller.prototype = {
  behavior: null,
  scrollWrapperElement: null,
  options: {},
  pullDownHandler: null,
  _Dp: !1,
  _init: function (a, b, c) {
    if (a) "undefined" === typeof c && (c = {}), this.options = c, this.scrollWrapperElement = a, this._initExternalScroll()
  },
  _initNativeScroll: function () {
    this.behavior = new _Tf._Hc.NativeScroll(this.scrollWrapperElement)
  },
  _initExternalScroll: function () {
    var a = {
      momentum: !0,
      click: !0,
      resizeScrollbars: !1
    };
    if ("undefined" !== typeof this.options.onSnapToElement) a.snap = this.options.onSnapToElement;
    if (this.options.showScrollBar) a.scrollbars = "custom";
    this.behavior = new IScroll(this.scrollWrapperElement, a);
    this.behavior.on("scrollEnd", this.onScrollEnd.bind(this))
  },
  refresh: function (a) {
    this.behavior.refresh();
    if ("undefined" !== typeof a) {
      if (a.scrollToTop) {
        this.scrollTo(0, 0, 0);
        return
      }
      a.scrollToBottom && this.behavior.y > this.behavior.maxScrollY && this.scrollTo(0, this.behavior.maxScrollY, 0)
    }
    this._Dp = !1
  },
  scrollTo: function (a, b, c) {
    this.behavior.scrollTo(a, b, c)
  },
  destroy: function () {
    this.behavior.destroy();
    this.behavior = null
  },
  onScrollMove: function () {
    this._Dp || this.behavior.y < this.behavior.maxScrollY + 100 && this.pullDownAction()
  },
  onScrollEnd: function () {
    if ("undefined" !== typeof this.options.onScrollEnd) this.options.onScrollEnd();
    this._Dp || this.behavior.y < this.behavior.maxScrollY + 100 && this.pullDownAction()
  },
  pullDownAction: function () {
    this._Dp = !0;
    if ("undefined" !== typeof this.options.onScrollPullDown) this.options.onScrollPullDown()
  }
};
_Tf._Hc.NativeScroll = function (a, b) {
  this.scrollWrapperElement = null;
  this.options = {};
  this._init(a, b)
};
_Tf._Hc.NativeScroll.prototype = {
  scrollWrapperElement: null,
  options: {},
  _init: function (a, b) {
    if (a && (this.scrollWrapperElement = a, "undefined" !== typeof b)) this.options = b
  },
  refresh: function () { },
  destroy: function () { },
  scrollTo: function (a, b) {
    this.scrollWrapperElement.scrollLeft = a;
    this.scrollWrapperElement.scrollTop = b
  }
};
_Tf._U6._Un._8l.Command = function (a, b) {
  this.type = a;
  this.label = a === _Tf._dc.CommandType._jf ? _Tf._41.$("_Z3." + b) : _Tf._41.$("_G2." + b);
  this.number = b
};
_Tf._U6._Un._8l.Command.prototype = {
  type: 0,
  number: 0,
  label: ""
};
_Tf._U6._Un._8l.GameArea = function (a) {
  this.number = a
};
_Tf._U6._Un._8l.GameArea.prototype = {
  number: 0
};
_Tf._U6._Un._8l._hl = function () {
  this.foldedCards = [];
  this.countFoldedCards = 0;
  this.rakeChip = this.winTable = null
};
_Tf._U6._Un._8l._hl.prototype = {
  foldedCards: [],
  countFoldedCards: 0,
  _y4: function (a) {
    // alert("wintab one "+ JSON.stringify(a));
    this.winTable = a
  },
  setRakeChip: function (a) {
    this.rakeChip = a
  },
  _Kr: function (a) {
    a.index = this.countFoldedCards++;
    this.foldedCards[a.index] = a
  },
  _ce: function (a) {
    delete this.foldedCards[a.index]
  },
  clear: function () {
    this.foldedCards = [];
    this.countFoldedCards = 0;
    this.winTable._Q7();
    this.rakeChip._uf(0)
  }
};
_Tf._U6._Un._8l._nq = function (a) {
  this.number = a
};
_Tf._U6._Un._8l._nq.prototype = {
  number: 0,
  __k: function () {
    return this.number
  },
  _ej: function (a) {
    this.number = a
  }
};
_Tf._U6._Un._8l._D = function (a) {
  this.number = a
};
_Tf._U6._Un._8l._D.prototype = {
  number: 0,
  __k: function () {
    return this.number
  },
  _ej: function (a) {
    this.number = a
  }
};
_Tf._U6._Un._8l._W2 = function (a) {
  this.value = a.gameType == _Tf._dc.GameType._Ll ? _Tf._dc._W2._rj : _Tf._dc._W2._c7;
  this.value = _Tf._dc._W2._G7;
  this.deleteMark = this.isActive = this.isSelected = this.isOpen = !1
};
_Tf._U6._Un._8l._W2.prototype = {
  value: "",
  isOpen: !1,
  deleteMark: !1,
  set: function (a) {
    this.value = a
  },
  _Hk: function (a) {
    this.isOpen = a
  },
  _kl: function () {
    return this.deleteMark
  },
  _ec: function () {
    this.deleteMark = !0
  },
  setSelected: function (a) {
    this.isSelected = a
  },
  setActive: function (a) {
    this.isActive = a
  }
};
_Tf._U6._Un._8l._a6 = function (a) {
  this.countTakedCards = 0;
  this.cards = [];
  this.isActive = this.isSelected = this.isBusted = !1;
  this.number = a
};
_Tf._U6._Un._8l._a6.prototype = {
  countTakedCards: 0,
  cards: [],
  isBusted: !1,
  number: 0,
  _Kr: function (a) {
    this.cards.push(a)
  },
  _p6: function () {
    this.countTakedCards--;
    return this.cards.pop()
  },
  _Mb: function () {
    this.countTakedCards = 0;
    this.cards = []
  },
  setBusted: function (a) {
    this.isBusted = a
  },
  setSelected: function (a) {
    this.isSelected = a
  },
  setActive: function (a) {
    this.isActive = a
  }
};
_Tf._U6._Un._8l._No = function (a, b, c, d) {
  this.number = a;
  this.moneyType = d || _Tf._dc.MoneyType._i4;
  this.value = b;
  this.deleteMark = !1;
  this.chips = [];
  this.selected = !1;
  this.state = c || _Tf._dc.ChipState._bk
};
_Tf._U6._Un._8l._No.prototype = {
  number: 0,
  value: 0,
  moneyType: _Tf._dc.MoneyType._i4,
  chips: [],
  countAddedChip: 0,
  deleteMark: !1,
  _Yf: function () {
    return this.value
  },
  getState: function () {
    return this.state
  },
  getSelected: function () {
    return this.selected
  },
  getMoneyType: function () {
    return this.moneyType
  },
  _p3: function (a) {
    this.value = a
  },
  _Gh: function (a) {
    this.state = a
  },
  setSelected: function (a) {
    this.selected = a
  },
  _kl: function () {
    return this.deleteMark
  },
  _ec: function () {
    this.deleteMark = !0
  },
  add: function (a) {
    a.index = this.countAddedChip++;
    this.chips[a.index] = a
  },
  use: function (a) {
    this.countAddedChip--;
    delete this.chips[a.index]
  }
};
_Tf._U6._Un._8l._rs = function (a, b) {
  this.factory = a;
  this.countTakedChips = 0;
  this.chips = [];
  this.tmpChip = null;
  this.moneyType = b
};
_Tf._U6._Un._8l._rs.prototype = {
  countTakedChips: 0,
  chips: [],
  _16: function (a, b, c) {
    this.tmpChip = this.factory.createChipController(this.factory, a, b, -1, 0, this.moneyType, _Tf._dc.ChipState._or, c);
    this.tmpChip.view.isVisible = !1
  },
  _ba: function (a) {
    this.chips[this.countTakedChips] = a;
    this.countTakedChips++
  },
  _D5: function (a, b) {
    var c = this.chips[a],
      d = c._xi();
    if (null === b || d === b) delete this.chips[a], this.countTakedChips--;
    return c
  },
  _P8: function () {
    this.countTakedChips = 0;
    this.chips = []
  }
};
_Tf._U6._Un._8l._0q = function (a, b, c, d, e, f, g) {
  this.id = e;
  this.state = _Tf._dc.PlayerState._w;
  this.flags = 0;
  this._xr(a);
  this.flags = a;
  this.designPosition = _Mf._b1.getPositionByTableId(g);
  this.setName(b);
  this.money = c;
  this.moneyType = _Tf._dc.MoneyType._i4;
  this.operation = null;
  this.bet = d;
  this.isCancelAddingMoney = !1;
  this.level = "";
  this.isAllInBet = !1
};
_Tf._U6._Un._8l._0q.prototype = {
  bet: 0,
  isAllInBet: !1,
  state: _Tf._dc.PlayerState._w,
  flags: 0,
  id: 0,
  name: "",
  money: 0,
  operation: null,
  level: "",
  setMoneyType: function (a) {
    if (a) this.moneyType = a
  },
  operate: function (a) {
    if (a) a.moneyType = this.moneyType;
    this.operation = a || null
  },
  clear: function () {
    this.operation = null;
    this.isAllInBet = !1
  },
  setName: function (a) {
    var b = this.designPosition.player.maxNameLength / this.designPosition.textSizeCoeff;
    this.name = a.length <= b ? a : a.substr(0, b - 3) + "..."
  },
  _z: function (a, b, c, d, e) {
    var f = !1;
    this.flags != a && (f = !0, this._xr(a));
    this.flags = a;
    this.setName(b);
    this.id = e;
    if (d != this.bet) this.bet = d, f = !0;
    if (c != this.money) {
      this.money = c;
      if (0 < c) this.isCancelAddingMoney = !1;
      else if (0 === c && this._1m()) this.isAllInBet = !0;
      f = !0
    }
    return f
  },
  setLevel: function (a) {
    this.level = a || ""
  },
  _xr: function (a) {
    var b = _Tf._dc,
      c = !1;
    b.PlayerFlag.has(a, b.PlayerFlag._2r) && (this._Gh(b.PlayerState._2r), c = !0);
    if (b.PlayerFlag.has(a, b.PlayerFlag._R2) || b.PlayerFlag.has(a, b.PlayerFlag._5e)) this._Gh(b.PlayerState._R2), c = !0;
    b.PlayerFlag.has(a, b.PlayerFlag._q7) && (this._Gh(b.PlayerState._22), c = !0);
    if (!c && (b.PlayerFlag.has(this.flags, b.PlayerFlag._q7) || b.PlayerFlag.has(this.flags, b.PlayerFlag._2r) || b.PlayerFlag.has(this.flags, b.PlayerFlag._R2) || b.PlayerFlag.has(this.flags, b.PlayerFlag._5e))) this._Gh(b.PlayerState._w), c = !0;
    return c
  },
  _Rp: function () { },
  _I6: function () {
    return this.money
  },
  getBet: function () {
    return this.bet
  },
  _qk: function () {
    var a = _Tf._dc;
    return a.PlayerFlag.has(this.flags, a.PlayerFlag._R2) || a.PlayerFlag.has(this.flags, a.PlayerFlag._5e)
  },
  _1m: function () {
    var a = _Tf._dc;
    return a.PlayerFlag.has(this.flags, a.PlayerFlag._3i)
  },
  isAllIn: function () {
    return this.isAllInBet
  },
  _Gh: function (a) {
    this.state = a
  },
  _tj: function (a) {
    this.isCancelAddingMoney = a
  }
};
_Tf._U6._Un._8l._Na = function (a, b) {
  this.number = a;
  this.gameType = b;
  this.isClientChair = !1;
  this.countTakedChip = this.countTakedCards = 0;
  this.cards = [];
  this.chip = [];
  this.player = null;
  this.holders = [];
  this.ranks = [];
  this.timer = this.winTable = null
};
_Tf._U6._Un._8l._Na.prototype = {
  number: 0,
  isClientChair: !1,
  countTakedCards: 0,
  countTakedChip: 0,
  player: null,
  holders: [],
  ranks: [],
  cards: [],
  chip: [],
  _Wa: function (a, b) {
    this.player = a;
    this.isClientChair = b
  },
  _1c: function () {
    this._Mb();
    this.player.destroy();
    this.player = null;
    this.isClientChair = !1
  },
  changePlayerAvatar: function (a) {
    this.player && this.player._C2(a)
  },
  _y4: function (a) {
    this.winTable = a
  },
  setTimer: function (a) {
    this.timer = a
  },
  _Eq: function () {
    return null === this.player
  },
  _Kr: function (a, b, c) {
    a.index = b;
    this.isClientChair || _Tf._dc.GameType._98(this.gameType) || _Tf._dc.GameType.isBlackJack(this.gameType) || _Tf._dc.GameType.isPaigow(this.gameType) ? (this.countTakedCards-- , this.holders[c]._1p(), this.holders[c]._j8(a, c)) : this.cards[b] = a
  },
  _p6: function (a) {
    delete this.cards[a.index];
    this.countTakedCards--
  },
  _96: function (a) {
    delete this.cards[a];
    this.countTakedCards--
  },
  _Mb: function () {
    this.cards = [];
    this.countTakedCards = 0
  },
  _Zd: function (a) {
    a < this.countTakedCards ? (this.countTakedCards -= a, this.cards.splice(this.countTakedCards, a)) : this._Mb()
  },
  _ba: function (a) {
    a.index = this.countTakedChip++;
    this.chip[a.index] = a
  },
  _qe: function (a) {
    this.countTakedChip--;
    delete this.chip[a.index]
  },
  _b: function (a, b) {
    this.holders[a] = b
  },
  setRank: function (a, b) {
    this.ranks[a] = b
  },
  _t3: function (a, b) {
    this.holders[b]._j8(a);
    this._p6(a)
  }
};
_Tf._U6._Un._8l._l7 = function (a, b) {
  this.factory = a;
  this.gameType = b;
  this.closeCards = [];
  this.cards = [];
  this.chips = [];
  this.insuranceChips = [];
  this.potChips = null;
  this.countCardsInCenter = 0;
  this.state = _Tf._dc.TableState._Be
};
_Tf._U6._Un._8l._l7.prototype = {
  state: _Tf._dc.TableState._Be,
  closeCards: [],
  cards: [],
  chips: [],
  tmpChips: [],
  insuranceChips: [],
  potChips: null,
  _Gi: function (a, b, c) {
    this.potChips = this.factory.createPotChipsController(this.factory, a, b, c, this.gameType)
  },
  _ir: function () {
    this.potChips._m8()
  },
  _H: function (a, b) {
    this.cards[b] = a
  },
  _bh: function () {
    for (var a = 0; a < this.cards.length; a++) this.cards[a] && this.cards[a]._Q7();
    this.cards = [];
    this.closeCards = [];
    this.countCardsInCenter = 0
  },
  _ba: function (a, b, c) {
    var d;
    "undefined" == typeof c && (c = 0);
    this.chips[a.__k()] && this.chips[a.__k()][c] && (d = this.chips[a.__k()][c]);
    this.chips[a.__k()] || (this.chips[a.__k()] = []);
    d ? b ? this.chips[a.__k()][c]._cf(a) : this.chips[a.__k()][c]._uf(a._xi()) : this.chips[a.__k()][c] = a
  },
  takeTmpChip: function (a, b, c) {
    this.tmpChips[a.__k()] || (this.tmpChips[a.__k()] = []);
    this.tmpChips[a.__k()][c] = a
  },
  takeInsuranceChip: function (a, b) {
    this.insuranceChips[a.__k()] ? b ? this.insuranceChips[a.__k()]._cf(a) : this.insuranceChips[a.__k()]._uf(a._xi()) : this.insuranceChips[a.__k()] = a
  },
  giveInsuranceChip: function (a) {
    this.insuranceChips[a] && delete this.insuranceChips[a]
  },
  _D5: function (a, b) {
    "undefined" == typeof b && (b = 0);
    this.chips[a] && this.chips[a][b] && delete this.chips[a][b]
  },
  giveTmpChip: function (a, b) {
    this.tmpChips[a] && this.tmpChips[a][b] && delete this.tmpChips[a][b]
  },
  getBetChip: function (a, b) {
    return this.chips[a][b]
  },
  getInsuranceChip: function (a) {
    return this.insuranceChips[a]
  },
  _1s: function (a) {
    this.potChips._0f(a);
    delete this.chips[a.__k()][0]
  },
  _Gh: function (a) {
    this.state = a
  },
  getState: function () {
    return this.state
  },
  _Z7: function () {
    return this.state != _Tf._dc.TableState._vc && this.state != _Tf._dc.TableState._D8
  },
  setCloseCardIndex: function (a) {
    this.closeCards.push(a)
  },
  takeCloseCard: function () {
    return this.closeCards.shift()
  }
};
_Tf._U6._Un._8l.TableMessage = function () {
  this.messages = []
};
_Tf._U6._Un._8l.TableMessage.prototype = {
  messages: [],
  _Yg: function (a) {
    a && "string" == typeof a.text && this.messages.push(a)
  },
  _Y0: function () {
    this.messages = []
  },
  _34: function () {
    return 0 < this.messages.length
  }
};
_Tf._U6._Un._8l._kr = function () {
  this.messages = []
};
_Tf._U6._Un._8l._kr.prototype = {
  messages: [],
  _Yg: function (a) {
    "number" === typeof a && this.messages.push(a)
  },
  _K: function (a) {
    this._34() && this._Y0();
    this._Yg(a)
  },
  _Y0: function () {
    this.messages = []
  },
  _34: function () {
    return 0 < this.messages.length
  }
};
_Tf._U6._Un._8l.Rank = function () {
  this.rank = null;
  this.isSplitActive = this.isActive = !1
};
_Tf._U6._Un._8l.Rank.prototype = {
  rank: null,
  isActive: !1,
  isSplitActive: !1,
  setRankAction: function (a) {
    this.rank = a
  },
  _ss: function (a) {
    this.isActive = a
  },
  setSplitActiveAction: function (a) {
    this.isSplitActive = a
  },
  clear: function () {
    this.rank = null;
    this.isSplitActive = this.isActive = !1
  }
};
_Tf._U6._Un.__0._gl = function (a, b, c, d) {
  this.tableIdOnGameServer = c;
  this.factory = a;
  this.dealerButton = this.timer = this.bank = this.tableMessage = this.rank = this.table = null;
  this.rotatedChairs = this.chairs = [];
  this.gameType = d;
  this.designPosition = _Mf._b1.getPositionByGameType(this.gameType);
  this.otherSprites = {};
  this.currentActiveChair = 0;
  this.countChairs = b;
  this.isLoop = !1;
  this.clientIndex = 255;
  this._qk = !1;
  this.round = -1
};
_Tf._U6._Un.__0._gl.prototype = {
  tableMessage: null,
  rank: null,
  table: null,
  designPosition: null,
  chairs: [],
  countChairs: 0,
  bank: null,
  timer: null,
  dealerButton: null,
  isLoop: !1,
  otherSprites: {},
  init: function (a, b, c, d, e, f, g) {
    this.bank = this.factory.createBankController(this.factory, a, b, e, f, g);
    this.table = this.factory.createTableController(this.factory, a, b, c, e, f, this.designPosition);
    this.timer = this.factory.createTimerController(this.factory, a, 0, g, this.countChairs);
    this.dealerButton = this.factory.createDealerButtonController(this.factory,
      a, 255, this.countChairs, g);
    for (var h = this.designPosition.tableSeats[this.countChairs], j = 0; j < this.countChairs; j++) this.chairs[j] = this.factory.createChairController(this.factory, a, b, c, d, j, h[j], e, f, g);
    this.gameType = e;
    this.rotatedChairs = this.chairs;
    this.tableMessage = this.factory.createTableMessageController(this.factory, d, g);
    _Tf._dc.GameType.isBlackJack(e) ? this.rank = this.factory.createRankController(this.factory, a, b, null, g, null, !0) : this.tableMessage._40({
      text: _Tf._41.$("_b8._j1"),
      type: _Tf._dc.TableMessageType._08
    })
  },
  initOtherSprite: function (a, b, c, d, e, f) {
    if (!this.otherSprites[e]) return null;
    try {
      this.otherSprites[e] = new this.otherSprites[e](a, b, c, d, f)
    } catch (g) {
      this.otherSprites[e] = null
    }
    return this.otherSprites[e]
  },
  addOtherSprite: function (a, b) {
    this.otherSprites[a] = b
  },
  _mo: function () {
    this.bank._Q7();
    this.tableMessage._Q7();
    this.rank && this.rank._Q7();
    this.chairs.forEach(function (a) {
      a._8s() || a._r2()
    })
  },
  actionOnSecondRound: function () {
    !1 == _h8._0l.NEED_CLEAR_WIN_TABLE && this.chairs.forEach(function (a) {
      a._8s() || a._6c(!0)
    })
  },
  _sg: function (a) {
    if (this.round === a) return !1; - 1 === this.round && this.tableMessage._Q7();
    this.round = a;
    if (0 === a) return this._mo(), !0;
    return 1 === a ? (this.actionOnSecondRound(), !0) : !1
  },
  setClientIndex: function (a) {
    if (this.clientIndex !== a && (this.clientIndex = a, 255 !== a && this.designPosition.rotateTableSeatsForClientToIndex)) {
      var b = this.designPosition.rotateTableSeatsForClientToIndex[this.countChairs];
      "number" == typeof b && (0 > b || b > this.countChairs || b === a && b === this.chairs[a].rotateNumber || this.rotateChairs(b - a))
    }
  },
  rotateChairs: function (a) {
    var b = this.chairs.length,
      c = [],
      d = [];
    if (a !== b) {
      this.timer._pr(a);
      this.dealerButton._pr(a);
      0 < a ? c = this.chairs.slice(b - a).concat(this.chairs.slice(0, b - a)) : (a *= -1, c = this.chairs.slice(a, b).concat(this.chairs.slice(0, a)));
      for (var a = this.designPosition.tableSeats[this.countChairs], e = 0; e < b; e++) c[e]._tc(e, a[e]), d[c[e]._bs()] = c[e]._L();
      this.rotatedChairs = c;
      this.table._tc(d);
      _Mf._ks.emit(_Ag._Nj, [this.tableIdOnGameServer])
    }
  }
};
_Tf._U6._Un.__0._Ic = function (a, b, c, d, e, f) {
  this.factory = a;
  this.buttons = [];
  this.permanentActions = [];
  this.actions = [];
  this.selectBetButtons = [];
  this.allButtonsHidden = !0;
  this.buttonsHash = "";
  this.view = e;
  this.potType = c;
  this.moneyType = d;
  this.autoActionManager = b;
  this.tableId = f
};
_Tf._U6._Un.__0._Ic.prototype = {
  buttons: [],
  permanentActions: [],
  actions: [],
  selectBetButtons: [],
  _6r: function (a, b, c, d, e) {
    c.forEach(function (a, c) {
      var e = b.indexOf(c);
      0 <= e ? (delete b[e], a.isShow = !0, a.object._B5(d)) : a.isShow = !1
    });
    var f = this.potType,
      g = this.moneyType,
      h = this.autoActionManager,
      j = this.tableId;
    b.forEach(function (b) {
      c[b] = {
        isShow: !0,
        object: this.factory.createCommandController(this.factory, a, h, f, g, b, d, e, j)
      }
    }.bind(this))
  },
  _Fb: function (a, b, c, d) {
    if (this.buttonsHash === a) return !1;
    this.buttonsHash = a;
    0 === b.length ? (this.allButtonsHidden = !0, this.view.hideRaiseBlock()) : this.allButtonsHidden = !1;
    a.substr(-1) === "" + _Tf._dc.PlayerAction._c8 || a.substr(-1) === "" + _Tf._dc.PlayerAction._bk || this.view.hideRaiseBlock();
    this._6r(_Tf._dc.CommandType._jf, b, this.buttons, c, d);
    return !0
  },
  setSupportBetFunds: function (a) {
    var b, c = a.length;
    this.selectBetButtons = [];
    for (b = 0; b < c; b++) this.selectBetButtons.push({
      funds: a[b]
    })
  },
  _48: function (a) {
    this._6r(_Tf._dc.CommandType._Xg, a, this.permanentActions)
  },
  _8p: function (a) {
    this._6r(_Tf._dc.CommandType._Xg,
      a, this.actions)
  },
  _lh: function () {
    this.view.hideRaiseBlock();
    this.buttons.forEach(function (a) {
      a.object._eq()
    });
    this.buttons[_Tf._dc.PlayerAction._Eg] || this.view.hideDragAndDrop();
    this.actions.forEach(function (a) {
      a.object._eq()
    });
    this.permanentActions.forEach(function (a) {
      a.object._eq()
    });
    this.buttons = [];
    this.permanentActions = [];
    this.actions = [];
    this.allButtonsHidden = !0;
    this.buttonsHash = ""
  },
  _A7: function (a, b, c) {
    "undefined" != typeof a[b] && a[b].object._eg(c)
  },
  _gh: function (a, b) {
    this._A7(this.permanentActions,
      a, b)
  },
  _e2: function (a, b) {
    this._A7(this.actions, a, b)
  },
  _mh: function () {
    this.view.hideRaiseBlock();
    this.buttons.forEach(function (a) {
      a.isShow && a.object._Q7()
    })
  },
  _Gn: function (a) {
    return "undefined" != typeof this.buttons[a] && this.buttons[a].isShow
  },
  _Hg: function (a) {
    if (this.autoActionManager) {
      "undefined" === typeof a && (a = -1);
      var b = _Tf._dc.AutoAction,
        c;
      for (c in b) if (b.hasOwnProperty(c) && !(40 > b[c] || 50 <= b[c]) && a !== b[c] && !("[object Array]" === Object.prototype.toString.call(a) && 0 <= a.indexOf(b[c]))) this._e2(b[c], !1), this.autoActionManager._p3(b[c], !1)
    }
  }
};
_Tf._U6._Un.__0.GameAreas = function (a) {
  this.factory = a;
  this.areas = [];
  this.areasHash = ""
};
_Tf._U6._Un.__0.GameAreas.prototype = {
  areas: [],
  setAreas: function (a, b, c, d, e) {
    if (this.areasHash === a) return !1;
    this.areasHash = a;
    this.areas.forEach(function (a, d) {
      var e = b.indexOf(d);
      0 <= e ? (delete b[e], a.isShow = !0, a.object._B5(c)) : a.isShow = !1
    }.bind(this));
    b.forEach(function (a) {
      this.areas[a] = {
        isShow: !0,
        object: this.factory.createGameAreaController(this.factory, a, c, d, e)
      }
    }.bind(this))
  },
  clearAllAreas: function () {
    this.areas.forEach(function (a) {
      a.object._Q7()
    });
    this.areas = [];
    this.areasHash = ""
  }
};
_Tf._U6._Un._8l.BaccaratChair = function (a, b) {
  this.number = a;
  this.gameType = b;
  this.isClientChair = !1;
  this.countTakedChip = this.countTakedCards = 0;
  this.cards = [];
  this.chip = [];
  this.player = null;
  this.holders = [];
  this.ranks = [];
  this.winChip = this.winTable = null
};
_Tf._U6._Un._8l.BaccaratChair.prototype = {
  number: 0,
  isClientChair: !1,
  countTakedCards: 0,
  countTakedChip: 0,
  player: null,
  holders: [],
  ranks: [],
  cards: [],
  chip: [],
  winChip: null,
  _Wa: function (a, b) {
    this.player = a;
    this.isClientChair = b
  },
  _1c: function () {
    this._Mb();
    this.player.destroy();
    this.player = null;
    this.isClientChair = !1
  },
  changePlayerAvatar: function (a) {
    this.player && this.player._C2(a)
  },
  _y4: function (a) {
    // alert("wintab tow "+ JSON.stringify(a));
    this.winTable = a
  },
  _Eq: function () {
    return null === this.player
  },
  _Kr: function (a, b, c) {
    a.index = b;
    this.isClientChair || _Tf._dc.GameType._98(this.gameType) || _Tf._dc.GameType.isBlackJack(this.gameType) ? (this.countTakedCards-- , this.holders[c]._1p(), this.holders[c]._j8(a)) : this.cards[b] = a
  },
  _p6: function (a) {
    delete this.cards[a.index];
    this.countTakedCards--
  },
  _96: function (a) {
    delete this.cards[a];
    this.countTakedCards--
  },
  _Mb: function () {
    this.cards = [];
    this.countTakedCards = 0
  },
  _Zd: function (a) {
    a < this.countTakedCards ? (this.countTakedCards -= a, this.cards.splice(this.countTakedCards, a)) : this._Mb()
  },
  _ba: function (a) {
    a.index = this.countTakedChip++;
    this.chip[a.index] = a
  },
  _qe: function (a) {
    this.countTakedChip--;
    delete this.chip[a.index]
  },
  _b: function (a, b) {
    this.holders[a] = b
  },
  setRank: function (a, b) {
    this.ranks[a] = b
  },
  _t3: function (a, b) {
    this.holders[b]._j8(a);
    this._p6(a)
  },
  takeWinChip: function (a) {
    this.winChip ? this.winChip._uf(this.winChip._xi() + a._xi()) : this.winChip = a
  },
  giveWinChip: function () {
    delete this.winChip
  },
  getWinChip: function () {
    return this.winChip
  }
};
_Tf._U6._Un._8l.BaccaratCardHolder = function () {
  this.countTakedCards = 0;
  this.cards = [];
  this.isSelected = !1
};
_Tf._U6._Un._8l.BaccaratCardHolder.prototype = {
  countTakedCards: 0,
  cards: [],
  _Kr: function (a) {
    this.countTakedCards++;
    this.cards.push(a)
  },
  _p6: function () {
    this.countTakedCards--;
    return this.cards.pop()
  },
  _Mb: function () {
    this.countTakedCards = 0;
    this.cards = []
  },
  setSelected: function (a) {
    this.isSelected = a
  }
};
_Tf._U6._Un._8l.BaccaratTable = function (a, b) {
  this.chips = [];
  this.state = _Tf._dc.TableState._Be;
  this.winChip = null;
  this.gameType = b
};
_Tf._U6._Un._8l.BaccaratTable.prototype = {
  state: _Tf._dc.TableState._Be,
  chips: [],
  tmpChips: [],
  winChip: null,
  _ba: function (a, b, c) {
    var d;
    "undefined" == typeof c && (c = 0);
    this.chips[a.__k()] && this.chips[a.__k()][c] && (d = this.chips[a.__k()][c]);
    this.chips[a.__k()] || (this.chips[a.__k()] = []);
    d ? b ? this.chips[a.__k()][c]._cf(a) : this.chips[a.__k()][c]._uf(a._xi()) : this.chips[a.__k()][c] = a
  },
  takeWinChip: function (a) {
    this.winChip ? this.winChip._uf(this.winChip._xi() + a._xi()) : this.winChip = a
  },
  takeTmpChip: function (a, b, c) {
    this.tmpChips[a.__k()] || (this.tmpChips[a.__k()] = []);
    this.tmpChips[a.__k()][c] = a
  },
  _D5: function (a, b) {
    "undefined" == typeof b && (b = 0);
    this.chips[a] && this.chips[a][b] && delete this.chips[a][b]
  },
  giveWinChip: function () {
    delete this.winChip
  },
  giveTmpChip: function (a, b) {
    this.tmpChips[a] && this.tmpChips[a][b] && delete this.tmpChips[a][b]
  },
  getBetChip: function (a, b) {
    return this.chips[a][b]
  },
  getWinChip: function () {
    return this.winChip
  },
  _1s: function (a) {
    this.potChips._0f(a);
    delete this.chips[0][a.__k()]
  },
  _Gh: function (a) {
    this.state = a
  },
  _Z7: function () {
    return this.state != _Tf._dc.TableState._vc && this.state != _Tf._dc.TableState._D8
  }
};
_Tf._U6._Un.__0.BaccaratScene = function (a, b, c, d) {
  this.tableIdOnGameServer = c;
  this.factory = a;
  this.bank = this.tableMessage = this.rank = this.table = null;
  this.rotatedChairs = this.chairs = [];
  this.gameType = d;
  this.designPosition = _Mf._b1.getPositionByGameType(this.gameType);
  this.otherSprites = {};
  this.currentActiveChair = 0;
  this.countChairs = b;
  this.isLoop = !1;
  this.clientIndex = 255;
  this._qk = !1;
  this.round = -1
};
_Tf._U6._Un.__0.BaccaratScene.prototype = {
  init: function (a, b, c, d, e, f, g) {
    this.bank = this.factory.createBankController(this.factory, a, b, e, f, g);
    this.table = this.factory.createTableController(this.factory, a, b, c, e, f, this.designPosition);
    this.timer = this.factory.createTimerController(this.factory, a, 0, g, this.countChairs);
    for (var h = this.designPosition.tableSeats[this.countChairs], j = 0; j < this.countChairs; j++) this.chairs[j] = this.factory.createChairController(this.factory, a, b, c, d, j, h[j], e, f, g);
    c = _Mf._q1._5p(g).model.info.numberOfDecks;
    this.gameType = e;
    this.rotatedChairs = this.chairs;
    this.tableMessage = this.factory.createTableMessageController(this.factory, a, g);
    this.cardShoe = this.factory.createShoeController(this.factory, a, b, this.designPosition, c)
  },
  initOtherSprite: function (a, b, c, d, e, f) {
    if (!this.otherSprites[e]) return null;
    try {
      this.otherSprites[e] = new this.otherSprites[e](a, b, c, d, f)
    } catch (g) {
      this.otherSprites[e] = null
    }
    return this.otherSprites[e]
  },
  addOtherSprite: function (a, b) {
    this.otherSprites[a] = b
  },
  _mo: function () {
    this.bank._Q7();
    this.tableMessage._Q7();
    this.rank && this.rank._Q7();
    this.chairs.forEach(function (a) {
      a._8s() || a._r2()
    })
  },
  actionOnSecondRound: function () {
    !1 == _h8._0l.NEED_CLEAR_WIN_TABLE && this.chairs.forEach(function (a) {
      a._8s() || a._6c(!0)
    })
  },
  _sg: function (a) {
    if (this.round === a) return !1; - 1 === this.round && this.tableMessage._Q7();
    this.round = a;
    if (0 === a) return this._mo(), !0;
    return 1 === a ? (this.actionOnSecondRound(), !0) : !1
  },
  setClientIndex: function (a) {
    if (this.clientIndex !== a && (this.clientIndex = a, 255 !== a && this.designPosition.rotateTableSeatsForClientToIndex)) {
      var b = this.designPosition.rotateTableSeatsForClientToIndex[this.countChairs];
      "number" == typeof b && (0 > b || b > this.countChairs || b === a && b === this.chairs[a].rotateNumber || this.rotateChairs(b - a))
    }
  },
  rotateChairs: function (a) {
    var b = this.chairs.length,
      c = [],
      d = [];
    if (a !== b) {
      this.timer._pr(a);
      0 < a ? c = this.chairs.slice(b - a).concat(this.chairs.slice(0, b - a)) : (a *= -1, c = this.chairs.slice(a, b).concat(this.chairs.slice(0, a)));
      for (var a = this.designPosition.tableSeats[this.countChairs], e = 0; e < b; e++) c[e]._tc(e, a[e]), d[c[e]._bs()] = c[e]._L();
      this.rotatedChairs = c;
      this.table._tc(d);
      _Mf._ks.emit(_Ag._Nj, [this.tableIdOnGameServer])
    }
  }
};
_Tf._U6._Un._8l.BlackJackShoe = function (a) {
  this.cardsInShoe = 0;
  this.numberOfDecks = a || 0
};
_Tf._U6._Un._8l.BlackJackShoe.prototype = {
  cardsInShoe: 0,
  numberOfDecks: 0,
  setCardsInShoe: function (a) {
    this.cardsInShoe = a
  },
  setNumberOfDecks: function (a) {
    this.numberOfDecks = a
  },
  getCardsInShoe: function () {
    return this.cardsInShoe
  },
  getNumberOfDecks: function () {
    return this.numberOfDecks
  }
};
_Tf._U6._Un._8l.BlackJackChair = function (a, b) {
  _Tf._U6._Un._8l.BlackJackChair.superclass.apply(this, arguments);
  this.holdersMap = []
};
extend(_Tf._U6._Un._8l.BlackJackChair, _Tf._U6._Un._8l._Na);
_Tf._U6._Un._8l.BlackJackChair.prototype.setHoldersMap = function (a) {
  this.holdersMap = a
};
_Tf._U6._Un._8l.BlackJackChair.prototype.splitCards = function (a, b) {
  var c = this.holders[a]._ji();
  this.holders[b]._j8(c)
};
_Tf._U6._Un.__0.BlackJackScene = function (a, b, c, d) {
  this.tableIdOnGameServer = c;
  this.factory = a;
  this.timer = this.bank = this.tableMessage = this.rank = this.table = null;
  this.chairs = [];
  this.gameType = d;
  this.designPosition = _Mf._b1.getPositionByGameType(this.gameType);
  this.otherSprites = {};
  this.currentActiveChair = 0;
  this.countChairs = b;
  this.isLoop = !1;
  this.clientIndex = 255;
  this._qk = !1;
  this.round = -1
};
_Tf._U6._Un.__0.BlackJackScene.prototype = {
  tableMessage: null,
  rank: null,
  table: null,
  designPosition: null,
  chairs: [],
  countChairs: 0,
  bank: null,
  timer: null,
  isLoop: !1,
  otherSprites: {},
  init: function (a, b, c, d, e, f, g) {
    this.bank = this.factory.createBankController(this.factory, a, b, e, f, g);
    this.table = this.factory.createTableController(this.factory, a, b, c, e, f, this.designPosition);
    this.timer = this.factory.createTimerController(this.factory, a, 0, g, this.countChairs);
    for (var h = this.designPosition.tableSeats[this.countChairs],
      j = 0; j < this.countChairs; j++) this.chairs[j] = this.factory.createChairController(this.factory, a, b, c, d, j, h[j], e, f, g);
    this.gameType = e;
    c = _Mf._q1._5p(g).model.info.numberOfDecks;
    this.tableMessage = this.factory.createTableMessageController(this.factory, a, g);
    this.rank = this.factory.createRankController(this.factory, a, b, null, g, null, !0);
    this.cardShoe = this.factory.createShoeController(this.factory, a, b, this.designPosition, c)
  },
  initOtherSprite: function (a, b, c, d, e, f) {
    if (!this.otherSprites[e]) return null;
    try {
      this.otherSprites[e] = new this.otherSprites[e](a, b, c, d, f)
    } catch (g) {
      this.otherSprites[e] = null
    }
    return this.otherSprites[e]
  },
  addOtherSprite: function (a, b) {
    this.otherSprites[a] = b
  },
  _mo: function () {
    this.bank._Q7();
    this.tableMessage._Q7();
    this.rank && this.rank._Q7();
    this.chairs.forEach(function (a) {
      a._8s() || a._r2()
    })
  },
  actionOnSecondRound: function () {
    !1 == _h8._0l.NEED_CLEAR_WIN_TABLE && this.chairs.forEach(function (a) {
      a._8s() || a._6c(!0)
    })
  },
  _sg: function (a) {
    if (this.round === a) return !1; - 1 === this.round && this.tableMessage._Q7();
    this.round = a;
    if (0 === a) return this._mo(), !0;
    return 1 === a ? (this.actionOnSecondRound(), !0) : !1
  },
  setClientIndex: function (a) {
    if (this.clientIndex !== a && (this.clientIndex = a, 255 !== a && this.designPosition.rotateTableSeatsForClientToIndex)) {
      var b = this.designPosition.rotateTableSeatsForClientToIndex[this.countChairs];
      "number" == typeof b && (0 > b || b > this.countChairs || b === a && b === this.chairs[a].rotateNumber || this.rotateChairs(b - a))
    }
  },
  rotateChairs: function (a) {
    var b = this.chairs.length,
      c = [],
      d = [];
    if (a !== b) {
      this.timer._pr(a);
      0 < a ? c = this.chairs.slice(b - a).concat(this.chairs.slice(0, b - a)) : (a *= -1, c = this.chairs.slice(a, b).concat(this.chairs.slice(0, a)));
      for (var a = this.designPosition.tableSeats[this.countChairs], e = 0; e < b; e++) c[e]._tc(e, a[e]), d[c[e]._bs()] = c[e]._L();
      this.rotatedChairs = c;
      this.table._tc(d);
      _Mf._ks.emit(_Ag._Nj, [this.tableIdOnGameServer])
    }
  }
};
_Tf._U6._Un._8l.PaigowCardHolder = function () {
  this.countTakedCards = 0;
  this.cards = [];
  this.isSelected = !1
};
_Tf._U6._Un._8l.PaigowCardHolder.prototype = {
  countTakedCards: 0,
  cards: [],
  _Kr: function (a) {
    this.countTakedCards++;
    this.cards.push(a)
  },
  _p6: function () {
    this.countTakedCards--;
    return this.cards.pop()
  },
  _Mb: function () {
    this.countTakedCards = 0;
    this.cards = []
  },
  setSelected: function (a) {
    this.isSelected = a
  }
};
_Tf._U6._Un._8l.PaigowChair = function (a, b) {
  _Tf._U6._Un._8l.PaigowChair.superclass.apply(this, arguments);
  this.holdersMap = [];
  this.winTable = null
};
extend(_Tf._U6._Un._8l.PaigowChair, _Tf._U6._Un._8l._Na);
_Tf._U6._Un._8l.PaigowChair.prototype.winChip = null;
_Tf._U6._Un._8l.PaigowChair.prototype.winTable = null;
_Tf._U6._Un._8l.PaigowChair.prototype.setHoldersMap = function (a) {
  this.holdersMap = a
};
_Tf._U6._Un._8l.PaigowChair.prototype.splitCards = function (a, b) {
  var c = this.holders[a]._ji();
  this.holders[b]._j8(c)
};
_Tf._U6._Un._8l.PaigowChair.prototype.takeWinChip = function (a) {
  this.winChip ? this.winChip._uf(this.winChip._xi() + a._xi()) : this.winChip = a
};
_Tf._U6._Un._8l.PaigowDealerCardHolder = function () {
  this.countTakedCards = 0;
  this.cards = [];
  this.isSelected = !1
};
_Tf._U6._Un._8l.PaigowDealerCardHolder.prototype = {
  countTakedCards: 0,
  cards: [],
  _Kr: function (a) {
    this.countTakedCards++;
    this.cards.push(a)
  },
  _p6: function () {
    this.countTakedCards--;
    return this.cards.pop()
  },
  _Mb: function () {
    this.countTakedCards = 0;
    this.cards = []
  },
  setSelected: function (a) {
    this.isSelected = a
  }
};
_Tf._U6._Un.__0.PaigowScene = function (a, b, c, d) {
  this.tableIdOnGameServer = c;
  this.factory = a;
  this.bank = this.tableMessage = this.rank = this.table = null;
  this.rotatedChairs = this.chairs = [];
  this.gameType = d;
  this.designPosition = _Mf._b1.getPositionByGameType(this.gameType);
  this.otherSprites = {};
  this.currentActiveChair = 0;
  this.countChairs = b;
  this.isLoop = !1;
  this.clientIndex = 255;
  this._qk = !1;
  this.round = -1
};
_Tf._U6._Un.__0.PaigowScene.prototype = {
  init: function (a, b, c, d, e, f, g) {
    this.bank = this.factory.createBankController(this.factory, a, b, e, f, g);
    this.table = this.factory.createTableController(this.factory, a, b, c, e, f, this.designPosition);
    this.timer = this.factory.createTimerController(this.factory, a, 0, g, this.countChairs);
    for (var h = this.designPosition.tableSeats[this.countChairs], j = 0; j < this.countChairs; j++) this.chairs[j] = this.factory.createChairController(this.factory, a, b, c, d, j, h[j], e, f, g);
    _Mf._q1._5p(g);
    this.gameType = e;
    this.rotatedChairs = this.chairs;
    this.tableMessage = this.factory.createTableMessageController(this.factory, a, g)
  },
  initOtherSprite: function (a, b, c, d, e, f) {
    if (!this.otherSprites[e]) return null;
    try {
      this.otherSprites[e] = new this.otherSprites[e](a, b, c, d, f)
    } catch (g) {
      this.otherSprites[e] = null
    }
    return this.otherSprites[e]
  },
  addOtherSprite: function (a, b) {
    this.otherSprites[a] = b
  },
  _mo: function () {
    this.bank._Q7();
    this.tableMessage._Q7();
    this.rank && this.rank._Q7();
    this.chairs.forEach(function (a) {
      a._8s() || a._r2()
    })
  },
  actionOnSecondRound: function () {
    !1 == _h8._0l.NEED_CLEAR_WIN_TABLE && this.chairs.forEach(function (a) {
      a._8s() || a._6c(!0)
    })
  },
  _sg: function (a) {
    if (this.round === a) return !1; - 1 === this.round && this.tableMessage._Q7();
    this.round = a;
    if (0 === a) return this._mo(), !0;
    return 1 === a ? (this.actionOnSecondRound(), !0) : !1
  },
  setClientIndex: function (a) {
    if (this.clientIndex !== a && (this.clientIndex = a, 255 !== a && this.designPosition.rotateTableSeatsForClientToIndex)) {
      var b = this.designPosition.rotateTableSeatsForClientToIndex[this.countChairs];
      "number" == typeof b && (0 > b || b > this.countChairs || b === a && b === this.chairs[a].rotateNumber || this.rotateChairs(b - a))
    }
  },
  rotateChairs: function (a) {
    var b = this.chairs.length,
      c = [],
      d = [];
    if (a !== b) {
      this.timer._pr(a);
      0 < a ? c = this.chairs.slice(b - a).concat(this.chairs.slice(0, b - a)) : (a *= -1, c = this.chairs.slice(a, b).concat(this.chairs.slice(0, a)));
      for (var a = this.designPosition.tableSeats[this.countChairs], e = 0; e < b; e++) c[e]._tc(e, a[e]), d[c[e]._bs()] = c[e]._L();
      this.rotatedChairs = c;
      this.table._tc(d);
      _Mf._ks.emit(_Ag._Nj, [this.tableIdOnGameServer])
    }
  },
  onPlayerChanged: function (a) {
    this.clientIndex === a && this.table.updateClientCash(this.tableIdOnGameServer)
  }
};
_Tf._U6._Un._8l.CrapsTable = function (a, b) {
  _Tf._U6._Un._8l.CrapsTable.superclass.apply(this, arguments);
  this.dices = [];
  this.curentStakes = [];
  this.curentAmount = 0;
  this.description = [];
  this.lastStakes = [];
  this.clearedStakes = []
};
extend(_Tf._U6._Un._8l.CrapsTable, _Tf._U6._Un._8l._l7);
_Tf._U6._Un._8l.CrapsTable.prototype.takeDice = function (a) {
  this.dices.push(a)
};
_Tf._U6._Un._8l.CrapsTable.prototype.removeDices = function () {
  this.dices = []
};
_Tf._U6._Un._8l.CrapsTable.prototype.getDices = function () {
  return this.dices
};
_Tf._U6._Un._8l.CrapsTable.prototype.isInvalidStake = function (a) {
  var b, c, d = 0,
    e = 0,
    f = 0,
    g = 0;
  for (b in this.curentStakes) {
    c = this.curentStakes[b];
    if (1 == c.type) d = c.amount;
    if (2 == c.type) f = c.amount;
    if (7 == c.type) e = c.amount;
    if (8 == c.type) g = c.amount
  }
  return 7 == a.type && 2 * d < e + this.curentAmount || 8 == a.type && 2 * f < g + this.curentAmount ? !0 : !1
};
_Tf._U6._Un._8l.CrapsTable.prototype.addStake = function (a) {
  if (!(0 === this.curentAmount || this.isInvalidStake(a))) {
    var b, c, d = -1;
    for (b in this.curentStakes) if (c = this.curentStakes[b], a.type == c.type && a.point == c.point) {
      d = b;
      break
    }
    b = _Mf._q1._5p(_Mf._q1.activeTableId);
    if (this.getSumAllStakes() + this.curentAmount <= b.model.info.maxBet) 0 <= d ? this.curentStakes[d].amount += this.curentAmount : (a.amount = this.curentAmount, a.newItem = !0, this.curentStakes.push(a))
  }
};
_Tf._U6._Un._8l.CrapsTable.prototype.setStake = function (a) {
  a.newItem = !1;
  this.curentStakes.push(a)
};
_Tf._U6._Un._8l.CrapsTable.prototype.getSumNewStakes = function () {
  var a = 0,
    b, c;
  for (b in this.curentStakes) c = this.curentStakes[b], c.newItem && (a += c.amount);
  return a
};
_Tf._U6._Un._8l.CrapsTable.prototype.getSumAllStakes = function () {
  var a = 0,
    b, c;
  for (b in this.curentStakes) c = this.curentStakes[b], c.amount && (a += c.amount);
  return a
};
_Tf._U6._Un._8l.CrapsTable.prototype.getNewStakes = function () {
  var a = [],
    b, c;
  for (b in this.curentStakes) c = this.curentStakes[b], c.newItem && a.push(c);
  if (0 < this.clearedStakes.length) for (var d in this.clearedStakes) c = this.clearedStakes[d], a.push(c);
  return a
};
_Tf._U6._Un._8l.CrapsTable.prototype.getStakes = function () {
  return this.curentStakes
};
_Tf._U6._Un._8l.CrapsTable.prototype.clearAllStakes = function () {
  this.curentStakes = []
};
_Tf._U6._Un._8l.CrapsTable.prototype.clearNewStakes = function () {
  var a, b, c = [];
  for (a in this.curentStakes) b = this.curentStakes[a], b.newItem || c.push(b);
  this.curentStakes = c
};
_Tf._U6._Un._8l.CrapsTable.prototype.clearSecondaryStakes = function () {
  if (!(0 < this.clearedStakes.length)) {
    var a, b, c = [],
      d = [13, 14, 15, 16, 12, 21, 11, 20, 17, 19];
    for (a in this.curentStakes) b = this.curentStakes[a], -1 !== d.indexOf(b.type) ? (b.newItem = !0, b.amount = -b.amount, this.clearedStakes.push(b)) : c.push(b);
    this.curentStakes = c
  }
};
_Tf._U6._Un._8l.CrapsTable.prototype.hasClearStakesAvailable = function () {
  var a, b, c = [],
    d = [13, 14, 15, 16, 12, 21, 11, 20, 17, 19];
  for (a in this.curentStakes) b = this.curentStakes[a], -1 !== d.indexOf(b.type) ? c.push(b) : b.newItem && c.push(b);
  return 0 < c.length
};
_Tf._U6._Un._8l.CrapsTable.prototype.unsetClearSecondaryStakes = function () {
  this.clearedStakes = []
};
_Tf._U6._Un._8l.CrapsTable.prototype.setActiveChipsAmount = function (a) {
  this.curentAmount = a || 0
};
_Tf._U6._Un._8l.CrapsTable.prototype.setLastStakes = function () {
  this.lastStakes = this.curentStakes
};
_Tf._U6._Un._8l.CrapsTable.prototype.setStakesFromRepeat = function () {
  var a = _Mf._q1._5p(_Mf._q1.activeTableId),
    b = a.getAllowedStakes(),
    c = [],
    d;
  for (d in b) c.push(b[d].type);
  for (var e in this.lastStakes) if (this.lastStakes.hasOwnProperty(e) && this.getSumAllStakes() + this.lastStakes[e].amount <= a.model.info.maxBet && this.getSumAllStakes() + this.lastStakes[e].amount <= _Mf._q1._57() && 0 <= c.indexOf(this.lastStakes[e].type)) {
    var b = !1,
      f;
    for (f in this.curentStakes) this.curentStakes[f].type === this.lastStakes[e].type && this.curentStakes[f].point === this.lastStakes[e].point && (b = !0);
    if (!b || 0 === this.curentStakes.length) this.lastStakes[e].newItem = !0, this.curentStakes.push(this.lastStakes[e])
  }
};
_Tf._U6._Un._8l.CrapsTable.prototype.isStakesFromRepeat = function () {
  var a = _Mf._q1._5p(_Mf._q1.activeTableId),
    b = a.getAllowedStakes(),
    c = [],
    d = [],
    e;
  for (e in b) c.push(b[e].type);
  for (var f in this.lastStakes) if (this.lastStakes.hasOwnProperty(f) && this.getSumAllStakes() + this.lastStakes[f].amount <= a.model.info.maxBet && this.getSumAllStakes() + this.lastStakes[f].amount <= _Mf._q1._57() && 0 <= c.indexOf(this.lastStakes[f].type)) {
    var b = !1,
      g;
    for (g in this.curentStakes) this.curentStakes[g].type === this.lastStakes[f].type && this.curentStakes[g].point === this.lastStakes[f].point && (b = !0);
    (!b || 0 === this.curentStakes.length) && d.push(this.lastStakes[f])
  }
  return 0 < d.length
};
_Tf._U6._Un._8l.CrapsDice = function (a) {
  this.value = a
};
_Tf._U6._Un._8l.CrapsDice.prototype = {
  value: "",
  set: function (a) {
    this.value = a
  }
};
_Tf._U6._Un.__0.CrapsScene = function (a, b, c, d) {
  this.tableIdOnGameServer = c;
  this.factory = a;
  this.bank = this.tableMessage = this.rank = this.table = null;
  this.rotatedChairs = this.chairs = [];
  this.gameType = d;
  this.designPosition = _Mf._b1.getPositionByGameType(this.gameType);
  this.otherSprites = {};
  this.currentActiveChair = 0;
  this.countChairs = b;
  this.isLoop = !1;
  this.clientIndex = 255;
  this._qk = !1;
  this.round = -1
};
_Tf._U6._Un.__0.CrapsScene.prototype = {
  init: function (a, b, c, d, e, f, g) {
    this.bank = this.factory.createBankController(this.factory, a, b, e, f, g);
    this.table = this.factory.createTableController(this.factory, a, b, c, e, f, this.designPosition);
    this.timer = this.factory.createTimerController(this.factory, a, 0, g, this.countChairs);
    for (var h = this.designPosition.tableSeats[this.countChairs], j = 0; j < this.countChairs; j++) this.chairs[j] = this.factory.createChairController(this.factory, a, b, c, d, j, h[j], e, f, g, this.countChairs);
    _Mf._q1._5p(g);
    this.gameType = e;
    this.rotatedChairs = this.chairs;
    this.tableMessage = this.factory.createTableMessageController(this.factory, a, g)
  },
  initOtherSprite: function (a, b, c, d, e, f) {
    if (!this.otherSprites[e]) return null;
    try {
      this.otherSprites[e] = new this.otherSprites[e](a, b, c, d, f)
    } catch (g) {
      this.otherSprites[e] = null
    }
    return this.otherSprites[e]
  },
  addOtherSprite: function (a, b) {
    this.otherSprites[a] = b
  },
  _mo: function () {
    this.bank._Q7();
    this.tableMessage._Q7();
    this.rank && this.rank._Q7();
    this.chairs.forEach(function (a) {
      a._8s() || a._r2()
    })
  },
  actionOnSecondRound: function () {
    !1 == _h8._0l.NEED_CLEAR_WIN_TABLE && this.chairs.forEach(function (a) {
      a._8s() || a._6c(!0)
    })
  },
  _sg: function (a) {
    if (this.round === a) return !1; - 1 === this.round && this.tableMessage._Q7();
    this.round = a;
    if (0 === a) return this._mo(), !0;
    return 1 === a ? (this.actionOnSecondRound(), !0) : !1
  },
  setClientIndex: function (a) {
    if (this.clientIndex !== a && (this.clientIndex = a, 255 !== a && this.designPosition.rotateTableSeatsForClientToIndex)) {
      var b = this.designPosition.rotateTableSeatsForClientToIndex[this.countChairs];
      "number" == typeof b && (0 > b || b > this.countChairs || b === a && b === this.chairs[a].rotateNumber || this.rotateChairs(b - a))
    }
  },
  rotateChairs: function (a) {
    var b = this.chairs.length,
      c = [],
      d = [];
    if (a !== b) {
      this.timer._pr(a);
      0 < a ? c = this.chairs.slice(b - a).concat(this.chairs.slice(0, b - a)) : (a *= -1, c = this.chairs.slice(a, b).concat(this.chairs.slice(0, a)));
      for (var a = this.designPosition.tableSeats[this.countChairs], e = 0; e < b; e++) c[e]._tc(e, a[e]), d[c[e]._bs()] = c[e]._L();
      this.rotatedChairs = c;
      this.table._tc(d);
      _Mf._ks.emit(_Ag._Nj, [this.tableIdOnGameServer])
    }
  },
  onPlayerChanged: function (a) {
    this.clientIndex === a && this.table.updateClientCash(this.tableIdOnGameServer)
  }
};
_Tf._a._Un._8l.Command = function (a, b, c, d, e, f, g, h, j) {
  this.tableId = j;
  this.model = a.createCommandModel(b, f);
  this.view = a.createCommandView(a, b, c, d, e, this.model.label, f, g, h, j)
};
_Tf._a._Un._8l.Command.prototype = {
  model: null,
  view: null,
  __k: function () {
    return this.model.number
  },
  _K5: function (a) {
    this.view.draw(a)
  },
  _Q7: function () {
    this.view.clear()
  },
  _B5: function (a) {
    this.view._B5(a);
    (this.model.number === _Tf._dc.PlayerAction._c8 || this.model.number === _Tf._dc.PlayerAction._bk || this.model.number === _Tf._dc.PlayerAction._dp || this.model.number === _Tf._dc.PlayerAction._c1 || this.model.number === _Tf._dc.PlayerAction._32 || this.model.number === _Tf._dc.PlayerAction._Y7 || this.model.number === _Tf._dc.PlayerAction._c4) && this.view._Mk();
    this.code === _Tf._dc.PlayerAction._B9 && this.view.drawBetsBlock()
  },
  _eq: function () {
    this._Q7();
    this.view.remove()
  },
  _eg: function (a) {
    this.view._p3(a)
  }
};
_Tf._a._Un._8l.GameArea = function (a, b, c, d, e) {
  this.model = a.createGameAreaModel();
  this.view = a.createGameAreaView(b, c, d, e)
};
_Tf._a._Un._8l.GameArea.prototype = {
  model: null,
  view: null,
  __k: function () {
    return this.model.number
  },
  _K5: function (a) {
    this.view.draw(a)
  },
  _Q7: function () {
    this.view.clear()
  },
  _B5: function (a) {
    this.view._B5(a)
  }
};
_Tf._a._Un._8l._hl = function (a, b, c, d, e, f) {
  this.model = a.createBankModel();
  this.view = a.createBankView(b, c, _Tf._0l._N1._6i.format(f));
  this.factory = a;
  this.gameType = d;
  this.designPosition = _Mf._b1.getPositionByGameType(d);
  this.model._y4(a.createWinTableController(a, b, d, null, this.designPosition));
  this.model.setRakeChip(a.createChipController(a, b, this.view.getRakePosition(), -1, 0, e, _Tf._dc.ChipState._D9, this.designPosition));
  this._tr = this._tr.bind(this.model);
  this._yq = this._yq.bind(this)
};
_Tf._a._Un._8l._hl.prototype = {
  model: null,
  view: null,
  gameType: _Tf._dc.GameType._dk,
  _5q: function (a) {
    a._K5()
  },
  _tr: function (a) {
    a._X4();
    !a._Xb() && a._Ol() && this._ce(a)
  },
  _K5: function () {
    this.view.draw();
    this.model.foldedCards.forEach(this._5q);
    this.model.winTable._K5();
    this.model.rakeChip._K5()
  },
  _X4: function () {
    this.view.update();
    this.model.foldedCards.forEach(this._tr);
    this.model.winTable._X4();
    this.model.rakeChip._X4()
  },
  _L9: function (a) {
    var b = this.factory.createCardController(this.factory, this.view.getContext(),
      this.view.getPosition(), this.designPosition);
    b._uf(a);
    return b
  },
  _yq: function (a) {
    a._g4(this.view.getPosition());
    this.model._Kr(a, 0)
  },
  _C7: function (a) {
    a.forEach(this._yq)
  },
  _Fp: function (a) {
    var b = this.factory.createCardController(this.factory, this.view.getContext(), this.view.getPosition(), this.designPosition, !0);
    b._uf(a);
    return b
  },
  _Db: function (a, b) {
    a && (b ? (a._70(this.view.getPosition()), this.model.rakeChip._cf(a)) : this.model.rakeChip._uf(a._xi()))
  },
  _Cj: function (a) {
    this.model.rakeChip._uf(a)
  },
  __l: function (a) {
    this.model.winTable && this.model.winTable._40(a)
  },
  _Q7: function () {
    this.model.clear()
  },
  _Va: function () {
    this.view.drawMiddle()
  },
  _Em: function () {
    this.view.clearMiddle()
  }
};
_Tf._a._Un._8l._nq = function (a, b, c, d, e) {
  this.model = a.createDealerButtonModel(c);
  this.view = a.createDealerButtonView(b, c, d, _Tf._0l._N1._6i.format(e))
};
_Tf._a._Un._8l._nq.prototype = {
  model: null,
  view: null,
  _pr: function (a) {
    this.view.locateByStep(this._mc(), a)
  },
  _K5: function () {
    255 != this.model.number && this.view.draw()
  },
  _X4: function () {
    this.view.update()
  },
  _7d: function (a) {
    a != this.model.__k() && (255 != a && this.view._Js(a), this.model._ej(a))
  },
  _mc: function () {
    return this.model.__k()
  }
};
_Tf._a._Un._8l._D = function (a, b, c, d, e) {
  this.model = a.createTimerModel(c);
  this.view = a.createTimerView(b, c, _Tf._0l._N1._6i.format(d), e)
};
_Tf._a._Un._8l._D.prototype = {
  model: null,
  view: null,
  _pr: function (a) {
    this.view.locateByStep(this._mc(), a)
  },
  _K5: function () {
    this.view.draw()
  },
  _X4: function () {
    this.view.update()
  },
  _bc: function (a, b, c, d) {
    255 === a ? this._P1() : (this.model._ej(a), this.view._Kg(a, d), this.view.show(b, c))
  },
  _P1: function () {
    this.view.hide()
  },
  _ze: function (a) {
    this._mc() === a && this._P1()
  },
  _G5: function (a) {
    this.view.showBrokenTime(a)
  },
  _xd: function () {
    this.view.hideBrokenTime()
  },
  _mc: function () {
    return this.model.__k()
  }
};
_Tf._a._Un._8l._W2 = function (a, b, c, d, e) {
  this.model = a.createCardModel(a);
  this.view = a.createCardView(b, c, d, e, a);
  this.state = _Tf._dc.CardState._08
};
_Tf._a._Un._8l._W2.prototype = {
  model: null,
  view: null,
  state: _Tf._dc.CardState._08,
  _s2: function (a) {
    this.state = a
  },
  _X4: function () {
    this.view.update()
  },
  _K5: function (a) {
    this.view.draw(this.state, this.model.isOpen, this.model.value, a || !1, this.model.isSelected, this.model.isActive)
  },
  _Q7: function () {
    this.view.clear(this.model.isActive)
  },
  _rl: function () {
    this.model.isOpen || (this.model._Hk(!0), this.view.open())
  },
  _gj: function (a) {
    this.view._Oq(a)
  },
  _Bl: function (a, b) {
    this._s2(_Tf._dc.CardState._vc);
    this.view.setAngle(b);
    this.view._Oq(a)
  },
  _zb: function (a, b) {
    this._s2(_Tf._dc.CardState._4g);
    this.model._Hk(!0);
    this.view.__n(a, b)
  },
  _24: function (a, b) {
    this._s2(b ? _Tf._dc.CardState._2o : _Tf._dc.CardState._5r);
    this.model._Hk(!0);
    this._U1(0);
    this.view._05(a);
    this.view.setIsClientCard(b);
    b && this.view.correctClientCardPosition(!0);
    (this.model.value == _Tf._dc._W2._G7 || this.model.value == _Tf._dc._W2._Al) && !b && this.view.correctBackCardPosition()
  },
  _47: function (a, b) {
    this._s2(b ? _Tf._dc.CardState._2o : _Tf._dc.CardState._5r);
    this._U1(0);
    this.view._o6(a);
    this.view.setIsClientCard(b);
    b && this.view.correctClientCardPosition(!1);
    (this.model.value == _Tf._dc._W2._G7 || this.model.value == _Tf._dc._W2._Al) && !b && this.view.correctBackCardPosition()
  },
  _g4: function (a) {
    this._s2(_Tf._dc.CardState._x2);
    this.model._Hk(!1);
    this.model._ec();
    this._gj(a)
  },
  _uf: function (a) {
    this.model.set(a)
  },
  _xi: function () {
    return this.model.value
  },
  _7c: function () {
    this.view._s1()
  },
  _Xb: function () {
    return this.view.isAnimating()
  },
  _Ol: function () {
    return this.model._kl()
  },
  _U1: function (a) {
    this.view.setAngle(a)
  },
  _Kg: function (a, b) {
    b = b || 0;
    this.view._Kg(a);
    this._U1(b)
  },
  _L1: function (a) {
    this.view.setMiddleContext(a)
  },
  setSelected: function (a) {
    this.model.setSelected(a)
  },
  fixPositionAction: function () {
    this.view.fixPosition()
  },
  _ss: function (a) {
    this.model.setActive(a)
  }
};
_Tf._a._Un._8l._a6 = function (a, b, c, d, e, f, g) {
  this.designPosition = e;
  this.model = a.createCardHolderModel(c);
  this.view = a.createCardHolderView(b, d, e, f, g);
  this.factory = a;
  this._5q = this._5q.bind(this.view)
};
_Tf._a._Un._8l._a6.prototype = {
  model: null,
  view: null,
  _tc: function (a) {
    this.view.locate(a)
  },
  _U3: function (a) {
    a._X4()
  },
  _5q: function (a) {
    a._K5(this.hasShadow())
  },
  _X4: function (a) {
    this.view.update(this.model.cards, a, this.model.isSelected, this.model.isActive);
    this.model.cards.forEach(this._U3)
  },
  _K5: function () {
    this.view.draw();
    for (var a = 0, b = this.model.cards.length; a < b; a++) this.model.cards[a].setSelected(this.model.isSelected && !this.view.hasShadow()), this._5q(this.model.cards[a])
  },
  _j8: function (a, b) {
    a._ss(this.model.isActive);
    a.setSelected(this.model.isSelected);
    this.view.setShadow(!1);
    this.model._Kr(a, b)
  },
  _1p: function () {
    return this.model.countTakedCards++
  },
  _Ug: function (a, b) {
    var c = a.length,
      d;
    if (c === this.model.countTakedCards && c === this.model.cards.length) for (d = 0; d < c; d++) this.model.cards[d]._ss(this.model.isActive), this.model.cards[d].setSelected(this.model.isSelected), this.model.cards[d]._uf(a[d]), this.model.cards[d]._rl();
    else {
      this._Cn();
      for (d = 0; d < c; d++) {
        var e = this.factory.createCardController(this.factory, this.view.getContext(),
          this.view.getPosition(), this.designPosition);
        e._ss(this.model.isActive);
        e.setSelected(this.model.isSelected);
        e._uf(a[d]);
        e._24(this.view.getPosition(b, !1), b);
        this.model._Kr(e)
      }
      this.model.countTakedCards = c
    }
  },
  _ji: function () {
    this.view.decCurrentCount();
    return this.model._p6()
  },
  _Cn: function () {
    this.model._Mb();
    this.view.clearCurrentCount();
    this.view.setShadow(!1)
  },
  _Ql: function (a) {
    if (!a || !this.view.hasShadow() || this.model.isBusted) this._Cn(), this.model.setBusted(!1)
  },
  _sh: function (a) {
    if (!a) return a = this.model.cards,
      this._Cn(), a;
    this.view.setShadow(!0);
    return []
  },
  playerBustedAction: function () {
    this.model.setBusted(!0);
    this.view.setShadow(!0)
  },
  _4n: function () {
    return 0 < this.model.countTakedCards
  },
  _Xb: function () {
    return this.model.cards.length != this.model.countTakedCards
  },
  setSelected: function (a) {
    this.model.setSelected(a)
  },
  setDesignIndexAction: function (a, b, c, d) {
    a = this.model.cards.length;
    this.model.setActive(c);
    this.model.setSelected(d);
    this.view.setDesignIndex(b, c);
    for (b = 0; b < a; b++) this.model.cards[b]._ss(c), this.model.cards[b].fixPositionAction()
  }
};
_Tf._a._Un._8l._No = function (a, b, c, d, e, f, g, h, j) {
  this.model = a.createChipModel(d, e, g, f);
  this.view = a.createChipView(b, c, h, j);
  this._U3 = this._U3.bind(this.model)
};
_Tf._a._Un._8l._No.prototype = {
  model: null,
  view: null,
  _5q: function (a) {
    a._K5()
  },
  _U3: function (a) {
    a._X4();
    !a._Xb() && a._Ol() && this.use(a)
  },
  _X4: function () {
    this.view.update();
    this.model.chips.forEach(this._U3)
  },
  _K5: function () {
    this.view.draw(this.model._Yf(), this.model.getMoneyType(), this.model.getState(), this.model.getSelected());
    this.model.chips.forEach(this._5q)
  },
  __k: function () {
    return this.model.number
  },
  _bq: function (a) {
    this.model._Gh(_Tf._dc.ChipState._bk);
    this.view._lk(a)
  },
  _zb: function (a) {
    this.model._Gh(_Tf._dc.ChipState._or);
    this.model._ec();
    this.view._lk(a)
  },
  _70: function (a) {
    this.model._ec();
    this.view._C5(a)
  },
  _uf: function (a) {
    this.model._p3(a)
  },
  _xi: function () {
    return this.model._Yf()
  },
  _Xb: function () {
    return this.view.isAnimating()
  },
  _Ol: function () {
    return this.model._kl()
  },
  _Ne: function () {
    this.model._ec()
  },
  _cf: function (a) {
    a._Ne();
    this.model.add(a)
  },
  _q3: function (a, b) {
    this.view._lk(a, b)
  },
  fixTextPosition: function (a) {
    this.view.fixTextPosition(a)
  },
  setPotChip: function (a) {
    this.view.setPotChip(a || !1)
  },
  setSelectedAction: function (a) {
    this.model.setSelected(a)
  },
  _Kh: function (a) {
    this.view._Kg(a)
  }
};
_Tf._a._Un._8l._rs = function (a, b, c, d, e) {
  this.factory = a;
  this.model = a.createPotChipsModel(a, b);
  this.view = a.createPotChipsView(c, d);
  this.designPosition = d;
  this.moneyType = b;
  this.gameType = e;
  this.model._16(c, this.view.getPositionByIndex(0), d)
};
_Tf._a._Un._8l._rs.prototype = {
  model: null,
  view: null,
  moneyType: _Tf._dc.MoneyType._i4,
  _5q: function (a) {
    a._K5()
  },
  _U3: function (a) {
    a._X4()
  },
  _X4: function () {
    this.model.chips.forEach(this._U3);
    this.view.update(this.model.chips, this.model.countTakedChips);
    this.model.tmpChip._X4()
  },
  _K5: function () {
    this.view.draw();
    this.model.chips.forEach(this._5q);
    this.model.tmpChip._K5()
  },
  _i6: function (a) {
    this.model._ba(a)
  },
  _iq: function (a, b) {
    return this.model._D5(a, b)
  },
  _y3: function () {
    this.model._P8()
  },
  _5a: function () {
    return 0 < this.model.countTakedChips
  },
  _0f: function (a) {
    this.model.tmpChip._cf(a)
  },
  _m8: function () {
    this.model._16(this.view.getContext(), this.view.getPositionByIndex(0));
    this.model._P8()
  },
  _ak: function (a) {
    var b = this.model,
      c = a.length;
    b.chips.forEach(function (d, e) {
      e >= c ? b._D5(e, null) : d._xi() != a[e] && d._uf(a[e])
    });
    for (var d = b.countTakedChips; d < c; d++) {
      var e = this.factory.createChipController(this.factory, this.view.getContext(), this.view.getPositionByIndex(0), -1, a[d], this.moneyType, _Tf._dc.ChipState._or, this.designPosition),
        f = this.view.getPositionByIndex(0).clone(),
        g = this.designPosition.chip;
      f.x -= g.offsetXTextBox - 30;
      f.y -= g.offsetYTextBox - 15;
      e.fixTextPosition(f);
      e.setPotChip(!0);
      this.model._ba(e)
    }
  },
  _Y6: function (a) {
    return this.view.getPositionByIndex(a)
  }
};
_Tf._a._Un._8l._0q = function (a, b, c, d, e, f, g, h, j, k) {
  this.model = a.createPlayerModel(d, e, f, g, j, k);
  this.view = a.createPlayerView(a, b, c, j, h, _Tf._0l._N1._6i.format(k))
};
_Tf._a._Un._8l._0q.prototype = {
  model: _Tf._U6._Un._8l._0q,
  view: null,
  _tc: function (a, b) {
    this.view.locate(a, b)
  },
  _Wn: function (a) {
    this.model.setMoneyType(a)
  },
  _L1: function (a) {
    this.view.setMiddleContext(a)
  },
  _Xd: function (a) {
    this.model.setLevel(a)
  },
  _K5: function (a, b, c) {
    this.view.isAvatarChanged() && (this.view.completeAvatarChanging(), _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), b, "player avatar changed"]));
    this.view.draw(_Tf._41.getLocale()._Q5[this.model.state], a, c)
  },
  _Va: function (a, b, c) {
    this.view.drawMiddle(this.model.name,
      _Tf._41.getLocale()._Q5[this.model.state], a, this.model.level, b, c)
  },
  _G4: function (a, b) {
    var c = "",
      d = this.model.money,
      e = this.model.bet;
    0 === d ? c = 0 === e && !this._lf() ? _Tf._41.$("_P7._Q8") : _Tf._41.$("_P7._X0") : 0 > d && (c = _Tf._41.$("_P7._Q8"));
    this.view.drawAfter(this.model.name, {
      moneyString: c,
      type: this.model.moneyType,
      cash: d
    }, this.model.operation, this.model.state, a, this.model.level, b)
  },
  _X4: function () {
    this.view.update()
  },
  _Vl: function () {
    this.view._Ej()
  },
  _g6: function () {
    this.view._B1()
  },
  _Tq: function (a) {
    this.model.operate(a)
  },
  _xo: function () {
    this.model.clear()
  },
  _E7: function (a, b, c, d, e, f) {
    this.model.id != e ? _Tf._dc.PlayerFlag.has(a, _Tf._dc.PlayerFlag._tk) ? this.view._9j(e, !1, f) : this.view._9j(e, !0, f) : _Tf._dc.PlayerFlag.has(a, _Tf._dc.PlayerFlag._tk) && this.view._9j(e, !1, f);
    return this.model._z(a, b, c, d, e)
  },
  _C2: function (a) {
    this.view._9j(this._d1(), !0, a)
  },
  _j6: function (a) {
    this.model._Rp(a)
  },
  _Z5: function () {
    return this.model._I6()
  },
  _Nk: function () {
    return this.model.getBet()
  },
  _8f: function () {
    return this.model.name
  },
  _d1: function () {
    return this.model.id
  },
  _tg: function () {
    return this.model._qk()
  },
  _lf: function () {
    return this.model._1m()
  },
  isAllInAction: function () {
    return this.model.isAllIn()
  },
  _fo: function (a) {
    this.model._tj(a)
  },
  _Bm: function () {
    return this.model.isCancelAddingMoney
  },
  destroy: function () {
    this.view.destroy()
  }
};
_Tf._a._Un._8l._Na = function (a, b, c, d, e, f, g, h, j, k) {
  this.model = a.createChairModel(f, h);
  this.view = a.createChairView(b, c, d, g, _Tf._dc.MaxPlayerCards.count(h), _Tf._0l._N1._6i.format(k));
  this.factory = a;
  this.designPosition = _Mf._b1.getPositionByGameType(h);
  this.moneyType = j;
  this.realNumber = g;
  this.rotateNumber = f;
  this.tableId = k;
  d = _Tf._dc.GameType;
  switch (h) {
    case d._dk:
    case d._6e:
    case d._u9:
    case d._Ll:
    case d._zj:
      this.model._b(0, a.createCardHolderController(a, b, f, g, this.designPosition, l));
      break;
    case d._c:
      this.model._b(0,
        a.createCardHolderController(a, b, f, g, this.designPosition, 0));
      this.model._b(1, a.createCardHolderController(a, b, f, g, this.designPosition, 1));
      break;
    case d._1:
      for (var l = 0; l < _Tf._0l.maxSplit; l++) this.model._b(l, a.createCardHolderController(a, b, f, g, this.designPosition, l)), this.model.setRank(l, a.createRankController(a, b, c, g, k, l, !1))
  }
  this.model._y4(this.factory.createWinTableController(this.factory, b, h, g, this.designPosition));
  this.isPlayerOnChairChanged = this._Rk = !1;
  this._tr = this._tr.bind(this.model);
  this.__d = this.__d.bind(this.model);
  this._R7 = this._R7.bind(this)
};
_Tf._a._Un._8l._Na.prototype = {
  model: null,
  view: null,
  _Rk: !1,
  isPlayerOnChairChanged: !1,
  realNumber: 0,
  _R7: function (a, b) {
    var c = this.view.getCardPositionByIndex(b);
    a._Bl(c.point.clone(), c.angle)
  },
  _tc: function (a, b) {
    this.rotateNumber = a;
    this.realNumber = b;
    this.view.locate(b);
    var c;
    for (c = 0; c < this.model.holders.length; c++) this.model.holders[c] && this.model.holders[c]._tc(b);
    this.model.winTable._tc(b);
    this._8s() || (this.model.player._tc(b, this._q6()), this.model.cards.forEach(this._R7))
  },
  _a2: function (a, b) {
    var c = this.factory.createPlayerController(this.factory,
      this.view.getContext(), this.realNumber, a.flags, a.name, a.cash, a.bet, a.avatar, a.id, this.tableId);
    c._Wn(this.moneyType);
    c._tc(this.realNumber, b);
    c._L1(this.view.getMiddleContext());
    this.model._Wa(c, b);
    this.view._hq();
    this.isPlayerOnChairChanged = !0
  },
  _8s: function () {
    return this.model._Eq()
  },
  _q6: function () {
    return this.model.isClientChair
  },
  _bs: function () {
    return this.model.number
  },
  _5q: function (a) {
    a._K5()
  },
  _tr: function (a) {
    a._X4()
  },
  __d: function (a) {
    a._X4();
    !a._Xb() && a._Ol() && this._qe(a)
  },
  _K5: function (a) {
    this.view.draw(this.model._Eq(),
      this._Rk);
    this._Rk != a ? (this._Rk = a, _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "changed allow to sit state"])) : this.isPlayerOnChairChanged && _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "player changed"]);
    this.model._Eq() || this.model.player._K5(this.view.isActive(), this._bs(), this._q6())
  },
  _G4: function () {
    this.model._Eq() || this.model.player._G4(this.view.isActive(), this._q6());
    this.model.cards.forEach(this._5q);
    this.model.chip.forEach(this._5q);
    var a;
    for (a = 0; a < this.model.holders.length; a++) this.model.holders[a] && this.model.holders[a]._K5();
    this.model.winTable && this.model.winTable._K5(this.moneyType, this._q6())
  },
  _Va: function () {
    this.view.drawMiddle(this.model._Eq(), this._Rk, this.realNumber);
    this.model._Eq() || this.model.player._Va(this.view.isActive(), !1, this._q6())
  },
  _Em: function () {
    this.isPlayerOnChairChanged = !1;
    this.view.clearItselfOnMiddle(this.realNumber, this._q6())
  },
  _ao: function () {
    this.view._I9(this.realNumber)
  },
  _X4: function () {
    this.model.cards.forEach(this._tr);
    this.model.chip.forEach(this.__d);
    this.view.update();
    this.model._Eq() ? this._Cn() : this.model.player._X4();
    var a;
    for (a = 0; a < this.model.holders.length; a++) this.model.holders[a] && this.model.holders[a]._X4(this._q6());
    this.model.winTable && this.model.winTable._X4()
  },
  _4p: function () {
    this.model._1c();
    this._6c(!0);
    for (var a = 0; a < _Tf._0l.maxSplit; a++) this._Cn(a);
    this.isPlayerOnChairChanged = !0
  },
  _ss: function () {
    this.model._Eq() || (this.view._x1(), this.model.player._xo(), this._g6())
  },
  _hh: function () {
    this.model._Eq() || this.view._X0()
  },
  _Vl: function () {
    this.model._Eq() || this.model.player._Vl()
  },
  _g6: function () {
    this.model._Eq() || this.model.player._g6()
  },
  _j8: function (a, b) {
    var c = this.model.countTakedCards++,
      d = this.view.getCardPositionByIndex(c);
    a._Bl(d.point.clone(), d.angle);
    this.model._Kr(a, c, b);
    this._g6()
  },
  _Ug: function (a, b) {
    b = b || 0;
    if (this.model.countTakedCards !== a) {
      this.model._Mb();
      for (var c = 0; c < a; c++) {
        var d = this.factory.createCardController(this.factory, this.view.getContext(), this.view.getCardPositionByIndex(c).point, this.designPosition);
        d._U1(this.view.getCardPositionByIndex(c).angle);
        this.model._Kr(d, c, b)
      }
      this.model.countTakedCards = a
    }
  },
  _sh: function (a) {
    a = a || 0;
    if (this.model._Eq()) return [];
    var a = this.model.holders[a]._sh(this._q6()),
      b = this.model.cards;
    this.model._Mb();
    return b.concat(a)
  },
  _Cn: function (a) {
    a = a || 0;
    this.model._Mb();
    this.model.holders[a] && this.model.holders[a]._Cn()
  },
  _Ql: function (a) {
    a = a || 0;
    this.model._Mb();
    this.model.holders[a]._Ql(this._q6())
  },
  _j6: function (a, b, c, d) {
    "undefined" == typeof c && (c = 0);
    b ? (b = this.factory.createChipController(this.factory, this.view.getContext(),
      this.view.getPosition(), this.model.number, a, this.moneyType, null, this.designPosition, c), b._bq(this.view.getChipPosition(c))) : (b = this.factory.createChipController(this.factory, this.view.getContext(), this.view.getChipPosition(c), this.model.number, a, this.moneyType, null, this.designPosition, c), b.fixTextPosition(this.view.getPosition()));
    this._8s() || this.model.player._j6(a);
    b.setSelectedAction(d);
    return b
  },
  insuranceAction: function (a, b) {
    var c;
    b ? (c = this.factory.createChipController(this.factory, this.view.getContext(),
      this.view.getPosition(), this.model.number, a, this.moneyType, null, this.designPosition), c._bq(this.view.getInsurancePosition())) : c = this.factory.createChipController(this.factory, this.view.getContext(), this.view.getInsurancePosition(), this.model.number, a, this.moneyType, null, this.designPosition);
    return c
  },
  _Db: function (a) {
    a && a._70(this.view.getPosition())
  },
  takeBetToPlayerAction: function (a) {
    a._70(this.view.getPosition())
  },
  _0b: function (a, b, c) {
    return this.view._3p(a, b, c)
  },
  hasAvatarPointAction: function (a, b,
    c) {
    return this.view.hasAvatarPointAction(a, b, c)
  },
  _Kc: function (a, b) {
    this.model.isClientChair = b;
    return !this.model._Eq() ? (this.isPlayerOnChairChanged = this.model.player._E7(a.flags, a.name, a.cash, a.bet, a.id, a.avatar), a.id != this.model.player._d1() && (this._fo(!1), this._6c(!0)), this.model.player._tc(this.realNumber, b), this.isPlayerOnChairChanged) : !1
  },
  _F: function (a) {
    this.model.player || this._a2(this.factory.createPlayerController(this.factory, this.view.getContext(), this.realNumber, 0, "*", 0, null, 0), this.model.number === this.clientIndex);
    this._g6();
    this.model.player._Tq(a)
  },
  clearPlayerOperationAction: function () {
    this.model.player._xo()
  },
  _S: function (a) {
    this.model.winTable && this.model.winTable._40(a)
  },
  playerBustedAction: function (a) {
    this.model.holders[a].playerBustedAction()
  },
  _1k: function () {
    return 0 < this.model.countTakedCards
  },
  _mp: function (a) {
    return this.model.holders[a || 0]._4n()
  },
  _03: function (a, b, c, d) {
    var e = this.factory.createCardController(this.factory, this.view.getContext(), this.view.getPosition(), this.designPosition);
    e._ss();
    e._uf(b);
    c._1p();
    setTimeout(function () {
      d._96(a);
      c._j8(e)
    }, 200 * a)
  },
  _x5: function (a, b, c) {
    c = c || 0;
    if (b) if (this._1k()) {
      var b = a.length,
        c = this.model.holders[c],
        d = this.model;
      c._Cn();
      for (var e = 0; e < b; e++) this._03(e, a[e], c, d)
    } else this.model.holders[c]._Ug(a, this._q6(), c);
    else this.model._Mb(), this.model.holders[c]._Ug(a, this._q6(), c)
  },
  _Fg: function () {
    return this.model.player ? this.model.player._Z5() : 0
  },
  _4i: function () {
    return this.model.player ? this.model.player._Nk() : 0
  },
  _Sq: function () {
    return this.model.player ? this.model.player._d1() : 0
  },
  _b4: function () {
    return this.model.player ? this.model.player._8f() : ""
  },
  _sd: function () {
    return this._8s() ? !1 : this.model.player._tg()
  },
  _y8: function () {
    return this._8s() ? !1 : this.model.player._lf()
  },
  isPlayerAllInAction: function () {
    return this._8s() ? !1 : this.model.player.isAllInAction()
  },
  _r2: function () {
    this._Cn();
    !this._8s() && !this._sd() && this.model.player._xo();
    this._6c(!1)
  },
  _6c: function (a) {
    this.model.winTable && (a || !1 !== _h8._0l.NEED_CLEAR_WIN_TABLE) && this.model.winTable._Q7()
  },
  _fo: function (a) {
    this._8s() || this.model.player._fo(a)
  },
  _Bm: function () {
    return !this._8s() ? this.model.player._Bm() : !0
  },
  _L: function () {
    var a, b = this.model.holders.length,
      c = [];
    for (a = 0; a < b; a++) c[a] = this.view.getChipPosition(a);
    return c
  },
  setActiveCardHolder: function (a) {
    for (var b = 0, c = this.model.holders.length; b < c; b++) this.model.holders[b].setSelected(a == b ? !0 : !1)
  },
  deselectCardHolders: function () {
    for (var a = 0, b = this.model.holders.length; a < b; a++) this.model.holders[a].setSelected(!1)
  }
};
_Tf._a._Un._8l._l7 = function (a, b, c, d, e, f, g) {
  this.model = a.createTableModel(a, e);
  this.view = a.createTableView(b, c, d, g);
  this.factory = a;
  this.designPosition = g;
  this.model._Gi(f, b, g);
  this._xc = this._xc.bind(this)
};
_Tf._a._Un._8l._l7.prototype = {
  model: null,
  view: null,
  _tc: function (a) {
    var b, c, d = this.model.chips;
    for (b = 0; b < d.length; b++) {
      var e = d[b];
      if (e) for (c = 0; c < e.length; c++) {
        var f = e[c];
        f && !f._Xb() && f._q3(a[f.__k()][f.view.betIndex])
      }
    }
  },
  _5q: function (a) {
    a._K5()
  },
  _U3: function (a) {
    a._X4()
  },
  _9n: function (a) {
    a._Q7()
  },
  _X4: function () {
    var a, b;
    this.model.cards.forEach(this._U3);
    for (a = 0, b = this.model.chips.length; a < b; a++) this.model.chips[a] && this.model.chips[a].forEach(this._U3);
    for (a = 0, b = this.model.tmpChips.length; a < b; a++) this.model.tmpChips[a] && this.model.tmpChips[a].forEach(this._U3);
    this.model.potChips && this.model.potChips._X4();
    this.model.insuranceChips.forEach(this._U3)
  },
  _K5: function () {
    var a, b;
    this.model.cards.forEach(this._5q);
    for (a = 0, b = this.model.chips.length; a < b; a++) this.model.chips[a] && this.model.chips[a].forEach(this._5q);
    for (a = 0, b = this.model.tmpChips.length; a < b; a++) this.model.tmpChips[a] && this.model.tmpChips[a].forEach(this._5q);
    this.model.potChips && this.model.potChips._K5();
    this.model.insuranceChips.forEach(this._5q)
  },
  _Q7: function () {
    this.model.cards.forEach(this._9n)
  },
  _ao: function () {
    this.view._I9()
  },
  _0d: function (a, b, c, d) {
    this.view.getPositionCardInCenterByIndex(b, d) && (this.model._H(a, b), this.model.cards[b]._L1(this.view.getMiddleContext()), this.model.cards[b]._s2(_Tf._dc.CardState._4g), this.model.cards[b]._zb(this.view.getPositionCardInCenterByIndex(b, d).clone(), c))
  },
  turnCardInCenterAction: function (a, b, c, d) {
    c = this.factory.createCardController(this.factory, this.view.getContext(), this.view.getPositionCardInCenterByIndex(b, c).clone(), this.designPosition, !0);
    c._L1(this.view.getMiddleContext());
    c._s2(_Tf._dc.CardState._4g);
    c._uf(a);
    d ? c._rl() : c.model._Hk(!0);
    this.model._H(c, b)
  },
  setCloseCardIndex: function (a) {
    this.model.setCloseCardIndex(a)
  },
  takeCloseCard: function () {
    return this.model.takeCloseCard()
  },
  _Jn: function () {
    return this.model.countCardsInCenter++
  },
  _Ug: function (a) {
    var b = a.length;
    if (this.model.countCardsInCenter !== b) {
      this._Cn();
      for (var c = 0; c < b; c++) {
        var d = this.factory.createCardController(this.factory, this.view.getContext(), this.view.getPositionCardInCenterByIndex(c, b).clone(), this.designPosition, !0);
        d._L1(this.view.getMiddleContext());
        d._s2(_Tf._dc.CardState._4g);
        d._uf(a[c]);
        d.model._Hk(!0);
        this.model._H(d, c);
        a[c] == _Tf._dc._W2._G7 && this.model.setCloseCardIndex(c)
      }
      this.model.countCardsInCenter = b
    }
  },
  updateCardsPositions: function () {
    var a, b = this.model.cards.length;
    for (a = 0; a < b; a++) this.model.cards[a]._Q7();
    for (a = 0; a < b; a++) this.model.cards[a]._Kg(this.view.getPositionCardInCenterByIndex(a, b).clone()), this.model.cards[a]._K5()
  },
  _Cn: function () {
    this.model._bh()
  },
  _h6: function (a) {
    this.model.cards[a]._7c()
  },
  _Ec: function () {
    return this.model.countCardsInCenter
  },
  _i6: function (a, b) {
    this.model._ba(a, !0, b)
  },
  takeInsuranceChipAction: function (a) {
    this.model.takeInsuranceChip(a, !0)
  },
  _iq: function (a, b) {
    this.model._D5(a, b)
  },
  giveInsuranceChipAction: function (a) {
    this.model.giveInsuranceChip(a)
  },
  betToDealerAction: function (a, b) {
    var c = this.model.getBetChip(a, b);
    c && c._q3(this.designPosition.bank.posRake.clone(), function () {
      this._iq(a, b)
    }.bind(this))
  },
  insuranceToDealerAction: function (a) {
    var b = this.model.getInsuranceChip(a);
    b && b._q3(this.designPosition.bank.posRake.clone(), function () {
      this.giveInsuranceChipAction(a)
    }.bind(this))
  },
  dealerToBetAction: function (a, b, c, d, e, f) {
    var g = this,
      h = a.__k(),
      j = this.view.getTmpChip(this.designPosition.bank.posRake.clone(), h, b);
    this.model.takeTmpChip(j, !0, d);
    j._q3(a.view.positionCurrent.clone(), function () {
      255 == d ? g.giveInsuranceChipAction(h) : g._iq(h, d);
      j._uf(c);
      setTimeout(function () {
        f(j)
      }, g.designPosition.betToPlayerDelay)
    })
  },
  _Yl: function (a, b, c) {
    this.model._ba(a, !1, c)
  },
  _xc: function (a) {
    if (a = a[0]) a._zb(this.model.potChips._Y6(0)), this.model._1s(a)
  },
  getInsuranceChip: function (a) {
    return this.model.getInsuranceChip(a)
  },
  getBetChip: function (a, b) {
    return this.model.getBetChip(a, b)
  },
  _Ve: function () {
    this.model.chips.forEach(this._xc)
  },
  _C9: function (a, b) {
    var c = this.model.potChips._iq(a, b);
    c && c._uf(b);
    return c
  },
  _ak: function (a) {
    this.model.potChips._ak(a)
  },
  _K7: function () {
    this.model.potChips._m8()
  },
  _s2: function (a) {
    this.model._Gh(a)
  },
  isShowStateAction: function () {
    var a = _Tf._dc.TableState;
    return this.model.state === a._D8 || this.model.state === a._Is
  },
  _te: function () {
    return this.model._Z7()
  }
};
_Tf._a._Un._8l.TableMessage = function (a, b, c) {
  this.model = a.createTableMessageModel();
  this.view = a.createTableMessageView(b, _Tf._0l._N1._6i.format(c))
};
_Tf._a._Un._8l.TableMessage.prototype = {
  model: null,
  view: null,
  _K5: function () {
    this.model._34() && this.view.draw(this.model.messages)
  },
  _X4: function () {
    this.view.update(this.model)
  },
  _Q7: function () {
    this.model._Y0();
    this.view.clear()
  },
  _40: function (a) {
    this.model._Yg(a)
  }
};
_Tf._a._Un._8l._kr = function (a, b, c, d, e) {
  this.model = a.createWinTableModel();
  this.view = a.createWinTableView(b, c, d, e)
};
_Tf._a._Un._8l._kr.prototype = {
  model: null,
  view: null,
  _tc: function (a) {
    this.view.locate(a)
  },
  _K5: function (a, b) {
    this.model._34() && this.view.draw(this.model.messages, a, b)
  },
  _X4: function () {
    this.view.update(this.model)
  },
  _Q7: function () {
    this.model._Y0()
  },
  _40: function (a) {
    this.model._Yg(a)
  },
  _za: function (a) {
    this.model._K(a)
  }
};
_Tf._a._Un._8l.Rank = function (a, b, c, d, e, f, g) {
  this.model = a.createRankModel();
  this.view = a.createRankView(b, c, d, _Tf._0l._N1._6i.format(e), f, g)
};
_Tf._a._Un._8l.Rank.prototype = {
  model: null,
  view: null,
  _tc: function (a) {
    this.view.locate(a)
  },
  _K5: function (a) {
    this.view.draw(this.model.rank, a, this.model.isActive, this.model.isSplitActive)
  },
  _X4: function (a) {
    this.view.update(a)
  },
  setRankAction: function (a) {
    this.model.setRankAction(a)
  },
  _Q7: function (a) {
    this.model.clear(a);
    this.view.clear(a, this.model.isActive, this.model.isSplitActive)
  },
  _Va: function () {
    this.view.drawMiddle()
  },
  _Em: function () {
    this.view.clearMiddle()
  },
  _Kh: function (a) {
    this.view._Kg(a)
  },
  _ss: function (a) {
    this.model._ss(a)
  },
  setSplitActiveAction: function (a) {
    this.model.setSplitActiveAction(a)
  }
};
_Tf._a._Un.__0._gl = function (a, b, c, d, e) {
  this.model = a.createSceneModel(a, c, e.tableId, b);
  this.view = a.createSceneView(e.tableId, b);
  this.moneyType = (a = _Mf._q1._5p(e.tableId)) ? a._Dj() : _Tf._dc.MoneyType._i4;
  this.gameType = b;
  this._h0 = d;
  this.reservedSeat = 255;
  this.manager = e;
  this.designPosition = _Mf._b1.getPositionByGameType(b);
  this.changeClientStateInGame(!1);
  this._J1();
  this.bind();
  this._Ei = this._Ei.bind(this)
};
_Tf._a._Un.__0._gl.prototype = {
  model: null,
  view: null,
  moneyType: _Tf._dc.MoneyType._i4,
  gameType: _Tf._dc.GameType._dk,
  _h0: !1,
  inGame: !1,
  reservedSeat: 255,
  manager: null,
  _J1: function () {
    this.model.init(this.view._Di(), this.view.getMiddleCanvasContext(), this.view._vi(), this.view.getExtraCanvasContext(), this.gameType, this.moneyType, this.manager.tableId)
  },
  _B: function (a, b, c) {
    if (!b || !a) return null;
    this.model.addOtherSprite(a, b);
    return this.model.initOtherSprite(this.view._Di(), this.view.getMiddleCanvasContext(),
      this.view._vi(), this.gameType, a, c)
  },
  _tq: function () {
    var a = this.model.otherSprites;
    if (0 !== a.length) for (var b in a) a.hasOwnProperty(b) && a[b] && "function" === typeof a[b]._K5 && a[b]._K5()
  },
  _Lr: function () {
    var a = this.model.otherSprites;
    if (0 !== a.length) for (var b in a) a.hasOwnProperty(b) && a[b] && "function" === typeof a[b]._X4 && a[b]._X4()
  },
  _Ei: function (a) {
    a && (this.clear(), this.draw());
    this.forceRedraw();
    this.update()
  },
  clear: function () {
    this.view.clear()
  },
  _d6: function () {
    this.view.resize();
    this._k7();
    this.redrawMiddle();
    this._Xn()
  },
  forceRedraw: function () {
    _Tf._Hc._Og.isSamsungGalaxy() && (this.forceRedrawCanvas(this.view._Di()), this.forceRedrawCanvas(this.view.getMiddleCanvasContext()), this.forceRedrawCanvas(this.view.getExtraCanvasContext()), this.forceRedrawCanvas(this.view._vi()))
  },
  forceRedrawCanvas: function (a) {
    if (!a || a.canvas) a.canvas.style.display = "none", a.canvas.style.display = "block"
  },
  _k7: function () {
    this.view.getStaticCanvas().clear();
    this.model.table._Q7();
    this.model.table._ao();
    this.model.tableMessage._K5();
    this.redrawChairs(!1)
  },
  redrawMiddle: function (a) {
    if (!_h8._0l.NEED_REDRAW_ALL_CHAIRS && "undefined" != typeof a && a in this.model.chairs) {
      var b = this.model.chairs,
        c = this.designPosition.chairs[b[a].realNumber].needRedrawNextChair,
        d = this.designPosition.chairs[b[a].realNumber].needRedrawPreviousChair,
        e = b.length,
        f = a + 1 === e ? 0 : a + 1,
        e = -1 === a - 1 ? e - 1 : a - 1;
      b[a]._Em();
      c && b[f]._Em();
      d && (b[e]._Em(), b[e]._Va());
      b[a]._Va();
      c && b[f]._Va()
    } else this.model.chairs.forEach(function (a) {
      a._Em()
    }), this.model.rank && this.model.rank._Em(),
      this.model.bank._Em(), this.model.bank._Va(), this.model.rank && this.model.rank._Va(), this.redrawChairs(!0)
  },
  redrawChairs: function (a) {
    if (!1 !== this.designPosition.isRenderingSequenceClockwise) this.model.chairs.forEach(function (b) {
      a ? b._Va() : b._ao()
    });
    else {
      var b = this.model.countChairs,
        c = Math.round(b >> 1),
        d = this.designPosition.rotateTableSeatsForClientToIndex;
      d && b in d && (c = d[b]);
      for (b = 0; b < c; b++) this.redrawChairByIndex(b, a);
      for (b = this.model.chairs.length - 1; b >= c; b--) this.redrawChairByIndex(b, a)
    }
  },
  redrawChairByIndex: function (a,
    b) {
    b ? this.model.rotatedChairs[a]._Va() : this.model.rotatedChairs[a]._ao()
  },
  _Rk: function () {
    return 255 === this.model.clientIndex && 255 === this.reservedSeat && !this._h0 && this._Y5()
  },
  _Y5: function () {
    return !0
  },
  draw: function () {
    var a = this._Rk();
    this.model.chairs.forEach(function (b) {
      b._K5(a)
    });
    this.model.table._K5();
    this.model.bank._K5();
    this.model.rank && this.model.rank._K5();
    this.model.timer._K5();
    this.model.dealerButton._K5();
    this.model.tableMessage._K5();
    this.model.chairs.forEach(function (a) {
      a._G4()
    });
    this._tq()
  },
  update: function () {
    this.model.chairs.forEach(function (a) {
      a._X4()
    });
    this.model.table._X4();
    this.model.tableMessage._X4();
    this.model.bank._X4();
    this.model.rank && this.model.rank._X4();
    this.model.timer._X4();
    this.model.dealerButton._X4();
    this._Lr()
  },
  refresh: function () {
    this.view.resize();
    this._k7();
    this.redrawMiddle()
  },
  isClientSitAtTable: function () {
    return this.isClientSitting() && this.inGame
  },
  isClientSitting: function () {
    return 0 <= this.model.clientIndex && 255 > this.model.clientIndex
  },
  changeClientStateInGame: function (a) {
    this.inGame = a;
    _Mf._ks.emit(_Ag._sl, [this.manager.tableId, a])
  },
  _S6: function () {
    this.changeClientStateInGame(!0);
    this._Y5() ? (255 != this.reservedSeat && this.model.setClientIndex(this.reservedSeat), this._h0 || this.view._R0(), this.reservedSeat = 255) : (this.reservedSeat = 255, this.model.setClientIndex(255))
  },
  _C4: function (a) {
    return this.model._sg(a)
  },
  _l3: function () {
    return this.model.round
  },
  _Xn: function () {
    this.changeClientStateInGame(!1);
    this._Sa();
    this.reservedSeat = 255;
    this.view._kp();
    this.view._i9(this.manager.tableId);
    this.view._p8();
    this.model.setClientIndex(255)
  },
  _oh: function () {
    this.view._E4();
    this.model._qk = !0
  },
  _X3: function () {
    this.view._Qo()
  },
  _Sa: function () {
    this.view._Qo();
    this.model._qk = !1
  },
  _0k: function () {
    this.view._7f()
  },
  _I7: function () {
    this.view._p8();
    this.view._fi(this.manager.tableId)
  },
  allowJoinWaitList: function () {
    this.inGame || this.view.showJoinWaitListButton()
  },
  allowLeaveWaitList: function () {
    this.inGame || this.view.showLeaveWaitListButton()
  },
  disAllowWaitList: function () {
    this.view.hideWaitListButtons()
  },
  _yi: function () {
    if (255 !== this.model.clientIndex) {
      var a = _Mf._L2,
        b = _Mf._q1._5p(this.manager.tableId),
        c = b._K9(this.model.chairs[this.model.clientIndex]._Fg());
      c && !(a._Z5(b._Dj()) < b._M9()) && this.view._7q(b._m5(), b._M9(), c)
    }
  },
  _w4: function () {
    return !this.isClientSitAtTable() || this.model.clientIndex >= this.model.chairs.length ? null : this.model.chairs[this.model.clientIndex]
  },
  _Um: function () {
    return !this.isClientSitAtTable() || this.model.clientIndex >= this.model.chairs.length ? null : this.model.clientIndex
  },
  bind: function () {
    this._S6 = this._S6.bind(this);
    _Mf._ks.addListener(_Ag._c0, this._Oh, this);
    _Mf._ks.addListener(_Ag._Nj, this._h9, this);
    _Mf._ks.addListener(_Ag._uq, this._Wq, this);
    _Mf._ks.addListener(_Ag._u7, this.onNeedClearCanvas, this);
    var a = _Tf._0l._N1,
      b = this,
      c = _Tf._0l._N1._6i.format(this.manager.tableId);
    $(c + a._Rd).bind(EventType._qc, function (a) {
      a.positionTop = parseInt($(this).parent().offset().top);
      a.positionLeft = parseInt($(this).parent().offset().left);
      _Tf._hr._Yp(b._9g, a, b)
    });
    $(c + a._mr).live(EventType._qc, function () {
      _Tf._hr._Yp(b._5k, null, b)
    });
    $(c + a._al).live(EventType._qc, function () {
      _Tf._hr._Yp(b._Co, null, b)
    });
    $(c + a._Vm).live(EventType._qc, function () {
      _Tf._hr._Yp(b._Ii, null, b)
    });
    $(c + a._dd).live(EventType._qc, function () {
      _Tf._hr._Yp(b._n7, null, b)
    })
  },
  _h9: function (a) {
    "number" === typeof a && this.manager.tableId != a || this._Oh()
  },
  _Oh: function () {
    this.view.resize();
    this._k7();
    this.redrawMiddle();
    this.forceRedraw()
  },
  _Wq: function (a, b, c) {
    a == this.view.getMiddleCanvasContext() && (_Tf._Hc._Og.isAndroidTablet() ? this._Oh() : (this.redrawMiddle(b, c), this.forceRedraw()))
  },
  onNeedClearCanvas: function (a) {
    this.view.clearCanvasByContext(a)
  },
  _9g: function (a) {
    var b = this.manager,
      c = this,
      d = _Tf._N1.$("#" + _Tf._0l._N1._ff._2l)[0],
      a = a.originalEvent.touches ? a.originalEvent.touches[0] : a,
      e = this.view.getScales(),
      f = this.view.getMargins(),
      g = (a.pageX - f.left) / e.scaleX - d.offsetLeft,
      h = (a.pageY - f.top) / e.scaleY,
      j = c._Rk(),
      k = !1;
    this.model.chairs.forEach(function (a, d) {
      if (a._0b(g, h)) j && 255 === c.reservedSeat && a._8s() ? (c.reservedSeat = d, b._Kn(d), k = !0) : a._8s() || (b._T1(d, a._Sq()), k = !0)
    });
    k || _Mf._ks.emitAsync(_Ag._W9, [this.manager.tableId, g, h])
  },
  _5k: function () {
    this._X3();
    this.manager._Zq()
  },
  _Co: function () {
    this._yi()
  },
  _Ii: function () {
    var a = _Tf._N1,
      b = _Tf._0l._N1;
    _Mf._L2._oa() ? _Mf._ks.emitAsync(_Ag._s4, arguments) : (a.disableLinkButton(b._Vm), this.manager._vr())
  },
  _n7: function () {
    var a = _Tf._N1,
      b = _Tf._0l._N1;
    _Mf._L2._oa() ? _Mf._ks.emitAsync(_Ag._s4, arguments) : (a.disableLinkButton(b._dd), this.manager._W3())
  },
  unbind: function () {
    var a = _Tf._0l._N1,
      b = this.manager.tableId,
      c = _Tf._0l._N1._6i.format(b);
    $(c + a._mr).die();
    $(c + a._al).die();
    $(c + a._Rd).die();
    $(c + a._dd).die();
    $(c + a._Vm).die();
    _Mf._ks.removeListeners(_Ag._c0, function (a) {
      return !a ? !1 : a.onRemoveListeners ? a.onRemoveListeners(b) : a.manager.tableId === b
    });
    _Mf._ks.removeListeners(_Ag._Nj, function (a) {
      return !a ? !1 : a.manager.tableId === b
    });
    _Mf._ks.removeListeners(_Ag._uq, function (a) {
      return !a ? !1 : a.manager.tableId === b
    });
    _Mf._ks.removeListeners(_Ag._u7, function (a) {
      return !a ? !1 : a.manager.tableId === b
    })
  }
};
_Tf._a._Un.__0._Ic = function (a, b) {
  this.view = a.createCommandsView(b);
  this.parentId = _Tf._0l._N1._6i.format(b);
  var c = _Mf._q1._5p(b),
    d = _Mf._q1._Aa(b);
  this.model = a.createCommandsModel(a, d, c._Mi(), c._Dj(), this.view, b)
};
_Tf._a._Un.__0._Ic.prototype = {
  model: null,
  view: null,
  _C: function () {
    return !0 === this.model.allButtonsHidden
  },
  _Fb: function (a, b, c, d) {
    this.model._Fb(a, b, c, d);
    this.view._Ja(this.model.buttons);
    _Tf._N1.$(this.parentId + _Tf._0l._N1._6m).trigger("create");
    0 < b.length && _Tf._N1.$(this.parentId + _Tf._0l._N1._ii).hide()
  },
  showBetSelector: function (a) {
    this.model.setSupportBetFunds(a);
    this.view.drawBetSelector(this.model.selectBetButtons, this.model.moneyType)
  },
  getBetButtonAmount: function () {
    return 0 == this.model.selectBetButtons.length ? 0 : this.model.selectBetButtons[this.view.currentBetAmountButtonId].funds
  },
  hideBetSelector: function () {
    this.view.clearBetSelector()
  },
  _48: function (a) {
    this.model._48(a)
  },
  _a7: function () {
    this.view._a7(this.model.permanentActions);
    _Tf._N1.$(_Tf._0l._N1._Zb).trigger("create")
  },
  _8p: function (a) {
    this.model._8p(a);
    this.view._Wh(this.model.actions);
    _Tf._N1.$(this.parentId + _Tf._0l._N1._ii).trigger("create")
  },
  _Gd: function () {
    this.model._mh();
    _Tf._N1.$(this.parentId + _Tf._0l._N1._ii).show()
  },
  _Q7: function () {
    this.model._lh()
  },
  _Hg: function (a) {
    this.model._Hg(a)
  },
  _oc: function (a) {
    this.model.buttonsHash = a
  },
  _l4: function () {
    return this.model.buttonsHash
  },
  _gh: function (a, b, c) {
    this.model._gh(a, b);
    c && c._p3(a, b)
  },
  _ra: function (a) {
    return this.model._Gn(a)
  }
};
_Tf._a._Un.__0.GameAreas = function (a, b) {
  this.view = a.createGameAreasView(b);
  this.parentId = _Tf._0l._N1._6i.format(b);
  this.model = a.createGameAreasModel(a)
};
_Tf._a._Un.__0.GameAreas.prototype = {
  model: null,
  view: null,
  setAreas: function (a, b, c, d, e) {
    this.model.setAreas(a, b, c, d, e);
    this.view.drawAreas(this.model.areas)
  },
  _Q7: function () {
    this.model.clearAllAreas()
  }
};
_Tf._a._Un._8l.BaccaratTimer = function (a, b, c, d, e) {
  _Tf._a._Un._8l.BaccaratTimer.superclass.apply(this, arguments)
};
extend(_Tf._a._Un._8l.BaccaratTimer, _Tf._a._Un._8l._D);
_Tf._a._Un._8l.BaccaratTimer.prototype._bc = function (a, b, c, d) {
  a != this.model.number && this._P1();
  this.model._ej(a);
  this.view._Kg(a, d);
  this.view.show(b, c)
};
_Tf._a._Un._8l.BaccaratCardHolder = function (a, b, c, d) {
  this.designPosition = c;
  this.model = a.createCardHolderModel();
  this.view = a.createCardHolderView(b, c, d);
  this.factory = a;
  this._5q = this._5q.bind(this.view)
};
_Tf._a._Un._8l.BaccaratCardHolder.prototype = {
  model: null,
  view: null,
  _U3: function (a) {
    a._X4()
  },
  _5q: function (a) {
    a._K5(this.hasShadow())
  },
  _X4: function () {
    this.view.update(this.model.cards);
    this.model.cards.forEach(this._U3)
  },
  _K5: function () {
    this.view.draw();
    for (var a = 0, b = this.model.cards.length; a < b; a++) this.model.cards[a].setSelected(this.model.isSelected && !this.view.hasShadow()), this._5q(this.model.cards[a])
  },
  _j8: function (a) {
    this.view.setShadow(!1);
    this.model._Kr(a)
  },
  _Ug: function (a) {
    var b = a.length,
      c, d = this.view.getPosition();
    this._Cn();
    for (c = 0; c < b; c++) {
      var e = this.factory.createCardController(this.factory, this.view.getContext(), d[c], this.designPosition, !0);
      e._uf(_Tf._dc._W2._C8(a[c]));
      e._rl();
      e._Kg(d[c]);
      this.model._Kr(e)
    }
  },
  _ji: function () {
    this.view.decCurrentCount();
    return this.model._p6()
  },
  _Cn: function () {
    this.model._Mb();
    this.view.clearCurrentCount();
    this.view.setShadow(!1)
  },
  _Ql: function () {
    this.view.hasShadow() || this._Cn()
  },
  _sh: function () {
    this.view.setShadow(!0);
    return []
  },
  setSelected: function (a) {
    this.model.setSelected(a)
  },
  hasCards: function () {
    return 0 < this.model.countTakedCards
  },
  getCountCards: function () {
    return this.model.countTakedCards
  }
};
_Tf._a._Un._8l.BaccaratRank = function (a, b, c, d, e) {
  this.model = a.createRankModel();
  this.view = a.createRankView(b, c, d, e)
};
_Tf._a._Un._8l.BaccaratRank.prototype = {
  model: null,
  view: null,
  _K5: function (a) {
    this.view.draw(this.model.rank, a)
  },
  _X4: function (a) {
    this.view.update(a)
  },
  setRankAction: function (a) {
    this.model.setRankAction(a)
  },
  _Q7: function (a) {
    this.model.clear(a)
  },
  _Va: function () {
    this.view.drawMiddle()
  },
  _Em: function () {
    this.view.clearMiddle()
  }
};
_Tf._a._Un._8l.BaccaratTable = function (a, b, c, d, e, f, g) {
  this.model = a.createTableModel(a, e);
  this.view = a.createTableView(b, c, d, g, a);
  this.designPosition = g;
  this.dealerCardHolder = a.createCardHolderController(a, b, this.designPosition, this.designPosition.dealerCards);
  this.playerCardHolder = a.createCardHolderController(a, b, this.designPosition, this.designPosition.playerCards);
  this.dealerRank = a.createRankController(a, b, c, this.designPosition, this.designPosition.dealerRank);
  this.playerRank = a.createRankController(a,
    b, c, this.designPosition, this.designPosition.playerRank)
};
_Tf._a._Un._8l.BaccaratTable.prototype = {
  model: null,
  view: null,
  _tc: function (a) {
    var b, c, d = this.model.chips;
    for (b = 0; b < d.length; b++) {
      var e = d[b];
      if (e) for (c = 0; c < e.length; c++) {
        var f = e[c];
        f && !f._Xb() && f._q3(a[f.__k()][f.view.betIndex])
      }
    }
  },
  betToDealerWinAction: function (a, b) {
    var c = this,
      d = this.model.getBetChip(a, b),
      e = d._xi(),
      f = this.view.getTmpChip(d.view.positionCurrent.clone(), a, e);
    this.model.takeTmpChip(f, !0, b);
    this._iq(a, b);
    f._q3(this.designPosition.bank.posWinChip.clone(), function () {
      c.onChipToDealer(f, a,
        b)
    })
  },
  winChipsToDealerAction: function () {
    var a = this,
      b = this.getWinChip();
    b && b._q3(this.designPosition.bank.posRake.clone(), function () {
      a.giveWinChipAction()
    })
  },
  betToPlayerWinChipAction: function (a, b, c, d, e) {
    var f = this,
      g = a.__k(),
      h = this.view.getTmpChip(this.designPosition.bank.posRake.clone(), g, b);
    this.model.takeTmpChip(h, !0, d);
    h._q3(a.view.positionCurrent.clone(), function () {
      255 == d ? f.giveInsuranceChipAction(g) : f._iq(g, d);
      h._uf(c);
      setTimeout(function () {
        e(h)
      }, f.designPosition.betToPlayerDelay)
    })
  },
  moveToDealerCardHolder: function (a) {
    a._s2(_Tf._dc.CardState._4g);
    this.dealerCardHolder._j8(a)
  },
  moveToPlayerCardHolder: function (a) {
    a._s2(_Tf._dc.CardState._4g);
    this.playerCardHolder._j8(a)
  },
  setPlayerCardsAction: function (a) {
    this.playerCardHolder._Ug(a)
  },
  setDealerCardsAction: function (a) {
    this.dealerCardHolder._Ug(a)
  },
  hasDealerCards: function () {
    return this.dealerCardHolder.hasCards()
  },
  hasPlayerCards: function () {
    return this.playerCardHolder.hasCards()
  },
  getDealerCountCards: function () {
    return this.dealerCardHolder.getCountCards()
  },
  getPlayerCountCards: function () {
    return this.playerCardHolder.getCountCards()
  },
  setDealerRankAction: function (a) {
    this.dealerRank.setRankAction(a)
  },
  clearDealerRankAction: function () {
    this.dealerRank._Q7()
  },
  setPlayerRankAction: function (a) {
    this.playerRank.setRankAction(a)
  },
  clearPlayerRankAction: function () {
    this.playerRank._Q7()
  },
  _5q: function (a) {
    a._K5()
  },
  _U3: function (a) {
    a._X4()
  },
  _9n: function (a) {
    a._Q7()
  },
  _X4: function () {
    var a, b;
    this.playerCardHolder._X4();
    this.dealerCardHolder._X4();
    this.playerRank._X4();
    this.dealerRank._X4();
    this.model.winChip && this.model.winChip._X4();
    for (a = 0, b = this.model.chips.length; a < b; a++) this.model.chips[a] && this.model.chips[a].forEach(this._U3);
    for (a = 0, b = this.model.tmpChips.length; a < b; a++) this.model.tmpChips[a] && this.model.tmpChips[a].forEach(this._U3)
  },
  _K5: function () {
    var a, b;
    this.playerCardHolder._K5();
    this.dealerCardHolder._K5();
    this.playerRank._K5();
    this.dealerRank._K5();
    this.model.winChip && this.model.winChip._K5();
    for (a = 0, b = this.model.chips.length; a < b; a++) this.model.chips[a] && this.model.chips[a].forEach(this._5q);
    for (a = 0, b = this.model.tmpChips.length; a < b; a++) this.model.tmpChips[a] && this.model.tmpChips[a].forEach(this._5q)
  },
  _Q7: function () { },
  _ao: function () {
    this.view._I9()
  },
  _i6: function (a, b) {
    this.model._ba(a, !0, b)
  },
  takeWinChipAction: function (a) {
    this.model.takeWinChip(a, !0)
  },
  _iq: function (a, b) {
    this.model._D5(a, b)
  },
  giveWinChipAction: function () {
    this.model.giveWinChip()
  },
  betToDealerAction: function (a, b) {
    var c = this.model.getBetChip(a, b);
    c && c._q3(this.designPosition.bank.posRake.clone(), function () {
      this._iq(a, b)
    }.bind(this))
  },
  dealerToBetAction: function (a, b, c, d, e, f) {
    var g = this,
      h = a.__k(),
      j = this.getIndexFlyingChip(d),
      k = this.view.getTmpChip(a.view.positionCurrent.clone(), h, a._xi()),
      b = this.view.getTmpChip(this.designPosition.bank.posRake.clone(), h, b);
    this.model.takeTmpChip(b, !0, j);
    this._iq(h, d);
    this.model.takeTmpChip(k, !0, d);
    b._q3(a.view.positionCurrent.clone(), function () {
      g.model.giveTmpChip(h, j);
      k._uf(c);
      setTimeout(function () {
        var a = g.designPosition.chairs[e];
        k._q3(a.posWinChip, function () {
          var b = g.view.getTmpChip(a.posWinChip, h, c);
          g.model.giveTmpChip(h, d);
          f(b)
        })
      }, 500)
    })
  },
  _Yl: function (a,
    b, c) {
    this.model._ba(a, !1, c)
  },
  getBetChip: function (a, b) {
    return this.model.getBetChip(a, b)
  },
  getWinChip: function () {
    return this.model.getWinChip()
  },
  _s2: function (a) {
    this.model._Gh(a)
  },
  isShowStateAction: function () {
    var a = _Tf._dc.TableState;
    return this.model.state === a._D8 || this.model.state === a._Is
  },
  _te: function () {
    return this.model._Z7()
  },
  onChipToDealer: function (a, b, c) {
    a = a._xi();
    a = this.view.getTmpChip(this.designPosition.bank.posWinChip.clone(), b, a);
    this.model.giveTmpChip(b, c);
    this.takeWinChipAction(a)
  },
  getIndexFlyingChip: function (a) {
    return a + 10
  }
};
_Tf._a._Un._8l.BaccaratPlayer = function (a, b, c, d, e, f, g, h, j, k) {
  _Tf._a._Un._8l.BaccaratPlayer.superclass.apply(this, arguments)
};
extend(_Tf._a._Un._8l.BaccaratPlayer, _Tf._a._Un._8l._0q);
_Tf._a._Un._8l.BaccaratChair = function (a, b, c, d, e, f, g, h, j, k) {
  this.model = a.createChairModel(f, h);
  this.view = a.createChairView(b, c, d, g, _Tf._dc.MaxPlayerCards.count(h), _Tf._0l._N1._6i.format(k));
  this.factory = a;
  this.designPosition = _Mf._b1.getPositionByGameType(h);
  this.moneyType = j;
  this.realNumber = g;
  this.rotateNumber = f;
  this.tableId = k;
  this.model._b(0, a.createCardHolderController(a, b, f, g, this.designPosition, i));
  this.model._y4(this.factory.createWinTableController(this.factory, b, h, g, this.designPosition));
  this.isPlayerOnChairChanged = this._Rk = !1
};
extend(_Tf._a._Un._8l.BaccaratChair, _Tf._a._Un._8l._Na);
_Tf._a._Un._8l.BaccaratChair.prototype._tc = function (a, b) {
  this.rotateNumber = a;
  this.realNumber = b;
  this.view.locate(b);
  this.model.winTable._tc(b);
  this._8s() || (this.model.player._tc(b, this._q6()), this.model.cards.forEach(this._R7))
};
_Tf._a._Un._8l.BaccaratChair.prototype.takeBetToWinAction = function (a) {
  this.model.takeWinChip(a)
};
_Tf._a._Un._8l.BaccaratChair.prototype.winChipsToPlayerAction = function () {
  var a = this,
    b = this.model.getWinChip();
  b && b._q3(this.view.getPosition(), function () {
    a._S(b._xi());
    a.giveWinChipAction()
  })
};
_Tf._a._Un._8l.BaccaratChair.prototype.giveWinChipAction = function () {
  this.model.giveWinChip()
};
_Tf._a._Un._8l.BaccaratChair.prototype._G4 = function () {
  _Tf._a._Un._8l.BaccaratChair.superclass.prototype._G4.apply(this, arguments);
  this.model.winChip && this.model.winChip._K5()
};
_Tf._a._Un._8l.BaccaratChair.prototype._X4 = function () {
  _Tf._a._Un._8l.BaccaratChair.superclass.prototype._X4.apply(this, arguments);
  this.model.winChip && this.model.winChip._X4()
};
_Tf._a._Un._8l.BaccaratChair.prototype._Kc = function (a, b, c) {
  this.model.isClientChair = b;
  return !this.model._Eq() ? (this.isPlayerOnChairChanged = this.model.player._E7(a.flags, a.name, c ? this.model.player._Z5() : a.cash, a.bet, a.id, a.avatar), a.id != this.model.player._d1() && (this._fo(!1), this._6c(!0)), this.model.player._tc(this.realNumber, b), this.isPlayerOnChairChanged) : !1
};
_Tf._a._Un.__0.BaccaratScene = function () {
  _Tf._a._Un.__0.BaccaratScene.superclass.apply(this, arguments)
};
extend(_Tf._a._Un.__0.BaccaratScene, _Tf._a._Un.__0._gl);
_Tf._a._Un.__0.BaccaratScene.prototype.draw = function () {
  var a = this._Rk();
  this.model.chairs.forEach(function (b) {
    b._K5(a)
  });
  this.model.table._K5();
  this.model.timer._K5();
  this.model.cardShoe._K5();
  this.model.bank._K5();
  this.model.chairs.forEach(function (a) {
    a._G4()
  });
  this._tq()
};
_Tf._a._Un.__0.BaccaratScene.prototype.update = function () {
  this.model.chairs.forEach(function (a) {
    a._X4()
  });
  this.model.table._X4();
  this.model.timer._X4();
  this.model.bank._X4();
  this.model.cardShoe._X4();
  this._Lr()
};
_Tf._a._Un.__0.BaccaratScene.prototype.redrawChairByIndex = function (a, b) {
  b ? this.model.chairs[a]._Va() : this.model.chairs[a]._ao()
};
_Tf._a._Un.__0.BaccaratScene.prototype.redrawMiddle = function () {
  _Tf._a._Un.__0.BaccaratScene.superclass.prototype.redrawMiddle.apply(this, arguments);
  this.model.rank && (this.model.rank._Em(), this.model.rank._Va());
  this.model.cardShoe._Em();
  this.model.cardShoe._Va()
};
_Tf._a._Un.__0.BaccaratScene.prototype._yi = function () {
  if (255 !== this.model.clientIndex) {
    var a = _Mf._L2,
      b = _Mf._q1._5p(this.manager.tableId),
      c = b._K9(this.model.chairs[this.model.clientIndex]._Fg()),
      d = b.model.info.minBet;
    c && !(a._Z5(b._Dj()) < d) && this.view._7q(b._m5(), d, c)
  }
};
_Tf._a._Un.__0.BaccaratScene.prototype._9g = function (a) {
  var b = this.manager,
    c = this;
  _Tf._Ek._29.getPagePositions();
  var d = a.originalEvent.touches ? a.originalEvent.touches[0] : a,
    e = this.view.getScales();
  this.view.getMargins();
  var f = (parseInt(d.pageX) - a.positionLeft) / e.scaleX,
    g = (parseInt(d.pageY) - a.positionTop) / e.scaleY,
    h = c._Rk(),
    j = !1;
  this.model.chairs.forEach(function (a, d) {
    var e = h && 255 === c.reservedSeat && a._8s(),
      m = a._8s();
    e && a._0b(f, g, c.model.clientIndex == d) ? (c.reservedSeat = d, b._Kn(d), j = !0) : !m && a.hasAvatarPointAction(f,
      g, c.model.clientIndex == d) && (b._T1(d, a._Sq()), j = !0)
  });
  j || _Mf._ks.emitAsync(_Ag._W9, [this.manager.tableId, f, g])
};
_Tf._a._Un._8l.BlackJackShoe = function (a, b, c, d, e) {
  this.model = a.createShoeModel(e);
  this.view = a.createShoeView(b, c, d)
};
_Tf._a._Un._8l.BlackJackShoe.prototype = {
  model: null,
  view: null,
  setCardsInShoeAction: function (a) {
    this.model.setCardsInShoe(a)
  },
  setNumberOfDecksAction: function (a) {
    this.model.setNumberOfDecks(a)
  },
  _K5: function () {
    this.view.draw(this.model.getCardsInShoe(), this.model.getNumberOfDecks())
  },
  _X4: function () {
    this.view.update()
  },
  _Va: function () {
    this.view.drawMiddle()
  },
  _Em: function () {
    this.view.clearMiddle()
  }
};
_Tf._a._Un._8l.BlackJackCardHolder = function () {
  _Tf._a._Un._8l.BlackJackCardHolder.superclass.apply(this, arguments)
};
extend(_Tf._a._Un._8l.BlackJackCardHolder, _Tf._a._Un._8l._a6);
_Tf._a._Un._8l.BlackJackCardHolder.prototype.setDesignIndexAction = function (a, b, c, d) {
  a = this.model.cards.length;
  this.model.setActive(c);
  this.model.setSelected(d);
  this.view.setDesignIndex(b, c);
  for (b = 0; b < a; b++) this.model.cards[b]._ss(c), this.model.cards[b].setSelected(c), this.model.cards[b].fixPositionAction()
};
_Tf._a._Un._8l.BlackJackCardHolder.prototype._j8 = function (a) {
  a._ss(this.model.isActive);
  a.setSelected(this.model.isSelected);
  this.view.setShadow(this.model.isBusted);
  this.model._Kr(a)
};
_Tf._a._Un._8l.BlackJackCardHolder.prototype._Cn = function () {
  this.model._Mb();
  this.view.clearCurrentCount();
  this.view.setShadow(this.model.isBusted)
};
_Tf._a._Un._8l.BlackJackCardHolder.prototype._Ug = function (a, b) {
  var c = a.length,
    d;
  if (c === this.model.countTakedCards && c === this.model.cards.length) for (d = 0; d < c; d++) this.model.cards[d]._ss(this.model.isActive), this.model.cards[d].setSelected(this.model.isSelected), this.model.cards[d]._uf(a[d]), this.model.cards[d]._rl();
  else {
    this._Cn();
    var e = this.view.getCardsPositions(c, b, this.model.isActive);
    for (d = 0; d < c; d++) {
      var f = this.factory.createCardController(this.factory, this.view.getContext(), this.view.getPosition(),
        this.designPosition);
      f._ss(this.model.isActive);
      f.setSelected(this.model.isSelected);
      f._uf(a[d]);
      f._rl();
      f._Kg(e[d]);
      this.model._Kr(f)
    }
    this.model.countTakedCards = c
  }
};
_Tf._a._Un._8l.BlackJackChair = function (a, b, c, d, e, f, g, h, j, k) {
  _Tf._a._Un._8l.BlackJackChair.superclass.apply(this, arguments);
  for (var l = 0; l < _Tf._0l.maxSplit; l++) this.model._b(l, a.createCardHolderController(a, b, f, g, this.designPosition, l)), this.model.setRank(l, a.createRankController(a, b, c, g, k, l, !1))
};
extend(_Tf._a._Un._8l.BlackJackChair, _Tf._a._Un._8l._Na);
_Tf._a._Un._8l.BlackJackChair.prototype._G4 = function () {
  _Tf._a._Un._8l.BlackJackChair.superclass.prototype._G4.apply(this, arguments);
  for (var a = 0; a < this.model.ranks.length; a++) this.model.ranks[a] && this.model.ranks[a]._K5(this._q6())
};
_Tf._a._Un._8l.BlackJackChair.prototype._X4 = function () {
  _Tf._a._Un._8l.BlackJackChair.superclass.prototype._X4.apply(this, arguments);
  for (var a = 0; a < this.model.ranks.length; a++) this.model.ranks[a] && this.model.ranks[a]._X4(this._q6())
};
_Tf._a._Un._8l.BlackJackChair.prototype._4p = function () {
  _Tf._a._Un._8l.BlackJackChair.superclass.prototype._4p.apply(this, arguments);
  for (var a = 0; a < _Tf._0l.maxSplit; a++) this._Cn(a), this.model.ranks[a] && this.model.ranks[a]._Q7()
};
_Tf._a._Un._8l.BlackJackChair.prototype.setRankAction = function (a, b) {
  this.model.ranks[b].setRankAction(a)
};
_Tf._a._Un._8l.BlackJackChair.prototype.clearRankAction = function (a) {
  this.model.ranks[a]._Q7()
};
_Tf._a._Un._8l.BlackJackChair.prototype._j6 = function (a, b, c, d) {
  var d = d == c,
    e = this.designPosition.chairs[this.view.realNumber];
  "undefined" == typeof c && (c = 0);
  d = d ? e.posChipsActive : e.posChips[this.model.holdersMap[c]];
  b ? (b = this.factory.createChipController(this.factory, this.view.getContext(), this.view.getPosition(), this.model.number, a, this.moneyType, null, this.designPosition, c), b._bq(d)) : (b = this.factory.createChipController(this.factory, this.view.getContext(), this.view.getChipPosition(c), this.model.number,
    a, this.moneyType, null, this.designPosition, c), b._Kh(d));
  this._8s() || this.model.player._j6(a);
  return b
};
_Tf._a._Un._8l.BlackJackChair.prototype.setActiveBetAction = function (a, b) {
  var c, d = this.model.holders.length,
    e = this.designPosition.chairs[this.view.realNumber];
  this._q6();
  this.model.setHoldersMap(b);
  for (c = 0; c < d; c++) {
    var f = a == c;
    this.model.holders[c].setDesignIndexAction(e, b[c], f);
    this.model.ranks[c]._ss(f)
  }
};
_Tf._a._Un._8l.BlackJackChair.prototype._j8 = function (a, b, c) {
  var d = this.model.countTakedCards++,
    e = this.view.getCardPositionByIndex(d);
  c ? a._Bl(e.point.clone(), e.angle) : (a._Kg(e.point.clone(), e.angle), a._rl());
  this.model._Kr(a, d, b);
  this._g6()
};
_Tf._a._Un._8l.BlackJackChair.prototype.playerPushAction = function () { };
_Tf._a._Un._8l.BlackJackChair.prototype.splitAction = function (a, b) {
  this.model.splitCards(a, b)
};
_Tf._a._Un._8l.BlackJackPlayer = function (a, b, c, d, e, f, g, h, j, k) {
  _Tf._a._Un._8l.BlackJackPlayer.superclass.apply(this, arguments)
};
extend(_Tf._a._Un._8l.BlackJackPlayer, _Tf._a._Un._8l._0q);
_Tf._a._Un._8l.BlackJackTable = function (a, b, c, d, e, f, g) {
  this.model = a.createTableModel(a, e);
  this.view = a.createTableView(b, c, d, g, a);
  this.factory = a;
  this.designPosition = g;
  this._xc = this._xc.bind(this)
};
extend(_Tf._a._Un._8l.BlackJackTable, _Tf._a._Un._8l._l7);
_Tf._a._Un._8l.BlackJackTable.prototype._0d = function (a, b, c, d, e) {
  var f = this.view.getPositionCardInCenterByIndex(b, d).clone();
  this.view.getPositionCardInCenterByIndex(b, d) && (this.model._H(a, b), this.model.cards[b]._L1(this.view.getMiddleContext()), this.model.cards[b]._s2(_Tf._dc.CardState._4g), e ? this.model.cards[b]._zb(f, c) : (this.model.cards[b]._Kg(f), c && this.model.cards[b].model._Hk(!0)))
};
_Tf._a._Un._8l.BlackJackTable.prototype.setActiveBetAction = function (a, b, c, d, e, f) {
  if (this.model.chips[a]) {
    d = this.model.chips[a];
    e = d.length;
    for (a = 0; a < e; a++) {
      var g = d[a],
        h = b == a,
        j = this.designPosition.chairs[f],
        k = c[a];
      g && (h ? g._Kh(j.posChipsActive) : g._Kh(j.posChips[k]))
    }
  }
};
_Tf._a._Un._8l.BlackJackTable.prototype.hasInsuranceChip = function (a) {
  return !!this.model.insuranceChips[a]
};
_Tf._a._Un._8l.BlackJackTable.prototype.takeInsuranceChipAction = function (a, b) {
  this.model.takeInsuranceChip(a, b)
};
_Tf._a._Un._8l.BlackJackTable.prototype.insuranceToDealerAction = function (a, b) {
  var c = this.model.getInsuranceChip(a);
  c && (b ? c._q3(this.designPosition.bank.posRake.clone(), function () {
    this.giveInsuranceChipAction(a)
  }.bind(this)) : this.giveInsuranceChipAction(a))
};
_Tf._a._Un._8l.BlackJackTable.prototype.afterInsuranceAction = function () {
  this.model.cards[this.model.cards.length - 1].afterInsuranceAction()
};
_Tf._a._Un._8l.BlackJackWinTable = function (a, b, c, d, e) {
  _Tf._a._Un._8l.BlackJackWinTable.superclass.apply(this, arguments)
  // console.log("testing three  "+JSON.stringify(this) + JSON.stringify(arguments));
};
extend(_Tf._a._Un._8l.BlackJackWinTable, _Tf._a._Un._8l._kr);
_Tf._a._Un._8l.BlackJackShoe = function (a, b, c, d, e) {
  this.model = a.createShoeModel(e);
  this.view = a.createShoeView(b, c, d)
  // console.log("testing four a "+JSON.stringify(a));
  // console.log("testing four b "+JSON.stringify(b));
  // console.log("testing four c "+JSON.stringify(c));
  // console.log("testing four d "+JSON.stringify(d));
  // console.log("testing four e "+JSON.stringify(e));
};
_Tf._a._Un._8l.BlackJackShoe.prototype = {
  model: null,
  view: null,
  setCardsInShoeAction: function (a) {
    this.model.setCardsInShoe(a)
  },
  setNumberOfDecksAction: function (a) {
    this.model.setNumberOfDecks(a)
  },
  _K5: function () {
    this.view.draw(this.model.getCardsInShoe(), this.model.getNumberOfDecks())
  },
  _X4: function () {
    this.view.update()
  },
  _Va: function () {
    this.view.drawMiddle()
  },
  _Em: function () {
    this.view.clearMiddle()
  }
};
_Tf._a._Un._8l.BlackJackCard = function (a, b, c, d, e) {
  _Tf._a._Un._8l.BlackJackCard.superclass.apply(this, arguments)
};
extend(_Tf._a._Un._8l.BlackJackCard, _Tf._a._Un._8l._W2);
_Tf._a._Un._8l.BlackJackCard.prototype.afterInsuranceAction = function () {
  this.view.afterInsurance()
};
_Tf._a._Un._8l.BlackJackTimer = function (a, b, c, d, e) {
  _Tf._a._Un._8l.BlackJackTimer.superclass.apply(this, arguments)
};
extend(_Tf._a._Un._8l.BlackJackTimer, _Tf._a._Un._8l._D);
_Tf._a._Un._8l.BlackJackTimer.prototype._bc = function (a, b, c, d) {
  a != this.model.number && this._P1();
  this.model._ej(a);
  this.view._Kg(a, d);
  this.view.show(b, c)
};
_Tf._a._Un.__0.BlackJackScene = function () {
  _Tf._a._Un.__0.BlackJackScene.superclass.apply(this, arguments)
};
extend(_Tf._a._Un.__0.BlackJackScene, _Tf._a._Un.__0._gl);
_Tf._a._Un.__0.BlackJackScene.prototype.draw = function () {
  var a = this._Rk();
  this.model.chairs.forEach(function (b) {
    b._K5(a)
  });
  this.model.table._K5();
  this.model.cardShoe._K5();
  this.model.bank._K5();
  this.model.timer._K5();
  this.model.tableMessage._K5();
  this.model.rank && this.model.rank._K5();
  this.model.chairs.forEach(function (a) {
    a._G4()
  });
  this._tq()
};
_Tf._a._Un.__0.BlackJackScene.prototype.update = function () {
  this.model.chairs.forEach(function (a) {
    a._X4()
  });
  this.model.table._X4();
  this.model.tableMessage._X4();
  this.model.bank._X4();
  this.model.timer._X4();
  this.model.rank && this.model.rank._X4();
  this.model.cardShoe._X4();
  this._Lr()
};
_Tf._a._Un.__0.BlackJackScene.prototype.redrawChairByIndex = function (a, b) {
  b ? this.model.chairs[a]._Va() : this.model.chairs[a]._ao()
};
_Tf._a._Un.__0.BlackJackScene.prototype.redrawMiddle = function () {
  _Tf._a._Un.__0.BlackJackScene.superclass.prototype.redrawMiddle.apply(this, arguments);
  this.model.rank && (this.model.rank._Em(), this.model.rank._Va());
  this.model.cardShoe._Em();
  this.model.cardShoe._Va()
};
_Tf._a._Un.__0.BlackJackScene.prototype._yi = function () {
  if (255 !== this.model.clientIndex) {
    var a = _Mf._L2,
      b = _Mf._q1._5p(this.manager.tableId),
      c = b._K9(this.model.chairs[this.model.clientIndex]._Fg()),
      d = b.model.info.minBet;
    c && !(a._Z5(b._Dj()) < d) && this.view._7q(b._m5(), d, c)
  }
};
_Tf._a._Un.__0.BlackJackScene.prototype._9g = function (a) {
  var b = this.manager,
    c = this;
  _Tf._Ek._29.getPagePositions();
  var d = a.originalEvent.touches ? a.originalEvent.touches[0] : a,
    e = this.view.getScales();
  this.view.getMargins();
  var f = (parseInt(d.pageX) - a.positionLeft) / e.scaleX,
    g = (parseInt(d.pageY) - a.positionTop) / e.scaleY,
    h = c._Rk(),
    j = !1;
  this.model.chairs.forEach(function (a, d) {
    var e = h && 255 === c.reservedSeat && a._8s(),
      m = a._8s();
    e && a._0b(f, g, c.model.clientIndex == d) ? (c.reservedSeat = d, b._Kn(d), j = !0) : !m && a.hasAvatarPointAction(f,
      g, c.model.clientIndex == d) && (b._T1(d, a._Sq()), j = !0)
  });
  j || _Mf._ks.emitAsync(_Ag._W9, [this.manager.tableId, f, g])
};
_Tf._a._Un._8l.PaigowBank = function (a, b, c, d, e, f) {
  this.model = a.createBankModel();
  this.view = a.createBankView(b, c, _Tf._0l._N1._6i.format(f));
  this.dealerView = a.createDealerView(b, c, d);
  this.factory = a;
  this.gameType = d;
  this.designPosition = _Mf._b1.getPositionByGameType(d);
  this.model._y4(a.createWinTableController(a, b, d, null, this.designPosition));
  this.model.setRakeChip(a.createChipController(a, b, this.view.getRakePosition(), -1, 0, e, _Tf._dc.ChipState._D9, this.designPosition));
  this._tr = this._tr.bind(this.model);
  this._yq = this._yq.bind(this)
};
_Tf._a._Un._8l.PaigowBank.prototype = {
  model: null,
  view: null,
  gameType: _Tf._dc.GameType._dk,
  _5q: function (a) {
    a._K5()
  },
  _tr: function (a) {
    a._X4();
    !a._Xb() && a._Ol() && this._ce(a)
  },
  _K5: function () {
    this.view.draw();
    this.model.foldedCards.forEach(this._5q);
    this.model.winTable._K5();
    this.model.rakeChip._K5()
  },
  _X4: function () {
    this.view.update();
    this.model.foldedCards.forEach(this._tr);
    this.model.winTable._X4();
    this.model.rakeChip._X4()
  },
  dealDealerCardAction: function (a) {
    var b = this.factory.createDealerCardController(this.factory, this.view.getContext(),
      this.view.getPosition(), this.designPosition);
    b._uf(a);
    return b
  },
  _L9: function (a) {
    var b = this.factory.createCardController(this.factory, this.view.getContext(), this.view.getPosition(), this.designPosition);
    b._uf(a);
    return b
  },
  _yq: function (a) {
    a._g4(this.view.getPosition());
    this.model._Kr(a, 0)
  },
  _C7: function (a) {
    a.forEach(this._yq)
  },
  _Fp: function (a) {
    var b = this.factory.createCardController(this.factory, this.view.getContext(), this.view.getPosition(), this.designPosition, !0);
    b._uf(a);
    return b
  },
  _Db: function (a, b) {
    a && (b ? (a._70(this.view.getPosition()), this.model.rakeChip._cf(a)) : this.model.rakeChip._uf(a._xi()))
  },
  _Cj: function (a) {
    this.model.rakeChip._uf(a)
  },
  __l: function (a) {
    this.model.winTable && this.model.winTable._40(a)
  },
  _Q7: function () {
    this.model.clear()
  },
  _Va: function () {
    this.view.drawMiddle();
    this.dealerView.drawMiddle()
  },
  _Em: function () {
    this.view.clearMiddle();
    this.dealerView.clearMiddle()
  }
};
_Tf._a._Un._8l.PaigowCard = function (a, b, c, d, e) {
  _Tf._a._Un._8l.PaigowCard.superclass.apply(this, arguments)
};
extend(_Tf._a._Un._8l.PaigowCard, _Tf._a._Un._8l._W2);
_Tf._a._Un._8l.PaigowCard.prototype.afterInsuranceAction = function () {
  this.view.afterInsurance()
};
_Tf._a._Un._8l.PaigowCardHolder = function () {
  _Tf._a._Un._8l.PaigowCardHolder.superclass.apply(this, arguments)
};
extend(_Tf._a._Un._8l.PaigowCardHolder, _Tf._a._Un._8l._a6);
_Tf._a._Un._8l.PaigowCardHolder.prototype.setDesignIndexAction = function (a, b, c, d) {
  a = this.model.cards.length;
  this.model.setActive(c);
  this.model.setSelected(d);
  this.view.setDesignIndex(b, c);
  for (b = 0; b < a; b++) this.model.cards[b]._ss(c), this.model.cards[b].setSelected(c), this.model.cards[b].fixPositionAction()
};
_Tf._a._Un._8l.PaigowCardHolder.prototype._j8 = function (a) {
  a._ss(this.model.isActive);
  a.setSelected(this.model.isSelected);
  this.view.setShadow(this.model.isBusted);
  this.model._Kr(a)
};
_Tf._a._Un._8l.PaigowCardHolder.prototype._Cn = function () {
  this.model._Mb();
  this.view.clearCurrentCount();
  this.view.setShadow(this.model.isBusted)
};
_Tf._a._Un._8l.PaigowCardHolder.prototype._Ug = function (a, b) {
  var c = a.length,
    d;
  if (c === this.model.countTakedCards && c === this.model.cards.length) for (d = 0; d < c; d++) this.model.cards[d]._ss(this.model.isActive), this.model.cards[d].setSelected(this.model.isSelected), this.model.cards[d]._uf(a[d]), this.model.cards[d]._rl();
  else {
    this._Cn();
    var e = this.view.getCardsPositions(c, b, this.model.isActive);
    for (d = 0; d < c; d++) {
      var f = this.factory.createCardController(this.factory, this.view.getContext(), this.view.getPosition(),
        this.designPosition);
      f._ss(this.model.isActive);
      f.setSelected(this.model.isSelected);
      f._uf(a[d]);
      f._rl();
      f._Kg(e[d]);
      this.model._Kr(f)
    }
    this.model.countTakedCards = c
  }
};
_Tf._a._Un._8l.PaigowChair = function (a, b, c, d, e, f, g, h, j, k) {
  _Tf._a._Un._8l.PaigowChair.superclass.apply(this, arguments);
  this.model._y4(this.factory.createWinTableController(this.factory, b, h, g, this.designPosition))
};
extend(_Tf._a._Un._8l.PaigowChair, _Tf._a._Un._8l._Na);
_Tf._a._Un._8l.PaigowChair.prototype._j6 = function (a, b, c, d) {
  var d = d == c,
    e = this.designPosition.chairs[this.view.realNumber];
  "undefined" == typeof c && (c = 0);
  d = d ? e.posChipsActive : e.posChips[this.model.holdersMap[c]];
  b ? (b = this.factory.createChipController(this.factory, this.view.getContext(), this.view.getPosition(), this.model.number, a, this.moneyType, null, this.designPosition, c), b._bq(d)) : (b = this.factory.createChipController(this.factory, this.view.getContext(), this.view.getChipPosition(c), this.model.number, a,
    this.moneyType, null, this.designPosition, c), b._Kh(d));
  this._8s() || this.model.player._j6(a);
  return b
};
_Tf._a._Un._8l.PaigowChair.prototype.setActiveBetAction = function (a, b) {
  this._q6();
  this.model.setHoldersMap(b)
};
_Tf._a._Un._8l.PaigowChair.prototype.takeBetToWinAction = function (a) {
  this.model.takeWinChip(a)
};
_Tf._a._Un._8l.PaigowChair.prototype.playerPushAction = function () { };
_Tf._a._Un._8l.PaigowChair.prototype.playerBustedAction = function () {
  this.model.winTable._40(_Tf._dc.AnimationType._21)
};
_Tf._a._Un._8l.PaigowChair.prototype.playerTieAction = function () {
  this.model.winTable._40(_Tf._dc.AnimationType._h7)
};
_Tf._a._Un._8l.PaigowDealerCard = function (a, b, c, d, e) {
  this.model = a.createCardModel(a);
  this.view = a.createDealerCardView(b, c, d, e, a);
  this.state = _Tf._dc.CardState._08
};
_Tf._a._Un._8l.PaigowDealerCard.prototype = {
  model: null,
  view: null,
  state: _Tf._dc.CardState._08,
  _s2: function (a) {
    this.state = a
  },
  _X4: function () {
    this.view.update()
  },
  _K5: function (a) {
    this.view.draw(this.state, this.model.isOpen, this.model.value, a || !1, this.model.isSelected, this.model.isActive)
  },
  _Q7: function () {
    this.view.clear(this.model.isActive)
  },
  _rl: function () {
    this.model.isOpen || (this.model._Hk(!0), this.view.open())
  },
  _gj: function (a) {
    this.view._Oq(a)
  },
  _Bl: function (a, b) {
    this._s2(_Tf._dc.CardState._vc);
    this.view.setAngle(b);
    this.view._Oq(a)
  },
  _zb: function (a, b) {
    this._s2(_Tf._dc.CardState._4g);
    this.model._Hk(!0);
    this.view.__n(a, b)
  },
  _24: function (a, b) {
    this._s2(b ? _Tf._dc.CardState._2o : _Tf._dc.CardState._5r);
    this.model._Hk(!0);
    this._U1(0);
    this.view._05(a);
    this.view.setIsClientCard(b);
    b && this.view.correctClientCardPosition(!0);
    (this.model.value == _Tf._dc._W2._G7 || this.model.value == _Tf._dc._W2._Al) && this.view.correctBackCardPosition()
  },
  _47: function (a, b) {
    this._s2(b ? _Tf._dc.CardState._2o : _Tf._dc.CardState._5r);
    this._U1(0);
    this.view._o6(a);
    this.view.setIsClientCard(b);
    b && this.view.correctClientCardPosition(!1);
    (this.model.value == _Tf._dc._W2._G7 || this.model.value == _Tf._dc._W2._Al) && this.view.correctBackCardPosition()
  },
  _g4: function (a) {
    this._s2(_Tf._dc.CardState._x2);
    this.model._Hk(!1);
    this.model._ec();
    this._gj(a)
  },
  _uf: function (a) {
    this.model.set(a)
  },
  _xi: function () {
    return this.model.value
  },
  _7c: function () {
    this.view._s1()
  },
  _Xb: function () {
    return this.view.isAnimating()
  },
  _Ol: function () {
    return this.model._kl()
  },
  _U1: function (a) {
    this.view.setAngle(a)
  },
  _Kg: function (a, b) {
    b = b || 0;
    this.view._Kg(a);
    this._U1(b)
  },
  _L1: function (a) {
    this.view.setMiddleContext(a)
  },
  setSelected: function (a) {
    this.model.setSelected(a)
  },
  fixPositionAction: function () {
    this.view.fixPosition()
  },
  _ss: function (a) {
    this.model.setActive(a)
  }
};
_Tf._a._Un._8l.PaigowDealerCardHolder = function (a, b, c, d) {
  this.designPosition = c;
  this.model = a.createDealerCardHolderModel();
  this.view = a.createDealerCardHolderView(b, c, d);
  this.factory = a;
  this._5q = this._5q.bind(this.view)
};
_Tf._a._Un._8l.PaigowDealerCardHolder.prototype = {
  model: null,
  view: null,
  _U3: function (a) {
    a._X4()
  },
  _5q: function (a) {
    a._K5(this.hasShadow())
  },
  _X4: function () {
    this.view.update(this.model.cards);
    this.model.cards.forEach(this._U3)
  },
  _K5: function () {
    this.view.draw();
    for (var a = 0, b = this.model.cards.length; a < b; a++) this.model.cards[a].setSelected(this.model.isSelected && !this.view.hasShadow()), this._5q(this.model.cards[a])
  },
  _j8: function (a) {
    this.view.setShadow(!1);
    this.model._Kr(a)
  },
  _Ug: function (a) {
    var b = a.length,
      c,
      d = this.view.getPosition();
    this._Cn();
    for (c = 0; c < b; c++) {
      var e = this.factory.createDealerCardController(this.factory, this.view.getContext(), d[c], this.designPosition, !0);
      e._uf(_Tf._dc._W2._C8(a[c]));
      e._rl();
      e._Kg(d[c]);
      this.model._Kr(e)
    }
  },
  _ji: function () {
    this.view.decCurrentCount();
    return this.model._p6()
  },
  _Cn: function () {
    this.model._Mb();
    this.view.clearCurrentCount();
    this.view.setShadow(!1)
  },
  _Ql: function () {
    this.view.hasShadow() || this._Cn()
  },
  _sh: function () {
    this.view.setShadow(!0);
    return []
  },
  setSelected: function (a) {
    this.model.setSelected(a)
  },
  hasCards: function () {
    return 0 < this.model.countTakedCards
  },
  getCountCards: function () {
    return this.model.countTakedCards
  }
};
_Tf._a._Un._8l.PaigowTable = function (a, b, c, d, e, f, g) {
  this.model = a.createTableModel(a, e);
  this.view = a.createTableView(b, c, d, g, a);
  this.factory = a;
  this.designPosition = g;
  this._xc = this._xc.bind(this);
  this.dealerCardHolder = a.createDealerCardHolderController(a, b, this.designPosition, this.designPosition.dealerCards)
};
extend(_Tf._a._Un._8l.PaigowTable, _Tf._a._Un._8l._l7);
_Tf._a._Un._8l.PaigowTable.prototype._0d = function (a, b, c, d, e) {
  var f = this.view.getPositionCardInCenterByIndex(b, d).clone();
  this.view.getPositionCardInCenterByIndex(b, d) && (this.model._H(a, b), this.model.cards[b]._L1(this.view.getMiddleContext()), this.model.cards[b]._s2(_Tf._dc.CardState._4g), e ? this.model.cards[b]._zb(f, c) : (this.model.cards[b]._Kg(f), c && this.model.cards[b].model._Hk(!0)))
};
_Tf._a._Un._8l.PaigowTable.prototype.setActiveBetAction = function (a, b, c, d, e, f) {
  if (this.model.chips[a]) {
    d = this.model.chips[a];
    e = d.length;
    for (a = 0; a < e; a++) {
      var g = d[a],
        h = b == a,
        j = this.designPosition.chairs[f],
        k = c[a];
      g && (h ? g._Kh(j.posChipsActive) : g._Kh(j.posChips[k]))
    }
  }
};
_Tf._a._Un._8l.PaigowTable.prototype.hasInsuranceChip = function (a) {
  return !!this.model.insuranceChips[a]
};
_Tf._a._Un._8l.PaigowTable.prototype.takeInsuranceChipAction = function (a, b) {
  this.model.takeInsuranceChip(a, b)
};
_Tf._a._Un._8l.PaigowTable.prototype.insuranceToDealerAction = function (a, b) {
  var c = this.model.getInsuranceChip(a);
  c && (b ? c._q3(this.designPosition.bank.posRake.clone(), function () {
    this.giveInsuranceChipAction(a)
  }.bind(this)) : this.giveInsuranceChipAction(a))
};
_Tf._a._Un._8l.PaigowTable.prototype.afterInsuranceAction = function () {
  this.model.cards[this.model.cards.length - 1].afterInsuranceAction()
};
_Tf._a._Un._8l.PaigowTable.prototype.getDealerCountCards = function () {
  return this.dealerCardHolder.getCountCards()
};
_Tf._a._Un._8l.PaigowTable.prototype.setDealerCardsAction = function (a) {
  this.dealerCardHolder._Ug(a)
};
_Tf._a._Un._8l.PaigowTable.prototype.moveToDealerCardHolder = function (a) {
  a._s2(_Tf._dc.CardState._4g);
  this.dealerCardHolder._j8(a)
};
_Tf._a._Un._8l.PaigowTable.prototype.hasDealerCards = function () {
  return this.dealerCardHolder.hasCards()
};
_Tf._a._Un._8l.PaigowTable.prototype._K5 = function () {
  var a, b;
  this.dealerCardHolder._K5();
  this.model.cards.forEach(this._5q);
  for (a = 0, b = this.model.chips.length; a < b; a++) this.model.chips[a] && this.model.chips[a].forEach(this._5q);
  for (a = 0, b = this.model.tmpChips.length; a < b; a++) this.model.tmpChips[a] && this.model.tmpChips[a].forEach(this._5q);
  this.model.potChips && this.model.potChips._K5();
  this.model.insuranceChips.forEach(this._5q)
};
_Tf._a._Un._8l.PaigowTable.prototype._X4 = function () {
  var a, b;
  this.dealerCardHolder._X4();
  this.model.cards.forEach(this._U3);
  for (a = 0, b = this.model.chips.length; a < b; a++) this.model.chips[a] && this.model.chips[a].forEach(this._U3);
  for (a = 0, b = this.model.tmpChips.length; a < b; a++) this.model.tmpChips[a] && this.model.tmpChips[a].forEach(this._U3);
  this.model.potChips && this.model.potChips._X4();
  this.model.insuranceChips.forEach(this._U3)
};
_Tf._a._Un._8l.PaigowTimer = function (a, b, c, d, e) {
  _Tf._a._Un._8l.PaigowTimer.superclass.apply(this, arguments)
};
extend(_Tf._a._Un._8l.PaigowTimer, _Tf._a._Un._8l._D);
_Tf._a._Un._8l.PaigowTimer.prototype._bc = function (a, b, c, d) {
  a != this.model.number && this._P1();
  this.model._ej(a);
  this.view._Kg(a, d);
  this.view.show(b, c)
};
_Tf._a._Un.__0.PaigowScene = function () {
  _Tf._a._Un.__0.PaigowScene.superclass.apply(this, arguments)
};
extend(_Tf._a._Un.__0.PaigowScene, _Tf._a._Un.__0._gl);
_Tf._a._Un.__0.PaigowScene.prototype.draw = function () {
  var a = this._Rk();
  this.model.chairs.forEach(function (b) {
    b._K5(a)
  });
  this.model.table._K5();
  this.model.timer._K5();
  this.model.bank._K5();
  this.model.chairs.forEach(function (a) {
    a._G4()
  });
  this._tq()
};
_Tf._a._Un.__0.PaigowScene.prototype.update = function () {
  this.model.chairs.forEach(function (a) {
    a._X4()
  });
  this.model.table._X4();
  this.model.timer._X4();
  this.model.bank._X4();
  this._Lr()
};
_Tf._a._Un.__0.PaigowScene.prototype.redrawChairByIndex = function (a, b) {
  b ? this.model.chairs[a]._Va() : this.model.chairs[a]._ao()
};
_Tf._a._Un.__0.PaigowScene.prototype.redrawMiddle = function () {
  _Tf._a._Un.__0.PaigowScene.superclass.prototype.redrawMiddle.apply(this, arguments);
  this.model.rank && (this.model.rank._Em(), this.model.rank._Va())
};
_Tf._a._Un.__0.PaigowScene.prototype._yi = function () {
  if (255 !== this.model.clientIndex) {
    var a = _Mf._L2,
      b = _Mf._q1._5p(this.manager.tableId),
      c = b._K9(this.model.chairs[this.model.clientIndex]._Fg()),
      d = b.model.info.minBet;
    c && !(a._Z5(b._Dj()) < d) && this.view._7q(b._m5(), d, c)
  }
};
_Tf._a._Un.__0.PaigowScene.prototype._9g = function (a) {
  var b = this.manager,
    c = this;
  _Tf._Ek._29.getPagePositions();
  var d = a.originalEvent.touches ? a.originalEvent.touches[0] : a,
    e = this.view.getScales();
  this.view.getMargins();
  var f = (parseInt(d.pageX) - a.positionLeft) / e.scaleX,
    g = (parseInt(d.pageY) - a.positionTop) / e.scaleY,
    h = c._Rk(),
    j = !1;
  this.model.chairs.forEach(function (a, d) {
    var e = h && 255 === c.reservedSeat && a._8s(),
      m = a._8s();
    e && a._0b(f, g, c.model.clientIndex == d) ? (c.reservedSeat = d, b._Kn(d), j = !0) : !m && a.hasAvatarPointAction(f,
      g, c.model.clientIndex == d) && (b._T1(d, a._Sq()), j = !0)
  });
  j || _Mf._ks.emitAsync(_Ag._W9, [this.manager.tableId, f, g])
};
_Tf._a._Un._8l.CrapsChair = function (a, b, c, d, e, f, g, h, j, k, l) {
  _Tf._a._Un._8l.CrapsChair.superclass.apply(this, arguments);
  var n = this.factory.createWinTableController(this.factory, b, h, g, this.designPosition),
    m = this.factory.createTimerController(this.factory, b, g, k, l);
  this.model._y4(n);
  this.model.setTimer(m)
};
extend(_Tf._a._Un._8l.CrapsChair, _Tf._a._Un._8l._Na);
_Tf._a._Un._8l.CrapsChair.prototype._j6 = function (a, b, c, d) {
  var d = d == c,
    e = this.designPosition.chairs[this.view.realNumber];
  "undefined" == typeof c && (c = 0);
  d = d ? e.posChipsActive : e.posChips[this.model.holdersMap[c]];
  b ? (b = this.factory.createChipController(this.factory, this.view.getContext(), this.view.getPosition(), this.model.number, a, this.moneyType, null, this.designPosition, c), b._bq(d)) : (b = this.factory.createChipController(this.factory, this.view.getContext(), this.view.getChipPosition(c), this.model.number, a,
    this.moneyType, null, this.designPosition, c), b._Kh(d));
  this._8s() || this.model.player._j6(a);
  return b
};
_Tf._a._Un._8l.CrapsChair.prototype.setActiveBetAction = function (a, b) {
  this._q6();
  this.model.setHoldersMap(b)
};
_Tf._a._Un._8l.CrapsChair.prototype.takeBetToWinAction = function (a) {
  this.model.takeWinChip(a)
};
_Tf._a._Un._8l.CrapsChair.prototype.playerPushAction = function () { };
_Tf._a._Un._8l.CrapsChair.prototype.playerBustedAction = function (a) {
  this.model.winTable._40(a)
};
_Tf._a._Un._8l.CrapsChair.prototype.playerTieAction = function () {
  this.model.winTable._40(_Tf._dc.AnimationType._h7)
};
_Tf._a._Un._8l.CrapsChair.prototype._q6 = function () {
  return this.model.isClientChair
};
_Tf._a._Un._8l.CrapsDice = function (a, b, c, d) {
  this.model = a.createDiceModel(c);
  this.view = a.createDiceView(a, b, d);
  this.state = _Tf._dc.DiceState._08
};
_Tf._a._Un._8l.CrapsDice.prototype = {
  model: null,
  view: null,
  state: _Tf._dc.CardState._08,
  _s2: function (a) {
    this.state = a
  },
  drawRollAction: function () {
    this.view.drawRollAnimation(this.model)
  },
  clear: function () {
    this.view.clear(this.model)
  },
  _Q7: function () {
    this.view.clear()
  },
  _K5: function () {
    this.view.draw()
  },
  _Kg: function (a) {
    this.view._Kg(a)
  }
};
_Tf._a._Un._8l.CrapsPlayer = function (a, b, c, d, e, f, g, h, j, k) {
  _Tf._a._Un._8l.CrapsPlayer.superclass.apply(this, arguments)
};
extend(_Tf._a._Un._8l.CrapsPlayer, _Tf._a._Un._8l._0q);
_Tf._a._Un._8l.CrapsPlayer.prototype._Va = function (a, b, c) {
  this.view.drawMiddle(this.model.name, _Tf._41.getLocale()._Q5[this.model.state], a, this.model.level, b, c, this.model.id)
};
_Tf._a._Un._8l.CrapsPlayer.prototype._tc = function (a, b) {
  this.view.locate(a, b)
};
_Tf._a._Un._8l.CrapsTable = function (a, b, c, d, e, f, g) {
  this.model = a.createTableModel(a, e);
  this.view = a.createTableView(b, c, d, g, a);
  this.factory = a;
  this.designPosition = g;
  this._xc = this._xc.bind(this);
  this.dealerCardHolder = a.createDealerCardHolderController(a, b, this.designPosition, this.designPosition.dealerCards)
};
extend(_Tf._a._Un._8l.CrapsTable, _Tf._a._Un._8l._l7);
_Tf._a._Un._8l.CrapsTable.prototype.rollDiceAction = function () {
  var a = this.model.dices;
  a[0].drawRollAction();
  setTimeout(function () {
    a[1].drawRollAction()
  }, 200)
};
_Tf._a._Un._8l.CrapsTable.prototype.setDiceAction = function (a) {
  var b = a.length,
    c;
  for (c = 0; c < b; c++) this.model.takeDice(this.factory.createDiceController(this.factory, this.designPosition.dice[c], a[c], this.view.getContext()))
};
_Tf._a._Un._8l.CrapsTable.prototype.clearDiceAction = function () {
  var a = this.model.dices,
    b = a.length,
    c;
  for (c = 0; c < b; c++) a[c].clear();
  this.model.removeDices()
};
_Tf._a._Un._8l.CrapsTable.prototype._K5 = function () {
  var a, b = this.model.getDices();
  for (a = 0; a < b.length; a++) b[a]._K5()
};
_Tf._a._Un._8l.CrapsTable.prototype._X4 = function () {
  var a, b;
  for (a = 0, b = this.model.chips.length; a < b; a++) this.model.chips[a] && this.model.chips[a].forEach(this._U3);
  for (a = 0, b = this.model.tmpChips.length; a < b; a++) this.model.tmpChips[a] && this.model.tmpChips[a].forEach(this._U3);
  this.model.potChips && this.model.potChips._X4()
};
_Tf._a._Un._8l.CrapsTable.prototype._Q7 = function () { };
_Tf._a._Un._8l.CrapsTable.prototype.setActiveBetAction = function (a, b, c, d, e, f) {
  if (this.model.chips[a]) {
    d = this.model.chips[a];
    e = d.length;
    for (a = 0; a < e; a++) {
      var g = d[a],
        h = b == a,
        j = this.designPosition.chairs[f],
        k = c[a];
      g && (h ? g._Kh(j.posChipsActive) : g._Kh(j.posChips[k]))
    }
  }
};
_Tf._a._Un._8l.CrapsTable.prototype.hasInsuranceChip = function (a) {
  return !!this.model.insuranceChips[a]
};
_Tf._a._Un._8l.CrapsTable.prototype.takeInsuranceChipAction = function (a, b) {
  this.model.takeInsuranceChip(a, b)
};
_Tf._a._Un._8l.CrapsTable.prototype.insuranceToDealerAction = function (a, b) {
  var c = this.model.getInsuranceChip(a);
  c && (b ? c._q3(this.designPosition.bank.posRake.clone(), function () {
    this.giveInsuranceChipAction(a)
  }.bind(this)) : this.giveInsuranceChipAction(a))
};
_Tf._a._Un._8l.CrapsTable.prototype.afterInsuranceAction = function () {
  this.model.cards[this.model.cards.length - 1].afterInsuranceAction()
};
_Tf._a._Un._8l.CrapsTable.prototype._ao = function () { };
_Tf._a._Un._8l.CrapsTable.prototype.getDealerCountCards = function () {
  return this.dealerCardHolder.getCountCards()
};
_Tf._a._Un._8l.CrapsTable.prototype.setDealerCardsAction = function (a) {
  this.dealerCardHolder._Ug(a)
};
_Tf._a._Un._8l.CrapsTable.prototype.moveToDealerCardHolder = function (a) {
  a._s2(_Tf._dc.CardState._4g);
  this.dealerCardHolder._j8(a)
};
_Tf._a._Un._8l.CrapsTable.prototype.hasDealerCards = function () {
  return this.dealerCardHolder.hasCards()
};
_Tf._a._Un._8l.CrapsTable.prototype.addStake = function (a) {
  this.model.addStake(a)
};
_Tf._a._Un._8l.CrapsTable.prototype.clearNewStakes = function () {
  this.model.clearNewStakes()
};
_Tf._a._Un._8l.CrapsTable.prototype.clearSecondaryStakes = function () {
  this.model.clearSecondaryStakes()
};
_Tf._a._Un._8l.CrapsTable.prototype.unsetClearSecondaryStakes = function () {
  this.model.unsetClearSecondaryStakes()
};
_Tf._a._Un._8l.CrapsTable.prototype.setStake = function (a) {
  this.model.setStake(a)
};
_Tf._a._Un._8l.CrapsTable.prototype.getSumStakes = function () {
  return this.model.getSumNewStakes()
};
_Tf._a._Un._8l.CrapsTable.prototype.redrawStakes = function () {
  this.view.redrawStakes(this.model.getStakes());
  this.view.redrawTotalBet(this.model.getSumAllStakes())
};
_Tf._a._Un._8l.CrapsTable.prototype.clearAllStakes = function () {
  this.model.clearAllStakes()
};
_Tf._a._Un._8l.CrapsTable.prototype.setActiveChipsAmount = function (a) {
  this.model.setActiveChipsAmount(a)
};
_Tf._a._Un._8l.CrapsTable.prototype.getStakes = function () {
  return this.model.getStakes()
};
_Tf._a._Un._8l.CrapsTable.prototype.getNewStakes = function () {
  return this.model.getNewStakes()
};
_Tf._a._Un._8l.CrapsTable.prototype.drawDiceHistory = function (a) {
  this.view.drawDiceHistory(a)
};
_Tf._a._Un._8l.CrapsTable.prototype._tc = function () { };
_Tf._a._Un._8l.CrapsTable.prototype.updatePointValue = function (a) {
  this.view.updatePointValue(a)
};
_Tf._a._Un._8l.CrapsTable.prototype.setLastStakes = function () {
  this.model.setLastStakes()
};
_Tf._a._Un._8l.CrapsTable.prototype.setStakesFromRepeat = function () {
  this.model.setStakesFromRepeat();
  this.redrawStakes()
};
_Tf._a._Un._8l.CrapsTimer = function (a, b, c, d, e) {
  _Tf._a._Un._8l.CrapsTimer.superclass.apply(this, arguments)
};
extend(_Tf._a._Un._8l.CrapsTimer, _Tf._a._Un._8l._D);
_Tf._a._Un._8l.CrapsTimer.prototype._bc = function (a, b, c, d) {
  a != this.model.number && this._P1();
  this.model._ej(a);
  this.view._Kg(a, d);
  this.view.show(b, c)
};
_Tf._a._Un.__0.CrapsScene = function () {
  _Tf._a._Un.__0.CrapsScene.superclass.apply(this, arguments)
};
extend(_Tf._a._Un.__0.CrapsScene, _Tf._a._Un.__0._gl);
_Tf._a._Un.__0.CrapsScene.prototype.draw = function () {
  var a = this._Rk();
  this.model.chairs.forEach(function (b) {
    b._K5(a);
    b.model.timer && b.model.timer._K5()
  });
  this.model.table._K5();
  this.model.chairs.forEach(function (a) {
    a._G4()
  })
};
_Tf._a._Un.__0.CrapsScene.prototype.update = function () {
  this.model.chairs.forEach(function (a) {
    a._X4();
    a.model.timer && a.model.timer._X4()
  });
  this.model.table._X4();
  this.model.bank._X4();
  this._Lr()
};
_Tf._a._Un.__0.CrapsScene.prototype.redrawChairByIndex = function (a, b) {
  b ? this.model.chairs[a]._Va() : this.model.chairs[a]._ao()
};
_Tf._a._Un.__0.CrapsScene.prototype.redrawMiddle = function () {
  _Tf._a._Un.__0.CrapsScene.superclass.prototype.redrawMiddle.apply(this, arguments);
  this.model.rank && (this.model.rank._Em(), this.model.rank._Va())
};
_Tf._a._Un.__0.CrapsScene.prototype._yi = function () {
  if (255 !== this.model.clientIndex) {
    var a = _Mf._L2,
      b = _Mf._q1._5p(this.manager.tableId),
      c = b._K9(this.model.chairs[this.model.clientIndex]._Fg()),
      d = b.model.info.minBet;
    c && !(a._Z5(b._Dj()) < d) && this.view._7q(b._m5(), d, c)
  }
};
_Tf._a._Un.__0.CrapsScene.prototype._9g = function (a) {
  var b = this.manager,
    c = this;
  _Tf._Ek._29.getPagePositions();
  var d = a.originalEvent.touches ? a.originalEvent.touches[0] : a,
    e = this.view.getScales();
  this.view.getMargins();
  var f = (parseInt(d.pageX) - a.positionLeft) / e.scaleX,
    g = (parseInt(d.pageY) - a.positionTop) / e.scaleY,
    h = c._Rk(),
    j = !1;
  this.model.chairs.forEach(function (a, d) {
    var e = h && 255 === c.reservedSeat && a._8s(),
      m = a._8s();
    e && a._0b(f, g, c.model.clientIndex == d) ? (c.reservedSeat = d, b._Kn(d), j = !0) : !m && a.hasAvatarPointAction(f,
      g, c.model.clientIndex == d) && (b._T1(d, a._Sq()), j = !0)
  });
  j || _Mf._ks.emitAsync(_Ag._W9, [this.manager.tableId, f, g])
};
_Tf.Factories._Un.PokerFactory = function (a) {
  this.gameType = a
};
_Tf.Factories._Un.PokerFactory.prototype = {
  createSceneModel: function (a, b, c, d) {
    return new _Tf._U6._Un.__0._gl(a, b, c, d)
  },
  createBankModel: function () {
    return new _Tf._U6._Un._8l._hl
  },
  createWinTableModel: function () {
    return new _Tf._U6._Un._8l._kr
  },
  createTableModel: function (a, b) {
    return new _Tf._U6._Un._8l._l7(a, b)
  },
  createChairModel: function (a, b) {
    return new _Tf._U6._Un._8l._Na(a, b)
  },
  createTimerModel: function (a) {
    return new _Tf._U6._Un._8l._D(a)
  },
  createDealerButtonModel: function (a) {
    return new _Tf._U6._Un._8l._nq(a)
  },
  createTableMessageModel: function () {
    return new _Tf._U6._Un._8l.TableMessage
  },
  createRankModel: function () {
    return new _Tf._U6._Un._8l.Rank
  },
  createCardHolderModel: function (a) {
    return new _Tf._U6._Un._8l._a6(a)
  },
  createCommandModel: function (a, b) {
    return new _Tf._U6._Un._8l.Command(a, b)
  },
  createCommandsModel: function (a, b, c, d, e, f) {
    return new _Tf._U6._Un.__0._Ic(a, b, c, d, e, f)
  },
  createGameAreaModel: function (a) {
    return new _Tf._U6._Un._8l.GameArea(a)
  },
  createGameAreasModel: function (a) {
    return new _Tf._U6._Un.__0.GameAreas(a)
  },
  createCardModel: function (a) {
    return new _Tf._U6._Un._8l._W2(a)
  },
  createChipModel: function (a, b, c, d) {
    return new _Tf._U6._Un._8l._No(a, b, c, d)
  },
  createPlayerModel: function (a, b, c, d, e, f, g) {
    return new _Tf._U6._Un._8l._0q(a, b, c, d, e, f, g)
  },
  createPotChipsModel: function (a, b) {
    return new _Tf._U6._Un._8l._rs(a, b)
  },
  createSceneView: function (a, b) {
    return new _Tf._E9._2s._3k._gl(a, b)
  },
  createBankView: function (a, b, c) {
    return new _Tf._E9._2s._o4._hl(a, b, c)
  },
  createWinTableView: function (a, b, c, d) {
    return new _Tf._E9._2s._o4._kr(a,
      b, c, d)
  },
  createTableView: function (a, b, c, d, e) {
    return new _Tf._E9._2s._o4._l7(a, b, c, d, e)
  },
  createChairView: function (a, b, c, d, e, f) {
    return new _Tf._E9._2s._o4._Na(a, b, c, d, e, f)
  },
  createTimerView: function (a, b, c, d) {
    return new _Tf._E9._2s._o4._D(a, b, c, d)
  },
  createDealerButtonView: function (a, b, c, d) {
    return new _Tf._E9._2s._o4._nq(a, b, c, d)
  },
  createTableMessageView: function (a, b) {
    return new _Tf._E9._2s._o4.TableMessage(a, b)
  },
  createRankView: function (a, b, c, d, e, f) {
    return new _Tf._E9._2s._o4.Rank(a, b, c, d, e, f)
  },
  createCardHolderView: function (a,
    b, c, d) {
    return new _Tf._E9._2s._o4._a6(a, b, c, d)
  },
  createCommandView: function (a, b, c, d, e, f, g, h, j, k) {
    return new _Tf._E9._2s._o4.Command(a, b, c, d, e, f, g, h, j, k)
  },
  createCommandsView: function (a) {
    return new _Tf._E9._2s._3k._Ic(a)
  },
  createGameAreaView: function (a, b, c, d) {
    return new _Tf._E9._2s._o4.GameArea(a, b, c, d)
  },
  createGameAreasView: function (a) {
    return new _Tf._E9._2s._3k.GameAreas(a)
  },
  createCardView: function (a, b, c, d, e) {
    return new _Tf._E9._2s._o4._W2(a, b, c, d, e)
  },
  createChipView: function (a, b, c, d) {
    return new _Tf._E9._2s._o4._No(a, b, c, d)
  },
  createPlayerView: function (a, b, c, d, e, f) {
    return new _Tf._E9._2s._o4._0q(a, b, c, d, e, f)
  },
  createPotChipsView: function (a, b) {
    return new _Tf._E9._2s._o4._rs(a, b)
  },
  createDealerView: function (a, b, c) {
    return new _Tf._E9._2s._o4.Dealer(a, b, c)
  },
  createSceneController: function (a, b, c, d, e) {
    return new _Tf._E9._Un.__0._gl(a, b, c, d, e)
  },
  createBankController: function (a, b, c, d, e, f) {
    return new _Tf._E9._Un._8l._hl(a, b, c, d, e, f)
  },
  createWinTableController: function (a, b, c, d, e) {
    return new _Tf._E9._Un._8l._kr(a, b, c, d, e)
  },
  createTableController: function (a,
    b, c, d, e, f, g) {
    return new _Tf._E9._Un._8l._l7(a, b, c, d, e, f, g)
  },
  createChairController: function (a, b, c, d, e, f, g, h, j, k) {
    return new _Tf._E9._Un._8l._Na(a, b, c, d, e, f, g, h, j, k)
  },
  createTimerController: function (a, b, c, d, e) {
    return new _Tf._E9._Un._8l._D(a, b, c, d, e)
  },
  createDealerButtonController: function (a, b, c, d, e) {
    return new _Tf._E9._Un._8l._nq(a, b, c, d, e)
  },
  createTableMessageController: function (a, b, c) {
    return new _Tf._E9._Un._8l.TableMessage(a, b, c)
  },
  createRankController: function (a, b, c, d, e, f, g) {
    return new _Tf._E9._Un._8l.Rank(a,
      b, c, d, e, f, g)
  },
  createCardHolderController: function (a, b, c, d, e, f, g) {
    return new _Tf._E9._Un._8l._a6(a, b, c, d, e, f, g)
  },
  createCommandController: function (a, b, c, d, e, f, g, h, j) {
    return new _Tf._E9._Un._8l.Command(a, b, c, d, e, f, g, h, j)
  },
  createCommandsController: function (a, b) {
    return new _Tf._E9._Un.__0._Ic(a, b)
  },
  createGameAreaController: function (a, b, c, d, e) {
    return new _Tf._E9._Un._8l.GameArea(a, b, c, d, e)
  },
  createGameAreasController: function (a, b) {
    return new _Tf._E9._Un.__0.GameAreas(a, b)
  },
  createCardController: function (a,
    b, c, d, e) {
    return new _Tf._E9._Un._8l._W2(a, b, c, d, e)
  },
  createChipController: function (a, b, c, d, e, f, g, h, j) {
    return new _Tf._E9._Un._8l._No(a, b, c, d, e, f, g, h, j)
  },
  createPlayerController: function (a, b, c, d, e, f, g, h, j, k) {
    return new _Tf._E9._Un._8l._0q(a, b, c, d, e, f, g, h, j, k)
  },
  createPotChipsController: function (a, b, c, d) {
    return new _Tf._E9._Un._8l._rs(a, b, c, d)
  }
};
_Tf.Factories._Un.BlackJackFactory = function () {
  _Tf.Factories._Un.BlackJackFactory.superclass.apply(this, arguments)
};
extend(_Tf.Factories._Un.BlackJackFactory, _Tf.Factories._Un.PokerFactory);
_Tf.Factories._Un.BlackJackFactory.prototype.createSceneModel = function (a, b, c, d) {
  return new _Tf._U6._Un.__0.BlackJackScene(a, b, c, d)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createShoeModel = function (a) {
  return new _Tf._U6._Un._8l.BlackJackShoe(a)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createChairModel = function (a, b) {
  return new _Tf._U6._Un._8l.BlackJackChair(a, b)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createShoeView = function (a, b, c) {
  return new _Tf._E9._2s._o4.BlackJackShoe(a, b, c)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createChairView = function (a, b, c, d, e, f) {
  return new _Tf._E9._2s._o4.BlackJackChair(a, b, c, d, e, f)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createPlayerView = function (a, b, c, d, e) {
  return new _Tf._E9._2s._o4.BlackJackPlayer(a, b, c, d, e)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createRankView = function (a, b, c, d, e, f) {
  return new _Tf._E9._2s._o4.BlackJackRank(a, b, c, d, e, f)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createCardHolderView = function (a, b, c, d) {
  return new _Tf._E9._2s._o4.BlackJackCardHolder(a, b, c, d)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createCardView = function (a, b, c, d, e) {
  return new _Tf._E9._2s._o4.BlackJackCard(a, b, c, d, e)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createWinTableView = function (a, b, c, d) {
  // console.log("testing five a "+JSON.stringify(a));
  // console.log("testing five b "+JSON.stringify(b));
  // console.log("testing five c "+JSON.stringify(c));
  // console.log("testing five d "+JSON.stringify(d));
  return new _Tf._E9._2s._o4.BlackJackWinTable(a, b, c, d)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createTimerView = function (a, b, c, d) {
  return new _Tf._E9._2s._o4.BlackJackTimer(a, b, c, d)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createTableView = function (a, b, c, d, e) {
  return new _Tf._E9._2s._o4.BlackJackTable(a, b, c, d, e)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createSceneController = function (a, b, c, d, e) {
  return new _Tf._E9._Un.__0.BlackJackScene(a, b, c, d, e)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createChairController = function (a, b, c, d, e, f, g, h, j, k) {
  return new _Tf._E9._Un._8l.BlackJackChair(a, b, c, d, e, f, g, h, j, k)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createTableController = function (a, b, c, d, e, f, g) {
  return new _Tf._E9._Un._8l.BlackJackTable(a, b, c, d, e, f, g)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createShoeController = function (a, b, c, d, e) {
  return new _Tf._E9._Un._8l.BlackJackShoe(a, b, c, d, e)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createCardHolderController = function (a, b, c, d, e, f, g) {
  return new _Tf._E9._Un._8l.BlackJackCardHolder(a, b, c, d, e, f, g)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createPlayerController = function (a, b, c, d, e, f, g, h, j, k) {
  return new _Tf._E9._Un._8l.BlackJackPlayer(a, b, c, d, e, f, g, h, j, k)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createWinTableController = function (a, b, c, d, e) {
  // console.log("testing six  a"+JSON.stringify(a));
  // console.log("testing six  b"+JSON.stringify(b));
  // console.log("testing six  c"+JSON.stringify(c));
  // console.log("testing six  d"+JSON.stringify(d));
  // console.log("testing six  e"+JSON.stringify(e));
  return new _Tf._E9._Un._8l.BlackJackWinTable(a, b, c, d, e)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createCardController = function (a, b, c, d, e, f) {
  return new _Tf._E9._Un._8l.BlackJackCard(a, b, c, d, e, f)
};
_Tf.Factories._Un.BlackJackFactory.prototype.createTimerController = function (a, b, c, d, e) {
  return new _Tf._E9._Un._8l.BlackJackTimer(a, b, c, d, e)
};
_Tf.Factories._Un.BaccaratFactory = function () {
  _Tf.Factories._Un.BaccaratFactory.superclass.apply(this, arguments)
};
extend(_Tf.Factories._Un.BaccaratFactory, _Tf.Factories._Un.PokerFactory);
_Tf.Factories._Un.BaccaratFactory.prototype.createTableModel = function (a, b) {
  return new _Tf._U6._Un._8l.BaccaratTable(a, b)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createCardHolderModel = function () {
  return new _Tf._U6._Un._8l.BaccaratCardHolder
};
_Tf.Factories._Un.BaccaratFactory.prototype.createSceneModel = function (a, b, c, d) {
  return new _Tf._U6._Un.__0.BaccaratScene(a, b, c, d)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createChairModel = function (a, b) {
  return new _Tf._U6._Un._8l.BaccaratChair(a, b)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createShoeModel = function (a) {
  return new _Tf._U6._Un._8l.BlackJackShoe(a)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createChairView = function (a, b, c, d, e, f) {
  return new _Tf._E9._2s._o4.BaccaratChair(a, b, c, d, e, f)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createTableView = function (a, b, c, d, e) {
  return new _Tf._E9._2s._o4.BaccaratTable(a, b, c, d, e)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createCardHolderView = function (a, b, c) {
  return new _Tf._E9._2s._o4.BaccaratCardHolder(a, b, c)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createRankView = function (a, b, c, d) {
  return new _Tf._E9._2s._o4.BaccaratRank(a, b, c, d)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createShoeView = function (a, b, c) {
  return new _Tf._E9._2s._o4.BlackJackShoe(a, b, c)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createPlayerView = function (a, b, c, d, e) {
  return new _Tf._E9._2s._o4.BaccaratPlayer(a, b, c, d, e)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createWinTableView = function (a, b, c, d) {
  return new _Tf._E9._2s._o4.BaccaratWinTable(a, b, c, d)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createTimerView = function (a, b, c, d) {
  return new _Tf._E9._2s._o4.BaccaratTimer(a, b, c, d)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createPlayerController = function (a, b, c, d, e, f, g, h, j, k) {
  return new _Tf._E9._Un._8l.BaccaratPlayer(a, b, c, d, e, f, g, h, j, k)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createTableController = function (a, b, c, d, e, f, g) {
  return new _Tf._E9._Un._8l.BaccaratTable(a, b, c, d, e, f, g)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createCardHolderController = function (a, b, c, d) {
  return new _Tf._E9._Un._8l.BaccaratCardHolder(a, b, c, d)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createRankController = function (a, b, c, d, e) {
  return new _Tf._E9._Un._8l.BaccaratRank(a, b, c, d, e)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createSceneController = function (a, b, c, d, e) {
  return new _Tf._E9._Un.__0.BaccaratScene(a, b, c, d, e)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createChairController = function (a, b, c, d, e, f, g, h, j, k) {
  return new _Tf._E9._Un._8l.BaccaratChair(a, b, c, d, e, f, g, h, j, k)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createTableController = function (a, b, c, d, e, f, g) {
  return new _Tf._E9._Un._8l.BaccaratTable(a, b, c, d, e, f, g)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createShoeController = function (a, b, c, d, e) {
  return new _Tf._E9._Un._8l.BlackJackShoe(a, b, c, d, e)
};
_Tf.Factories._Un.BaccaratFactory.prototype.createTimerController = function (a, b, c, d, e) {
  return new _Tf._E9._Un._8l.BaccaratTimer(a, b, c, d, e)
};
_Tf.Factories._Un.PaigowFactory = function () {
  _Tf.Factories._Un.PaigowFactory.superclass.apply(this, arguments)
};
extend(_Tf.Factories._Un.PaigowFactory, _Tf.Factories._Un.PokerFactory);
_Tf.Factories._Un.PaigowFactory.prototype.createSceneModel = function (a, b, c, d) {
  return new _Tf._U6._Un.__0.PaigowScene(a, b, c, d)
};
_Tf.Factories._Un.PaigowFactory.prototype.createChairModel = function (a, b) {
  return new _Tf._U6._Un._8l.PaigowChair(a, b)
};
_Tf.Factories._Un.PaigowFactory.prototype.createDealerCardHolderModel = function () {
  return new _Tf._U6._Un._8l.BaccaratCardHolder
};
_Tf.Factories._Un.PaigowFactory.prototype.createPlayerView = function (a, b, c, d, e) {
  return new _Tf._E9._2s._o4.PaigowPlayer(a, b, c, d, e)
};
_Tf.Factories._Un.PaigowFactory.prototype.createChairView = function (a, b, c, d, e, f) {
  return new _Tf._E9._2s._o4.PaigowChair(a, b, c, d, e, f)
};
_Tf.Factories._Un.PaigowFactory.prototype.createDealerCardHolderView = function (a, b, c, d) {
  return new _Tf._E9._2s._o4.PaigowDealerCardHolder(a, b, c, d)
};
_Tf.Factories._Un.PaigowFactory.prototype.createDealerCardView = function (a, b, c, d, e) {
  return new _Tf._E9._2s._o4.PaigowDealerCard(a, b, c, d, e)
};
_Tf.Factories._Un.PaigowFactory.prototype.createCardView = function (a, b, c, d, e) {
  return new _Tf._E9._2s._o4.PaigowCard(a, b, c, d, e)
};
_Tf.Factories._Un.PaigowFactory.prototype.createTimerView = function (a, b, c, d) {
  return new _Tf._E9._2s._o4.PaigowTimer(a, b, c, d)
};
_Tf.Factories._Un.PaigowFactory.prototype.createWinTableView = function (a, b, c, d) {
  return new _Tf._E9._2s._o4.PaigowWinTable(a, b, c, d)
};
_Tf.Factories._Un.PaigowFactory.prototype.createTableController = function (a, b, c, d, e, f, g) {
  return new _Tf._E9._Un._8l.PaigowTable(a, b, c, d, e, f, g)
};
_Tf.Factories._Un.PaigowFactory.prototype.createSceneController = function (a, b, c, d, e) {
  return new _Tf._E9._Un.__0.PaigowScene(a, b, c, d, e)
};
_Tf.Factories._Un.PaigowFactory.prototype.createBankController = function (a, b, c, d, e, f) {
  return new _Tf._E9._Un._8l.PaigowBank(a, b, c, d, e, f)
};
_Tf.Factories._Un.PaigowFactory.prototype.createDealerCardHolderController = function (a, b, c, d) {
  return new _Tf._E9._Un._8l.PaigowDealerCardHolder(a, b, c, d)
};
_Tf.Factories._Un.PaigowFactory.prototype.createCardController = function (a, b, c, d, e, f) {
  return new _Tf._E9._Un._8l.PaigowCard(a, b, c, d, e, f)
};
_Tf.Factories._Un.PaigowFactory.prototype.createDealerCardController = function (a, b, c, d, e, f) {
  return new _Tf._E9._Un._8l.PaigowDealerCard(a, b, c, d, e, f)
};
_Tf.Factories._Un.PaigowFactory.prototype.createChairController = function (a, b, c, d, e, f, g, h, j, k) {
  return new _Tf._E9._Un._8l.PaigowChair(a, b, c, d, e, f, g, h, j, k)
};
_Tf.Factories._Un.PaigowFactory.prototype.createTimerController = function (a, b, c, d, e) {
  return new _Tf._E9._Un._8l.PaigowTimer(a, b, c, d, e)
};
_Tf.Factories._Un.PaigowFactory.prototype.createWinTableController = function (a, b, c, d, e) {
  // console.log("testing seven  a"+JSON.stringify(a));
  // console.log("testing seven  b"+JSON.stringify(b));
  // console.log("testing seven  c"+JSON.stringify(c));
  // console.log("testing seven  d"+JSON.stringify(d));
  // console.log("testing seven  e"+JSON.stringify(e));
  return new _Tf._E9._Un._8l.BlackJackWinTable(a, b, c, d, e)
};
_Tf.Factories._Un.CrapsFactory = function () {
  _Tf.Factories._Un.CrapsFactory.superclass.apply(this, arguments)
};
extend(_Tf.Factories._Un.CrapsFactory, _Tf.Factories._Un.PokerFactory);
_Tf.Factories._Un.CrapsFactory.prototype.createSceneModel = function (a, b, c, d) {
  return new _Tf._U6._Un.__0.CrapsScene(a, b, c, d)
};
_Tf.Factories._Un.CrapsFactory.prototype.createChairModel = function (a, b) {
  return new _Tf._U6._Un._8l.PaigowChair(a, b)
};
_Tf.Factories._Un.CrapsFactory.prototype.createDiceModel = function (a) {
  return new _Tf._U6._Un._8l.CrapsDice(a)
};
_Tf.Factories._Un.CrapsFactory.prototype.createDealerCardHolderModel = function () {
  return null
};
_Tf.Factories._Un.CrapsFactory.prototype.createTableModel = function (a, b) {
  return new _Tf._U6._Un._8l.CrapsTable(a, b)
};
_Tf.Factories._Un.CrapsFactory.prototype.createCommandView = function (a, b, c, d, e, f, g, h, j, k) {
  return new _Tf._E9._2s._o4.CrapsCommand(a, b, c, d, e, f, g, h, j, k)
};
_Tf.Factories._Un.CrapsFactory.prototype.createPlayerView = function (a, b, c, d, e) {
  return new _Tf._E9._2s._o4.CrapsPlayer(a, b, c, d, e)
};
_Tf.Factories._Un.CrapsFactory.prototype.createChairView = function (a, b, c, d, e, f) {
  return new _Tf._E9._2s._o4.CrapsChair(a, b, c, d, e, f)
};
_Tf.Factories._Un.CrapsFactory.prototype.createDealerCardHolderView = function (a, b, c, d) {
  return new _Tf._E9._2s._o4.PaigowDealerCardHolder(a, b, c, d)
};
_Tf.Factories._Un.CrapsFactory.prototype.createDealerCardView = function (a, b, c, d, e) {
  return new _Tf._E9._2s._o4.PaigowDealerCard(a, b, c, d, e)
};
_Tf.Factories._Un.CrapsFactory.prototype.createDiceView = function (a, b, c) {
  return new _Tf._E9._2s._o4.CrapsDice(a, b, c)
};
_Tf.Factories._Un.CrapsFactory.prototype.createTimerView = function (a, b, c, d) {
  return new _Tf._E9._2s._o4.CrapsTimer(a, b, c, d)
};
_Tf.Factories._Un.CrapsFactory.prototype.createWinTableView = function (a, b, c, d) {
  return new _Tf._E9._2s._o4.CrapsWinTable(a, b, c, d)
};
_Tf.Factories._Un.CrapsFactory.prototype.createDealerView = function (a, b, c) {
  return new _Tf._E9._2s._o4.CrapsDealer(a, b, c)
};
_Tf.Factories._Un.CrapsFactory.prototype.createTableView = function (a, b, c, d, e) {
  return new _Tf._E9._2s._o4.CrapsTable(a, b, c, d, e)
};
_Tf.Factories._Un.CrapsFactory.prototype.createTableController = function (a, b, c, d, e, f, g) {
  return new _Tf._E9._Un._8l.CrapsTable(a, b, c, d, e, f, g)
};
_Tf.Factories._Un.CrapsFactory.prototype.createPlayerController = function (a, b, c, d, e, f, g, h, j, k) {
  return new _Tf._E9._Un._8l.CrapsPlayer(a, b, c, d, e, f, g, h, j, k)
};
_Tf.Factories._Un.CrapsFactory.prototype.createSceneController = function (a, b, c, d, e) {
  return new _Tf._E9._Un.__0.CrapsScene(a, b, c, d, e)
};
_Tf.Factories._Un.CrapsFactory.prototype.createBankController = function (a, b, c, d, e, f) {
  return new _Tf._E9._Un._8l.PaigowBank(a, b, c, d, e, f)
};
_Tf.Factories._Un.CrapsFactory.prototype.createDealerCardHolderController = function (a, b, c, d) {
  return new _Tf._E9._Un._8l.PaigowDealerCardHolder(a, b, c, d)
};
_Tf.Factories._Un.CrapsFactory.prototype.createDiceController = function (a, b, c, d) {
  return new _Tf._E9._Un._8l.CrapsDice(a, b, c, d)
};
_Tf.Factories._Un.CrapsFactory.prototype.createDealerCardController = function (a, b, c, d, e, f) {
  return new _Tf._E9._Un._8l.PaigowDealerCard(a, b, c, d, e, f)
};
_Tf.Factories._Un.CrapsFactory.prototype.createChairController = function (a, b, c, d, e, f, g, h, j, k, l) {
  return new _Tf._E9._Un._8l.CrapsChair(a, b, c, d, e, f, g, h, j, k, l)
};
_Tf.Factories._Un.CrapsFactory.prototype.createTimerController = function (a, b, c, d, e) {
  return new _Tf._E9._Un._8l.CrapsTimer(a, b, c, d, e)
};
_Tf.Factories._Un.CrapsFactory.prototype.createWinTableController = function (a, b, c, d, e) {
  return new _Tf._E9._Un._8l._kr(a, b, c, d, e)
};
_Xl.CordovaOAuth = {
  shortName: "module.cordova-oauth"
};
_Tf._hr.extendObject(SandBoxObject, _Xl.CordovaOAuth);
_Xl.CordovaOAuth._co = function () { };
_Xl.CordovaOAuth._co.prototype = {
  JSOController: null,
  extractClasses: function () { },
  initialize: function () {
    this.JSOController = new Sandbox._E9._Y3.JSO
  },
  subscribeToEvents: function () {
    _Mf._ks.addListener(_Ag._3r, function () {
      var a = this.JSOController;
      LazyLoad.js(_Xl.CordovaOAuth._gc.LibraryJSO, function () {
        a.initializeAction()
      })
    }, this);
    _Mf._ks.addListener(_Xl._yn._dc._Ag.CURRENT_CLIENT_LOGOUT, function (a, b) {
      this.JSOController._Z4(a, b)
    }, this)
  }
};
_Xl.CordovaOAuth._dc._Ag = {
  CONFIGURE_OAUTH: "configure-oauth",
  CLEAR_TOKENS: "clear-tokens"
};
_Xl.CordovaOAuth._a.JSO = function () {
  this.currentProvider = null
};
_Xl.CordovaOAuth._a.JSO.prototype = {
  currentProvider: null,
  inAppBrowserInstance: null,
  initializeAction: function () {
    var a = this;
    jso_registerRedirectHandler(function (b) {
      a.showWebPageAction(b)
    });
    var b = {};
    _Mf._ks.emit(_Xl.CordovaOAuth._dc._Ag.CONFIGURE_OAUTH, [b]);
    jso_configure(b)
  },
  _Z4: function (a, b) {
    _Mf._ks.emit(_Xl.CordovaOAuth._dc._Ag.CLEAR_TOKENS, [a, b]);
    jso_wipe()
  },
  authorizeAction: function (a, b, c, d, e) {
    if (a && b && c && d) this.currentProvider = a, jso_wipe(), $.oajax({
      url: b,
      jso_provider: a,
      jso_scopes: c,
      jso_allowia: !0,
      dataType: "json",
      timeout: 15E3,
      success: function (b) {
        b = b || {};
        b.accessToken = jso_getToken(a);
        "function" === typeof d && d(b)
      },
      error: e
    })
  },
  executeAction: function (a, b, c, d, e, f) {
    a && b && c && $.oajax({
      url: b,
      type: f || "post",
      data: d || {},
      jso_provider: a,
      jso_scopes: c,
      jso_allowia: !0,
      dataType: "json",
      success: function (a) {
        a = a || {};
        "function" === typeof e && e(a)
      }
    })
  },
  showAndCloseDialogAction: function (a, b, c, d) {
    this.showDialogAction(a, b, c, d);
    setTimeout(this.closeWebPage, 0)
  },
  showDialogAction: function (a, b) {
    if (a) {
      var c = this.getQueryString(b);
      this.inAppBrowserInstance = window.open(a + c, "_blank", "hidden=yes")
    }
  },
  showShareDialogAction: function (a, b, c) {
    if (a) {
      var b = this.getQueryString(b),
        d = window.open(a + b, "_blank", "location=no");
      d.addEventListener("loadstart", function (a) {
        a = a.url.substring(a.url.indexOf("?") + 1);
        a = a.replace("#_=_", "");
        if (a == _Xl._Af._0l.redirectURI) d.close();
        else {
          var a = a.parseQueryString(),
            b = null;
          a.post_id && (b = {
            post_id: a.post_id
          });
          b && (c && c(b), d.close())
        }
      })
    }
  },
  showInviteDialog: function (a, b, c) {
    if (a) {
      var b = this.getQueryString(b),
        d = window.open(a + b, "_blank", "location=no");
      d.addEventListener("loadstart", function (a) {
        var a = a.url.substring(a.url.indexOf("?") + 1),
          a = a.replace("#_=_", ""),
          a = a.parseQueryString(),
          b = null;
        if (a.request) {
          var b = [],
            g;
          for (g in a) a.hasOwnProperty(g) && 0 == g.indexOf("to") && b.push(a[g]);
          b = {
            request: a.request,
            to: b
          }
        } else a.error_code && (b = {
          error_code: a.error_code,
          error_message: a.error_message
        });
        b && (c && c(b), d.close())
      })
    }
  },
  showWebPageAction: function (a) {
    var b = this;
    this.inAppBrowserInstance = window.open(a, "_blank", "location=no");
    this.inAppBrowserInstance.addEventListener("loadstart",

      function (c) {
        b.currentProvider && (a = decodeURIComponent(c.url), jso_checkfortoken(b.currentProvider, c.url, function () {
          b.closeWebPage()
        }))
      });
    this.inAppBrowserInstance.addEventListener("exit", function () {
      b.currentProvider && !jso_getToken(b.currentProvider) && _Mf._ks.emitAsync(_Ag._sc, [""])
    })
  },
  closeWebPage: function () {
    this.inAppBrowserInstance && this.inAppBrowserInstance.close()
  },
  getQueryString: function (a) {
    var b = "";
    if ("object" === typeof a) {
      var b = b + "?",
        c;
      for (c in a) a.hasOwnProperty(c) && (0 < b.length && (b += "&"), b += c + "=" + a[c])
    }
    return encodeURI(b)
  }
};
_Xl.CordovaOAuth._gc = {};
_Xl.CordovaOAuth._gc.LibraryJSO = ["library/jso.js"];
_Xl._br = {
  shortName: "module.social-base"
};
_Tf._hr.extendObject(SandBoxObject, _Xl._br);
_Xl._br._0l.customProfileFields = '"id", "name", "balance", "avatar", "level", "biggestPotWon", "bestHand", "recentAchievements", "isFriend", "bestHandName"';
_Xl._br._0l._xj = {
  socialFeaturesService: {
    address: "http://test.vegasgames.com/service/index.php/service"
  }
};
_Xl._br._0l.appType = "free";
_Xl._br._0l.autoClosedTime = 4E3;
_Xl._br._0l._gc = {
  _68: ""
};
_Xl._br._0l._N1 = {
  SOCIAL_DIALOG: "#social-dialog",
  SOCIAL_DIALOG_BUTTON: "#social-dialog-button",
  SOCIAL_DIALOG_BUTTON_CLOSE: "#social-dialog-button-close"
};
_Xl._br._0l._N1._ff = {
  PROFILE_OVERVIEW: "profile-overview",
  PROFILE_STATUS: "profile-status",
  PROFILE_RECENT: "profile-recent",
  PROFILE_INVENTORY: "profile-inventory",
  PROFILE_ACHIEVEMENTS: "profile-achievements",
  PROFILE_EDIT_NAME: "profile-edit-name"
};
_Xl._br._h8._wc._an = {
  init: function () {
    _h8._wc._an.WON_CARD_IMAGE = '<img src="{src}" class="profile-best-hand-card" />';
    _h8._wc._an.BEST_HAND_EMPTY = "-----";
    _h8._wc._an.BEST_HAND_MINI_PROFILE = '<div class="profile-mini-card profile-mini-card-{index}"><img src={src}/></div>';
    _h8._wc._an.SHORT_SOCIAL_DIALOG = '<div id={id} value={value} type="{type}" class="social-dialog social-dialog-{position}">\n\t\t\t<div class="confirm-popup">\n\t\t\t\t<div class="confirm-textarea">\n\t\t\t\t\t<table width="100%">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>{text}</td>\n\t\t\t\t\t\t\t<td width="20%">\n\t\t\t\t\t\t\t\t<div class="enterra-button" style="width: 100%;">\n\t\t\t\t\t\t\t\t\t<a href="" data-role="button" class="cancel-button" id="{idbuttonClose}" data-inline="true">{buttonClose}</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div class="confirm-data">{data}</div>\n\t\t\t\t<div class="confirm-buttons">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>';
    _h8._wc._an.SOCIAL_DIALOG_BUTTON = '<div class="enterra-button" style="display: inline-table;">\n\t\t\t<a href="" data-role="button" id="{id}" data-inline="true">{text}</a>\n\t\t</div>';
    _h8._wc._an.PLAYER_INFO = '<div style="display: inline-block;"><img src="design/Enterra/images/player.png" width="60em"></img></div>\n\t\t\t\t\t<div style="display: inline-block;">{text}</div>';
    _h8._wc._an.prepareSocialDialog = function (a, b) {
      return b
    }
  }
};
_Xl._br._dc.ClientEventType = {
  _fq: "login",
  LEARN: "learn"
};
_Xl._br._dc.CustomTextMessageType = {
  POKER_GIFT_TO_PLAYERS: 2,
  POKER_EMOTICON_CHANGED: 3,
  POKER_EXPERIENCE: 4,
  PRIVATE_MESSAGE: 5,
  ACHIEVEMENT_BONUS: 6,
  GIFT: 7,
  PROFILE_CHANGED: 8,
  TABLE_PROPERTIES_CHANGED: 9,
  MESSAGE_SHOW_VIDEO: 10,
  POKER_BUY_ITEMS: 11,
  POKER_REFUND_ITEMS: 12,
  POKER_LEVEL: 13,
  TOURNAMENT_ACHIEVEMENTS: 14,
  PAID_PLAYER_EXTRAS: 15,
  REGISTRATION_BONUS: 16
};
_Xl._br._dc._Ag = {
  PLAYER_INFO_DIALOG: "player-info-dialog",
  SOCIAL_MESSAGE: "social-message",
  CUSTOM_MESSAGE: "custom-message",
  PLAYER_PUBLIC_PROFILE_PAGE: "public-profile-page",
  CLIENT_READY: "client-ready",
  CLIENT_DISCONNECTED_FROM_SOCIAL_SERVICE: "client-disconnected",
  NEED_REFRESH_PLAYER_INFO: "need-refresh-player-info",
  PAID_PLAYER_BONUS: "paid-player-bonus",
  GIFT_IMAGES_LOADED: "gift-images-loaded",
  REGISTRATION_BONUS: "registration-bonus"
};
_Xl._br._dc.ResultCode = {
  _w: 0,
  _I8: 1,
  FRIEND_HIMSELF: 2,
  ALREADY_FRIENDS: 3,
  ARE_NOT_FRIENDS: 4,
  GIFT_NOT_FOUND: 5,
  NOT_ENOUGH_MONEY: 6,
  NO_PLAYERS_TO_GIFT: 7,
  MESSAGE_NOT_FOUND: 8,
  REDEEM_CODE_NOT_FOUND: 9,
  EMOTICON_NOT_FOUND: 10,
  TOKEN_NOT_FOUND: 11,
  LOTTERY_EXPIRED: 12,
  LOTTERY_PLAYED: 13,
  BONUS_EXPIRED: 14,
  BONUS_NOT_READY: 15,
  PLAYER_NOT_FOUND: 16,
  INVALID_PASSWORD: 17,
  GIFT_BUY_LIMIT_EXCEEDED: 18,
  COULD_NOT_USE_GIFT: 19,
  PLAYER_ALREADY_HAS_GIFT: 22,
  AUTH_FAILED: 1E3
};
_Xl._br._M4._9._Kf = function () {
  _Xl._br._M4._9._Kf.superclass.apply(this, arguments)
};
extend(_Xl._br._M4._9._Kf, _Tf._M4._9._Kf);
_Xl._br._M4._9._Kf.prototype.subscribers = {
  customProfileHandler: function (a, b) {
    _Xl._br._hj._gb._cn(a, b)
  },
  _i3: function (a, b) {
    _Xl._br._hj._38._Ik(a, b)
  },
  _9m: function (a) {
    _Xl._br._hj._gb._e5(a)
  },
  _Cm: function (a) {
    _Xl._br._hj._gb._v6(a)
  },
  _qm: function (a) {
    _Xl._br._hj._38._Wr(a)
  },
  _df: function (a, b) {
    _Xl._br._hj._gb._o7(a, b)
  },

  profileOverviewHandle: function (a, b) {
    //   console.log("a " + JSON.stringify(a))
    //   console.log("b " + JSON.stringify(b))
    _Xl._br._hj._gb._Fl(a, b)
  },

  sendChipsHandler: function (a) {
    _Xl._br._hj._gb.onSendChips(a)
  }

};
_Xl._br._M4._9._Kf.prototype._6g = function () {
  var a = this.messageTypes;
  // console.log("getvalue " + JSON.stringify(a));
  // console.log("getvalue PROFILE_OVERVIEW" + JSON.stringify(a.PROFILE_OVERVIEW)); //Profile.getProfileInfo.checkProfileOnServices
  this.callbacksMap[a.CUSTOM_PROFILE] = this.subscribers.customProfileHandler;
  this.callbacksMap[a.GET_FIRST_MESSAGE] = this.subscribers._9m;
  this.callbacksMap[a.READ_MESSAGE] = this.subscribers._Cm;
  this.callbacksMap[a.PUBLIC_PROFILE_INFO] = this.subscribers._i3;
  this.callbacksMap[a.PLAYER_SOCIAL_PROFILE_SHORT] = this.subscribers._df;
  this.callbacksMap[a.CHANGE_DISPLAY_NAME] = this.subscribers._qm;
  this.callbacksMap[a.PROFILE_OVERVIEW] = this.subscribers.profileOverviewHandle;
  this.callbacksMap[a.SEND_CHIPS] = this.subscribers.sendChipsHandler
};
_Xl._br._M4._20._Kf = function (a, b, c) {
  _Xl._br._M4._20._Kf.superclass.apply(this, arguments);
  this._cachedClientType = null;
  this.appType = "undefined" !== typeof _Xl._br._0l.appType ? _Xl._br._0l.appType : null
};
extend(_Xl._br._M4._20._Kf, _Tf._M4._20._Kf);
_Xl._br._M4._20._Kf.prototype._Cs = function (a, b) {
  var c = {
    id: b.id,
    params: b.data,
    auth: _Xl._br._hj.Data.auth,
    appType: this.appType
  }, d = a.split(".");
  null === this._cachedClientType && this.cacheClientType();
  if (2 <= d.length) c.service = d[0], c.method = d[1], c.clientType = this._cachedClientType;
  return c
};
_Xl._br._M4._20._Kf.prototype.cacheClientType = function () {
  this._cachedClientType = "html5.";
  this._cachedClientType = "Default" === _Mf._Ta._Iq ? this._cachedClientType + "ipad" : this._cachedClientType + "iphone";
  this._cachedClientType = this._cachedClientType.toLowerCase()
};
_Xl._br._M4._20._Kf.prototype.send = function (a, b, c) {
  _Mf._L2._oa() || this.base.send.apply(this, arguments)
};
_Xl._br._M4._20._Kf.prototype._i0 = function () {
  return this.connectionConfig.address
};
_Xl._br._N1 = {};
_Xl._br.currentOpenMiniProfile = null;
_Xl._br._N1.showSocialDialog = function (a, b, c, d, e, f, g, h) {
  var j = _Xl._br._0l._N1,
    e = e || "center",
    f = f || !1,
    h = h || function () { }, k = ("" + Math.random()).substr(2);
  $(j.SOCIAL_DIALOG_BUTTON_CLOSE + k).live(EventType._qc, function () {
    _Xl._br._N1.hideSocialDialog({
      hashConfirmForm: k,
      closeHandler: h
    })
  });
  for (var l = ["registerBonus", "feedBack"], n = !1, m = 0; m < l.length; m++) b === l[m] && (n = !0);
  n || ("profile" != b ? setTimeout(_Xl._br._N1.hideSocialDialog.bind(_Xl._br._N1, {
    hashConfirmForm: k,
    closeHandler: h
  }), _Xl._br._0l.autoClosedTime) : (null != this.currentOpenMiniProfile && _Xl._br._N1.hideSocialDialog({
    hashConfirmForm: this.currentOpenMiniProfile,
    closeHandler: h
  }), this.setCurrentMIniProfile(k)));
  l = null;
  l = "undefined" === typeof g || !g ? "registerBonus" != b ? _h8._wc._an.prepareSocialDialog(b, _h8._wc._an.SHORT_SOCIAL_DIALOG) : _h8._wc._an.prepareSocialDialog(b, _h8._wc._an.SHORT_SOCIAL_WELCOME_DIALOG) : _h8._wc._an.prepareSocialDialogForSpecifiedImage(b, _h8._wc._an.SHORT_SOCIAL_DIALOG, g);
  _Tf._N1._c6("#" + _Mf._Md.getVisiblePage(), l.fill({
    text: c,
    type: b,
    value: a,
    data: d,
    buttonClose: _Tf._41.$("_06"),
    id: j.SOCIAL_DIALOG.substr(1) + k,
    idbuttonClose: j.SOCIAL_DIALOG_BUTTON_CLOSE.substr(1) + k,
    position: e,
    isHide: !f ? "none" : "block"
  }));
  return k
};
_Xl._br._N1.setCurrentMIniProfile = function (a) {
  this.currentOpenMiniProfile = a
};
_Xl._br._N1.hideSocialDialog = function (a) {
  var b = $(_Xl._br._0l._N1.SOCIAL_DIALOG + a.hashConfirmForm);
  "profile" == b.attr("type") && this.setCurrentMIniProfile(null);
  if (0 !== b.length) try {
    b.remove(), a.closeHandler()
  } catch (c) { }
};
_Xl._br._N1.addButtonToSocialDialog = function (a, b, c) {
  var d = _Xl._br._0l._N1,
    e = _Tf._41,
    b = b || e.$("_j3._B0"),
    c = c || function () { }, e = ("" + Math.random()).substr(2);
  $(d.SOCIAL_DIALOG_BUTTON + e + a).live(EventType._qc, function () {
    try {
      c(), $(d.SOCIAL_DIALOG + a).remove()
    } catch (b) { }
  });
  _Tf._N1._c6(d.SOCIAL_DIALOG + a + " div.confirm-buttons", _h8._wc._an.SOCIAL_DIALOG_BUTTON.fill({
    id: d.SOCIAL_DIALOG_BUTTON.substr(1) + e + a,
    text: b
  }))
};
_Xl._br._N1.showSocialDialogWithPlayerAvatar = function (a, b, c, d, e, f, g) {
  var h = _Xl._br._N1.showSocialDialog(a, b, c, _h8._wc._an.PLAYER_INFO.fill({
    text: d
  }), e, f, g);
  _Tf._Hc._ad.loadAvatarByUrl(a, !1, function (a) {
    var b = $(_Xl._br._0l._N1.SOCIAL_DIALOG + h + " img");
    if (b && b.length) b.get(0).src = a
  });
  return h
};
_Xl._br._N1.showSocialDialogWithPlayerInfo = function (a, b, c, d, e, f, g) {
  a = _Xl._br._N1.showSocialDialogWithPlayerAvatar(a, "profile", b, c, d, e, g);
  _Mf._ks.emitAsync(_Xl._br._dc._Ag.PLAYER_INFO_DIALOG, [a, f]);
  return a
};
_me.miniProfile = new function () {
  this.details = ko.observable(null);
  this.setDetails = function (a) {
    this.details(a);
    this.name(a.name);
    this.level(a.level);
    this.balance(_Tf._Ek._29._ca(a.balance, _Tf._dc.MoneyType._i4));
    this.realBalance(_Tf._Ek._29._ca(a.realBalance, _Tf._dc.MoneyType._Ok));
    this.biggestPotWon(_Tf._Ek._29._ca(a.biggestPotWon, _Tf._dc.MoneyType._i4, !0));
    this.avatarSrc(_Tf._0l._A._Nc._0q);
    a.avatar && a.avatar.normal && this.avatarSrc(a.avatar.normal);
    this.isFriend(a.isFriend || a.id == _Mf._L2._d1());
    this.bestHand(a.bestHand)
  };
  this.name = ko.observable("");
  this.balance = ko.observable(0);
  this.realBalance = ko.observable(0);
  this.level = ko.observable(0);
  this.biggestPotWon = ko.observable(0);
  this.avatarSrc = ko.observable(_Tf._0l._A._Nc._0q);
  this.bestHand = ko.observableArray([]);
  this.bestHandName = ko.computed(function () {
    return !this.details() || !this.details().bestHandName ? "" : _Tf._41.$("_q8")[this.details().bestHandName]
  }.bind(this));
  this.recentAchievementSrc = ko.observable(null);
  this.recentAchievementName = ko.observable(null);
  this.isFriend = ko.observable(!1);
  this.closeDialog = function () { };
  this.sendGift = function () { };
  this.addBuddy = function () { };
  this.proTip = function () { }
}(_me, _Xl._br._0l);
_Xl._br._Ek._Fm._bf._Fi = function (a, b) {
  _Xl._br._Ek._Fm._bf._Fi.superclass.apply(this, arguments)
};
extend(_Xl._br._Ek._Fm._bf._Fi, _Tf._Ek._Fm._bf._X6);
_Xl._br._Ek._Fm._bf._Fi._ff = _Xl._br._0l._N1._ff.PROFILE_ACHIEVEMENTS;
_Xl._br._Ek._Fm._bf._Fi.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : !_Xl._br._hj.checkConnectionToSocialService() ? !1 : !0
};
_Xl._br._Ek._Fm._bf._Fi.prototype._G1 = function () {
  this.base._G1.apply(this, arguments) && _Xl._7a && _Xl._7a._hj && (_Xl._7a._hj._Ac._fd(), _Xl._7a._hj._Ac.getTournamentAchievementsListAction())
};
_Xl._br._Ek._Fm._bf._Fi.prototype._Sr = function (a) {
  this.base._Sr.apply(this, arguments) && _Xl._7a && (_me.achievements.achievementsList.set([]), _me.achievements.tournamentAchievementsList.set([]))
};
_Xl._br._Ek._Fm._bf._Fi.prototype._Q = function (a) {
  if (!1 === this.base._Q.apply(this, arguments)) return !1;
  var b = _Xl._br._0l._N1._ff;
  return !b ? !0 : a === b.PROFILE_OVERVIEW || a === b.PROFILE_INVENTORY || a === b.PROFILE_RECENT || a === b.PROFILE_STATUS ? !1 : !0
};
_Xl._br._Ek._Fm._bf._Fi.prototype._t6 = function () {
  if (!this.base._t6.apply(this, arguments)) return !1;
  _me.achievements.isShowLoadMore(!0);
  _me.achievements.achievementsList.setRefreshHandler(_Mf._Md._E8.bind(_Mf._Md));
  return !0
};
_Xl._br._Ek._Fm._bf._Fi.prototype._jp = function (a) {
  if (!this.base._jp.apply(this, arguments)) return !1;
  _me.achievements.achievementsList.removeRefreshHandler();
  return !0
};
_Xl._br._Ek._Fm._bf._Fi.prototype.onScrollPullDown = function () {
  _me.achievements.isShowLoadMore(!0)
};
_Xl._br._Ek._Fm._bf._1e = function (a, b) {
  _Xl._br._Ek._Fm._bf._1e.superclass.apply(this, arguments)
};
extend(_Xl._br._Ek._Fm._bf._1e, _Tf._Ek._Fm._bf._X6);
_Xl._br._Ek._Fm._bf._1e._ff = _Xl._br._0l._N1._ff.PROFILE_EDIT_NAME;
_Xl._br._Ek._Fm._bf._1e.prototype._G1 = function () {
  this.base._G1.apply(this, arguments) && _me.publicProfile.editName(_me.publicProfile.name())
};
_Xl._br._Ek._Fm._bf._8o = function (a, b) {
  _Xl._br._Ek._Fm._bf._8o.superclass.apply(this, arguments)
};
extend(_Xl._br._Ek._Fm._bf._8o, _Tf._Ek._Fm._bf._X6);
_Xl._br._Ek._Fm._bf._8o._ff = _Xl._br._0l._N1._ff.PROFILE_INVENTORY;
_Xl._br._Ek._Fm._bf._8o.prototype._G1 = function () {
  if (this.base._G1.apply(this, arguments) && _Xl._Vn && _Xl._Vn._hj) {
    _me.gifts.goToFirstPageOfOwnedGifts();
    var a = _Xl._Vn._dc.GiftKind,
      b;
    for (b in a) a.hasOwnProperty(b) && _Xl._Vn._hj._Le._7n(a[b])
  }
};
_Xl._br._Ek._Fm._bf._8o.prototype._Sr = function (a) {
  this.base._Sr.apply(this, arguments) && _Xl._Vn && _Xl._Vn._hj && (_Xl._Vn._hj._Le._Ed(), _Xl._Vn._hj._Le.clearAllOwnGiftsActions())
};
_Xl._br._Ek._Fm._bf._8o.prototype._Q = function (a) {
  if (!1 === this.base._Q.apply(this, arguments)) return !1;
  var b = _Xl._br._0l._N1._ff;
  return !b ? !0 : a === b.PROFILE_OVERVIEW || a === b.PROFILE_ACHIEVEMENTS || a === b.PROFILE_RECENT || a === b.PROFILE_STATUS ? !1 : !0
};
_Xl._br._Ek._Fm._bf._8o.prototype.onScrollPullDown = function () {
  var a = _me.gifts.ownedGiftsByKind[_me.gifts.currentOwnedGiftKind()];
  a.hasMorePages() && (a.growPage(), a.update())
};
_Xl._br._Ek._Fm._bf._8o.prototype._t6 = function () {
  if (!this.base._t6.apply(this, arguments)) return !1;
  _me.gifts.currentInventoryPage(_Xl._Vn._dc.GiftKind.GIFT_VIRTUAL);
  _me.gifts.ownedGiftsByKind[_me.gifts.currentOwnedGiftKind()].setRefreshHandler(_Mf._Md._E8.bind(_Mf._Md));
  return !0
};
_Xl._br._Ek._Fm._bf._8o.prototype._jp = function (a) {
  if (!this.base._jp.apply(this, arguments)) return !1;
  _me.gifts.ownedGiftsByKind[_me.gifts.currentOwnedGiftKind()].removeRefreshHandler();
  return !0
};
_Xl._br._Ek._Fm._bf._3l = function (a, b) {
  _Xl._br._Ek._Fm._bf._3l.superclass.apply(this, arguments)
};
extend(_Xl._br._Ek._Fm._bf._3l, _Tf._Ek._Fm._bf._X6);
_Xl._br._Ek._Fm._bf._3l._ff = _Xl._br._0l._N1._ff.PROFILE_OVERVIEW;
_Xl._br._Ek._Fm._bf._3l.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : !_Xl._br._hj.checkConnectionToSocialService() ? !1 : !0
};
_Xl._br._Ek._Fm._bf._3l.prototype._ul = function () {
  this.base._t6.apply(this, arguments) && _Xl._br._hj._38._C6()
};
_Xl._br._Ek._Fm._bf._3l.prototype._Q = function (a) {
  if (!1 === this.base._Q.apply(this, arguments)) return !1;
  var b = _Xl._br._0l._N1._ff;
  return !b ? !0 : a === b.PROFILE_ACHIEVEMENTS || a === b.PROFILE_INVENTORY || a === b.PROFILE_RECENT || a === b.PROFILE_STATUS ? !1 : !0
};
_Xl._br._Ek._Fm._bf._H4 = function (a, b) {
  _Xl._br._Ek._Fm._bf._H4.superclass.apply(this, arguments)
};
extend(_Xl._br._Ek._Fm._bf._H4, _Tf._Ek._Fm._bf._X6);
_Xl._br._Ek._Fm._bf._H4._ff = _Xl._br._0l._N1._ff.PROFILE_RECENT;
_Xl._br._Ek._Fm._bf._H4.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : !_Xl._br._hj.checkConnectionToSocialService() ? !1 : !0
};
_Xl._br._Ek._Fm._bf._H4.prototype._Q = function (a) {
  if (!1 === this.base._Q.apply(this, arguments)) return !1;
  var b = _Xl._br._0l._N1._ff;
  return !b ? !0 : a === b.PROFILE_ACHIEVEMENTS || a === b.PROFILE_INVENTORY || a === b.PROFILE_STATUS || a === b.PROFILE_OVERVIEW ? !1 : !0
};
_Xl._br._Ek._Fm._bf._4q = function (a, b) {
  _Xl._br._Ek._Fm._bf._4q.superclass.apply(this, arguments)
};
extend(_Xl._br._Ek._Fm._bf._4q, _Tf._Ek._Fm._bf._X6);
_Xl._br._Ek._Fm._bf._4q._ff = _Xl._br._0l._N1._ff.PROFILE_STATUS;
_Xl._br._Ek._Fm._bf._4q.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : !_Xl._br._hj.checkConnectionToSocialService() ? !1 : !0
};
_Xl._br._Ek._Fm._bf._4q.prototype._Q = function (a) {
  if (!1 === this.base._Q.apply(this, arguments)) return !1;
  var b = _Xl._br._0l._N1._ff;
  return !b ? !0 : a === b.PROFILE_ACHIEVEMENTS || a === b.PROFILE_INVENTORY || a === b.PROFILE_RECENT || a === b.PROFILE_OVERVIEW ? !1 : !0
};
_Xl._br._0r._Tr = {
  PROFILE_INFO: "Profile.getProfileInfo",
  PROFILE_OVERVIEW: "Profile.getProfileInfo.checkProfileOnServices",
  CUSTOM_PROFILE: "Profile.getCustomProfile",
  CHANGE_DISPLAY_NAME: "Profile.changeDisplayName",
  GET_FIRST_MESSAGE: "Messages.getFirstMessage",
  READ_MESSAGE: "Messages.readMessage",
  LOBBY_CUSTOM_TEXT_MESSAGE: "LobbyCustomTextMessage",
  CUSTOM_TEXT_MESSAGE: "CustomTextMessage",
  PLAYER_SOCIAL_PROFILE_SHORT: "Profile.getShortPlayerInfos.forTableChair",
  PUBLIC_PROFILE_INFO: "Profile.getProfileInfo.publicProfile",
  SEND_CLIENT_EVENT: "ClientEvents.sendEvent",
  SEND_CHIPS: "Messages.sendChips",
  ACCEPT_CHIPS: "Messages.acceptChips"
};
_Xl._br._0r._Gs.CustomTextMessage = function () {
  this.type = 0;
  this.message = {}
};
_Xl._br._0r._Gs.CustomTextMessage.prototype = {
  fields: {
    type: ["Int", "typeMessage"],
    message: ["JSON"]
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      a[d].firstChild && 3 == a[d].firstChild.nodeType ? _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this) : _Tf._0r.build.Value(c.n, null, this.fields, this)
    }
    return !0
  }
};
_Xl._br._Ek._2s._bf._U0 = function () { };
_Xl._br._Ek._2s._bf._U0.prototype = {
  draw: function (a) {
    _me.publicProfile && (_me.publicProfile.details(a), a && this.drawBestHand(a.bestHand))
  },
  drawBestHand: function (a) {
    //   console.log("drowBestHand " + JSON.stringify(a));
    if (_me.publicProfile) {
      var b = _Tf._M4._np.deckManager.getElement(),
        c = _h8._wc._an.WON_CARD_IMAGE,
        d = _Tf._dc._W2,
        e = "";
      if (a) {
        for (var a = a.split(";"), f = 0; f < a.length; f++) e += c.fill({
          src: b._46(d._C8(parseInt(a[f]))).src
        });
        _me.publicProfile.bestHand(e)
      } else _me.publicProfile.bestHand(_h8._wc._an.BEST_HAND_EMPTY || "")
    }
  }
};
_Xl._br._a._U0 = function () {
  this.model = new _Xl._br._U6._U0;
  this.view = new Sandbox._E9._2s._bf._U0
};
_Xl._br._a._U0.prototype = {
  model: null,
  view: null,
  _Q7: function () {
    this.model.clear()
  },
  _K5: function () {
    this.view.draw(this.model._o())
  },
  _C6: function (a) {
      console.log("facebook login profile (a) ====> " + JSON.stringify(a)); // when login with facebook click on profile at that time #undefined
    _Mf._L2._oa() || ((a && a != this.model._us() || this.model._us() != _Mf._L2._d1()) && this.model.clear(), a = a || _Mf._L2._d1(), _Xl._br._hj._d.send(_Xl._br._0r._Tr.PUBLIC_PROFILE_INFO, {
      data: "[" + a + "]"
    }))
  },
  _Ik: function (a) {
    a && 0 == a.code && (this.model._fe(a.value), _Mf._ks.emitAsync(_Xl._br._dc._Ag.PLAYER_PUBLIC_PROFILE_PAGE, [a.value]), this._K5())
  },
  _Ar: function (a) {
    _Xl._br._hj._d.send(_Xl._br._0r._Tr.CHANGE_DISPLAY_NAME, {
      data: '["' + a + '"]'
    })
  },
  _Wr: function (a) {
    //   console.log("wr "+ JOSN.stringify(a));
    a && 0 == a.code && _Mf._Md.changePage(_Xl._br._0l._N1._ff.PROFILE_OVERVIEW)
  }
};
_Xl._br._U6._U0 = function () {
  this.info = null
};
_Xl._br._U6._U0.prototype = {
  info: null,
  _fe: function (a) {
    this.info = a
  },
  _o: function () {
    return this.info
  },
  _us: function () {
    return this.info ? this.info.id : 0
  },
  clear: function () {
    this._fe(null)
  }
};
_me.publicProfile = new function (a) {
  // console.log("handswon " + JSON.stringify(a));
  // alert(JSON.stringify("One "+a.handsWon));
  this.details = ko.observable(null);
  this.clientDetails = ko.observable(null);
  this.details.subscribe(function (a) {
    // alert(JSON.stringify("Two "+a.handsWon));
    // alert(JSON.stringify("tournamentsWon "+a.tournamentsWon));
     console.log("Login Player Name11 "+ JSON.stringify(a));
    localStorage.setItem("loginUserName", a.name);

    a ? (this.details().id != a.id && this.avatarSrc(_Tf._0l._A._Nc._0q), this.avatarSrc(a.avatar.normal), this.balance(parseInt(a.balance) || 0), this.level(a.level + "-" + a.levelName), this.buddiesCount(parseInt(a.buddiesCount) || 0), this.network(a.network), this.name(a.name), this.registerDate(_Tf._Ek._29._97(a.registerDate, !1, !0)), this.biggestPotWon(_Tf._Ek._29._ca(parseInt(a.biggestPotWon),
      _Tf._dc.MoneyType._i4)), this.handsWon(parseInt(a.handsWon)), this.tournamentsWon(parseInt(a.tournamentsWon || 0)), this.jackpotsWon(parseInt(a.jackpotsWon || 0)), this.giftsSent(parseInt(a.giftsSent || 0)), this.achievementsGained(a.achievementsGained), parseInt(a.id) === _Mf._L2._d1() && (this.clientDetails(a), a.avatar && a.avatar.normal ? this.clientAvatar(a.avatar.normal) : this.clientAvatar(_Tf._0l._A._Nc._0q))) : (this.avatarSrc(_Tf._0l._A._Nc._0q), this.balance(0), this.level(""), this.buddiesCount(0), this.network(""),
        this.name(""), this.registerDate(""), this.biggestPotWon(""), this.handsWon(0), this.bestHand(_h8._wc._an.BEST_HAND_EMPTY || ""), this.tournamentsWon(0), this.jackpotsWon(0), this.giftsSent(0), this.achievementsGained(null))
    // alert(JSON.stringify(this.handsWon));
  }.bind(this));
  this.clientName = ko.computed(function () {
    return !this.clientDetails() ? a.profile.details() ? a.profile.details().displayName || a.locale()._e9._R7 : a.locale()._e9._R7 : this.clientDetails().name
  }.bind(this));
  this.clientAvatar = ko.observable(_Tf._0l._A._Nc._0q);
  this.avatarSrc = ko.observable(_Tf._0l._A._Nc._0q);
  this.level = ko.observable("");
  this.balance = ko.observable(0);
  this.buddiesCount = ko.observable(0);
  this.network = ko.observable("");
  this.name = ko.observable("");
  this.registerDate = ko.observable("");
  this.biggestPotWon = ko.observable("");
  this.handsWon = ko.observable(0);
  this.bestHand = ko.observable("");
  this.recentAchievements = ko.observableArray([]);
  this.recentGifts = ko.observableArray([]);
  this.recentProPlayers = ko.observableArray([]);
  this.tournamentsWon = ko.observable(0);
  this.jackpotsWon = ko.observable(0);
  this.giftsSent = ko.observable(0);
  this.achievementsGained = ko.observable(null);
  this.editName = ko.observable("");
  this.changeDisplayName = function () {
    _Xl._br._hj._38._Ar(this.editName())
  }.bind(this);
  this.onClientLogout = function () {
    this.details(null);
    this.clientDetails(null);
    this.clientAvatar(_Tf._0l._A._Nc._0q)
  };
  _Mf._ks.addListener(_Ag._ki, this.onClientLogout, this)
}(_me, _Xl._br._0l);
_Xl._br._Ek._2s._bf._cc = function () { };
_Xl._br._Ek._2s._bf._cc.prototype = {
  drawPlayerProfile: function (a) {
    _me.miniProfile.setDetails(a);
    this.drawPlayerProfileBestHand(a.bestHand)
  },
  drawPlayerProfileBestHand: function (a) {
    var b = _Tf._M4._np.deckManager.getElement(),
      c = _h8._wc._an.BEST_HAND_MINI_PROFILE,
      d = _Tf._dc._W2,
      e = "";
    if (a) {
      for (var a = a.split(";"), f = 0; f < a.length; f++) e += c.fill({
        src: b._46(d._C8(parseInt(a[f]))).src,
        index: f
      });
      _me.miniProfile.bestHand(e)
    } else _me.miniProfile.bestHand(_h8._wc._an.BEST_HAND_EMPTY || "")
  },
  prepareToReceivedPlayerProfile: function () {
    _Tf._Ek._29.showPageLoadingMessage()
  },
  _3j: function () {
    _Tf._Ek._29.hidePageLoadingMessage()
  },
  _fg: function (a) {
    //    alert("highestChipLevel " + JSON.stringify(a.highestChipLevel));
    _me.publicProfile.details(a)
    // console.log("highestChipLevel==>"+ JSON.stringify(a.highestChipLevel));
    //   console.log("highestChipLevel==>"+ JSON.stringify(a.balance));
  }
};
_Xl._br._a._cc = function () {
  this.lastMessage = this.lastMessageConst.DISCONNECTION;
  this.requestedPlayersProfiles = [];
  this.hasReceivedClientProfileFromServices = !1;
  this.view = new Sandbox._E9._2s._bf._cc
};
_Xl._br._a._cc.prototype = {
  lastMessage: -2,
  hasReceivedClientProfileFromServices: !1,
  lastMessageConst: {
    ZERO_VALUE: -1,
    DISCONNECTION: -2
  },
  requestedPlayersProfiles: null,
  _isRequestingPlayerProfile: function () {
    return 0 < this.requestedPlayersProfiles.length
  },
  _receivedPlayerProfile: function (a) {
    a = this.requestedPlayersProfiles.indexOf(a);
    0 > a || this.requestedPlayersProfiles.splice(a, 1)
  },
  _Q7: function () {
    this.lastMessage = this.lastMessageConst.DISCONNECTION;
    this.requestedPlayersProfiles = [];
    this.hasReceivedClientProfileFromServices = !1;
    if ("undefined" !== typeof _Xl._br._0l.isFirstLogin) _Xl._br._0l.isFirstLogin = !1
  },
  _2g: function () {
    return this.lastMessage === this.lastMessageConst.DISCONNECTION || !this.hasReceivedClientProfileFromServices
  },
  _Jf: function (a) {
    // alert("_Jf ==>"+JSON.stringify(a));
    !this._isRequestingPlayerProfile(a) && _Xl._br._hj.checkConnectionToSocialService() && "undefined" !== typeof _Xl._br._0l.customProfileFields && (this.view.prepareToReceivedPlayerProfile(), this.requestedPlayersProfiles.push(a), _Xl._br._hj._d.send(_Xl._br._0r._Tr.CUSTOM_PROFILE, {
      data: "[[{0}],[{1}]]".format(a,
        _Xl._br._0l.customProfileFields)
    }, {
        playerId: a
      }))
  },
  _Je: function (a, b, c) {
    _Xl._br._hj._d.send(_Xl._br._0r._Tr.PLAYER_SOCIAL_PROFILE_SHORT, {
      data: "[[" + a + "]]"
    }, {
        fn: c,
        isRequestToGetInfo: !0,
        isFirstGameState: b
      })
  },
  _9d: function () {
    _Xl._br._hj._d.send(_Xl._br._0r._Tr.GET_FIRST_MESSAGE, {
      data: "[]"
    })
  },
  getFirstClientProfile: function () {
    _Xl._br._hj._d.send(_Xl._br._0r._Tr.PROFILE_OVERVIEW, {
      data: "[" + _Mf._L2._d1() + "]"
    })
  },
  _ar: function (a) {
    this.lastMessage = parseInt(a);
    _Xl._br._hj._d.send(_Xl._br._0r._Tr.READ_MESSAGE, {
      data: "[" + a + "]"
    })
  },
  sendChipsAction: function (a, b) {
    _Xl._br._hj._d.send(_Xl._br._0r._Tr.SEND_CHIPS, {
      data: "[{0}, {1}]".format(a, b)
    })
  },
  _cn: function (a, b) {
    this.view._3j();
    b && this._receivedPlayerProfile(b.playerId);
    a && !(0 != a.code || !a.value || !a.value[0]) && this.view.drawPlayerProfile(a.value[0])
  },
  _e5: function (a) {
    if (!a || 0 != a.code) this.lastMessage = this.lastMessageConst.DISCONNECTION;
    else if (!_Mf._L2._oa()) {
      if (this.lastMessage === this.lastMessageConst.DISCONNECTION) this.lastMessage = this.lastMessageConst.ZERO_VALUE, this.getFirstClientProfile();
      !a.value || !a.value.id || parseInt(a.value.id) < this.lastMessage || !1 != _Mf._ks.emit(_Xl._br._dc._Ag.SOCIAL_MESSAGE, [a.value]) && this._ar(a.value.id)
    }
  },
  _v6: function (a) {
    a && 0 == a.code && this._e5(a)
  },
  _o7: function (a, b) {
    if (a && !(0 != a.code || 0 === a.value.length)) b && "function" === typeof b.fn && b.fn(a.value[0], b.isRequestToGetInfo || !1, b.isFirstGameState || !1)
  },
  _Fl: function (a) {
    if (a && 0 == a.code) this.hasReceivedClientProfileFromServices = !0, this.view._fg(a.value), _Mf._ks.emitAsync(_Xl._br._dc._Ag.CLIENT_READY, null)
  },
  onSendChips: function () { }
};
_Xl._br._co = function () { };
_Xl._br._co.prototype = {
  _d: null,
  _gb: null,
  _38: null,
  Data: {},
  extractClasses: function () {
    _Tf._0r._Gs[_Xl._br._0r._Tr.CUSTOM_TEXT_MESSAGE] = _Xl._br._0r._Gs.CustomTextMessage;
    _Tf._0r._Gs[_Xl._br._0r._Tr.LOBBY_CUSTOM_TEXT_MESSAGE] = _Xl._br._0r._Gs.CustomTextMessage
  },
  initialize: function () {
    this._d = new _Xl._br._M4._20._Kf(_Xl._br._0l._xj.socialFeaturesService, new _Tf._M4._A3._Kf(_Xl._br._0l._xj.socialFeaturesService), new _Xl._br._M4._9._Kf(_Xl._br._0r._Tr), _Xl._br._0r._Tr);
    this._gb = new Sandbox._E9._Y3._cc;
    this._38 = new Sandbox._E9._Y3._U0
  },
  subscribeToEvents: function () {
    _Xl._br._0l._gc._68 && _Mf._ks.addListener(_Ag._fj, function () {
      LazyLoad.css(_Xl._br._0l._gc._68)
    }, null);
    _Mf._ks.addListener(_Ag._rq, function (a) {
      this.Data.auth = a.auth
    }, this);
    _Mf._ks.addListener(_Ag._pp, function (a, b) {
      this._gb._Jf(b)
    }, this);
    _Mf._ks.addListener(_Xl._br._dc._Ag.NEED_REFRESH_PLAYER_INFO, function () {
      this._38._C6()
    }, this);
    _Mf._ks.addListener(_Ag.__7, function () {
      this._gb._9d()
    }, this);
    _Mf._ks.addListener(_Ag._ki, function () {
      this._38._Q7();
      this._gb._Q7()
    },
      this);
    _Mf._ks.addListener(_Ag._em, function (a) {
      a && !(a.type != _Xl._br._0r._Tr.CUSTOM_TEXT_MESSAGE && a.type != _Xl._br._0r._Tr.LOBBY_CUSTOM_TEXT_MESSAGE) && _Mf._ks.emitAsync(_Xl._br._dc._Ag.CUSTOM_MESSAGE, [a])
    }, null);
    _Mf._ks.addListener(_Xl._br._dc._Ag.CLIENT_DISCONNECTED_FROM_SOCIAL_SERVICE, function () {
      if (!(0 < $(_Tf._0l._N1._Ai + ".disconnection").length)) {
        var a = _Tf._N1._zh("", _Tf._41.$("_43"));
        $(a).addClass("disconnection")
      }
    })
  },
  checkConnectionToSocialService: function () {
    var a = !this._gb._2g();
    a || _Mf._ks.emitAsync(_Xl._br._dc._Ag.CLIENT_DISCONNECTED_FROM_SOCIAL_SERVICE,
      null);
    return a
  }
};
_Xl._br._a._Un._8l.BaccaratChair = function (a, b, c, d, e, f, g, h, j, k) {
  _Xl._br._a._Un._8l.BaccaratChair.superclass.apply(this, arguments);
  if (_Xl._Vn && (this.giftNotice = new Sandbox._E9._Un._8l._43(b, f, g, k), Sandbox._E9._Un._8l._Q2 && _Xl._Vn._0l.isUsedGiftAvatar)) this.giftAvatar = new Sandbox._E9._Un._8l._Q2(e || c, f, g, k);
  if (_Xl._7a) this.experienceNotice = new Sandbox._E9._Un._8l._ek(b, c, d, g, this.designPosition);
  if (_Xl._Ud) this.prosNotice = new Sandbox._E9._Un._8l._vd(b, c, d, g, k);
  this._df = this._df.bind(this);
  this.socialPlayerProfile = null;
  _Mf._ks.emit(_Ag._9a, [this.tableId, this._bs()])
};
extend(_Xl._br._a._Un._8l.BaccaratChair, _Tf._a._Un._8l.BaccaratChair);
_Xl._br._a._Un._8l.BaccaratChair.prototype._a2 = function (a, b) {
  a.avatar = null;
  _Xl._br._a._Un._8l.BaccaratChair.superclass.prototype._a2.apply(this, arguments);
  this._8s() || (a.isInFirstGameState && !_Mf._L2._oa() && _Mf._ks.emit(_Ag._Z0, [this.tableId, this._bs()]), _Tf._hr._Yp(this._p1, [this._Sq(), a.isInFirstGameState || !1], this, !0))
};
_Xl._br._a._Un._8l.BaccaratChair.prototype._tc = function (a, b) {
  _Xl._br._a._Un._8l.BaccaratChair.superclass.prototype._tc.apply(this, arguments);
  _Xl._Vn && (this.giftNotice._tc(b), Sandbox._E9._Un._8l._Q2 && _Xl._Vn._0l.isUsedGiftAvatar && (this.giftAvatar && this.giftAvatar._Q7(), this.giftAvatar._tc(b)));
  _Xl._7a && this.experienceNotice._tc(b);
  _Xl._Ud && this.prosNotice._tc(b);
  this._8s() || _Tf._hr._Yp(this._p1, [this._Sq(), !1], this, !0)
};
_Xl._br._a._Un._8l.BaccaratChair.prototype._G4 = function () {
  _Xl._br._a._Un._8l.BaccaratChair.superclass.prototype._G4.apply(this, arguments);
  var a = this._q6();
  _Xl._Vn && this.giftNotice._K5(a, this._8s());
  _Xl._7a && this.experienceNotice._K5();
  _Xl._Ud && this.prosNotice._K5(a)
};
_Xl._br._a._Un._8l.BaccaratChair.prototype._X4 = function () {
  _Xl._br._a._Un._8l.BaccaratChair.superclass.prototype._X4.apply(this, arguments);
  _Xl._Vn && this.giftNotice._X4();
  _Xl._7a && this.experienceNotice._X4();
  _Xl._Ud && this.prosNotice._X4()
};
_Xl._br._a._Un._8l.BaccaratChair.prototype._4p = function () {
  _Xl._Vn && (this.giftNotice._Q7(), this.giftAvatar && this.giftAvatar._Q7());
  _Xl._Ud && this.prosNotice._s2(!1);
  _Xl._br._a._Un._8l.BaccaratChair.superclass.prototype._4p.apply(this, arguments);
  _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()])
};
_Xl._br._a._Un._8l.BaccaratChair.prototype._Kc = function (a, b) {
  a.avatar = null;
  var c = a.id != this._Sq(),
    d = _Xl._br._a._Un._8l.BaccaratChair.superclass.prototype._Kc.apply(this, arguments);
  if (!c) return d;
  _Xl._Vn && (this.giftNotice._Q7(), this.giftAvatar && this.giftAvatar._Q7());
  _Xl._Ud && this.prosNotice._s2(!1);
  this._p1(a.id);
  return d
};
_Xl._br._a._Un._8l.BaccaratChair.prototype._Va = function () {
  var a = this.model._Eq(),
    b = this._q6();
  this.view.drawMiddle(a, this._Rk);
  a || (this.giftAvatar && this.giftAvatar.__1() && !b ? (this.giftAvatar._K5(), this.model.player._Va(this.view.isActive(), !0, b)) : this.model.player._Va(this.view.isActive(), !1, b))
};
_Xl._br._a._Un._8l.BaccaratChair.prototype._Em = function () {
  _Xl._br._a._Un._8l.BaccaratChair.superclass.prototype._Em.apply(this, arguments);
  this.giftAvatar && this.giftAvatar.clearItselfOnMiddle()
};
_Xl._br._a._Un._8l.BaccaratChair.prototype._p1 = function (a, b) {
  _Xl._br._hj._gb._Je(a, b, this._df)
};
_Xl._br._a._Un._8l.BaccaratChair.prototype._df = function (a, b, c) {
  if (!(this._8s() || this._Sq() != parseInt(a.id))) {
    this.socialPlayerProfile = a;
    _Xl._7a && this._Ks(a);
    var d = !1;
    _Xl._Vn && (this._6h(a.gift), this.giftAvatar && (d = this._Cd(a.seatAvatars)));
    c && !d && _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()]);
    _Xl._Ud && (b && !c && _Xl._Ud._hj.__r._Nq(a), this.prosNotice._s2(a.isPro));
    a.avatar && "undefined" != typeof a.avatar.normal && this.model.changePlayerAvatar(a.avatar.normal)
  }
};
_Xl._br._a._Un._8l.BaccaratChair.prototype._6h = function (a) {
  !a || this._8s() ? this.giftNotice._Q7() : this.giftNotice._3g(a)
};
_Xl._br._a._Un._8l.BaccaratChair.prototype._3g = function (a) {
  this.giftNotice._3g(a)
};
_Xl._br._a._Un._8l.BaccaratChair.prototype._Cd = function (a) {
  if (!this.giftAvatar) return !1;
  if (!a || !a.length || this._8s()) return this.giftAvatar._Q7(), _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "clear gift avatar"]), !1;
  var b = a[this.realNumber];
  if (!b || !b.avatar) return this.giftAvatar._Q7(), _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "clear gift avatar"]), !1;
  _Tf._Ek._29.loadImage(b.avatar.url, b, "image", !1, function () {
    this.giftAvatar._9c(b, b.image);
    _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "gift avatar loaded"]);
    _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()])
  }.bind(this), function () {
    _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()])
  }.bind(this));
  return !0
};
_Xl._br._a._Un._8l.BaccaratChair.prototype._Ks = function (a) {
  this._8s() || (!a || !a.levelName ? this._Oo("") : this._Oo(_Tf._41.$("_15").format(a.level, a.levelName)))
};
_Xl._br._a._Un._8l.BaccaratChair.prototype._Oo = function (a) {
  this._8s() || (this.model.player._Xd(a), _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "player level changed"]))
};
_Xl._br._a._Un._8l.BaccaratChair.prototype._mn = function (a) {
  this._8s() || this.experienceNotice._40(a)
};
_Xl._br._a._Un._8l.BaccaratChair.prototype._r2 = function () {
  _Xl._br._a._Un._8l.BaccaratChair.superclass.prototype._r2.apply(this, arguments);
  this.experienceNotice._Q7()
};
_Xl._br._a._Un._8l.BlackJackChair = function (a, b, c, d, e, f, g, h, j, k) {
  _Xl._br._a._Un._8l.BlackJackChair.superclass.apply(this, arguments);
  if (_Xl._Vn && (this.giftNotice = new Sandbox._E9._Un._8l._43(b, f, g, k), Sandbox._E9._Un._8l._Q2 && _Xl._Vn._0l.isUsedGiftAvatar)) this.giftAvatar = new Sandbox._E9._Un._8l._Q2(e || c, f, g, k);
  if (_Xl._7a) this.experienceNotice = new Sandbox._E9._Un._8l._ek(b, c, d, g, this.designPosition);
  if (_Xl._Ud) this.prosNotice = new Sandbox._E9._Un._8l._vd(b, c, d, g, k);
  this._df = this._df.bind(this);
  this.socialPlayerProfile = null;
  _Mf._ks.emit(_Ag._9a, [this.tableId, this._bs()])
};
extend(_Xl._br._a._Un._8l.BlackJackChair, _Tf._a._Un._8l.BlackJackChair);
_Xl._br._a._Un._8l.BlackJackChair.prototype._a2 = function (a, b) {
  a.avatar = null;
  _Xl._br._a._Un._8l.BlackJackChair.superclass.prototype._a2.apply(this, arguments);
  this._8s() || (a.isInFirstGameState && !_Mf._L2._oa() && _Mf._ks.emit(_Ag._Z0, [this.tableId, this._bs()]), _Tf._hr._Yp(this._p1, [this._Sq(), a.isInFirstGameState || !1], this, !0))
};
_Xl._br._a._Un._8l.BlackJackChair.prototype._tc = function (a, b) {
  _Xl._br._a._Un._8l.BlackJackChair.superclass.prototype._tc.apply(this, arguments);
  _Xl._Vn && (this.giftNotice._tc(b), Sandbox._E9._Un._8l._Q2 && _Xl._Vn._0l.isUsedGiftAvatar && (this.giftAvatar && this.giftAvatar._Q7(), this.giftAvatar._tc(b)));
  _Xl._7a && this.experienceNotice._tc(b);
  _Xl._Ud && this.prosNotice._tc(b);
  this._8s() || _Tf._hr._Yp(this._p1, [this._Sq(), !1], this, !0)
};
_Xl._br._a._Un._8l.BlackJackChair.prototype._G4 = function () {
  _Xl._br._a._Un._8l.BlackJackChair.superclass.prototype._G4.apply(this, arguments);
  var a = this._q6();
  _Xl._Vn && this.giftNotice._K5(a, this._8s());
  _Xl._7a && this.experienceNotice._K5();
  _Xl._Ud && this.prosNotice._K5(a)
};
_Xl._br._a._Un._8l.BlackJackChair.prototype._X4 = function () {
  _Xl._br._a._Un._8l.BlackJackChair.superclass.prototype._X4.apply(this, arguments);
  _Xl._Vn && this.giftNotice._X4();
  _Xl._7a && this.experienceNotice._X4();
  _Xl._Ud && this.prosNotice._X4()
};
_Xl._br._a._Un._8l.BlackJackChair.prototype._4p = function () {
  _Xl._Vn && (this.giftNotice._Q7(), this.giftAvatar && this.giftAvatar._Q7());
  _Xl._Ud && this.prosNotice._s2(!1);
  _Xl._br._a._Un._8l.BlackJackChair.superclass.prototype._4p.apply(this, arguments);
  _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()])
};
_Xl._br._a._Un._8l.BlackJackChair.prototype._Kc = function (a, b) {
  a.avatar = null;
  var c = a.id != this._Sq(),
    d = _Xl._br._a._Un._8l.BlackJackChair.superclass.prototype._Kc.apply(this, arguments);
  if (!c) return d;
  _Xl._Vn && (this.giftNotice._Q7(), this.giftAvatar && this.giftAvatar._Q7());
  _Xl._Ud && this.prosNotice._s2(!1);
  this._p1(a.id);
  return d
};
_Xl._br._a._Un._8l.BlackJackChair.prototype._Va = function () {
  var a = this.model._Eq(),
    b = this._q6();
  this.view.drawMiddle(a, this._Rk);
  a || (this.giftAvatar && this.giftAvatar.__1() && !b ? (this.giftAvatar._K5(), this.model.player._Va(this.view.isActive(), !0, b)) : this.model.player._Va(this.view.isActive(), !1, b))
};
_Xl._br._a._Un._8l.BlackJackChair.prototype._Em = function () {
  _Xl._br._a._Un._8l.BlackJackChair.superclass.prototype._Em.apply(this, arguments);
  this.giftAvatar && this.giftAvatar.clearItselfOnMiddle()
};
_Xl._br._a._Un._8l.BlackJackChair.prototype._p1 = function (a, b) {
  _Xl._br._hj._gb._Je(a, b, this._df)
};
_Xl._br._a._Un._8l.BlackJackChair.prototype._df = function (a, b, c) {
  if (!(this._8s() || this._Sq() != parseInt(a.id))) {
    this.socialPlayerProfile = a;
    _Xl._7a && this._Ks(a);
    var d = !1;
    _Xl._Vn && (this._6h(a.gift), this.giftAvatar && (d = this._Cd(a.seatAvatars)));
    c && !d && _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()]);
    _Xl._Ud && (b && !c && _Xl._Ud._hj.__r._Nq(a), this.prosNotice._s2(a.isPro));
    a.avatar && "undefined" != typeof a.avatar.normal && this.model.changePlayerAvatar(a.avatar.normal)
  }
};
_Xl._br._a._Un._8l.BlackJackChair.prototype._6h = function (a) {
  !a || this._8s() ? this.giftNotice._Q7() : this.giftNotice._3g(a)
};
_Xl._br._a._Un._8l.BlackJackChair.prototype._3g = function (a) {
  this.giftNotice._3g(a)
};
_Xl._br._a._Un._8l.BlackJackChair.prototype._Cd = function (a) {
  if (!this.giftAvatar) return !1;
  if (!a || !a.length || this._8s()) return this.giftAvatar._Q7(), _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "clear gift avatar"]), !1;
  var b = a[this.realNumber];
  if (!b || !b.avatar) return this.giftAvatar._Q7(), _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "clear gift avatar"]), !1;
  _Tf._Ek._29.loadImage(b.avatar.url, b, "image", !1, function () {
    this.giftAvatar._9c(b, b.image);
    _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "gift avatar loaded"]);
    _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()])
  }.bind(this), function () {
    _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()])
  }.bind(this));
  return !0
};
_Xl._br._a._Un._8l.BlackJackChair.prototype._Ks = function (a) {
  this._8s() || (!a || !a.levelName ? this._Oo("") : this._Oo(_Tf._41.$("_15").format(a.level, a.levelName)))
};
_Xl._br._a._Un._8l.BlackJackChair.prototype._Oo = function (a) {
  this._8s() || (this.model.player._Xd(a), _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "player level changed"]))
};
_Xl._br._a._Un._8l.BlackJackChair.prototype._mn = function (a) {
  this._8s() || this.experienceNotice._40(a)
};
_Xl._br._a._Un._8l.BlackJackChair.prototype._r2 = function () {
  _Xl._br._a._Un._8l.BlackJackChair.superclass.prototype._r2.apply(this, arguments);
  this.experienceNotice._Q7()
};
_Xl._br._a._Un._8l._Na = function (a, b, c, d, e, f, g, h, j, k) {
  _Xl._br._a._Un._8l._Na.superclass.apply(this, arguments);
  if (_Xl._Vn && (this.giftNotice = new Sandbox._E9._Un._8l._43(b, f, g, k), Sandbox._E9._Un._8l._Q2 && _Xl._Vn._0l.isUsedGiftAvatar)) this.giftAvatar = new Sandbox._E9._Un._8l._Q2(e || c, f, g, k);
  if (_Xl._7a) this.experienceNotice = new Sandbox._E9._Un._8l._ek(b, c, d, g, this.designPosition);
  if (_Xl._Ud) this.prosNotice = new Sandbox._E9._Un._8l._vd(b, c, d, g, k);
  this._df = this._df.bind(this);
  this.socialPlayerProfile = null;
  _Mf._ks.emit(_Ag._9a, [this.tableId, this._bs()])
};
extend(_Xl._br._a._Un._8l._Na, _Tf._a._Un._8l._Na);
_Xl._br._a._Un._8l._Na.prototype._a2 = function (a, b) {
  a.avatar = null;
  _Xl._br._a._Un._8l._Na.superclass.prototype._a2.apply(this, arguments);
  this._8s() || (a.isInFirstGameState && !_Mf._L2._oa() && _Mf._ks.emit(_Ag._Z0, [this.tableId, this._bs()]), _Tf._hr._Yp(this._p1, [this._Sq(), a.isInFirstGameState || !1], this, !0))
};
_Xl._br._a._Un._8l._Na.prototype._tc = function (a, b) {
  _Xl._br._a._Un._8l._Na.superclass.prototype._tc.apply(this, arguments);
  _Xl._Vn && (this.giftNotice._tc(b), Sandbox._E9._Un._8l._Q2 && _Xl._Vn._0l.isUsedGiftAvatar && (this.giftAvatar && this.giftAvatar._Q7(), this.giftAvatar._tc(b)));
  _Xl._7a && this.experienceNotice._tc(b);
  _Xl._Ud && this.prosNotice._tc(b);
  this._8s() || _Tf._hr._Yp(this._p1, [this._Sq(), !1], this, !0)
};
_Xl._br._a._Un._8l._Na.prototype._G4 = function () {
  _Xl._br._a._Un._8l._Na.superclass.prototype._G4.apply(this, arguments);
  var a = this._q6();
  _Xl._Vn && this.giftNotice._K5(a, this._8s());
  _Xl._7a && this.experienceNotice._K5();
  _Xl._Ud && this.prosNotice._K5(a)
};
_Xl._br._a._Un._8l._Na.prototype._X4 = function () {
  _Xl._br._a._Un._8l._Na.superclass.prototype._X4.apply(this, arguments);
  _Xl._Vn && this.giftNotice._X4();
  _Xl._7a && this.experienceNotice._X4();
  _Xl._Ud && this.prosNotice._X4()
};
_Xl._br._a._Un._8l._Na.prototype._4p = function () {
  _Xl._Vn && (this.giftNotice._Q7(), this.giftAvatar && this.giftAvatar._Q7());
  _Xl._Ud && this.prosNotice._s2(!1);
  _Xl._br._a._Un._8l._Na.superclass.prototype._4p.apply(this, arguments);
  _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()])
};
_Xl._br._a._Un._8l._Na.prototype._Kc = function (a, b) {
  a.avatar = null;
  var c = a.id != this._Sq(),
    d = _Xl._br._a._Un._8l._Na.superclass.prototype._Kc.apply(this, arguments);
  if (!c) return d;
  _Xl._Vn && (this.giftNotice._Q7(), this.giftAvatar && this.giftAvatar._Q7());
  _Xl._Ud && this.prosNotice._s2(!1);
  this._p1(a.id);
  return d
};
_Xl._br._a._Un._8l._Na.prototype._Va = function () {
  var a = this.model._Eq(),
    b = this._q6();
  this.view.drawMiddle(a, this._Rk);
  a || (this.giftAvatar && this.giftAvatar.__1() && !b ? (this.giftAvatar._K5(), this.model.player._Va(this.view.isActive(), !0, b)) : this.model.player._Va(this.view.isActive(), !1, b))
};
_Xl._br._a._Un._8l._Na.prototype._Em = function () {
  _Xl._br._a._Un._8l._Na.superclass.prototype._Em.apply(this, arguments);
  this.giftAvatar && this.giftAvatar.clearItselfOnMiddle()
};
_Xl._br._a._Un._8l._Na.prototype._p1 = function (a, b) {
  _Xl._br._hj._gb._Je(a, b, this._df)
};
_Xl._br._a._Un._8l._Na.prototype._df = function (a, b, c) {
  if (!(this._8s() || this._Sq() != parseInt(a.id))) {
    this.socialPlayerProfile = a;
    _Xl._7a && this._Ks(a);
    var d = !1;
    _Xl._Vn && (this._6h(a.gift), this.giftAvatar && (d = this._Cd(a.seatAvatars)));
    c && !d && _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()]);
    _Xl._Ud && (b && !c && _Xl._Ud._hj.__r._Nq(a), this.prosNotice._s2(a.isPro));
    a.avatar && "undefined" != typeof a.avatar.normal && this.model.changePlayerAvatar(a.avatar.normal)
  }
};
_Xl._br._a._Un._8l._Na.prototype._6h = function (a) {
  !a || this._8s() ? this.giftNotice._Q7() : this.giftNotice._3g(a)
};
_Xl._br._a._Un._8l._Na.prototype._3g = function (a) {
  this.giftNotice._3g(a)
};
_Xl._br._a._Un._8l._Na.prototype._Cd = function (a) {
  if (!this.giftAvatar) return !1;
  if (!a || !a.length || this._8s()) return this.giftAvatar._Q7(), _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "clear gift avatar"]), !1;
  var b = a[this.realNumber];
  if (!b || !b.avatar) return this.giftAvatar._Q7(), _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "clear gift avatar"]), !1;
  _Tf._Ek._29.loadImage(b.avatar.url, b, "image", !1, function () {
    this.giftAvatar._9c(b, b.image);
    _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(),
    this._bs(), "gift avatar loaded"]);
    _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()])
  }.bind(this), function () {
    _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()])
  }.bind(this));
  return !0
};
_Xl._br._a._Un._8l._Na.prototype._Ks = function (a) {
  this._8s() || (!a || !a.levelName ? this._Oo("") : this._Oo(_Tf._41.$("_15").format(a.level, a.levelName)))
};
_Xl._br._a._Un._8l._Na.prototype._Oo = function (a) {
  this._8s() || (this.model.player._Xd(a), _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "player level changed"]))
};
_Xl._br._a._Un._8l._Na.prototype._mn = function (a) {
  this._8s() || this.experienceNotice._40(a)
};
_Xl._br._a._Un._8l._Na.prototype._r2 = function () {
  _Xl._br._a._Un._8l._Na.superclass.prototype._r2.apply(this, arguments);
  this.experienceNotice._Q7()
};
_Xl._br._a._Un._8l.CrapsChair = function (a, b, c, d, e, f, g, h, j, k) {
  _Xl._br._a._Un._8l.CrapsChair.superclass.apply(this, arguments);
  if (_Xl._Vn && (this.giftNotice = new Sandbox._E9._Un._8l._43(b, f, g, k), Sandbox._E9._Un._8l._Q2 && _Xl._Vn._0l.isUsedGiftAvatar)) this.giftAvatar = new Sandbox._E9._Un._8l._Q2(e || c, f, g, k);
  if (_Xl._7a) this.experienceNotice = new Sandbox._E9._Un._8l._ek(b, c, d, g, this.designPosition);
  if (_Xl._Ud) this.prosNotice = new Sandbox._E9._Un._8l._vd(b, c, d, g, k);
  this._df = this._df.bind(this);
  this.socialPlayerProfile = null;
  _Mf._ks.emit(_Ag._9a, [this.tableId, this._bs()])
};
extend(_Xl._br._a._Un._8l.CrapsChair, _Tf._a._Un._8l.CrapsChair);
_Xl._br._a._Un._8l.CrapsChair.prototype._a2 = function (a, b) {
  a.avatar = null;
  _Xl._br._a._Un._8l.CrapsChair.superclass.prototype._a2.apply(this, arguments);
  this._8s() || (a.isInFirstGameState && !_Mf._L2._oa() && _Mf._ks.emit(_Ag._Z0, [this.tableId, this._bs()]), _Tf._hr._Yp(this._p1, [this._Sq(), a.isInFirstGameState || !1], this, !0))
};
_Xl._br._a._Un._8l.CrapsChair.prototype._tc = function (a, b) {
  _Xl._br._a._Un._8l.CrapsChair.superclass.prototype._tc.apply(this, arguments);
  _Xl._Vn && (this.giftNotice._tc(b), Sandbox._E9._Un._8l._Q2 && _Xl._Vn._0l.isUsedGiftAvatar && (this.giftAvatar && this.giftAvatar._Q7(), this.giftAvatar._tc(b)));
  _Xl._7a && this.experienceNotice._tc(b);
  _Xl._Ud && this.prosNotice._tc(b);
  this._8s() || _Tf._hr._Yp(this._p1, [this._Sq(), !1], this, !0)
};
_Xl._br._a._Un._8l.CrapsChair.prototype._G4 = function () {
  _Xl._br._a._Un._8l.CrapsChair.superclass.prototype._G4.apply(this, arguments);
  var a = this._q6();
  _Xl._Vn && this.giftNotice._K5(a, this._8s());
  _Xl._7a && this.experienceNotice._K5();
  _Xl._Ud && this.prosNotice._K5(a)
};
_Xl._br._a._Un._8l.CrapsChair.prototype._X4 = function () {
  _Xl._br._a._Un._8l.CrapsChair.superclass.prototype._X4.apply(this, arguments);
  _Xl._Vn && this.giftNotice._X4();
  _Xl._7a && this.experienceNotice._X4();
  _Xl._Ud && this.prosNotice._X4()
};
_Xl._br._a._Un._8l.CrapsChair.prototype._4p = function () {
  _Xl._Vn && (this.giftNotice._Q7(), this.giftAvatar && this.giftAvatar._Q7());
  _Xl._Ud && this.prosNotice._s2(!1);
  _Xl._br._a._Un._8l.CrapsChair.superclass.prototype._4p.apply(this, arguments);
  _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()])
};
_Xl._br._a._Un._8l.CrapsChair.prototype._Kc = function (a, b) {
  a.avatar = null;
  var c = a.id != this._Sq(),
    d = _Xl._br._a._Un._8l.CrapsChair.superclass.prototype._Kc.apply(this, arguments);
  if (!c) return d;
  _Xl._Vn && (this.giftNotice._Q7(), this.giftAvatar && this.giftAvatar._Q7());
  _Xl._Ud && this.prosNotice._s2(!1);
  this._p1(a.id);
  return d
};
_Xl._br._a._Un._8l.CrapsChair.prototype._Va = function () {
  var a = this.model._Eq(),
    b = this._q6();
  this.view.drawMiddle(a, this._Rk, this.realNumber);
  a || (this.giftAvatar && this.giftAvatar.__1() && !b ? (this.giftAvatar._K5(), this.model.player._Va(this.view.isActive(), !0, b)) : this.model.player._Va(this.view.isActive(), !1, b))
};
_Xl._br._a._Un._8l.CrapsChair.prototype._Em = function () {
  _Xl._br._a._Un._8l.CrapsChair.superclass.prototype._Em.apply(this, arguments);
  this.giftAvatar && this.giftAvatar.clearItselfOnMiddle()
};
_Xl._br._a._Un._8l.CrapsChair.prototype._p1 = function (a, b) {
  _Xl._br._hj._gb._Je(a, b, this._df)
};
_Xl._br._a._Un._8l.CrapsChair.prototype._df = function (a, b, c) {
  if (!(this._8s() || this._Sq() != parseInt(a.id))) {
    this.socialPlayerProfile = a;
    _Xl._7a && this._Ks(a);
    var d = !1;
    _Xl._Vn && (this._6h(a.gift), this.giftAvatar && (d = this._Cd(a.seatAvatars)));
    c && !d && _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()]);
    _Xl._Ud && (b && !c && _Xl._Ud._hj.__r._Nq(a), this.prosNotice._s2(a.isPro));
    a.avatar && "undefined" != typeof a.avatar.normal && this.model.changePlayerAvatar(a.avatar.normal)
  }
};
_Xl._br._a._Un._8l.CrapsChair.prototype._6h = function (a) {
  !a || this._8s() ? this.giftNotice._Q7() : this.giftNotice._3g(a)
};
_Xl._br._a._Un._8l.CrapsChair.prototype._3g = function (a) {
  this.giftNotice._3g(a)
};
_Xl._br._a._Un._8l.CrapsChair.prototype._Cd = function (a) {
  if (!this.giftAvatar) return !1;
  if (!a || !a.length || this._8s()) return this.giftAvatar._Q7(), _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "clear gift avatar"]), !1;
  var b = a[this.realNumber];
  if (!b || !b.avatar) return this.giftAvatar._Q7(), _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "clear gift avatar"]), !1;
  _Tf._Ek._29.loadImage(b.avatar.url, b, "image", !1, function () {
    this.giftAvatar._9c(b, b.image);
    _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(),
    this._bs(), "gift avatar loaded"]);
    _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()])
  }.bind(this), function () {
    _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()])
  }.bind(this));
  return !0
};
_Xl._br._a._Un._8l.CrapsChair.prototype._Ks = function (a) {
  this._8s() || (!a || !a.levelName ? this._Oo("") : this._Oo(_Tf._41.$("_15").format(a.level, a.levelName)))
};
_Xl._br._a._Un._8l.CrapsChair.prototype._Oo = function (a) {
  this._8s() || (this.model.player._Xd(a), _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "player level changed"]))
};
_Xl._br._a._Un._8l.CrapsChair.prototype._mn = function (a) {
  this._8s() || this.experienceNotice._40(a)
};
_Xl._br._a._Un._8l.CrapsChair.prototype._r2 = function () {
  _Xl._br._a._Un._8l.CrapsChair.superclass.prototype._r2.apply(this, arguments);
  this.experienceNotice._Q7()
};
_Xl._br._a._Un._8l.CrapsChair.prototype.takeBetToWinAction = function (a) {
  this.model.takeWinChip(a)
};
_Xl._br._a._Un._8l.PaigowChair = function (a, b, c, d, e, f, g, h, j, k) {
  _Xl._br._a._Un._8l.PaigowChair.superclass.apply(this, arguments);
  if (_Xl._Vn && (this.giftNotice = new Sandbox._E9._Un._8l._43(b, f, g, k), Sandbox._E9._Un._8l._Q2 && _Xl._Vn._0l.isUsedGiftAvatar)) this.giftAvatar = new Sandbox._E9._Un._8l._Q2(e || c, f, g, k);
  if (_Xl._7a) this.experienceNotice = new Sandbox._E9._Un._8l._ek(b, c, d, g, this.designPosition);
  if (_Xl._Ud) this.prosNotice = new Sandbox._E9._Un._8l._vd(b, c, d, g, k);
  this._df = this._df.bind(this);
  this.socialPlayerProfile = null;
  _Mf._ks.emit(_Ag._9a, [this.tableId, this._bs()])
};
extend(_Xl._br._a._Un._8l.PaigowChair, _Tf._a._Un._8l.PaigowChair);
_Xl._br._a._Un._8l.PaigowChair.prototype._a2 = function (a, b) {
  a.avatar = null;
  _Xl._br._a._Un._8l.PaigowChair.superclass.prototype._a2.apply(this, arguments);
  this._8s() || (a.isInFirstGameState && !_Mf._L2._oa() && _Mf._ks.emit(_Ag._Z0, [this.tableId, this._bs()]), _Tf._hr._Yp(this._p1, [this._Sq(), a.isInFirstGameState || !1], this, !0))
};
_Xl._br._a._Un._8l.PaigowChair.prototype._tc = function (a, b) {
  _Xl._br._a._Un._8l.PaigowChair.superclass.prototype._tc.apply(this, arguments);
  _Xl._Vn && (this.giftNotice._tc(b), Sandbox._E9._Un._8l._Q2 && _Xl._Vn._0l.isUsedGiftAvatar && (this.giftAvatar && this.giftAvatar._Q7(), this.giftAvatar._tc(b)));
  _Xl._7a && this.experienceNotice._tc(b);
  _Xl._Ud && this.prosNotice._tc(b);
  this._8s() || _Tf._hr._Yp(this._p1, [this._Sq(), !1], this, !0)
};
_Xl._br._a._Un._8l.PaigowChair.prototype._G4 = function () {
  _Xl._br._a._Un._8l.PaigowChair.superclass.prototype._G4.apply(this, arguments);
  var a = this._q6();
  _Xl._Vn && this.giftNotice._K5(a, this._8s());
  _Xl._7a && this.experienceNotice._K5();
  _Xl._Ud && this.prosNotice._K5(a)
};
_Xl._br._a._Un._8l.PaigowChair.prototype._X4 = function () {
  _Xl._br._a._Un._8l.PaigowChair.superclass.prototype._X4.apply(this, arguments);
  _Xl._Vn && this.giftNotice._X4();
  _Xl._7a && this.experienceNotice._X4();
  _Xl._Ud && this.prosNotice._X4()
};
_Xl._br._a._Un._8l.PaigowChair.prototype._4p = function () {
  _Xl._Vn && (this.giftNotice._Q7(), this.giftAvatar && this.giftAvatar._Q7());
  _Xl._Ud && this.prosNotice._s2(!1);
  _Xl._br._a._Un._8l.PaigowChair.superclass.prototype._4p.apply(this, arguments);
  _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()])
};
_Xl._br._a._Un._8l.PaigowChair.prototype._Kc = function (a, b) {
  a.avatar = null;
  var c = a.id != this._Sq(),
    d = _Xl._br._a._Un._8l.PaigowChair.superclass.prototype._Kc.apply(this, arguments);
  if (!c) return d;
  _Xl._Vn && (this.giftNotice._Q7(), this.giftAvatar && this.giftAvatar._Q7());
  _Xl._Ud && this.prosNotice._s2(!1);
  this._p1(a.id);
  return d
};
_Xl._br._a._Un._8l.PaigowChair.prototype._Va = function () {
  var a = this.model._Eq(),
    b = this._q6();
  this.view.drawMiddle(a, this._Rk);
  a || (this.giftAvatar && this.giftAvatar.__1() && !b ? (this.giftAvatar._K5(), this.model.player._Va(this.view.isActive(), !0, b)) : this.model.player._Va(this.view.isActive(), !1, b))
};
_Xl._br._a._Un._8l.PaigowChair.prototype._Em = function () {
  _Xl._br._a._Un._8l.PaigowChair.superclass.prototype._Em.apply(this, arguments);
  this.giftAvatar && this.giftAvatar.clearItselfOnMiddle()
};
_Xl._br._a._Un._8l.PaigowChair.prototype._p1 = function (a, b) {
  _Xl._br._hj._gb._Je(a, b, this._df)
};
_Xl._br._a._Un._8l.PaigowChair.prototype._df = function (a, b, c) {
  if (!(this._8s() || this._Sq() != parseInt(a.id))) {
    this.socialPlayerProfile = a;
    _Xl._7a && this._Ks(a);
    var d = !1;
    _Xl._Vn && (this._6h(a.gift), this.giftAvatar && (d = this._Cd(a.seatAvatars)));
    c && !d && _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()]);
    _Xl._Ud && (b && !c && _Xl._Ud._hj.__r._Nq(a), this.prosNotice._s2(a.isPro));
    a.avatar && "undefined" != typeof a.avatar.normal && this.model.changePlayerAvatar(a.avatar.normal)
  }
};
_Xl._br._a._Un._8l.PaigowChair.prototype._6h = function (a) {
  !a || this._8s() ? this.giftNotice._Q7() : this.giftNotice._3g(a)
};
_Xl._br._a._Un._8l.PaigowChair.prototype._3g = function (a) {
  this.giftNotice._3g(a)
};
_Xl._br._a._Un._8l.PaigowChair.prototype._Cd = function (a) {
  if (!this.giftAvatar) return !1;
  if (!a || !a.length || this._8s()) return this.giftAvatar._Q7(), _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "clear gift avatar"]), !1;
  var b = a[this.realNumber];
  if (!b || !b.avatar) return this.giftAvatar._Q7(), _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "clear gift avatar"]), !1;
  _Tf._Ek._29.loadImage(b.avatar.url, b, "image", !1, function () {
    this.giftAvatar._9c(b, b.image);
    _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(),
    this._bs(), "gift avatar loaded"]);
    _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()])
  }.bind(this), function () {
    _Mf._ks.emit(_Ag._Yj, [this.tableId, this._bs()])
  }.bind(this));
  return !0
};
_Xl._br._a._Un._8l.PaigowChair.prototype._Ks = function (a) {
  this._8s() || (!a || !a.levelName ? this._Oo("") : this._Oo(_Tf._41.$("_15").format(a.level, a.levelName)))
};
_Xl._br._a._Un._8l.PaigowChair.prototype._Oo = function (a) {
  this._8s() || (this.model.player._Xd(a), _Mf._ks.emit(_Ag._uq, [this.view.getMiddleContext(), this._bs(), "player level changed"]))
};
_Xl._br._a._Un._8l.PaigowChair.prototype._mn = function (a) {
  this._8s() || this.experienceNotice._40(a)
};
_Xl._br._a._Un._8l.PaigowChair.prototype._r2 = function () {
  _Xl._br._a._Un._8l.PaigowChair.superclass.prototype._r2.apply(this, arguments);
  this.experienceNotice._Q7()
};
_Xl._br._a._Un._8l.PaigowChair.prototype.takeBetToWinAction = function (a) {
  this.model.takeWinChip(a)
};
_Xl._Vn = {
  shortName: "module.social-gifts"
};
_Tf._hr.extendObject(SandBoxObject, _Xl._Vn);
_Xl._Vn._0l.isUsedCategories = !1;
_Xl._Vn._0l.isUsedTags = !0;
_Xl._Vn._0l._Nr = 5;
_Xl._Vn._0l._7p = 5;
_Xl._Vn._0l._8e = 5;
_Xl._Vn._0l.isLimitedCountOnPagesInListView = !0;
_Xl._Vn._0l.isLimitedCountOwnedGiftsOnPagesInListView = !0;
_Xl._Vn._0l.isUsedGiftAvatar = !1;
_Xl._Vn._0l.deckGiftHoursToExpire = 1;
_Xl._Vn._0l.deckResourcePriority = 10;
_Xl._Vn._0l._gc = {
  _68: ""
};
_Xl._Vn._0l._N1 = {
  VIDEO: "#gift-video",
  GIFT_TAG_TAB: ".gift-shop-menu-container-tag-item",
  GIFT_TAG_TAB_SELECTED: "gift-shop-menu-container-item-selected",
  GIFT_TAG_SELECTED_TABS: ".gift-shop-menu-container-tag-item.gift-shop-menu-container-item-selected"
};
_Xl._Vn._0l._N1._ff = {
  GIFT_SHOP_VIRTUAL_GIFTS: "gift-shop",
  GIFT_SHOP_DEALERS: "gift-shop-dealers",
  GIFT_SHOP_BACKGROUND: "gift-shop-backgrounds"
};
_Xl._Vn._A._N7 = function () {
  _Xl._Vn._A._N7.superclass.call(this, _Tf._dc.ResourceType._K1)
};
extend(_Xl._Vn._A._N7, _Tf._A._X6);
_Xl._Vn._A._N7.prototype.init = function (a) {
  var b = 0,
    c = null,
    d = _Tf._dc._W2._ip,
    e = _Tf._dc._W2._Dg,
    f = -1,
    g = -1;
  if ("undefined" !== typeof a) {
    this.removeAllElements();
    for (b = 0; b < a.cards.length; b++) c = a.cards[b], c.suit && c.value && (f = parseInt(c.suit, 10), g = parseInt(c.value, 10), !isNaN(f) && !isNaN(g) && (-1 == f && -1 == g ? (this.addElement(c.icon.url, "back"), this.addElement(c.icon.url, "backL"), this.addElement(c.icon.url, "backStud"), this.addElement(c.icon.url, "backBj")) : "undefined" !== typeof d[g] && "undefined" !== typeof e[f] && this.addElement(c.icon.url,
      e[f] + d[g])))
  }
};
_Xl._Vn._A._N7.prototype._46 = function (a) {
  return !this.getElement(a) ? this.getElement(_Tf._dc._W2._Al) : this.getElement(a)
};
_Xl._Vn._h8._wc._an = {
  init: function () {
    _h8._wc._an.GIFT_INFO = '<div class="gift-image-background">\n\t\t\t<img src="{image}" width="60em" class="gift-image" /></div>\n\t\t\t<div class="gift-name">{name}</div>'
  }
};
_Xl._Vn._dc.GiftKind = {
  GIFT_VIRTUAL: "virtual",
  GIFT_DECK: "deck",
  GIFT_VIDEO: "video",
  GIFT_AVATAR: "avatar",
  GIFT_DEALER: "dealer",
  GIFT_BACKGROUND: "background",
  GIFT_BLACKJACK_DEALER: "blackjack_dealer",
  GIFT_BLACKJACK_BACKGROUND: "blackjack_background",
  GIFT_BACCARAT_DEALER: "baccarat_dealer",
  GIFT_PAIGOW_DEALER: "paigow_dealer",
  GIFT_CRAPS_DEALER: "craps_dealer",
  GIFT_BACCARAT_BACKGROUND: "baccarat_background",
  GIFT_PAIGOW_BACKGROUND: "paigow_background",
  GIFT_CRAPS_BACKGROUND: "mobile-background"
};
_Xl._Vn._dc.GiftType = {
  GIFT_TRAINING: "training",
  GIFT_WELCOME: "welcome"
};
_Xl._Vn._dc.PurchaseType = {
  FOR_SELF: "self",
  FOR_PLAYER: "player",
  FOR_OPPONENTS: "opponents",
  FOR_BUDDIES: "buddies"
};
_Xl._Vn._dc.Video = {
  Type: {
    mp4: "video/mp4",
    webm: "video/webm",
    ogg: "video/ogg"
  },
  Quality: {
    high: "high",
    medium: "medium",
    low: "low"
  },
  Size: {
    large: "large",
    normal: "normal",
    small: "small"
  }
};
_Xl._Vn._Ek._Fm._bf._yo = function (a, b) {
  _Xl._Vn._Ek._Fm._bf._yo.superclass.apply(this, arguments)
};
extend(_Xl._Vn._Ek._Fm._bf._yo, _Tf._Ek._Fm._bf._X6);
_Xl._Vn._Ek._Fm._bf._yo._ff = _Xl._Vn._0l._N1._ff.GIFT_SHOP_AVATARS;
_Xl._Vn._Ek._Fm._bf._yo.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : _Xl._br._hj.checkConnectionToSocialService()
};
_Xl._Vn._Ek._Fm._bf._yo.prototype._G1 = function () {
  this.base._G1.apply(this, arguments) && (_me.gifts.giftsByKind[_Xl._Vn._dc.GiftKind.GIFT_AVATAR].hasElements() ? _me.gifts.giftsByKind[_Xl._Vn._dc.GiftKind.GIFT_AVATAR].update() : _Xl._Vn._hj._Le._So(_Xl._Vn._dc.GiftKind.GIFT_AVATAR, !1))
};
_Xl._Vn._Ek._Fm._bf._yo.prototype._Q = function (a) {
  return !1 === this.base._Q.apply(this, arguments) || /gift/.test(a) ? !1 : !0
};
_Xl._Vn._Ek._Fm._bf._yo.prototype.onScrollPullDown = function () {
  _me.gifts.giftsByKind[_Xl._Vn._dc.GiftKind.GIFT_AVATAR].hasMorePages() && (_me.gifts.giftsByKind[_Xl._Vn._dc.GiftKind.GIFT_AVATAR].hasOtherElements() ? _Xl._Vn._hj._Le._So(_Xl._Vn._dc.GiftKind.GIFT_AVATAR, !0) : (_me.gifts.giftsByKind[_Xl._Vn._dc.GiftKind.GIFT_AVATAR].growPage(), _me.gifts.giftsByKind[_Xl._Vn._dc.GiftKind.GIFT_AVATAR].update()))
};
_Xl._Vn._Ek._Fm._bf._yo.prototype._jp = function (a) {
  this.base._Sr.apply(this, arguments) && !/gift/.test(a) && _me.gifts.setSelectedPlayerFromTable(null)
};
_Xl._Vn._Ek._Fm._bf._Cq = function (a, b) {
  _Xl._Vn._Ek._Fm._bf._Cq.superclass.apply(this, arguments)
};
extend(_Xl._Vn._Ek._Fm._bf._Cq, _Tf._Ek._Fm._bf._X6);
_Xl._Vn._Ek._Fm._bf._Cq._ff = _Xl._Vn._0l._N1._ff.GIFT_SHOP_DECKS;
_Xl._Vn._Ek._Fm._bf._Cq.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : !_Xl._br._hj.checkConnectionToSocialService() ? !1 : !0
};
_Xl._Vn._Ek._Fm._bf._Cq.prototype._G1 = function () {
  this.base._G1.apply(this, arguments) && (_me.gifts.giftsByKind[_Xl._Vn._dc.GiftKind.GIFT_DECK].hasElements() ? _me.gifts.giftsByKind[_Xl._Vn._dc.GiftKind.GIFT_DECK].update() : _Xl._Vn._hj._Le._So(_Xl._Vn._dc.GiftKind.GIFT_DECK, !1))
};
_Xl._Vn._Ek._Fm._bf._Cq.prototype._Q = function (a) {
  return !1 === this.base._Q.apply(this, arguments) || /gift/.test(a) ? !1 : !0
};
_Xl._Vn._Ek._Fm._bf._Cq.prototype.onScrollPullDown = function () {
  _me.gifts.giftsByKind[_Xl._Vn._dc.GiftKind.GIFT_DECK].hasMorePages() && (_me.gifts.giftsByKind[_Xl._Vn._dc.GiftKind.GIFT_DECK].hasOtherElements() ? _Xl._Vn._hj._Le._So(_Xl._Vn._dc.GiftKind.GIFT_DECK, !0) : (_me.gifts.giftsByKind[_Xl._Vn._dc.GiftKind.GIFT_DECK].growPage(), _me.gifts.giftsByKind[_Xl._Vn._dc.GiftKind.GIFT_DECK].update()))
};
_Xl._Vn._Ek._Fm._bf._Cq.prototype._jp = function (a) {
  this.base._Sr.apply(this, arguments) && !/gift/.test(a) && _me.gifts.setSelectedPlayerFromTable(null)
};
_Xl._Vn._Ek._Fm._bf._9q = function (a, b) {
  _Xl._Vn._Ek._Fm._bf._9q.superclass.apply(this, arguments)
};
extend(_Xl._Vn._Ek._Fm._bf._9q, _Tf._Ek._Fm._bf._X6);
_Xl._Vn._Ek._Fm._bf._9q._ff = _Xl._Vn._0l._N1._ff.GIFT_SHOP_VIDEOS;
_Xl._Vn._Ek._Fm._bf._9q.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : !_Xl._br._hj.checkConnectionToSocialService() ? !1 : !0
};
_Xl._Vn._Ek._Fm._bf._9q.prototype._G1 = function () {
  if (this.base._G1.apply(this, arguments)) {
    var a = _Xl._Vn._dc.GiftKind.GIFT_VIDEO,
      b = _me.gifts.giftsCurrentTagByKind.video(),
      c = _me.gifts.giftsByKind[a];
    b && (c = c[b]);
    c.hasElements() ? c.update() : (_Xl._Vn._hj._Le._So(a, !1, b), _Xl._Vn._hj._Le._wp())
  }
};
_Xl._Vn._Ek._Fm._bf._9q.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._N1,
      b = _Xl._Vn._0l._N1;
    a.$(b.GIFT_TAG_TAB).live(EventType._qc, function (c) {
      c.currentTarget && (a.$(b.GIFT_TAG_SELECTED_TABS).removeClass(b.GIFT_TAG_TAB_SELECTED), a.$(c.currentTarget).addClass(b.GIFT_TAG_TAB_SELECTED))
    })
  }
};
_Xl._Vn._Ek._Fm._bf._9q.prototype._Q = function (a) {
  return !1 === this.base._Q.apply(this, arguments) || /gift/.test(a) ? !1 : !0
};
_Xl._Vn._Ek._Fm._bf._9q.prototype.onScrollPullDown = function () {
  if (_me.gifts.giftsByKind[_Xl._Vn._dc.GiftKind.GIFT_VIDEO].hasMorePages()) {
    var a = _Xl._Vn._dc.GiftKind.GIFT_VIDEO,
      b = _me.gifts.giftsCurrentTagByKind.video(),
      c = _me.gifts.giftsByKind[a];
    b && (c = c[b]);
    c.hasOtherElements() ? _Xl._Vn._hj._Le._So(a, !0, b) : (c.growPage(), c.update())
  }
};
_Xl._Vn._Ek._Fm._bf._9q.prototype._jp = function (a) {
  this.base._Sr.apply(this, arguments) && !/gift/.test(a) && _me.gifts.setSelectedPlayerFromTable(null)
};
_Xl._Vn._Ek._Fm._bf._F0 = function (a, b) {
  _Xl._Vn._Ek._Fm._bf._F0.superclass.apply(this, arguments)
};
extend(_Xl._Vn._Ek._Fm._bf._F0, _Tf._Ek._Fm._bf._X6);
_Xl._Vn._Ek._Fm._bf._F0._ff = _Xl._Vn._0l._N1._ff.GIFT_SHOP_VIRTUAL_GIFTS;
_Xl._Vn._Ek._Fm._bf._F0.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : !_Xl._br._hj.checkConnectionToSocialService() ? !1 : !0
};
_Xl._Vn._Ek._Fm._bf._F0.prototype._G1 = function () {
  if (this.base._G1.apply(this, arguments)) {
    var a = _Xl._Vn._dc.GiftKind.GIFT_VIRTUAL,
      b = _me.gifts.giftsCurrentTagByKind.virtual(),
      c = _me.gifts.giftsByKind[a];
    b && (c = c[b]);
    c.hasElements() ? c.update() : _Xl._Vn._hj._Le._So(a, !1, b)
  }
};
_Xl._Vn._Ek._Fm._bf._F0.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._N1,
      b = _Xl._Vn._0l._N1,
      c = _Tf._0l._N1;
    a.$(b.GIFT_TAG_TAB).live(EventType._qc, function (c) {
      c.currentTarget && (a.$(b.GIFT_TAG_SELECTED_TABS).removeClass(b.GIFT_TAG_TAB_SELECTED), a.$(c.currentTarget).addClass(b.GIFT_TAG_TAB_SELECTED))
    });
    a.$("#{0} ".format(this.page) + c._zn).live(EventType._qc, function () {
      var a = _me.gifts.getCurrentGifts(),
        b = _me.gifts.giftsCurrentTagByKind.virtual(),
        c = _me.gifts.getGiftKindByTag(b);
      a && (a.hasOtherElements() ? _Xl._Vn._hj._Le._So(c, !0, b) : a.hasMorePages() && a.growPage())
    })
  }
};
_Xl._Vn._Ek._Fm._bf._F0.prototype._Q = function (a) {
  return !1 === this.base._Q.apply(this, arguments) ? !1 : !/gift/.test(a)
};
_Xl._Vn._Ek._Fm._bf._F0.prototype.onScrollPullDown = function () {
  var a = _Xl._Vn._dc.GiftKind.GIFT_VIRTUAL,
    b = _me.gifts.giftsCurrentTagByKind.virtual(),
    c = _me.gifts.giftsByKind[a];
  b && (c = c[b]);
  c.hasMorePages() && (c.hasOtherElements() ? _Xl._Vn._hj._Le._So(a, !0, b) : c.growPage())
};
_Xl._Vn._Ek._Fm._bf._F0.prototype._jp = function (a) {
  this.base._Sr.apply(this, arguments) && !/gift/.test(a) && _me.gifts.setSelectedPlayerFromTable(null)
};
_Xl._Vn._Ek._2s._bf._fa = function () { };
_Xl._Vn._Ek._2s._bf._fa.prototype = {
  draw: function () {
    this.setSelectedGift(null)
  },
  drawCategoriesTabs: function () { },
  drawGiftsByCategory: function () { },
  drawTagsByKind: function (a, b, c) {
    _me.gifts.setTagsByKind(a, b);
    _me.gifts.setCurrentTagByKind(a, c);
    0 == b.length ? _Xl._Vn._hj._Le._So(a, !1) : _Xl._Vn._hj._Le._So(a, !1, c)
  },
  getCurrentTag: function (a) {
    return _me.gifts.giftsCurrentTagByKind[a]()
  },
  drawGiftsByKind: function (a, b, c, d, e, f, g, h) {
    _me.gifts.setGiftsList(a, b, c, d, g, e, h);
    d ? _me.gifts.setCurrentOwnedGiftKind(a) : (a = _me.gifts.giftsByKind[a],
      e && (a = a[e]), f ? a.growPage() : a.goToFirstPage())
  },
  clearAllOwnGifts: function () {
    _me.gifts.clearAllOwnGifts()
  },
  drawGiftsByKindAfterRemovingOne: function (a, b) {
    var c = _me.gifts.giftsByKind[a].totalLength() - 1 || 0;
    _me.gifts.setGiftsList(a, b, c, !1)
  },
  prepareToLoadGifts: function () { },
  drawRecentGifts: function () { },
  getSelectedGift: function () {
    var a = _me.gifts.selectedGift();
    if (null != a) a = a.gift;
    if (!/gift/.test(_Mf._Md.getVisiblePage()) && !/profile/.test(_Mf._Md.getVisiblePage())) return a;
    _Tf._Ek._29.showPageLoadingMessage();
    return a
  },
  setSelectedGift: function (a) {
    _me.gifts.setSelectedGift(a)
  },
  setSelectedPlayerFromTable: function (a) {
    _me.gifts.setSelectedPlayerFromTable(a)
  },
  setSelectedTableId: function (a) {
    _me.gifts.selectedTableId(a || _me.gifts.NO_ACTIVE_TABLE_ID)
  },
  buildBoughtGiftMessage: function (a, b, c) {
    c = _Tf._41.$(c);
    b && (c = c.format(b.name, _me.gifts.getGiftPrice(b), _me.gifts.getGiftCurrencyName(b)));
    _Tf._N1._zh("", c, function () {
      0 === a && _me.gifts.selectedTableId() != _me.gifts.NO_ACTIVE_TABLE_ID && _me.tablesSnap.isClientAtOpenedTable() && _me.menu.openMultiTables()
    })
  },
  _o2: function (a, b, c) {
    this.buildBoughtGiftMessage(a, b, c);
    /gift/.test(_Mf._Md.getVisiblePage()) && _Tf._Ek._29.hidePageLoadingMessage()
  },
  _er: function (a, b, c, d) {
    "undefined" === d && (d = null);
    _me.gifts.videoGift({
      src: a,
      title: b,
      poster: c,
      type: d
    });
    b = _Xl._Vn._dc.Video;
    _me.gifts.videoSources([]);
    for (var e in b.Type) for (var f in b.Quality) for (var g in b.Size) {
      if (!b.Type.hasOwnProperty(e) || !b.Quality.hasOwnProperty(f) || !b.Size.hasOwnProperty(g)) return;
      _me.gifts.videoSources.push({
        url: a + "&videoType=" + e + "&size=" + g + "&quality=" + f,
        type: b.Type[e]
      })
    }
    this._tp("")
  },
  _tp: function (a) {
    _Tf._N1._zh(_Tf._41.$("_19"), a);
    /profile/.test(_Mf._Md.getVisiblePage()) && _Tf._Ek._29.hidePageLoadingMessage()
  },
  _Te: function (a) {
    _Tf._N1._zh("", a);
    /profile/.test(_Mf._Md.getVisiblePage()) && _Tf._Ek._29.hidePageLoadingMessage()
  }
};
_Xl._Vn._a._fa = function () {
  this.model = new _Xl._Vn._U6._fa;
  this.view = new Sandbox._E9._2s._bf._fa;
  this.activePlayerProfile = this.activeTableId = null;
  this.multiTables = {};
  this.deckResources = new _Xl._Vn._A._N7;
  this.lastVideoType = this.deckResourcesTimeOut = null
};
_Xl._Vn._a._fa.prototype = {
  model: null,
  view: null,
  activeTableId: null,
  activePlayerProfile: null,
  multiTables: {},
  deckResources: null,
  deckResourcesTimeOut: null,
  lastVideoType: null,
  _K5: function () {
    this._ok();
    var a = _Mf._q1._Rm(this.activeTableId);
    this.view.draw(_Mf._L2._Rj(), !!this.activeTableId, a && a._Ga(), this.activePlayerProfile)
  },
  _ok: function () {
    this.view.drawCategoriesTabs(this.model.getGiftCategories())
  },
  _Bg: function (a) {
    this.view.drawRecentGifts(a)
  },
  _Q7: function () {
    this.model.clear();
    this._ng(null);
    this._m4(null);
    this.multiTables = {};
    this._ws();
    this.view.clearAllOwnGifts()
  },
  _ws: function () {
    if (null !== this.deckResourcesTimeOut) {
      var a = _Xl._Vn._0l;
      "undefined" !== typeof a.deckResourcePriority ? _Tf._M4._np.deckManager.removeByPriority(a.deckResourcePriority) : _Tf._M4._np.deckManager.removeLast();
      clearTimeout(this.deckResourcesTimeOut);
      this.deckResourcesTimeOut = null;
      this.deckResources.removeAllElements();
      _Mf._ks.emit(_Ag._c0, arguments)
    }
  },
  _ng: function (a) {
    this.view.setSelectedTableId(a);
    this.activeTableId = a
  },
  _m4: function (a) {
    this.view.setSelectedPlayerFromTable(a);
    this.activePlayerProfile = a
  },
  _fl: function (a) {
    _Mf._L2._oa() ? _Mf._ks.emitAsync(_Ag._s4, null) : ("undefined" === typeof a && (a = _Mf._q1._y9()), this._ng(a), _Mf._Md.changePage(_Xl._Vn._0l._N1._ff.GIFT_SHOP_VIRTUAL_GIFTS), Loader.onShowStaticLoader(), setTimeout(function () {
      Loader.onHideStaticLoader()
    }, 2500))
  },
  _v2: function (a) {
    this._m4(a);
    this._fl()
  },
  _Ed: function () {
    this.view.setSelectedGift(null);
    this._ng(null);
    this._m4(null)
  },
  clearGiftsByKindAction: function (a) {
    this.view.setSelectedGift(null);
    this.model.setGiftsByKind(a, [], !1);
    this.view.drawGiftsByKind(a, [], 0, !1, "", !1, 0, !0)
  },
  clearAllOwnGiftsActions: function () {
    this.model.ownedGiftsByKind = {};
    this.view.clearAllOwnGifts()
  },
  _Dl: function () {
    _Xl._Vn._hj._d.send(_Xl._Vn._0r._Tr.GET_GIFT_CATEGORIES, {
      data: "[]"
    })
  },
  _Xp: function (a) {
    _Xl._Vn._hj._d.send(_Xl._Vn._0r._Tr.GET_GIFT_TAGS, {
      data: '["' + a + '"]'
    }, {
        kind: a
      })
  },
  _ci: function (a, b) {
    if (!_Mf._L2._oa()) {
      var c = this.model.getGiftCategories();
      0 !== c.length && (a = a || c[0].code, this.model.getGiftsByCategory(a) || (this.view.prepareToLoadGifts(), (c = a) && 0 < a.length && (c = '"{0}"'.format(a)), _Xl._Vn._hj._d.send(_Xl._Vn._0r._Tr.GET_GIFTS, {
        data: "[[{0}], [], [], {1}, {2}]".format(c, b ? this.model.getGiftsByCategory(a).length : 0, _Xl._Vn._0l._7p || _Tf._0l._Nr)
      }, {
          category: a,
          isNextPage: b
        })))
    }
  },
  _So: function (a, b, c) {
    if (!_Mf._L2._oa()) {
      if (c && "object" === typeof c) c = c.id;
      c = c || this.view.getCurrentTag(a);
      5 == c && (c = "");
      6 == c && (c = "");
      this.view.prepareToLoadGifts();
      var d = a;
      a && 0 < a.length && (d = '"{0}"'.format(a));
      _Xl._Vn._hj._d.send(_Xl._Vn._0r._Tr.GET_GIFTS_BY_KIND, {
        data: "[[], [{0}], [], [{1}], {2}, {3}]".format(d,
          c ? c : "", b ? this.model.getGiftsByKind(a).length : 0, _Xl._Vn._0l._7p || _Tf._0l._Nr)
      }, {
          kind: a,
          tag: c,
          isNextPage: b
        })
    }
  },
  _7n: function (a) {
    if (!_Mf._L2._oa()) {
      this.view.prepareToLoadGifts();
      var b = a;
      a && 0 < a.length && (b = '"{0}"'.format(a));
      _Xl._Vn._hj._d.send(_Xl._Vn._0r._Tr.GET_OWNED_GIFTS_BY_KIND, {
        data: "[[], [{0}], [], []]".format(b)
      }, {
          kind: a
        })
    }
  },
  _ka: function () {
    if (!_Mf._L2._oa()) {
      var a = _Xl._Vn._dc.GiftKind,
        b;
      for (b in a) a.hasOwnProperty(b) && this._Xp(a[b])
    }
  },
  _Me: function () {
    if (!_Mf._L2._oa()) {
      var a = _Xl._Vn._dc.GiftKind,
        b;
      for (b in a) a.hasOwnProperty(b) && this._So(a[b], "", !1)
    }
  },
  _Rr: function () {
    if (!_Mf._L2._oa()) {
      var a = _Xl._Vn._dc.GiftKind,
        b;
      for (b in a) a.hasOwnProperty(b) && this._7n(a[b])
    }
  },
  buyGift: function (a, b) {
    var c = this.view.getSelectedGift();
    c && "undefined" !== typeof c.id && _Xl._Vn._hj._d.send(_Xl._Vn._0r._Tr.MAKE_GIFT_TO_PLAYERS, {
      data: "[" + c.id + ',"' + a + '"' + (b ? "," + b : "") + "]"
    }, {
        gift: c,
        targetId: b
      })
  },
  _Th: function () {
    this.activePlayerProfile ? this.buyGift(_Xl._Vn._dc.PurchaseType.FOR_PLAYER, this.activePlayerProfile.id) : this.buyGift(_Xl._Vn._dc.PurchaseType.FOR_SELF,
      _Mf._L2._d1())
  },
  _J: function () {
    var a = _Mf._q1._Rm(this.activeTableId);
    this.activeTableId && a && a._Ga() && this.buyGift(_Xl._Vn._dc.PurchaseType.FOR_OPPONENTS, this.activeTableId)
  },
  _m: function () {
    var a = _Mf._q1._Rm(this.activeTableId);
    this.activeTableId && a && a._Ga() && this.buyGift(_Xl._Vn._dc.PurchaseType.FOR_BUDDIES)
  },
  _ni: function (a, b) {
    if (b) a ? (this.multiTables[b] = {}, this.multiTables[b].chairs = a) : this.multiTables[b] && delete this.multiTables[b]
  },
  getGameElementsByTable: function (a) {
    return this.multiTables[a] || null
  },
  _zr: function () {
    var a = this.view.getSelectedGift();
    a && "undefined" !== typeof a.id && _Xl._Vn._hj._d.send(_Xl._Vn._0r._Tr.USE_GIFT, {
      data: "[" + a.id + "]"
    }, {
        gift: a
      })
  },
  _sq: function () {
    var a = this.view.getSelectedGift();
    a && "undefined" !== typeof a.id && _Xl._Vn._hj._d.send(_Xl._Vn._0r._Tr.REMOVE_GIFT, {
      data: "[" + a.id + "]"
    }, {
        gift: a
      })
  },
  _Gb: function () {
    var a = this.view.getSelectedGift();
    a && "undefined" !== typeof a.id && _Xl._Vn._hj._d.send(_Xl._Vn._0r._Tr.CLEAR_GIFT_AVATAR, {
      data: "[]"
    })
  },
  _A2: function (a) {
    (a = a ? a : this.view.getSelectedGift()) &&
      "undefined" !== typeof a.id && _Xl._Vn._hj._d.send(_Xl._Vn._0r._Tr.GET_OWN_GIFT_DETAILS, {
        data: "[" + a.id + "]"
      }, {
          gift: a
        })
  },
  _qg: function () {
    _Xl._Vn._hj._d.send(_Xl._Vn._0r._Tr.PROFILE_OVERVIEW, {
      data: "[]"
    })
  },
  _4m: function () {
    this._79(_Xl._br._dc.ClientEventType._fq)
  },
  _wp: function () {
    this._79(_Xl._br._dc.ClientEventType.LEARN)
  },
  _79: function (a) {
    _Xl._Vn._hj._d.send(_Xl._br._0r._Tr.SEND_CLIENT_EVENT, {
      data: '["' + a + '"]'
    });
    this.lastVideoType = a
  },
  _re: function () {
    this._bi(_Xl._Vn._dc.GiftType.GIFT_WELCOME)
  },
  _Ih: function () {
    this._bi(_Xl._Vn._dc.GiftType.GIFT_TRAINING)
  },
  _bi: function (a) {
    _Xl._Vn._hj._d.send(_Xl._Vn._0r._Tr.GET_FREE_VIDEO_GIFT, {
      data: '["' + a + '"]'
    })
  },
  _gd: function (a) {
    a && 0 == a.code && (this.model.setGiftCategories(a.value), this._ok(), this._ci())
  },
  _Vk: function (a, b) {
    if (a && !(0 != a.code || !b || !b.category)) this.model.setGiftsByCategory(b.category, a.value.list, b.isNextPage), this.view.drawGiftsByCategory(b.category, this.model.getGiftsByCategory(b.category), a.value.total)
  },
  _X5: function (a, b) {
    if (a && !(0 != a.code || !b || !b.kind)) this.model.setTagsByKind(b.kind, a.value), this.view.drawTagsByKind(b.kind,
      a.value || [], this.model.getFirstTagByKind(b.kind))
  },
  _92: function (a, b) {
    if (a && !(0 != a.code || !b || !b.kind)) this.model.setGiftsByKind(b.kind, a.value.list, b.isNextPage), this.view.drawGiftsByKind(b.kind, this.model.getGiftsByKind(b.kind), a.value.total, !1, b.tag, b.isNextPage, a.value.list.length)
  },
  _q5: function (a, b) {
    if (a && !(0 != a.code || !b || !b.kind)) this.model.setOwnedGiftsByKind(b.kind, a.value.list), this.view.drawGiftsByKind(b.kind, this.model.getOwnedGiftsByKind(b.kind), a.value.total, !0, "", !1, a.value.list.length)
  },
  _k4: function (a, b) {
    b && "undefined" !== typeof b.id && _Xl._br._N1.addButtonToSocialDialog(a, _Tf._41.$("_n6"), this._v2.bind(this, b))
  },
  _o2: function (a, b) {
    if (!a || a.code != _Xl._br._dc.ResultCode._w) {
      var c = _Xl._br._dc.ResultCode;
      a.code == c.NOT_ENOUGH_MONEY ? this.view._o2(a.code, b.gift, "_86._k4") : a.code == c.GIFT_BUY_LIMIT_EXCEEDED ? (this.needToHideSelectedGift(a, b), this.view._o2(a.code, b.gift, "_86._p6")) : a.code == c.NO_PLAYERS_TO_GIFT ? this.view._o2(a.code, b.gift, "_86._v5") : a.code == c.PLAYER_ALREADY_HAS_GIFT ? this.view._o2(a.code,
        b.gift, "_86._A4") : a.code == c.GIFT_NOT_FOUND ? (this.needToHideSelectedGift(a, b), this.view._o2(a.code, b.gift, "_86._s6")) : this.view._o2(a.code, b.gift, "_86._m1")
    } else if (b.gift.moneyType == _Tf._dc.MoneyType._Ok && _Mf._ks.emit(_Ag.__4, [{
      category: b.gift.category,
      description: b.gift.description,
      id: b.gift.id,
      name: b.gift.name,
      price: b.gift.price
    }]), a.value && a.value.isLimited && 0 === a.value.buyLimit && this.needToHideSelectedGift(a, b), this.view._o2(a.code, b.gift, "_e3"), c = _Xl._Vn._dc.GiftKind, c = [c.GIFT_DEALER, c.GIFT_BLACKJACK_DEALER,
    c.GIFT_BACCARAT_DEALER, c.GIFT_BACKGROUND, c.GIFT_BLACKJACK_BACKGROUND, c.GIFT_BACCARAT_BACKGROUND, c.GIFT_PAIGOW_BACKGROUND], a.value && -1 !== c.indexOf(b.gift.kind) && parseInt(b.targetId, 10) == _Mf._L2._d1()) b.gift.type = b.gift.kind, this._A2(b.gift)
  },
  needToHideSelectedGift: function (a, b) {
    this.model.removeGiftByKindAndIndex(b.gift, b.gift.indexInCollection) && this.view.drawGiftsByKindAfterRemovingOne(b.gift.kind, this.model.getGiftsByKind(b.gift.kind))
  },
  _ib: function (a) {
    if (a && a.typeMessage) if (a.typeMessage == _Xl._br._dc.CustomTextMessageType.GIFT) this._Pb(a.message.gift,
      a.message.sender);
    else if (a.typeMessage == _Xl._br._dc.CustomTextMessageType.PROFILE_CHANGED) this._65(a.message, a.message.tableId);
    else if (a.typeMessage == _Xl._br._dc.CustomTextMessageType.MESSAGE_SHOW_VIDEO) this._hn(a);
    else if (a.typeMessage == _Xl._br._dc.CustomTextMessageType.POKER_GIFT_TO_PLAYERS) {
      var b = this.getGameElementsByTable(a.message.tableId);
      if (b) for (var b = b.chairs, c = 0; c < b.length; c++) b[c]._8s() || -1 < a.message.targetPlayers.indexOf(b[c]._Sq()) && b[c]._3g(a.message.gift)
    }
  },
  _65: function (a, b) {
    if (a) if ("undefined" != typeof b) this._Jp(a, b);
    else for (b in this.multiTables) this.multiTables.hasOwnProperty(b) && this._Jp(a, b)
  },
  _Jp: function (a, b) {
    if (a && b) {
      var c = this.getGameElementsByTable(b);
      if (c) for (var c = c.chairs, d = 0; d < c.length; d++) if (!c[d]._8s() && c[d]._Sq() === parseInt(a.id)) {
        c[d]._df(a);
        break
      }
    }
  },
  onCanvasClicked: function (a, b, c) {
    if (!_Mf._L2._oa() && a in this.multiTables && (a = this.getGameElementsByTable(a))) for (var a = a.chairs, d = 0; d < a.length; d++) if (!a[d]._8s() && a[d].giftNotice && a[d].giftNotice.hasNotGiftAction(a[d]._q6(),
      b, c)) {
      a[d].socialPlayerProfile && this._v2(a[d].socialPlayerProfile);
      break
    }
  },
  _Ik: function (a) {
    this._Bg(a.recentGifts.list);
    this.view.setSelectedGift(null)
  },
  _nd: function (a, b) {
    if (!a || a.code != _Xl._br._dc.ResultCode._w) a.code == _Xl._br._dc.ResultCode.COULD_NOT_USE_GIFT ? this.view._Te(_Tf._41.$("_69")) : this.view._Te(_Tf._41.$("_65"));
    else {
      a.value && a.value.kind == _Xl._Vn._dc.GiftKind.GIFT_DECK && this._qg();
      var c = [_Xl._Vn._dc.GiftKind.GIFT_DEALER, _Xl._Vn._dc.GiftKind.GIFT_BACKGROUND, _Xl._Vn._dc.GiftKind.GIFT_BLACKJACK_DEALER,
      _Xl._Vn._dc.GiftKind.GIFT_BLACKJACK_BACKGROUND, _Xl._Vn._dc.GiftKind.GIFT_BACCARAT_DEALER, _Xl._Vn._dc.GiftKind.GIFT_BACCARAT_BACKGROUND, _Xl._Vn._dc.GiftKind.GIFT_PAIGOW_BACKGROUND];
      a.value && -1 != c.indexOf(a.value.kind) ? (b.gift.type = a.value.kind, b.gift.giftSrc = a.value.resource.url, _Xl._R6._hj._8b.onUseGiftResources(b.gift)) : a.value && a.value.kind == _Xl._Vn._dc.GiftKind.GIFT_AVATAR && _Mf._ks.emitAsync(_Xl._br._dc._Ag.NEED_REFRESH_PLAYER_INFO, null);
      this.view._tp(_Tf._41.$("_E5").format(b.gift.name))
    }
  },
  _pg: function () { },
  _5s: function (a) {
    !a || a.code != _Xl._br._dc.ResultCode._w ? this.view._Te(_Tf._41.$("_65")) : (_Mf._ks.emitAsync(_Xl._br._dc._Ag.NEED_REFRESH_PLAYER_INFO, null), this.view._tp(_Tf._41.$("_i5")))
  },
  _Id: function (a, b) {
    !a || a.code != _Xl._br._dc.ResultCode._w ? this.view._Te(_Tf._41.$("_65")) : a.value && a.value.isLocked ? this.view._Te(_Tf._41.$("_S2").format(a.value.unlockPlayerLevel)) : !a.value || !a.value.resource || !a.value.resource.url ? this.view._Te(_Tf._41.$("_65")) : (b.gift.giftSrc = a.value.resource.url, _Xl._R6._hj._8b.onUseGiftResources(b.gift))
  },
  _Pb: function (a, b) {
    if (a && !(b && parseInt(b.id) === _Mf._L2._d1()) && b && b.name) a.senderAvatarSrc = null != b.avatar && null != b.avatar.normal ? b.avatar.normal : _Tf._0l._A._Nc._0q, a.senderName = b.name, _Mf.PopupManagerInstance.push(function () {
      _Xl._Vn._N1.showSocialDialogWithGiftImage(a.id, _Tf._41.$("_h"), a, "left", !1, _Mf.PopupManagerInstance.onClose.bind(_Mf.PopupManagerInstance))
    })
  },
  _F8: function (a) {
    if (a && a.value) {
      var b = _Tf._dc.GameType,
        c = _Mf._Up._9p();
      b.isBlackJack(c) ? ("undefined" !== typeof a.value.currentBlackjackBackgroundGift && this.applyGiftResource(a.value.currentBlackjackBackgroundGift), "undefined" !== typeof a.value.currentBlackjackDealerGift && this.applyGiftResource(a.value.currentBlackjackDealerGift)) : b.isBaccarat(c) ? ("undefined" !== typeof a.value.currentBaccaratBackgroundGift && this.applyGiftResource(a.value.currentBaccaratBackgroundGift), "undefined" !== typeof a.value.currentBaccaratDealerGift && this.applyGiftResource(a.value.currentBaccaratDealerGift)) : b.isPaigow(c) ? ("undefined" !== typeof a.value.currentPaigowBackgroundGift && this.applyGiftResource(a.value.currentPaigowBackgroundGift), "undefined" !== typeof a.value.currentPaigowDealerGift && this.applyGiftResource(a.value.currentPaigowDealerGift)) : b.isCraps(c) ? "undefined" !== typeof a.value.currentCrapsBackgroundGift && this.applyGiftResource(a.value.currentCrapsBackgroundGift) : ("undefined" !== typeof a.value.currentDealerGift && this.applyGiftResource(a.value.currentDealerGift), "undefined" !== typeof a.value.currentBackgroundGift && this.applyGiftResource(a.value.currentBackgroundGift));
      if (a.value.currentDeckGift && a.value.currentDeckGiftUseStamp) {
        var b = 1,
          c = _Xl._Vn._0l,
          d = _Tf._Ek._29.getLocalDateFromString(a.value.currentDeckGiftUseStamp),
          e = 0,
          f = this;
        if ("undefined" !== typeof c.deckGiftHoursToExpire) b = c.deckGiftHoursToExpire;
        d.setHours(d.getHours() + b);
        e = d - new Date;
        if (0 < e) this.deckResourcesTimeOut = setTimeout(function () {
          f._ws()
        }, e), this.deckResources.init(a.value.currentDeckGift), "undefined" !== typeof c.deckResourcePriority ? _Tf._M4._np.deckManager.addResource(this.deckResources, c.deckResourcePriority) : _Tf._M4._np.deckManager.addResource(this.deckResources), _Mf._ks.emit(_Ag._c0, arguments)
      }
    }
  },
  applyGiftResource: function (a) {
    a.type = a.kind;
    a.giftSrc = a.resource.url;
    _Xl._R6._hj._8b.onUseGiftResources(a)
  },
  _Cl: function () { },
  _hn: function (a) {
    if (a.message && (a = a.message, !a.isLocked && a.resource && a.resource.url && this.lastVideoType)) {
      var b = a.resource.url.indexOf("?"),
        c = a.resource.url; - 1 < b && (c = c.substr(0, b));
      this.view._er(c, a.name, a.preview.url, this.lastVideoType);
      _Mf._Md.changePage(_Xl._Vn._0l._N1._ff.VIDEO)
    }
    this.lastVideoType = null
  },
  onGetActiveTable: function (a) {
    a || this._ng(null)
  }
};
_Xl._Vn._U6._fa = function () {
  this.giftTagsByKind = {};
  this.giftCategories = [];
  this.gifts = {};
  this.giftsByKind = {};
  this.ownedGiftsByKind = {}
};
_Xl._Vn._U6._fa.prototype = {
  giftTagsByKind: null,
  giftCategories: [],
  gifts: {},
  giftsByKind: {},
  ownedGiftsByKind: {},
  setGiftCategories: function (a) {
    this.giftCategories = a || []
  },
  setTagsByKind: function (a, b) {
    this.giftTagsByKind[a] = b || []
  },
  getFirstTagByKind: function (a) {
    return !this.giftTagsByKind[a] || 0 === this.giftTagsByKind[a].length ? null : this.giftTagsByKind[a][0]
  },
  setGiftsByCategory: function (a, b, c) {
    a && b && (a in this.gifts || (this.gifts[a] = []), this.gifts[a] = c ? this.gifts[a].concat(b) : b)
  },
  getGiftsByCategory: function (a) {
    return !a ? this.gifts : this.gifts[a]
  },
  setGiftsByKind: function (a, b, c) {
    a && b && (a in this.giftsByKind || (this.giftsByKind[a] = []), this.giftsByKind[a] = c ? this.giftsByKind[a].concat(b) : b)
  },
  setOwnedGiftsByKind: function (a, b) {
    a && b && (a in this.ownedGiftsByKind || (this.ownedGiftsByKind[a] = []), this.ownedGiftsByKind[a] = b)
  },
  removeGiftByKindAndIndex: function (a, b) {
    if (!a || !(a.kind in this.giftsByKind) || this.giftsByKind[a.kind][b].id != a.id) return !1;
    this.giftsByKind[a.kind].splice(b, 1);
    return !0
  },
  getGiftsByKind: function (a) {
    return !a || 0 === a.length ? this.giftsByKind : this.giftsByKind[a]
  },
  getOwnedGiftsByKind: function (a) {
    return !a || 0 === a.length ? this.ownedGiftsByKind : this.ownedGiftsByKind[a]
  },
  getGiftCategories: function () {
    return this.giftCategories
  },
  clear: function () {
    this.setGiftCategories([]);
    this.giftTagsByKind = {};
    this.gifts = {};
    this.giftsByKind = {};
    this.ownedGiftsByKind = {}
  }
};
_me.gifts = new function (a, b, c) {
  this.giftsTagsByKind = {};
  this.giftsCurrentTagByKind = {};
  this.giftsByKind = {};
  this.ownedGiftsByKind = {};
  for (var d in c) c.hasOwnProperty(d) && (this.giftsTagsByKind[c[d]] = ko.observableArray(), this.giftsCurrentTagByKind[c[d]] = ko.observable(null), this.giftsByKind[c[d]] = new _c2(null, !1, b._Nr, b.isLimitedCountOnPagesInListView, b.CountLimitedPages), this.ownedGiftsByKind[c[d]] = new _c2(null, !1, b._8e, b.isLimitedCountOwnedGiftsOnPagesInListView, b.CountLimitedPages));
  this.setTagsByKind = function (a, c) {
    this.giftsTagsByKind[a](c || []);
    for (var d = 0; d < c.length; d++) this.giftsByKind[a][c[d].id] = new _c2(null, !1, b._Nr, b.isLimitedCountOnPagesInListView, b.CountLimitedPages)
  };
  this.setCurrentTagByKind = function (a, b) {
    if (b && "object" === typeof b) b = b.id;
    this.giftsCurrentTagByKind[a](b || null)
  };
  this.changeTag = function (a) {
    this.setCurrentTagByKind(a.kind, a.tag);
    this.giftsByKind[a.kind][a.tag.id].goToFirstPage();
    this.giftsByKind[a.kind][a.tag.id].update()
  };
  this.openGiftPage = function (a) {
    _me.menu.openPage(a)
  };
  this.currentOwnedGiftKind = ko.observable(c.GIFT_VIRTUAL);
  this.setCurrentOwnedGiftKind = function (a) {
    a && (this.currentOwnedGiftKind(a), this.setSelectedGift(null), this.ownedGiftsByKind[a].update())
  };
  this.changeOwnedGiftKind = function (a) {
    _Xl._Vn._hj._Le._7n(a)
  };
  this.goToFirstPageOfOwnedGifts = function () {
    for (var a in this.ownedGiftsByKind) this.ownedGiftsByKind.hasOwnProperty(a) && this.ownedGiftsByKind[a].goToFirstPage()
  };
  this.setGiftsList = function (b, d, g, h, j, k, l) {
    h = h || !1;
    if (b && !(!(b in this.giftsByKind) && !h || !(b in this.ownedGiftsByKind) && h)) {
      for (j = 0; j < d.length; j++) if (!d[j].locale) if (d[j].locale = a.locale, d[j].getGiftPrice = this.getGiftPrice, d[j].giftSrc = "", b != c.GIFT_VIDEO && d[j].preview) d[j].giftSrc = d[j].preview.url;
      else if (d[j].icon) d[j].giftSrc = d[j].icon.url;
      else if (d[j].preview) d[j].giftSrc = d[j].preview.url;
      "undefined" !== typeof l && l || (h ? (this.ownedGiftsByKind[b].set(d, g), this.ownedGiftsByKind[b].goToFirstPage()) : (b = _me.gifts.giftsByKind[b], k && (b = b[k]), b.set(d, g)))
    }
  };
  a.publicProfile.details.subscribe(function (b) {
    if (!b || !b.recentGifts) a.publicProfile.recentGifts([]);
    else {
      for (var c = [], d = 0; d < b.recentGifts.list.length; d++) b.recentGifts.list[d] && b.recentGifts.list[d].preview && c.push({
        giftSrc: b.recentGifts.list[d].preview.url
      });
      a.publicProfile.recentGifts(c)
    }
  }.bind(this));
  this.NO_GIFT_ID = -1;
  this.selectedGiftId = ko.observable(null);
  this.selectedGift = ko.observable(null);
  this.setSelectedGift = function (a) {
    var b = this.selectedGift();
    b && b.target && $(b.target).removeClass("selectedGift");
    !a || !a.gift || "undefined" === typeof a.gift.id ? (this.selectedGiftId(null), this.selectedGift(null)) : ($(a.target).addClass("selectedGift"), this.selectedGiftId(a.gift.id), this.selectedGift(a))
  };
  this.videoGift = ko.observable(null);
  this.videoSources = ko.observableArray([]);
  this.toggleGift = function (a) {
    a && a.gift && (a.gift.id === this.selectedGiftId() ? this.setSelectedGift(null) : this.setSelectedGift(a))
  };
  this.buyGift = function (a) {
    var b = _Xl._Vn._dc.PurchaseType;
    a === b.FOR_PLAYER || a === b.FOR_SELF ? _Xl._Vn._hj._Le._Th() : a === b.FOR_OPPONENTS && _Xl._Vn._hj._Le._J();
    this.setSelectedGift(null)
  }.bind(this);
  this.useGift = function () {
    this.selectedGiftId() === this.NO_GIFT_ID && this.selectedGift().gift.kind === _Xl._Vn._dc.GiftKind.GIFT_AVATAR ? _Xl._Vn._hj._Le._Gb() : this.selectedGift() && this.selectedGift().gift && this.selectedGift().gift.kind === _Xl._Vn._dc.GiftKind.GIFT_VIDEO ? _Xl._Vn._hj._Le._A2() : _Xl._Vn._hj._Le._zr();
    this.setSelectedGift(null);
    0 < _me.tablesSnap.openedTables().length && a.menu.openPage("tables");
    _Tf._Ek._29.hidePageLoadingMessage()
  }.bind(this);
  this.removeGift = function () {
    _Xl._Vn._hj._Le._sq()
  }.bind(this);
  this.clearGiftAvatar = function () {
    this.setSelectedGift({
      gift: {
        id: this.NO_GIFT_ID,
        isNoGift: !0,
        kind: "avatar"
      }
    })
  }.bind(this);
  this.getGiftPrice = function (a) {
    var b = a ? parseInt(a.price) : 0,
      a = a ? a.moneyType : _Tf._dc.MoneyType._i4;
    return "undefined" === typeof _Tf._Ek._29 ? b : _Tf._Ek._29._ca(b, a, !0)
  };
  this.getGiftCurrencyName = function (a) {
    var a = a ? a.moneyType : _Tf._dc.MoneyType._i4,
      b = _Tf._41.$("_U6._79");
    a === _Tf._dc.MoneyType._Ok && (b = _Tf._41.$("_U6._E7"));
    return b
  };
  this.isRealMoney = function (a) {
    return (a ? a.moneyType : _Tf._dc.MoneyType._i4) === _Tf._dc.MoneyType._Ok
  };
  this.selectedPlayerFromTable = ko.observable(null);
  this.NO_ACTIVE_TABLE_ID = -1;
  this.selectedTableId = ko.observable(this.NO_ACTIVE_TABLE_ID);
  this.setSelectedPlayerFromTable = function (a) {
    if (a) {
      a.avatarSrc = _Tf._0l._A._Nc._0q;
      if (a.avatar && a.avatar.normal) a.avatarSrc = a.avatar.normal;
      this.selectedPlayerFromTable(a)
    } else this.selectedPlayerFromTable(null)
  };
  this.openFromTable = function () {
    var a = _Mf._q1._y9();
    if (null === a) a = this.NO_ACTIVE_TABLE_ID;
    _Xl._Vn._hj._Le._fl(a)
  }.bind(this);
  this.clearAllOwnGifts = function () {
    this.onClientLogout()
  };
  this.onClientLogout = function () {
    for (var a in c) {
      if (!c.hasOwnProperty(a)) return;
      this.ownedGiftsByKind[c[a]].set([])
    }
    this.setSelectedGift(null);
    this.setSelectedPlayerFromTable(null);
    this.selectedTableId(null);
    this.currentInventoryPage("virtual")
  };
  _Mf._ks.addListener(_Ag._ki, this.onClientLogout, this);
  a.miniProfile.details.subscribe(function (b) {
    a.miniProfile.sendGift = function () {
      _Xl._Vn._hj._Le._v2(b);
      a.miniProfile.closeDialog()
    }
  })
}(_me, _Xl._Vn._0l, _Xl._Vn._dc.GiftKind);
_Xl._Vn._M4._9._Kf = function () {
  _Xl._Vn._M4._9._Kf.superclass.apply(this, arguments)
};
extend(_Xl._Vn._M4._9._Kf, _Tf._M4._9._Kf);
_Xl._Vn._M4._9._Kf.prototype.subscribers = {
  _Qn: function (a, b) {
    _Xl._Vn._hj._Le._o2(a, b)
  },
  _Ue: function (a, b) {
    _Xl._Vn._hj._Le._q5(a, b)
  },
  _Rb: function (a, b) {
    _Xl._Vn._hj._Le._Vk(a, b)
  },
  _Wm: function (a, b) {
    _Xl._Vn._hj._Le._92(a, b)
  },
  _pl: function (a) {
    _Xl._Vn._hj._Le._gd(a)
  },
  _Pq: function (a, b) {
    _Xl._Vn._hj._Le._X5(a, b)
  },
  _i1: function () { },
  _0o: function (a, b) {
    _Xl._Vn._hj._Le._nd(a, b)
  },
  _D1: function () { },
  _ge: function (a, b) {
    _Xl._Vn._hj._Le._Id(a, b)
  },
  _54: function (a, b) {
    _Xl._Vn._hj._Le._5s(a, b)
  },
  _lg: function (a) {
    _Xl._Vn._hj._Le._F8(a)
  },
  _s: function (a) {
    _Xl._Vn._hj._Le._Cl(a)
  }
};
_Xl._Vn._M4._9._Kf.prototype._6g = function () {
  var a = this.messageTypes;
  this.callbacksMap[a.MAKE_GIFT_TO_PLAYERS] = this.subscribers._Qn;
  this.callbacksMap[a.GET_OWNED_GIFTS_BY_KIND] = this.subscribers._Ue;
  this.callbacksMap[a.GET_GIFTS] = this.subscribers._Rb;
  this.callbacksMap[a.GET_GIFTS_BY_KIND] = this.subscribers._Wm;
  this.callbacksMap[a.GET_GIFT_CATEGORIES] = this.subscribers._pl;
  this.callbacksMap[a.GET_GIFT_MULTIPLIERS] = this.subscribers._i1;
  this.callbacksMap[a.USE_GIFT] = this.subscribers._0o;
  this.callbacksMap[a.REMOVE_GIFT] = this.subscribers._D1;
  this.callbacksMap[a.GET_OWN_GIFT_DETAILS] = this.subscribers._ge;
  this.callbacksMap[a.CLEAR_GIFT_AVATAR] = this.subscribers._54;
  this.callbacksMap[a.PROFILE_OVERVIEW] = this.subscribers._lg;
  this.callbacksMap[a.GET_GIFT_TAGS] = this.subscribers._Pq;
  this.callbacksMap[a.GET_FREE_VIDEO_GIFT] = this.subscribers._s
};
_Xl._Vn._N1 = {};
_Xl._Vn._N1.showSocialDialogWithGiftImage = function (a, b, c, d, e, f) {
  return _Xl._br._N1.showSocialDialog(a, "gift", b, _h8._wc._an.GIFT_INFO.fill({
    name: c.name,
    image: c.preview.url,
    senderName: _Tf._41.$("_F5") + c.senderName,
    senderAvatarSrc: c.senderAvatarSrc
  }), d, e, null, f)
};
_Xl._Vn._0r._Tr = {
  MAKE_GIFT_TO_PLAYERS: "Gift.makeGiftToPlayers",
  GET_OWNED_GIFTS_BY_KIND: "Gift.getOwnedGifts.byKind",
  GET_GIFTS: "Gift.getGifts",
  GET_GIFTS_BY_KIND: "Gift.getGifts.byKind",
  GET_GIFT_CATEGORIES: "Gift.getGiftCategories",
  GET_GIFT_TAGS: "Gift.getGiftTags",
  GET_GIFT_MULTIPLIERS: "Gift.getGiftMultipliers",
  USE_GIFT: "Gift.useGift",
  REMOVE_GIFT: "Gift.removeGift",
  CLEAR_GIFT_AVATAR: "Profile.clearGiftAvatar",
  GET_OWN_GIFT_DETAILS: "Gift.getOwnGiftDetails",
  PROFILE_OVERVIEW: "Profile.getProfileOverview.deck",
  GET_FREE_VIDEO_GIFT: "Gift.getFreeVideoGift"
};
_Xl._Vn._co = function () { };
_Xl._Vn._co.prototype = {
  _d: null,
  _Le: null,
  extractClasses: function () { },
  initialize: function () {
    this._d = new _Xl._br._M4._20._Kf(_Xl._br._0l._xj.socialFeaturesService, new _Tf._M4._A3._Kf(_Xl._br._0l._xj.socialFeaturesService), new _Xl._Vn._M4._9._Kf(_Xl._Vn._0r._Tr), _Xl._Vn._0r._Tr);
    this._Le = new Sandbox._E9._Y3._fa
  },
  init: function () {
    _Xl._Vn._0l.isUsedCategories ? this._Le._Dl() : _Xl._Vn._0l.isUsedTags ? this._Le._ka() : this._Le._Me();
    this._Le._4m();
    this._Le._qg();
    this._Le._Rr()
  },
  subscribeToEvents: function () {
    _Xl._Vn._0l._gc._68 && _Mf._ks.addListener(_Ag._fj, function () {
      LazyLoad.css(_Xl._Vn._0l._gc._68)
    }, null);
    _Mf._ks.addListener(_Ag._ki, function () {
      this._Le._Q7()
    }, this);
    _Mf._ks.addListener(_Xl._br._dc._Ag.PLAYER_INFO_DIALOG, function (a, b) {
      this._Le._k4(a, b)
    }, this);
    _Xl._Vn._0l.hasSupportOpeningGiftShopAfterClickOnGiftIcon && _Mf._ks.addListener(_Ag._W9, function (a, b, c) {
      this._Le.onCanvasClicked(a, b, c)
    }, this);
    _Mf._ks.addListener(_Ag._Q9, function (a) {
      this._Le._ni(a.game.model.chairs, a.tableId)
    }, this);
    _Mf._ks.addListener(_Ag._f8, function (a) {
      this._Le._ni(null,
        a.tableId)
    }, this);
    _Mf._ks.addListener(_Xl._br._dc._Ag.CUSTOM_MESSAGE, function (a) {
      this._Le._ib(a)
    }, this);
    _Mf._ks.addListener(_Xl._br._dc._Ag.PLAYER_PUBLIC_PROFILE_PAGE, function (a) {
      a && this._Le._Ik(a)
    }, this);
    _Mf._ks.addListener(_Ag._Vi, function () {
      this._Le._Q7();
      this.init()
    }, this);
    _Mf._ks.addListener(_Ag._Zo, function (a) {
      this._Le.onGetActiveTable(a)
    }, this)
  }
};
_Xl._Vn._Ek._Fm._bf.Video = function (a, b) {
  _Xl._Vn._Ek._Fm._bf.Video.superclass.apply(this, arguments);
  this.videoPlayer = null
};
extend(_Xl._Vn._Ek._Fm._bf.Video, _Tf._Ek._Fm._bf._X6);
_Xl._Vn._Ek._Fm._bf.Video._ff = _Xl._Vn._0l._N1._ff.VIDEO;
_Xl._Vn._Ek._Fm._bf.Video.prototype._G1 = function () {
  if (this.base._G1.apply(this, arguments)) {
    var a = $(_Xl._Vn._0l._N1.VIDEO);
    if (a && a.length) this.videoPlayer = a = a.get(0), "function" === typeof a.requestFullScreen ? a.requestFullScreen() : "function" === typeof a.webkitRequestFullScreen ? a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : "function" === typeof a.mozRequestFullScreen && a.mozRequestFullScreen()
  }
};
_Xl._Vn._Ek._Fm._bf.Video.prototype._jp = function () {
  if (this.base._jp.apply(this, arguments) && this.videoPlayer) this.videoPlayer.pause(), this.videoPlayer = null
};
_Xl._Vn._Ek._Fm._bf.Video.prototype._Q = function (a) {
  return !1 === this.base._Q.apply(this, arguments) ? !1 : !0
};
_Xl._Vn._Ek._2s._o4._Q2 = function (a, b, c) {
  this.context = a;
  this.designPosition = _Mf._b1.getPositionByParentId(c);
  this.locate(b);
  this.giftImage = null
};
_Xl._Vn._Ek._2s._o4._Q2.prototype = {
  locate: function (a) {
    a = this.designPosition.chairs[a];
    this.position = a.posGiftAvatar ? a.posGiftAvatar.clone() : null
  },
  clearItselfOnMiddle: function () {
    if (this.position) {
      var a = this.designPosition.giftAvatar;
      _Tf._Ek._29.fillRectToClear(this.context, this.position.x - 4, this.position.y - 4, (a.width || this.giftImage.width) + 8, (a.height || this.giftImage.height) + 8)
    }
  },
  draw: function () {
    if (this.position && this.giftImage) {
      var a = this.designPosition.giftAvatar,
        b = a.width || this.giftImage.width,
        a = a.height || this.giftImage.height;
      _Tf._Ek._29.drawImage(this.context, this.giftImage, this.position.x + b / 2, this.position.y + a / 2, 0, b, a)
    }
  },
  setGiftAvatar: function (a) {
    this.giftImage = a
  },
  update: function () { }
};
_Xl._Vn._a._Un._8l._Q2 = function (a, b, c, d) {
  this.model = new _Xl._Vn._U6._Un._8l._Q2(b);
  this.view = new Sandbox._E9._2s._o4._Q2(a, c, d)
};
_Xl._Vn._a._Un._8l._Q2.prototype = {
  model: null,
  view: null,
  _tc: function (a) {
    this.view.locate(a)
  },
  _K5: function () {
    this.model.hasGiftAvatar() && this.view.draw(this.model.giftAvatar)
  },
  __1: function () {
    return this.model.hasGiftAvatar()
  },
  _X4: function () {
    this.view.update(this.model)
  },
  _Q7: function () {
    this.model.clearGiftAvatar()
  },
  clearItselfOnMiddle: function () {
    this.view.clearItselfOnMiddle()
  },
  _9c: function (a, b) {
    this.model.setGiftAvatar(a);
    this.view.setGiftAvatar(b)
  }
};
_Xl._Vn._U6._Un._8l._Q2 = function (a) {
  this.giftAvatar = null;
  this.number = a
};
_Xl._Vn._U6._Un._8l._Q2.prototype = {
  giftAvatar: null,
  setGiftAvatar: function (a) {
    if ("object" === typeof a && a) this.giftAvatar = a
  },
  getGiftAvatar: function () {
    return this.giftAvatar
  },
  clearGiftAvatar: function () {
    this.giftAvatar = null
  },
  hasGiftAvatar: function () {
    return !!this.giftAvatar
  },
  __k: function () {
    return this.number
  }
};
_Xl._Vn._Ek._2s._o4._43 = function (a, b, c) {
  this.context = a;
  this.parentId = c;
  this.designPosition = _Mf._b1.getPositionByParentId(c);
  this.locate(b);
  this.blinking = {
    lastValue: "",
    lastValueCount: 0,
    lastValueCountMax: _Tf._0l.FRAME_RATE,
    waitTick: 3
  };
  this.giftImage = null
};
_Xl._Vn._Ek._2s._o4._43.prototype = {
  locate: function (a) {
    a = this.designPosition.chairs[a];
    this.position = a.posGift ? a.posGift.clone() : a.posCenter.clone()
  },
  _3p: function (a, b) {
    var c = this.position,
      d = this.designPosition.gift,
      e = c.x + d.offsetX - a,
      c = c.y + d.offsetY - b,
      d = this.designPosition.gift.width;
    return e * e + c * c <= d * d
  },
  _drawGift: function (a) {
    if (this.giftImage) {
      var b = _Tf._Ek._29,
        c = _h8._0l._vn,
        d = this.position,
        e = this.designPosition.gift;
      b.drawImage(this.context, this.giftImage, d.x + e.offsetX, d.y + e.offsetY, 0, e.width || this.giftImage.width,
        e.height || this.giftImage.height);
      null !== e.nameYoffset && b.fillText(this.context, this.designPosition, a.name, d.x, d.y + e.nameYoffset, c.TEXT_WIN_TABLE, 12, !1, "", !0)
    }
  },
  draw: function (a, b) {
    0 === a.length || 0 > this.blinking.lastValueCount || (this._drawGift(a[0], b), this.setGiftUrl(this.solveGiftUrl(a[0])), this.blinking.lastValueCount++)
  },
  setGiftUrl: function (a) {
    if (this.blinking.lastValue !== a) this.blinking.lastValue = a, this.giftImage = null, _Tf._Ek._29.loadImage(a, this, "giftImage", !1)
  },
  solveGiftUrl: function (a) {
    var b = "";
    a && a.preview && (b = a.preview.url || b);
    return b
  },
  update: function (a) {
    if (0 > this.blinking.lastValueCount) this.blinking.lastValueCount++;
    else if (1 < a.gifts.length && this.blinking.lastValueCount >= this.blinking.lastValueCountMax && this.solveGiftUrl(a.gifts[0]) === this.blinking.lastValue) a.gifts.shift(), this.blinking.lastValueCount = -this.blinking.waitTick, this.blinking.lastValue = ""
  }
};
_Xl._Vn._a._Un._8l._43 = function (a, b, c, d) {
  this.model = new _Xl._Vn._U6._Un._8l._43(b);
  this.view = new Sandbox._E9._2s._o4._43(a, c, _Tf._0l._N1._6i.format(d))
};
_Xl._Vn._a._Un._8l._43.prototype = {
  model: null,
  view: null,
  _tc: function (a) {
    this.view.locate(a)
  },
  _K5: function (a, b) {
    this.view.draw(this.model.gifts, a, b)
  },
  _X4: function () {
    this.view.update(this.model)
  },
  _Q7: function () {
    this.model.clearGifts()
  },
  _3g: function (a) {
    this.model.addGift(a)
  },
  hasNotGiftAction: function (a, b, c) {
    return !this.model.hasGifts() && this.view._3p(b, c, a)
  }
};
_Xl._Vn._U6._Un._8l._43 = function (a) {
  this.gifts = [];
  this.number = a
};
_Xl._Vn._U6._Un._8l._43.prototype = {
  gifts: [],
  addGift: function (a) {
    "object" === typeof a && a && this.gifts.push(a)
  },
  clearGifts: function () {
    this.gifts = []
  },
  hasGifts: function () {
    return 0 < this.gifts.length
  },
  __k: function () {
    return this.number
  }
};
_Xl._7a = {
  shortName: "module.social-achievements"
};
_Tf._hr.extendObject(SandBoxObject, _Xl._7a);
_Xl._7a._0l.DELAY_EXPERIENCE_MESSAGE = 2;
_Xl._7a._0l._Nr = 6;
_Xl._7a._0l._xj = {
  achievementsImages: {
    address: "http://test.vegasgames.com/service/static/core/images/achievements/",
    format: ".png",
    levelUpImageAddress: "http://test.vegasgames.com/service/static/core/images/levelup.png"
  }
};
_Xl._7a._0l._gc = {
  _68: ""
};
_Xl._7a._Ek._2s._bf._Tm = function () { };
_Xl._7a._Ek._2s._bf._Tm.prototype = {
  drawAchievementsList: function (a) {
    Loader.onHideStaticLoader();
    _me.achievements.setAchievementsList(a)
  },
  drawAchievementsStatistics: function (a) {
    _me.achievements.statistics(a)
  },
  prepareToLoadTournamentAchievements: function () {
    Loader.onShowStaticLoader()
  },
  drawTournamentAchievements: function (a) {
    _me.achievements.setTournamentAchievementsList(a);
    Loader.onHideStaticLoader()
  },
  drawClientProfile: function (a) {
    _me.achievements.setLevelAndExperience(a)
  },
  drawRecentAchievements: function () { },
  onPaidPlayerExtras: function (a) {
    _me.achievements.paidPlayerExtraRealMoney(_Tf._Ek._29._ca(a.realMoney, _Tf._dc.MoneyType._Ok));
    _me.achievements.paidPlayerExtraPlayMoney(_Tf._Ek._29._ca(a.playMoney, _Tf._dc.MoneyType._i4));
    _Mf.PopupManagerInstance.showImmediately(function () {
      _me.menu.openExternalDialog(_Xl._7a._0l._N1._ff.PAID_PLAYER_EXTRAS)
    })
  },
  onRegistrationBonus: function (a) {
    _me.achievements.paidPlayerExtraRealMoney(_Tf._Ek._29._ca(a.realMoney, _Tf._dc.MoneyType._Ok));
    _me.achievements.paidPlayerExtraPlayMoney(_Tf._Ek._29._ca(a.playMoney,
      _Tf._dc.MoneyType._i4));
    var b = null;
    _Mf.PopupManagerInstance.push(function () {
      b = _Xl._br._N1.showSocialDialog("Name", "registerBonus", "", '<div id="register-bonus-text-img"></div><div id="register-bonus-close-button"></div>', null, null, null, _Mf.PopupManagerInstance.onClose.bind(_Mf.PopupManagerInstance))
    });
    _Tf._N1.$(_Tf._0l._N1._Lq).live(EventType._qc, function () {
      b && _Xl._br._N1.hideSocialDialog({
        hashConfirmForm: b,
        closeHandler: _Mf.PopupManagerInstance
      })
    })
  }
};
_Xl._7a._a._Tm = function () {
  this.model = new _Xl._7a._U6._Tm;
  this.view = new Sandbox._E9._2s._bf._Tm
};
_Xl._7a._a._Tm.prototype = {
  model: null,
  view: null,
  _K5: function () {
    this.view.drawAchievementsList(this.model.getAchievementsList());
    this._pd()
  },
  _8m: function () {
    this.view.drawClientProfile(this.model.getClientProfile())
  },
  _pd: function () {
    this.view.drawAchievementsStatistics(this.model.getAchievementsListStatistics())
  },
  _Lg: function (a) {
    this.view.drawRecentAchievements(a)
  },
  _Q7: function () {
    this.model.clear()
  },
  _Ab: function () {
    return this.model.getLevel()
  },
  _Yo: function () {
    _Xl._7a._hj._d.send(_Xl._7a._0r._Tr.GET_ALLOWED_ACHIEVEMENTS, {
      data: "[]"
    })
  },
  _uj: function () {
    _Xl._7a._hj._d.send(_Xl._7a._0r._Tr.EARN_OFFLINE_ACHIEVEMENTS, {
      data: "[]"
    })
  },
  _fd: function () {
    Loader.onShowStaticLoader();
    _Xl._7a._hj._d.send(_Xl._7a._0r._Tr.GET_ACHIEVEMENTS, {
      data: '["none"]'
    })
  },
  getTournamentAchievementsListAction: function () {
    _Xl._7a._0l.canShowTournamentAchievements && (this.view.prepareToLoadTournamentAchievements(), _Xl._7a._hj._d.send(_Xl._7a._0r._Tr.GET_TOURNAMENT_ACHIEVEMENTS, {
      data: "[]"
    }))
  },
  _in: function (a) {
    this.model.setClientProfile(a)
  },
  _ds: function (a) {
    if (a) {
      var b = _Tf._41,
        c = _Xl._7a._dc.AchievementTypeByCode,
        d = _Xl._7a._0l._xj.achievementsImages;
      _Mf._ks.emit(_Ag._eh, [{
        text: b.$("_x8").format(b.$("_33." + a.type), b.$("_c9." + a.type)),
        picture: "{0}/{1}{2}".format(d.address, c[a.type], d.imageFormat)
      }])
    }
  },
  _xn: function (a) {
    if (a) {
      var b = _Xl._7a._0l._xj.achievementsImages;
      _Mf._ks.emit(_Ag._eh, [{
        text: _Tf._41.$("_n9").format(a.playerLevel),
        picture: b.levelUpImageAddress
      }])
    }
  },
  _Mm: function (a) {
    a && 0 == a.code && (this.model.setAllowedAchievementsCodes(a.value), this._uj())
  },
  _jm: function (a) {
    a && 0 == a.code && (this.model.setAchievementsList(a.value), this._K5())
  },
  onTournamentAchievementsList: function (a) {
    a && 0 == a.code && (this.model.setTournamentAchievementsList(a.value), this.view.drawTournamentAchievements(a.value))
  },
  _77: function () { },
  _Lj: function (a) {
    if (a.achievements) for (var a = a.achievements, b = 0; b < a.length; b++) 1 == a[b].value && this.model.isAchievementAllowed(a[b].type) && this._Lf(a[b])
  },
  _Nm: function (a) {
    this.model.setLevel(a);
    this._8m();
    1 >= a.playerLevel || (_Mf.PopupManagerInstance.push(function () {
      var b = _Xl._br._N1.showSocialDialog(a.playerLevel, "level", _Tf._41.$("_W4"), _Tf._41.$("_O7").format(a.playerLevel), "left", null, null, _Mf.PopupManagerInstance.onClose.bind(_Mf.PopupManagerInstance));
      if (_Xl._yn) {
        var c = _Xl._yn._hj._M5._f7();
        c && "facebook" === c.provider && _Xl._br._N1.addButtonToSocialDialog(b, _Tf._41.$("_12"), this._xn.bind(this, a))
      }
    }.bind(this)), _Xl._7a._hj._d.send(_Xl._7a._0r._Tr.GET_LEVEL_BONUS, {
      data: "[]"
    }))
  },
  _n5: function (a) {
    a && 0 == a.code && parseInt(a.value.bonusChips) && this._T4(_Tf._Ek._29._ca(parseInt(a.value.bonusChips)))
  },
  _gf: function (a) {
    if (a.points) {
      this.model.setExperience(a);
      this._8m();
      var b = _Mf._q1._Rm(a.tableId);
      b && (b = b._w4()) && b._mn(a.points)
    }
  },
  _ib: function (a) {
    if (a && a.typeMessage) if (a.typeMessage === _Xl._br._dc.CustomTextMessageType.REGISTRATION_BONUS) this.onRegistrationBonus(a.message);
    else if (a.typeMessage === _Xl._br._dc.CustomTextMessageType.ACHIEVEMENT_BONUS) this._H5(a.message);
    else if (a.typeMessage === _Xl._br._dc.CustomTextMessageType.POKER_EXPERIENCE) this._gf(a.message);
    else if (a.typeMessage === _Xl._br._dc.CustomTextMessageType.POKER_LEVEL) this._Nm(a.message);
    else if (a.typeMessage === _Xl._br._dc.CustomTextMessageType.TOURNAMENT_ACHIEVEMENTS) this._Lf(a.message);
    else if (a.typeMessage === _Xl._br._dc.CustomTextMessageType.PAID_PLAYER_EXTRAS) this.onPaidPlayerExtras(a.message)
  },
  _H5: function (a) {
    parseInt(a.amount) && this._T4(_Tf._Ek._29._ca(parseInt(a.amount), a.moneyType))
  },
  _T4: function (a) {
    _Mf.PopupManagerInstance.push(function () {
      _Tf._N1._zh(_Tf._41.$("_Q6"), _Tf._41.$("_17").format(a), null, "", _Mf.PopupManagerInstance.onClose.bind(_Mf.PopupManagerInstance))
    })
  },
  _Lf: function (a) {
    _Mf.PopupManagerInstance.push(function () {
      var b = _Xl._7a._N1.showSocialDialogWithAchievementImage(a.value, _Tf._41.$("_R0"), a, "left", !1, _Mf.PopupManagerInstance.onClose.bind(_Mf.PopupManagerInstance));
      if (_Xl._yn) {
        var c = _Xl._yn._hj._M5._f7();
        c && "facebook" === c.provider && _Xl._br._N1.addButtonToSocialDialog(b, _Tf._41.$("_12"), this._ds.bind(this, a))
      }
    }.bind(this));
    this.model.achievementUp();
    this._pd()
  },
  _Ik: function (a) {
    this._Lg(a.recentAchievements.list)
  },
  onPaidPlayerExtras: function (a) {
    if (a && !("undefined" === typeof a.realMoney || "undefined" === typeof a.playMoney)) _Mf._ks.emit(_Xl._br._dc._Ag.PAID_PLAYER_BONUS,
      null), this.view.onPaidPlayerExtras(a)
  },
  onRegistrationBonus: function (a) {
    if (a && !("undefined" === typeof a.realMoney || "undefined" === typeof a.playMoney)) _Mf._ks.emit(_Xl._br._dc._Ag.REGISTRATION_BONUS, null), this.view.onRegistrationBonus(a)
  }
};
_Xl._7a._U6._Tm = function () {
  this.clear()
};
_Xl._7a._U6._Tm.prototype = {
  allowedAchievementsCodes: [],
  achievements: [],
  achievementsStatistics: {
    all: 0,
    earned: 0
  },
  clientProfile: null,
  clear: function () {
    this.allowedAchievementsCodes = [];
    this.achievements = [];
    this.tournamentAchievements = [];
    this.achievementsStatistics = {
      all: 0,
      earned: 0
    };
    this.clientProfile = null
  },
  setClientProfile: function (a) {
    if (a) a.level = parseInt(a.level), a.experience = parseInt(a.experience);
    this.clientProfile = a
  },
  getClientProfile: function () {
    return this.clientProfile
  },
  getExperience: function () {
    return this.clientProfile ? this.clientProfile.experience || 0 : 0
  },
  getLevel: function () {
    return this.clientProfile ? this.clientProfile.level || 0 : 0
  },
  setExperience: function (a) {
    this.clientProfile = this.clientProfile || {};
    this.clientProfile.experience = parseInt(a.playerExperience) || this.clientProfile.experience;
    a = parseInt(this.clientProfile.levelBounds.to);
    if (this.clientProfile.experience > a) this.clientProfile.experience = a
  },
  setLevel: function (a) {
    this.clientProfile = this.clientProfile || {};
    this.clientProfile.level = parseInt(a.playerLevel);
    this.clientProfile.experience = parseInt(a.playerExperience);
    this.clientProfile.levelBounds = a.levelBounds
  },
  achievementUp: function () {
    this.achievementsStatistics.earned += 1
  },
  setAllowedAchievementsCodes: function (a) {
    this.allowedAchievementsCodes = a || []
  },
  isAchievementAllowed: function (a) {
    return -1 < this.allowedAchievementsCodes.indexOf(a) && "undefined" != typeof _Xl._7a._dc.AchievementTypeByCode[a]
  },
  setAchievementsList: function (a) {
    if (!a || 0 === a.length) this.achievements = [];
    for (var b = [], c = 0, d = 0, e = 0; e < a.length; e++) this.isAchievementAllowed(a[e].type) && (c++ , a[e].isEarned && d++ , b.push(a[e]));
    this.achievements = b;
    this.achievementsStatistics = {
      all: c,
      earned: d
    }
  },
  setTournamentAchievementsList: function (a) {
    this.tournamentAchievements = a || []
  },
  getAchievementsList: function () {
    return this.achievements || []
  },
  getAchievementsListStatistics: function () {
    return this.achievementsStatistics
  }
};
_me.achievements = new function (a, b) {
  this.level = ko.observable("");
  this.levelNumber = ko.observable(0);
  this.levelBounds = ko.observable({
    from: 0,
    to: 0
  });
  this.paidPlayerExtraRealMoney = ko.observable("");
  this.paidPlayerExtraPlayMoney = ko.observable("");
  this.closePaidPlayerExtrasDialog = function () {
    a.menu.closeExternalDialog(_Xl._7a._0l._N1._ff.PAID_PLAYER_EXTRAS);
    _Mf.PopupManagerInstance.onClose()
  };
  this.experience = ko.observable(0);
  this.isShowLoadMore = ko.observable(!0);
  this.growAchievementsPage = function () {
    this.achievementsList.growPage();
    this.isShowLoadMore(!1)
  }.bind(this);
  this.earnedExperience = ko.observable("");
  this.setLevelAndExperience = function (a) {
    a ? (this.level(_Tf._41.$("_15").format(a.level, a.levelName)), this.levelNumber(a.level), this.levelBounds(a.levelBounds || this.levelBounds()), this.experience(a.experience || 0), this.earnedExperience(_Tf._41.$("_y4").format(a.experience || 0, a.levelBounds.to || 0))) : (this.level(""), this.levelNumber(0), this.levelBounds({
      from: 0,
      to: 0
    }), this.experience(0), this.earnedExperience(""))
  };
  this.statistics = ko.observable({
    earned: 0,
    all: 0
  });
  this.achievementsList = new _c2(null, !1, b._Nr, b.isLimitedCountOnPagesInListView, b.CountLimitedPages);
  this.tournamentAchievementsList = new _c2(null, !1, b._Nr, b.isLimitedCountOnPagesInListView, b.CountLimitedPages);
  this.setAchievementsList = function (b) {
    for (var d = [], e = _Xl._7a._0l._xj.achievementsImages.address + "{0}" + _Xl._7a._0l._xj.achievementsImages.format, f = _Xl._7a._dc.AchievementTypeByCode, g = _Tf._41, h = 0; h < b.length; h++) if ("undefined" !== typeof f[b[h].type]) d.push(b[h]), d[h].locale = a.locale, d[h].getAchievementBonus = this.getAchievementBonus, d[h].achievementSrc = e.format(f[b[h].type]), d[h].name = g.$("_33." + b[h].type), d[h].description = g.$("_c9." + b[h].type);
    this.achievementsList.set(d)
  };
  this.setTournamentAchievementsList = function (b) {
    for (var d = [], e = _Xl._7a._0l._xj.achievementsImages.address + "{0}" + _Xl._7a._0l._xj.achievementsImages.format, f = _Xl._7a._dc.AchievementTypeByCode, g = _Tf._41, h, j, k, l = 0; l < b.length; l++) if ("undefined" !== typeof f[b[l].type]) k = b[l], d.push(k), k.locale = a.locale, k.achievementSrc = e.format(f[k.type]), k.name = g.$("_33." + k.type), h = "undefined" != typeof k.tournamentName, j = _Tf._41.$("_c9." + k.type), h && (h = "", 0 < k.firstPrize && (h += _Tf._Ek._29._ca(k.firstPrize, k.firstPrizeMoneyType, !0)), 0 < k.secondPrize && (0 < h.length && (h += "+"), h += _Tf._Ek._29._ca(k.secondPrize, k.secondPrizeMoneyType, !0)), k.ticketPrize && (0 < h.length && (h += "+"), h += _Tf._41.$("_Z4")), j = j.format(h, k.tournamentName)), d[l].description = j;
    this.tournamentAchievementsList.set(d)
  };
  a.publicProfile.clientDetails.subscribe(function (a) {
    _Xl._7a._hj._Ac._in(a);
    this.setLevelAndExperience(a)
  }.bind(this));
  a.publicProfile.details.subscribe(function (b) {
    if (!b || !b.recentAchievements) a.publicProfile.recentAchievements([]);
    else {
      for (var d = [], e = _Xl._7a._0l._xj.achievementsImages.address + "{0}" + _Xl._7a._0l._xj.achievementsImages.format, f = _Xl._7a._dc.AchievementTypeByCode, g = 0; g < b.recentAchievements.list.length; g++) b.recentAchievements.list[g] && "undefined" !== typeof f[b.recentAchievements.list[g].type] && d.push({
        achievementSrc: e.format(f[b.recentAchievements.list[g].type])
      });
      a.publicProfile.recentAchievements(d)
    }
  }.bind(this));
  a.miniProfile.details.subscribe(function (b) {
    var d = _Xl._7a._0l._xj.achievementsImages.address + "{0}" + _Xl._7a._0l._xj.achievementsImages.format,
      e = _Xl._7a._dc.AchievementTypeByCode,
      f = _Tf._41;
    !b || !b.recentAchievements || !b.recentAchievements.list || 1 > b.recentAchievements.list.length || !b.recentAchievements.list[0] || !b.recentAchievements.list[0].type || "undefined" === typeof e[b.recentAchievements.list[0].type] ? (a.miniProfile.recentAchievementSrc(null), a.miniProfile.recentAchievementName(null)) : (b = b.recentAchievements.list[0].type, a.miniProfile.recentAchievementSrc(d.format(e[b])), a.miniProfile.recentAchievementName(f.$("_33." + b)))
  });
  this.getAchievementBonus = function (a) {
    var a = a ? parseInt(a.amount) : 0,
      b = _Tf._dc.MoneyType._i4;
    return a = "undefined" === typeof _Tf._Ek._29 ? a : _Tf._Ek._29._ca(a, b)
  };
  this.onClientLogout = function () {
    this.statistics({
      earned: 0,
      all: 0
    });
    this.setLevelAndExperience(null);
    this.achievementsList.set([])
  };
  _Mf._ks.addListener(_Ag._ki, this.onClientLogout, this)
}(_me, _Xl._7a._0l);
_Xl._7a._0l._N1 = {};
_Xl._7a._0l._N1._ff = {};
_Xl._7a._h8._wc._an = {
  init: function () {
    _h8._wc._an.ACHIEVEMENT_INFO = '<div class="achievement-image-background">\n\t\t\t<img src="{url}/{image}{format}" width="60em" class="achievement-image" /></div>\n\t\t\t<div class="achievement-name">{name}</div>'.fill({
      url: _Xl._7a._0l._xj.achievementsImages.address,
      format: _Xl._7a._0l._xj.achievementsImages.format
    })
  }
};
_Xl._7a._dc.AchievementType = {
  LEVEL: "1000012",
  EXPERIENCE: "100011"
};
_Xl._7a._dc.AchievementTypeByCode = {
  "0": "none",
  100: "win_1_hand",
  101: "win_2_hands_in_a_row",
  102: "win_3_hands_in_a_row",
  103: "win_5_hands_in_a_row",
  104: "win_10_hands_in_a_row",
  105: "win_15_hands_in_a_row",
  202: "win_with_three_of_a_kind",
  203: "win_with_four_of_a_kind",
  204: "win_with_flush",
  205: "win_with_full_house",
  206: "win_with_straight",
  208: "win_with_straight_flush",
  209: "win_with_royal_flush",
  300: "win_with_qt",
  301: "win_with_aj",
  302: "win_with_ak",
  303: "win_with_j5",
  304: "win_with_jj",
  305: "win_with_aa",
  306: "win_with_k9",
  307: "win_with_kk",
  308: "win_with_27",
  309: "win_with_t2",
  320: "win_with_88",
  500: "win_with_three_of_a_kind_10_times",
  501: "win_with_three_of_a_kind_25_times",
  504: "win_with_three_of_a_kind_100_times",
  505: "win_with_straight_10_times",
  506: "win_with_straight_25_times",
  508: "win_with_straight_100_times",
  509: "win_with_flush_10_times",
  510: "win_with_flush_25_times",
  512: "win_with_flush_100_times",
  513: "win_with_full_house_10_times",
  514: "win_with_full_house_25_times",
  516: "win_with_full_house_100_times",
  701: "win_5k_pot",
  703: "win_20k_pot",
  705: "win_50k_pot",
  706: "win_250k_pot",
  707: "win_500k_pot",
  708: "win_1m_pot",
  903: "win_1m_in_total",
  1101: "go_all_in_and_win",
  1116: "lose_with_four_of_a_kind_or_better",
  1117: "sit_down_at_table",
  1121: "participate_in_tournament",
  1122: "participate_in_sit_and_go",
  1127: "finish_tournament_in_top_20_percent",
  100001: "be_my_buddy",
  100002: "popularity_rocks",
  100003: "buddy_system",
  100011: "experience",
  1000012: "level"
};
_Xl._7a._M4._9._Kf = function () {
  _Xl._7a._M4._9._Kf.superclass.apply(this, arguments)
};
extend(_Xl._7a._M4._9._Kf, _Tf._M4._9._Kf);
_Xl._7a._M4._9._Kf.prototype.subscribers = {
  _dn: function (a) {
    _Xl._7a._hj._Ac._77(a)
  },
  _1b: function (a) {
    _Xl._7a._hj._Ac._jm(a)
  },
  getTournamentAchievementsHandler: function (a) {
    _Xl._7a._hj._Ac.onTournamentAchievementsList(a)
  },
  _Qd: function (a) {
    _Xl._7a._hj._Ac._Mm(a)
  },
  _07: function (a) {
    _Xl._7a._hj._Ac._n5(a)
  }
};
_Xl._7a._M4._9._Kf.prototype._6g = function () {
  var a = this.messageTypes;
  this.callbacksMap[a.EARN_OFFLINE_ACHIEVEMENTS] = this.subscribers._dn;
  this.callbacksMap[a.GET_ACHIEVEMENTS] = this.subscribers._1b;
  this.callbacksMap[a.GET_TOURNAMENT_ACHIEVEMENTS] = this.subscribers.getTournamentAchievementsHandler;
  this.callbacksMap[a.GET_LEVEL_BONUS] = this.subscribers._07;
  this.callbacksMap[a.GET_ALLOWED_ACHIEVEMENTS] = this.subscribers._Qd
};
_Xl._7a._N1 = {};
_Xl._7a._N1.showSocialDialogWithAchievementImage = function (a, b, c, d, e, f) {
  var g = "undefined" != typeof c.tournamentName,
    h = _Tf._41.$("_c9." + c.type);
  g && (g = "", 0 < c.firstPrize && (g += _Tf._Ek._29._ca(c.firstPrize, c.firstPrizeMoneyType, !0)), 0 < c.secondPrize && (0 < g.length && (g += "+"), g += _Tf._Ek._29._ca(c.secondPrize, c.secondPrizeMoneyType, !0)), c.ticketPrize && (0 < g.length && (g += "+"), g += _Tf._41.$("_Z4")), h = h.format(g, c.tournamentName));
  return _Xl._br._N1.showSocialDialog(a, "achievement", b, _h8._wc._an.ACHIEVEMENT_INFO.fill({
    name: _Tf._41.$("_33." + c.type),
    description: h,
    image: _Xl._7a._dc.AchievementTypeByCode[c.type]
  }), d, e, null, f)
};
_Xl._7a._0r._Tr = {
  EARN_OFFLINE_ACHIEVEMENTS: "Achievement.earnOfflineAchievements",
  GET_ACHIEVEMENTS: "Achievement.getAchievements",
  GET_TOURNAMENT_ACHIEVEMENTS: "Achievement.getTournamentAchievements",
  GET_ALLOWED_ACHIEVEMENTS: "Achievement.getAllowedAchievements",
  GET_LEVEL_BONUS: "Achievement.getLevelBonus",
  ACHIEVEMENT_PLAYER_NOTIFY: "AchievementPlayerNotify"
};
_Xl._7a._0r._Gs.AchievementPlayerNotify = function () {
  this.tableId = 0;
  this.achievements = [];
  this.values.achievement = _Xl._7a._0r.Values.achievement
};
_Xl._7a._0r._Gs.AchievementPlayerNotify.prototype = {
  fields: {
    tableId: ["Int"]
  },
  values: {
    achievement: null
  },
  _n9: function (a) {
    for (var a = a.childNodes, b = a.length, c, d = 0; d < b; d++) {
      c = _Tf._0r.parse._J9(a[d].attributes);
      if (!this.hasOwnProperty(c.n)) return !1;
      if (a[d].firstChild && 3 == a[d].firstChild.nodeType) _Tf._0r.build.Value(c.n, a[d].firstChild.nodeValue, this.fields, this);
      else if ("a" == a[d].firstChild.nodeName) this[c.n] = _Tf._0r.build.Array(a[d].firstChild.childNodes, this);
      else return !1
    }
    return !0
  }
};
_Xl._7a._0r.Values.achievement = {
  type: null,
  value: ["Int"],
  stamp: null
};
_Xl._7a._co = function () { };
_Xl._7a._co.prototype = {
  _d: null,
  _Ac: null,
  extractClasses: function () {
    _Tf._0r._Gs.AchievementPlayerNotify = _Xl._7a._0r._Gs.AchievementPlayerNotify
  },
  initialize: function () {
    this._d = new _Xl._br._M4._20._Kf(_Xl._br._0l._xj.socialFeaturesService, new _Tf._M4._A3._Kf(_Xl._br._0l._xj.socialFeaturesService), new _Xl._7a._M4._9._Kf(_Xl._7a._0r._Tr), _Xl._7a._0r._Tr);
    this._Ac = new Sandbox._E9._Y3._Tm
  },
  subscribeToEvents: function () {
    _Xl._7a._0l._gc._68 && _Mf._ks.addListener(_Ag._fj, function () {
      LazyLoad.css(_Xl._7a._0l._gc._68)
    },
      null);
    _Mf._ks.addListener(_Ag._em, function (a) {
      a && a.type == _Xl._7a._0r._Tr.ACHIEVEMENT_PLAYER_NOTIFY && this._Ac._Lj(a)
    }, this);
    _Mf._ks.addListener(_Xl._br._dc._Ag.CLIENT_READY, function () {
      this._Ac._Yo()
    }, this);
    _Mf._ks.addListener(_Ag._ki, function () {
      this._Ac._Q7()
    }, this);
    _Mf._ks.addListener(_Xl._br._dc._Ag.CUSTOM_MESSAGE, function (a) {
      this._Ac._ib(a)
    }, this);
    _Mf._ks.addListener(_Xl._br._dc._Ag.PLAYER_PUBLIC_PROFILE_PAGE, function (a) {
      a && this._Ac._Ik(a)
    }, this)
  }
};
_Xl._7a._Ek._2s._o4._ek = function (a, b, c) {
  this.appendResources();
  this.context = a;
  this.designPosition = c;
  this.locate(b);
  this.blinking = {
    lastValue: "",
    lastValueCount: 0,
    lastValueCountMax: _Xl._7a._0l.DELAY_EXPERIENCE_MESSAGE * _Tf._0l.FRAME_RATE,
    waitTick: 3
  }
};
_Xl._7a._Ek._2s._o4._ek.prototype = {
  appendResources: function () {
    this.winTable = _Tf._M4._np.table.getElement("winTable")
  },
  locate: function (a) {
    this.position = this.designPosition.chairs[a].posCenter.clone()
  },
  _drawMessage: function (a) {
    var b = _h8._0l._vn,
      c = this.position,
      d = this.designPosition.winTable;
    _Tf._Ek._29.fillText(this.context, this.designPosition, _Tf._41.$("_E1").format(a), c.x, c.y + d.offsetYpot - 1 * this.blinking.lastValueCount, b.PLAYER_CASH, d.textPot + 0.5 * this.blinking.lastValueCount)
  },
  draw: function (a) {
    if (!(0 === a.length || 0 > this.blinking.lastValueCount)) this._drawMessage(a[0]), this.blinking.lastValue = a[0], this.blinking.lastValueCount++
  },
  update: function (a) {
    if (0 > this.blinking.lastValueCount) this.blinking.lastValueCount++;
    else if (1 === a.messages.length && this.blinking.lastValueCount >= this.blinking.lastValueCountMax && a.messages[0] === this.blinking.lastValue) a.messages.shift(), this.blinking.lastValueCount = 0, this.blinking.lastValue = "";
    else if (1 < a.messages.length && this.blinking.lastValueCount >= this.blinking.lastValueCountMax && a.messages[0] === this.blinking.lastValue) a.messages.shift(), this.blinking.lastValueCount = -this.blinking.waitTick, this.blinking.lastValue = ""
  }
};
_Xl._7a._a._Un._8l._ek = function (a, b, c, d, e) {
  this.model = new _Xl._7a._U6._Un._8l._ek;
  this.view = new Sandbox._E9._2s._o4._ek(a, d, e)
};
_Xl._7a._a._Un._8l._ek.prototype = {
  model: null,
  view: null,
  _tc: function (a) {
    this.view.locate(a)
  },
  _K5: function () {
    this.model._34() && this.view.draw(this.model.messages)
  },
  _X4: function () {
    this.view.update(this.model)
  },
  _Q7: function () {
    this.model._Y0()
  },
  _40: function (a) {
    this.model._Yg(a)
  },
  _za: function (a) {
    this.model._K(a)
  }
};
_Xl._7a._U6._Un._8l._ek = function () {
  this.messages = []
};
_Xl._7a._U6._Un._8l._ek.prototype = {
  messages: [],
  _Yg: function (a) {
    "number" === typeof a && 0 < a && this.messages.push("" + a)
  },
  _K: function (a) {
    this._34() && this._Y0();
    this._Yg(a)
  },
  _Y0: function () {
    this.messages = []
  },
  _34: function () {
    return 0 < this.messages.length
  }
};
_Xl._z1 = {
  shortName: "module.social-redeem-code"
};
_Tf._hr.extendObject(SandBoxObject, _Xl._z1);
_Xl._z1._0l._gc = {
  _68: ""
};
_Xl._z1._0l._N1 = {};
_Xl._z1._0l._N1._ff = {
  REDEEM_CODE: "redeem-code"
};
_Xl._z1._M4._9._Kf = function () {
  _Xl._z1._M4._9._Kf.superclass.apply(this, arguments)
};
extend(_Xl._z1._M4._9._Kf, _Tf._M4._9._Kf);
_Xl._z1._M4._9._Kf.prototype.subscribers = {
  _F3: function (a, b) {
    _Xl._z1._hj._th._wk(a, b)
  }
};
_Xl._z1._M4._9._Kf.prototype._6g = function () {
  this.callbacksMap[this.messageTypes.SEND_REDEEM_CODE] = this.subscribers._F3
};
_Xl._z1._0r._Tr = {
  SEND_REDEEM_CODE: "Redeem.sendCode"
};
_Xl._z1._Ek._2s._bf.__s = function () { };
_Xl._z1._Ek._2s._bf.__s.prototype = {
  prepareToRedeemCode: function () {
    _Mf._Md.getVisiblePage() == _Xl._z1._0l._N1._ff.REDEEM_CODE && _Tf._Ek._29.showPageLoadingMessage()
  },
  redeemCodeSuccess: function () {
    _me.redeemCode.promoCode("");
    _Mf._Md.getVisiblePage() == _Xl._z1._0l._N1._ff.REDEEM_CODE && _Tf._Ek._29.hidePageLoadingMessage()
  },
  redeemCodeFailed: function () {
    _Mf._Md.getVisiblePage() == _Xl._z1._0l._N1._ff.REDEEM_CODE && _Tf._Ek._29.hidePageLoadingMessage()
  }
};
_Xl._z1._a.__s = function () {
  this.model = new _Xl._z1._U6.__s;
  this.view = new Sandbox._E9._2s._bf.__s
};
_Xl._z1._a.__s.prototype = {
  model: null,
  view: null,
  _ko: function (a) {
    !_Mf._L2._oa() && a && _Xl._br._hj.checkConnectionToSocialService() && (_Xl._z1._hj._d.send(_Xl._z1._0r._Tr.SEND_REDEEM_CODE, {
      data: '["{0}"]'.format(a)
    }), this.view.prepareToRedeemCode())
  },
  _R5: function (a) {
    a && _Mf._ks.emit(_Ag._eh, [{
      text: _Tf._41.$("_R._S6").format(a)
    }])
  },
  _wk: function (a) {
    if (!a || a.code != _Xl._br._dc.ResultCode._w || !a.value) _Tf._N1._zh("", _Tf._41.$("_86._I1")), this.view.redeemCodeFailed(_Tf._41.$("_86._I1"));
    else if (_Mf._Md.backInHistoryStack(),
      this.view.redeemCodeSuccess(), a = _Tf._Ek._29._ca(a.value), _Xl._yn) {
      var b = _Xl._yn._hj._M5._f7();
      b && "facebook" === b.provider ? _Tf._N1._zh(_Tf._41.$("_R._F"), _Tf._41.$("_R._X").format(a), this._R5.bind(this, a), _Tf._41.$("_R._u1")) : _Tf._N1._zh(_Tf._41.$("_R._F"), _Tf._41.$("_R._X").format(a))
    }
  }
};
_Xl._z1._Ek._Fm._bf.__s = function (a, b) {
  _Xl._z1._Ek._Fm._bf.__s.superclass.apply(this, arguments)
};
extend(_Xl._z1._Ek._Fm._bf.__s, _Tf._Ek._Fm._bf._X6);
_Xl._z1._Ek._Fm._bf.__s._ff = _Xl._z1._0l._N1._ff.REDEEM_CODE;
_Xl._z1._Ek._Fm._bf.__s.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : !_Xl._br._hj.checkConnectionToSocialService() ? !1 : !0
};
_Xl._z1._Ek._Fm._bf.__s.prototype._Sr = function () {
  this.base._Sr.apply(this, arguments) && _me.redeemCode.promoCode("")
};
_Xl._z1._U6.__s = function () { };
_Xl._z1._U6.__s.prototype = {};
_me.redeemCode = new function () {
  this.promoCode = ko.observable("");
  this.applyPromoCode = function () {
    _Xl._z1._hj._th._ko(this.promoCode())
  }.bind(this)
}(_me);
_Xl._z1._co = function () { };
_Xl._z1._co.prototype = {
  _d: null,
  _th: null,
  extractClasses: function () { },
  initialize: function () {
    this._d = new _Xl._br._M4._20._Kf(_Xl._br._0l._xj.socialFeaturesService, new _Tf._M4._A3._Kf(_Xl._br._0l._xj.socialFeaturesService), new _Xl._z1._M4._9._Kf(_Xl._z1._0r._Tr), _Xl._z1._0r._Tr);
    this._th = new Sandbox._E9._Y3.__s
  },
  subscribeToEvents: function () {
    _Xl._z1._0l._gc._68 && _Mf._ks.addListener(_Ag._fj, function () {
      LazyLoad.css(_Xl._z1._0l._gc._68)
    }, null)
  }
};
_Xl._Z8 = {
  shortName: "module.restore-password"
};
_Tf._hr.extendObject(SandBoxObject, _Xl._Z8);
_Xl._Z8._0l._xj = {
  restorePasswordService: {
    address: "http://test.vegasgames.com/html5service/html5poker-services/restorepassword/index/index"
  }
};
_Xl._Z8._0l._N1 = {
  BLOCK_FORGOT_PASSWORD: "#forgot-password",
  BUTTON_FORGOT_PASSWORD: "#button-forgot-password",
  INPUT_EMAIL: "#input-email"
};
_Xl._Z8._h8._wc._an = {
  init: function () {
    _h8._wc._an.RESTORE_PASSWORD_BUTTON = '<div class="link-label" id="{id}">{text}</div>'.fill({
      text: _Tf._41.$("_Y6"),
      id: _Xl._Z8._0l._N1.BUTTON_FORGOT_PASSWORD.substr(1)
    })
  }
};
_Xl._Z8._dc.__a = {
  _08: 0,
  EMPTY_EMAIL: 1,
  EMAIL_NOT_EXIST: 2,
  INTERNAL_ERROR: 3
};
_Xl._Z8._M4._9._Kf = function () {
  _Xl._Z8._M4._9._Kf.superclass.apply(this, arguments)
};
extend(_Xl._Z8._M4._9._Kf, _Tf._M4._9._Kf);
_Xl._Z8._M4._9._Kf.prototype.subscribers = {
  _zi: function (a) {
    _Xl._Z8._hj._y0(a)
  }
};
_Xl._Z8._M4._9._Kf.prototype._6g = function () {
  this.callbacksMap[this.messageTypes.RESTORE_PASSWORD] = this.subscribers._zi
};
_Xl._Z8._M4._20._Kf = function (a, b, c) {
  _Xl._Z8._M4._20._Kf.superclass.apply(this, arguments)
};
extend(_Xl._Z8._M4._20._Kf, _Tf._M4._20._Kf);
_Xl._Z8._M4._20._Kf.prototype._i0 = function () {
  return this.connectionConfig.address
};
_Xl._Z8._N1 = {};
_Xl._Z8._N1.showInputEmailDialog = function (a, b, c, d) {
  _Tf._N1.__i("", '{1}<input id="{0}" required type="email" value="" style="width: 90%; background: #fff; color: #000;"></input>'.format(a, b), c, d, _Tf._41.$("_j3._J7"), _Tf._41.$("_j3._76"))
};
_Xl._Z8._0r._Tr = {
  RESTORE_PASSWORD: "RestorePassword"
};
_Xl._Z8._co = function () { };
_Xl._Z8._co.prototype = {
  extractClasses: function () { },
  _d: null,
  initialize: function () {
    this._d = new _Xl._Z8._M4._20._Kf(_Xl._Z8._0l._xj.restorePasswordService, new _Tf._M4._A3._Kf, new _Xl._Z8._M4._9._Kf(_Xl._Z8._0r._Tr), _Xl._Z8._0r._Tr)
  },
  subscribeToEvents: function () {
    _Mf._ks.addListener("login-on-create", function () {
      _Tf._N1._c6(_Xl._Z8._0l._N1.BLOCK_FORGOT_PASSWORD, _h8._wc._an.RESTORE_PASSWORD_BUTTON)
    }, this);
    _Mf._ks.addListener("login-on-init", function () {
      _Tf._N1.$(_Xl._Z8._0l._N1.BUTTON_FORGOT_PASSWORD).live(EventType._qc,
        this._di.bind(this))
    }, this)
  },
  _di: function () {
    _Xl._Z8._N1.showInputEmailDialog(_Xl._Z8._0l._N1.INPUT_EMAIL.substr(1), _Tf._41.$("_R6"), this._W8.bind(this))
  },
  _W8: function () {
    var a = _Tf._N1.$(_Xl._Z8._0l._N1.INPUT_EMAIL, !0).val();
    if (!a || !/[^@]+@[^@]+/.test(a)) return _Tf._N1.showPageError(_Tf._41.$("_h7")), !1;
    _Tf._Ek._29.showPageLoadingMessage();
    this._d.send(_Xl._Z8._0r._Tr.RESTORE_PASSWORD, {
      mail: a
    });
    return !0
  },
  _y0: function (a) {
    _Mf._Md.getVisiblePage() === _Tf._0l._N1._ff._fq && _Tf._Ek._29.hidePageLoadingMessage();
    var b = _Xl._Z8._dc.__a,
      c = "_Z";
    a && a.success && (c = "_V6");
    a && a.errorcode === b.EMAIL_NOT_EXIST && (c = "_95");
    _Tf._N1._zh("", _Tf._41.$(c))
  }
};
_Xl._aj = {
  shortName: "module.social-friends"
};
_Tf._hr.extendObject(SandBoxObject, _Xl._aj);
_Xl._aj._0l.isShowDialogFriendRequestSent = !1;
_Xl._aj._0l.isShowDialogFriendRequestAccepted = !0;
_Xl._aj._0l.isShowDialogFriendRequestDeclined = !0;
_Xl._aj._0l._gc = {
  _68: ""
};
_Xl._aj._0l._N1 = {};
_Xl._aj._0l._N1._ff = {
  FRIENDS: "friends"
};
_Xl._aj._Ek._2s._bf.Friends = function () { };
_Xl._aj._Ek._2s._bf.Friends.prototype = {
  drawFriends: function (a, b) {
    _me.friends.setFriendsList(b, a);
    if (_Mf._Md.getVisiblePage() == _Xl._aj._0l._N1._ff.FRIENDS) Loader.onHideStaticLoader()
  },
  drawFriendInfo: function (a) {
    _me.friends.selectedFriendInfo(a);
    _Mf._Md.getVisiblePage() == _Xl._aj._0l._N1._ff.FRIENDS && _Tf._Ek._29.hidePageLoadingMessage()
  },
  drawFriendCurrentTable: function (a, b) {
    _me.friends.setCurrentTableToSelectedFriend(a, b)
  },
  drawOnlineFriendsCount: function (a) {
    _me.friends.onlineFriendsCount(0 < a ? a : 0)
  },
  prepareToLoadFriendsList: function () {
    if (_Mf._Md.getVisiblePage() == _Xl._aj._0l._N1._ff.FRIENDS) Loader.onShowStaticLoader()
  },
  prepareToLoadFriendInfo: function () {
    _Mf._Md.getVisiblePage() == _Xl._aj._0l._N1._ff.FRIENDS && _Tf._Ek._29.showPageLoadingMessage()
  },
  drawPublicProfile: function () { },
  _w0: function (a) {
    _Tf._N1._zh("", a)
  }
};
_Xl._aj._a.Friends = function () {
  this.model = new _Xl._aj._U6.Friends;
  this.view = new Sandbox._E9._2s._bf.Friends
};
_Xl._aj._a.Friends.prototype = {
  model: null,
  view: null,
  _Q7: function () {
    this.model.clear()
  },
  _Sh: function () {
    if (_Mf._L2._oa()) return _Mf._ks.emitAsync(_Ag._s4, null), !1;
    _Mf._ks.emit(_Ag._tn, null)
  },
  _y7: function (a) {
    if (!_Mf._L2._oa()) {
      a = a || !1;
      this.view.prepareToLoadFriendsList(!1);
      var b = _Mf._L2._d1();
      _Xl._aj._hj._d.send(_Xl._aj._0r._Tr.GET_FRIENDS, {
        data: "[" + b + "]"
      }, {
          needLoadFirstFriendInfo: a
        })
    }
  },
  getFriendInfoAction: function (a) {
    if (!("undefined" === typeof a || _Mf._L2._oa()) && _Xl._br._hj.checkConnectionToSocialService()) this.view.prepareToLoadFriendInfo(),
      _Xl._aj._hj._d.send(_Xl._aj._0r._Tr.FRIEND_INFO, {
        data: "[" + a + "]"
      })
  },
  getFriendCurrentTableAction: function (a) {
    if (!("undefined" === typeof a || _Mf._L2._oa()) && _Xl._br._hj.checkConnectionToSocialService()) this.view.prepareToLoadFriendInfo(), _Xl._aj._hj._d.send(_Xl._aj._0r._Tr.GET_FRIEND_TABLE, {
      data: "[" + a + "]"
    }, {
        friendId: a
      })
  },
  _vq: function () {
    if (!_Mf._L2._oa()) {
      this.view.prepareToLoadFriendsList(!0);
      var a = _Mf._L2._d1();
      _Xl._aj._hj._d.send(_Xl._aj._0r._Tr.GET_ONLINE_FRIENDS, {
        data: "[" + a + "]"
      })
    }
  },
  clearOnlineFriendsListAction: function () {
    this.model.setFriends([], !0);
    this.view.drawFriends([], !0)
  },
  getOnlineFriendsCountAction: function () {
    _Mf._L2._oa() || _Xl._aj._hj._d.send(_Xl._aj._0r._Tr.GET_ONLINE_FRIENDS_COUNT, {
      data: "[]"
    })
  },
  _N8: function (a) {
    a && "undefined" !== typeof a.id && _Xl._aj._hj._d.send(_Xl._aj._0r._Tr.SEND_FRIEND_REQUEST, {
      data: "[" + a.id + "]"
    })
  },
  _v4: function (a) {
    _Xl._aj._hj._d.send(_Xl._aj._0r._Tr.ACCEPT_FRIEND_REQUEST, {
      data: "[" + a + "]"
    });
    _Xl._br._hj._gb._ar(a)
  },
  _Eh: function (a) {
    _Xl._aj._hj._d.send(_Xl._aj._0r._Tr.DECLINE_FRIEND_REQUEST, {
      data: "[" + a + "]"
    });
    _Xl._br._hj._gb._ar(a)
  },
  _Eo: function (a) {
    !a || "undefined" === typeof a.id || a.id === _Mf._L2._d1() || _Tf._N1.__i("", _Tf._41.$("_L3").format(a.name || a.nick), this._Nh.bind(this, a.id))
  },
  _Nh: function (a) {
    _Xl._aj._hj._d.send(_Xl._aj._0r._Tr.REMOVE_FRIEND, {
      data: "[" + a + "]"
    })
  },
  onRemoveFriend: function (a) {
    a && 0 == a.code && this._y7(!0)
  },
  onFriendCurrentTable: function (a, b) {
    a && 0 == a.code && this.view.drawFriendCurrentTable(a.value, b.friendId)
  },
  _31: function (a, b) {
    a && 0 == a.code && (this.model.setFriends(a.value), b.needLoadFirstFriendInfo && a.value && 0 < a.value.length && this.getFriendInfoAction(a.value[0].id), this.view.drawFriends(a.value, !1))
  },
  _cj: function (a) {
    a && 0 == a.code && (this.model.setFriends(a.value, !0), this.view.drawFriends(a.value, !0))
  },
  onFriendInfo: function (a) {
    a && 0 == a.code && this.view.drawFriendInfo(a.value)
  },
  onOnlineFriendsCount: function (a) {
    a && 0 == a.code && this.view.drawOnlineFriendsCount(a.value)
  },
  _k4: function (a, b) {
    !b || "undefined" === typeof b.id || parseInt(b.id) === _Mf._L2._d1() || (this.model.isFriend(parseInt(b.id)) ? _Xl._br._N1.addButtonToSocialDialog(a, _Tf._41.$("_L"),
      this._Eo.bind(this, b)) : _Xl._br._N1.addButtonToSocialDialog(a, _Tf._41.$("_n0"), this._N8.bind(this, b)))
  },
  _G3: function (a) {
    if (!a || 0 != a.code) a.code == _Xl._br._dc.ResultCode.FRIEND_HIMSELF ? this.view._w0(_Tf._41.$("_H8._t0")) : a.code == _Xl._br._dc.ResultCode.ALREADY_FRIENDS ? this.view._w0(_Tf._41.$("_H8._f4")) : a.code == _Xl._br._dc.ResultCode.PLAYER_NOT_FOUND && this.view._w0(_Tf._41.$("_H8._K"))
  },
  _ta: function () { },
  _do: function () { },
  _lq: function (a) {
    if (!(0 < $("div.social-dialog[type=" + a.type + "]").length)) {
      var b = _Xl._br._N1.showSocialDialogWithPlayerAvatar(a.sender.avatar ? a.sender.avatar.normal : null, a.type, _Tf._41.$("_h4"), a.sender.name || a.sender.nick, "left");
      _Xl._br._N1.addButtonToSocialDialog(b, _Tf._41.$("_r5"), this._v4.bind(this, a.id));
      _Xl._br._N1.addButtonToSocialDialog(b, _Tf._41.$("_h0"), this._Eh.bind(this, a.id))
    }
  },
  _Ie: function (a) {
    _Xl._br._hj._gb._ar(a.id);
    _Xl._aj._0l.isShowDialogFriendRequestSent && !(0 < $("div.social-dialog[value=" + a.sender.id + ",type=" + a.type + "]").length) && (a = _Xl._br._N1.showSocialDialogWithPlayerAvatar(a.sender.avatar ? a.sender.avatar.normal : null,
      a.type, _Tf._41.$("_X1"), a.sender.name || a.sender.nick, "center"), _Xl._br._N1.addButtonToSocialDialog(a))
  },
  _k: function (a) {
    _Xl._br._hj._gb._ar(a.id);
    _Xl._aj._0l.isShowDialogFriendRequestAccepted && !(0 < $("div.social-dialog[value=" + a.sender.id + ",type=" + a.type + "]").length) && (a = _Xl._br._N1.showSocialDialogWithPlayerAvatar(a.sender.avatar ? a.sender.avatar.normal : null, a.type, _Tf._41.$("__4"), a.sender.name || a.sender.nick, "center"), _Xl._br._N1.addButtonToSocialDialog(a))
  },
  _Hn: function (a) {
    _Xl._br._hj._gb._ar(a.id);
    _Xl._aj._0l.isShowDialogFriendRequestDeclined && !(0 < $("div.social-dialog[value=" + a.sender.id + ",type=" + a.type + "]").length) && (a = _Xl._br._N1.showSocialDialogWithPlayerAvatar(a.sender.avatar ? a.sender.avatar.normal : null, a.type, _Tf._41.$("_S8"), a.sender.name || a.sender.nick, "center"), _Xl._br._N1.addButtonToSocialDialog(a))
  },
  _W7: function (a) {
    if (!_Mf._L2._oa()) switch (a.type) {
      case "friend_invite":
        this._lq(a);
        break;
      case "friend_invite_sent":
        this._Ie(a);
        break;
      case "friend_decline":
        this._Hn(a);
        break;
      case "friend_accept":
        this._k(a)
    }
  },
  isAboutFriends: function (a) {
    return "friend_invite" === a || "friend_invite_sent" === a || "friend_accept" === a || "friend_decline" === a
  },
  _Ik: function (a) {
    this.view.drawPublicProfile(a)
  }
};
_Xl._aj._Ek._Fm._bf.Friends = function (a, b) {
  _Xl._aj._Ek._Fm._bf.Friends.superclass.apply(this, arguments)
};
extend(_Xl._aj._Ek._Fm._bf.Friends, _Tf._Ek._Fm._bf._X6);
_Xl._aj._Ek._Fm._bf.Friends.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : !_Xl._br._hj.checkConnectionToSocialService() ? !1 : !0
};
_Xl._aj._Ek._Fm._bf.Friends.prototype._Sr = function () {
  this.base._Sr.apply(this, arguments) && _Xl._aj._hj._ua.clearOnlineFriendsListAction()
};
_Xl._aj._Ek._Fm._bf.Friends.prototype._G1 = function () {
  this.base._G1.apply(this, arguments) && _Xl._aj._hj._ua._vq()
};
_Xl._aj._Ek._Fm._bf.Friends.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._N1,
      b = _Tf._0l._N1;
    a.$("#{0} ".format(this.page) + b._Sd).live(EventType._qc, function () {
      _Xl._aj._hj._ua._vq()
    });
    a.$("#{0} ".format(this.page) + b._zn).live(EventType._db, function () {
      _me.friends.onlineFriendsList.growPage()
    });
    a.$("#{0} ".format(this.page) + b._r3).live(EventType._Fa, function () {
      _me.friends.onlineFriendsList.reducePage()
    })
  }
};
_Xl._aj._U6.Friends = function () {
  this.friends = {};
  this.onlineFriends = []
};
_Xl._aj._U6.Friends.prototype = {
  friends: {},
  setFriends: function (a, b) {
    if (b) this.onlineFriends = a || [];
    else {
      for (var c = {}, d = 0; d < a.length; d++) {
        var e = a[d];
        e.id && (c[e.id] = e)
      }
      this.friends = c
    }
  },
  getFriends: function (a) {
    return a ? this.onlineFriends : this.friends
  },
  getFirstFriend: function () {
    if (!this.friends) return null;
    for (var a in this.friends) return this.friends[a]
  },
  clear: function () {
    this.setFriends([]);
    this.setFriends([], !0)
  },
  isFriend: function (a) {
    return !!this.getFriend(a)
  },
  getFriend: function (a) {
    return !this.getFriends() ? null : this.friends[a]
  },
  removeFriend: function (a) {
    this.friends[a] && delete this.friends[a]
  }
};
_me.friends = new function (a, b) {
  this.setFriendsList = function (a, d, e) {
    for (var f = _Tf._0l._A._Nc._0q, g = 0; g < d.length; g++) {
      d[g].tablesArray = ko.observableArray(d[g].currentTable ? [d[g].currentTable] : []);
      d[g].avatarSrc = f;
      if (d[g].avatar && d[g].avatar.normal) d[g].avatarSrc = d[g].avatar.normal;
      d[g].openTable = this.openTable;
      d[g].locale = b.locale;
      d[g].getTableData = this.getTableData
    }
    a ? (this.onlineFriendsList.set(d, e), this.onlineFriendsCount(d.length)) : (this.friendsList.set(d, e), this.selectedFriendInfo(null))
  };
  this.getTableData = function (a) {
    return "{0} ({1})".format(a.name, b.lobbyTablesFilters.getStakes(a))
  };
  this.openTable = function (a) {
    if (a && "undefined" !== typeof a.id) {
      if ("number" != typeof a.gameType) a.gameType = isNaN(parseInt(a.gameType)) ? a.gameType.charCodeAt(0) : parseInt(a.gameType);
      b.lobby.openTable(a)
    }
  };
  this.onlineFriendsList = new _c2(null, !1, a._Nr, a.isLimitedCountOnPagesInListView, a.CountLimitedPages);
  this.friendsList = new _c2(null, !1, a._Nr);
  this.selectedFriendInfoId = ko.observable(null);
  this.selectedFriendInfo = ko.observable(null);
  this.selectedFriendInfo.subscribe(function (a) {
    if (null === a || "undefined" === typeof a.id) this.selectedFriendInfoId(null);
    else {
      a.avatarSrc = _Tf._0l._A._Nc._0q;
      if (a.avatar && a.avatar.large) a.avatarSrc = a.avatar.large;
      a.registerDate = moment(a.registerDate).format("MMM.d, YYYY");
      a.tablesArray = ko.observableArray([]);
      a.openTable = this.openTable;
      a.getTableData = this.getTableData;
      this.selectedFriendInfoId(a.id);
      _Xl._aj._hj._ua.getFriendCurrentTableAction(a.id)
    }
  }.bind(this));
  this.setCurrentTableToSelectedFriend = function (a,
    b) {
    this.selectedFriendInfoId() == b && this.selectedFriendInfo().tablesArray(a ? [a] : [])
  }.bind(this);
  this.onlineFriendsCount = ko.observable(0);
  this.inviteFriends = function () {
    _Xl._aj._hj._ua._Sh()
  };
  this.getFriendInfo = function (a) {
    a && "undefined" !== typeof a.id && _Xl._aj._hj._ua.getFriendInfoAction(a.id)
  };
  this.removeFriend = function (a) {
    a && "undefined" !== typeof a.id && _Xl._aj._hj._ua._Eo(a)
  };
  this.onClientLogout = function () {
    this.setFriendsList(!0, []);
    this.setFriendsList(!1, [])
  };
  _Mf._ks.addListener(_Ag._ki, this.onClientLogout,
    this);
  b.miniProfile.details.subscribe(function (a) {
    b.miniProfile.addBuddy = function () {
      _Xl._aj._hj._ua._N8(a);
      b.miniProfile.closeDialog()
    }
  })
}(_Xl._aj._0l, _me);
_Xl._aj._M4._9._Kf = function () {
  _Xl._aj._M4._9._Kf.superclass.apply(this, arguments)
};
extend(_Xl._aj._M4._9._Kf, _Tf._M4._9._Kf);
_Xl._aj._M4._9._Kf.prototype.subscribers = {
  _Nh: function (a) {
    _Xl._aj._hj._ua.onRemoveFriend(a)
  },
  _yc: function (a) {
    _Xl._aj._hj._ua._cj(a)
  },
  onlineFriendsCountHandler: function (a) {
    _Xl._aj._hj._ua.onOnlineFriendsCount(a)
  },
  _wd: function (a, b) {
    _Xl._aj._hj._ua._31(a, b)
  },
  _wj: function (a, b) {
    _Xl._aj._hj._ua.onFriendCurrentTable(a, b)
  },
  _js: function (a) {
    _Xl._aj._hj._ua._ta(a)
  },
  _8a: function (a) {
    _Xl._aj._hj._ua._do(a)
  },
  _dq: function (a) {
    _Xl._aj._hj._ua._G3(a)
  },
  _y5: function (a) {
    _Xl._aj._hj._ua.onFriendInfo(a)
  }
};
_Xl._aj._M4._9._Kf.prototype._6g = function () {
  var a = this.messageTypes;
  this.callbacksMap[a.REMOVE_FRIEND] = this.subscribers._Nh;
  this.callbacksMap[a.GET_ONLINE_FRIENDS] = this.subscribers._yc;
  this.callbacksMap[a.GET_ONLINE_FRIENDS_COUNT] = this.subscribers.onlineFriendsCountHandler;
  this.callbacksMap[a.GET_FRIENDS] = this.subscribers._wd;
  this.callbacksMap[a.GET_FRIEND_TABLE] = this.subscribers._wj;
  this.callbacksMap[a.SEND_FRIEND_REQUEST] = this.subscribers._dq;
  this.callbacksMap[a.ACCEPT_FRIEND_REQUEST] = this.subscribers._js;
  this.callbacksMap[a.DECLINE_FRIEND_REQUEST] = this.subscribers._8a;
  this.callbacksMap[a.FRIEND_INFO] = this.subscribers._y5
};
_Xl._aj._0r._Tr = {
  REMOVE_FRIEND: "Friendship.removeFriend",
  GET_ONLINE_FRIENDS: "Friendship.getOnlineFriends",
  GET_ONLINE_FRIENDS_COUNT: "Friendship.getOnlineFriendsCount",
  GET_FRIENDS: "Friendship.getFriends",
  GET_FRIEND_TABLE: "Friendship.getFriendTable",
  SEND_FRIEND_REQUEST: "Messages.sendFriendRequest",
  ACCEPT_FRIEND_REQUEST: "Messages.acceptFriendRequest",
  DECLINE_FRIEND_REQUEST: "Messages.declineFriendRequest",
  FRIEND_INFO: "Profile.getProfileInfo"
};
_Xl._aj._co = function () { };
_Xl._aj._co.prototype = {
  _d: null,
  _ua: null,
  extractClasses: function () { },
  initialize: function () {
    this._d = new _Xl._br._M4._20._Kf(_Xl._br._0l._xj.socialFeaturesService, new _Tf._M4._A3._Kf(_Xl._br._0l._xj.socialFeaturesService), new _Xl._aj._M4._9._Kf(_Xl._aj._0r._Tr), _Xl._aj._0r._Tr);
    this._ua = new Sandbox._E9._Y3.Friends
  },
  subscribeToEvents: function () {
    _Xl._aj._0l._gc._68 && _Mf._ks.addListener(_Ag._fj, function () {
      LazyLoad.css(_Xl._aj._0l._gc._68)
    }, null);
    _Mf._ks.addListener(_Ag._ki, function () {
      this._ua._Q7()
    }, this);
    _Mf._ks.addListener(_Xl._br._dc._Ag.PLAYER_INFO_DIALOG, function (a, b) {
      this._ua._k4(a, b)
    }, this);
    _Mf._ks.addListener(_Xl._br._dc._Ag.CLIENT_READY, function () {
      this._ua.getOnlineFriendsCountAction();
      this._ua._y7(!1)
    }, this);
    _Mf._ks.addListener(_Xl._br._dc._Ag.SOCIAL_MESSAGE, function (a) {
      return this._ua.isAboutFriends(a.type) ? (this._ua._W7(a), !1) : !0
    }, this);
    _Mf._ks.addListener(_Xl._br._dc._Ag.PLAYER_PUBLIC_PROFILE_PAGE, function (a) {
      a && this._ua._Ik(a)
    }, this)
  }
};
_Xl.SocialFeatureFeedback = {
  shortName: "module.social-feedback"
};
_Tf._hr.extendObject(SandBoxObject, _Xl.SocialFeatureFeedback);
_Xl.SocialFeatureFeedback._0l._N1 = {
  MAIL_INPUT: "#feedback-email",
  COMMENT_INPUT: "#feedback-comments",
  _Xg: "#feedback-checkbox"
};
_Xl.SocialFeatureFeedback._0l._N1._ff = {
  FEEDBACK: "feedback"
};
_Xl.SocialFeatureFeedback._Ek._2s._bf.Feedback = function () { };
_Xl.SocialFeatureFeedback._Ek._2s._bf.Feedback.prototype = {
  clear: function () {
    var a = _Tf._0l._N1,
      b = $(a.MAIL_INPUT),
      a = $(a.COMMENT_INPUT);
    b.val("");
    a.val("");
    _me.feedback.closeFeedbackDialog()
  }
};
_Xl.SocialFeatureFeedback._a.Feedback = function () {
  this.view = new _Xl.SocialFeatureFeedback._Ek._2s._bf.Feedback
};
_Xl.SocialFeatureFeedback._a.Feedback.prototype = {
  view: null,
  _Q7: function () {
    this.view.clear()
  },
  sendMessageAction: function (a) {
    _Mf._L2._oa() || _Xl.SocialFeatureFeedback._hj._d.send(_Xl.SocialFeatureFeedback._0r._Tr.FEEDBACK, {
      data: '["{0}", "{1}"]'.format(a.mail, a.text)
    })
  },
  onSendMessageAction: function (a) {
    a && a.code == _Xl._br._dc.ResultCode._w && a.value && (this.onSendFeedback(a), this._Q7())
  },
  onSendFeedback: function (a) {
    var b = _Tf._41.$("_T1");
    "OK" == a.value ? (b = _Tf._41.$("_g7"), _Mf.PopupManagerInstance.push(function () {
      _Xl._br._N1.showSocialDialog("Name",
        "feedBack", "", "", null, null, null, _Mf.PopupManagerInstance.onClose.bind(_Mf.PopupManagerInstance))
    })) : _Mf.PopupManagerInstance.push(function () {
      _Tf._N1._zh(_Tf._41.$("_g7"), b, null, "", _Mf.PopupManagerInstance.onClose.bind(_Mf.PopupManagerInstance))
    })
  }
};
_Xl.SocialFeatureFeedback._Ek._Fm._bf.Feedback = function (a, b) {
  _Xl.SocialFeatureFeedback._Ek._Fm._bf.Feedback.superclass.apply(this, arguments)
};
extend(_Xl.SocialFeatureFeedback._Ek._Fm._bf.Feedback, _Tf._Ek._Fm._bf._X6);
_Xl.SocialFeatureFeedback._Ek._Fm._bf.Feedback._ff = _Xl.SocialFeatureFeedback._0l._N1._ff.FEEDBACK;
_Xl.SocialFeatureFeedback._Ek._Fm._bf.Feedback.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : !_Xl._br._hj.checkConnectionToSocialService() ? !1 : !0
};
_Xl.SocialFeatureFeedback._Ek._Fm._bf.Feedback.prototype._Sr = function () {
  this.base._Sr.apply(this, arguments) && _Xl.SocialFeatureFeedback._hj.FeedbackController._Q7()
};
_me.feedback = new function (a) {
  this.isFeedbackDialogOpenned = ko.observable(!1);
  this.isFeedbackSending = ko.observable(!1);
  this.openFeedbackDialog = function () {
    this.isFeedbackDialogOpenned(!0);
    _Mf._Md.showExternalDialog(_Xl.SocialFeatureFeedback._0l._N1._ff.FEEDBACK)
  }.bind(this);
  this.closeFeedbackDialog = function () {
    this.isFeedbackDialogOpenned(!1);
    this.isFeedbackSending(!1);
    _Mf._Md.closeExternalDialog(_Xl.SocialFeatureFeedback._0l._N1._ff.FEEDBACK)
  }.bind(this);
  this.sendFeedbackMessage = function () {
    if (!this.isFeedbackSending()) {
      var b = a._N1,
        c = $(b.MAIL_INPUT),
        d = $(b.COMMENT_INPUT),
        b = $(b._Xg),
        c = c.val(),
        d = d.val(),
        b = b.is(":checked");
      d && d.length && c && c.length && b && (/[^@]+@[^@]+/.test(c) ? (c = _Tf._Ek._29.htmlspecialchars(c), d = _Tf._Ek._29.htmlspecialchars(d), this.isFeedbackSending(!0), _Xl.SocialFeatureFeedback._hj.FeedbackController.sendMessageAction({
        mail: c,
        text: d
      })) : _Tf._N1._zh("", _Tf._41.$("_K7._N1"), null, _Tf._41.$("_j3._76")))
    }
  }.bind(this);
  this.toggleFeedbackCheckbox = function () {
    var b = $(a._N1._Xg);
    b.is(":checked") ? b.attr("checked", !1) : b.attr("checked", !0)
  }.bind(this)
}(_Xl.SocialFeatureFeedback._0l, _me);
_Xl.SocialFeatureFeedback._M4._9._Kf = function () {
  _Xl.SocialFeatureFeedback._M4._9._Kf.superclass.apply(this, arguments)
};
extend(_Xl.SocialFeatureFeedback._M4._9._Kf, _Tf._M4._9._Kf);
_Xl.SocialFeatureFeedback._M4._9._Kf.prototype.subscribers = {
  _Oc: function (a, b) {
    _Xl.SocialFeatureFeedback._hj.FeedbackController.onSendMessageAction(a, b)
  }
};
_Xl.SocialFeatureFeedback._M4._9._Kf.prototype._6g = function () {
  this.callbacksMap[this.messageTypes.FEEDBACK] = this.subscribers._Oc
};
_Xl.SocialFeatureFeedback._M4._20._Kf = function (a, b, c) {
  _Xl.SocialFeatureFeedback._M4._20._Kf.superclass.apply(this, arguments);
  this._cachedClientType = null;
  this.appType = "undefined" !== typeof _Xl._br._0l.appType ? _Xl._br._0l.appType : null
};
extend(_Xl.SocialFeatureFeedback._M4._20._Kf, _Tf._M4._20._Kf);
_Xl.SocialFeatureFeedback._M4._20._Kf.prototype._Cs = function (a, b) {
  var c = {
    id: b.id,
    params: b.data,
    auth: _Xl._br._hj.Data.auth,
    appType: this.appType
  }, d = a.split(".");
  null === this._cachedClientType && this.cacheClientType();
  if (2 <= d.length) c.service = d[0], c.method = d[1], c.clientType = this._cachedClientType;
  return c
};
_Xl.SocialFeatureFeedback._M4._20._Kf.prototype.cacheClientType = function () {
  this._cachedClientType = "html5.";
  this._cachedClientType = "Default" === _Mf._Ta._Iq ? this._cachedClientType + "ipad" : this._cachedClientType + "iphone";
  this._cachedClientType = this._cachedClientType.toLowerCase()
};
_Xl.SocialFeatureFeedback._M4._20._Kf.prototype.send = function (a, b, c) {
  if (!_Mf._L2._oa()) b = b || {}, c = c || {}, b.id = this.receiver._Ui(a, c), b = this._Cs(a, b), this.ambassador.send(this._i0(a), b, this.receiver._S2, this.receiver, a)
};
_Xl.SocialFeatureFeedback._M4._20._Kf.prototype._i0 = function () {
  return this.connectionConfig.address
};
_Xl.SocialFeatureFeedback._M4._A3.PostStrategy = function (a) {
  _Xl.SocialFeatureFeedback._M4._A3.PostStrategy.superclass.apply(this, arguments)
};
extend(_Xl.SocialFeatureFeedback._M4._A3.PostStrategy, _Tf._M4._A3._Kf);
_Xl.SocialFeatureFeedback._M4._A3.PostStrategy.prototype.send = function (a, b, c, d, e) {
  this._39(a, b, c, d, e)
};
_Xl.SocialFeatureFeedback._M4._A3.PostStrategy.prototype.simplePolling = function (a, b, c, d, e) {
  // console.log("simplePolling 22656"+" url="+a+" data="+JSON.stringify(b));
  $.ajax({
    url: a,
    type: "POST",
    dataType: "jsonp",
    data: b,
    context: this,
    success: function (f) {
      this._Ya(f, a, b, c, d, e)
    },
    error: function (a, b) {
      this._q2(a, b)
    }
  })
};
_Xl.SocialFeatureFeedback._0r._Tr = {
  FEEDBACK: "Mail.feedback"
};
_Xl.SocialFeatureFeedback._co = function () { };
_Xl.SocialFeatureFeedback._co.prototype = {
  _d: null,
  FeedbackController: null,
  extractClasses: function () { },
  initialize: function () {
    this._d = new _Xl.SocialFeatureFeedback._M4._20._Kf(_Xl._br._0l._xj.socialFeaturesService, new _Xl.SocialFeatureFeedback._M4._A3.PostStrategy(_Xl._br._0l._xj.socialFeaturesService), new _Xl.SocialFeatureFeedback._M4._9._Kf(_Xl.SocialFeatureFeedback._0r._Tr), _Xl.SocialFeatureFeedback._0r._Tr);
    this.FeedbackController = new Sandbox._E9._Y3.Feedback
  },
  subscribeToEvents: function () {
    _Mf._ks.addListener(_Ag._ki,

      function () {
        this.FeedbackController._Q7()
      }, this)
  }
};
_Xl._Pc = {
  shortName: "module.social-leaderboard"
};
_Tf._hr.extendObject(SandBoxObject, _Xl._Pc);
_Xl._Pc._0l._Nr = 7;
_Xl._Pc._0l._7p = 7;
_Xl._Pc._0l.updateLeaderBoardTimeIntervalinMinutes = 15;
_Xl._Pc._0l.isLimitedCountOnPagesInListView = !0;
_Xl._Pc._0l._gc = {
  _68: ""
};
_Xl._Pc._0l._N1 = {};
_Xl._Pc._0l._N1._ff = {};
_Xl._Pc._M4._9._Kf = function () {
  _Xl._Pc._M4._9._Kf.superclass.apply(this, arguments)
};
extend(_Xl._Pc._M4._9._Kf, _Tf._M4._9._Kf);
_Xl._Pc._M4._9._Kf.prototype.subscribers = {
  _yf: function (a, b) {
    _Xl._Pc._hj._n._5h(a, b)
  },
  _rb: function (a, b) {
    _Xl._Pc._hj._n._yd(a, b)
  },
  getOverallLEaderHandler: function (a) {
    _Xl._Pc._hj._n.onGetOverallLeader(a)
  }
};
_Xl._Pc._M4._9._Kf.prototype._6g = function () {
  var a = this.messageTypes;
  this.callbacksMap[a.GET_LEADERS] = this.subscribers._yf;
  this.callbacksMap[a.GET_LEADER_FRIENDS] = this.subscribers._rb;
  this.callbacksMap[a.GET_OVERALL_LEADER] = this.subscribers.getOverallLEaderHandler
};
_Xl._Pc._Ek._2s._bf._Y4 = function () { };
_Xl._Pc._Ek._2s._bf._Y4.prototype = {
  prepareToLoadLeaders: function (a) {
    a = a ? _Xl._Pc._0l._N1._ff.LEADERBOARD_FRIENDS : _Xl._Pc._0l._N1._ff.LEADERBOARD_LEADERS;
    _Mf._Md.getVisiblePage() == a && _Tf._Ek._29.showPageLoadingMessage()
  },
  drawLeaders: function (a, b, c, d) {
    this.drawList(!1, a, b, c, d)
  },
  drawFriends: function (a, b, c, d) {
    this.drawList(!0, a, b, c, d)
  },
  drawList: function (a, b, c, d, e) {
    _me.leaderBoard.setLeadersList(a, b, c);
    b = a ? _me.leaderBoard.friendsList : _me.leaderBoard.leadersList;
    a = a ? _Xl._Pc._0l._N1._ff.LEADERBOARD_FRIENDS : _Xl._Pc._0l._N1._ff.LEADERBOARD_LEADERS;
    d ? e ? b.goToLastPage() : b.growPage() : b.goToFirstPage();
    _Mf._Md.getVisiblePage() == a && _Tf._Ek._29.hidePageLoadingMessage()
  },
  drawCurrentUser: function (a) {
    _me.leaderBoard.setCurrentUser(a)
  },
  drawOverallLeader: function (a) {
    _me.leaderBoard.setOverallLeader(a)
  }
};
_Xl._Pc._a._Y4 = function () {
  this.model = new _Xl._Pc._U6._Y4;
  this.view = new Sandbox._E9._2s._bf._Y4;
  this.updateLeaderBoardTimeoutID = null
};
_Xl._Pc._a._Y4.prototype = {
  model: null,
  view: null,
  updateLeaderBoardTimeoutID: null,
  _j2: function (a, b) {
    if (!_Mf._L2._oa() && _Xl._br._hj.checkConnectionToSocialService()) {
      this.view.prepareToLoadLeaders(!1);
      var c = _Xl._Pc._0l._Nr;
      b && (c = this.model.leadersTotalLength - this.model.getLeadersList().length);
      _Xl._Pc._hj._d.send(_Xl._Pc._0r._Tr.GET_LEADERS, {
        data: "[{0}, {1}]".format(a ? this.model.getLeadersList().length : 0, c)
      }, {
          isNextPage: a,
          isRequestedLastPage: b
        })
    }
  },
  _hm: function (a, b) {
    if (!_Mf._L2._oa() && _Xl._br._hj.checkConnectionToSocialService()) {
      this.view.prepareToLoadLeaders(!0);
      var c = _Xl._Pc._0l._Nr;
      b && (c = this.model.friendsTotalLength - this.model.getFriendsList().length);
      _Xl._Pc._hj._d.send(_Xl._Pc._0r._Tr.GET_LEADER_FRIENDS, {
        data: "[{0}, {1}]".format(a ? this.model.getFriendsList().length : 0, c)
      }, {
          isNextPage: a,
          isRequestedLastPage: b
        })
    }
  },
  getOverallLeaderAction: function () {
    !_Mf._L2._oa() && _Xl._br._hj.checkConnectionToSocialService() && _Xl._Pc._hj._d.send(_Xl._Pc._0r._Tr.GET_OVERALL_LEADER, {
      data: "[0, 1]"
    })
  },
  updateLeaderBoardAction: function (a) {
    "undefined" === typeof a ? this.updateLeaderBoardHandler() : this.updatedLeaderBoardTimeoutHandler(a)
  },
  updatedLeaderBoardTimeoutHandler: function (a) {
    this.updateLeaderBoardHandler();
    this.updateLeaderBoardTimeoutID = setTimeout(this.updatedLeaderBoardTimeoutHandler.bind(this, a), a)
  },
  updateLeaderBoardHandler: function () {
    this._j2(!1, !1);
    this._hm(!1, !1);
    this.getOverallLeaderAction()
  },
  clearLeadersAction: function (a) {
    a ? (this.model.setFriendsList([], 0, !1), this.view.drawFriends([], 0, !1, !1)) : (this.model.setLeadersList([], 0, !1), this.view.drawLeaders([], 0, !1, !1))
  },
  _Q7: function () {
    this.model.clear();
    clearTimeout(this.updateLeaderBoardTimeoutID)
  },
  _5h: function (a, b) {
    if (a && !(a.code != _Xl._br._dc.ResultCode._w || !a.value || !a.value.list)) this.model.setLeadersList(a.value.list, a.value.total, b.isNextPage), this.model.setCurrentUser(a.value.current), this.view.drawLeaders(this.model.getLeadersList(), this.model.leadersTotalLength, b.isNextPage, b.isRequestedLastPage), this.view.drawCurrentUser(this.model.getCurrentUser())
  },
  _yd: function (a, b) {
    if (a && !(a.code != _Xl._br._dc.ResultCode._w || !a.value || !a.value.list)) this.model.setFriendsList(a.value.list,
      a.value.total, b.isNextPage), this.model.setCurrentUser(a.value.current), this.view.drawFriends(this.model.getFriendsList(), this.model.friendsTotalLength, b.isNextPage, b.isRequestedLastPage), this.view.drawCurrentUser(this.model.getCurrentUser())
  },
  onGetOverallLeader: function (a) {
    a && a.value && a.value.list && (1 > a.value.list.length ? (this.model.setOverallLeader(null), this.view.drawOverallLeader(null)) : (a = a.value.list[0], this.model.setOverallLeader(a), this.view.drawOverallLeader(a)))
  }
};
_Xl._Pc._U6._Y4 = function () {
  this.clear()
};
_Xl._Pc._U6._Y4.prototype = {
  leadersList: null,
  friendsList: null,
  currentUser: null,
  leadersTotalLength: 0,
  friendsTotalLength: 0,
  overallLeader: null,
  setLeadersList: function (a, b, c) {
    this.leadersList = c ? this.leadersList.concat(a) : a;
    this.leadersTotalLength = b || 0
  },
  getLeadersList: function () {
    return this.leadersList
  },
  setFriendsList: function (a, b, c) {
    this.friendsList = c ? this.friendsList.concat(a) : a;
    this.friendsTotalLength = b || 0
  },
  getFriendsList: function () {
    return this.friendsList
  },
  setCurrentUser: function (a) {
    this.currentUser = a
  },
  getCurrentUser: function () {
    return this.currentUser
  },
  setOverallLeader: function (a) {
    this.overallLeader = a
  },
  getOverallLeader: function () {
    return this.overallLeader
  },
  clear: function () {
    this.setLeadersList([]);
    this.setFriendsList([]);
    this.currentUser = null
  }
};
_me.leaderBoard = new function (a, b) {
  this.leadersList = new _c2(null, !1, b._Nr, b.isLimitedCountOnPagesInListView);
  this.friendsList = new _c2(null, !1, b._Nr, b.isLimitedCountOnPagesInListView);
  this.currentUser = ko.observable(null);
  this.overallLeader = ko.observable(null);
  this.setLeadersList = function (a, b, e) {
    for (var f = _Tf._0l._A._Nc._0q, g = 0; g < b.length; g++) if (b[g].avatarSrc = f, b[g].avatar && b[g].avatar.normal) b[g].avatarSrc = b[g].avatar.normal;
    a ? this.friendsList.set(b, e) : this.leadersList.set(b, e)
  };
  this.setCurrentUser = function (a) {
    var b = _Tf._0l._A._Nc._0q;
    if (a) {
      a.avatarSrc = b;
      if (a.avatar && a.avatar.normal) a.avatarSrc = a.avatar.normal;
      this.currentUser(a)
    }
  };
  this.setOverallLeader = function (a) {
    var b = _Tf._0l._A._Nc._0q;
    if (a) {
      a.avatarSrc = b;
      if (a.avatar && a.avatar.normal) a.avatarSrc = a.avatar.normal;
      this.overallLeader(a)
    }
  };
  this.getPlayerBalance = function (a) {
    a = a ? parseInt(a.balance) : 0;
    return "undefined" === typeof _Tf._Ek._29 ? a : _Tf._Ek._29._ca(a, null, !0)
  }
}(_me, _Xl._Pc._0l);
_Xl._Pc._Ek._Fm._bf._S3 = function (a, b) {
  _Xl._Pc._Ek._Fm._bf._S3.superclass.apply(this, arguments)
};
extend(_Xl._Pc._Ek._Fm._bf._S3, _Tf._Ek._Fm._bf._X6);
_Xl._Pc._Ek._Fm._bf._S3._ff = _Xl._Pc._0l._N1._ff.LEADERBOARD_FRIENDS;
_Xl._Pc._Ek._Fm._bf._S3.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : !_Xl._br._hj.checkConnectionToSocialService() ? !1 : !0
};
_Xl._Pc._Ek._Fm._bf._S3.prototype._Sr = function () {
  this.base._Sr.apply(this, arguments) && _Xl._Pc._hj._n.clearLeadersAction(!0)
};
_Xl._Pc._Ek._Fm._bf._S3.prototype._G1 = function () {
  this.base._G1.apply(this, arguments) && _Xl._Pc._hj._n._hm(!1, !1)
};
_Xl._Pc._Ek._Fm._bf._S3.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._N1,
      b = _Tf._0l._N1;
    a.$("#{0} ".format(this.page) + b._Sd).live(EventType._qc, function () {
      _Xl._Pc._hj._n._hm(!1, !1)
    });
    a.$("#{0} ".format(this.page) + b._zn).live(EventType._qc, function () {
      _me.leaderBoard.friendsList.hasOtherElements() ? _Xl._Pc._hj._n._hm(!0, !1) : _me.leaderBoard.friendsList.growPage()
    });
    a.$("#{0} ".format(this.page) + b._L5).live(EventType._qc, function () {
      _me.leaderBoard.friendsList.hasOtherElements() ? _Xl._Pc._hj._n._hm(!0, !0) : _me.leaderBoard.friendsList.goToLastPage()
    })
  }
};
_Xl._Pc._Ek._Fm._bf._S3.prototype._Q = function (a) {
  return !1 === this.base._Q.apply(this, arguments) || a === _Xl._Pc._0l._N1._ff.LEADERBOARD_LEADERS ? !1 : !0
};
_Xl._Pc._Ek._Fm._bf._Pd = function (a, b) {
  _Xl._Pc._Ek._Fm._bf._Pd.superclass.apply(this, arguments)
};
extend(_Xl._Pc._Ek._Fm._bf._Pd, _Tf._Ek._Fm._bf._X6);
_Xl._Pc._Ek._Fm._bf._Pd._ff = _Xl._Pc._0l._N1._ff.LEADERBOARD_LEADERS;
_Xl._Pc._Ek._Fm._bf._Pd.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : !_Xl._br._hj.checkConnectionToSocialService() ? !1 : !0
};
_Xl._Pc._Ek._Fm._bf._Pd.prototype._Sr = function () {
  this.base._Sr.apply(this, arguments) && _Xl._Pc._hj._n.clearLeadersAction(!1)
};
_Xl._Pc._Ek._Fm._bf._Pd.prototype._G1 = function () {
  this.base._G1.apply(this, arguments) && _Xl._Pc._hj._n._j2(!1, !1)
};
_Xl._Pc._Ek._Fm._bf._Pd.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._N1,
      b = _Tf._0l._N1;
    a.$("#{0} ".format(this.page) + b._Sd).live(EventType._qc, function () {
      _Xl._Pc._hj._n._j2(!1, !1)
    });
    a.$("#{0} ".format(this.page) + b._zn).live(EventType._qc, function () {
      _me.leaderBoard.leadersList.hasOtherElements() ? _Xl._Pc._hj._n._j2(!0, !1) : _me.leaderBoard.leadersList.growPage()
    });
    a.$("#{0} ".format(this.page) + b._L5).live(EventType._qc, function () {
      _me.leaderBoard.leadersList.hasOtherElements() ? _Xl._Pc._hj._n._j2(!0, !0) : _me.leaderBoard.leadersList.goToLastPage()
    })
  }
};
_Xl._Pc._Ek._Fm._bf._Pd.prototype._Q = function (a) {
  return !1 === this.base._Q.apply(this, arguments) || a === _Xl._Pc._0l._N1._ff.LEADERBOARD_FRIENDS ? !1 : !0
};
_Xl._Pc._0r._Tr = {
  GET_LEADERS: "Leader.getLeaders",
  GET_LEADER_FRIENDS: "Leader.getLeaderFriends",
  GET_OVERALL_LEADER: "Leader.getLeaders.overallLeader"
};
_Xl._Pc._co = function () { };
_Xl._Pc._co.prototype = {
  _d: null,
  _n: null,
  extractClasses: function () { },
  initialize: function () {
    this._d = new _Xl._br._M4._20._Kf(_Xl._br._0l._xj.socialFeaturesService, new _Tf._M4._A3._Kf(_Xl._br._0l._xj.socialFeaturesService), new _Xl._Pc._M4._9._Kf(_Xl._Pc._0r._Tr), _Xl._Pc._0r._Tr);
    this._n = new Sandbox._E9._Y3._Y4
  },
  subscribeToEvents: function () {
    _Xl._Pc._0l._gc._68 && _Mf._ks.addListener(_Ag._fj, function () {
      LazyLoad.css(_Xl._Pc._0l._gc._68)
    }, null);
    _Mf._ks.addListener(_Xl._br._dc._Ag.CLIENT_READY, function () {
      this._n.updateLeaderBoardAction(6E4 * _Xl._Pc._0l.updateLeaderBoardTimeIntervalinMinutes)
    }, this);
    _Mf._ks.addListener(_Ag._ki, function () {
      this._n._Q7()
    }, this)
  }
};
_Xl._R6 = {
  shortName: "module.social-graphics"
};
_Tf._hr.extendObject(SandBoxObject, _Xl._R6);
_Xl._R6._0l.deckResourcePriority = 5;
_Xl._R6._0l._gc = {
  _68: ""
};
_Xl._R6._0l._N1 = {
  PREVIEW_POPUP: "#changeable-popup"
};
_Xl._R6._0l._N1._ff = {
  CHANGEABLE_GRAPHICS: "profile-inventory"
};
_Xl._R6._Ek._2s._bf._6k = function () { };
_Xl._R6._Ek._2s._bf._6k.prototype = {
  prepareToLoadGameAvailableResourceTypes: function () {
    _Mf._Md.getVisiblePage() == _Xl._R6._0l._N1._ff.CHANGEABLE_GRAPHICS && _Tf._Ek._29.showPageLoadingMessage()
  },
  drawGraphicResourcesByType: function (a, b) {
    _me.changeableGraphics.setGraphicsList(a, b);
    _Mf._Md.getVisiblePage() == _Xl._R6._0l._N1._ff.CHANGEABLE_GRAPHICS && _Tf._Ek._29.hidePageLoadingMessage()
  },
  drawGraphicResourceTypes: function (a) {
    _me.changeableGraphics.gameResourceTypes(a)
  },
  getSelectedGameResource: function () {
    return _me.changeableGraphics.selectedGraphic()
  },
  drawBackgroundGraphicResource: function (a) {
    _me.changeableGraphics.backgroundGraphicResource("url(" + a + ")")
  },
  drawBlackjackBackgroundGraphicResource: function (a) {
    _me.changeableGraphics.blackjackBackgroundGraphicResource("url(" + a + ")")
  },
  drawBaccaratBackgroundGraphicResource: function (a) {
    _me.changeableGraphics.baccaratBackgroundGraphicResource("url(" + a + ")")
  },
  drawPaigowBackgroundGraphicResource: function (a) {
    _me.changeableGraphics.paigowBackgroundGraphicResource("url(" + a + ")")
  },
  drawCrapsBackgroundGraphicResource: function (a) {
    _me.changeableGraphics.crapsBackgroundGraphicResource("url(" + a + ")")
  },
  clearBackgroundGraphicResource: function () {
    _me.changeableGraphics.backgroundGraphicResource("")
  }
};
_Xl._R6._a._6k = function () {
  this.model = new _Xl._R6._U6._6k;
  this.view = new Sandbox._E9._2s._bf._6k;
  this.deckResources = new _Xl._R6._A._N7
};
_Xl._R6._a._6k.prototype = {
  model: null,
  view: null,
  deckResources: null,
  _02: function (a) {
    return this.model.getCurrentGameStyle(a) || null
  },
  _A8: function () {
    _Xl._R6._hj._d.send(_Xl._R6._0r._Tr.GET_RESOURCE_TYPES, {
      data: "[]"
    })
  },
  _7b: function (a) {
    0 > this.model.getGraphicTypes().indexOf(a) || (this.view.prepareToLoadGameAvailableResourceTypes(), _Xl._R6._hj._d.send(_Xl._R6._0r._Tr.GET_AVAILABLE_RESOURCES, {
      data: '["' + a + '"]'
    }, {
        type: a
      }))
  },
  _e3: function () {
    this._80()
  },
  _80: function () {
    _Xl._R6._hj._d.send(_Xl._R6._0r._Tr.GET_CURRENT_RESOURCES, {
      data: "[]"
    })
  },
  _T6: function () {
    var a = this.view.getSelectedGameResource(),
      b;
    a && "undefined" !== typeof a.id && ((b = this.model.getCurrentGameStyle(a.type)) && b.id === a.id || _Xl._R6._hj._d.send(_Xl._R6._0r._Tr.USE_GAME_RESOURCE, {
      data: "[" + a.id + "]"
    }))
  },
  _Q7: function () {
    this.model.clear();
    _Tf._M4._np.table._tf("dealerChair");
    this._50();
    this.__2()
  },
  _50: function () {
    _Tf._M4._np.deckManager.removeByPriority(_Xl._R6._0l.deckResourcePriority);
    this.deckResources.removeAllElements()
  },
  __2: function () {
    this.view.clearBackgroundGraphicResource()
  },
  _P7: function (a) {
    a && 0 == a.code && (this.model.setGraphicTypes(a.value), this.view.drawGraphicResourceTypes(this.model.getGraphicTypes()), this._e3())
  },
  _la: function (a, b) {
    a && 0 == a.code && this.view.drawGraphicResourcesByType(b.type, a.value)
  },
  _Ke: function (a) {
    if (a && 0 == a.code) {
      this.model.setCurrentGameStyles(a.value);
      for (var a = a.value, b = 0; b < a.length; b++) this._x7(a[b])
    }
  },
  _nn: function (a) {
    a && 0 == a.code && (this.model.setCurrentGameResource(a.value), this._x7(a.value))
  },
  onUseGiftResources: function (a) {
    this.model.setCurrentGameResource(a);
    this._x7(a)
  },
  _x7: function (a) {
    if (a && a.type) {
      var b = _Xl._R6._dc.GameResourceType;
      switch (a.type) {
        case b.BACKGROUND:
        case b.BLACKJACK_BACKGROUND:
        case b.BACCARAT_BACKGROUND:
        case b.PAIGOW_BACKGROUND:
          this._gk(a);
          break;
        case b.DEALER:
        case b.BLACKJACK_DEALER:
        case b.BACCARAT_DEALER:
          this._l6(a);
          break;
        case b.DECK:
          this._D2(a)
      }
    }
  },
  _l6: function (a) {
    a && a.giftSrc && _Tf._M4._np.table._om("dealerChair", a.giftSrc)
  },
  _D2: function (a) {
    a && a.gameGraphicResources && a.gameGraphicResources.length && (this.deckResources.init(a.gameGraphicResources),
      _Tf._M4._np.deckManager.addResource(this.deckResources, _Xl._R6._0l.deckResourcePriority))
  },
  _gk: function (a) {
    if (a && a.giftSrc) {
      var b = this;
      _Tf._Ek._29.loadImage(a.giftSrc, null, null, !1, function (c) {
        var d = _Xl._R6._dc.GameResourceType;
        a.type === d.BLACKJACK_BACKGROUND ? b.view.drawBlackjackBackgroundGraphicResource(c) : a.type === d.BACCARAT_BACKGROUND ? b.view.drawBaccaratBackgroundGraphicResource(c) : a.type === d.PAIGOW_BACKGROUND ? b.view.drawPaigowBackgroundGraphicResource(c) : a.type === d.CRAPS_BACKGROUND ? b.view.drawCrapsBackgroundGraphicResource(c) : b.view.drawBackgroundGraphicResource(c)
      })
    }
  }
};
_Xl._R6._Ek._Fm._bf._6k = function (a, b) {
  _Xl._R6._Ek._Fm._bf._6k.superclass.apply(this, arguments)
};
extend(_Xl._R6._Ek._Fm._bf._6k, _Tf._Ek._Fm._bf._X6);
_Xl._R6._Ek._Fm._bf._6k._ff = _Xl._R6._0l._N1._ff.CHANGEABLE_GRAPHICS;
_Xl._R6._Ek._Fm._bf._6k.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : !_Xl._br._hj.checkConnectionToSocialService() ? !1 : !0
};
_Xl._R6._Ek._Fm._bf._6k.prototype._G1 = function () {
  if (this.base._G1.apply(this, arguments)) {
    var a = _me.changeableGraphics.selectedGraphicsType();
    a && _Xl._R6._hj._8b._7b(a)
  }
};
_Xl._R6._Ek._Fm._bf._6k.prototype._Sr = function () {
  if (this.base._Sr.apply(this, arguments)) {
    var a = _me.changeableGraphics.graphicsByType[_me.changeableGraphics.selectedGraphicsType()];
    a && a.set([])
  }
};
_Xl._R6._Ek._Fm._bf._6k.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._N1,
      b = _Tf._0l._N1;
    a.$("#{0} ".format(this.page) + b._zn).live(EventType._db, function () {
      _me.changeableGraphics.graphicsByType[_me.changeableGraphics.selectedGraphicsType()].hasOtherElements() || _me.changeableGraphics.graphicsByType[_me.changeableGraphics.selectedGraphicsType()].growPage()
    });
    a.$("#{0} ".format(this.page) + b._r3).live(EventType._Fa, function () {
      _me.changeableGraphics.graphicsByType[_me.changeableGraphics.selectedGraphicsType()].reducePage()
    })
  }
};
_Xl._R6._U6._6k = function () {
  this.graphicTypes = [];
  this.currentGameStyle = {}
};
_Xl._R6._U6._6k.prototype = {
  graphicTypes: null,
  setGraphicTypes: function (a) {
    this.graphicTypes = a || []
  },
  getGraphicTypes: function () {
    return this.graphicTypes
  },
  setCurrentGameStyles: function (a) {
    if (a) for (var b = 0; b < a.length; b++) a[b] && (this.currentGameStyle[a[b].type] = a[b])
  },
  setCurrentGameResource: function (a) {
    a && a.type && (this.currentGameStyle[a.type] = a)
  },
  getCurrentGameStyle: function (a) {
    return !a || !this.currentGameStyle[a] ? null : this.currentGameStyle[a]
  },
  clear: function () {
    this.setGraphicTypes([]);
    this.currentGameStyle = {}
  }
};
_me.changeableGraphics = new function (a, b) {
  this.gameResourceTypes = ko.observableArray();
  this.gameResourceTypes.subscribe(function (a) {
    if (a && a.length) for (var b = 0; b < a.length; b++) this.graphicsByType[a[b]] = new _c2(null, !1, _Tf._0l._Nr)
  }.bind(this));
  this.graphicsByType = {};
  this.backgroundGraphicResource = ko.observable("");
  this.blackjackBackgroundGraphicResource = ko.observable("");
  this.baccaratBackgroundGraphicResource = ko.observable("");
  this.paigowBackgroundGraphicResource = ko.observable("");
  this.crapsBackgroundGraphicResource = ko.observable("");
  this.background = ko.computed(function () {
    var b = _Tf._dc.GameType,
      d = b._O3(a.lobby.gameType()),
      e = this.blackjackBackgroundGraphicResource(),
      f = this.baccaratBackgroundGraphicResource(),
      g = this.backgroundGraphicResource(),
      h = this.paigowBackgroundGraphicResource(),
      j = this.crapsBackgroundGraphicResource();
    return b.isBlackJack(d) ? e : b.isBaccarat(d) ? f : b.isPaigow(d) ? h : b.isCraps(d) ? j : g
  }, this);
  this.currentPreview = ko.observable("");
  this.showPreviewDialog = function (a) {
    this.currentPreview(a);
    $(b._N1.PREVIEW_POPUP).show()
  };
  this.closePreviewDialog = function () {
    $(b._N1.PREVIEW_POPUP).hide()
  };
  this.setGraphicsList = function (b, d) {
    if (b && b in this.graphicsByType) {
      for (var e = 0; e < d.length; e++) if (!d[e].locale) d[e].locale = a.locale;
      this.graphicsByType[b].set(d)
    }
  };
  this.selectedGraphicsType = ko.observable();
  this.selectedGraphicId = ko.observable(null);
  this.selectedGraphic = ko.observable(null);
  this.selectedGraphic.subscribe(function (a) {
    a ? this.selectedGraphicId(a.id) : this.selectedGraphicId(null)
  }.bind(this));
  this.selectStyle = function (b) {
    this.selectedGraphic(b || null);
    _Xl._R6._hj._8b._T6();
    a.menu.back()
  };
  this.openPageToSelectStyle = function (a) {
    _Mf._L2._oa() ? _Mf._ks.emitAsync(_Ag._s4, null) : 0 > this.gameResourceTypes().indexOf(a) || (this.selectedGraphicsType(a), this.selectedGraphic(_Xl._R6._hj._8b._02(a)), _Mf._Md.changePage(b._N1._ff.CHANGEABLE_GRAPHICS))
  };
  this.onClientLogout = function () {
    this.selectedGraphic(null);
    this.graphicsByType = {};
    this.gameResourceTypes([]);
    this.backgroundGraphicResource("");
    this.blackjackBackgroundGraphicResource("");
    this.baccaratBackgroundGraphicResource("");
    this.paigowBackgroundGraphicResource("");
    this.crapsBackgroundGraphicResource("")
  };
  _Mf._ks.addListener(_Ag._ki, this.onClientLogout, this)
}(_me, _Xl._R6._0l);
_Xl._R6._A._N7 = function () {
  _Xl._R6._A._N7.superclass.call(this, _Tf._dc.ResourceType._K1)
};
extend(_Xl._R6._A._N7, _Tf._A._X6);
_Xl._R6._A._N7.prototype.init = function (a) {
  var b = 0,
    c = null,
    d = _Tf._dc._W2._ip,
    e = _Tf._dc._W2._Dg,
    f = -1,
    g = -1;
  if ("undefined" !== typeof a) {
    this.removeAllElements();
    for (b = 0; b < a.length; b++) c = a[b], c.suit && c.value && (f = parseInt(c.suit, 10), g = parseInt(c.value, 10), !isNaN(f) && !isNaN(g) && (-1 == f && -1 == g ? (this.addElement(c.icon.url, "back"), this.addElement(c.icon.url, "backL"), this.addElement(c.icon.url, "backStud"), this.addElement(c.icon.url, "backBj")) : "undefined" !== typeof d[g] && "undefined" !== typeof e[f] && this.addElement(c.icon.url,
      e[f] + d[g])))
  }
};
_Xl._R6._A._N7.prototype._46 = function (a) {
  return !this.getElement(a) ? this.getElement(_Tf._dc._W2._Al) : this.getElement(a)
};
_Xl._R6._A._N7.prototype._e4 = function () {
  _Mf._ks.emit(_Ag._c0, arguments)
};
_Xl._R6._dc.GameResourceType = {
  BACKGROUND: "background",
  DEALER: "dealer",
  DECK: "deck",
  BLACKJACK_BACKGROUND: "blackjack_background",
  BLACKJACK_DEALER: "blackjack_dealer",
  BACCARAT_BACKGROUND: "baccarat_background",
  BACCARAT_DEALER: "baccarat_dealer",
  PAIGOW_BACKGROUND: "paigow_background",
  PAIGOW_DEALER: "paigow_dealer",
  CRAPS_BACKGROUND: "mobile-background"
};
_Xl._R6._M4._9._Kf = function () {
  _Xl._R6._M4._9._Kf.superclass.apply(this, arguments)
};
extend(_Xl._R6._M4._9._Kf, _Tf._M4._9._Kf);
_Xl._R6._M4._9._Kf.prototype.subscribers = {
  _zf: function (a) {
    _Xl._R6._hj._8b._P7(a)
  },
  _64: function (a, b) {
    _Xl._R6._hj._8b._la(a, b)
  },
  _8k: function (a, b) {
    _Xl._R6._hj._8b._Ke(a, b)
  },
  _Ph: function (a) {
    _Xl._R6._hj._8b._nn(a)
  }
};
_Xl._R6._M4._9._Kf.prototype._6g = function () {
  var a = this.messageTypes;
  this.callbacksMap[a.GET_RESOURCE_TYPES] = this.subscribers._zf;
  this.callbacksMap[a.GET_AVAILABLE_RESOURCES] = this.subscribers._64;
  this.callbacksMap[a.GET_CURRENT_RESOURCES] = this.subscribers._8k;
  this.callbacksMap[a.USE_GAME_RESOURCE] = this.subscribers._Ph
};
_Xl._R6._0r._Tr = {
  GET_RESOURCE_TYPES: "GameResources.getGameResourceTypes",
  GET_AVAILABLE_RESOURCES: "GameResources.getAvailableGameResources",
  GET_CURRENT_RESOURCES: "GameResources.getCurrentGameResources",
  USE_GAME_RESOURCE: "GameResources.useGameResource"
};
_Xl._R6._co = function () { };
_Xl._R6._co.prototype = {
  _d: null,
  _8b: null,
  extractClasses: function () { },
  initialize: function () {
    this._d = new _Xl._br._M4._20._Kf(_Xl._br._0l._xj.socialFeaturesService, new _Tf._M4._A3._Kf(_Xl._br._0l._xj.socialFeaturesService), new _Xl._R6._M4._9._Kf(_Xl._R6._0r._Tr), _Xl._R6._0r._Tr);
    this._8b = new Sandbox._E9._Y3._6k
  },
  subscribeToEvents: function () {
    _Xl._R6._0l._gc._68 && _Mf._ks.addListener(_Ag._fj, function () {
      LazyLoad.css(_Xl._R6._0l._gc._68)
    }, null);
    _Mf._ks.addListener(_Xl._br._dc._Ag.CLIENT_READY, function () {
      this._8b._A8()
    },
      this);
    _Mf._ks.addListener(_Ag._ki, function () {
      this._8b._Q7()
    }, this)
  }
};
_Xl._yn = {
  shortName: "module.social-authorization"
};
_Tf._hr.extendObject(SandBoxObject, _Xl._yn);
_Xl._yn._0l._xj = {
  socialFeaturesHtml5Service: {
    address: "http://test.vegasgames.com/service/index.php/html5"
  }
};
_Xl._yn._dc._Ag = {
  SEND_REQUEST_TO_LOGIN: "send-request-to-login",
  CURRENT_CLIENT_LOGOUT: "current-client-logout",
  CURRENT_CLIENT_SHARE: "current-client-share",
  CURRENT_CLIENT_INVITE: "current-client-invite",
  CURRENT_CLIENT_LIKE: "current-client-like",
  NEED_REGISTRATION: "need-registration",
  CURRENT_CLIENT_BUY_CHIPS: "current-client-buy-chips"
};
_Xl._yn._M4._9._Kf = function () {
  _Xl._yn._M4._9._Kf.superclass.apply(this, arguments)
};
extend(_Xl._yn._M4._9._Kf, _Tf._M4._9._Kf);
_Xl._yn._M4._9._Kf.prototype.subscribers = {
  _Si: function (a, b) {
    _Xl._yn._hj._M5._Qj(a, b)
  }
};
_Xl._yn._M4._9._Kf.prototype._6g = function () {
  this.callbacksMap[this.messageTypes._fq] = this.subscribers._Si
};
_Xl._yn._M4._20._Kf = function (a, b, c) {
  _Xl._yn._M4._20._Kf.superclass.apply(this, arguments)
};
extend(_Xl._yn._M4._20._Kf, _Tf._M4._20._Kf);
_Xl._yn._M4._20._Kf.prototype._Cs = function (a, b) {
  var c = {
    params: b
  };
  c.id = b.id;
  c.provider = b.provider;
  c.service = a;
  return c
};
_Xl._yn._M4._20._Kf.prototype._i0 = function () {
  return this.connectionConfig.address
};
_Xl._yn._0r._Tr = {
  _fq: "login"
};
_Xl._yn._Ek._2s._bf._Gk = function () { };
_Xl._yn._Ek._2s._bf._Gk.prototype = {
  _Bf: function (a) {
    _me.socialAuthorization.currentProvider(a)
  },
  clear: function () {
    _me.socialAuthorization.currentProvider("")
  }
};
_Xl._yn._a._Gk = function () {
  this.currentUserData = null;
  this.view = new Sandbox._E9._2s._bf._Gk
};
_Xl._yn._a._Gk.prototype = {
  view: null,
  currentUserData: null,
  _f7: function () {
    return this.currentUserData
  },
  _Se: function () {
    if (this.currentUserData) _Mf._ks.emit(_Xl._yn._dc._Ag.CURRENT_CLIENT_LOGOUT, [this.currentUserData.provider, this.currentUserData]), this.currentUserData = null, this.view.clear()
  },
  _ij: function (a, b) {
    if (a) a.provider = b, _Xl._yn._hj._d.send(_Xl._yn._0r._Tr._fq, a, a)
  },
  _yj: function (a) {
    this.currentUserData && _Mf._ks.emit(_Xl._yn._dc._Ag.CURRENT_CLIENT_SHARE, [this.currentUserData.provider, a, this.currentUserData])
  },
  _Sh: function (a) {
    this.currentUserData && _Mf._ks.emit(_Xl._yn._dc._Ag.CURRENT_CLIENT_INVITE, [this.currentUserData.provider, a, this.currentUserData])
  },
  buyChipsAction: function (a) {
    this.currentUserData && _Mf._ks.emit(_Xl._yn._dc._Ag.CURRENT_CLIENT_BUY_CHIPS, [this.currentUserData.provider, a])
  },
  _Qj: function (a, b) {
    !a || !a.success || !b.provider ? _Mf._ks.emitAsync(_Ag._sc, [_Tf._41.$("_x4").format(b.provider)]) : (_Mf._ks.emit(_Ag._f4, [a.auth, b.provider]), this.view._Bf(b.provider), this.currentUserData = b)
  }
};
_me.socialAuthorization = new function () {
  this.currentProvider = ko.observable("")
}(_me, _Xl._yn._0l);
_Xl._yn._co = function () { };
_Xl._yn._co.prototype = {
  _d: null,
  extractClasses: function () { },
  _M5: null,
  initialize: function () {
    this._d = new _Xl._yn._M4._20._Kf(_Xl._yn._0l._xj.socialFeaturesHtml5Service, new _Tf._M4._A3._Kf(_Xl._yn._0l._xj.socialFeaturesHtml5Service), new _Xl._yn._M4._9._Kf(_Xl._yn._0r._Tr), _Xl._yn._0r._Tr);
    this._M5 = new Sandbox._E9._Y3._Gk
  },
  subscribeToEvents: function () {
    _Mf._ks.addListener(_Xl._yn._dc._Ag.SEND_REQUEST_TO_LOGIN, function (a, b) {
      this._M5._ij(a, b)
    }, this);
    _Mf._ks.addListener(_Ag._ki, function () {
      this._M5._Se()
    },
      this);
    _Mf._ks.addListener(_Ag._eh, function (a) {
      this._M5._yj(a)
    }, this);
    _Mf._ks.addListener(_Ag._tn, function (a) {
      this._M5._Sh(a)
    }, this);
    _Mf._ks.addListener(_Ag._Ni, function (a) {
      this._M5.buyChipsAction(a)
    }, this)
  }
};
_Xl._li = {
  shortName: "module.social-inapp-payment"
};
_Tf._hr.extendObject(SandBoxObject, _Xl._li);
_Tf._hr.extendObject({
  Platforms: {}
}, _Xl._li);
_Xl._li._0l._Nr = 3;
_Xl._li._0l.isLimitedCountOnPagesInListView = !0;
_Xl._li._0l._gc = {
  _68: ""
};
_Xl._li._0l._N1._ff = {
  IN_APP_PAYMENT: "buy-chips"
};
_Xl._li._dc.PaymentServiceType = {
  APPLE_STORE: "AppStore",
  GOOGLE_PLAY: "GooglePlay"
};
_Xl._li._dc.PaymentType = {
  CHIPS_PLAY_MONEY: "chips_play",
  CHIPS_REAL_MONEY: "chips_real"
};
_Xl._li._M4._9._Kf = function () {
  _Xl._li._M4._9._Kf.superclass.apply(this, arguments)
};
extend(_Xl._li._M4._9._Kf, _Tf._M4._9._Kf);
_Xl._li._M4._9._Kf.prototype.subscribers = {
  _4a: function (a, b) {
    _Xl._li._hj._wg._q4(a, b)
  },
  _f6: function (a, b) {
    _Xl._li._hj._wg._Rc(a, b)
  },
  _w6: function (a, b) {
    _Xl._li._hj._wg._11(a, b)
  }
};
_Xl._li._M4._9._Kf.prototype._6g = function () {
  var a = this.messageTypes;
  this.callbacksMap[a.GET_AVAILABLE_PAYMENT_SERVICES] = this.subscribers._4a;
  this.callbacksMap[a.GET_PAYMENT_ITEMS] = this.subscribers._f6;
  this.callbacksMap[a.PROCESS_PAYMENT] = this.subscribers._w6
};
_Xl._li._Ek._2s._bf._J2 = function () { };
_Xl._li._Ek._2s._bf._J2.prototype = {
  prepareToLoadPackages: function () {
    _Tf._Ek._29.showPageLoadingMessage()
  },
  drawItems: function (a, b) {
    _me.inAppPayment.setItemsList(a, b);
    _Tf._Ek._29.hidePageLoadingMessage()
  },
  getSelectedItem: function () {
    return _me.inAppPayment.selectedItem()
  },
  showMessageBuyItemFailed: function () {
    _Tf._Ek._29.hidePageLoadingMessage();
    _Tf._N1._zh("", _Tf._41.$("_e5._p1"))
  },
  showMessageInAppPaymentNotSupport: function () {
    _Tf._Ek._29.hidePageLoadingMessage();
    _Tf._N1._zh("", _Tf._41.$("_e5._l4"))
  },
  showMessageInAppPaymentProcessed: function (a) {
    _me.inAppPayment.paymentItemProcessed(a);
    _Tf._N1._zh(_Tf._41.$("_u5"), _me.inAppPayment.receivedItemCondition())
  }
};
_Xl._li._a._J2 = function () {
  this.model = new _Xl._li._U6._J2;
  this.view = new Sandbox._E9._2s._bf._J2
};
_Xl._li._a._J2.prototype = {
  model: null,
  view: null,
  platform: null,
  items: [],
  chipsLoaded: !1,
  realLoaded: !1,
  _Q7: function () {
    this.model.clear()
  },
  setPlatform: function (a) {
    this.platform = a;
    this.initPlatform()
  },
  initAction: function () {
    this._Xi()
  },
  initPlatform: function () {
    this.platform ? this.platform.init(this._As.bind(this), this._D0.bind(this), this._En.bind(this), this._Gj.bind(this), this.renderHandler.bind(this)) : this._D0()
  },
  getPlatform: function () {
    return this.platform
  },
  _Xi: function () {
    !_Mf._L2._oa() && _Xl._br._hj.checkConnectionToSocialService() && _Xl._li._hj._d.send(_Xl._li._0r._Tr.GET_AVAILABLE_PAYMENT_SERVICES, {
      data: "[]"
    })
  },
  _f1: function (a) {
    if (!_Mf._L2._oa() && this.model.isPaymentEnabled() && _Xl._br._hj.checkConnectionToSocialService()) {
      var b = _Tf._Hc._Og;
      if (b.isAndroid() || b.isiOS()) this.view.prepareToLoadPackages(), _Xl._li._hj._d.send(_Xl._li._0r._Tr.GET_PAYMENT_ITEMS, {
        data: '["{0}", "{1}", "{2}"]'.format(this.getPlatform().getPlatformName(), a, _Xl._br._0l.appType)
      }, {
          type: a
        })
    }
  },
  _Vp: function () {
    if (!_Mf._L2._oa() && this.model.isPaymentEnabled() && _Xl._br._hj.checkConnectionToSocialService()) {
      var a = this.view.getSelectedItem();
      a && "undefined" !== typeof a.id && (_Mf._ks.emit(_Ag._6f, [{
        amount: a.amount,
        cost: a.cost,
        id: a.id,
        moneyType: a.moneyType,
        socialItemId: a.socialItemId,
        type: a.type
      }]), this.getPlatform().buyItem(a, this._En.bind(this), this._Gj.bind(this)))
    }
  },
  _na: function (a, b, c) {
    _Xl._li._hj._d.send(_Xl._li._0r._Tr.PROCESS_PAYMENT, {
      data: a
    }, {
        item: a,
        transactionIdentifier: b,
        productId: c
      })
  },
  _q4: function (a) {
    !a || a.code !== _Xl._br._dc.ResultCode._w ? this.model.setPaymentServices({}) : this.model.setPaymentServices(a.value)
  },
  _Rc: function (a, b) {
    _Tf._Ek._29.hidePageLoadingMessage();
    if (!a || a.code !== _Xl._br._dc.ResultCode._w) this.view.drawItems(b.type, []);
    else if (this.platform) {
      for (var c = 0; c < a.value.length; c++) this.items.push(a.value[c]);
      this.platform.addItems(a.value);
      if ("chips_play" == b.type) this.chipsLoaded = !0;
      if ("chips_real" == b.type) this.realLoaded = !0;
      this.chipsLoaded && this.realLoaded && this.platform.refresh()
    } else this._D0()
  },
  renderHandler: function (a) {
    for (var b = [], c = [], d = 0; d < this.items.length; d++) {
      var e = a[this.items[d].socialItemId];
      e && e.valid && ("chips_play" == this.items[d].type ? b.push(this.items[d]) : c.push(this.items[d]))
    }
    this.view.drawItems("chips_play", b);
    this.view.drawItems("chips_real", c)
  },
  _ib: function (a) {
    if (a && a.typeMessage) {
      var b = a.message;
      b && b.item && (a.typeMessage === _Xl._br._dc.CustomTextMessageType.POKER_REFUND_ITEMS ? this._4c(b.item) : a.typeMessage === _Xl._br._dc.CustomTextMessageType.POKER_BUY_ITEMS && this._C0(b.item))
    }
  },
  _4c: function () { },
  _C0: function (a) {
    this.view.showMessageInAppPaymentProcessed(a)
  },
  _11: function (a, b) {
    a && 0 === a.code && this.getPlatform().confirm(a.value, b)
  },
  _En: function (a, b, c) {
    this._na(a, b || null, c || null)
  },
  _Gj: function () { },
  _As: function () {
    this.model.enablePayment()
  },
  _D0: function () {
    this.model.disablePayment();
    this.view.showMessageInAppPaymentNotSupport()
  }
};
_Xl._li._Ek._Fm._bf._J2 = function (a, b) {
  _Xl._li._Ek._Fm._bf._J2.superclass.apply(this, arguments)
};
extend(_Xl._li._Ek._Fm._bf._J2, _Tf._Ek._Fm._bf._X6);
_Xl._li._Ek._Fm._bf._J2._ff = _Xl._li._0l._N1._ff.IN_APP_PAYMENT;
_Xl._li._Ek._Fm._bf._J2.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : _Xl._br._hj.checkConnectionToSocialService()
};
_Xl._li._Ek._Fm._bf._J2.prototype._ul = function () {
  if (this.base._t6.apply(this, arguments)) {
    var a = _Xl._li._dc.PaymentType;
    _Xl._li._hj._wg._f1(a.CHIPS_PLAY_MONEY);
    _Xl._li._hj._wg._f1(a.CHIPS_REAL_MONEY)
  }
};
_Xl._li._Ek._Fm._bf._J2.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._0l._N1,
      b = _Xl._li._dc.PaymentType;
    _Tf._N1.$("#{0} ".format(this.page) + a._zn).live(EventType._db, function () {
      _me.inAppPayment.itemsByType[b.CHIPS_PLAY_MONEY].growPage();
      _me.inAppPayment.itemsByType[b.CHIPS_REAL_MONEY].growPage()
    })
  }
};
_Xl._li._Ek._Fm._bf._J2.prototype._G1 = function () {
  if (this.base._G1.apply(this, arguments)) {
    var a = _Xl._li._dc.PaymentType;
    _me.inAppPayment.itemsByType[a.CHIPS_PLAY_MONEY].goToFirstPage();
    _me.inAppPayment.itemsByType[a.CHIPS_REAL_MONEY].goToFirstPage()
  }
};
_Xl._li._Ek._Fm._bf._J2.prototype._Sr = function () {
  _Tf._Ek._29.hidePageLoadingMessage()
};
_Xl._li._U6._J2 = function () {
  this.paymentServices = {}
};
_Xl._li._U6._J2.prototype = {
  isEnabled: !0,
  clear: function () {
    this.paymentServices = {}
  },
  setPaymentServices: function (a) {
    this.paymentServices = a || {};
    var a = _Tf._Hc._Og,
      b = _Xl._li._dc.PaymentServiceType,
      c = null;
    if (a.isiOS()) c = b.APPLE_STORE;
    else if (a.isAndroid()) c = b.GOOGLE_PLAY;
    c && this.isAvailablePaymentService(c) ? this.enablePayment() : this.disablePayment()
  },
  isAvailablePaymentService: function (a) {
    return a in this.paymentServices
  },
  enablePayment: function () {
    this.isEnabled = this.isEnabled && !0;
    _me.inAppPayment.paymentEnabled(this.isEnabled)
  },
  disablePayment: function () {
    this.isEnabled = !1;
    _me.inAppPayment.paymentEnabled(this.isEnabled)
  },
  isPaymentEnabled: function () {
    return !0 === this.isEnabled
  }
};
_me.inAppPayment = new function (a, b, c) {
  this.itemsByType = {};
  this.itemsByType[c.CHIPS_PLAY_MONEY] = new _c2(null, !1, a._Nr, a.isLimitedCountOnPagesInListView);
  this.itemsByType[c.CHIPS_REAL_MONEY] = new _c2(null, !1, a._Nr, a.isLimitedCountOnPagesInListView);
  this.setItemsList = function (a, c, f) {
    if (a && a in this.itemsByType) {
      for (var g = 0; g < c.length; g++) c[g].locale = b.locale, c[g].cost = parseFloat(c[g].cost), c[g].getPackagePrice = this.getPackagePrice, c[g].getPackageAmount = this.getPackageAmount;
      this.itemsByType[a].set(c, f)
    }
  };
  this.setItemsList(c.CHIPS_PLAY_MONEY, []);
  this.getPackagePrice = function (a) {
    a = a ? parseInt(a.cost, 10) : 0;
    return _Tf._41.getLocale()._H7.format(a)
  };
  this.getPackageAmount = function (a) {
    return a ? parseInt(a.amount, 10) : 0
  };
  this.setItemsList(c.CHIPS_REAL_MONEY, []);
  this.selectedItemCondition = ko.observable("");
  this.receivedItemCondition = ko.observable("");
  this.selectedItem = ko.observable(null);
  this.receivedItem = ko.observable(null);
  this.paymentEnabled = ko.observable(!1);
  this.selectedItem.subscribe(function (a) {
    a ? this.selectedItemCondition(b.locale()._48.format(this.getPackageAmount(a),
      b.locale()._g[a.type], this.getPackagePrice(a))) : this.selectedItemCondition("")
  }.bind(this));
  this.receivedItem.subscribe(function (a) {
    a ? (this.currentReceivedItemType(a.type), this.receivedItemCondition(b.locale()._i6.format(this.getPackageAmount(a), b.locale()._g[a.type]))) : this.receivedItemCondition("")
  }.bind(this));
  this.openBuyChips = function () {
    b.menu.openExternalDialog(a._N1._ff.IN_APP_PAYMENT)
  }.bind(this);
  this.paymentItemProcessed = function (a) {
    this.receivedItem(a);
    "function" === typeof this._rg && this.reserveSeatTableInstance() && this.reserveSeatTableInstance()._Z6() && this._rg();
    this._rg = null
  }.bind(this);
  this.selectPaymentItem = function (a) {
    this.selectedItem(a || null);
    this.processBuyChips()
  }.bind(this);
  this.processBuyChips = function () {
    _Xl._li._hj._wg._Vp()
  }.bind(this);
  this.closeBuyChips = function () {
    this.selectedItem(null);
    b.menu.closeExternalDialog(a._N1._ff.IN_APP_PAYMENT)
  }.bind(this);
  this.closeReceivedItem = function () {
    this.receivedItem(null)
  }.bind(this);
  this.onClientLogout = function () {
    this.selectedItem(null)
  };
  _Mf._ks.addListener(_Ag._ki,
    this.onClientLogout, this)
}(_Xl._li._0l, _me, _Xl._li._dc.PaymentType);
_Xl._li._gc = {};
_Xl._li._gc._S4 = ["library/android/inappbilling.js"];
_Xl._li._gc._Ld = ["library/ios/InAppPurchase.js"];
_Xl._li._gc.LibraryInAppAmazon = ["library/android/amazonInApp.js"];
_Xl._li._0r._Tr = {
  GET_AVAILABLE_PAYMENT_SERVICES: "InAppPayment.getAvailablePaymentService",
  GET_PAYMENT_ITEMS: "InAppPayment.getItems",
  PROCESS_PAYMENT: "InAppPayment.processPayment"
};
_Xl._li._co = function () { };
_Xl._li._co.prototype = {
  _d: null,
  _wg: null,
  extractClasses: function () { },
  initialize: function () {
    this._d = new _Xl._br._M4._20._Kf(_Xl._br._0l._xj.socialFeaturesService, new _Tf._M4._A3._Kf(_Xl._br._0l._xj.socialFeaturesService), new _Xl._li._M4._9._Kf(_Xl._li._0r._Tr), _Xl._li._0r._Tr);
    this._wg = new Sandbox._E9._Y3._J2
  },
  getPlatform: function () {
    var a = _Xl._li._0l.PaymentPlatform || null;
    return "Amazon" === a ? new _Xl._li.Platforms.Amazon : _Tf._Hc._Og.isiOS() || "AppStore" === a ? new _Xl._li.Platforms.AppStore : _Tf._Hc._Og.isAndroid() ||
      "GooglePlay" === a ? new _Xl._li.Platforms.GooglePlay : null
  },
  subscribeToEvents: function () {
    _Xl._li._0l._gc._68 && _Mf._ks.addListener(_Ag._fj, function () {
      LazyLoad.css(_Xl._li._0l._gc._68)
    }, null);
    _Mf._ks.addListener(_Xl._br._dc._Ag.CUSTOM_MESSAGE, function (a) {
      this._wg._ib(a)
    }, this);
    _Mf._ks.addListener(_Xl._br._dc._Ag.CLIENT_READY, function () {
      this._wg.setPlatform(this.getPlatform());
      this._wg.initAction()
    }, this);
    _Mf._ks.addListener(_Ag._ki, function () {
      this._wg._Q7()
    }, this)
  }
};
_Xl._li.Platforms._X6 = function () { };
_Xl._li.Platforms._X6.prototype = {
  platformName: "",
  _En: null,
  _Gj: null,
  _Ya: null,
  _q2: null,
  renderHandler: null,
  items: [],
  approvedOrder: [],
  init: function () { },
  loadLibrary: function (a, b) {
    LazyLoad.js(a, b)
  },
  refresh: function () { },
  addItems: function () { },
  setPlatformName: function (a) {
    this.platformName = a
  },
  onUpdate: function () { },
  onError: function () { },
  onApproved: function () { },
  _G1: function () { },
  getPlatformName: function () {
    return this.platformName
  },
  setSuccessBuyHandler: function (a) {
    this._En = a || function () { }
  },
  setErrorBuyHandler: function (a) {
    this._Gj = a || function () { }
  },
  setSuccessHandler: function (a) {
    this._Ya = a || function () { }
  },
  setErrorHandler: function (a) {
    this._q2 = a || function () { }
  },
  setRenderHandler: function (a) {
    this.renderHandler = a || function () { }
  },
  successInitHandler: function (a) {
    a && a()
  },
  errorInitHandler: function (a) {
    a && a()
  },
  buyItem: function () { },
  confirm: function () { },
  getSerializedTransaction: function () { }
};
_Xl._li.Platforms.Amazon = function () {
  this.inAppPurchasing = AmazonInAppPurchasing;
  this.setPlatformName("Amazon");
  this.localStorageName = "amazon_items"
};
extend(_Xl._li.Platforms.Amazon, _Xl._li.Platforms._X6);
_Xl._li.Platforms.Amazon.prototype.init = function (a, b, c, d) {
  this.setSuccessBuyHandler(c);
  this.setErrorBuyHandler(d);
  this.initLibrary(a, b);
  this.checkUncommittedTransactions(c)
};
_Xl._li.Platforms.Amazon.prototype.initLibrary = function (a, b) {
  var c = this;
  "undefined" === typeof AmazonInAppPurchasing ? this.errorInitHandler(null, b) : this.inAppPurchasing.initialize(function (b) {
    c.successInitHandler(b, a)
  }, function (a) {
    c.errorInitHandler(a, b)
  })
};
_Xl._li.Platforms.Amazon.prototype.successInitHandler = function (a, b) {
  this.base.successInitHandler(b)
};
_Xl._li.Platforms.Amazon.prototype.errorInitHandler = function (a, b) {
  this.base.errorInitHandler(b)
};
_Xl._li.Platforms.Amazon.prototype.buyItem = function (a, b, c) {
  var d = this;
  this.inAppPurchasing.purchase(a.socialItemId, function (a) {
    "undefined" === typeof a.purchaseRequestStatus || "successful" !== a.purchaseRequestStatus.toLowerCase() || (d.saveTransaction(a), b(d.getSerializedTransaction(a)))
  }, function () {
    c()
  })
};
_Xl._li.Platforms.Amazon.prototype.confirm = function (a) {
  for (var b in a) a.hasOwnProperty(b) && !0 === a[b] && this.forgetTransaction(b)
};
_Xl._li.Platforms.Amazon.prototype.getUncommittedTransactions = function () {
  var a = localStorage.getItem(this.localStorageName),
    b = [];
  if (!a) return b;
  try {
    b = JSON.parse(a)
  } catch (c) { }
  return b
};
_Xl._li.Platforms.Amazon.prototype.saveUncommittedTransactions = function (a) {
  localStorage.setItem(this.localStorageName, JSON.stringify(a))
};
_Xl._li.Platforms.Amazon.prototype.saveTransaction = function (a) {
  var b = this.getUncommittedTransactions();
  b.push(a);
  this.saveUncommittedTransactions(b)
};
_Xl._li.Platforms.Amazon.prototype.forgetTransaction = function (a) {
  for (var b = this.getUncommittedTransactions(), c = 0; c < b.length; c++) if ("undefined" !== typeof b[c].receipt && b[c].receipt.sku === a) {
    b.splice(c, 1);
    break
  }
  this.saveUncommittedTransactions(b)
};
_Xl._li.Platforms.Amazon.prototype.getSerializedTransaction = function (a) {
  return '["{0}", {1}]'.format(this.getPlatformName(), JSON.stringify(a))
};
_Xl._li.Platforms.Amazon.prototype.checkUncommittedTransactions = function (a) {
  for (var b = this.getUncommittedTransactions(), c = 0; c < b.length; c++) a(this.getSerializedTransaction(b[0]))
};
_Xl._li.Platforms.AppStore = function () {
  this.setPlatformName("AppStore")
};
extend(_Xl._li.Platforms.AppStore, _Xl._li.Platforms._X6);
_Xl._li.Platforms.AppStore.prototype.init = function (a, b, c, d, e) {
  this.setSuccessBuyHandler(c);
  this.setSuccessHandler(a);
  this.setErrorBuyHandler(d);
  this.setErrorHandler(b);
  this.setRenderHandler(e);
  this.initLibrary()
};
_Xl._li.Platforms.AppStore.prototype.initLibrary = function () {
  if (window.store) window.store.verbosity = window.store.DEBUG, window.store.when("product").updated(this.onUpdate.bind(this)), window.store.error(this.onError.bind(this)), window.store.when("product").approved(this.onApproved.bind(this)), window.store.ready(this._G1.bind(this))
};
_Xl._li.Platforms.AppStore.prototype.addItems = function (a) {
  if (window.store) for (var b = 0; b < a.length; b++) {
    var c = a[b].socialItemId;
    window.store.register({
      id: c,
      alias: "product-" + c,
      type: window.store.CONSUMABLE
    })
  }
};
_Xl._li.Platforms.AppStore.prototype.refresh = function () {
  window.store && window.store.refresh()
};
_Xl._li.Platforms.AppStore.prototype.onUpdate = function (a) {
  this.items[a.id] = a
};
_Xl._li.Platforms.AppStore.prototype.onError = function () {
  this._q2()
};
_Xl._li.Platforms.AppStore.prototype.onApproved = function (a) {
  var b = window.storekit.receiptForTransaction;
  "approved" == a.state && a.transaction.id && b[a.transaction.id] ? (this.approvedOrder[a.id] = a, this._En(this.getSerializedTransaction(b[a.transaction.id]))) : this._Gj()
};
_Xl._li.Platforms.AppStore.prototype._G1 = function () {
  this._Ya();
  this.renderHandler(this.items)
};
_Xl._li.Platforms.AppStore.prototype.buyItem = function (a) {
  window.store.order(a.socialItemId)
};
_Xl._li.Platforms.AppStore.prototype.confirm = function (a) {
  if (window.store) for (var b in a) a.hasOwnProperty(b) && this.approvedOrder[b].finish()
};
_Xl._li.Platforms.AppStore.prototype.getSerializedTransaction = function (a) {
  return '["{0}", "{1}"]'.format(this.getPlatformName(), a)
};
_Xl._li.Platforms.GooglePlay = function () {
  this.setPlatformName("GooglePlay")
};
extend(_Xl._li.Platforms.GooglePlay, _Xl._li.Platforms._X6);
(function (a) {
  a.init = function (a, c, d, e, f) {
    this.setSuccessBuyHandler(d);
    this.setSuccessHandler(a);
    this.setErrorBuyHandler(e);
    this.setErrorHandler(c);
    this.setRenderHandler(f);
    this.initLibrary()
  };
  a.initLibrary = function () {
    if (window.store) window.store.verbosity = window.store.DEBUG, window.store.when("product").updated(this.onUpdate.bind(this)), window.store.error(this.onError.bind(this)), window.store.when("product").approved(this.onApproved.bind(this)), window.store.ready(this._G1.bind(this))
  };
  a.addItems = function (a) {
    if (window.store) for (var c = 0; c < a.length; c++) {
      var d = a[c].socialItemId;
      window.store.register({
        id: d,
        alias: "product-" + d,
        type: window.store.CONSUMABLE
      })
    }
  };
  a.refresh = function () {
    window.store && window.store.refresh()
  };
  a.onUpdate = function (a) {
    this.items[a.id] = a
  };
  a.onError = function () {
    this._q2()
  };
  a.onApproved = function (a) {
    "approved" == a.state && a.transaction.receipt ? (this.approvedOrder[a.id] = a, this._En(this.getSerializedTransaction(JSON.parse(a.transaction.receipt)))) : this._Gj()
  };
  a._G1 = function () {
    this._Ya();
    this.renderHandler(this.items)
  };
  a.buyItem = function (a) {
    window.store.order(a.socialItemId)
  };
  a.confirm = function (a) {
    if (window.store) for (var c in a) a.hasOwnProperty(c) && this.approvedOrder.hasOwnProperty(c) && (this.approvedOrder[c].finish(), _Mf._ks.emit(_Ag._Sm, [{
      amount: a[c].amount,
      cost: a[c].cost,
      id: a[c].id,
      moneyType: a[c].moneyType,
      socialItemId: a[c].socialItemId,
      type: a[c].type
    }]))
  };
  a.getSerializedTransaction = function (a) {
    return '["{0}", {1}]'.format(this.getPlatformName(), JSON.stringify(a))
  }
})(_Xl._li.Platforms.GooglePlay.prototype);
_Xl._Ji = {
  shortName: "module.social-daily-lottery"
};
_Tf._hr.extendObject(SandBoxObject, _Xl._Ji);
_Xl._Ji._0l.isUsedDailyProgressLottery = !1;
_Xl._Ji._0l._gc = {
  _68: ""
};
_Xl._Ji._a._wb = function () { };
_Xl._Ji._a._wb.prototype = {
  model: null,
  view: null,
  isShowDailyBonus: !0,
  _Q7: function () {
    this.isShowDailyBonus = !0
  },
  _q0: function () {
    _Xl._Ji._hj._d.send(_Xl._Ji._0r._Tr.GET_LOTTERY_STATUS, {
      data: "[]"
    })
  },
  _g9: function () {
    _Xl._Ji._hj._d.send(_Xl._Ji._0r._Tr.PLAY_PROGRESS_LOTTERY, {
      data: "[]"
    })
  },
  _f9: function () {
    _Xl._Ji._hj._d.send(_Xl._Ji._0r._Tr.PLAY_LOTTERY, {
      data: "[]"
    })
  },
  _Hr: function (a) {
    a && 0 == a.code && a.value && "undefined" !== typeof a.value.currentDay && this._g9()
  },
  _Q0: function (a) {
    if (a && 0 == a.code && a.value) {
      var b = _Tf._Ek._29._ca(a.value);
      _Mf.PopupManagerInstance.push(function () {
        _Tf._N1._zh(_Tf._41.$("_F1._F"), _Tf._41.$("_F1._X").format(b), null, "", _Mf.PopupManagerInstance.onClose.bind(_Mf.PopupManagerInstance))
      })
    }
  },
  _v: function (a) {
    if (a && a.value && a.code == _Xl._br._dc.ResultCode._w) {
      var b = _Xl._br._0l,
        c = 1,
        d = this;
      "undefined" !== typeof b.appType && "paid" == b.appType && (c = 2E3);
      setTimeout(function () {
        if (d.isShowDailyBonus) {
          var b = _Tf._Ek._29._ca(a.value);
          _Mf.PopupManagerInstance.push(function () {
            _Tf._N1._zh(_Tf._41.$("_F1._F"), _Tf._41.$("_F1._X").format(b),
              null, "", _Mf.PopupManagerInstance.onClose.bind(_Mf.PopupManagerInstance))
          })
        }
      }, c)
    }
  },
  onPaidPlayerBonusAction: function () {
    this.isShowDailyBonus = !1
  }
};
_Xl._Ji._M4._9._Kf = function () {
  _Xl._Ji._M4._9._Kf.superclass.apply(this, arguments)
};
extend(_Xl._Ji._M4._9._Kf, _Tf._M4._9._Kf);
_Xl._Ji._M4._9._Kf.prototype.subscribers = {
  _u4: function (a) {
    _Xl._Ji._hj._ik._Hr(a)
  },
  _9e: function (a) {
    _Xl._Ji._hj._ik._Q0(a)
  },
  _aa: function (a) {
    _Xl._Ji._hj._ik._v(a)
  }
};
_Xl._Ji._M4._9._Kf.prototype._6g = function () {
  var a = this.messageTypes;
  this.callbacksMap[a.GET_LOTTERY_STATUS] = this.subscribers._u4;
  this.callbacksMap[a.PLAY_PROGRESS_LOTTERY] = this.subscribers._9e;
  this.callbacksMap[a.PLAY_LOTTERY] = this.subscribers._aa
};
_Xl._Ji._0r._Tr = {
  GET_LOTTERY_STATUS: "DailyProgressLottery.getLotteryStatus",
  PLAY_PROGRESS_LOTTERY: "DailyProgressLottery.playLottery",
  PLAY_LOTTERY: "DailyLottery.playLottery"
};
_Xl._Ji._co = function () { };
_Xl._Ji._co.prototype = {
  _d: null,
  _ik: null,
  extractClasses: function () { },
  initialize: function () {
    this._d = new _Xl._br._M4._20._Kf(_Xl._br._0l._xj.socialFeaturesService, new _Tf._M4._A3._Kf(_Xl._br._0l._xj.socialFeaturesService), new _Xl._Ji._M4._9._Kf(_Xl._Ji._0r._Tr), _Xl._Ji._0r._Tr);
    this._ik = new Sandbox._E9._Y3._wb
  },
  subscribeToEvents: function () {
    _Xl._Ji._0l._gc._68 && _Mf._ks.addListener(_Ag._fj, function () {
      LazyLoad.css(_Xl._Ji._0l._gc._68)
    }, null);
    _Mf._ks.addListener(_Ag._ki, function () {
      this._ik._Q7()
    }, this);
    _Mf._ks.addListener(_Xl._br._dc._Ag.CLIENT_READY, function () {
      _Xl._Ji._0l.isUsedDailyProgressLottery ? this._ik._q0() : this._ik._f9()
    }, this);
    _Mf._ks.addListener(_Xl._br._dc._Ag.PAID_PLAYER_BONUS, function () {
      this._ik.onPaidPlayerBonusAction()
    }, this)
  }
};
_Xl.SocialFeaturePlayerOptions = {
  shortName: "module.social-player-options"
};
_Tf._hr.extendObject(SandBoxObject, _Xl.SocialFeaturePlayerOptions);
_Xl.SocialFeaturePlayerOptions._0l._gc = {
  _68: ""
};
_Xl.SocialFeaturePlayerOptions._dc.PlayerOptionType = {
  _An: "soundOn",
  __f: "autoBlind",
  _6d: "autoAnte",
  _kh: "autoMuck"
};
_Xl.SocialFeaturePlayerOptions._M4._9._Kf = function () {
  _Xl.SocialFeaturePlayerOptions._M4._9._Kf.superclass.apply(this, arguments)
};
extend(_Xl.SocialFeaturePlayerOptions._M4._9._Kf, _Tf._M4._9._Kf);
_Xl.SocialFeaturePlayerOptions._M4._9._Kf.prototype.subscribers = {
  getPlayerOptionsHandler: function (a) {
    _Xl.SocialFeaturePlayerOptions._hj.PlayerOptionsController.onGetPlayerOptions(a)
  },
  setPlayerOptionsHandler: function (a) {
    _Xl.SocialFeaturePlayerOptions._hj.PlayerOptionsController.onSetPlayerOptions(a)
  }
};
_Xl.SocialFeaturePlayerOptions._M4._9._Kf.prototype._6g = function () {
  var a = this.messageTypes;
  this.callbacksMap[a.GET_PLAYER_OPTIONS] = this.subscribers.getPlayerOptionsHandler;
  this.callbacksMap[a.SET_PLAYER_OPTIONS] = this.subscribers.setPlayerOptionsHandler
};
_Xl.SocialFeaturePlayerOptions._Ek._2s._bf.PlayerOptions = function () { };
_Xl.SocialFeaturePlayerOptions._Ek._2s._bf.PlayerOptions.prototype = {
  setCurrentPlayerOptions: function (a) {
    _me.playerOptions.setPlayerOptions(a)
  }
};
_Xl.SocialFeaturePlayerOptions._a.PlayerOptions = function () {
  this.model = new _Xl.SocialFeaturePlayerOptions._U6.PlayerOptions;
  this.view = new _Xl.SocialFeaturePlayerOptions._Ek._2s._bf.PlayerOptions
};
_Xl.SocialFeaturePlayerOptions._a.PlayerOptions.prototype = {
  model: null,
  view: null,
  getPlayerOptionsAction: function () {
    _Xl.SocialFeaturePlayerOptions._hj._d.send(_Xl.SocialFeaturePlayerOptions._0r._Tr.GET_PLAYER_OPTIONS, {
      data: "[]"
    })
  },
  setPlayerOptionsAction: function (a, b) {
    _Xl.SocialFeaturePlayerOptions._hj._d.send(_Xl.SocialFeaturePlayerOptions._0r._Tr.SET_PLAYER_OPTIONS, {
      data: '[{"' + a + '": ' + b + "}]"
    })
  },
  _Q7: function () {
    this.model.clear()
  },
  onGetPlayerOptions: function (a) {
    a && a.code == _Xl._br._dc.ResultCode._w && a.value && (this.model.setCurrentPlayerOptions(a.value), this.view.setCurrentPlayerOptions(this.model.getCurrentPlayerOptions()))
  },
  onSetPlayerOptions: function () { }
};
_Xl.SocialFeaturePlayerOptions._U6.PlayerOptions = function () {
  this.currentPlayerOptions = {}
};
_Xl.SocialFeaturePlayerOptions._U6.PlayerOptions.prototype = {
  setCurrentPlayerOptions: function (a) {
    this.currentPlayerOptions = a
  },
  getCurrentPlayerOptions: function () {
    return this.currentPlayerOptions
  },
  clear: function () {
    this.setCurrentPlayerOptions({})
  }
};
_me.playerOptions = new function () {
  this.isSoundEnabled = ko.observable(!0);
  this.isGlobalAutoBlind = ko.observable(!1);
  this.isGlobalAutoAnte = ko.observable(!1);
  this.isGlobalAutoMuck = ko.observable(!1);
  this.setPlayerOptions = function (a) {
    var b = _Xl.SocialFeaturePlayerOptions._dc.PlayerOptionType;
    "undefined" !== typeof a[b._An] && a[b._An] !== this.isSoundEnabled() && (this.isSoundEnabled(a[b._An]), this.setIsSoundEnabled(!1));
    "undefined" !== typeof a[b.__f] && (this.isGlobalAutoBlind(a[b.__f]), this.setIsAutoBlind(!1));
    "undefined" !== typeof a[b._6d] && (this.isGlobalAutoAnte(a[b._6d]), this.setIsAutoAnte(!1));
    "undefined" !== typeof a[b._kh] && (this.isGlobalAutoMuck(a[b._kh]), this.setIsAutoMuck(!1))
  };
  this.setIsSoundEnabled = function (a) {
    _Mf._Ta._n4(this.isSoundEnabled());
    a && _Xl.SocialFeaturePlayerOptions._hj.PlayerOptionsController.setPlayerOptionsAction(_Xl.SocialFeaturePlayerOptions._dc.PlayerOptionType._An, this.isSoundEnabled());
    return !0
  };
  this.setIsAutoBlind = function (a) {
    _Mf._q1.setPermanentAutoActionValueAction(_Tf._dc.AutoAction.__f,
      this.isGlobalAutoBlind(), !1, !0);
    a && _Xl.SocialFeaturePlayerOptions._hj.PlayerOptionsController.setPlayerOptionsAction(_Xl.SocialFeaturePlayerOptions._dc.PlayerOptionType.__f, this.isGlobalAutoBlind());
    return !0
  };
  this.setIsAutoAnte = function (a) {
    _Mf._q1.setPermanentAutoActionValueAction(_Tf._dc.AutoAction._6d, this.isGlobalAutoAnte(), !1, !0);
    a && _Xl.SocialFeaturePlayerOptions._hj.PlayerOptionsController.setPlayerOptionsAction(_Xl.SocialFeaturePlayerOptions._dc.PlayerOptionType._6d, this.isGlobalAutoAnte());
    return !0
  };
  this.setIsAutoMuck = function (a) {
    _Mf._q1.setPermanentAutoActionValueAction(_Tf._dc.AutoAction._kh, this.isGlobalAutoMuck(), !1, !0);
    a && _Xl.SocialFeaturePlayerOptions._hj.PlayerOptionsController.setPlayerOptionsAction(_Xl.SocialFeaturePlayerOptions._dc.PlayerOptionType._kh, this.isGlobalAutoMuck());
    return !0
  };
  this.toggleSound = function () {
    this.isSoundEnabled(!this.isSoundEnabled());
    this.setIsSoundEnabled(!0)
  }.bind(this);
  this.toggleAutoBlind = function () {
    this.isGlobalAutoBlind(!this.isGlobalAutoBlind());
    this.setIsAutoBlind(!0)
  }.bind(this);
  this.toggleAutoAnte = function () {
    this.isGlobalAutoAnte(!this.isGlobalAutoAnte());
    this.setIsAutoAnte(!0)
  }.bind(this);
  this.toggleAutoMuck = function () {
    this.isGlobalAutoMuck(!this.isGlobalAutoMuck());
    this.setIsAutoMuck(!0)
  }.bind(this)
}(_me);
_Xl.SocialFeaturePlayerOptions._0r._Tr = {
  GET_PLAYER_OPTIONS: "PlayerOptions.getPlayerOptions",
  SET_PLAYER_OPTIONS: "PlayerOptions.setPlayerOptions"
};
_Xl.SocialFeaturePlayerOptions._co = function () { };
_Xl.SocialFeaturePlayerOptions._co.prototype = {
  _d: null,
  PlayerOptionsController: null,
  extractClasses: function () { },
  initialize: function () {
    this._d = new _Xl._br._M4._20._Kf(_Xl._br._0l._xj.socialFeaturesService, new _Tf._M4._A3._Kf(_Xl._br._0l._xj.socialFeaturesService), new _Xl.SocialFeaturePlayerOptions._M4._9._Kf(_Xl.SocialFeaturePlayerOptions._0r._Tr), _Xl.SocialFeaturePlayerOptions._0r._Tr);
    this.PlayerOptionsController = new Sandbox._E9._Y3.PlayerOptions
  },
  subscribeToEvents: function () {
    _Xl.SocialFeaturePlayerOptions._0l._gc._68 && _Mf._ks.addListener(_Ag._fj, function () {
      LazyLoad.css(_Xl.SocialFeaturePlayerOptions._0l._gc._68)
    }, null);
    _Mf._ks.addListener(_Xl._br._dc._Ag.CLIENT_READY, function () {
      this.PlayerOptionsController.getPlayerOptionsAction()
    }, this);
    _Mf._ks.addListener(_Ag._ki, function () {
      this.PlayerOptionsController._Q7()
    }, this)
  }
};
_Xl._Af = {
  shortName: "module.provider-for-facebook"
};
_Tf._hr.extendObject(SandBoxObject, _Xl._Af);
//_Xl._Af._0l.appId = "545045032176307"; //202883480246592
//_Xl._Af._0l.appId = "538650800232850";//
 _Xl._Af._0l.appId = "1551408708331990";//
// _Xl._Af._0l.appId = "126548768077680";
_Xl._Af._0l.version = "v5.0";
_Xl._Af._0l.loginDelay = 3E3;
_Xl._Af._0l.isFacebokkApp = !1;
_Xl._Af._0l.appURL = "http://test.vegasgames.com/html5-fb/";
_Xl._Af._0l.appName = "Vegas Poker";
_Xl._Af._0l.appDescription = "It's More Fun When You Win";
_Xl._Af._0l.appInvitation = "Join Vegas Poker! http://www.vegaspoker.com/";
_Xl._Af._0l.itemOgUrl = "http://pokertest3.enterra-inc.com/service/index.php/facebook/paymentItemOg?id=";
// _Xl._Af._0l.perms = "installed, public_profile, email, user_birthday, user_friends";
_Xl._Af._0l.perms = "public_profile, email, user_friends";
_Xl._Af._0l.permsFeed = "publish_stream";
_Xl._Af._0l.fieldsRegistration = "first_name,last_name,middle_name,email";
_Xl._Af._0l.initParamsFB = {
  status: !0,
  cookie: !0,
  xfbml: !0,
  oauth: !0
};
_Xl._Af._0l.redirectURI = "https://test.vegasgames.com/html5/fb_callback.html";
_Xl._Af._0l.jsoConfig = {
  client_id: _Xl._Af._0l.appId,
  redirect_uri: _Xl._Af._0l.redirectURI,
  authorization: "https://www.facebook.com/dialog/oauth",
  presenttoken: "qs"
};
_Xl._Af._0l.canDoHiddenRequest = !1;
_Xl._Af._0l._N1 = {
  FACEBOOK_BUTTON_LOGIN: "#facebook-button-login",
  SOCIAL_LOGIN_BUTTONS: "#social-login-buttons",
  FACEBOOK_LIKE_BUTTON: "#facebook-like-button",
  FACEBOOK_LIKE_BUTTON_CLASS: "fb-like"
};
_Xl._Af._h8._wc._an = {
  init: function () {
    _h8._wc._an.FACEBOOK_BUTTON_LOGIN = '<div id="fb-root"></div>\n\t\t<div id="{id}" class="social-label" style="cursor: pointer; width: 100%; height: 100px;">\n\t\t\t<div id="facebook-logo" class="social-logo"></div>\n\t\t\t<div id="facebook-label" class="social-label">{facebook_label}</div>\n\t\t</div>'.fill({
      id: _Xl._Af._0l._N1.FACEBOOK_BUTTON_LOGIN.substr(1),
      facebook_label: _Tf._41.$("_u4")
    });
    _h8._wc._an.FACEBOOK_LIKE_BUTTON = '\t\t\t<div id="{id}" class="{fbClass}"\t\t\t\tdata-href="{likePageURL}"\t\t\t\tdata-send="false"\t\t\t\tdata-width="270"\t\t\t\tdata-show-faces="false"\t\t\t\tdata-font="tahoma"\t\t\t\tdata-colorscheme="light">\t\t\t</div>'.fill({
      id: _Xl._Af._0l._N1.FACEBOOK_LIKE_BUTTON.substr(1),
      fbClass: _Xl._Af._0l._N1.FACEBOOK_LIKE_BUTTON_CLASS,
      likePageURL: _Xl._Af._0l.LikePageURL
    })
  }
};
_Xl._Af._dc._Ag = {
  FACEBOOK_AFTER_INIT: "fb-after-init",
  FACEBOOK_LOGIN: "fb-login",
  FACEBOOK_LOGIN_ACTION: "fb-login-action",
  FACEBOOK_ON_LOGIN: "fb-on-login",
  FACEBOOK_ON_LOGIN_BEGIN: "fb-on-login-begin",
  FACEBOOK_INVITE_FRIENDS: "fb-invite-friends",
  FACEBOOK_INVITE_FRIENDS_SUCCESS: "fb-invite-friends-success",
  FACEBOOK_INVITE_FRIENDS_FAILED: "fb-invite-friends-failed",
  FACEBOOK_LOAD_FRIENDS: "fb-load-friends",
  FACEBOOK_LOAD_FRIENDS_SUCCESS: "fb-load-friends-success",
  FACEBOOK_LOAD_FRIENDS_FAILED: "fb-load-friends-failed"
};
_Xl._Af._a._Xa = function () { };
_Xl._Af._a._Xa.prototype = {
  _e1: function (a) { console.log('24420');

    localStorage.setItem('facebook-response',JSON.stringify(a));

    _Xl._yn && a && a.authResponse && _Mf._ks.emit(_Xl._yn._dc._Ag.SEND_REQUEST_TO_LOGIN, [{
      accessToken: a.authResponse.accessToken,
      userID: a.authResponse.userID
    }, "facebook"])
  }
};
_Xl._Af._Hc._0h = function (a, b) {
  this.config = a || {};
  this.perms = b || {}
};
_Xl._Af._Hc._0h.prototype = {
  config: {
    appId: "",
    version: ""
  },
  perms: {
    name: "scope",
    value: ""
  },
  isConnected: !1,
  init: function () {
    FacebookWrapper.permsConfig.scope = this.perms.value;
    FacebookWrapper.init({
      config: this.config,
      beforeInitCallback: this._Hj.bind(this),
      afterInitCallback: this._Cg.bind(this)
    })
  },
  _mj: function () { console.log('24449');
    this._s3();
    FacebookWrapper.login(this._c3.bind(this), this._z5.bind(this))
  },
  registrationAction: function () {
    FacebookWrapper.getProfile(function (a) {
      _Mf._L2.socialRegistrationAction({
        provider: "facebook",
        nickName: a.first_name,
        firstName: a.first_name,
        middleName: a.middle_name,
        familyName: a.last_name,
        eMail: a.email
      })
    }, this._z5, {
        fields: _Xl._Af._0l.fieldsRegistration
      })
  },
  logout: function () { },
  share: function (a, b, c) {
    FacebookWrapper.share(_Xl._Af._0l, a, b, c)
  },
  invite: function (a, b, c) {
    FacebookWrapper.invite(a, b, c)
  },
  inviteFriends: function (a, b, c, d) {
    if (!a || !b.length) _Mf._ks.emit(_Xl._Af._dc._Ag.FACEBOOK_INVITE_FRIENDS_FAILED, []), d && d();
    else {
      var e = b.join(",");
      FacebookWrapper.customInvite(e, a, function (a) {
        _Mf._ks.emit(_Xl._Af._dc._Ag.FACEBOOK_INVITE_FRIENDS_SUCCESS, [b, a]);
        c && "function" === typeof c && c(b, a)
      }, function (a) {
        _Mf._ks.emit(_Xl._Af._dc._Ag.FACEBOOK_INVITE_FRIENDS_FAILED, [a.error]);
        d && "function" === typeof d && d(a)
      })
    }
  },
  loadFacebookFriends: function (a, b) {
    FacebookWrapper.loadFriends(function (b) {
      _Mf._ks.emit(_Xl._Af._dc._Ag.FACEBOOK_LOAD_FRIENDS_SUCCESS, [b.data]);
      a && "function" === typeof a && a(b)
    }, function (a) {
      _Mf._ks.emit(_Xl._Af._dc._Ag.FACEBOOK_LOAD_FRIENDS_FAILED, [a.error]);
      b && "function" === typeof b && b(a)
    })
  },
  like: function () {
    $(_Xl._yn._0l._N1.LIKE_CONTAINER).html(_h8._wc._an.FACEBOOK_LIKE_BUTTON);
    FB.XFBML.parse()
  },
  buyChips: function (a) {
    FacebookWrapper.pay(_Xl._Af._0l.itemOgUrl + a, this.onBuyChips.bind(this))
  },
  onBuyChips: function (a) {
    if (!a.payment_id || !("initiated" == a.status || "completed" == a.status)) a.error_code || alert("Transaction failed!")
  },
  _Hs: function (a) {
    var b = this;
    this.init();
    $(a).live("click", function () { console.log('24500');
      FacebookWrapper.isInited && (_Mf._ks.emitAsync(_Xl._Af._dc._Ag.FACEBOOK_LOGIN, []), b._mj())
    })
  },
  _Uo: function (a) {
    return a
  },
  _c3: function () { console.log('24516');
    this.isConnected = !0;
    response = this._Uo(FacebookWrapper.loginResponse);
    _Mf._ks.emitAsync(_Xl._Af._dc._Ag.FACEBOOK_ON_LOGIN, [response])
  },
  onLoginError: function (a, b, c) {
    _Mf._ks.emit(_Ag._J3, arguments);
    _Mf._Md.changePage(_Tf._0l._N1._ff._fq);
    _Tf._N1._zh("", _Tf._41.$("_e5._c0"))
  },
  _b2: function () {
    this.isConnected || (_Mf._ks.emitAsync(_Ag._sc, [""]), _Mf._Md.changePage(_Tf._0l._N1._ff._fq), _Tf._N1._zh("", _Tf._41.$("_e5._S0")))
  },
  _s3: function () {
    _Mf._ks.emitAsync(_Ag._Pg, null)
  },
  _z5: function () {
    _Mf._ks.emitAsync(_Ag._sc, [""])
  },
  _Hj: function () { },
  _Cg: function () {
    var a = [];
    _Xl._Af._0l.isFacebokkApp && (a = [this.login.bind(this)]);
    _Mf._ks.emitAsync(_Xl._Af._dc._Ag.FACEBOOK_AFTER_INIT, a)
  }
};
_Xl._Af._Hc._dj = function (a, b) { console.log('24542');
  _Xl._Af._Hc._dj.superclass.apply(this, arguments);
  _Xl.CordovaOAuth && (_Mf._ks.addListener(_Xl.CordovaOAuth._dc._Ag.CONFIGURE_OAUTH, function (a) { console.log(a);
    if (a) a.facebook = _Xl._Af._0l.jsoConfig
  }, null), _Mf._ks.addListener(_Xl.CordovaOAuth._dc._Ag.CLEAR_TOKENS, function (a, b) {
    "facebook" == a && this.logout(b)
  }, this))
};
extend(_Xl._Af._Hc._dj, _Xl._Af._Hc._0h);
_Xl._Af._Hc._dj.prototype.isInited = !1;
_Xl._Af._Hc._dj.prototype.init = function () {
  if (!this.isInited) this._Hj(), this.isInited = !0, this._Cg()
};
_Xl._Af._Hc._dj.prototype.share = function (a, b, c) {
  if (a) if (_Xl._Af._0l.canDoHiddenRequest && c) this._56(a, b, c);
  else {
    var b = this.getUrlAction("dialog/feed"),
      c = _Xl._Af._0l,
      d = {
        app_id: c.appId,
        link: c.appURL,
        description: c.appDescription
      };
    if (_Xl.CordovaOAuth) {
      if (a.text) d.name = a.text;
      if (a.picture) d.picture = a.picture;
      d.redirect_uri = c.redirectURI;
      _Xl.CordovaOAuth._hj.JSOController.showShareDialogAction(b, d)
    }
  }
};
_Xl._Af._Hc._dj.prototype._56 = function (a, b, c) {
  if (a && c && c.userID) {
    var d = this.getUrlAction("{0}/feed", !0),
      e = _Xl._Af._0l,
      d = d.format(c.userID);
    _Xl.CordovaOAuth && _Xl.CordovaOAuth._hj.JSOController.executeAction("facebook", d, [e.permsFeed], {
      access_token: c.accessToken,
      message: a.text,
      picture: a.picture,
      link: e.appURL,
      name: e.appName,
      description: e.appDescription
    }, b)
  }
};
_Xl._Af._Hc._dj.prototype.invite = function (a, b) {
  if (a) {
    var c = this.getUrlAction("dialog/apprequests"),
      d = _Xl._Af._0l;
    _Xl.CordovaOAuth && (_Xl.CordovaOAuth._hj.JSOController.showDialogAction(c, {
      app_id: d.appId,
      message: a,
      redirect_uri: d.redirectURI
    }), b())
  }
};
_Xl._Af._Hc._dj.prototype.inviteFriends = function (a, b, c, d) {
  if (a && b.length) {
    var e = b.join(","),
      f = this.getUrlAction("dialog/apprequests"),
      g = _Xl._Af._0l;
    _Xl.CordovaOAuth && _Xl.CordovaOAuth._hj.JSOController.showInviteDialog(f, {
      app_id: g.appId,
      message: a,
      redirect_uri: g.redirectURI,
      to: e
    }, function (a) {
      a && !a.error && !a.error_code ? (_Mf._ks.emit(_Xl._Af._dc._Ag.FACEBOOK_INVITE_FRIENDS_SUCCESS, [b, a]), c && c(b, a)) : (_Mf._ks.emit(_Xl._Af._dc._Ag.FACEBOOK_INVITE_FRIENDS_FAILED, [a.error]), d && d(a))
    })
  }
};
_Xl._Af._Hc._dj.prototype.loadFacebookFriends = function (a, b) {
  var c = this.perms.value ? this.perms.value.split(",") : [],
    d = this.getUrlAction("me/invitable_friends", !0);
  _Xl.CordovaOAuth._hj.JSOController.executeAction("facebook", d, c, null, function (c) {
    c && !c.error ? (a && a(c), _Mf._ks.emit(_Xl._Af._dc._Ag.FACEBOOK_LOAD_FRIENDS_SUCCESS, [c.data])) : (_Mf._ks.emit(_Xl._Af._dc._Ag.FACEBOOK_LOAD_FRIENDS_FAILED, [c.error]), b && b(c))
  }, "get")
};
_Xl._Af._Hc._dj.prototype._Hs = function () {
  this.init()
};
_Xl._Af._Hc._dj.prototype.bind = function (a) {
  var b = this;
  this._Hs();
  $(a).live("click", function () { console.log('24626');
    b.isInited && (_Mf._ks.emitAsync(_Xl._Af._dc._Ag.FACEBOOK_LOGIN, []), b._mj())
  })
};
_Xl._Af._Hc._dj.prototype._mj = function () { console.log('24631');
  this._s3();
  var a = this.perms.value ? this.perms.value.split(",") : [];
  if (_Xl.CordovaOAuth) {
    var b = this.getUrlAction("me", !0);
    _Xl.CordovaOAuth._hj.JSOController.authorizeAction("facebook", b, a, this._c3.bind(this), this._b2.bind(this))
  }
};
_Xl._Af._Hc._dj.prototype.registrationAction = function () { console.log('24639');
  var a = _Xl._Af._0l,
    b = this.perms.value ? this.perms.value.split(",") : [],
    c = this.getUrlAction("me", !0);
  _Xl.CordovaOAuth._hj.JSOController.executeAction("facebook", c, b, {
    fields: a.fieldsRegistration
  }, function (a) {
    _Mf._L2.socialRegistrationAction({
      provider: "facebook",
      nickName: a.first_name,
      firstName: a.first_name,
      middleName: a.middle_name,
      familyName: a.last_name,
      eMail: a.email
    })
  }, "get")
};
_Xl._Af._Hc._dj.prototype._c3 = function (a) { console.log(' login 24656');
  a = this._Uo(a);
  _Mf._ks.emitAsync(_Xl._Af._dc._Ag.FACEBOOK_ON_LOGIN, [a])
};
_Xl._Af._Hc._dj.prototype.logout = function (a) {  console.log(' logout 24656');
  if (_Xl.CordovaOAuth) {
    var b = this.getUrlAction("logout.php");
    _Xl.CordovaOAuth._hj.JSOController.showAndCloseDialogAction(b, {
      access_token: a && a.accessToken ? a.accessToken : "",
      next: _Xl._Af._0l.redirectURI
    }, "_blank", "hidden=yes")
  }
};
_Xl._Af._Hc._dj.prototype._Uo = function (a) {
  a.authResponse = {
    accessToken: a.accessToken,
    userID: a.id
  };
  return a
};
_Xl._Af._Hc._dj.prototype.getUrlAction = function (a, b) { console.log('24676');
  var c = "",
    d = "https://www.facebook.com/";
  b && (d = "https://graph.facebook.com/", c = this.config.version + "/");
  return d + c + a
};
_Xl._Af._gc = {};
_Xl._Af._co = function () { };
_Xl._Af._co.prototype = {
  _d: null,
  _0h: null,
  _f: null,
  extractClasses: function () { },
  initialize: function () {
    this.initFacebookService();
    this._f = new Sandbox._E9._Y3._Xa
  },
  initFacebookService: function () { console.log('24692');
    _Mf._ks.addListener("login-on-create", function () {
      _Tf._N1._c6(_Xl._Af._0l._N1.SOCIAL_LOGIN_BUTTONS, _h8._wc._an.FACEBOOK_BUTTON_LOGIN, !0)
    }, null);
    _Mf._ks.addListener("fb-login-init", function () {
      _Tf._N1._c6(_Xl._Af._0l._N1.SOCIAL_LOGIN_BUTTONS, _h8._wc._an.FACEBOOK_BUTTON_LOGIN, !0)
    }, null);
    _Mf._ks.addListener("fb-login-start",

      function () {
        this._0h._mj()
      }, this);
    _Mf._ks.addListener("login-on-init", function () {
      this._0h._Hs(_Xl._Af._0l._N1.FACEBOOK_BUTTON_LOGIN)
    }, this);
    _Mf._ks.addListener(_Ag._ki, function () {
      this._0h.logout()
    }, this);
    var a = !_Tf._Hc._Og._2d() ? _Xl._Af._0l.initParamsFB : {}, b = {
      name: "scope",
      value: _Xl._Af._0l.perms
    };
    a.appId = _Xl._Af._0l.appId;
    a.version = _Xl._Af._0l.version;
    a.loginDelay = _Xl._Af._0l.loginDelay;
    this._0h = _Tf._Hc._Og._2d() ? new _Xl._Af._Hc._dj(a, b) : new _Xl._Af._Hc._0h(a, b)
  },
  subscribeToEvents: function () { console.log('24720');
    _Mf._ks.addListener(_Xl._Af._dc._Ag.FACEBOOK_ON_LOGIN,

      function (a) {
        this._f._e1(a)
      }, this);
    _Mf._ks.addListener(_Xl._yn._dc._Ag.CURRENT_CLIENT_SHARE, function (a, b, c) {
      "facebook" == a && this._0h.share(b, null, c)
    }, this);
    _Mf._ks.addListener(_Xl._yn._dc._Ag.CURRENT_CLIENT_INVITE, function (a, b, c) {
      "facebook" == a && this._0h.invite(b || _Xl._Af._0l.appInvitation, null, c)
    }, this);
    _Mf._ks.addListener(_Xl._Af._dc._Ag.FACEBOOK_LOGIN_ACTION, function (a) { console.log('24732');
      "facebook" === a && this._0h._mj()
    }, this);
    _Mf._ks.addListener(_Xl._yn._dc._Ag.CURRENT_CLIENT_LIKE, function (a) {
      "facebook" === a && this._0h.like()
    },
      this);
    _Mf._ks.addListener(_Xl._yn._dc._Ag.NEED_REGISTRATION, function (a) {
      "facebook" === a && this._0h.registrationAction()
    }, this);
    _Mf._ks.addListener(_Xl._Af._dc._Ag.FACEBOOK_INVITE_FRIENDS, function (a, b) {
      this._0h.inviteFriends(a, b)
    }, this);
    _Mf._ks.addListener(_Xl._Af._dc._Ag.FACEBOOK_LOAD_FRIENDS, function () {
      this._0h.loadFacebookFriends()
    }, this);
    _Mf._ks.addListener(_Xl._yn._dc._Ag.CURRENT_CLIENT_BUY_CHIPS, function (a, b) {
      "facebook" == a && this._0h.buyChips(b)
    }, this)
  }
};
_Xl._ae = {
  shortName: "module.social-avatars"
};
_Tf._hr.extendObject(SandBoxObject, _Xl._ae);
_Xl._ae._0l._W0 = 1;
_Xl._ae._0l.isLimitedCountOnPagesInAvatarsList = !0;
_Xl._ae._0l._gc = {
  _68: ""
};
_Xl._ae._0l._N1 = {};
_Xl._ae._0l._N1._ff = {
  SOCIAL_AVATARS: "social-avatars"
};
_Xl._ae._dc.SocialAvatarType = {
  DEFAULT: "default",
  PREDEFINED: "predefined",
  GIFT: "gift"
};
_Xl._ae._M4._9._Kf = function () {
  _Xl._ae._M4._9._Kf.superclass.apply(this, arguments)
};
extend(_Xl._ae._M4._9._Kf, _Tf._M4._9._Kf);
_Xl._ae._M4._9._Kf.prototype.subscribers = {
  _gs: function (a) {
    _Xl._ae._hj._fc._75(a)
  },
  _Qe: function (a) {
    _Xl._ae._hj._fc._z7(a)
  }
};
_Xl._ae._M4._9._Kf.prototype._6g = function () {
  var a = this.messageTypes;
  this.callbacksMap[a.GET_AVATARS_LIST] = this.subscribers._gs;
  this.callbacksMap[a.USE_AVATAR] = this.subscribers._Qe
};
_Xl._ae._0r._Tr = {
  GET_AVATARS_LIST: "PlayerAvatar.getAvatarList",
  USE_AVATAR: "PlayerAvatar.useAvatar"
};
_Xl._ae._Ek._2s._bf._0p = function () { };
_Xl._ae._Ek._2s._bf._0p.prototype = {
  drawAvatarsList: function (a) {
    _me.socialAvatars.setAvatarsList(a)
  },
  getSelectedAvatar: function () {
    var a = _me.socialAvatars.selectedAvatar();
    if (!a || "undefined" === typeof a.id) return a;
    _Tf._Ek._29.showPageLoadingMessage();
    return a
  },
  _9j: function (a) {
    _me.publicProfile.clientAvatar(a && a.normal ? a.normal : _Tf._0l._A._Nc._0q);
    _Tf._Ek._29.hidePageLoadingMessage();
    _me.menu.back()
  }
};
_Xl._ae._a._0p = function () {
  this.model = new _Xl._ae._U6._0p;
  this.view = new Sandbox._E9._2s._bf._0p
};
_Xl._ae._a._0p.prototype = {
  model: null,
  view: null,
  _bb: function () {
    _Xl._ae._hj._d.send(_Xl._ae._0r._Tr.GET_AVATARS_LIST, {
      data: "[]"
    })
  },
  _zm: function () {
    var a = this.view.getSelectedAvatar();
    a && "undefined" !== typeof a.id && _Xl._ae._hj._d.send(_Xl._ae._0r._Tr.USE_AVATAR, {
      data: "[" + a.id + "]"
    })
  },
  _Q7: function () {
    this.model.clear()
  },
  _75: function (a) {
    a && 0 == a.code && this.view.drawAvatarsList(a.value || [])
  },
  _z7: function (a) {
    a && 0 == a.code && this.view._9j(a.value ? a.value.resource : null)
  }
};
_Xl._ae._Ek._Fm._bf._0p = function (a, b) {
  _Xl._ae._Ek._Fm._bf._0p.superclass.apply(this, arguments)
};
extend(_Xl._ae._Ek._Fm._bf._0p, _Tf._Ek._Fm._bf._X6);
_Xl._ae._Ek._Fm._bf._0p._ff = _Xl._ae._0l._N1._ff.SOCIAL_AVATARS;
_Xl._ae._Ek._Fm._bf._0p.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : !_Xl._br._hj.checkConnectionToSocialService() ? !1 : !0
};
_Xl._ae._Ek._Fm._bf._0p.prototype._ul = function () {
  this.base._t6.apply(this, arguments) && _Xl._ae._hj._fc._bb()
};
_Xl._ae._U6._0p = function () { };
_Xl._ae._U6._0p.prototype = {
  clear: function () { }
};
_me.socialAvatars = new function (a, b) {
  this.availableAvatarsList = new _c2(null, !1, b._W0, b.isLimitedCountOnPagesInAvatarsList);
  this.setAvatarsList = function (a) {
    for (var b = 0; b < a.length; b++) if (null === a[b].resource || null === a[b].resource.normal) a[b].resource = {
      normal: _Tf._0l._A._Nc._0q
    };
    this.availableAvatarsList.set(a)
  };
  this.selectedAvatar = function () {
    return 0 === this.availableAvatarsList.length() ? null : this.availableAvatarsList.allElements[this.availableAvatarsList.pages() - 1] || null
  };
  this.onClientLogout = function () {
    this.setAvatarsList([])
  };
  this.confirmSelectedAvatar = function () {
    _Xl._ae._hj._fc._zm()
  };
  _Mf._ks.addListener(_Ag._ki, this.onClientLogout, this)
}(_me, _Xl._ae._0l);
_Xl._ae._co = function () { };
_Xl._ae._co.prototype = {
  _d: null,
  _fc: null,
  extractClasses: function () { },
  initialize: function () {
    this._d = new _Xl._br._M4._20._Kf(_Xl._br._0l._xj.socialFeaturesService, new _Tf._M4._A3._Kf(_Xl._br._0l._xj.socialFeaturesService), new _Xl._ae._M4._9._Kf(_Xl._ae._0r._Tr), _Xl._ae._0r._Tr);
    this._fc = new Sandbox._E9._Y3._0p
  },
  subscribeToEvents: function () {
    _Xl._ae._0l._gc._68 && _Mf._ks.addListener(_Ag._fj, function () {
      LazyLoad.css(_Xl._ae._0l._gc._68)
    }, null);
    _Mf._ks.addListener(_Xl._br._dc._Ag.CLIENT_READY, function () {
      this._fc._bb()
    },
      this);
    _Mf._ks.addListener(_Ag._ki, function () {
      this._fc._Q7()
    }, this)
  }
};
_Xl.RememberMe = {
  shortName: "module.remember-me"
};
_Tf._hr.extendObject(SandBoxObject, _Xl.RememberMe);
_Xl.RememberMe._0l._N1 = {
  REMEMBER_ME_CHECKBOX: "#remember-me-checkbox",
  REMEMBER_ME: "#remember-me"
};
_Xl.RememberMe._h8._wc._an = {
  init: function () {
    _h8._wc._an.REMEMBER_ME_CHECKBOX = '<div id="remember-me" class="checked" ><div class="checkbox" id="{id}"></div><div class="label">{text}</div></div>'.fill({
      text: _Tf._41.$("_W0"),
      id: _Xl.RememberMe._0l._N1.REMEMBER_ME_CHECKBOX.substr(1)
    })
  }
};
_Xl.RememberMe._co = function () {
  this.checked = !0;
  this._g7 = this._g7.bind(this)
};
_Xl.RememberMe._co.prototype = {
  extractClasses: function () { },
  initialize: function () { },
  subscribeToEvents: function () {
    _Mf._ks.addListener("login-on-leave", function () {
      $(_Xl.RememberMe._0l._N1.REMEMBER_ME_CHECKBOX).unbind()
    }, this);
    _Mf._ks.addListener("login-on-create", function () {
      _Tf._N1._c6(_Tf._0l._N1._R4, _h8._wc._an.REMEMBER_ME_CHECKBOX);
      var provider = localStorage.getItem('provider')
      if(provider == 'facebook'){
        var a = JSON.parse(localStorage.getItem('facebook-response'));
        if(a){
          
          _Mf._ks.emit(_Xl._yn._dc._Ag.SEND_REQUEST_TO_LOGIN, [{
            accessToken: a.authResponse.accessToken,
            userID: a.authResponse.userID
          }, "facebook"])
        }
      }else{
        this.autoLoginAction()
      }
    }, this);
    _Mf._ks.addListener("login-on-show", function () {
      $(_Xl.RememberMe._0l._N1.REMEMBER_ME_CHECKBOX).bind(EventType._qc, this._g7);
      this.onChange()
    },
      this);
    _Xl._Af && _Mf._ks.addListener(_Xl._Af._dc._Ag.FACEBOOK_AFTER_INIT, function (a) { console.log('24929');
      this.autoFacebookLoginAction(a)
    }, this);
    _Xl._Ma && _Mf._ks.addListener(_Xl._Ma._dc._Ag.GOOGLE_AFTER_INIT, function (a) {
      this.autoGoogleLoginAction(a)
    }, this);
    _Mf._ks.addListener(_Ag._ki, function () {
      this.forgetUserAction()
    }, this)
  },
  rememberUserAction: function (a) {
    this.isLocalStorageAvailable() && !_Tf._Hc._Og.isWebApplication("facebook") && !_Tf._Hc._Og.isWebApplication("google") && 0 !== _Tf._N1.$(_Xl.RememberMe._0l._N1.REMEMBER_ME_CHECKBOX).length && this.checked && (this.forgetUserAction(), a.provider ? localStorage.setItem("provider", a.provider) : localStorage.setItem("user", JSON.stringify(a)))
  },
  rememberLocaleAction: function (a) {
    this.isLocalStorageAvailable() && localStorage.setItem("locale", a)
  },
  getKnownUserAction: function () {
    if (!this.isLocalStorageAvailable()) return null;
    var a = null;
    try {
      a = JSON.parse(localStorage.getItem("user"))
    } catch (b) { }
    return a
  },
  getUserProviderAction: function () {
    return !this.isLocalStorageAvailable() ? null : localStorage.getItem("provider")
  },
  forgetUserAction: function () {
    this.isLocalStorageAvailable() && (localStorage.removeItem("user"), localStorage.removeItem("provider"))
  },
  isLocalStorageAvailable: function () {
    try {
      return "localStorage" in window && null !== window.localStorage
    } catch (a) {
      return !1
    }
  },
  autoLoginAction: function () {
    !_Tf._Hc._Og.isWebApplication("facebook") && !_Tf._Hc._Og.isWebApplication("google") && this.getKnownUserAction() && !_Mf._20._W6.isDisconnected() && _Mf._L2._k8(this.getKnownUserAction())
  },
  autoFacebookLoginAction: function (a) {
    console.log('check59');
    console.log(a)
    if (!_Mf._20._W6.isDisconnected() && _Xl._Af && "function" === typeof a) {
      var b = localStorage.getItem("provider");
      b && "facebook" == b && a()
    }
  },
  autoGoogleLoginAction: function (a) {
    if (("google" == this.getUserProviderAction() || _Tf._Hc._Og.isWebApplication("google")) && !_Mf._20._W6.isDisconnected() && _Xl._Ma && "function" === typeof a) {
      var b = localStorage.getItem("provider");
      b && "google" == b && a()
    }
  },
  _g7: function () {
    this.checked = !this.checked;
    this.onChange()
  },
  onChange: function () {
    var a = $(_Xl.RememberMe._0l._N1.REMEMBER_ME);
    a && (this.checked ? a.addClass("checked") : a.removeClass("checked"))
  }
};
_Xl.Supersonic = {
  shortName: "module.supersonic"
};
_Tf._hr.extendObject(SandBoxObject, _Xl.Supersonic);
_Xl.Supersonic._0l.AppId = "733142a5";
_Xl.Supersonic._0l.OfferWallURL = "https://www.supersonicads.com/delivery/panel.php?applicationKey={appId}&applicationUserId={userId}";
_Xl.Supersonic._0l._N1._ff = {
  SUPERSONIC_POPUP: "supersonic"
};
_me.supersonic = new function (a, b) {
  this.showSupersonicPopup = function () {
    a.menu.openExternalDialog(b._N1._ff.SUPERSONIC_POPUP)
  };
  this.closeSupersonicPopup = function () {
    a.menu.closeExternalDialog(b._N1._ff.SUPERSONIC_POPUP)
  };
  this.showOffersWall = function () {
    _Xl.Supersonic._hj.SupersonicService.showOffersAction()
  };
  this.showDirectPlayVideo = function () {
    if (playOnce) {
      _Xl.Supersonic._hj.SupersonicService.showRewardedAdAction()
    }
    playOnce = false;
  }
  this.closeRewardPopup = function(){
    $('.reward-popup').css({ 'display': 'none' });
    addOnce = true;
  }
}(_me, _Xl.Supersonic._0l);
_Xl.Supersonic._co = function () { };
_Xl.Supersonic._co.prototype = {
  SupersonicService: null,
  extractClasses: function () { },
  initialize: function () {
    this.SupersonicService = new _Xl.Supersonic._Hc.SupersonicService
  },
  subscribeToEvents: function () {
   
    var a = this;
    _Mf._ks.addListener(_Xl._br._dc._Ag.CLIENT_READY, this.onClientReady, this);
    _Mf._ks.addListener(_Ag._ki, this.onClientLogout, this);
    window.addEventListener("offerwallInitialized", this.SupersonicService.onOfferwallInitialized.bind(this.SupersonicService), !1);
    window.addEventListener("offerwallInitializationFailed",
      this.SupersonicService.onOfferwallInitializationFailed.bind(this.SupersonicService), !1);
    // window.addEventListener("rewardedVideoAvailabilityChanged", function (b) {
    //   b.available ? a.SupersonicService.rewardedVideoEnable() : a.SupersonicService.rewardedVideoDisable()
    // }, !1)
  },
  
  onClientReady: function () {
    this.SupersonicService.setUserId(_Mf._L2._d1());
    var a = _Xl.Supersonic._0l;
    a ? this.SupersonicService.initAction(a.AppId) : this.SupersonicService.disable()
  },
  onClientLogout: function () {
    this.SupersonicService.isEnabled() && this.SupersonicService._Q7()
  }
};
_Xl.Supersonic._Hc.SupersonicService = function () { };
_Xl.Supersonic._Hc.SupersonicService.prototype = {
  SupersonicAdsInstance: null,
  appId: null,
  userId: null,
  _isEnabled: !1,
 
  initAction: function (a) {
    "undefined" === typeof SupersonicAds ? this.disable() : (this.setAppId(a), this.connectAction())
  },
  isEnabled: function () {
    return this._isEnabled
  },
  enable: function () {
    this._isEnabled = !0
  },
  disable: function () {
    this._isEnabled = !1
  },
  connectAction: function () {
    var a = this.getUserId(),
      b = this.getAppId();
      //alert(a,b)
    this.SupersonicAdsInstance = new SupersonicAds(b.toString(), a.toString())
  },
  showOffersAction: function () {
   // var a = this.getUserId(),
    //  b = "733142a5";//this.getAppId();
    //alert(a);
   // alert(b);
   // alert(SupersonicAds)
    //this.SupersonicAdsInstance = new SupersonicAds(b.toString(), a.toString())   
   // alert(this.SupersonicAdsInstance)
    //this.isEnabled() ? this.SupersonicAdsInstance.showOfferwall() : _Tf._N1._zh("", _Tf._41.$("_e5._K8"))
   // this.SupersonicAdsInstance.showOfferwall()
    //var isAds = new IronSourceAds("72ea053d", "72ea053d" + Date.now());
      //document.addEventListener('deviceready', function onDeviceReady() {
      // var isAds = new IronSourceAds("72ea053d", 'demo_' + Date.now(), function () {

      //   alert(JSON.stringify(isAds))
      // })
    //})
    // IronSourceAds.init({
    //   appKey: "72ea053d"
    // });
    // IronSourceAds.setDynamicUserId({ userId: 'demo_' + Date.now() });
    // alert(JSON.stringify(IronSourceAds))
    // IronSourceAds.validateIntegration();
    // IronSourceAds.showRewardedVideo();


 /**
 * Initialize Iron Source Ads
 */
    //IronSourceAds.init({
     // appKey: '72ea053d',
     // userId: 'demo_' + Date.now(), // optional

      //onSuccess: function () {
        /**
         * Validate Integration
         */
        //IronSourceAds.validateIntegration();
        //console.log('there----->')
        /**
         * Set user Id (optional)
         */
       // IronSourceAds.setDynamicUserId({ userId: 'demo123_' + Date.now() });

        /******************** OFFERWALL ******************* */

        // IronSourceAds.hasOfferwall({
        //   onSuccess: function (available) {
        //     alert(available)
        //     IronSourceAds.showOfferwall();
        //     if (available) {
        //       //Show offerwall              
        //       IronSourceAds.showOfferwall();
        //     }
        //   }
        // })



        /******************** REWARDED VIDEO ******************* */

    //     IronSourceAds.hasRewardedVideo({
    //       onSuccess: function (available) {
    //         console.log('--avaiable--->',available);
    //         IronSourceAds.showRewardedVideo();
    //         if (available) {
              
    //           //Show offerwall
    //           IronSourceAds.showRewardedVideo();
    //         }
    //       }
    //     })

    //   }
    // });
    
  },
  showRewardedAdAction: function () {
    //this.rewardedVideoEnabled ? this.showRewardedAdAdmob() : _Tf._N1._zh("", _Tf._41.$("_e5._j6"))
    //alert(this.rewardedVideoEnabled)
    //this.SupersonicAdsInstance.showRewardedAd()
   // this.rewardedVideoEnabled ? this.SupersonicAdsInstance.showRewardedAd() : _Tf._N1._zh("", _Tf._41.$("_e5._j6"))
    
    this.showRewardedAdAdmob();
  },
  showRewardedAdAdmob: function () {
        var showAd = true;
        $.mobile.showPageLoadingMsg()
        AdMob.prepareRewardVideoAd({
          adId:"ca-app-pub-2669498219780148/8886669807"//Unit ID
        },
        function () {
          AdMob.showRewardVideoAd();
        },
        function () {
        _Tf._N1._zh("", _Tf._41.$("_e5._j6"))
        });
        document.addEventListener('onAdLoaded', function (data) {
          $.mobile.hidePageLoadingMsg();
        });
        document.addEventListener('onAdDismiss', function (data) {         
         playOnce = true;
        });
        document.addEventListener('onAdFailLoad', function (data) {         
          playOnce = true;
          console.log('===@' + JSON.stringify(data))
          $.mobile.hidePageLoadingMsg();
         // alert('Internal error')
        });
       
    
    
    document.addEventListener('onAdPresent', function (data) {
      console.log('cond------' + showAd + '-------' + playOnce + '===' + addOnce)
     // alert(addOnce)
      if (data.adType == 'rewardvideo' && showAd && addOnce) {
           var nickName = localStorage.getItem('loginUserName');
            $.ajax({
              url: "http://test.vegasgames.com/update_chips.php?chips=200&f_nick=" + nickName,
              type: "GET",
              dataType: "json",
              success: function (data) {
                console.log('data is--->  '+ data)
                if (!data.error) {
                 // setTimeout(function () { alert('You got 200 chips!'); }, 2000);  
                  //alert('You got 200 chips!') 
                  $('.reward-popup').css({'display':'table'});
                  customVar = true;
                  latestChips = data.chips; //set new chips
                }
              },
              error: function (a, b) {
                console.log('---- Error while increasing chips ----',a,b)
              }
            })
            showAd = false;
            playOnce = true;
            addOnce = false;
          } else {
            playOnce = true;
            //addOnce = false;
          }
         
        });
},
  setAppId: function (a) {
    this.appId = a
  },
  getAppId: function () {
    return this.appId
  },
  _Q7: function () {
    this.setAppId(null)
  },
  setUserId: function (a) {
    this.userId = a
  },
  getUserId: function () {
    return this.userId
  },
  onOfferwallInitialized: function () {
   
    this.enable()
  },
  onOfferwallInitializationFailed: function () {
    
    this.disable()
  },
  rewardedVideoEnable: function () {
  
    this.rewardedVideoEnabled = !0
  },
  rewardedVideoDisable: function () {
   
    this.rewardedVideoEnabled = !1
  }
};
_Xl.AppsFlyer = {
  shortName: "module.apps-flyer"
};
_Tf._hr.extendObject(SandBoxObject, _Xl.AppsFlyer);
_me.appsflyer = new function (a, b) {
  this.showTapjoyPopup = function () {
    a.menu.openExternalDialog(b._N1._ff.TAPJOY_POPUP)
  };
  this.closeTapjoyPopup = function () {
    a.menu.closeExternalDialog(b._N1._ff.TAPJOY_POPUP)
  };
  this.showOffersWall = function () {
    _Xl.Tapjoy._hj.TapjoyService.showOffersAction()
  };
  this.showDirectPlayVideo = function () { }
}(_me, _Xl.AppsFlyer._0l);
_Xl.AppsFlyer._co = function () { };
_Xl.AppsFlyer._co.prototype = {
  AppsFlyerService: null,
  extractClasses: function () { },
  initialize: function () {
    this.AppsFlyerService = new _Xl.AppsFlyer._Hc.AppsFlyerService;
    var a = _Xl.AppsFlyer._0l;
    a ? this.AppsFlyerService.initAction(_Tf._Hc._Og.isAndroid() ? a.ANDROID_APP_ID : a.IOS_APP_ID, a.DEV_KEY) : this.AppsFlyerService.disable()
  },
  subscribeToEvents: function () {
    _Mf._ks.addListener(_Ag._ki, this.AppsFlyerService._Q7, this.AppsFlyerService);
    _Mf._ks.addListener(_Ag._J3, this.AppsFlyerService._mj, this.AppsFlyerService);
    _Mf._ks.addListener(_Ag._6f, this.AppsFlyerService.selectPurchaseItem, this.AppsFlyerService);
    _Mf._ks.addListener(_Ag._Sm, this.AppsFlyerService.confirmPurchaseItem, this.AppsFlyerService);
    _Mf._ks.addListener(_Ag.__4, this.AppsFlyerService.buyGiftItem, this.AppsFlyerService);
    _Mf._ks.addListener(_Ag._uk, this.AppsFlyerService.levelUp, this.AppsFlyerService)
  }
};
_Xl.AppsFlyer._Hc.AppsFlyerService = function () { };
_Xl.AppsFlyer._Hc.AppsFlyerService.prototype = {
  appId: null,
  devKey: null,
  _isEnabled: !1,
  initAction: function (a, b) {
    "undefined" === typeof plugins || "undefined" === typeof plugins.appsFlyer ? this.disable() : (this.setAppId(a), this.setDevKey(b), this.enable())
  },
  isEnabled: function () {
    return this._isEnabled
  },
  enable: function () {
    this._isEnabled = !0
  },
  disable: function () {
    this._isEnabled = !1
  },
  setAppId: function (a) {
    this.appId = a
  },
  getAppId: function () {
    return this.appId
  },
  setDevKey: function (a) {
    this.devKey = a
  },
  getDevKey: function () {
    return this.devKey
  },
  _Q7: function () {
    this.setAppId(null);
    this.setDevKey(null)
  },
  _mj: function (a) {

    this.isEnabled() && (window.plugins.appsFlyer.trackEvent("login", a), window.plugins.appsFlyer.setAppUserId(_Mf._L2._d1()))
  },
  selectPurchaseItem: function (a) {
    this.isEnabled() && window.plugins.appsFlyer.trackEvent("selectPurchaseItem", a)
  },
  confirmPurchaseItem: function (a) {
    this.isEnabled() && window.plugins.appsFlyer.trackEvent("confirmPurchaseItem", a)
  },
  buyGiftItem: function (a) {
    debugger;
    this.isEnabled() && window.plugins.appsFlyer.trackEvent("buyGiftItem",
      a)
  },
  levelUp: function (a) {
    this.isEnabled() && window.plugins.appsFlyer.trackEvent("levelUp", a)
  }
};
_Xl.AppsFlyer._0l._N1 = {};