const { expect } = require("@jest/globals");
const { obtelements } = require("../src/Core/obtelements");


describe('Transform to IU system:', () => {
    // First test
    test('No entry should return Error ', () => {
        expect(obtelements()).toBeInstanceOf(Error)
    });


})