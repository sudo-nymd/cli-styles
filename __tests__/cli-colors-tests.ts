import cliColors from "../src/cli-colors";
import { ModuleName } from '../src/cli-colors';
import { AnsiStyleCodes } from '../src/common/colors';
import { AnyStyleCode, AnsiColorClass, AnsiColorCode, AnsiModifierCode, AnsiStyleCode, StyleCodeType, StyleFunction } from "../src/common/types";
import * as logger from './lib/logger';
import * as util from 'util';
import { expect } from 'chai';

// "Stateless" logging functions (avoid clashes with Mocha's hijackng of "this")
const LOGENTRY = logger.create(ModuleName);
const log = (msg: string | object, src?: string) => logger.log(LOGENTRY, msg, src);
const debug = (msg: object | string, src?: string) => logger.debug(LOGENTRY, msg, src);
const error = (msg: string | object, src?: string) => logger.error(LOGENTRY, msg, src);
const warn = (msg: string | object, src?: string) => logger.warn(LOGENTRY, msg, src);

const encode = (code: AnsiStyleCode, text: string, debug = false) => {
    if(debug) {
        return `x1b[${code.value[0]}m${text}x1b[${code.value[1]}m`;
    }
    return `\x1b[${code.value[0]}m${text}\x1b[${code.value[1]}m`;
}

describe(`It tests the "${ModuleName}" module.`, function () {

    const BACKGROUNDs: AnsiColorCode[] = [];
    const FOREGROUNDs: AnsiColorCode[] = [];
    const BRIGHTs = [];
    const MODIFIERs: AnsiModifierCode[] = [];

    AnsiStyleCodes.forEach(function(code) {
        if (code.type === StyleCodeType.Color) {
            switch(code.class) {
                case AnsiColorClass.Foreground:
                    FOREGROUNDs.push(code);
                    break;

                case AnsiColorClass.Background:
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

            const expected = encode(fg, encode(bg, encode(m, text))) + "\x1b[0m";
            const actual = cliColors[fg.name][bg.name][m.name](text);

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

    it(`Tests the terminate() method.`, function (done) {

        const text = Math.random().toString();
        const expected = util.format("%s\x1b[0m", text);
        const actual = cliColors.terminate(text);

        debug({ expected, actual});

        expect(actual).to.equal(expected);
        done();
    });
    
    it.skip(`Samples for screenshots.`, function (done) {
        let count = 0;
        let index = 0;
        console.log("\n\n\n");
        AnsiStyleCodes.forEach(function(code) {
            //if(count % 2 === 0) {
                const n_1 = AnsiStyleCodes[count].name;
                //const n_2 = AnsiStyleCodes[count + 1].name;
                const f_1 = cliColors[n_1] as StyleFunction;
                //const f_2 = cliColors[n_2] as StyleFunction;
                const v_1 = f_1(n_1);
                //const v_2 = f_2(n_2);

                console.log('$              ' + n_1.padStart(15) + ': ' + v_1)
            //}
            count = count + 1;
            
        });

        console.log("\n\n\n");

        done();
    });

    it(`Tests the bgToFG() method.`, function(done) {
        
        // @ts-ignore Test null code
        expect(() => cliColors.bgToFG(null)).to.throw(ReferenceError);

        // @ts-ignore Test undefined code
        expect(() => cliColors.bgToFG()).to.throw(ReferenceError);
        
        done();
    })
})