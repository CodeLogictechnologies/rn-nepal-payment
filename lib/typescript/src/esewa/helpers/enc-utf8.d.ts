import { WordArray } from './WordArray';
export declare class Utf8 {
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
    static stringify(wordArray: WordArray): string;
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
    static parse(utf8Str: string): WordArray;
}
//# sourceMappingURL=enc-utf8.d.ts.map