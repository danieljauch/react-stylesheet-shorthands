"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
function columnRule(width = interfaces_1.ColumnRuleWidth.MEDIUM, style = interfaces_1.BorderStyleValue.NONE, color) {
    return {
        columnRuleWidth: width,
        columnRuleStyle: style,
        columnRuleColor: color
    };
}
exports.columnRule = columnRule;
function columns(width = "auto", count = "auto") {
    return {
        columnWidth: width,
        columnCount: count
    };
}
exports.columns = columns;
