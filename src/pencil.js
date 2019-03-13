class Pencil {
    constructor() {
        this.paper = [];
    }
    write(text) {
        this.paper.push(String(text));
        return this.paper.join("");
    }
}

module.exports = Pencil;
