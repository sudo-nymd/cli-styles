import { AnsiStyleCodes } from "./common/colors";
import { AllStyleCodes, ICliColors, StyleCode, StyleCodeArray, StyleCodeDictionary } from "./common/types";

class CliColors {

    private _stack: StyleCode[];
    private _codes: StyleCodeDictionary<AllStyleCodes>;    

    constructor() {
        this._stack = [];
        this._codes = {};

        const self = this;     

        AnsiStyleCodes.forEach(function (code) {
            const colorObj = {
                [code.name]: {
                    get() {
                        self._stack.push(code)
                        const fmt = (text: string) => {
                            const reset = "\x1b[0m";
                            for (var d of self._stack.reverse()) {
                                text = "\x1b[" + d.value[0] + "m" + text + "\x1b[" + d.value[1] + "m";
                            }
                            self._stack = [];
                            return text + reset;
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

    public get codes(): StyleCodeDictionary<AllStyleCodes> {
        return this._codes;
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
export const ModuleName = 'colors'