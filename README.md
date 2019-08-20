# React StyleSheet shorthand functions

In CSS, there are shorthands to pass a list of arguments to a style, creating a
shorthand for how to refer to the style. This module is an effort to recreate
those for React StyleSheets.

Example:

CSS:
```css
.style {
  border: 1px solid #fff;
}
```

JS:
```javascript
borderStyleValueBased: {
  ...border({ value: 1, unit: "px" }, "solid", theme.colors.white)
},
borderStyleExplicit: {
  ...border("1px", "solid", "#fff")
}
// Both compile to:
style: {
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#fff"
}
```

# Shorthands

The following is a list of all shorthands available in this module.

## `allBorders`

All borders allows for you to be explicit about how every border looks
independently in one method.

```javascript
const style = createStyles(({ color }) => ({
  allBordersExample: {
    ...allBorders({
      top: {
        width: 1,
        style: "dashed",
        color: color.black
      },
      right: {
        width: 2,
        style: "solid",
        color: color.blue
      },
      bottom: {
        width: 1,
        style: "dashed",
        color: color.black
      },
      left: {
        width: 2,
        style: "solid",
        color: color.blue
      }
    })
  }
}))
```

In most cases, this is just as long and expressive as using the individual
border methods, but spreading one large object may be more helpful in certain
situations.

## `animation`

```javascript
const style = createStyles(() => ({
  animationExampleWithMinimumArgs: {
    ...animation("myAnimation")
  },
  animationExampleWithAllArgs: {
    ...animation(
      "myAnimation", // name
      { value: 2, units: "s" }, // duration, can also be simple string "2s"
      { x1: 0.5, x2: 0.15, y1: 0.5, y2: 0.85 }, // timing function, can also be simple string "cubic-bezier(0.5, 0.15, 0.5, 0.85)"
      { value: 0.2, units: "s" }, // delay, can also be simple string "0.2s"
      "infinite", // iteraction count, also takes simple integer
      "alternate", // direction
      "forwards", // fill mode
      "running" // play state
    )
  }
}))
```

## `background`

```javascript
const style = createStyles(() => ({
  backgroundExample: {

  }
}))
```

## `border`

```javascript
```

## `borderBottom`

```javascript
```

## `borderHorizontal`

```javascript
```

## `borderLeft`

```javascript
```

## `borderRadius`

```javascript
```

## `borderRight`

```javascript
```

## `borderTop`

```javascript
```

## `borderVertical`

```javascript
```

## `columnRule`

```javascript
```

## `columns`

```javascript
```

## `flex`

```javascript
```

## `flexFlow`

```javascript
```

## `font`

```javascript
```

## `grid`

```javascript
```

## `gridArea`

```javascript
```

## `gridColumn`

```javascript
```

## `gridGap`

```javascript
```

## `gridRow`

```javascript
```

## `gridTemplate`

```javascript
```

## `margin`

```javascript
```

## `outline`

```javascript
```

## `padding`

```javascript
```

## `someBorders`

```javascript
```

## `transform`

```javascript
```

## `transition`

```javascript
```

# Types


# Helpers

## `cubicBezierToValue`

```javascript
```

## `durationToValue`

```javascript
```

