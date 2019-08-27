"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
function transform(...args) {
    return {
        transform: args.map(normalizeTransformArg).join(" ")
    };
}
exports.default = transform;
const normalizeTransformArg = (arg) => {
    if (typeof arg === "object") {
        return helpers_1.transformFunctionToValue(arg);
    }
    return arg;
};
