import * as logger from '../lib/logger';
import * as util from 'util';
import { expect } from 'chai';
import { } from '../../src/effects/arrow';
import { } from '../../src/effects/symbols'
import { ansiStyles, effects } from '../../src/index';


const ModuleName = "effects/hexagon";
const { Hexagon } = effects;

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

    it(`Prints a couple of hexagons.`, function (done) {

        const hexagon = new Hexagon();
        log(hexagon.bold.italic.format(`This is a HEXAGON.`));
        log(
            util.format("%s%s",
                hexagon
                    .reset
                    .fgColor(ansiStyles.codes.black)
                    .bgColor(ansiStyles.codes.bgGreenBright)
                    .format("This is a HEXAGON."),
                hexagon
                    .bgColor(ansiStyles.codes.bgMagenta)
                    .format("This is another HEXAGON."))
        )
        done();
    });
});