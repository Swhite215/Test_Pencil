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

        it("Should degrade by 1 when writing lower case characters", function() {
            let pencil = new Pencil(100);
            pencil.write("text");
            expect(pencil.durability).to.equal(96);
        });

        it("Should degrade by 2 when writing upper case characters", function() {
            let pencil = new Pencil(100);
            pencil.write("TEST");
            expect(pencil.durability).to.equal(92);

            pencil.write("Test");
            expect(pencil.durability).to.equal(87);
        });

        it("Should not degrade if writing spaces", function() {
            let pencil = new Pencil(100);
            pencil.write("T  T");
            expect(pencil.durability).to.equal(96);
        });

        it("Should not degrade if writing newlines", function() {
            let pencil = new Pencil(100);
            pencil.write("T\n\nT");
            expect(pencil.durability).to.equal(96);

            pencil.write(`a
            `);
            expect(pencil.durability).to.equal(95);
        });

        it("Should cause spaces to be written if fully degraded", function() {
            let pencil = new Pencil(4);
            expect(pencil.write("write")).to.equal("writ ");

            let pencilTwo = new Pencil(4);
            expect(pencilTwo.write("Testing")).to.equal("Tes    ");
        });

        it("Should regain durability each time it is sharpened", function() {
            let pencil = new Pencil(4);
            pencil.write("Hello World");
            pencil.sharpen();
            expect(pencil.durability).to.equal(4);
        });
    });

    describe("Pencil Length", function() {
        it("Should intialize with a length value", function() {
            let pencil = new Pencil(4, 5);
            expect(pencil.length).to.equal(5);
        });
    });
});
