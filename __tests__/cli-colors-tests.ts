import cliColors from "../src/cli-colors";
import { ModuleName } from '../src/cli-colors';
import { AnsiStyleCodes } from '../src/common/colors';
import { AnyStyleCode, ColorClass, ColorCode, ModifierCode, StyleCode, StyleCodeType, StyleFunction } from "../src/common/types";
import * as logger from './lib/logger';
import * as util from 'util';
import { expect } from 'chai';

// "Stateless" logging functions (avoid clashes with Mocha's hijackng of "this")
const LOGENTRY = logger.create(ModuleName);
const log = (msg: string | object, src?: string) => logger.log(LOGENTRY, msg, src);
const debug = (msg: object | string, src?: string) => logger.debug(LOGENTRY, msg, src);
const error = (msg: string | object, src?: string) => logger.error(LOGENTRY, msg, src);
const warn = (msg: string | object, src?: string) => logger.warn(LOGENTRY, msg, src);

const encode = (code: StyleCode, text: string, debug = false) => {
    if(debug) {
        return `x1b[${code.value[0]}m${text}x1b[${code.value[1]}m`;
    }
    return `\x1b[${code.value[0]}m${text}\x1b[${code.value[1]}m`;
}

describe(`It tests the "${ModuleName}" module.`, function () {

    const BACKGROUNDs: ColorCode[] = [];
    const FOREGROUNDs: ColorCode[] = [];
    const BRIGHTs = [];
    const MODIFIERs: ModifierCode[] = [];

    AnsiStyleCodes.forEach(function(code) {
        if (code.type === StyleCodeType.Color) {
            switch(code.class) {
                case ColorClass.Foreground:
                    FOREGROUNDs.push(code);
                    break;

                case ColorClass.Background:
                    BACKGROUNDs.push(code);
                    break;
            }
        } else if (code.type === StyleCodeType.Modifier) {
            MODIFIERs.push(code);
        }
    })

    afterEach(() => {
        // Flush logging buffer after every test!
        logger.flush(LOGENTRY);
    });

    it(`Tests chaining random backgrounds, foregrounds, and modifiers.`, function(done) {

        for(let i = 0; i < 100; i++) {

            const fg = FOREGROUNDs[Math.floor(Math.random() * (FOREGROUNDs.length - 1))];
            const bg = BACKGROUNDs[Math.floor(Math.random() * (BACKGROUNDs.length - 1))];
            const m = MODIFIERs[Math.floor(Math.random() * (MODIFIERs.length - 1))];

            const text = `${fg.name}=>${bg.name}=>${m.name}`;
            //log(text)

            //const expected = util.format("\x1b[%sm\x1b[%sm\x1b[%sm\x1b[%sm\x1b[%sm\x1b[%sm\x1b%s\x1b[0m", fg.value[0], fg.value[1], bg.value[0], bg.value[1], m.value[0], m.value[1], '');
            const expected = encode(fg, encode(bg, encode(m, text))) + "\x1b[0m";
            const actual = cliColors[fg.name][bg.name][m.name](text);

            //log(expected.replace(/\x1b/g, "T",), "expected");
            //log(actual.replace(/\x1b/g, "T"), "__actual  ");

            debug(actual, '+' + text.padStart(30));
            debug(expected, '+' + text.padStart(30))
            expect(actual).to.equal(expected);
        }

        done();
    })

    it(`Tests each color/style property.`, function (done) {

        const keys = Object.keys(AnsiStyleCodes);
        const expectedLength = keys.length;
        const actualLength = Object.keys(cliColors.codes).length;
        expect(actualLength, 'Invalid count of cliColors.codes properties.').to.equal(expectedLength);

        AnsiStyleCodes.forEach(function (code) {
            const func = cliColors[code.name] as StyleFunction;
            const c = cliColors.codes[code.name] as AnyStyleCode;
            const expected = util.format("\x1b[%sm%s\x1b[%sm\x1b[0m", code.value[0], code.name, code.value[1]);
            const actual = func(code.name);
            debug(actual, '+' + code.name.padStart(20));

            expect(actual).to.equal(expected);
        });

        done();
    })

    it.skip(`Tests the terminate() method.`, function (done) {

        const text = Math.random().toString();
        const expected = util.format("%s\x1b[0m", text);
        const actual = cliColors.terminate(text);

        debug({ expected, actual});

        expect(actual).to.equal(expected);
        done();
    });
})