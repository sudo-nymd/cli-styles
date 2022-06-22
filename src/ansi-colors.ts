import * as util from 'util'
import { AnsiStyleCodes } from "./common/colors";
import { AnyStyleCode, IAnsiColors, AnsiStyleCode, AnsiStyleCodeTypes, AnsiColorTypes, StyleCodeDictionary, StyleFunction, AnsiColorCode } from "./common/types";

class AnsiColors {

    private _stack: AnsiStyleCode[];
    private _codes: StyleCodeDictionary<AnyStyleCode>;    

    constructor() {
        this._stack = [];
        this._codes = {};

        const self = this;     

        // Loop through our color/styles map, and build dynamic 
        // chained methods that allow style formatting.
        AnsiStyleCodes.forEach(function (code) {

            const colorObj = {
                [code.name]: {
                    get() {
                        self._stack.push(code)
                        const fmt = (text: string) => {
                            for (var code of self._stack.reverse()) {
                                text = self.encode(code as AnyStyleCode, text); // "\x1b[" + d.value[0] + "m" + text + "\x1b[" + d.value[1] + "m";
                            }
                            self._stack = [];
                            return self.terminate(text);
                        }

                        fmt.__proto__ = self;
                        return fmt;
                    },
                }
            }

            self._codes[code.name] = code;
            
            Object.defineProperties(AnsiColors.prototype, colorObj);
        });
    }

    public get codes(): StyleCodeDictionary<AnyStyleCode> {
        return this._codes;
    }

    /**
     * Encodes a string with the ansi escape color/modifier codes.
     * @param code The ansi code to use.
     * @param text The text to encode.
     * @returns The encoded stext.
     */
    public encode(code: AnyStyleCode, text: string) {
        return util.format("\x1b[%sm%s\x1b[%sm", code.value[0], text, code.value[1]); // "\x1b[" + d.value[0] + "m" + text + "\x1b[" + d.value[1] + "m";
    }

    /**
     * Terminates the text with the ansi reset code (0).
     * @param text The text to terminate.
     * @returns The text terminated with the reset escape code (0).
     */
    public terminate(text: string) {
        return util.format("%s\x1b[0m", text);
    }

    public bgToFG(code: AnsiColorCode): AnsiColorCode {

        if (code === undefined || code === null) {
            throw new ReferenceError('Code cannot be undefined or null!');
        }

        const { name, type, value } = code;

        if (type !== AnsiStyleCodeTypes.Color) {
            throw new TypeError(`Code of type "${type}" is not permitted for this operation! Type must be "${AnsiStyleCodeTypes.Color}".`)
        }

        if (code.colorType !== AnsiColorTypes.Background && code.colorType !== AnsiColorTypes.BackgroundBright) {
            throw new TypeError(`Code of class "${code.colorType}" is not permitted for this operation! Class must be either "${AnsiColorTypes.Background}" or "${AnsiColorTypes.BackgroundBright}".`);
        }

        let newName = name.replace(/^(bg)/, '');
        newName = newName[0].toLowerCase() + newName.substring(1);

        return {
            name: newName,
            value: [value[0] - 10, value[1] - 10],
            type: AnsiStyleCodeTypes.Color,
            colorType: (code.colorType & AnsiColorTypes.Bright) ? AnsiColorTypes.ForegroundBright : AnsiColorTypes.Foreground
        }
    }
}

const createInstance = (): IAnsiColors => {
    const ansiColors: unknown = new AnsiColors();
    return ansiColors as IAnsiColors;
}

const ansiColors = createInstance();

export default ansiColors;

/**
 * Export module name for test runners.
 */
export const ModuleName = 'cli-colors'

export { AnsiColorTypes as AnsiColorClass, AnsiStyleCodeTypes as AnsiStyleCodeType, AnsiStyleCode, AnyStyleCode, StyleFunction }