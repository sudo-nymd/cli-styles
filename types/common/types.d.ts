export interface StyleFunction extends StylesType<StyleFunction> {
    (text: string): string;
}
interface StylesType<T> {
    reset: T;
    bold: T;
    dim: T;
    italic: T;
    underline: T;
    inverse: T;
    hidden: T;
    strikethrough: T;
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
    blackBright: T;
    redBright: T;
    greenBright: T;
    yellowBright: T;
    blueBright: T;
    magentaBright: T;
    cyanBright: T;
    whiteBright: T;
    bgBlack: T;
    bgRed: T;
    bgGreen: T;
    bgYellow: T;
    bgBlue: T;
    bgMagenta: T;
    bgCyan: T;
    bgWhite: T;
    bgBlackBright: T;
    bgRedBright: T;
    bgGreenBright: T;
    bgYellowBright: T;
    bgBlueBright: T;
    bgMagentaBright: T;
    bgCyanBright: T;
    bgWhiteBright: T;
}
export declare enum StyleCodeType {
    /** Indicates the style code type is Color. */
    Color = "color",
    /** Indicates the style code type is Modifier */
    Modifier = "modifier",
    /** Indicates the style code type is Transparent */
    Transparent = "transparent"
}
export declare type StyleCode = {
    value: [number, number] | number[];
    type: StyleCodeType;
    name: string;
};
export declare enum ColorClass {
    Foreground = 1,
    Background = 2,
    Bright = 4,
    ForegroundBright = 5,
    BackgroundBright = 6
}
export declare type ColorCode = StyleCode & {
    type: StyleCodeType.Color;
    class: ColorClass;
};
export declare type ModifierCode = StyleCode & {
    type: StyleCodeType.Modifier;
};
export declare type TransparentCode = StyleCode & {
    type: StyleCodeType.Transparent;
};
export declare type StyleCodeDictionary<T> = {
    [key: string]: T;
};
export declare type StyleCodeArray<T> = Array<T>;
export declare type AnyStyleCode = ColorCode | ModifierCode | TransparentCode;
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
    encode(code: ColorCode, text: string): string;
    bgToFG(code: ColorCode): ColorCode;
    terminate: StyleFunction;
    [key: string]: any;
}
export interface ICliColorCodes {
    readonly bgBlack: ColorCode;
    readonly bgBlackBright: ColorCode;
    readonly bgBlue: ColorCode;
    readonly bgBlueBright: ColorCode;
    readonly bgCyan: ColorCode;
    readonly bgCyanBright: ColorCode;
    readonly bgGreen: ColorCode;
    readonly bgGreenBright: ColorCode;
    readonly bgMagenta: ColorCode;
    readonly bgMagentaBright: ColorCode;
    readonly bgRed: ColorCode;
    readonly bgRedBright: ColorCode;
    readonly bgWhite: ColorCode;
    readonly bgWhiteBright: ColorCode;
    readonly bgYellow: ColorCode;
    readonly bgYellowBright: ColorCode;
    readonly black: ColorCode;
    readonly blackBright: ColorCode;
    readonly blue: ColorCode;
    readonly blueBright: ColorCode;
    readonly bold: ModifierCode;
    readonly cyan: ColorCode;
    readonly cyanBright: ColorCode;
    readonly dim: ModifierCode;
    readonly green: ColorCode;
    readonly greenBright: ColorCode;
    readonly hidden: ModifierCode;
    readonly inverse: ModifierCode;
    readonly italic: ModifierCode;
    readonly magenta: ColorCode;
    readonly magentaBright: ColorCode;
    readonly red: ColorCode;
    readonly redBright: ColorCode;
    readonly reset: ModifierCode;
    readonly strikethrough: ColorCode;
    readonly underline: ColorCode;
    readonly white: ColorCode;
    readonly whiteBright: ColorCode;
    readonly yellow: ColorCode;
    readonly yellowBright: ColorCode;
    [key: string]: AnyStyleCode;
}
export {};
