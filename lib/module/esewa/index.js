import React from "react";
import { View, Modal, SafeAreaView } from "react-native";
import CloseIcon from "../common/CloseIcon";
import { styles } from "../common/styles";
import EsewaPayment from "../common/Webview";
import { sourceGenerator } from "./helpers/htmlGenerator";
const EsewaSdk = props => {
  const [url, setUrl] = React.useState("");
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
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.wrapper
  }, /*#__PURE__*/React.createElement(CloseIcon, {
    onClose: _onClose
  }), /*#__PURE__*/React.createElement(EsewaPayment, {
    source: {
      html: sourceGenerator({
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
export default EsewaSdk;
//# sourceMappingURL=index.js.map