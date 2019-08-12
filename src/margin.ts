import {StyleValue} from "./interfaces"

export default margin(
  arg1: StyleValue,
  arg2: StyleValue | undefined = null,
  arg3: StyleValue | undefined = null,
  arg4: StyleValue | undefined = null
) {
  if (!arg2) {
    return { margin: arg1 }
  } else if (!arg3) {
    return {
      marginVertical: arg1,
      marginHorizontal: arg2
    }
  } else if (!arg4) {
    return {
      marginTop: arg1,
      marginHorizontal: arg2,
      marginBottom: arg3
    }
  } else {
    return {
      marginTop: arg1,
      marginRight: arg2,
      marginBottom: arg3,
      marginLeft: arg4
    }
  }
}
