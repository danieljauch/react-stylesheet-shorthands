"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
var BorderSide;
(function (BorderSide) {
    BorderSide["TOP"] = "top";
    BorderSide["RIGHT"] = "right";
    BorderSide["BOTTOM"] = "bottom";
    BorderSide["LEFT"] = "left";
})(BorderSide || (BorderSide = {}));
{
    width: DurationValue | StyleValue,
        style;
    interfaces_1.BorderStyleValue,
        color;
    string;
}
const borderDefaults = {
    width: "1px",
    style: "solid",
    color: "#000"
};
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
function allBorders({ top: BorderStyles = borderDefaults, right: BorderStyles = borderDefaults, bottom: BorderStyles = borderDefaults, left: BorderStyles = borderDefaults }) {
    return {
        ...borderTop(top.width, top.style, top.color),
        ...borderRight(right.width, right.style, right.color),
        ...borderBottom(bottom.width, bottom.style, bottom.color),
        ...borderLeft(left.width, left.style, left.color)
    };
}
exports.allBorders = allBorders;
function someBorders(sides, ...borderStyles) {
    let styles = {};
    for (let side = 0, l = sides.length; side < l; side++) {
        switch (sides[side]) {
            case BorderSide.BOTTOM:
                styles = { ...styles, ...borderBottom(borderStyles) };
                break;
            case BorderSide.LEFT:
                styles = { ...styles, ...borderLeft(borderStyles) };
                break;
            case BorderSide.RIGHT:
                styles = { ...styles, ...borderRight(borderStyles) };
                break;
            case BorderSide.TOP:
            default:
                styles = { ...styles, ...borderTop(borderStyles) };
        }
    }
    return styles;
}
exports.someBorders = someBorders;
function borderRadius(...args) {
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
    else {
        return {
            borderTopLeftRadius: args[0],
            borderTopRightRadius: args[1],
            borderBottomRightRadius: args[2],
            borderBottomLeftRadius: args[3]
        };
    }
}
exports.borderRadius = borderRadius;
