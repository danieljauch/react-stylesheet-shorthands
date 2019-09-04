import { DefaultValues, FlexDirection, FlexWrap, StyleValue } from "./interfaces"

export function flex (
  grow: number | DefaultValues = 0,
  shrink: number | DefaultValues = 0,
  basis: StyleValue | DefaultValues | "auto" = "auto"
) {
  return {
    flex: `${grow} ${shrink} ${basis}`
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
