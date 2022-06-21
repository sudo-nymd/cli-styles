import { generateKey } from 'crypto';
import cliColors from '../cli-colors';
import { AnyStyleCode, ColorClass, ColorCode, ModifierCode, StyleCodeArray, StyleCodeType } from './types';

export const AnsiStyleCodes: StyleCodeArray<AnyStyleCode> = [

    // COLORS
    { name: "bgBlack", value: [40, 49], type: StyleCodeType.Color, class: ColorClass.Background },
    { name: "bgBlackBright", value: [100, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright },
    { name: "bgBlue", value: [44, 49], type: StyleCodeType.Color, class: ColorClass.Background },
    { name: "bgBlueBright", value: [104, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright },
    { name: "bgCyan", value: [46, 49], type: StyleCodeType.Color, class: ColorClass.Background },
    { name: "bgCyanBright", value: [106, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright },
    { name: "bgGreen", value: [42, 49], type: StyleCodeType.Color, class: ColorClass.Background },
    { name: "bgGreenBright", value: [102, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright },
    { name: "bgMagenta", value: [45, 49], type: StyleCodeType.Color, class: ColorClass.Background },
    { name: "bgMagentaBright", value: [105, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright },
    { name: "bgRed", value: [41, 49], type: StyleCodeType.Color, class: ColorClass.Background },
    { name: "bgRedBright", value: [101, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright },
    { name: "bgWhite", value: [47, 49], type: StyleCodeType.Color, class: ColorClass.Background },
    { name: "bgWhiteBright", value: [107, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright },
    { name: "bgYellow", value: [43, 49], type: StyleCodeType.Color, class: ColorClass.Background },
    { name: "bgYellowBright", value: [103, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright },
    { name: "black", value: [30, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    { name: "blackBright", value: [90, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },
    { name: "blue", value: [34, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    { name: "blueBright", value: [94, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },
    { name: "cyan", value: [36, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    { name: "cyanBright", value: [96, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },
    { name: "gray", value: [90, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    { name: "green", value: [32, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    { name: "greenBright", value: [92, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },
    { name: "grey", value: [90, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    { name: "magenta", value: [35, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    { name: "magentaBright", value: [95, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },
    { name: "red", value: [31, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    { name: "redBright", value: [91, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },
    { name: "white", value: [37, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    { name: "whiteBright", value: [97, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },
    { name: "yellow", value: [33, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    { name: "yellowBright", value: [93, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },

    // STYLE MODIFIERs
    { name: "bold", value: [1, 22], type: StyleCodeType.Modifier },
    { name: "reset", value: [0, 0], type: StyleCodeType.Modifier },
    { name: "dim", value: [2, 22], type: StyleCodeType.Modifier },
    { name: "italic", value: [3, 23], type: StyleCodeType.Modifier },
    { name: "underline", value: [4, 24], type: StyleCodeType.Modifier },
    { name: "inverse", value: [7, 27], type: StyleCodeType.Modifier },
    { name: "hidden", value: [8, 28], type: StyleCodeType.Modifier },
    { name: "strikethrough", value: [9, 29], type: StyleCodeType.Modifier },

]
/**
 * Export module name for test runners.
 */
export const ModuleName = 'colors'