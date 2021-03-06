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

    describe("Pencil Durability Value", function() {
        it("Should intialize with a durability value", function() {
            let pencil = new Pencil(100);
            expect(pencil.pencilDurability).to.equal(100);
        });

        it("Should degrade by 1 when writing lower case characters", function() {
            let pencil = new Pencil(100);
            pencil.write("text");
            expect(pencil.pencilDurability).to.equal(96);
        });

        it("Should degrade by 2 when writing upper case characters", function() {
            let pencil = new Pencil(100);
            pencil.write("TEST");
            expect(pencil.pencilDurability).to.equal(92);

            pencil.write("Test");
            expect(pencil.pencilDurability).to.equal(87);
        });

        it("Should not degrade if writing spaces", function() {
            let pencil = new Pencil(100);
            pencil.write("T  T");
            expect(pencil.pencilDurability).to.equal(96);
        });

        it("Should not degrade if writing newlines", function() {
            let pencil = new Pencil(100);
            pencil.write("T\n\nT");
            expect(pencil.pencilDurability).to.equal(96);

            pencil.write(`a
            `);
            expect(pencil.pencilDurability).to.equal(95);
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
            expect(pencil.pencilDurability).to.equal(4);
        });
    });

    describe("Pencil Length Value", function() {
        it("Should intialize with a length value", function() {
            let pencil = new Pencil(4, 5);
            expect(pencil.length).to.equal(5);
        });

        it("Should descrease by one each time it is sharpened", function() {
            let pencil = new Pencil(4, 2);
            pencil.write("test");
            pencil.sharpen();
            pencil.write("test");
            pencil.sharpen();
            pencil.write("test");
            pencil.sharpen();
            expect(pencil.pencilDurability).to.equal(0);
        });
    });

    describe("Pencil Eraser Durability", function() {
        it("Should intialize with a durability value", function() {
            let pencil = new Pencil(20, 5, 10);
            expect(pencil.eraserDurability).to.equal(10);
        });

        it("Should degrade by 1 when erasing any character except for white space", function() {
            let pencil = new Pencil(20, 5, 10);
            pencil.write("This is a Test");
            pencil.erase("Test");
            expect(pencil.eraserDurability).to.equal(6);

            pencil.erase("is a");
            expect(pencil.eraserDurability).to.equal(3);
        });

        it("Should not erase when eraser durability is zero", function() {
            let pencil = new Pencil(20, 5, 3);
            pencil.write("Buffalo Bill");
            pencil.erase("Bill");
            expect(pencil.paper).to.equal("Buffalo B   ");
            pencil.erase("Buffalo");
            expect(pencil.paper).to.equal("Buffalo B   ");
        });
    });

    describe("Pencil Erase Method", function() {
        it("Should replace last occurence of text with spaces", function() {
            let pencil = new Pencil(20, 5);
            pencil.write("Hello World.");
            pencil.erase("World");
            expect(pencil.paper).to.equal("Hello      .");

            let pencilTwo = new Pencil(20, 5);
            pencilTwo.write("world world world world");
            pencilTwo.erase("world");
            expect(pencilTwo.paper).to.equal("world world world      ");

            pencilTwo.erase("world");
            expect(pencilTwo.paper).to.equal("world world            ");
        });
    });
});
