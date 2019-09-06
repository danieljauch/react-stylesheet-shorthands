"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
function font(style = interfaces_1.FontStyle.NORMAL, variant = interfaces_1.FontVariant.NORMAL, weight = interfaces_1.FontWeight.NORMAL, size = interfaces_1.FontSize.MEDIUM, family = "") {
    return {
        fontStyle: style,
        fontVariant: variant,
        fontWeight: weight,
        fontSize: size,
        fontFamily: family
    };
}
exports.default = font;
