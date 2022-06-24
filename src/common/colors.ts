import { AnyStyleCode, AnsiColorCodeTypes, StyleCodeArray, AnsiStyleCodeTypes } from '../common/types';
import { TRANSPARENT_COLOR_CODE } from './transparent';

export const ANSI_STYLE_CODES: StyleCodeArray<AnyStyleCode> = [

    // COLORS
    { name: "bgBlack", value: [40, 49], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Background },
    { name: "bgBlackBright", value: [100, 49], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.BackgroundBright },
    { name: "bgBlue", value: [44, 49], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Background },
    { name: "bgBlueBright", value: [104, 49], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.BackgroundBright },
    { name: "bgCyan", value: [46, 49], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Background },
    { name: "bgCyanBright", value: [106, 49], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.BackgroundBright },
    { name: "bgGreen", value: [42, 49], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Background },
    { name: "bgGreenBright", value: [102, 49], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.BackgroundBright },
    { name: "bgMagenta", value: [45, 49], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Background },
    { name: "bgMagentaBright", value: [105, 49], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.BackgroundBright },
    { name: "bgRed", value: [41, 49], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Background },
    { name: "bgRedBright", value: [101, 49], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.BackgroundBright },
    { name: "bgWhite", value: [47, 49], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Background },
    { name: "bgWhiteBright", value: [107, 49], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.BackgroundBright },
    { name: "bgYellow", value: [43, 49], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Background },
    { name: "bgYellowBright", value: [103, 49], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.BackgroundBright },
    { name: "black", value: [30, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Foreground },
    { name: "blackBright", value: [90, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.ForegroundBright },
    { name: "blue", value: [34, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Foreground },
    { name: "blueBright", value: [94, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.ForegroundBright },
    { name: "cyan", value: [36, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Foreground },
    { name: "cyanBright", value: [96, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.ForegroundBright },
    { name: "gray", value: [90, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Foreground },
    { name: "green", value: [32, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Foreground },
    { name: "greenBright", value: [92, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.ForegroundBright },
    { name: "grey", value: [90, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Foreground },
    { name: "magenta", value: [35, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Foreground },
    { name: "magentaBright", value: [95, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.ForegroundBright },
    { name: "red", value: [31, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Foreground },
    { name: "redBright", value: [91, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.ForegroundBright },
    { name: "white", value: [37, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Foreground },
    { name: "whiteBright", value: [97, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.ForegroundBright },
    { name: "yellow", value: [33, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Foreground },
    { name: "yellowBright", value: [93, 39], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.ForegroundBright },

    // STYLE MODIFIERs
    { name: "bold", value: [1, 22], type: AnsiStyleCodeTypes.Modifier },
    { name: "reset", value: [0, 0], type: AnsiStyleCodeTypes.Modifier },
    { name: "dim", value: [2, 22], type: AnsiStyleCodeTypes.Modifier },
    { name: "italic", value: [3, 23], type: AnsiStyleCodeTypes.Modifier },
    { name: "underline", value: [4, 24], type: AnsiStyleCodeTypes.Modifier },
    { name: "inverse", value: [7, 27], type: AnsiStyleCodeTypes.Modifier },
    { name: "hidden", value: [8, 28], type: AnsiStyleCodeTypes.Modifier },
    { name: "strikethrough", value: [9, 29], type: AnsiStyleCodeTypes.Modifier },

    // Transparent
    { name: "transparent", value: [49, 7], type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Transparent }
]

//ANSI_STYLE_CODES.push(TRANSPARENT_COLOR_CODE);

/**
 * Export module name for test runners.
 */
export const ModuleName = 'colors'

