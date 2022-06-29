
import * as util from "util";
import { AnsiColorCode, AnsiStyleCode, utils } from "..";
import { ansiStyles } from '../ansi-styles'

const codes = ansiStyles.codes;

const DEFAULT = {
    bgColor: codes.bgBlueBright,
    fgColor: codes.black
}

export type EffectsBaseOptions = {
    bgColor?: AnsiColorCode;
    fgColor?: AnsiColorCode;
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    [name: string]: any;
}

export abstract class EffectsBase {
   
    constructor(options?: EffectsBaseOptions) {
        const opts = Object.assign(DEFAULT, options) as EffectsBaseOptions;
        this._defaultProperties = opts;
        this._properties = Object.assign({}, opts);
    }

    private _defaultProperties: EffectsBaseOptions = {}
    private _properties: EffectsBaseOptions ={}

    public get reset() {
        this._properties = this._defaultProperties;
        return this;
    }

    protected get properties() {
        return this._properties;
    }

    public bgColor(code: AnsiColorCode) {
        this._properties.bgColor = code;
        return this;
    }

    public fgColor(code: AnsiColorCode) {
        this._properties.fgColor = code;
        return this;
    }

    public get bold() {
        this._properties._bold = true;
        return this;
    }

    public get italic() {
        this._properties._italic = true;
        return this;
    }

    public get strikethrough() {
        this._properties._strikethrough = true;
        return this;
    }

    protected format(text: string, useColors = true) {
        let txt = text;
        const { bgColor, fgColor, bold, italic, strikethrough } = this._properties;
 
        if (bold) txt = utils.encode(txt, codes.bold);
        if (italic) txt = utils.encode(txt, codes.italic);
        if (strikethrough) txt = utils.encode(txt, codes.strikethrough);
        if(useColors && fgColor !== undefined) txt = utils.encode(txt, fgColor as AnsiColorCode);
        if(useColors && bgColor !== undefined) txt = utils.encode(txt, bgColor as AnsiColorCode);
        return txt; 
    }
    
}