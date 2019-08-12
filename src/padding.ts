import {StyleValue} from "./interfaces"

export default padding(
  arg1: StyleValue,
  arg2: StyleValue | undefined = null,
  arg3: StyleValue | undefined = null,
  arg4: StyleValue | undefined = null
) {
  if (!arg2) {
    return { padding: arg1 }
  } else if (!arg3) {
    return {
      paddingVertical: arg1,
      paddingHorizontal: arg2
    }
  } else if (!arg4) {
    return {
      paddingTop: arg1,
      paddingHorizontal: arg2,
      paddingBottom: arg3
    }
  } else {
    return {
      paddingTop: arg1,
      paddingRight: arg2,
      paddingBottom: arg3,
      paddingLeft: arg4
    }
  }
}
