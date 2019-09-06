"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transform(...args) {
    return {
        transform: args.join(" ")
    };
}
exports.default = transform;
