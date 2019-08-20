"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
var TimingFunction;
(function (TimingFunction) {
    TimingFunction["LINEAR"] = "linear";
    TimingFunction["EASE"] = "ease";
    TimingFunction["EASE_IN"] = "ease-in";
    TimingFunction["EASE_OUT"] = "ease-out";
    TimingFunction["EASE_IN_OUT"] = "ease-in-out";
    TimingFunction["STEP_START"] = "step-start";
    TimingFunction["STEP_END"] = "step-end";
})(TimingFunction || (TimingFunction = {}));
{
    steps: number,
        startingFrom;
    "start" | "end";
}
function stepsToValue({ steps, startingFrom }) {
    return `steps(${steps}, ${startingFrom})`;
}
var AnimationDirection;
(function (AnimationDirection) {
    AnimationDirection["NORMAL"] = "normal";
    AnimationDirection["REVERSE"] = "reverse";
    AnimationDirection["ALTERNATE"] = "alternate";
    AnimationDirection["ALTERNATE_REVERSE"] = "alternate-reverse";
})(AnimationDirection || (AnimationDirection = {}));
var AnimationFillMode;
(function (AnimationFillMode) {
    AnimationFillMode["NONE"] = "none";
    AnimationFillMode["FORWARDS"] = "forwards";
    AnimationFillMode["BACKWARDS"] = "backwards";
    AnimationFillMode["BOTH"] = "both";
})(AnimationFillMode || (AnimationFillMode = {}));
var AnimationPlayState;
(function (AnimationPlayState) {
    AnimationPlayState["PAUSED"] = "paused";
    AnimationPlayState["RUNNING"] = "running";
})(AnimationPlayState || (AnimationPlayState = {}));
function animation(name = "none", duration = "0s", timingFunction = TimingFunction.EASE, delay = "0s", iterationCount = 1, direction = AnimationDirection.NORMAL, fillMode = AnimationFillMode.NONE, playState = AnimationPlayState.RUNNING) {
    const animationProperties = {};
    if (name) {
        animationProperties.animationName = name;
    }
    if (duration) {
        if (duration === "initial" || duration === "inherit") {
            animationProperties.animationDuration = duration;
        }
        else {
            animationProperties.animationDuration = helpers_1.durationToValue(duration);
        }
    }
    if (timingFunction) {
        animationProperties.animationTimingFunction = timingFunction;
    }
    if (delay) {
        if (delay === "initial" || delay === "inherit") {
            animationProperties.animationDelay = delay;
        }
        else {
            animationProperties.animationDelay = helpers_1.durationToValue(delay);
        }
    }
    if (iterationCount) {
        animationProperties.animationIterationCount = iterationCount;
    }
    if (direction) {
        animationProperties.animationDirection = direction;
    }
    if (fillMode) {
        animationProperties.animationFillMode = fillMode;
    }
    if (playState) {
        animationProperties.animationPlayState = playState;
    }
    return animationProperties;
}
exports.default = animation;
