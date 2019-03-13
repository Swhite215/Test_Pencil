const assert = require("assert");
const expect = require("chai").expect;

describe("Pencil Testing Suite", function() {
    describe("Pencil Write Method", function() {
        it("Should return string passed when calling the write method", function() {
            expect(pencil.write("Test")).to.equal("Test");
        });
    });
});