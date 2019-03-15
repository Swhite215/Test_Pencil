class Pencil {
    constructor(durability) {
        this.paper = [];
        this.durability = Number(durability);
    }
    write(text) {
        this.durability = this.durability - text.length;

        this.paper.push(String(text));
        return this.paper.join("");
    }
}

module.exports = Pencil;
