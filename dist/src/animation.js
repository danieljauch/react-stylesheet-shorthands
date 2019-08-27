"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
const helpers_1 = require("./helpers");
function animation(name = "none", duration = "0s", timingFunction = interfaces_1.TimingFunction.EASE, delay = "0s", iterationCount = 1, direction = interfaces_1.AnimationDirection.NORMAL, fillMode = interfaces_1.AnimationFillMode.NONE, playState = interfaces_1.AnimationPlayState.RUNNING) {
    let styles = {};
    if (name) {
        styles.animationName = name;
    }
    if (duration) {
        if (duration === "initial" || duration === "inherit") {
            styles.animationDuration = duration;
        }
        else {
            styles.animationDuration = helpers_1.durationToValue(duration);
        }
    }
    if (timingFunction) {
        styles.animationTimingFunction = timingFunction;
    }
    if (delay) {
        if (delay === "initial" || delay === "inherit") {
            styles.animationDelay = delay;
        }
        else {
            styles.animationDelay = helpers_1.durationToValue(delay);
        }
    }
    if (iterationCount) {
        styles.animationIterationCount = iterationCount;
    }
    if (direction) {
        styles.animationDirection = direction;
    }
    if (fillMode) {
        styles.animationFillMode = fillMode;
    }
    if (playState) {
        styles.animationPlayState = playState;
    }
    return { ...styles };
}
exports.default = animation;
