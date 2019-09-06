import {
  BackgroundAttachment,
  BackgroundRepeat,
  BackgroundSize,
  BoxModelPositioning,
  StyleValue,
  DefaultValues
} from "./interfaces"

export default function background (
  color = "transparent",
  image = "none",
  position: StyleValue = "0 0",
  size: BackgroundSize | StyleValue | DefaultValues = "auto",
  repeat: BackgroundRepeat | StyleValue = BackgroundRepeat.REPEAT,
  origin: BoxModelPositioning | DefaultValues = BoxModelPositioning.PADDING_BOX,
  clip: BoxModelPositioning | DefaultValues = BoxModelPositioning.BORDER_BOX,
  attachment: BackgroundAttachment | DefaultValues = BackgroundAttachment.SCROLL
) {
  return {
    backgroundColor: color,
    backgroundImage: image,
    backgroundPosition: position,
    backgroundSize: size,
    backgroundRepeat: repeat,
    backgroundOrigin: origin,
    backgroundClip: clip,
    backgroundAttachment: attachment
  }
}
