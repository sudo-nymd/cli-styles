export interface StyleFunction extends AnsiStylesType<StyleFunction> { (text: string): string; }
interface AnsiStylesType<T> {
    // Style modifiers
    reset: T;
    bold: T;
    dim: T;
    italic: T;
    underline: T;
    inverse: T;
    hidden: T;
    strikethrough: T;

    // Foreground colors
    black: T;
    red: T;
    green: T;
    yellow: T;
    blue: T;
    magenta: T;
    cyan: T;
    white: T;
    gray: T;
    grey: T;

    // Bright colors
    blackBright: T;
    redBright: T;
    greenBright: T;
    yellowBright: T;
    blueBright: T;
    magentaBright: T;
    cyanBright: T;
    whiteBright: T;

    // Background colors
    bgBlack: T;
    bgRed: T;
    bgGreen: T;
    bgYellow: T;
    bgBlue: T;
    bgMagenta: T;
    bgCyan: T;
    bgWhite: T;

    // Bright background colors
    bgBlackBright: T;
    bgRedBright: T;
    bgGreenBright: T;
    bgYellowBright: T;
    bgBlueBright: T;
    bgMagentaBright: T;
    bgCyanBright: T;
    bgWhiteBright: T;
}


export enum AnsiStyleCodeType {
    /** Indicates the style code type is Color. */
    Color = 'color',

    /** Indicates the style code type is Modifier */
    Modifier = 'modifier',

    /** Indicates the style code type is Transparent */
    Transparent = 'transparent'
}

export type AnsiStyleCode = {
    value: [number, number] | number[];
    type: AnsiStyleCodeType;
    name: string;
}

export enum AnsiColorClass {
    Foreground = 1 << 0,
    Background = 1 << 1,
    Bright = 1 << 2,
    ForegroundBright = Foreground | Bright,
    BackgroundBright = Background | Bright
}

export type AnsiColorCode  = AnsiStyleCode & {
    type: AnsiStyleCodeType.Color;
    class: AnsiColorClass
}

export type AnsiModifierCode = AnsiStyleCode & {
    type: AnsiStyleCodeType.Modifier;
}

export type AnsiTransparentCode = AnsiStyleCode & {
    type: AnsiStyleCodeType.Transparent;
}

export type StyleCodeDictionary<T> = {
    [key: string]: T
}

export type StyleCodeArray<T> = Array<T>;

export type AnyStyleCode = AnsiColorCode | AnsiModifierCode | AnsiTransparentCode;

export interface IAnsiColors {
    bgBlack: StyleFunction;
    bgBlackBright: StyleFunction;
    bgBlue: StyleFunction;
    bgBlueBright: StyleFunction;
    bgCyan: StyleFunction;
    bgCyanBright: StyleFunction;
    bgGreen: StyleFunction;
    bgGreenBright: StyleFunction;
    bgMagenta: StyleFunction;
    bgMagentaBright: StyleFunction;
    bgRed: StyleFunction;
    bgRedBright: StyleFunction;
    bgWhite: StyleFunction;
    bgWhiteBright: StyleFunction;
    bgYellow: StyleFunction;
    bgYellowBright: StyleFunction;
    black: StyleFunction;
    blackBright: StyleFunction;
    blue: StyleFunction;
    blueBright: StyleFunction;
    bold: StyleFunction;
    cyan: StyleFunction;
    cyanBright: StyleFunction;
    dim: StyleFunction;
    gray: StyleFunction;
    green: StyleFunction;
    greenBright: StyleFunction;
    grey: StyleFunction;
    hidden: StyleFunction;
    inverse: StyleFunction;
    italic: StyleFunction;
    magenta: StyleFunction;
    magentaBright: StyleFunction;
    red: StyleFunction;
    redBright: StyleFunction;
    reset: StyleFunction;
    strikethrough: StyleFunction;
    underline: StyleFunction;
    white: StyleFunction;
    whiteBright: StyleFunction;
    yellow: StyleFunction;
    yellowBright: StyleFunction;

    get codes(): IAnsiColorCodes;

    encode(code: AnsiColorCode, text: string): string;

    bgToFG(code: AnsiColorCode): AnsiColorCode;

    terminate: StyleFunction;

    [key: string]: any;
}

export interface IAnsiColorCodes {
    readonly bgBlack: AnsiColorCode;
    readonly bgBlackBright: AnsiColorCode;
    readonly bgBlue: AnsiColorCode;
    readonly bgBlueBright: AnsiColorCode;
    readonly bgCyan: AnsiColorCode;
    readonly bgCyanBright: AnsiColorCode;
    readonly bgGreen: AnsiColorCode;
    readonly bgGreenBright: AnsiColorCode;
    readonly bgMagenta: AnsiColorCode;
    readonly bgMagentaBright: AnsiColorCode;
    readonly bgRed: AnsiColorCode;
    readonly bgRedBright: AnsiColorCode;
    readonly bgWhite: AnsiColorCode;
    readonly bgWhiteBright: AnsiColorCode;
    readonly bgYellow: AnsiColorCode;
    readonly bgYellowBright: AnsiColorCode;
    readonly black: AnsiColorCode;
    readonly blackBright: AnsiColorCode;
    readonly blue: AnsiColorCode;
    readonly blueBright: AnsiColorCode;
    readonly bold: AnsiModifierCode;
    readonly cyan: AnsiColorCode;
    readonly cyanBright: AnsiColorCode;
    readonly dim: AnsiModifierCode;
    readonly green: AnsiColorCode;
    readonly greenBright: AnsiColorCode;
    readonly hidden: AnsiModifierCode;
    readonly inverse: AnsiModifierCode;
    readonly italic: AnsiModifierCode;
    readonly magenta: AnsiColorCode;
    readonly magentaBright: AnsiColorCode;
    readonly red: AnsiColorCode;
    readonly redBright: AnsiColorCode;
    readonly reset: AnsiModifierCode;
    readonly strikethrough: AnsiColorCode;
    readonly underline: AnsiColorCode;
    readonly white: AnsiColorCode;
    readonly whiteBright: AnsiColorCode;
    readonly yellow: AnsiColorCode;
    readonly yellowBright: AnsiColorCode;

    [key: string]: AnyStyleCode;
}