"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cubicBezierToValue({ x1, x2, y1, y2 }) {
    return `cubic-bezier(${x1}, ${x2}, ${y1}, ${y2})`;
}
exports.cubicBezierToValue = cubicBezierToValue;
function durationToValue({ value, unit }) {
    return `${value}${unit}`;
}
exports.durationToValue = durationToValue;
