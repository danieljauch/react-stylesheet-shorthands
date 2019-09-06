"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
function background(color = "transparent", image = "none", position = "0 0", size = "auto", repeat = interfaces_1.BackgroundRepeat.REPEAT, origin = interfaces_1.BoxModelPositioning.PADDING_BOX, clip = interfaces_1.BoxModelPositioning.BORDER_BOX, attachment = interfaces_1.BackgroundAttachment.SCROLL) {
    return {
        backgroundColor: color,
        backgroundImage: image,
        backgroundPosition: position,
        backgroundSize: size,
        backgroundRepeat: repeat,
        backgroundOrigin: origin,
        backgroundClip: clip,
        backgroundAttachment: attachment
    };
}
exports.default = background;
