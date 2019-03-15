const assert = require("assert");
const expect = require("chai").expect;
const Pencil = require("../src/pencil.js");

describe("Pencil Testing Suite", function() {
    describe("Pencil Write Method", function() {
        it("Should return string passed when calling the write method", function() {
            let pencil = new Pencil();
            expect(pencil.write("Test")).to.equal("Test");
        });

        it("Should return concatenated string when called multiple times", function() {
            let pencil = new Pencil();
            expect(pencil.write("Hello")).to.equal("Hello");
            expect(pencil.write("World")).to.equal("HelloWorld");
        });
    });

    describe("Pencil durability", function() {
        it("Should intialize with a durability value", function() {
            let pencil = new Pencil(100);
            expect(pencil.durability).to.equal(100);
        });

        it("Should degrade durability by 1 when writing lower case characters", function() {
            let pencil = new Pencil(100);
            pencil.write("text");
            expect(pencil.durability).to.equal(96);
        });
    });
});
