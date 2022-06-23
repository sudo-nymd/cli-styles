import { ansiStyles, ansiUtils } from "../index";
import { AnsiColorCode } from "../common/types";
import { symbols } from "./symbols";

const { transparent, encode, convertToForeground } = ansiUtils;

    export enum ArrowDirections {
        //Right = "\ue0b0",
        Right = "right",
        //Left = "\ue0b2",
        Left = 'left'
    }

    export type ArrowOptions = {
        fgColor?: AnsiColorCode;
        bgColor?: AnsiColorCode;
        direction?: ArrowDirections;
    }

    const DEFAULT = {
        fgColor: ansiStyles.codes.white,
        bgColor: ansiStyles.codes.bgBlackBright,
        direction: ArrowDirections.Right
    }

    export const arrow = (options?: ArrowOptions) => {
        const opts = Object.assign(DEFAULT, options);
        const { bgColor, fgColor, direction } = opts;
        const afg = convertToForeground(bgColor);
        const symbol = symbols.arrows[direction];

        return (text: string) => {
            if (direction === ArrowDirections.Right) {
                return transparent(symbol, afg) + encode(encode(text, fgColor), bgColor) + encode(symbol, afg);
            } else {
                return encode(symbol, afg) + encode(encode(text, fgColor), bgColor) + transparent(symbol, afg);
            }
        }
    }

    export const ModuleName = "arrow";


