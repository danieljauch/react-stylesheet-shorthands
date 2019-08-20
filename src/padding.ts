import { StyleValue } from "./interfaces";

export default function padding(...args: [StyleValue | undefined]) {
	if (args.length === 1) {
		return { padding: args[0] };
	} else if (args.length === 2) {
		return {
			paddingVertical: args[0],
			paddingHorizontal: args[1]
		};
	} else if (args.length === 3) {
		return {
			paddingTop: args[0],
			paddingHorizontal: args[1],
			paddingBottom: args[2]
		};
	}
	return {
		paddingTop: args[0],
		paddingRight: args[1],
		paddingBottom: args[2],
		paddingLeft: args[3]
	};
}
