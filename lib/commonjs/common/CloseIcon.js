"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable react/display-name */

const CloseIcon = /*#__PURE__*/_react.default.memo(({
  onClose
}) => /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
  style: _styles.styles.iconContainer,
  onPress: onClose
}, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
  source: require("../assets/cross.png"),
  style: _styles.styles.icon
})));
var _default = exports.default = CloseIcon;
//# sourceMappingURL=CloseIcon.js.map