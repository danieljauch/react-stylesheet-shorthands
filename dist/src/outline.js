"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
function outline(width = interfaces_1.OutlineWidth.MEDIUM, style = interfaces_1.BorderStyleValue.NONE, color) {
    return {
        outlineWidth: width,
        outlineStyle: style,
        outlineColor: color
    };
}
exports.default = outline;
