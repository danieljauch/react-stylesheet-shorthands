import {
  AnimationDirection,
  AnimationFillMode,
  AnimationPlayState,
  CubicBezier,
  DefaultValues,
  DurationValue,
  StyleValue,
  StepsType,
  TimingFunction
} from "./interfaces"
import { cubicBezierToValue, durationToValue, stepsToValue } from "./helpers"

export default function animation (
  name = "none",
  duration: StyleValue | DurationValue | DefaultValues = "0s",
  timingFunction: TimingFunction | CubicBezier | StepsType | DefaultValues = TimingFunction.EASE,
  delay: StyleValue | DurationValue | DefaultValues = "0s",
  iterationCount: number | "infinite" | DefaultValues = 1,
  direction: AnimationDirection | DefaultValues = AnimationDirection.NORMAL,
  fillMode: AnimationFillMode | DefaultValues = AnimationFillMode.NONE,
  playState: AnimationPlayState | DefaultValues = AnimationPlayState.RUNNING
) {
  let styles = {}

  if (name) {
    styles.animationName = name
  }

  if (duration) {
    if (duration === "initial" || duration === "inherit") {
      styles.animationDuration = duration
    } else {
      styles.animationDuration = durationToValue(duration)
    }
  }

  if (timingFunction) {
    styles.animationTimingFunction = timingFunction
    // cubicBezierToValue(timingFunction)
    // stepsToValue(timingFunction)
  }

  if (delay) {
    if (delay === "initial" || delay === "inherit") {
      styles.animationDelay = delay
    } else {
      styles.animationDelay = durationToValue(delay)
    }
  }

  if (iterationCount) {
    styles.animationIterationCount = iterationCount
  }

  if (direction) {
    styles.animationDirection = direction
  }

  if (fillMode) {
    styles.animationFillMode = fillMode
  }

  if (playState) {
    styles.animationPlayState = playState
  }

  return {...styles}
}
