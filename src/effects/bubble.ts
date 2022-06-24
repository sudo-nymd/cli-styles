import { utils, AnsiColorCode, effects } from "../index";
import { ansiStyles } from '../ansi-styles'
import * as util from "util";


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
    const afg = utils.convertToForeground(bgColor);
    const bubble = effects.symbols.bubbles;

    return (text: string) => {
        return util.format(
            "%s%s%s", 
            utils.encode(bubble.left, afg), 
            utils.encode(utils.encode(text, fgColor), bgColor),
            utils.encode(bubble.right, afg)
        );
    }
}

export const ModuleName = "bubble";



