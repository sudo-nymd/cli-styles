import { AnsiStyleCodes, ModuleName } from '../../src/common/colors';


describe(`It tests the "${ModuleName}" module.`, function() {

    it.skip(`Generates interfaces from the colors dictionary.`, function(done) {

        Object.keys(AnsiStyleCodes).forEach((key) => {
            console.log(`readonly ${key}: AllStyleCodes;`)
        })

        done();
    })
})