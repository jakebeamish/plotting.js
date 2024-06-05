import { fract } from "../../utils";

describe('fract', () => {
    test('It returns 0.42 with input of 1.42', () => {
        let x = fract(1.42);
        expect(x).toBeCloseTo(0.42);
    });

    test('It returns 0.77 with input of -42.23', () => {
        let x = fract(-42.23);
        expect(x).toBeCloseTo(0.77);
    });

    test('It returns numbers in the range [0,1)', () => {
        for (let i = 0; i < 100; i++) {
            let x = fract(Math.random() * 0xFFFFFF);
            expect(x).toBeGreaterThanOrEqual(0)
            expect(x).toBeLessThan(1)
        }
    })
});