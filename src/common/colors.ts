import cliColors from '../cli-colors';
import { AllStyleCodes, ColorClass, ColorCode, ModifierCode, StyleCodeDictionary, StyleCodeType } from './types';

export const AnsiStyleCodes: StyleCodeDictionary<AllStyleCodes> = {

    // Colors
    black: { value: [30, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    blackBright: { value: [90, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },
    bgBlack: { value: [40, 49], type: StyleCodeType.Color, class: ColorClass.Background },
    bgBlackBright: { value: [100, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright },
    red: { value: [31, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    redBright: { value: [91, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },
    bgRed: { value: [41, 49], type: StyleCodeType.Color, class: ColorClass.Background },
    bgRedBright: { value: [101, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright },
    green: { value: [32, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    greenBright: { value: [92, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },
    bgGreen: { value: [42, 49], type: StyleCodeType.Color, class: ColorClass.Background },
    bgGreenBright: { value: [102, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright },
    yellow: { value: [33, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    yellowBright: { value: [93, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },
    bgYellow: { value: [43, 49], type: StyleCodeType.Color, class: ColorClass.Background },
    bgYellowBright: { value: [103, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright },
    blue: { value: [34, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    blueBright: { value: [94, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },
    bgBlue: { value: [44, 49], type: StyleCodeType.Color, class: ColorClass.Background },
    bgBlueBright: { value: [104, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright },
    magenta: { value: [35, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    magentaBright: { value: [95, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },
    bgMagenta: { value: [45, 49], type: StyleCodeType.Color, class: ColorClass.Background },
    bgMagentaBright: { value: [105, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright },
    cyan: { value: [36, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    cyanBright: { value: [96, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },
    bgCyan: { value: [46, 49], type: StyleCodeType.Color, class: ColorClass.Background },
    bgCyanBright: { value: [106, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright },
    white: { value: [37, 39], type: StyleCodeType.Color, class: ColorClass.Foreground },
    whiteBright: { value: [97, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },
    bgWhite: { value: [47, 49], type: StyleCodeType.Color, class: ColorClass.ForegroundBright },
    bgWhiteBright: { value: [107, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright },

    // Modifiers
    bold: { value: [1, 22], type: StyleCodeType.Modifier },
    reset: { value: [0, 0], type: StyleCodeType.Modifier },
    dim: { value: [2, 22], type: StyleCodeType.Modifier },
    italic: { value: [3, 23], type: StyleCodeType.Modifier },
    underline: { value:[4, 24], type: StyleCodeType.Modifier },
    inverse: { value: [7, 27], type: StyleCodeType.Modifier },
    hidden: { value: [8, 28], type: StyleCodeType.Modifier },
    strikethrough: { value: [9, 29], type: StyleCodeType.Modifier }
}

/**
 * Export module name for test runners.
 */
export const ModuleName = 'colors'