"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function margin(...args) {
    if (args.length === 1) {
        return { margin: args[0] };
    }
    else if (args.length === 2) {
        return {
            marginVertical: args[0],
            marginHorizontal: args[1]
        };
    }
    else if (args.length === 3) {
        return {
            marginTop: args[0],
            marginHorizontal: args[1],
            marginBottom: args[2]
        };
    }
    return {
        marginTop: args[0],
        marginRight: args[1],
        marginBottom: args[2],
        marginLeft: args[3]
    };
}
exports.default = margin;
