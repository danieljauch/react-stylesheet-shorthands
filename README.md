# React `StyleSheet` Shorthand Functions

In CSS, there are shorthands to pass a list of arguments to a style, creating a
shorthand for how to refer to the style. This module is an effort to recreate
those for React `StyleSheet`s.

Example:

CSS:
```css
.style {
  border: 1px solid #fff;
}
```

JS:
```typescript
borderStyle: {
  ...border("1px", "solid", "#fff")
}
// Expands to:
style: {
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#fff"
}
```

# Shorthands

The following is a list of all shorthands available in this module. Note that
every argument is optional and has a default that follows CSS browser defaults.
Shorthands that have many arguments don't technically need any, so feel free to
only use what you need.

## `allBorders`

All borders allows for you to be explicit about how every border looks
independently in one method.

Border styles are a tuple with three elements for width, style, and color

```typescript
const style = createStyles(({ color }) => ({
  allBordersExample: {
    ...allBorders({
      top: [1, "dashed", "#000"],
      right: [2, "solid", "#00f"],
      bottom: [1, "dashed", "#000"],
      left: [3, "dotted", "#0f0"]
    })
  }
}))
```

In most cases, this is just as long and expressive as using the individual
border methods, but keeping the styles in one block might be helpful. If you're
planning on using just certain borders, but not all four, see
[`someBorders`](#someborders).

## `animation`

```typescript
animationExample: {
  ...animation(
    "myAnimation", // name
    "0.2s", // duration
    "ease-in-out", // timing function
    "0.2s", // delay
    "infinite", // iteraction count, also takes simple integer
    "alternate", // direction
    "forwards", // fill mode
    "running" // play state
  )
}
```

## `background`

```typescript
backgroundExample: {
  ...background(
    "#000", // color
    "./relative-path.png", // image
    "0 0", // position
    "cover", // size
    "repeat-y", // repeat
    "padding-box", // origin
    "border-box", // clip
    "fixed" // attachment
  )
}
```

## `border`

```typescript
borderExample: {
  ...border(2, "solid", "#00f")
}
```

> Note: `borderBottom`, `borderHorizontal`, `borderLeft`, `borderRight`,
`borderTop`, and `borderVertical` all work in the same way, using the three
properties used for `border`, just setting color, style, and width for the
mentioned property.

## `borderRadius`

Border radius takes an optional number of arguments and test the corners based
on that number.

```typescript
borderRadius1ArgExample: {
  ...borderRadius(1)
},
borderRadius2ArgsExample: {
  ...borderRadius(1, 2)
},
borderRadius3ArgsExample: {
  ...borderRadius(1, 2, 3)
},
borderRadius4ArgsExample: {
  ...borderRadius(1, 2, 3, 4)
}

// Spreads to
borderRadius1ArgExample: {
  borderTopLeftRadius: 1,
  borderTopRightRadius: 1,
  borderBottomRightRadius: 1,
  borderBottomLeftRadius: 1
},
borderRadius2ArgsExample: {
  borderTopLeftRadius: 1,
  borderTopRightRadius: 2,
  borderBottomRightRadius: 1,
  borderBottomLeftRadius: 2
},
borderRadius3ArgsExample: {
  borderTopLeftRadius: 1,
  borderTopRightRadius: 2,
  borderBottomRightRadius: 3,
  borderBottomLeftRadius: 2
},
borderRadius4ArgsExample: {
  borderTopLeftRadius: 1,
  borderTopRightRadius: 2,
  borderBottomRightRadius: 3,
  borderBottomLeftRadius: 4
}
```

## `columnRule`

```typescript
columnRuleExample: {
  ...columnRule(4, "solid", "#fff")
}
```

## `columns`

```typescript
columnsExample: {
  ...columns("100px", 3)
}
```

## `flex`

```typescript
flexExample: {
  ...flex(5, 0, 100)
}
```

## `flexFlow`

```typescript
flexFlowExample: {
  ...flexFlow("row", "wrap")
}
```

## `font`

```typescript
fontExample: {
  ...font(
    "normal", // style
    "normal", // variant
    400, // weight
    18, // size
    "arial, sans-serif" // family
  )
}
```

## `gridArea`

```typescript
gridAreaExample: {
  ...gridArea(2, 1, "span 2", "span 3")
}
```

## `gridColumn`

```typescript
gridColumnExample: {
  ...gridColumn(1, "span 2")
}
```

## `gridGap`

```typescript
gridGapExample: {
  ...gridGap("10%", 20)
}
```

## `gridRow`

```typescript
gridRowExample: {
  ...gridRow(1, "span 2")
}
```

## `gridTemplate`

This was one method that was pretty difficult to emulate the exact behavior of
CSS's defaults because there are so many different ways to take in arguments
(which is why I didn't attempt `grid`). There are three arguments to the
shorthand which include rows, columns, areas. Each argument takes in an array of
strings or valid row / column numbers.

```typescript
gridTemplateExample: {
  ...gridTemplate(
    [10, 10, 10],
    ["25%", "50%", "25%"],
    ["header header header", "column1 column2 column3", "column1 footer footer"]
  )
}
```

## `margin`

```typescript
margin1ArgExample: {
  ...margin(1)
},
margin2ArgsExample: {
  ...margin(1, 2)
},
margin3ArgsExample: {
  ...margin(1, 2, 3)
},
margin4ArgsExample: {
  ...margin(1, 2, 3, 4)
}

// Spreads to
margin1ArgExample: {
  marginTop: 1,
  marginRight: 1,
  marginBottom; 1,
  marginLeft: 1
},
margin2ArgsExample: {
  marginTop: 1,
  marginRight: 2,
  marginBottom; 1,
  marginLeft: 2
},
margin3ArgsExample: {
  marginTop: 1,
  marginRight: 2,
  marginBottom; 3,
  marginLeft: 2
},
margin4ArgsExample: {
  marginTop: 1,
  marginRight: 2,
  marginBottom; 3,
  marginLeft: 4
}
```

## `outline`

```typescript
outlineExample: {
  ...outline(2, "solid", "#00f")
}
```

## `padding`

This follows the same multiple argument rules as [`margin`](#margin).

```typescript
padding1ArgExample: {
  ...padding(1)
},
padding2ArgsExample: {
  ...padding(1, 2)
},
padding3ArgsExample: {
  ...padding(1, 2, 3)
},
padding4ArgsExample: {
  ...padding(1, 2, 3, 4)
}

// Spreads to
padding1ArgExample: {
  paddingTop: 1,
  paddingRight: 1,
  paddingBottom; 1,
  paddingLeft: 1
},
padding2ArgsExample: {
  paddingTop: 1,
  paddingRight: 2,
  paddingBottom; 1,
  paddingLeft: 2
},
padding3ArgsExample: {
  paddingTop: 1,
  paddingRight: 2,
  paddingBottom; 3,
  paddingLeft: 2
},
padding4ArgsExample: {
  paddingTop: 1,
  paddingRight: 2,
  paddingBottom; 3,
  paddingLeft: 4
}
```

## `someBorders`

Some borders allows you to choose the individual borders that you want to
"paint" with the styles of the second argument. You can even use it multiple
times to fill in different styles for different groups.

You can use any of the sides, `vertical`, or `horizontal`.

```typescript
someBordersExample1: {
  ...someBorders(["top", "left"], 2, "dashed", "#f00")
},
someBordersExample2: {
  ...someBorders(["top", "left"], 2, "dashed", "#f00"),
  ...someBorders(["bottom", "right"], 2, "dotted", "#0f0")
},
someBordersExample3: {
  ...someBorders(["vertical"], 2, "dashed", "#f00"),
  ...someBorders(["right", "left"], 4, "dashed", "#00f")
},
```

## `transform`

Since the transform shorthand is just a list of different transforms, it's
intended to be used with the [`transformFunction`](#transformfunction) helper
and the [`TransformFunction` enum](#enums), so this example will use the example
of string and helper usage.

```typescript
transformExample: {
  ...transform(
    "rotateX(20deg)",
    ...transformFunction(TransformFunction.ROTATE_Y, "10deg"),
    "scale(1.5)"
  )
}
```

## `transition`

```typescript
transitionExample: {
  ...transition(
    "background-color", // property
    "0.2s", // duration
    "ease-out", // timing function
    "0.5s" // delay
  )
}
```

# Enums

If you use TypeScript, this module also has enums for all of the used parameters
based on the CSS accepted values.

```typescript
enum AnimationDirection {
	NORMAL = "normal",
	REVERSE = "reverse",
	ALTERNATE = "alternate",
	ALTERNATE_REVERSE = "alternate-reverse"
}

enum AnimationFillMode {
	NONE = "none",
	FORWARDS = "forwards",
	BACKWARDS = "backwards",
	BOTH = "both"
}

enum AnimationPlayState {
	PAUSED = "paused",
	RUNNING = "running"
}

enum BackgroundAttachment {
	SCROLL = "scroll",
	FIXED = "fixed",
	LOCAL = "local"
}

enum BackgroundRepeat {
	REPEAT = "repeat",
	REPEAT_X = "repeat-x",
	REPEAT_Y = "repeat-y",
	NO_REPEAT = "no-repeat"
}

enum BackgroundSize {
	AUTO = "auto",
	COVER = "cover",
	CONTAIN = "contain"
}

enum BorderSide {
	TOP = "top",
	RIGHT = "right",
	BOTTOM = "bottom",
	LEFT = "left",
	VERTICAL = "vertical",
	HORIZONTAL = "horizontal"
}

enum BorderStyleValue {
	NONE = "none",
	HIDDEN = "hidden",
	DOTTED = "dotted",
	DASHED = "dashed",
	SOLID = "solid",
	DOUBLE = "double",
	GROOVE = "groove",
	RIDGE = "ridge",
	INSET = "inset",
	OUTSET = "outset"
}

enum BoxModelPositioning {
	PADDING_BOX = "padding-box",
	BORDER_BOX = "border-box",
	CONTENT_BOX = "content-box"
}

enum ColumnRuleWidth {
	MEDIUM = "medium",
	THIN = "thin",
	THICK = "thick"
}

enum DefaultValues {
	INITIAL = "initial",
	INHERIT = "inherit"
}

enum FlexDirection {
	ROW = "row",
	ROW_REVERSE = "row-reverse",
	COLUMN = "column",
	COLUMN_REVERSE = "column-reverse"
}

enum FlexWrap {
	NOWRAP = "nowrap",
	WRAP = "wrap",
	WRAP_REVERSE = "wrap-reverse"
}

enum FontSize {
	MEDIUM = "medium",
	XX_SMALL = "xx-small",
	X_SMALL = "x-small",
	SMALL = "small",
	LARGE = "large",
	X_LARGE = "x-large",
	XX_LARGE = "xx-large",
	SMALLER = "smaller",
	LARGER = "larger"
}

enum FontStyle {
	NORMAL = "normal",
	ITALIC = "italic",
	OBLIQUE = "oblique"
}

enum FontVariant {
	NORMAL = "normal",
	SMALL_CAPS = "small-caps"
}

enum FontWeight {
	NORMAL = "normal",
	BOLD = "bold",
	BOLDER = "bolder",
	LIGHTER = "lighter",
	WEIGHT_100 = 100,
	WEIGHT_200 = 200,
	WEIGHT_300 = 300,
	WEIGHT_400 = 400,
	WEIGHT_500 = 500,
	WEIGHT_600 = 600,
	WEIGHT_700 = 700,
	WEIGHT_800 = 800,
	WEIGHT_900 = 900
}

enum OutlineWidth {
	MEDIUM = "medium",
	THIN = "thin",
	THICK = "thick"
}

enum TimingFunction {
	LINEAR = "linear",
	EASE = "ease",
	EASE_IN = "ease-in",
	EASE_OUT = "ease-out",
	EASE_IN_OUT = "ease-in-out",
	STEP_START = "step-start",
	STEP_END = "step-end"
}

enum TransformFunction {
	MATRIX = "matrix",
	TRANSLATE = "translate",
	TRANSLATE_X = "translateX",
	TRANSLATE_Y = "translateY",
	SCALE = "scale",
	SCALE_X = "scaleX",
	SCALE_Y = "scaleY",
	ROTATE = "rotate",
	SKEW = "skew",
	SKEW_X = "skewX",
	SKEW_Y = "skewY",
	MATRIX_3D = "matrix3d",
	TRANSLATE_3D = "translate3d",
	TRANSLATE_Z = "translateZ",
	SCALE_3D = "scale3d",
	SCALE_Z = "scaleZ",
	ROTATE_3D = "rotate3d",
	ROTATE_X = "rotateX",
	ROTATE_Y = "rotateY",
	ROTATE_Z = "rotateZ",
	PERSPECTIVE = "perspective"
}
```

# Helpers

## `backgroundPosition`

```typescript
backgroundPosition(0, 0); // "0 0"
backgroundPosition("50%", "50%"); // "50% 50%"
backgroundPosition("top", "left"); // "top left"
```

## `cubicBezier`

```typescript
cubicBezier(.5, .15, .5, .85) // "cubic-bezier(0.5, 0.15, 0.5, 0.85)"
```

## `span`

```typescript
span(2) // "span 2"
```

## `steps`

```typescript
steps(2, "start") // "steps(2, start)"
steps(4, "end") // "steps(4, end)"
```

## `transformFunction`

```typescript
transformFunction("translateX", "30deg") // "translateX(30deg)"
```
