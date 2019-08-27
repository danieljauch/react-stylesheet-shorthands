import { BorderStyleValue, DefaultValues, OutlineWidth, StyleValue } from "./interfaces";

export default function outline (
  width: OutlineWidth | DefaultValues | StyleValue = OutlineWidth.MEDIUM,
  style: BorderStyleValue | DefaultValues = BorderStyleValue.NONE,
  color: string
) {
  return {
    outlineWidth: width,
    outlineStyle: style,
    outlineColor: color
  }
}
