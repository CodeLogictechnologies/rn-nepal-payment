"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _CloseIcon = _interopRequireDefault(require("../common/CloseIcon"));
var _styles = require("../common/styles");
var _Webview = _interopRequireDefault(require("../common/Webview"));
var _htmlGenerator = require("./helpers/htmlGenerator");
var _typings = require("../typings");
var _crypto = require("./helpers/crypto");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const EsewaSdk = props => {
  const {
    successURL,
    failureURL,
    onPaymentComplete,
    isVisible,
    amt,
    psc,
    pdc,
    pid,
    env,
    taxAmt,
    totalAmt,
    testMode,
    signature
  } = props;
  const [responseData, setResponseData] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    responseData && _handlePaymetProcess();
    return;
  }, [responseData]);
  const _handlePaymetProcess = () => {
    try {
      if (responseData?.status === _typings.EsewaStatus.COMPLETE) {
        return onPaymentComplete(responseData);
      } else if (responseData?.status === _typings.EsewaStatus.CANCELED) {
        return onPaymentComplete({
          message: "Sorry, your payment has been cancelled from esewa."
        });
      } else if (responseData?.status === _typings.EsewaStatus.NOT_FOUND) {
        return onPaymentComplete({
          message: "Sorry, your payment session has expired. Please try again."
        });
      } else if (responseData?.status === _typings.EsewaStatus.PENDING) {
        return onPaymentComplete({
          message: "Your payment is taking a long time to complete."
        });
      } else {
        return onPaymentComplete({
          message: "Sorry, your payment process could not be completed"
        });
      }
    } catch (err) {
      return onPaymentComplete({
        message: "Sorry, your payment process could not be completed"
      });
    }
  };
  const _onClose = () => onPaymentComplete({
    message: "Payment process interrupted"
  });
  const _onNavigationStateChange = state => {
    const base64String = state.url?.split("data=")?.[1];
    if (base64String) {
      const parsed = _crypto.enc.Base64.parse(base64String);
      const textString = _crypto.enc.Utf8.stringify(parsed);
      const json = JSON.parse(textString);
      setResponseData(json);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
    animationType: "slide",
    visible: isVisible
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.SafeAreaView, {
    style: _styles.styles.safeAreaView
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.wrapper
  }, /*#__PURE__*/_react.default.createElement(_CloseIcon.default, {
    onClose: _onClose
  }), /*#__PURE__*/_react.default.createElement(_Webview.default, {
    source: {
      html: (0, _htmlGenerator.sourceGenerator)({
        amt: amt,
        psc: psc,
        pdc: pdc,
        pid: pid,
        env: env,
        taxAmt: taxAmt,
        successURL: successURL,
        failureURL: failureURL,
        totalAmt: totalAmt,
        testMode: testMode,
        signature: signature
      })
    },
    onNavigationStateChange: _onNavigationStateChange
  })))));
};
var _default = exports.default = EsewaSdk;
//# sourceMappingURL=index.js.map