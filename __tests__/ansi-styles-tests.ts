
import { ansiStyles, effects } from '../src/index';

describe(`Tests the module.`, function() {
    it(`Tests the function.`, function(done) {
        console.log(ansiStyles.bgBlueBright('test'));
        done();
    })

    it(`Tests the arrow`, function(done) {
        const func = effects.arrow();
        console.log(func('This is an arrow.'));
        done();
    })
})