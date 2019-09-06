import {
  DefaultValues,
  FontSize,
  FontStyle,
  FontVariant,
  FontWeight,
  StyleValue
} from "./interfaces"

export default function font (
  style: FontStyle | DefaultValues = FontStyle.NORMAL,
  variant: FontVariant | DefaultValues = FontVariant.NORMAL,
  weight: FontWeight | DefaultValues = FontWeight.NORMAL,
  size: FontSize | StyleValue | DefaultValues = FontSize.MEDIUM,
  family: string | DefaultValues = ""
) {
  return {
    fontStyle: style,
    fontVariant: variant,
    fontWeight: weight,
    fontSize: size,
    fontFamily: family
  }
}
