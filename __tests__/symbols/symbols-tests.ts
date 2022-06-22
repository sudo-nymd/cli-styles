
import * as logger from '../lib/logger';
import * as util from 'util';
import { expect } from 'chai';
import { powerline, ModuleName } from '../../src/symbols';
import ansiColors from '../../src/ansi-colors';

// "Stateless" logging functions (avoid clashes with Mocha's hijackng of "this")
const LOGENTRY = logger.create(ModuleName);
const log = (msg: string | object, src?: string) => logger.log(LOGENTRY, msg, src);
const debug = (msg: object | string, src?: string) => logger.debug(LOGENTRY, msg, src);
const error = (msg: string | object, src?: string) => logger.error(LOGENTRY, msg, src);
const warn = (msg: string | object, src?: string) => logger.warn(LOGENTRY, msg, src);

describe.skip(`It tests the "${ModuleName}" module.`, function () {

    afterEach(() => {
        // Flush logging buffer after every test!
        logger.flush(LOGENTRY);
    });


    it(`Prints the arrows enum.`, function (done) {

        Object.keys(powerline.arrows).forEach((key) => {
            // @ts-ignore
            console.log(`${key} ${powerline.arrows[key]}`)
        })
        
        done();
    });

});