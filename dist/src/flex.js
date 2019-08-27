"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
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
    return {
        flex: grow
    };
}
exports.flex = flex;
function flexFlow(direction = interfaces_1.FlexDirection.ROW, wrap = interfaces_1.FlexWrap.NOWRAP) {
    return {
        flexDirection: direction,
        flexWrap: wrap
    };
}
exports.flexFlow = flexFlow;
