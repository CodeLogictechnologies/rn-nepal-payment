function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import { WebView } from "react-native-webview";
import { styles } from "./styles";
const Webview = ({
  source,
  ...props
}) => /*#__PURE__*/React.createElement(WebView, _extends({}, props, {
  source: source,
  domStorageEnabled: true,
  javaScriptEnabled: true,
  startInLoadingState: true,
  style: styles.webView,
  originWhitelist: ["*"],
  swipeDirection: ["up", "down"],
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false
}));
export default Webview;
//# sourceMappingURL=Webview.js.map