"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BackgroundSize;
(function (BackgroundSize) {
    BackgroundSize["AUTO"] = "auto";
    BackgroundSize["COVER"] = "cover";
    BackgroundSize["CONTAIN"] = "contain";
})(BackgroundSize || (BackgroundSize = {}));
var BackgroundRepeat;
(function (BackgroundRepeat) {
    BackgroundRepeat["REPEAT"] = "repeat";
    BackgroundRepeat["REPEAT_X"] = "repeat-x";
    BackgroundRepeat["REPEAT_Y"] = "repeat-y";
    BackgroundRepeat["NO_REPEAT"] = "no-repeat";
})(BackgroundRepeat || (BackgroundRepeat = {}));
var BoxModelPositioning;
(function (BoxModelPositioning) {
    BoxModelPositioning["PADDING_BOX"] = "padding-box";
    BoxModelPositioning["BORDER_BOX"] = "border-box";
    BoxModelPositioning["CONTENT_BOX"] = "content-box";
})(BoxModelPositioning || (BoxModelPositioning = {}));
var BackgroundAttachment;
(function (BackgroundAttachment) {
    BackgroundAttachment["SCROLL"] = "scroll";
    BackgroundAttachment["FIXED"] = "fixed";
    BackgroundAttachment["LOCAL"] = "local";
})(BackgroundAttachment || (BackgroundAttachment = {}));
function background(color = "transparent", image = "none", position = [0, 0], size = "auto", repeat = BackgroundRepeat.REPEAT, origin = BoxModelPositioning.PADDING_BOX, clip = BoxModelPositioning.BORDER_BOX, attachment = BackgroundAttachment.SCROLL) {
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
