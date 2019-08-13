export interface CubicBezier = {
  x1: number,
  x2: number,
  y1: number,
  y2: number
}

export enum DefaultValues {
  INITIAL = "initial"
  INHERIT = "inherit"
}

export interface DurationValue = {
  value: number,
  unit: "s" | "ms"
}
