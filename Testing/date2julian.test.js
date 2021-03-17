const { expect } = require("@jest/globals");
const { date2julian } = require("../Core/date2julian")

// First test
test('17/03/2021 00:00:00 should be equal to  2459303.5 ', () => {
    const y = 2021;
    const m = 3;
    const d = 17;
    const h = 0;
    const min = 0;
    const s = 0;

    const res =  2459303.5;

    expect(date2julian(y, m, d, h, min, s)).toBe(res);
})
