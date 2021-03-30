const { expect } = require("@jest/globals");
const { deg2rad } = require("../Core/deg2rad");
const { obtelements } = require("../Core/obtelements");


describe('Transform to IU system:', () => {
    // First test
    test('No entry should return Error ', () => {
        expect(obtelements()).toBeInstanceOf(Error)
    });


})