import {
  BorderSide,
  BorderStyles,
  BorderStyleValue,
  StyleValue
} from "./interfaces"

interface AllBordersArgs {
  top: BorderStyles | undefined;
  right: BorderStyles | undefined;
  bottom: BorderStyles | undefined;
  left: BorderStyles | undefined;
}

export function borderTop (
  width: StyleValue = "1px",
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
  width: StyleValue = "1px",
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
  width: StyleValue = "1px",
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
  width: StyleValue = "1px",
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
  width: StyleValue = "1px",
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
  width: StyleValue = "1px",
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
  width: StyleValue = "1px",
  style: BorderStyleValue = BorderStyleValue.SOLID,
  color: StyleValue = "#000"
) {
  return {
    borderWidth: width,
    borderStyle: style,
    borderColor: color
  }
}

export function allBorders ({ top, right, bottom, left }: AllBordersArgs) {
  let styles = {}

  if (top) styles = { ...styles, ...borderTop(top[0], top[1], top[2]) }
  if (right) {
    styles = { ...styles, ...borderRight(right[0], right[1], right[2]) }
  }
  if (bottom) {
    styles = { ...styles, ...borderBottom(bottom[0], bottom[1], bottom[2]) }
  }
  if (left) styles = { ...styles, ...borderLeft(left[0], left[1], left[2]) }

  return styles
}

export function someBorders (
  sides: BorderSide[],
  ...borderStyles: BorderStyles
) {
  let styles = {}

  for (let side = 0, l = sides.length; side < l; side++) {
    switch (sides[side]) {
      case BorderSide.VERTICAL:
        styles = {
          ...styles,
          ...borderVertical(borderStyles[0], borderStyles[1], borderStyles[2])
        }
        break
      case BorderSide.HORIZONTAL:
        styles = {
          ...styles,
          ...borderHorizontal(borderStyles[0], borderStyles[1], borderStyles[2])
        }
        break
      case BorderSide.BOTTOM:
        styles = {
          ...styles,
          ...borderBottom(borderStyles[0], borderStyles[1], borderStyles[2])
        }
        break
      case BorderSide.LEFT:
        styles = {
          ...styles,
          ...borderLeft(borderStyles[0], borderStyles[1], borderStyles[2])
        }
        break
      case BorderSide.RIGHT:
        styles = {
          ...styles,
          ...borderRight(borderStyles[0], borderStyles[1], borderStyles[2])
        }
        break
      case BorderSide.TOP:
      default:
        styles = {
          ...styles,
          ...borderTop(borderStyles[0], borderStyles[1], borderStyles[2])
        }
    }
  }

  return { ...styles }
}

export function borderRadius (...args: StyleValue[]) {
  if (!args) return {}
  if (args.length === 1) {
    return { borderRadius: args[0] }
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
