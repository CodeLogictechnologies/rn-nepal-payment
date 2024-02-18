"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = require("../common/styles");
var _Webview = _interopRequireDefault(require("../common/Webview"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const KhaltiSdk = props => {
  const [url, setUrl] = _react.default.useState("");
  const {
    successURL,
    failureURL,
    onPaymentComplete,
    uri,
    isVisible
  } = props;
  _react.default.useEffect(() => {
    _handlePaymetProcess();
    return;
  }, [url]);
  const _handlePaymetProcess = () => {
    try {
      if (url === failureURL) {
        return onPaymentComplete({
          message: "Sorry, your payment process could not be completed"
        });
      } else if (url.startsWith(successURL)) {
        const splits = url.split("&") ?? [];
        const ref = splits[splits.length - 1]?.split("=") ?? [];
        const amt = splits[splits.length - 2]?.split("=") ?? [];
        const data = {
          token: ref[1],
          amount: Math.round(parseInt(amt[1] ?? '0'))
        };
        return onPaymentComplete(data);
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
  const _onNavigationStateChange = state => setUrl(state.url);
  return /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
    animationType: "slide",
    visible: isVisible
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.SafeAreaView, {
    style: _styles.styles.safeAreaView
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: _styles.styles.iconContainer,
    onPress: _onClose
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../assets/cross.png"),
    style: _styles.styles.icon
  })), /*#__PURE__*/_react.default.createElement(_Webview.default, {
    source: {
      uri
    },
    onNavigationStateChange: _onNavigationStateChange
  }))));
};
var _default = exports.default = KhaltiSdk;
//# sourceMappingURL=index.js.map