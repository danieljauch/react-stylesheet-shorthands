import {
  AnimationDirection,
  AnimationFillMode,
  AnimationPlayState,
  DefaultValues,
  StyleValue,
  TimingFunction
} from "./interfaces"

export default function animation (
  name = "none",
  duration: StyleValue | DefaultValues = "0s",
  timingFunction: TimingFunction | DefaultValues = TimingFunction.EASE,
  delay: StyleValue | DefaultValues = "0s",
  iterationCount: number | "infinite" | DefaultValues = 1,
  direction: AnimationDirection | DefaultValues = AnimationDirection.NORMAL,
  fillMode: AnimationFillMode | DefaultValues = AnimationFillMode.NONE,
  playState: AnimationPlayState | DefaultValues = AnimationPlayState.RUNNING
) {
  return {
    animationName: name,
    animationDuration: duration,
    animationTimingFunction: timingFunction,
    animationDelay: delay,
    animationIterationCount: iterationCount,
    animationDirection: direction,
    animationFillMode: fillMode,
    animationPlayState: playState
  }
}
