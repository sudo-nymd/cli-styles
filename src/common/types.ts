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

export type AllStyleCodes = ColorCode | ModifierCode | TransparentCode;

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
    readonly black: AllStyleCodes;
    readonly blackBright: AllStyleCodes;
    readonly bgBlack: AllStyleCodes;
    readonly bgBlackBright: AllStyleCodes;
    readonly red: AllStyleCodes;
    readonly redBright: AllStyleCodes;
    readonly bgRed: AllStyleCodes;
    readonly bgRedBright: AllStyleCodes;
    readonly green: AllStyleCodes;
    readonly greenBright: AllStyleCodes;
    readonly bgGreen: AllStyleCodes;
    readonly bgGreenBright: AllStyleCodes;
    readonly yellow: AllStyleCodes;
    readonly yellowBright: AllStyleCodes;
    readonly bgYellow: AllStyleCodes;
    readonly bgYellowBright: AllStyleCodes;
    readonly blue: AllStyleCodes;
    readonly blueBright: AllStyleCodes;
    readonly bgBlue: AllStyleCodes;
    readonly bgBlueBright: AllStyleCodes;
    readonly magenta: AllStyleCodes;
    readonly magentaBright: AllStyleCodes;
    readonly bgMagenta: AllStyleCodes;
    readonly bgMagentaBright: AllStyleCodes;
    readonly cyan: AllStyleCodes;
    readonly cyanBright: AllStyleCodes;
    readonly bgCyan: AllStyleCodes;
    readonly bgCyanBright: AllStyleCodes;
    readonly white: AllStyleCodes;
    readonly whiteBright: AllStyleCodes;
    readonly bgWhite: AllStyleCodes;
    readonly bgWhiteBright: AllStyleCodes;
    readonly bold: AllStyleCodes;
    readonly reset: AllStyleCodes;
    readonly dim: AllStyleCodes;
    readonly italic: AllStyleCodes;
    readonly underline: AllStyleCodes;
    readonly inverse: AllStyleCodes;
    readonly hidden: AllStyleCodes;
    readonly strikethrough: AllStyleCodes;

    [key: string]: AllStyleCodes;
}