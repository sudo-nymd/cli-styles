import { utils, AnsiColorCode, effects } from "../index";

import { ansiStyles } from '../ansi-styles'

//console.log("arrow " + ansiStyles)

//const { transparent, encode, convertToForeground } = utils;

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
        const afg = utils.convertToForeground(bgColor);
        const symbol = effects.symbols.arrows[direction];

        return (text: string) => {
            if (direction === ArrowDirections.Right) {
                return utils.transparent(symbol, afg) + utils.encode(utils.encode(text, fgColor), bgColor) + utils.encode(symbol, afg);
            } else {
                return utils.encode(symbol, afg) + utils.encode(utils.encode(text, fgColor), bgColor) + utils.transparent(symbol, afg);
            }
        }
    }

    export const ModuleName = "arrow";


