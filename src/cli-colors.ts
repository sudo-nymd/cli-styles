import * as util from 'util'
import { AnsiStyleCodes } from "./common/colors";
import { AnyStyleCode, ICliColors, StyleCode, StyleCodeType, ColorClass, StyleCodeDictionary, StyleFunction, ColorCode } from "./common/types";

class CliColors {

    private _stack: StyleCode[];
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
            
            Object.defineProperties(CliColors.prototype, colorObj);
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

    public bgToFG(code: ColorCode): ColorCode {

        if (code === undefined || code === null) {
            throw new ReferenceError('Code cannot be undefined or null!');
        }

        const { name, type, value } = code;

        if (type !== StyleCodeType.Color) {
            throw new TypeError(`Code of type "${type}" is not permitted for this operation! Type must be "${StyleCodeType.Color}".`)
        }

        if (code.class !== ColorClass.Background && code.class !== ColorClass.BackgroundBright) {
            throw new TypeError(`Code of class "${code.class}" is not permitted for this operation! Class must be either "${ColorClass.Background}" or "${ColorClass.BackgroundBright}".`);
        }

        let newName = name.replace(/^(bg)/, '');
        newName = newName[0].toLowerCase() + newName.substring(1);

        return {
            name: newName,
            value: [value[0] - 10, value[1] - 10],
            type: StyleCodeType.Color,
            class: (code.class & ColorClass.Bright) ? ColorClass.ForegroundBright : ColorClass.Foreground
        }
    }
}

const createInstance = (): ICliColors => {
    const cliColors: unknown = new CliColors();
    return cliColors as ICliColors;
}

const cliColors = createInstance();

export default cliColors;

/**
 * Export module name for test runners.
 */
export const ModuleName = 'cli-colors'

export { ColorClass, StyleCodeType, StyleCode, AnyStyleCode, StyleFunction }