import ansiColors from './ansi-colors';
import * as ansiUtils from './common/ansi-utils';

//import * as symbols from './symbols';
import { AnsiStyleCodes } from './common/colors';
import {
    AnsiColorCodeTypes,
    AnsiStyleCode,
    AnsiStyleCodeTypes,
    StyleFunction
    } from './ansi-colors';

import { AnsiColorCode, AnsiModifierCode, StyleCodeArray } from './common/types';

export default ansiColors;

export { 
    AnsiColorCode, 
    AnsiColorCodeTypes, 
    AnsiModifierCode, 
    AnsiStyleCode, 
    AnsiStyleCodes, 
    AnsiStyleCodeTypes, 
    ansiUtils,
    StyleCodeArray, 
    StyleFunction, 
    //symbols
}