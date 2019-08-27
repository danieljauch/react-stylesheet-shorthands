"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
describe("cubicBezierToValue", () => {
    const cubicBezier = { x1: 0.5, x2: 0.15, y1: 0.5, y2: 0.85 };
    it("converts to a string", () => {
        const { x1, x2, y1, y2 } = cubicBezier;
        expect(helpers_1.cubicBezierToValue(cubicBezier)).toBe(`cubic-bezier(${x1}, ${x2}, ${y1}, ${y2})`);
    });
});
describe("durationToValue", () => {
    it("", () => { });
});
describe("stepsToValue", () => {
    it("", () => { });
});
describe("transformFunctionToValue", () => {
    it("", () => { });
});
