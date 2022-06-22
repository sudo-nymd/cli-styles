
import * as logger from '../lib/logger';
import * as util from 'util';
import { expect } from 'chai';
import * as ansiUtils from '../../src/common/ansi-utils';
import { AnsiStyleCode, AnsiStyleCodeTypes, AnsiColorCodeTypes } from '../../src/common/types';
import ansiColors from '../../src/ansi-colors';

// "Stateless" logging functions (avoid clashes with Mocha's hijackng of "this")
const LOGENTRY = logger.create(ansiUtils.ModuleName);
const log = (msg: string | object, src?: string) => logger.log(LOGENTRY, msg, src);
const debug = (msg: object | string, src?: string) => logger.debug(LOGENTRY, msg, src);
const error = (msg: string | object, src?: string) => logger.error(LOGENTRY, msg, src);
const warn = (msg: string | object, src?: string) => logger.warn(LOGENTRY, msg, src);

const BG_CODE_FG_CODE_MAP = [
    { bg: ansiColors.codes.bgBlack, fg: ansiColors.codes.black },
    { bg: ansiColors.codes.bgBlackBright, fg: ansiColors.codes.blackBright },
    { bg: ansiColors.codes.bgBlue, fg: ansiColors.codes.blue },
    { bg: ansiColors.codes.bgBlueBright, fg: ansiColors.codes.blueBright },
    { bg: ansiColors.codes.bgCyan, fg: ansiColors.codes.cyan },
    { bg: ansiColors.codes.bgCyanBright, fg: ansiColors.codes.cyanBright },
    { bg: ansiColors.codes.bgGreen, fg: ansiColors.codes.green },
    { bg: ansiColors.codes.bgGreenBright, fg: ansiColors.codes.greenBright },
    { bg: ansiColors.codes.bgMagenta, fg: ansiColors.codes.magenta },
    { bg: ansiColors.codes.bgMagentaBright, fg: ansiColors.codes.magentaBright },
    { bg: ansiColors.codes.bgRed, fg: ansiColors.codes.red },
    { bg: ansiColors.codes.bgRedBright, fg: ansiColors.codes.redBright },
    { bg: ansiColors.codes.bgYellow, fg: ansiColors.codes.yellow },
    { bg: ansiColors.codes.bgYellowBright, fg: ansiColors.codes.yellowBright },
]
const BG_CODE_FG_CODE_OFFSET = 10;

