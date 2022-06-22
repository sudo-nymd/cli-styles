import * as util from 'util';
import { AnsiStyleCodes } from "./common/colors";
import { AnyStyleCode, IAnsiColors, AnsiStyleCode, AnsiStyleCodeTypes, AnsiColorCodeTypes, StyleCodeDictionary, StyleFunction, AnsiColorCode } from "./common/types";
import * as ansiUtils from './common/ansi-utils';

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
                                text = ansiUtils.encode(code as AnyStyleCode, text); 
                            }
                            self._stack = [];
                            return ansiUtils.terminate(text);
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

export { AnsiColorCodeTypes, AnsiStyleCodeTypes, AnsiStyleCode, AnyStyleCode, StyleFunction }