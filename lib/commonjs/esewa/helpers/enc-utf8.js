"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utf8 = void 0;
var _Latin = require("./Latin1");
class Utf8 {
  /**
   * Converts a word array to a UTF-8 string.
   *
   * @param wordArray The word array.
   *
   * @return The UTF-8 string.
   *
   * @example
   *
   *     let utf8String = Utf8.stringify(wordArray);
   */
  static stringify(wordArray) {
    try {
      return decodeURIComponent(escape(_Latin.Latin1.stringify(wordArray)));
    } catch (e) {
      throw new Error('Malformed UTF-8 data');
    }
  }

  /**
   * Converts a UTF-8 string to a word array.
   *
   * @param utf8Str The UTF-8 string.
   *
   * @return The word array.
   *
   * @example
   *
   *     let wordArray = Utf8.parse(utf8String);
   */
  static parse(utf8Str) {
    return _Latin.Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
}

// type guard for the formatter (to ensure it has the required static methods)
exports.Utf8 = Utf8;
//# sourceMappingURL=enc-utf8.js.map