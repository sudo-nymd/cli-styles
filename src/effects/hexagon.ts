import { utils, AnsiColorCode, effects } from "../index";
import { ansiStyles } from '../ansi-styles'
import * as util from "util";
import { EffectsBase, EffectsBaseOptions } from "./effect-base";

/**
 * Options for the arrow.
 */
export type HexagonOptions = EffectsBaseOptions & {
    
}

// Alias for brevity
const codes = ansiStyles.codes;

/** Utility object that contains defaults for the arrow's options. */
const DEFAULT: HexagonOptions = {
    /** Default color for the arrow's text. */
    fgColor: codes.black,

    /** Default color for the arrow's background. */
    bgColor: codes.bgYellowBright,

    /** Default is bold text. */
    bold: true
}

/**
 * A class that generates colorful hexagons in the terminal. NOTE: 
 * Requires a Nerd/Powerline font to render correctly.
 */
export class Hexagon extends EffectsBase {
    
    /**
     * Initializes a new instance of the Hexagon class.
     * @param options Options for the hexagon.
     */
    constructor(options?: HexagonOptions) {
        const opts: unknown = Object.assign(DEFAULT, options);
        super(opts as EffectsBaseOptions);
    }

    /**
     * Formats the text as a colorful hexagon.
     * @param text The text for the hexagon.
     * @returns The formatted text as a colorful hexagon.
     */
    public override format(text: string) {
        const { bgColor } = this.properties;

        // Get the same color, only as a foreground color
        const afg = utils.convertToForeground(bgColor as AnsiColorCode);

        // A hexagon uses left & right arrows on each site.
        const arrows = effects.symbols.arrows;
        return util.format(
            "%s%s%s",
            utils.encode(arrows.left, afg),
            super.format(text),
            utils.encode(arrows.right, afg)
        );
    }
}



