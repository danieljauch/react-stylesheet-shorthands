import { TransformFunction } from "./interfaces"

export default function transform (...args: TransformFunction[] | string[]) {
  return {
    transform: args.join(" ")
  }
}
