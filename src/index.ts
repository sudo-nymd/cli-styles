import cliColors from './cli-colors';
import * as symbols from './symbols';
import { AnsiStyleCodes } from './common/colors';
import {
    ColorClass,
    StyleCode,
    StyleCodeType,
    StyleFunction
    } from './cli-colors';
import { AnsiColorCode, AnsiModifierCode, StyleCodeArray } from './common/types';

export default cliColors;

export { 
    AnsiStyleCodes, 
    ColorClass, 
    AnsiColorCode as ColorCode, 
    AnsiModifierCode as ModifierCode, 
    StyleCode, 
    StyleCodeArray, 
    StyleCodeType, 
    StyleFunction, 
    symbols
}