class Pencil {
    constructor(durability) {
        this.paper = [];
        this.durability = Number(durability);
    }
    write(text) {
        this.paper.push(String(text));
        return this.paper.join("");
    }
}

module.exports = Pencil;