describe(`It tests the "${ansiUtils.ModuleName}" module.`, function () {

    afterEach(() => {
        // Flush logging buffer after every test!
        logger.flush(LOGENTRY);
    });


    it(`Tests the terminate() method.`, function (done) {

        // Test that proper errors are thrown
        [
            // Null text
            { text: null, error: ReferenceError },
            // Undefined text
            { text: undefined, error: ReferenceError },
            // Empty text
            { text: '', error: ReferenceError }
        ].forEach((test) => {
            expect(() => {
                try {
                    // @ts-ignore
                    ansiUtils.terminate(test.text);
                } catch (e) {
                    error(e as Error)
                    throw e;
                }
            }).to.throw(test.error);
        });

        const text = Math.random().toString();
        const expected = util.format("%s\x1b[0m", text);
        const actual = ansiUtils.terminate(text);

        debug({ expected, actual });

        expect(actual).to.equal(expected);
        done();
    });

    it(`Tests the encode() method.`, function (done) {
        // Test that proper errors are thrown
        [
            // Null text
            { text: null, code: ansiColors.codes.bgBlack, error: ReferenceError },
            // Undefined text
            { text: undefined, code: ansiColors.codes.bgBlack, error: ReferenceError },
            // Null code
            { text: 'Test', code: null, error: ReferenceError },
            // Undefined code
            { text: 'Test', code: undefined, error: ReferenceError },
        ].forEach((test) => {
            expect(() => {
                try {
                    // @ts-ignore
                    ansiUtils.encode(test.code, test.text);
                } catch (e) {
                    error(e as Error)
                    throw e;
                }
            }).to.throw(test.error);
        })
        done();
    });

    it(`Tests the transparent() function.`, function(done) {
        // Test that proper errors are thrown
        [
            // Null text
            { text: null, error: ReferenceError, code: ansiColors.codes.bgBlack },
            // Undefined text
            { text: undefined, error: ReferenceError, code: ansiColors.codes.bgBlack },
            // Empty text
            { text: '', error: ReferenceError, code: ansiColors.codes.bgBlack },
            // Null code
            { text: 'test', code: null, error: ReferenceError },
            // Undefined code
            { text: 'test', code: undefined, error: ReferenceError }
        ].forEach((test) => {
            expect(() => {
                try {
                    // @ts-ignore
                    ansiUtils.transparent(test.text, test.code);
                } catch (e) {
                    error(e as Error)
                    throw e;
                }
            }).to.throw(test.error);
        });

        const expected = util.format("\x1b[%s;%sm\x1b[%sm%s\x1b[0m", ansiColors.codes.bgBlack.value[0], 49, 7, "test")
        const actual = ansiUtils.transparent("test", ansiColors.codes.bgBlack);

        debug(actual, expected);

        expect(actual).to.deep.equal(expected);

        done();
    })

    it(`Tests the convertToBackground() method.`, function (done) {

        // Test that proper errors are thrown
        [
            { value: null, error: ReferenceError },             // null code
            { value: undefined, error: ReferenceError },        // undefined code
            { value: {}, error: TypeError },                    // non-null blank code
            { value: { name: '' }, error: TypeError },           // blank name property
            { value: { name: null }, error: TypeError },        // null name property
            { value: { name: undefined }, error: TypeError },   // undefined name property
            // null type property
            { value: { name: 'black', type: null }, error: TypeError },
            // undefined type property
            { value: { name: 'black', type: undefined }, error: TypeError },
            // null colorType property
            { value: { name: 'black', type: AnsiStyleCodeTypes.Color, colorType: null, value: [0, 0] }, error: TypeError },
            // null colorType property
            { value: { name: 'black', type: AnsiStyleCodeTypes.Modifier, colorType: AnsiColorCodeTypes.Foreground, value: [0, 0] }, error: TypeError },
            // undefined colorType property
            { value: { name: 'black', type: AnsiStyleCodeTypes.Color, colorType: undefined, value: [0, 0] }, error: TypeError },
            // Invalid colorType property
            { value: { name: 'black', type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Bright, value: [0, 0] }, error: TypeError },
            // null value property
            { value: { name: 'bgBlack', type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Background, value: null }, error: TypeError },
            // undefined value property
            { value: { name: 'bgBlack', type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Background, value: undefined }, error: TypeError },
            // Invalid value property type
            { value: { name: 'bgBlack', type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Background, value: 'foo' }, error: TypeError },
            // Invalid value property array length
            { value: { name: 'bgBlack', type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Background, value: [] }, error: TypeError },
        ].forEach((test) => {
            expect(() => {
                try {
                    // @ts-ignore
                    ansiUtils.convertToBackground(test.value);
                } catch (e) {
                    error(e as Error)
                    throw e;
                }
            }).to.throw(test.error);
        });

        // Ensure each background color code properly converts to it's
        // corresponding foreground color code.
        BG_CODE_FG_CODE_MAP.forEach((test) => {
            expect(ansiUtils.convertToBackground(test.fg))
                .to
                .deep
                .equals(test.bg, `Code "${test.fg.name}" should convert to code "${test.bg.name}".`);
        });

        done();
    });
 
    it(`Tests the convertToForeground() method.`, function (done) {

        // Test that proper errors are thrown
        [
            { value: null, error: ReferenceError },             // null code
            { value: undefined, error: ReferenceError },        // undefined code
            { value: {}, error: TypeError },                    // non-null blank code
            { value: { name: ''}, error: TypeError },           // blank name property
            { value: { name: null }, error: TypeError },        // null name property
            { value: { name: undefined }, error: TypeError },   // undefined name property
            // null type property
            { value: { name: 'black', type: null }, error: TypeError },            
            // undefined type property
            { value: { name: 'black', type: undefined }, error: TypeError },  
            // null colorType property
            { value: { name: 'black', type: AnsiStyleCodeTypes.Color, colorType: null, value: [0, 0] }, error: TypeError },    
            // null colorType property
            { value: { name: 'black', type: AnsiStyleCodeTypes.Modifier, colorType: AnsiColorCodeTypes.Foreground, value: [0, 0] }, error: TypeError },    
            // undefined colorType property
            { value: { name: 'black', type: AnsiStyleCodeTypes.Color, colorType: undefined, value: [0, 0] }, error: TypeError },    
            // Invalid colorType property
            { value: { name: 'black', type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Bright, value: [0, 0] }, error: TypeError },    
            // null value property
            { value: { name: 'bgBlack', type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Background, value: null }, error: TypeError },
            // undefined value property
            { value: { name: 'bgBlack', type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Background, value: undefined }, error: TypeError },
            // Invalid value property type
            { value: { name: 'bgBlack', type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Background, value: 'foo' }, error: TypeError },    
            // Invalid value property array length
            { value: { name: 'bgBlack', type: AnsiStyleCodeTypes.Color, colorType: AnsiColorCodeTypes.Background, value: [] }, error: TypeError },    
        ].forEach((test) => {
            expect(() => {
                try {
                    // @ts-ignore
                    ansiUtils.convertToForeground(test.value);
                } catch (e) {
                    error(e as Error)
                    throw e;
                }
            }).to.throw(test.error);
        });

        // Ensure each background color code properly converts to it's
        // corresponding foreground color code.
        BG_CODE_FG_CODE_MAP.forEach((test) => {
            expect(ansiUtils.convertToForeground(test.bg))
                .to
                .deep
                .equals(test.fg, `Code "${test.bg.name}" should convert to code "${test.fg.name}".`);
        });

        done();
    });
});