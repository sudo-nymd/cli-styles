import {
    AnsiColorCodeTypes,
    AnsiStyleCode,
    AnsiStyleCodeTypes,
    utils,
    AnyStyleCode,
    IAnsiStyles,
    StyleCodeDictionary,
    StyleFunction
    } from './index';

import { ANSI_STYLE_CODES  } from './common/colors';

class AnsiStyles {

    private _stack: AnsiStyleCode[];
    private _codes: StyleCodeDictionary<AnyStyleCode>;

    constructor() {
        this._stack = [];
        this._codes = {};

        const self = this;

        // Loop through our color/styles map, and build dynamic 
        // chained methods that allow style formatting.
        ANSI_STYLE_CODES.forEach(function (code) {

            const colorObj = {
                [code.name]: {
                    get() {
                        self._stack.push(code)
                        const fmt = (text: string) => {
                            for (var code of self._stack.reverse()) {
                                text = utils.encode(text, code as AnyStyleCode);
                            }
                            self._stack = [];
                            return utils.terminate(text);
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

export const createInstance = (): IAnsiStyles => {
    const ansiStyles: unknown = new AnsiStyles();
    console.log('ansiStyles: ' + ansiStyles);
    return ansiStyles as IAnsiStyles;
}

const ansiStyles = createInstance();
//export {ansiStyles}

/**
 * Export module name for test runners.
 */
export const ModuleName = 'ansi-styles'

export { ansiStyles, AnsiColorCodeTypes, AnsiStyleCodeTypes, AnsiStyleCode, AnyStyleCode, StyleFunction }