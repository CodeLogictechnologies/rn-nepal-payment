"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeWebview = require("react-native-webview");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Webview = ({
  source,
  ...props
}) => /*#__PURE__*/_react.default.createElement(_reactNativeWebview.WebView, _extends({}, props, {
  source: source,
  domStorageEnabled: true,
  javaScriptEnabled: true,
  startInLoadingState: true,
  style: _styles.styles.webView,
  originWhitelist: ["*"],
  swipeDirection: ["up", "down"],
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false
}));
var _default = exports.default = Webview;
//# sourceMappingURL=Webview.js.map