import { TimingFunction } from "./interfaces"

export default function transition (
  property = "all",
  duration = "0s",
  timingFunction: TimingFunction = TimingFunction.EASE,
  delay = "0s"
) {
  return {
    transitionProperty: property,
    transitionDuration: duration,
    transitionTimingFunction: timingFunction,
    transitionDelay: delay
  }
}
