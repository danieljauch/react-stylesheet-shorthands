export enum AnimationDirection {
	NORMAL = 'normal',
	REVERSE = 'reverse',
	ALTERNATE = 'alternate',
	ALTERNATE_REVERSE = 'alternate-reverse'
}

export enum AnimationFillMode {
	NONE = 'none',
	FORWARDS = 'forwards',
	BACKWARDS = 'backwards',
	BOTH = 'both'
}

export enum AnimationPlayState {
	PAUSED = 'paused',
	RUNNING = 'running'
}

export enum BackgroundAttachment {
	SCROLL = 'scroll',
	FIXED = 'fixed',
	LOCAL = 'local'
}

export enum BackgroundRepeat {
	REPEAT = 'repeat',
	REPEAT_X = 'repeat-x',
	REPEAT_Y = 'repeat-y',
	NO_REPEAT = 'no-repeat'
}

export enum BackgroundSize {
	AUTO = 'auto',
	COVER = 'cover',
	CONTAIN = 'contain'
}

export enum BorderSide {
	TOP = 'top',
	RIGHT = 'right',
	BOTTOM = 'bottom',
	LEFT = 'left',
	VERTICAL = 'vertical',
	HORIZONTAL = 'horizontal'
}

export interface BorderStyles {
	width: DurationValue | StyleValue;
	style: BorderStyleValue;
	color: string;
}

export enum BorderStyleValue {
	NONE = 'none',
	HIDDEN = 'hidden',
	DOTTED = 'dotted',
	DASHED = 'dashed',
	SOLID = 'solid',
	DOUBLE = 'double',
	GROOVE = 'groove',
	RIDGE = 'ridge',
	INSET = 'inset',
	OUTSET = 'outset'
}

export enum BoxModelPositioning {
	PADDING_BOX = 'padding-box',
	BORDER_BOX = 'border-box',
	CONTENT_BOX = 'content-box'
}

export interface CubicBezier {
	x1: number;
	x2: number;
	y1: number;
	y2: number;
}

export enum ColumnRuleWidth {
	MEDIUM = 'medium',
	THIN = 'thin',
	THICK = 'thick'
}

export enum DefaultValues {
	INITIAL = 'initial',
	INHERIT = 'inherit'
}

export interface DurationValue {
	value: number;
	unit: 's' | 'ms';
}

export enum FlexDirection {
	ROW = 'row',
	ROW_REVERSE = 'row-reverse',
	COLUMN = 'column',
	COLUMN_REVERSE = 'column-reverse'
}

export enum FlexWrap {
	NOWRAP = 'nowrap',
	WRAP = 'wrap',
	WRAP_REVERSE = 'wrap-reverse'
}

export enum FontSize {
	MEDIUM = 'medium',
	XX_SMALL = 'xx-small',
	X_SMALL = 'x-small',
	SMALL = 'small',
	LARGE = 'large',
	X_LARGE = 'x-large',
	XX_LARGE = 'xx-large',
	SMALLER = 'smaller',
	LARGER = 'larger'
}

export enum FontStyle {
	NORMAL = 'normal',
	ITALIC = 'italic',
	OBLIQUE = 'oblique'
}

export enum FontVariant {
	NORMAL = 'normal',
	SMALL_CAPS = 'small-caps'
}

export enum FontWeight {
	NORMAL = 'normal',
	BOLD = 'bold',
	BOLDER = 'bolder',
	LIGHTER = 'lighter',
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

export enum OutlineWidth {
	MEDIUM = 'medium',
	THIN = 'thin',
	THICK = 'thick'
}

export interface StepsType {
	steps: number;
	startingFrom: 'start' | 'end';
}

export type StyleValue = string | number;

export enum TimingFunction {
	LINEAR = 'linear',
	EASE = 'ease',
	EASE_IN = 'ease-in',
	EASE_OUT = 'ease-out',
	EASE_IN_OUT = 'ease-in-out',
	STEP_START = 'step-start',
	STEP_END = 'step-end'
}

export interface TransformFunction {
	name: string;
	value: string | number;
}
