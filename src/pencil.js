class Pencil {
    constructor(durability = 100, length = 5) {
        this.paper = "";
        this.durability = Number(durability);
        this.initialDurability = Number(durability);
        this.length = length;
    }
    write(text) {
        let textToWrite = text.split("");

        for (let letter of textToWrite) {
            if (this.durability <= 0) {
                this.paper += " ";
            } else {
                if (letter === " " || letter === "\n") {
                    continue;
                } else if (letter.toUpperCase() === letter) {
                    this.durability -= 2;
                    this.paper += letter;
                } else {
                    this.durability -= 1;
                    this.paper += letter;
                }
            }
        }
        return this.paper;
    }

    sharpen() {
        this.durability = this.initialDurability;
    }
}

module.exports = Pencil;
