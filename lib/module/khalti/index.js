import React from "react";
import { View, Modal, SafeAreaView, Pressable, Image } from "react-native";
import { styles } from "../common/styles";
import KhaltiPayment from "../common/Webview";
const KhaltiSdk = props => {
  const [url, setUrl] = React.useState("");
  const {
    successURL,
    failureURL,
    onPaymentComplete,
    uri,
    isVisible
  } = props;
  React.useEffect(() => {
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
  return /*#__PURE__*/React.createElement(Modal, {
    animationType: "slide",
    visible: isVisible
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(SafeAreaView, {
    style: styles.safeAreaView
  }, /*#__PURE__*/React.createElement(Pressable, {
    style: styles.iconContainer,
    onPress: _onClose
  }, /*#__PURE__*/React.createElement(Image, {
    source: require("../assets/cross.png"),
    style: styles.icon
  })), /*#__PURE__*/React.createElement(KhaltiPayment, {
    source: {
      uri
    },
    onNavigationStateChange: _onNavigationStateChange
  }))));
};
export default KhaltiSdk;
//# sourceMappingURL=index.js.map