"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hex = void 0;
var _WordArray = require("./WordArray");
class Hex {
  /**
   * Converts a word array to a hex string.
   *
   * @param wordArray The word array.
   *
   * @return The hex string.
   *
   * @example
   *
   *     let hexString = Hex.stringify(wordArray);
   */
  static stringify(wordArray) {
    // Convert
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = (wordArray.words[i >>> 2] ?? 0 >>> 24 - i % 4 * 8) & 0xff;
      hexChars.push((bite >>> 4).toString(16));
      hexChars.push((bite & 0x0f).toString(16));
    }
    return hexChars.join('');
  }

  /**
   * Converts a hex string to a word array.
   *
   * @param hexStr The hex string.
   *
   * @return The word array.
   *
   * @example
   *
   *     let wordArray = Hex.parse(hexString);
   */
  static parse(hexStr) {
    // Shortcut
    const hexStrLength = hexStr.length;

    // Convert
    const words = [];
    for (let i = 0; i < hexStrLength; i += 2) {
      words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
    }
    return new _WordArray.WordArray(words, hexStrLength / 2);
  }
}

// type guard for the formatter (to ensure it has the required static methods)
exports.Hex = Hex;
//# sourceMappingURL=Hex.js.map