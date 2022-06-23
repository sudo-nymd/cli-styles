import { ansiStyles, ansiUtils } from "../index";
import { AnsiColorCode } from "../common/types";
import { symbols } from "./symbols";
import * as util from "util";

const { encode, convertToForeground } = ansiUtils;

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
    const afg = convertToForeground(bgColor);
    const arrows = symbols.arrows;

    return (text: string) => {
        return util.format(
            "%s%s%s",
            encode(arrows.left, afg),
            encode(encode(text, fgColor), bgColor),
            encode(arrows.right, afg)
        );
    }
}

export const ModuleName = "hexagon";



