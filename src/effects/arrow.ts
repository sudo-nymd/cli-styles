import { utils, AnsiColorCode, effects } from "../index";
import { ansiStyles } from '../ansi-styles'
import { EffectsBase, EffectsBaseOptions } from "./effect-base";

/** Enum that specifies options for the direction the Arrow will face. */
export enum ArrowDirections {
    /** Indicates that Arrow.format() should output a right-facing arrow. */
    Right = "right",
    /** Indicates that Arrow.format() should output a left-facing arrow. */
    Left = 'left'
}

/**
 * Options for the arrow.
 */
export type ArrowOptions = EffectsBaseOptions & {
    direction?: ArrowDirections;
}

// Alias for brevity
const codes = ansiStyles.codes;

/** Utility object that contains defaults for the arrow's options. */
const DEFAULT: ArrowOptions = {
    /** Default color for the arrow's text. */
    fgColor: codes.black,

    /** Default color for the arrow's background. */
    bgColor: codes.bgBlueBright,
    
    /** Default direction the arrow will face. */
    direction: ArrowDirections.Right
}

/**
 * A class that generates colorful arrows in the terminal. NOTE: 
 * Requires a Nerd/Powerline font to render correctly.
 */
export class Arrow extends EffectsBase {

    /**
     * Initializes a new instance of the Arrow class.
     * @param options Options for the arrow.
     */
    constructor(options?: ArrowOptions) {
        const opts: unknown = Object.assign(DEFAULT, options);
        super(opts as EffectsBaseOptions);       
    }

    /**
     * Formats the text as a colorful arrow.
     * @param text The text for the arrow.
     * @returns The formatted text as a colorful arrow.
     */
    public override format(text: string) {
    
        // Get the direction the arrow should face, and 
        // find the symbol that will be displayed.
        const direction = this.properties.direction;
        const symbol = effects.symbols.arrows[direction];

        // Get the same color, only as a foreground color
        const invertedFG = utils.convertToForeground(this.properties.bgColor as AnsiColorCode);

        const segments = [
            // "Tail" of error, with transparent "notch"
            utils.transparent(symbol, invertedFG),  
            // Middle section w/text
            super.format(text),
            // "Head" of arrow
            utils.encode(symbol, invertedFG)
        ];

        if (direction === ArrowDirections.Left) {
            // "Flip" horizontally by reversing array
            segments.reverse();
        }

        return segments.join('');
    }

    /**
     * 
     * @param direction The direction the arrow will face.
     * @returns A refence to the current object.
     */
    public direction(direction: ArrowDirections) {
        this.properties.direction = direction;
        // Alow method chaining
        return this;        
    }
}


