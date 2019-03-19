class Pencil {
    constructor(pencilDurability = 100, length = 5, eraserDurability = 50) {
        this.paper = "";
        this.pencilDurability = Number(pencilDurability);
        this.initialPencilDurability = Number(pencilDurability);
        this.length = length;
        this.eraserDurability = Number(eraserDurability);
    }
    write(text) {
        let textToWrite = text.split("");

        for (let letter of textToWrite) {
            if (this.pencilDurability <= 0) {
                this.paper += " ";
            } else {
                if (letter === " " || letter === "\n") {
                    this.paper += letter;
                } else if (letter.toUpperCase() === letter) {
                    this.pencilDurability -= 2;
                    this.paper += letter;
                } else {
                    this.pencilDurability -= 1;
                    this.paper += letter;
                }
            }
        }
        return this.paper;
    }

    sharpen() {
        if (this.length <= 0) {
            return;
        } else {
            this.pencilDurability = this.initialPencilDurability;
            this.length--;
        }
    }

    eraseCharacters(text, length) {
        let replace = `${text}(?!.${text})`;
        let re = new RegExp(replace);
        let spaceString = " ".repeat(length);
        this.paper = this.paper.replace(re, spaceString);
    }

    erase(text) {
        let lengthOfSpaces = text.length;
        let numberOfCharacters = text.replace(/\s|\n|\r/g, "").length;
        this.eraserDurability -= numberOfCharacters;

        if (this.eraserDurability < 0) {
            let lengthToErase = numberOfCharacters + this.eraserDurability;
            if (lengthToErase <= 0) {
                return;
            } else {
                let reverseCharacters = [];
                let textArray = text.split("");

                for (var i = lengthToErase; i > 0; i--) {
                    reverseCharacters.push(textArray.pop());
                }

                let newText = reverseCharacters.reverse().join("");
                this.eraseCharacters(newText, lengthToErase);
            }
        } else {
            this.eraseCharacters(text, lengthOfSpaces);
        }
    }
}

module.exports = Pencil;
