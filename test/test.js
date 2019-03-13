const assert = require("assert");
const expect = require("chai").expect;
const Pencil = require("../src/pencil.js");

describe("Pencil Testing Suite", function() {
    describe("Pencil Write Method", function() {
        it("Should return string passed when calling the write method", function() {
            let pencil = new Pencil();
            expect(pencil.write("Test")).to.equal("Test");
        });
    });
});