import {
	AnimationDirection,
	AnimationFillMode,
	AnimationPlayState,
	CubicBezier,
	DefaultValues,
	DurationValue,
	StepsType,
	TimingFunction
} from './interfaces';
import { cubicBezierToValue, durationToValue, stepsToValue } from './helpers';

export default function animation(
	name: string = 'none',
	duration: DurationValue | DefaultValues = '0s',
	timingFunction: TimingFunction | CubicBezier | StepsType | DefaultValues = TimingFunction.EASE,
	delay: DurationValue | DefaultValues = '0s',
	iterationCount: number | 'infinite' | DefaultValues = 1,
	direction: AnimationDirection | DefaultValues = AnimationDirection.NORMAL,
	fillMode: AnimationFillMode | DefaultValues = AnimationFillMode.NONE,
	playState: AnimationPlayState | DefaultValues = AnimationPlayState.RUNNING
) {
	const animationProperties = {};

	if (name) {
		animationProperties.animationName = name;
	}

	if (duration) {
		if (duration === 'initial' || duration === 'inherit') {
			animationProperties.animationDuration = duration;
		} else {
			animationProperties.animationDuration = durationToValue(duration);
		}
	}

	if (timingFunction) {
		animationProperties.animationTimingFunction = timingFunction;
		// cubicBezierToValue(timingFunction)
		// stepsToValue(timingFunction)
	}

	if (delay) {
		if (delay === 'initial' || delay === 'inherit') {
			animationProperties.animationDelay = delay;
		} else {
			animationProperties.animationDelay = durationToValue(delay);
		}
	}

	if (iterationCount) {
		animationProperties.animationIterationCount = iterationCount;
	}

	if (direction) {
		animationProperties.animationDirection = direction;
	}

	if (fillMode) {
		animationProperties.animationFillMode = fillMode;
	}

	if (playState) {
		animationProperties.animationPlayState = playState;
	}

	return animationProperties;
}
