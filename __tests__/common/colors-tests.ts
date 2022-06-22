import { AnsiStyleCodes, ModuleName } from '../../src/common/colors';
import { AnsiColorCodeTypes, AnsiStyleCodeTypes } from '../../src/common/types';

describe(`It tests the "${ModuleName}" module.`, function() {

    it.skip(`Generates code from the colors dictionary.`, function(done) {

        AnsiStyleCodes.forEach((code) => {
            if(code.type === AnsiStyleCodeTypes.Color) {
                //console.log(`{ name: "${code.name}", value: [${code.value}], type: StyleCodeType.${StyleCodeType[code.type]}, class: ColorClass.${ColorClass[code.class] } },`)
            } else {
                //console.log(`{ name: "${code.name}", value: [${code.value}], type: StyleCodeType.${StyleCodeType[code.type]} },`)
            }
            //console.log(`readonly ${key}: AllStyleCodes;`)
            //console.log(`{ name: key}`)
        })

        done();
    })
})