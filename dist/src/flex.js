"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
function flex(grow = 0, shrink = 0, basis = "auto") {
    return {
        flex: `${grow} ${shrink} ${basis}`
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
