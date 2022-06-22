import { AnsiColorCode, AnsiColorCodeTypes, AnsiStyleCode, AnsiStyleCodeTypes, AnyStyleCode } from './types';
import { AnsiStyleCodes } from './colors';
import * as util from 'util';

const transCode = AnsiStyleCodes.find((code) => {
    return code.name === 'transparent';
});

export const ModuleName = 'ansi-utils';

/**
 * Encodes a string with the ansi escape color/modifier codes.
 * @param code The ansi code to use.
 * @param text The text to encode.
 * @returns The encoded stext.
*/
export const encode = (text: string, code: AnyStyleCode) => {
    if (text === null || text === undefined) {
        throw new ReferenceError(`Argument [text] cannot be "${text}"!`)
    }
    validateAnsiStyleCode(code as AnsiStyleCode);
    return util.format("\x1b[%sm%s\x1b[%sm", code.value[0], text, code.value[1]); 
}

/**
 * Converts a foreground color code to it's corresponding color code.
 * @param fgCode The foreground color code to convert.
 * @returns The corresponding background color code.
 */
export const convertToBackground = (fgCode: AnsiColorCode): AnsiColorCode => {

    validateAnsiColorCode(fgCode, {
        name: '',
        type: AnsiStyleCodeTypes.Color,
        colorType: AnsiColorCodeTypes.Foreground | AnsiColorCodeTypes.ForegroundBright,
        value: [0, 0]
    })

    const { name, type, value, colorType } = fgCode;

    if (colorType !== AnsiColorCodeTypes.Foreground && colorType !== AnsiColorCodeTypes.ForegroundBright) {
        throw new TypeError(`Invalid class "${colorType}": Class must be either "${AnsiColorCodeTypes.Foreground}" or "${AnsiColorCodeTypes.ForegroundBright}".`);
    }

    const newName = 'bg' + name[0].toUpperCase() + name.substring(1);

    return {
        name: newName,
        value: [value[0] + 10, value[1] + 10],
        type: type,
        colorType: (colorType & AnsiColorCodeTypes.Bright) ? AnsiColorCodeTypes.BackgroundBright : AnsiColorCodeTypes.Background
    }
}

export const convertToForeground = (backgroundCode: AnsiColorCode): AnsiColorCode => {

    validateAnsiColorCode(backgroundCode, {
        name: '',
        type: AnsiStyleCodeTypes.Color,
        colorType: AnsiColorCodeTypes.Background | AnsiColorCodeTypes.BackgroundBright,
        value: [0, 0]
    })

    const { name, type, value, colorType } = backgroundCode;

    if (colorType !== AnsiColorCodeTypes.Background && colorType !== AnsiColorCodeTypes.BackgroundBright) {
        throw new TypeError(`Invalid class "${colorType}": Class must be either "${AnsiColorCodeTypes.Background}" or "${AnsiColorCodeTypes.BackgroundBright}".`);
    }

    let newName = name.replace(/^(bg)/, '');
    newName = newName[0].toLowerCase() + newName.substring(1);

    return {
        name: newName,
        value: [value[0] - 10, value[1] - 10],
        type: type,
        colorType: (colorType & AnsiColorCodeTypes.Bright) ? AnsiColorCodeTypes.ForegroundBright : AnsiColorCodeTypes.Foreground
    }
}

const validateAnsiColorCode = (actual: AnsiColorCode, expected?: AnsiColorCode) => {
    validateAnsiStyleCode(actual as AnsiStyleCode, expected as AnsiStyleCode);

    if (actual.colorType === undefined || actual.colorType === null) { throw new TypeError(`Code property [colorType] cannot be "${actual.colorType}"!`) }
}

const validateAnsiStyleCode = (actual: AnsiStyleCode, expected?: AnsiStyleCode) => {
    if (actual === undefined || actual === null) {
        throw new ReferenceError(`Argument [code] cannot be "${actual}"!`);
    }

    if (actual.name === undefined || actual.name === null || actual.name.trim().length === 0) { throw new TypeError(`Code property [name] cannot be "${actual.name}"!`) }
    if (actual.type === undefined || actual.type === null) { throw new TypeError(`Code property [type] cannot be "${actual.type}"!`)}
    if (expected !== null && expected !== undefined) {

        if (actual.type !== expected.type) { throw new TypeError(`Code property [type] "${actual.type}" should equal "${expected.type}"!`) }
    }
    if (actual.value === undefined || actual.value === null) { throw new TypeError(`Code property [value] cannot be "${actual.value}"!`) }
    if (Array.isArray(actual.value) === false) { throw new TypeError(`Code property [value] should be of type "array"!`) }
    if (actual.value.length < 2) { throw new TypeError(`Code property [value] should have a length of at least 2!`) }
}

/**
 * Terminates the text with the ansi reset code (0).
 * @param text The text to terminate.
 * @returns The text terminated with the reset escape code (0).
*/
export const terminate = (text: string) => {
    if (text === null || text === undefined || typeof text !== 'string' || text.trim().length == 0) {
        throw new ReferenceError(`Argument [text] cannot be "${text}"!`)
    }
    return util.format("%s\x1b[0m", text);
}

export const transparent = (text: string, background: AnsiColorCode) => {
    if (text === null || text === undefined || typeof text !== 'string' || text.trim().length == 0) {
        throw new ReferenceError(`Argument [text] cannot be "${text}"!`)
    }
    validateAnsiColorCode(background)
    return (util.format("\x1b[%s;%sm\x1b[%sm%s\x1b[0m", background.value[0], transCode?.value[0], transCode?.value[1], text));
}

