import cliColors from './cli-colors';
import * as symbols from './symbols';
import { AnsiStyleCodes } from './common/colors';
import {
    ColorClass,
    StyleCode,
    StyleCodeType,
    StyleFunction
    } from './cli-colors';
import { ColorCode, ModifierCode, StyleCodeArray } from './common/types';

export default cliColors;

export { 
    AnsiStyleCodes, 
    ColorClass, 
    ColorCode, 
    ModifierCode, 
    StyleCode, 
    StyleCodeArray, 
    StyleCodeType, 
    StyleFunction, 
    symbols
}