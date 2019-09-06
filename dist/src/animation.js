"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
function animation(name = "none", duration = "0s", timingFunction = interfaces_1.TimingFunction.EASE, delay = "0s", iterationCount = 1, direction = interfaces_1.AnimationDirection.NORMAL, fillMode = interfaces_1.AnimationFillMode.NONE, playState = interfaces_1.AnimationPlayState.RUNNING) {
    return {
        animationName: name,
        animationDuration: duration,
        animationTimingFunction: timingFunction,
        animationDelay: delay,
        animationIterationCount: iterationCount,
        animationDirection: direction,
        animationFillMode: fillMode,
        animationPlayState: playState
    };
}
exports.default = animation;
