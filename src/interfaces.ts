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

export interface CubicBezier {
	x1: number;
	x2: number;
	y1: number;
	y2: number;
}

export enum DefaultValues {
	INITIAL = 'initial',
	INHERIT = 'inherit'
}

export interface DurationValue {
	value: number;
	unit: 's' | 'ms';
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
