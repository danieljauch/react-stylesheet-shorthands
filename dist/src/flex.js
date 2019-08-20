"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FlexDirection;
(function (FlexDirection) {
})(FlexDirection || (FlexDirection = {}));
{
    ROW = "row";
    ROW_REVERSE = "row-reverse";
    COLUMN = "column";
    COLUMN_REVERSE = "column-reverse";
}
var FlexWrap;
(function (FlexWrap) {
    FlexWrap["NOWRAP"] = "nowrap";
    FlexWrap["WRAP"] = "wrap";
    FlexWrap["WRAP_REVERSE"] = "wrap-reverse";
})(FlexWrap || (FlexWrap = {}));
function flex(grow = 0, shrink = 0, basis = "auto") {
    if (basis) {
        return {
            flex: `${grow} ${shrink} ${basis}`
        };
    }
    else if (shrink) {
        return {
            flex: `${grow} ${shrink}`
        };
    }
    else {
        return {
            flex: grow
        };
    }
}
exports.flex = flex;
function flexFlow(direction = FlexDirection.ROW, wrap = FlexWrap.NOWRAP) {
    return {
        flexDirection: direction,
        flexWrap: wrap
    };
}
exports.flexFlow = flexFlow;
