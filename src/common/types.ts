export interface StyleFunction extends StylesType<StyleFunction> { (text: string): string; }
interface StylesType<T> {
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


export enum StyleCodeType {
    /** Indicates the style code type is Color. */
    Color = 'color',

    /** Indicates the style code type is Modifier */
    Modifier = 'modifier',

    /** Indicates the style code type is Transparent */
    Transparent = 'transparent'
}

export type StyleCode = {
    value: [number, number] | number[];
    type: StyleCodeType;
    name: string;
}

export enum ColorClass {
    Foreground = 1 << 0,
    Background = 1 << 1,
    Bright = 1 << 2,
    ForegroundBright = Foreground | Bright,
    BackgroundBright = Background | Bright
}

export type ColorCode  = StyleCode & {
    type: StyleCodeType.Color;
    class: ColorClass
}

export type ModifierCode = StyleCode & {
    type: StyleCodeType.Modifier;
}

export type TransparentCode = StyleCode & {
    type: StyleCodeType.Transparent;
}

export type StyleCodeDictionary<T> = {
    [key: string]: T
}

export type StyleCodeArray<T> = Array<T>;

export type AnyStyleCode = ColorCode | ModifierCode | TransparentCode;

export interface ICliColors {
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

    get codes(): ICliColorCodes;
    terminate: StyleFunction;

    [key: string]: any;
}

export interface ICliColorCodes {
    readonly bgBlack: AnyStyleCode;
    readonly bgBlackBright: AnyStyleCode;
    readonly bgBlue: AnyStyleCode;
    readonly bgBlueBright: AnyStyleCode;
    readonly bgCyan: AnyStyleCode;
    readonly bgCyanBright: AnyStyleCode;
    readonly bgGreen: AnyStyleCode;
    readonly bgGreenBright: AnyStyleCode;
    readonly bgMagenta: AnyStyleCode;
    readonly bgMagentaBright: AnyStyleCode;
    readonly bgRed: AnyStyleCode;
    readonly bgRedBright: AnyStyleCode;
    readonly bgWhite: AnyStyleCode;
    readonly bgWhiteBright: AnyStyleCode;
    readonly bgYellow: AnyStyleCode;
    readonly bgYellowBright: AnyStyleCode;
    readonly black: AnyStyleCode;
    readonly blackBright: AnyStyleCode;
    readonly blue: AnyStyleCode;
    readonly blueBright: AnyStyleCode;
    readonly bold: AnyStyleCode;
    readonly cyan: AnyStyleCode;
    readonly cyanBright: AnyStyleCode;
    readonly dim: AnyStyleCode;
    readonly green: AnyStyleCode;
    readonly greenBright: AnyStyleCode;
    readonly hidden: AnyStyleCode;
    readonly inverse: AnyStyleCode;
    readonly italic: AnyStyleCode;
    readonly magenta: AnyStyleCode;
    readonly magentaBright: AnyStyleCode;
    readonly red: AnyStyleCode;
    readonly redBright: AnyStyleCode;
    readonly reset: AnyStyleCode;
    readonly strikethrough: AnyStyleCode;
    readonly underline: AnyStyleCode;
    readonly white: AnyStyleCode;
    readonly whiteBright: AnyStyleCode;
    readonly yellow: AnyStyleCode;
    readonly yellowBright: AnyStyleCode;

    [key: string]: AnyStyleCode;
}