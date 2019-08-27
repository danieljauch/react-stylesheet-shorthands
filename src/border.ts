import { BorderSide, BorderStyles, BorderStyleValue, DurationValue, StyleValue } from "./interfaces";

const borderDefaults = {
  width: 1,
  style: "solid",
  color: "#000"
}

export function borderTop (
  width: DurationValue | StyleValue = "1px",
  style: BorderStyleValue = BorderStyleValue.SOLID,
  color: StyleValue = "#000"
) {
  return {
    borderTopWidth: width,
    borderTopStyle: style,
    borderTopColor: color
  }
}
export function borderRight (
  width: DurationValue | StyleValue = "1px",
  style: BorderStyleValue = BorderStyleValue.SOLID,
  color: StyleValue = "#000"
) {
  return {
    borderRightWidth: width,
    borderRightStyle: style,
    borderRightColor: color
  }
}
export function borderLeft (
  width: DurationValue | StyleValue = "1px",
  style: BorderStyleValue = BorderStyleValue.SOLID,
  color: StyleValue = "#000"
) {
  return {
    borderLeftWidth: width,
    borderLeftStyle: style,
    borderLeftColor: color
  }
}
export function borderBottom (
  width: DurationValue | StyleValue = "1px",
  style: BorderStyleValue = BorderStyleValue.SOLID,
  color: StyleValue = "#000"
) {
  return {
    borderBottomWidth: width,
    borderBottomStyle: style,
    borderBottomColor: color
  }
}

export function borderVertical (
  width: DurationValue | StyleValue = "1px",
  style: BorderStyleValue = BorderStyleValue.SOLID,
  color: StyleValue = "#000"
) {
  return {
    borderVerticalWidth: width,
    borderVerticalStyle: style,
    borderVerticalColor: color
  }
}
export function borderHorizontal (
  width: DurationValue | StyleValue = "1px",
  style: BorderStyleValue = BorderStyleValue.SOLID,
  color: StyleValue = "#000"
) {
  return {
    borderHorizontalWidth: width,
    borderHorizontalStyle: style,
    borderHorizontalColor: color
  }
}

export function border (
  width: DurationValue | StyleValue = "1px",
  style: BorderStyleValue = BorderStyleValue.SOLID,
  color: StyleValue = "#000"
) {
  return {
    borderWidth: width,
    borderStyle: style,
    borderColor: color
  }
}

export function allBorders ({
  top: BorderStyles = borderDefaults,
  right: BorderStyles = borderDefaults,
  bottom: BorderStyles = borderDefaults,
  left: BorderStyles = borderDefaults
}) {
  return {
    ...borderTop(top.width, top.style, top.color),
    ...borderRight(right.width, right.style, right.color),
    ...borderBottom(bottom.width, bottom.style, bottom.color),
    ...borderLeft(left.width, left.style, left.color)
  }
}

export function someBorders (sides: BorderSide[], ...borderStyles: [DurationValue | StyleValue, BorderStyleValue, StyleValue]) {
  let styles = {}

	for (let side = 0, l = sides.length; side < l; side++) {
    switch (sides[side]) {
      case BorderSide.VERTICAL:
        styles = { ...styles, ...borderVertical(borderStyles) }
				break;
      case BorderSide.HORIZONTAL:
        styles = { ...styles, ...borderHorizontal(borderStyles) }
				break;
      case BorderSide.BOTTOM:
        styles = { ...styles, ...borderBottom(borderStyles) }
				break;
      case BorderSide.LEFT:
        styles = { ...styles, ...borderLeft(borderStyles) }
				break;
      case BorderSide.RIGHT:
        styles = { ...styles, ...borderRight(borderStyles) }
				break;
      case BorderSide.TOP:
      default:
        styles = { ...styles, ...borderTop(borderStyles) }
		}
  }

  return {...styles}
}

export function borderRadius(...args: StyleValue[] | undefined) {
	if (args.length === 1) {
		return { borderRadius: args[0] };
	} else if (args.length === 2) {
		return {
			borderTopLeftRadius: args[0],
			borderTopRightRadius: args[1],
			borderBottomRightRadius: args[0],
			borderBottomLeftRadius: args[1]
		}
	} else if (args.length === 3) {
		return {
			borderTopLeftRadius: args[0],
			borderTopRightRadius: args[1],
			borderBottomRightRadius: args[2],
			borderBottomLeftRadius: args[1]
		}
	}
  return {
    borderTopLeftRadius: args[0],
    borderTopRightRadius: args[1],
    borderBottomRightRadius: args[2],
    borderBottomLeftRadius: args[3]
  }
}
