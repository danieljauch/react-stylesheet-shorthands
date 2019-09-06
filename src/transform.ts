import { StyleValue, TransformFunction } from "./interfaces"

export default function transform (...args: TransformFunction[] | StyleValue[]) {
  return {
    transform: args.join(" ")
  }
}
