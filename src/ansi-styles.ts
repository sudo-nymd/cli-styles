import * as util from 'util';
import { AnsiStyleCodes } from "./common/colors";
import { AnyStyleCode, IAnsiStyles, AnsiStyleCode, AnsiStyleCodeTypes, AnsiColorCodeTypes, StyleCodeDictionary, StyleFunction, AnsiColorCode } from "./common/types";
import * as ansiUtils from './common/ansi-utils';

class AnsiStyles {

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
                                text = ansiUtils.encode(text, code as AnyStyleCode); 
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
            
            Object.defineProperties(AnsiStyles.prototype, colorObj);
        });
    }

    public get codes(): StyleCodeDictionary<AnyStyleCode> {
        return this._codes;
    }

}

const createInstance = (): IAnsiStyles => {
    const ansiStyles: unknown = new AnsiStyles();
    return ansiStyles as IAnsiStyles;
}

const ansiStyles = createInstance();

export default ansiStyles;

/**
 * Export module name for test runners.
 */
export const ModuleName = 'ansi-styles'

export { AnsiColorCodeTypes, AnsiStyleCodeTypes, AnsiStyleCode, AnyStyleCode, StyleFunction }