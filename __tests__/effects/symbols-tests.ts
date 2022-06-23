
import * as logger from '../lib/logger';
import * as util from 'util';
import { expect } from 'chai';
import { symbols, ModuleName } from '../../src/effects/symbols';
import ansiStyles from '../../src/ansi-styles';

// "Stateless" logging functions (avoid clashes with Mocha's hijackng of "this")
const LOGENTRY = logger.create(ModuleName);
const log = (msg: string | object, src?: string) => logger.log(LOGENTRY, msg, src);
const debug = (msg: object | string, src?: string) => logger.debug(LOGENTRY, msg, src);
const error = (msg: string | object, src?: string) => logger.error(LOGENTRY, msg, src);
const warn = (msg: string | object, src?: string) => logger.warn(LOGENTRY, msg, src);

describe(`It tests the "${ModuleName}" module.`, function () {

    afterEach(() => {
        // Flush logging buffer after every test!
        logger.flush(LOGENTRY);
    });


    it.only(`Prints bracket symbols`, function (done) {

        Object.keys(symbols.brackets).forEach((key) => {
            Object.keys(symbols.brackets[key]).forEach((bracket) => {
                log(`${key} ${bracket} ${symbols.brackets[key][bracket]}`, "brackets");
            });            
        });

        done();
    });

    it.only(`Prints quotes symbols`, function (done) {

        Object.keys(symbols.quotes).forEach((key) => {
            Object.keys(symbols.quotes[key]).forEach((quote) => {
                log(`${key} ${quote} ${symbols.quotes[key][quote]}`, "quotes");
            });
        });

        done();
    });

});