
import * as logger from '../lib/logger';
import * as util from 'util';
import { expect } from 'chai';
import * as ansiUtils from '../../src/common/ansi-utils';
import { AnsiStyleCode, AnsiStyleCodeTypes, AnsiColorCodeTypes } from '../../src/common/types';
import ansiStyles from '../../src/ansi-styles';

// "Stateless" logging functions (avoid clashes with Mocha's hijackng of "this")
const LOGENTRY = logger.create(ansiUtils.ModuleName);
const log = (msg: string | object, src?: string) => logger.log(LOGENTRY, msg, src);
const debug = (msg: object | string, src?: string) => logger.debug(LOGENTRY, msg, src);
const error = (msg: string | object, src?: string) => logger.error(LOGENTRY, msg, src);
const warn = (msg: string | object, src?: string) => logger.warn(LOGENTRY, msg, src);

const BG_CODE_FG_CODE_MAP = [
    { bg: ansiStyles.codes.bgBlack, fg: ansiStyles.codes.black },
    { bg: ansiStyles.codes.bgBlackBright, fg: ansiStyles.codes.blackBright },
    { bg: ansiStyles.codes.bgBlue, fg: ansiStyles.codes.blue },
    { bg: ansiStyles.codes.bgBlueBright, fg: ansiStyles.codes.blueBright },
    { bg: ansiStyles.codes.bgCyan, fg: ansiStyles.codes.cyan },
    { bg: ansiStyles.codes.bgCyanBright, fg: ansiStyles.codes.cyanBright },
    { bg: ansiStyles.codes.bgGreen, fg: ansiStyles.codes.green },
    { bg: ansiStyles.codes.bgGreenBright, fg: ansiStyles.codes.greenBright },
    { bg: ansiStyles.codes.bgMagenta, fg: ansiStyles.codes.magenta },
    { bg: ansiStyles.codes.bgMagentaBright, fg: ansiStyles.codes.magentaBright },
    { bg: ansiStyles.codes.bgRed, fg: ansiStyles.codes.red },
    { bg: ansiStyles.codes.bgRedBright, fg: ansiStyles.codes.redBright },
    { bg: ansiStyles.codes.bgYellow, fg: ansiStyles.codes.yellow },
    { bg: ansiStyles.codes.bgYellowBright, fg: ansiStyles.codes.yellowBright },
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
            { text: null, code: ansiStyles.codes.bgBlack, error: ReferenceError },
            // Undefined text
            { text: undefined, code: ansiStyles.codes.bgBlack, error: ReferenceError },
            // Null code
            { text: 'Test', code: null, error: ReferenceError },
            // Undefined code
            { text: 'Test', code: undefined, error: ReferenceError },
        ].forEach((test) => {
            expect(() => {
                try {
                    // @ts-ignore
                    ansiUtils.encode(test.text, test.code);
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
            { text: null, error: ReferenceError, code: ansiStyles.codes.bgBlack },
            // Undefined text
            { text: undefined, error: ReferenceError, code: ansiStyles.codes.bgBlack },
            // Empty text
            { text: '', error: ReferenceError, code: ansiStyles.codes.bgBlack },
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

        const expected = util.format("\x1b[%s;%sm\x1b[%sm%s\x1b[0m", ansiStyles.codes.bgBlack.value[0], 49, 7, "test")
        const actual = ansiUtils.transparent("test", ansiStyles.codes.bgBlack);

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