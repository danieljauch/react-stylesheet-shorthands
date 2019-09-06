"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
function transition(property = "all", duration = "0s", timingFunction = interfaces_1.TimingFunction.EASE, delay = "0s") {
    return {
        transitionProperty: property,
        transitionDuration: duration,
        transitionTimingFunction: timingFunction,
        transitionDelay: delay
    };
}
exports.default = transition;
