import cliColors  from "../src/cli-colors"; 
import { ModuleName } from '../src/cli-colors';
import { AnsiStyleCodes } from '../src/common/colors';
import { StyleFunction } from "../src/common/types";


describe(`It tests the "${ModuleName}" module.`, function () {

    it(`Generates interfaces from the colors dictionary.`, function (done) {

        Object.keys(AnsiStyleCodes).forEach(function(key){
            const func = cliColors[key] as StyleFunction;
            console.log(func(key));
        })

        // console.log(cliColors.codes)

        done();
    })
})