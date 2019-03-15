class Pencil {
    constructor(durability) {
        this.paper = [];
        this.durability = Number(durability);
    }
    write(text) {
        let textToWrite = text.split("");

        for (let letter of textToWrite) {
            if (letter === " " || letter === "\n") {
                continue;
            } else if (letter.toUpperCase() === letter) {
                this.durability -= 2;
            } else {
                this.durability -= 1;
            }
        }

        this.paper.push(String(text));
        return this.paper.join("");
    }
}

module.exports = Pencil;
