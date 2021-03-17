const { expect } = require("@jest/globals");
const { deg2rad } = require("../Core/deg2rad")


// First test
test('180 degrees should equal pi ', () => {
    const x = 180;
    expect(deg2rad(x)).toBe(Math.PI);
})


test('360 degrees should equal 2 * pi ', () => {
    const x = 360;
    expect(deg2rad(x)).toBe(2 * Math.PI);
})

test('0 degrees should equal 0 ', () => {
    const x = 0;
    expect(deg2rad(x)).toBe(0);
})

