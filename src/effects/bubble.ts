import { ansiStyles, ansiUtils } from "../index";
import { AnsiColorCode } from "../common/types";
import { symbols } from "./symbols";
import * as util from "util";

const { encode, convertToForeground } = ansiUtils;

export type BubbleOptions = {
    fgColor?: AnsiColorCode;
    bgColor?: AnsiColorCode;
}

const DEFAULT = {
    fgColor: ansiStyles.codes.white,
    bgColor: ansiStyles.codes.bgBlackBright
}

export const bubble = (options?: BubbleOptions) => {
    
    const opts = Object.assign(DEFAULT, options);
    const { bgColor, fgColor } = opts;
    const afg = convertToForeground(bgColor);
    const bubble = symbols.bubbles;

    return (text: string) => {
        return util.format(
            "%s%s%s", 
            encode(bubble.left, afg), 
            encode(encode(text, fgColor), bgColor),
            encode(bubble.right, afg)
        );
    }
}

export const ModuleName = "bubble";



