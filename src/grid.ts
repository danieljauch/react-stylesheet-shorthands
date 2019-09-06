import { StyleValue } from "./interfaces"

export function gridColumn (
  start: StyleValue = "auto",
  end: StyleValue = "auto"
) {
  return { gridColumn: `${start} / ${end}` }
}
export function gridRow (start: StyleValue = "auto", end: StyleValue = "auto") {
  return { gridRow: `${start} / ${end}` }
}
export function gridGap (columnGap: StyleValue = 0, rowGap: StyleValue = 0) {
  return { gridGap: `${columnGap} ${rowGap}` }
}

export function gridArea (
  rowStart: StyleValue = "auto",
  columnStart: StyleValue = "auto",
  rowEnd: StyleValue = "auto",
  columnEnd: StyleValue = "auto"
) {
  return {
    gridColumn: gridColumn(columnStart, columnEnd),
    gridRow: gridRow(rowStart, rowEnd)
  }
}
export function gridTemplate (
  rows: StyleValue[] = ["none"],
  columns: StyleValue[] = ["none"],
  areas: StyleValue[] = ["none"]
) {
  return {
    gridTemplateRows: rows.join(" "),
    gridTemplateColumns: columns.join(" "),
    gridTemplateAreas: areas.join(" ")
  }
}
