import { StyleValue, TransformFunction } from "./interfaces"

export function backgroundPosition (x: StyleValue, y: StyleValue) {
  return `${x} ${y}`
}

export function cubicBezier (x1: number, x2: number, y1: number, y2: number) {
  return `cubic-bezier(${x1}, ${x2}, ${y1}, ${y2})`
}

export function steps (steps: number, startingFrom: "start" | "end") {
  return `steps(${steps}, ${startingFrom})`
}

export function transformFunction (name: TransformFunction, value: string) {
  return `${name}(${value})`
}
