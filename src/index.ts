export * as effects from './effects';

export { 
    AnsiStyleCodeTypes, 
    AnsiColorCodeTypes, 
    AnsiStyleCode,
    AnsiColorCode,
    AnsiTransparentCode,
    AnsiModifierCode,
    AnyStyleCode,
    IAnsiStyles,
    IAnsiStyleCodes,
    StyleCodeArray,
    StyleCodeDictionary,
    StyleFunction
} from './common/types';

export { utils } from './common/ansi-utils';

// import { createInstance } from './ansi-styles';
// export const ansiStyles = createInstance();
// console.log('index: ' + ansiStyles);
export { ansiStyles } from './ansi-styles'
