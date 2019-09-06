"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function gridColumn(start = "auto", end = "auto") {
    return { gridColumn: `${start} / ${end}` };
}
exports.gridColumn = gridColumn;
function gridRow(start = "auto", end = "auto") {
    return { gridRow: `${start} / ${end}` };
}
exports.gridRow = gridRow;
function gridGap(columnGap = 0, rowGap = 0) {
    return { gridGap: `${columnGap} ${rowGap}` };
}
exports.gridGap = gridGap;
function gridArea(rowStart = "auto", columnStart = "auto", rowEnd = "auto", columnEnd = "auto") {
    return {
        gridColumn: gridColumn(columnStart, columnEnd),
        gridRow: gridRow(rowStart, rowEnd)
    };
}
exports.gridArea = gridArea;
function gridTemplate(rows = ["none"], columns = ["none"], areas = ["none"]) {
    return {
        gridTemplateRows: rows.join(" "),
        gridTemplateColumns: columns.join(" "),
        gridTemplateAreas: areas.join(" ")
    };
}
exports.gridTemplate = gridTemplate;
