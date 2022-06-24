import * as logger from '../lib/logger';
import { ansiStyles, effects } from '../../src/index';

const ModuleName = 'effects/hexagon';
const { hexagon } = effects;

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

        const hexagon1 = hexagon({ bgColor: ansiStyles.codes.bgBlueBright });
        const hexagon2 = hexagon({ bgColor: ansiStyles.codes.bgMagentaBright });

        log(hexagon1("This is a right-facing hexagon."));
        log(hexagon2("This is a left-facing hexagon."));
        log(hexagon1("This is a right-facing hexagon.") + hexagon2("Another hexagon."));
        log(hexagon2("This is a left-facing hexagon.") + hexagon1("Another hexagon."));
        
        done();
    });

});