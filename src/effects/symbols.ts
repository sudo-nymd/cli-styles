type SymbolMap = {
    [key: string]: string;
}

type EnclosedSymbolMap = SymbolMap & {
    left: string;
    right: string;
}

type BracketsSymbolMap = {
    [key: string]: EnclosedSymbolMap;
}

export namespace symbols {
    export const arrows: EnclosedSymbolMap = {
        right: "\ue0b0",
        left: "\ue0b2",
    }

    export const bubbles: EnclosedSymbolMap = {
        left: "\ue0b6",
        right: "\ue0b4"
    }

    export const brackets: BracketsSymbolMap = {
        medium: { left: "❬", right: "❭" },
        heavy: { left: "❰", right: "❱" },
        moon: { left: "❨", right: "❩" },
        shell: { left: "❲", right: "❳" },
        curly: { left: "❴", right: "❵" }
    }

    export const quotes: BracketsSymbolMap = {
        double: { left: "❝", right: "❞" },
        roundDouble: { left: "❠", right: "❠" }
    }
}

export const ModuleName = "symbols"
