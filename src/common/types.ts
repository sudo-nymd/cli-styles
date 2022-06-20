export type StyleFunction = (text: string) => string;

export enum StyleCodeType {
    Color,
    Modifier,
    Transparent
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
    black(text: string): string;
    blackBright(text: string): string;
    bgBlack(text: string): string;
    bgBlackBright(text: string): string;
    red(text: string): string;
    redBright(text: string): string;
    bgRed(text: string): string;
    bgRedBright(text: string): string;
    green(text: string): string;
    greenBright(text: string): string;
    bgGreen(text: string): string;
    bgGreenBright(text: string): string;
    yellow(text: string): string;
    yellowBright(text: string): string;
    bgYellow(text: string): string;
    bgYellowBright(text: string): string;
    blue(text: string): string;
    blueBright(text: string): string;
    bgBlue(text: string): string;
    bgBlueBright(text: string): string;
    magenta(text: string): string;
    magentaBright(text: string): string;
    bgMagenta(text: string): string;
    bgMagentaBright(text: string): string;
    cyan(text: string): string;
    cyanBright(text: string): string;
    bgCyan(text: string): string;
    bgCyanBright(text: string): string;
    white(text: string): string;
    whiteBright(text: string): string;
    bgWhite(text: string): string;
    bgWhiteBright(text: string): string;
    bold(text: string): string;
    reset(text: string): string;
    dim(text: string): string;
    italic(text: string): string;
    underline(text: string): string;
    inverse(text: string): string;
    hidden(text: string): string;
    strikethrough(text: string): string;

    get codes(): ICliColorCodes;

    [key: string]: any;
}

export interface ICliColorCodes {
    readonly black: AnyStyleCode;
    readonly blackBright: AnyStyleCode;
    readonly bgBlack: AnyStyleCode;
    readonly bgBlackBright: AnyStyleCode;
    readonly red: AnyStyleCode;
    readonly redBright: AnyStyleCode;
    readonly bgRed: AnyStyleCode;
    readonly bgRedBright: AnyStyleCode;
    readonly green: AnyStyleCode;
    readonly greenBright: AnyStyleCode;
    readonly bgGreen: AnyStyleCode;
    readonly bgGreenBright: AnyStyleCode;
    readonly yellow: AnyStyleCode;
    readonly yellowBright: AnyStyleCode;
    readonly bgYellow: AnyStyleCode;
    readonly bgYellowBright: AnyStyleCode;
    readonly blue: AnyStyleCode;
    readonly blueBright: AnyStyleCode;
    readonly bgBlue: AnyStyleCode;
    readonly bgBlueBright: AnyStyleCode;
    readonly magenta: AnyStyleCode;
    readonly magentaBright: AnyStyleCode;
    readonly bgMagenta: AnyStyleCode;
    readonly bgMagentaBright: AnyStyleCode;
    readonly cyan: AnyStyleCode;
    readonly cyanBright: AnyStyleCode;
    readonly bgCyan: AnyStyleCode;
    readonly bgCyanBright: AnyStyleCode;
    readonly white: AnyStyleCode;
    readonly whiteBright: AnyStyleCode;
    readonly bgWhite: AnyStyleCode;
    readonly bgWhiteBright: AnyStyleCode;
    readonly bold: AnyStyleCode;
    readonly reset: AnyStyleCode;
    readonly dim: AnyStyleCode;
    readonly italic: AnyStyleCode;
    readonly underline: AnyStyleCode;
    readonly inverse: AnyStyleCode;
    readonly hidden: AnyStyleCode;
    readonly strikethrough: AnyStyleCode;

    [key: string]: AnyStyleCode;
}