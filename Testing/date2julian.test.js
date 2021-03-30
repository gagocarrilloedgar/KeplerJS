const { expect } = require("@jest/globals");
const { date2julian } = require("../Core/date2julian")

// First test

describe("Convert from date to JD", () => {
    test('17/03/2021 00:00:00 should be equal to  2459303.5 ', () => {

        const date = {
            year: 2021,
            month: 3,
            day: 17,
            hour: 0,
            minute: 0,
            second: 0,
        }
        const res = 2459303.5;

        expect(date2julian(date)).toBe(res);
    });

    test("If undefined should return 0", () => {
        expect(date2julian()).toBe(0);
    });

    test("If no parameter should return Error", () => {

        const date = {
            year: 2021,
            month: 3,
            hour: 0,
            minute: 0,
            second: 0,
        }

        expect(date2julian(date)).toBeInstanceOf(Error);
    })

    
})
