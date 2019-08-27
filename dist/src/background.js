"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
function background(color = "transparent", image = "none", position = [0, 0], size = "auto", repeat = interfaces_1.BackgroundRepeat.REPEAT, origin = interfaces_1.BoxModelPositioning.PADDING_BOX, clip = interfaces_1.BoxModelPositioning.BORDER_BOX, attachment = interfaces_1.BackgroundAttachment.SCROLL) {
    let styles = {};
    if (color)
        styles.backgroundColor = color;
    if (image)
        styles.backgroundImage = image;
    if (position) {
        if (typeof position === object) {
            styles.backgroundPosition = position.join(" ");
        }
        else {
            styles.backgroundPosition = position;
        }
    }
    if (size)
        styles.backgroundSize = size;
    if (repeat)
        styles.backgroundRepeat = repeat;
    if (origin)
        styles.backgroundOrigin = origin;
    if (clip)
        styles.backgroundClip = clip;
    if (attachment)
        styles.backgroundAttachment = attachment;
    return { ...styles };
}
exports.default = background;
