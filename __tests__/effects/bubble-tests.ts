import * as logger from '../lib/logger';
import * as util from 'util';
import { expect } from 'chai';
import { ansiStyles, effects } from '../../src/index';

const ModuleName = 'effects/bubbles';
const { bubble } = effects;

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


    it(`Prints a couple of bubbles.`, function (done) {

        const bubble1 = bubble({ bgColor: ansiStyles.codes.bgBlueBright });
        const bubble2 = bubble({ bgColor: ansiStyles.codes.bgMagentaBright });

        log(bubble1("This is a right-facing bubble."));
        log(bubble2("This is a left-facing bubble."));
        log(bubble1("This is a right-facing bubble.") + bubble2("Another bubble."));
        log(bubble2("This is a left-facing bubble.") + bubble1("Another bubble."));
        
        done();
    });

});