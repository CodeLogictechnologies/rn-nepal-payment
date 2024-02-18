/* eslint-disable react/display-name */
import React from "react";
import { Pressable, Image } from "react-native";
import { styles } from "./styles";
const CloseIcon = /*#__PURE__*/React.memo(({
  onClose
}) => /*#__PURE__*/React.createElement(Pressable, {
  style: styles.iconContainer,
  onPress: onClose
}, /*#__PURE__*/React.createElement(Image, {
  source: require("../assets/cross.png"),
  style: styles.icon
})));
export default CloseIcon;
//# sourceMappingURL=CloseIcon.js.map