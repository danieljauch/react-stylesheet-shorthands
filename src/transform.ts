import { StyleValue, TransformFunction } from "./interfaces";
import { transformFunctionToValue } from "./helpers";

export default function transform (...args: TransformFunction[] | StyleValue[]) {
  return {
    transform: args.map(normalizeTransformArg).join(" ")
  }
}

const normalizeTransformArg = (arg: TransformFunction | StyleValue) => {
  if (typeof arg === "object") {
    return transformFunctionToValue(arg)
  }
  return arg
}
