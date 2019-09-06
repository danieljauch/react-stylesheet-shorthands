"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function backgroundPosition(x, y) {
    return `${x} ${y}`;
}
exports.backgroundPosition = backgroundPosition;
function cubicBezier(x1, x2, y1, y2) {
    return `cubic-bezier(${x1}, ${x2}, ${y1}, ${y2})`;
}
exports.cubicBezier = cubicBezier;
function steps(steps, startingFrom) {
    return `steps(${steps}, ${startingFrom})`;
}
exports.steps = steps;
function transformFunction(name, value) {
    return `${name}(${value})`;
}
exports.transformFunction = transformFunction;
