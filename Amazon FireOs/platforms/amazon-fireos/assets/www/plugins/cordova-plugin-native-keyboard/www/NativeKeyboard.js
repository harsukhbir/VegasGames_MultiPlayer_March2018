cordova.define("cordova-plugin-native-keyboard.NativeKeyboard", function(require, exports, module) {
  function NativeKeyboard() {}
  function scrollTo(e, t, o, n) {
    function r(t) {
      e.scrollTop = t
    }
    var a = e.scrollTop,
      i = t - a,
      s = 0;
    n = void 0 === n ? 500 : n;
    var l = function() {
      s += 20, r(Math.easeInOutQuad(s, a, i, n)), s < n ? requestAnimFrame(l) : o && "function" == typeof o && o()
    };
    l()
  }
  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  isIOS && document.addEventListener("focusin", function(e) {
    if (e.target.getAttribute("data-nativekeyboard") && "false" != e.target.getAttribute("data-nativekeyboard")) {
      e.preventDefault(), e.stopPropagation(), document.activeElement && document.activeElement.blur();
      NativeKeyboard.prototype._showKeyboard(e.target, e.target.value, function(t) {
        e.target.value = t
      })
    }
  }), NativeKeyboard.prototype.editText = function(e) {
    NativeKeyboard.prototype._showKeyboard(e, e.innerText, function(t) {
      e.innerText = t
    })
  }, NativeKeyboard.prototype.hideMessenger = function(e, t, o) {
    var n = e || {};
    cordova.exec(function() {
      _autocorrectHeightOfElement && (_autocorrectHeightOfElement.style.marginBottom = 0, _autocorrectHeightOfElement = null), t && t()
    }, o, "NativeKeyboard", "hideMessenger", [n])
  };
  var _autocorrectHeightOfElement = null,
    _autoscrollElement = null;
  NativeKeyboard.prototype.showMessengerKeyboard = function(e, t) {
    cordova.exec(function(t) {
      "function" == typeof e && e(), null !== _autoscrollElement && scrollTo(_autoscrollElement, _autoscrollElement.scrollHeight)
    }, t, "NativeKeyboard", "showMessengerKeyboard", [])
  }, NativeKeyboard.prototype.showMessenger = function(e, t, o) {
    var n = e || {};
    _autoscrollElement = null, n.autoscrollElement && (_autoscrollElement = n.autoscrollElement, n.autoscrollElement = null, n.scrollToBottomAfterKeyboardShows = !0, isIOS || _autoscrollElement && (_autocorrectHeightOfElement = _autoscrollElement, _autoscrollElement.style.marginBottom = "0px")), n.scrollToBottomAfterKeyboardShows && void 0 === n.scrollToBottomAfterMessengerShows && (n.scrollToBottomAfterMessengerShows = !0);
    cordova.exec(function(e) {
      !0 === e.messengerRightButtonPressed && n.rightButton && "function" == typeof n.rightButton.onPress && n.rightButton.onPress(), e.ready ? (n.scrollToBottomAfterMessengerShows && n.scrollToBottomAfterKeyboardShows && scrollTo(_autoscrollElement, _autoscrollElement.scrollHeight), "function" == typeof t && t()) : !0 === e.keyboardWillShow ? "function" == typeof n.onKeyboardWillShow && n.onKeyboardWillShow(e.keyboardHeight) : !0 === e.keyboardDidShow ? (_autoscrollElement && scrollTo(_autoscrollElement, _autoscrollElement.scrollHeight), "function" == typeof n.onKeyboardDidShow && n.onKeyboardDidShow(e.keyboardHeight)) : !0 === e.keyboardWillHide ? "function" == typeof n.onKeyboardWillHide && n.onKeyboardWillHide() : !0 === e.keyboardDidHide ? "function" == typeof n.onKeyboardDidHide && n.onKeyboardDidHide() : void 0 !== e.text ? "function" == typeof n.onSubmit ? n.onSubmit(e.text) : console.log("Received " + e.text + ", pass in an 'onSubmit' function to catch it in your app.") : void 0 !== e.textChanged ? "function" == typeof n.onTextChanged && n.onTextChanged(e.textChanged) : void 0 !== e.contentHeightDiff && 0 !== e.contentHeightDiff ? "function" == typeof n.onContentHeightChanged && n.onContentHeightChanged(e) : !0 === e.messengerLeftButtonPressed ? "function" == typeof n.leftButton.onPress && n.leftButton.onPress() : console.log("JS Unexpected plugin result: " + JSON.stringify(e))
    }, function(e) {
      console.log("Error in showMessenger: " + e), o && o(e)
    }, "NativeKeyboard", "showMessenger", [n])
  }, NativeKeyboard.prototype._showKeyboard = function(selector, text, onTextUpdate) {
    var isTextarea = "textarea" === selector.tagName.toLowerCase(),
      att = selector.getAttribute("data-nativekeyboard"),
      opts = null;
    "object" != typeof(opts = 0 === att.indexOf("{") ? JSON.parse(att) : "function" == typeof window[att] ? eval(window[att]()) : eval(att)) && (opts = {}), opts.text = text, opts.type = opts.type || selector.type.toLowerCase(), opts.maxlength = opts.maxlength || selector.getAttribute("maxlength") || 0, opts.caretColor = opts.caretColor || "#007AFF";
    var css = window.getComputedStyle(selector);
    opts.verticalAlign = css.verticalAlign, opts.textAlign = css.textAlign, opts.offsetTop = window.pageYOffset, opts.font = "font-family:" + css.fontFamily + ";font-size:" + css.fontSize + ";font-weight:" + css.fontWeight + ";font-style:" + css.fontStyle;
    var viewportOffset = selector.getBoundingClientRect(),
      top = selector.scrollTop,
      left = selector.scrollLeft;
    opts.boxSizing = css.boxSizing, opts.box = opts.box || {
      left: viewportOffset.left,
      top: viewportOffset.top,
      width: css.width,
      height: css.height
    }, opts.padding = opts.padding || {
      top: css.paddingTop,
      right: css.paddingRight,
      bottom: css.paddingBottom,
      left: css.paddingLeft
    };
    var compensateLeft = 0,
      compensateTop = isTextarea ? 1 : 0;
    opts.margin = opts.margin || {
      top: parseInt(css.marginTop) + compensateTop,
      right: css.marginRight,
      bottom: css.marginBottom,
      left: parseInt(css.marginLeft) + compensateLeft
    }, opts.border = opts.border || {
      top: css.borderTopWidth,
      right: css.borderRightWidth,
      bottom: css.borderBottomWidth,
      left: css.borderLeftWidth
    }, opts.borderRadius = opts.borderRadius || css.borderRadius, opts.lineHeight = opts.lineHeight || css.lineHeight;
    var onSuccess = function(e) {
      if (!0 === e.textFieldDidEndEditing && (selector.scrollLeft = 0), void 0 !== e.text) onTextUpdate(e.text), isTextarea || (selector.scrollLeft = selector.scrollWidth);
      else if (!0 === e.returnKeyPressed) {
        var t = opts.returnKey;
        t && "function" == typeof t.onPress && t.onPress(), isTextarea || (selector.scrollLeft = 0)
      } else if (void 0 !== e.buttonIndex) {
        var o = opts.accessorybar.buttons[e.buttonIndex];
        !0 === o.close && NativeKeyboard.prototype.hideKeyboard(), "function" == typeof o.callback && o.callback()
      }
    };
    isTextarea || (selector.scrollLeft = selector.scrollWidth), document.addEventListener("touchend", NativeKeyboard.prototype.touchHandler, !1), cordova.exec(onSuccess, null, "NativeKeyboard", "show", [opts])
  }, NativeKeyboard.prototype.updateMessenger = function(e, t, o) {
    cordova.exec(t, o, "NativeKeyboard", "updateMessenger", [e])
  }, NativeKeyboard.prototype.hideMessengerKeyboard = function(e, t) {
    cordova.exec(e, t, "NativeKeyboard", "hideMessengerKeyboard", [])
  }, NativeKeyboard.prototype.hideKeyboard = function() {
    cordova.exec(null, null, "NativeKeyboard", "hide", []), document.removeEventListener("touchend", NativeKeyboard.prototype.touchHandler)
  }, NativeKeyboard.prototype.touchHandler = function(e) {
    var t = e.target.tagName.toLowerCase();
    "input" !== t && "textarea" !== t && NativeKeyboard.prototype.hideKeyboard()
  }, NativeKeyboard.prototype.updateInput = function(e) {
    var t = NativeKeyboard.prototype.activeInput.value;
    "" === e.text ? t = t.substring(0, t.length - 1) : t += e.text, NativeKeyboard.prototype.activeInput.value = t
  }, NativeKeyboard.prototype.activeInput = null, NativeKeyboard.install = function() {
    return window.plugins || (window.plugins = {}), window.NativeKeyboard = new NativeKeyboard, window.NativeKeyboard
  }, Math.easeInOutQuad = function(e, t, o, n) {
    return (e /= n / 2) < 1 ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t)
  }, Math.easeInCubic = function(e, t, o, n) {
    return t + o * ((e /= n) * e * e)
  }, Math.inOutQuintic = function(e, t, o, n) {
    var r = (e /= n) * e,
      a = r * e;
    return t + o * (6 * a * r + -15 * r * r + 10 * a)
  };
  var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
      window.setTimeout(e, 1e3 / 60)
    };
  cordova.addConstructor(NativeKeyboard.install);
});