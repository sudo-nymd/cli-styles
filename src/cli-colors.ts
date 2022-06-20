import { AnsiStyleCodes } from "./common/colors";
import { AllStyleCodes, ICliColors, StyleCode, StyleCodeDictionary } from "./common/types";

class CliColors {

    private _stack: StyleCode[];
    private _codes: StyleCodeDictionary<AllStyleCodes>;    

    constructor() {
        this._stack = [];
        this._codes = {};

        const codes = Object.assign({}, AnsiStyleCodes);
        const keys = Object.keys(codes);

        const self = this;     

        keys.forEach(function (key) {
            const colorObj = {
                [key]: {
                    get() {
                        self._stack.push(codes[key])
                        const fmt = (text: string) => {
                            const resetCode = AnsiStyleCodes.reset as AllStyleCodes;
                            const reset = "\x1b[" + resetCode.value[0] + "m";
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

            
            self._codes[key] = codes[key];
            

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