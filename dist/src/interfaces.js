"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimationDirection;
(function (AnimationDirection) {
    AnimationDirection["NORMAL"] = "normal";
    AnimationDirection["REVERSE"] = "reverse";
    AnimationDirection["ALTERNATE"] = "alternate";
    AnimationDirection["ALTERNATE_REVERSE"] = "alternate-reverse";
})(AnimationDirection = exports.AnimationDirection || (exports.AnimationDirection = {}));
var AnimationFillMode;
(function (AnimationFillMode) {
    AnimationFillMode["NONE"] = "none";
    AnimationFillMode["FORWARDS"] = "forwards";
    AnimationFillMode["BACKWARDS"] = "backwards";
    AnimationFillMode["BOTH"] = "both";
})(AnimationFillMode = exports.AnimationFillMode || (exports.AnimationFillMode = {}));
var AnimationPlayState;
(function (AnimationPlayState) {
    AnimationPlayState["PAUSED"] = "paused";
    AnimationPlayState["RUNNING"] = "running";
})(AnimationPlayState = exports.AnimationPlayState || (exports.AnimationPlayState = {}));
var BackgroundAttachment;
(function (BackgroundAttachment) {
    BackgroundAttachment["SCROLL"] = "scroll";
    BackgroundAttachment["FIXED"] = "fixed";
    BackgroundAttachment["LOCAL"] = "local";
})(BackgroundAttachment = exports.BackgroundAttachment || (exports.BackgroundAttachment = {}));
var BackgroundRepeat;
(function (BackgroundRepeat) {
    BackgroundRepeat["REPEAT"] = "repeat";
    BackgroundRepeat["REPEAT_X"] = "repeat-x";
    BackgroundRepeat["REPEAT_Y"] = "repeat-y";
    BackgroundRepeat["NO_REPEAT"] = "no-repeat";
})(BackgroundRepeat = exports.BackgroundRepeat || (exports.BackgroundRepeat = {}));
var BackgroundSize;
(function (BackgroundSize) {
    BackgroundSize["AUTO"] = "auto";
    BackgroundSize["COVER"] = "cover";
    BackgroundSize["CONTAIN"] = "contain";
})(BackgroundSize = exports.BackgroundSize || (exports.BackgroundSize = {}));
var BorderSide;
(function (BorderSide) {
    BorderSide["TOP"] = "top";
    BorderSide["RIGHT"] = "right";
    BorderSide["BOTTOM"] = "bottom";
    BorderSide["LEFT"] = "left";
    BorderSide["VERTICAL"] = "vertical";
    BorderSide["HORIZONTAL"] = "horizontal";
})(BorderSide = exports.BorderSide || (exports.BorderSide = {}));
var BorderStyleValue;
(function (BorderStyleValue) {
    BorderStyleValue["NONE"] = "none";
    BorderStyleValue["HIDDEN"] = "hidden";
    BorderStyleValue["DOTTED"] = "dotted";
    BorderStyleValue["DASHED"] = "dashed";
    BorderStyleValue["SOLID"] = "solid";
    BorderStyleValue["DOUBLE"] = "double";
    BorderStyleValue["GROOVE"] = "groove";
    BorderStyleValue["RIDGE"] = "ridge";
    BorderStyleValue["INSET"] = "inset";
    BorderStyleValue["OUTSET"] = "outset";
})(BorderStyleValue = exports.BorderStyleValue || (exports.BorderStyleValue = {}));
var BoxModelPositioning;
(function (BoxModelPositioning) {
    BoxModelPositioning["PADDING_BOX"] = "padding-box";
    BoxModelPositioning["BORDER_BOX"] = "border-box";
    BoxModelPositioning["CONTENT_BOX"] = "content-box";
})(BoxModelPositioning = exports.BoxModelPositioning || (exports.BoxModelPositioning = {}));
var ColumnRuleWidth;
(function (ColumnRuleWidth) {
    ColumnRuleWidth["MEDIUM"] = "medium";
    ColumnRuleWidth["THIN"] = "thin";
    ColumnRuleWidth["THICK"] = "thick";
})(ColumnRuleWidth = exports.ColumnRuleWidth || (exports.ColumnRuleWidth = {}));
var DefaultValues;
(function (DefaultValues) {
    DefaultValues["INITIAL"] = "initial";
    DefaultValues["INHERIT"] = "inherit";
})(DefaultValues = exports.DefaultValues || (exports.DefaultValues = {}));
var FlexDirection;
(function (FlexDirection) {
    FlexDirection["ROW"] = "row";
    FlexDirection["ROW_REVERSE"] = "row-reverse";
    FlexDirection["COLUMN"] = "column";
    FlexDirection["COLUMN_REVERSE"] = "column-reverse";
})(FlexDirection = exports.FlexDirection || (exports.FlexDirection = {}));
var FlexWrap;
(function (FlexWrap) {
    FlexWrap["NOWRAP"] = "nowrap";
    FlexWrap["WRAP"] = "wrap";
    FlexWrap["WRAP_REVERSE"] = "wrap-reverse";
})(FlexWrap = exports.FlexWrap || (exports.FlexWrap = {}));
var FontSize;
(function (FontSize) {
    FontSize["MEDIUM"] = "medium";
    FontSize["XX_SMALL"] = "xx-small";
    FontSize["X_SMALL"] = "x-small";
    FontSize["SMALL"] = "small";
    FontSize["LARGE"] = "large";
    FontSize["X_LARGE"] = "x-large";
    FontSize["XX_LARGE"] = "xx-large";
    FontSize["SMALLER"] = "smaller";
    FontSize["LARGER"] = "larger";
})(FontSize = exports.FontSize || (exports.FontSize = {}));
var FontStyle;
(function (FontStyle) {
    FontStyle["NORMAL"] = "normal";
    FontStyle["ITALIC"] = "italic";
    FontStyle["OBLIQUE"] = "oblique";
})(FontStyle = exports.FontStyle || (exports.FontStyle = {}));
var FontVariant;
(function (FontVariant) {
    FontVariant["NORMAL"] = "normal";
    FontVariant["SMALL_CAPS"] = "small-caps";
})(FontVariant = exports.FontVariant || (exports.FontVariant = {}));
var FontWeight;
(function (FontWeight) {
    FontWeight["NORMAL"] = "normal";
    FontWeight["BOLD"] = "bold";
    FontWeight["BOLDER"] = "bolder";
    FontWeight["LIGHTER"] = "lighter";
    FontWeight[FontWeight["WEIGHT_100"] = 100] = "WEIGHT_100";
    FontWeight[FontWeight["WEIGHT_200"] = 200] = "WEIGHT_200";
    FontWeight[FontWeight["WEIGHT_300"] = 300] = "WEIGHT_300";
    FontWeight[FontWeight["WEIGHT_400"] = 400] = "WEIGHT_400";
    FontWeight[FontWeight["WEIGHT_500"] = 500] = "WEIGHT_500";
    FontWeight[FontWeight["WEIGHT_600"] = 600] = "WEIGHT_600";
    FontWeight[FontWeight["WEIGHT_700"] = 700] = "WEIGHT_700";
    FontWeight[FontWeight["WEIGHT_800"] = 800] = "WEIGHT_800";
    FontWeight[FontWeight["WEIGHT_900"] = 900] = "WEIGHT_900";
})(FontWeight = exports.FontWeight || (exports.FontWeight = {}));
var OutlineWidth;
(function (OutlineWidth) {
    OutlineWidth["MEDIUM"] = "medium";
    OutlineWidth["THIN"] = "thin";
    OutlineWidth["THICK"] = "thick";
})(OutlineWidth = exports.OutlineWidth || (exports.OutlineWidth = {}));
var TimingFunction;
(function (TimingFunction) {
    TimingFunction["LINEAR"] = "linear";
    TimingFunction["EASE"] = "ease";
    TimingFunction["EASE_IN"] = "ease-in";
    TimingFunction["EASE_OUT"] = "ease-out";
    TimingFunction["EASE_IN_OUT"] = "ease-in-out";
    TimingFunction["STEP_START"] = "step-start";
    TimingFunction["STEP_END"] = "step-end";
})(TimingFunction = exports.TimingFunction || (exports.TimingFunction = {}));
var TransformFunction;
(function (TransformFunction) {
    TransformFunction["MATRIX"] = "matrix";
    TransformFunction["TRANSLATE"] = "translate";
    TransformFunction["TRANSLATE_X"] = "translateX";
    TransformFunction["TRANSLATE_Y"] = "translateY";
    TransformFunction["SCALE"] = "scale";
    TransformFunction["SCALE_X"] = "scaleX";
    TransformFunction["SCALE_Y"] = "scaleY";
    TransformFunction["ROTATE"] = "rotate";
    TransformFunction["SKEW"] = "skew";
    TransformFunction["SKEW_X"] = "skewX";
    TransformFunction["SKEW_Y"] = "skewY";
    TransformFunction["MATRIX_3D"] = "matrix3d";
    TransformFunction["TRANSLATE_3D"] = "translate3d";
    TransformFunction["TRANSLATE_Z"] = "translateZ";
    TransformFunction["SCALE_3D"] = "scale3d";
    TransformFunction["SCALE_Z"] = "scaleZ";
    TransformFunction["ROTATE_3D"] = "rotate3d";
    TransformFunction["ROTATE_X"] = "rotateX";
    TransformFunction["ROTATE_Y"] = "rotateY";
    TransformFunction["ROTATE_Z"] = "rotateZ";
    TransformFunction["PERSPECTIVE"] = "perspective";
})(TransformFunction = exports.TransformFunction || (exports.TransformFunction = {}));
