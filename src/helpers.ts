import { CubicBezier, DurationValue } from "./interfaces"

export function cubicBezierToValue({ x1, x2, y1, y2 }: CubicBezier) {
  return `cubic-bezier(${x1}, ${x2}, ${y1}, ${y2})`
}

export function durationToValue({ value, unit }: DurationValue) {
  return `${value}${unit}`
}
