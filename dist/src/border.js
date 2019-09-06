"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
function borderTop(width = "1px", style = interfaces_1.BorderStyleValue.SOLID, color = "#000") {
    return {
        borderTopWidth: width,
        borderTopStyle: style,
        borderTopColor: color
    };
}
exports.borderTop = borderTop;
function borderRight(width = "1px", style = interfaces_1.BorderStyleValue.SOLID, color = "#000") {
    return {
        borderRightWidth: width,
        borderRightStyle: style,
        borderRightColor: color
    };
}
exports.borderRight = borderRight;
function borderLeft(width = "1px", style = interfaces_1.BorderStyleValue.SOLID, color = "#000") {
    return {
        borderLeftWidth: width,
        borderLeftStyle: style,
        borderLeftColor: color
    };
}
exports.borderLeft = borderLeft;
function borderBottom(width = "1px", style = interfaces_1.BorderStyleValue.SOLID, color = "#000") {
    return {
        borderBottomWidth: width,
        borderBottomStyle: style,
        borderBottomColor: color
    };
}
exports.borderBottom = borderBottom;
function borderVertical(width = "1px", style = interfaces_1.BorderStyleValue.SOLID, color = "#000") {
    return {
        borderVerticalWidth: width,
        borderVerticalStyle: style,
        borderVerticalColor: color
    };
}
exports.borderVertical = borderVertical;
function borderHorizontal(width = "1px", style = interfaces_1.BorderStyleValue.SOLID, color = "#000") {
    return {
        borderHorizontalWidth: width,
        borderHorizontalStyle: style,
        borderHorizontalColor: color
    };
}
exports.borderHorizontal = borderHorizontal;
function border(width = "1px", style = interfaces_1.BorderStyleValue.SOLID, color = "#000") {
    return {
        borderWidth: width,
        borderStyle: style,
        borderColor: color
    };
}
exports.border = border;
function allBorders({ top, right, bottom, left }) {
    let styles = {};
    if (top)
        styles = { ...styles, ...borderTop(top[0], top[1], top[2]) };
    if (right)
        styles = { ...styles, ...borderRight(right[0], right[1], right[2]) };
    if (bottom) {
        styles = { ...styles, ...borderBottom(bottom[0], bottom[1], bottom[2]) };
    }
    if (left)
        styles = { ...styles, ...borderLeft(left[0], left[1], left[2]) };
    return styles;
}
exports.allBorders = allBorders;
function someBorders(sides, ...borderStyles) {
    let styles = {};
    for (let side = 0, l = sides.length; side < l; side++) {
        switch (sides[side]) {
            case interfaces_1.BorderSide.VERTICAL:
                styles = {
                    ...styles,
                    ...borderVertical(borderStyles[0], borderStyles[1], borderStyles[2])
                };
                break;
            case interfaces_1.BorderSide.HORIZONTAL:
                styles = {
                    ...styles,
                    ...borderHorizontal(borderStyles[0], borderStyles[1], borderStyles[2])
                };
                break;
            case interfaces_1.BorderSide.BOTTOM:
                styles = {
                    ...styles,
                    ...borderBottom(borderStyles[0], borderStyles[1], borderStyles[2])
                };
                break;
            case interfaces_1.BorderSide.LEFT:
                styles = {
                    ...styles,
                    ...borderLeft(borderStyles[0], borderStyles[1], borderStyles[2])
                };
                break;
            case interfaces_1.BorderSide.RIGHT:
                styles = {
                    ...styles,
                    ...borderRight(borderStyles[0], borderStyles[1], borderStyles[2])
                };
                break;
            case interfaces_1.BorderSide.TOP:
            default:
                styles = { ...styles,
                    ...borderTop(borderStyles[0], borderStyles[1], borderStyles[2])
                };
        }
    }
    return { ...styles };
}
exports.someBorders = someBorders;
function borderRadius(...args) {
    if (!args)
        return {};
    if (args.length === 1) {
        return { borderRadius: args[0] };
    }
    else if (args.length === 2) {
        return {
            borderTopLeftRadius: args[0],
            borderTopRightRadius: args[1],
            borderBottomRightRadius: args[0],
            borderBottomLeftRadius: args[1]
        };
    }
    else if (args.length === 3) {
        return {
            borderTopLeftRadius: args[0],
            borderTopRightRadius: args[1],
            borderBottomRightRadius: args[2],
            borderBottomLeftRadius: args[1]
        };
    }
    return {
        borderTopLeftRadius: args[0],
        borderTopRightRadius: args[1],
        borderBottomRightRadius: args[2],
        borderBottomLeftRadius: args[3]
    };
}
exports.borderRadius = borderRadius;
