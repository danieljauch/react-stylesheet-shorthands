"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
function font(style = interfaces_1.FontStyle.NORMAL, variant = interfaces_1.FontVariant.NORMAL, weight = interfaces_1.FontWeight.NORMAL, size = interfaces_1.FontSize.MEDIUM, family = "") {
    let styles = {};
    if (style)
        styles.fontStyle = style;
    if (variant)
        styles.fontVariant = variant;
    if (weight)
        styles.fontWeight = weight;
    if (size)
        styles.fontSize = size;
    if (family)
        styles.fontFamily = family;
    return { ...styles };
}
exports.default = font;
