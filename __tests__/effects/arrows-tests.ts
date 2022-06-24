import * as logger from '../lib/logger';
import * as util from 'util';
import { expect } from 'chai';
import {  } from '../../src/effects/arrow';
import {  } from '../../src/effects/symbols'
import { ansiStyles, effects } from '../../src/index';

const ModuleName = "effects/arrow";
const { arrow, ArrowDirections} = effects;

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


    it(`Prints a couple of arrows.`, function (done) {

        const rightArrow = arrow({ bgColor: ansiStyles.codes.bgBlueBright });
        const leftArrow = arrow({ direction: ArrowDirections.Left, bgColor: ansiStyles.codes.bgMagentaBright });

        log(rightArrow("This is a right-facing arrow."));
        log(leftArrow("This is a left-facing arrow."));
        log(rightArrow("This is a right-facing arrow.") + rightArrow("Another arrow."));
        log(leftArrow("This is a left-facing arrow.") + leftArrow("Another arrow."));
        
        done();
    });

});