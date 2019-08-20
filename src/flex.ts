import { DefaultValues, FlexDirection, FlexWrap, StyleValue } from "./interfaces"

export function flex (
  grow: number | DefaultValues = 0,
  shrink: number | DefaultValues = 0,
  basis: StyleValue | DefaultValues | "auto" = "auto"
) {
  if (basis) {
    return {
      flex: `${grow} ${shrink} ${basis}`
    }
  } else if (shrink) {
    return {
      flex: `${grow} ${shrink}`
    }
  }
  return {
    flex: grow
  }
}

export function flexFlow (
  direction: FlexDirection | DefaultValues = FlexDirection.ROW,
  wrap: FlexWrap | DefaultValues = FlexWrap.NOWRAP
) {
  return {
    flexDirection: direction,
    flexWrap: wrap
  }
}
