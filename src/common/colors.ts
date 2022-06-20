import cliColors from '../cli-colors';
import { AllStyleCodes, ColorClass, ColorCode, ModifierCode, StyleCodeDictionary, StyleCodeType } from './types';

export const AnsiStyleCodes: StyleCodeDictionary<AllStyleCodes> = {

    // Colors
    black: { value: [30, 39], type: StyleCodeType.Color, class: ColorClass.Foreground, name: '' },
    blackBright: { value: [90, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright, name: '' },
    bgBlack: { value: [40, 49], type: StyleCodeType.Color, class: ColorClass.Background, name: '' },
    bgBlackBright: { value: [100, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright, name: '' },
    red: { value: [31, 39], type: StyleCodeType.Color, class: ColorClass.Foreground, name: '' },
    redBright: { value: [91, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright, name: '' },
    bgRed: { value: [41, 49], type: StyleCodeType.Color, class: ColorClass.Background, name: '' },
    bgRedBright: { value: [101, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright, name: '' },
    green: { value: [32, 39], type: StyleCodeType.Color, class: ColorClass.Foreground, name: '' },
    greenBright: { value: [92, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright, name: '' },
    bgGreen: { value: [42, 49], type: StyleCodeType.Color, class: ColorClass.Background, name: '' },
    bgGreenBright: { value: [102, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright, name: '' },
    yellow: { value: [33, 39], type: StyleCodeType.Color, class: ColorClass.Foreground, name: '' },
    yellowBright: { value: [93, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright, name: '' },
    bgYellow: { value: [43, 49], type: StyleCodeType.Color, class: ColorClass.Background, name: '' },
    bgYellowBright: { value: [103, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright, name: '' },
    blue: { value: [34, 39], type: StyleCodeType.Color, class: ColorClass.Foreground, name: '' },
    blueBright: { value: [94, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright, name: '' },
    bgBlue: { value: [44, 49], type: StyleCodeType.Color, class: ColorClass.Background, name: '' },
    bgBlueBright: { value: [104, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright, name: '' },
    magenta: { value: [35, 39], type: StyleCodeType.Color, class: ColorClass.Foreground, name: '' },
    magentaBright: { value: [95, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright, name: '' },
    bgMagenta: { value: [45, 49], type: StyleCodeType.Color, class: ColorClass.Background, name: '' },
    bgMagentaBright: { value: [105, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright, name: '' },
    cyan: { value: [36, 39], type: StyleCodeType.Color, class: ColorClass.Foreground, name: '' },
    cyanBright: { value: [96, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright, name: '' },
    bgCyan: { value: [46, 49], type: StyleCodeType.Color, class: ColorClass.Background, name: '' },
    bgCyanBright: { value: [106, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright, name: '' },
    white: { value: [37, 39], type: StyleCodeType.Color, class: ColorClass.Foreground, name: '' },
    whiteBright: { value: [97, 39], type: StyleCodeType.Color, class: ColorClass.ForegroundBright, name: '' },
    bgWhite: { value: [47, 49], type: StyleCodeType.Color, class: ColorClass.ForegroundBright, name: '' },
    bgWhiteBright: { value: [107, 49], type: StyleCodeType.Color, class: ColorClass.BackgroundBright, name: '' },

    // Modifiers
    bold: { value: [1, 22], type: StyleCodeType.Modifier, name: '' },
    reset: { value: [0, 0], type: StyleCodeType.Modifier, name: '' },
    dim: { value: [2, 22], type: StyleCodeType.Modifier, name: '' },
    italic: { value: [3, 23], type: StyleCodeType.Modifier, name: '' },
    underline: { value:[4, 24], type: StyleCodeType.Modifier, name: '' },
    inverse: { value: [7, 27], type: StyleCodeType.Modifier, name: '' },
    hidden: { value: [8, 28], type: StyleCodeType.Modifier, name: '' },
    strikethrough: { value: [9, 29], type: StyleCodeType.Modifier, name: '' }
}

/**
 * Export module name for test runners.
 */
export const ModuleName = 'colors'