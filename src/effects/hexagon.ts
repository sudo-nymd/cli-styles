import { utils, AnsiColorCode, effects } from "../index";
import { ansiStyles } from '../ansi-styles'
import * as util from "util";

export type HexagonOptions = {
    fgColor?: AnsiColorCode;
    bgColor?: AnsiColorCode;
}

const DEFAULT = {
    fgColor: ansiStyles.codes.white,
    bgColor: ansiStyles.codes.bgBlackBright
}

export const hexagon = (options?: HexagonOptions) => {

    const opts = Object.assign(DEFAULT, options);
    const { bgColor, fgColor } = opts;
    const afg = utils.convertToForeground(bgColor);
    const arrows = effects.symbols.arrows;

    return (text: string) => {
        return util.format(
            "%s%s%s",
            utils.encode(arrows.left, afg),
            utils.encode(utils.encode(text, fgColor), bgColor),
            utils.encode(arrows.right, afg)
        );
    }
}

export const ModuleName = "hexagon";



