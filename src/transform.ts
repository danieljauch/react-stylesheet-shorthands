import { StyleValue } from './interfaces';

interface TransformFunction {
	name: string;
	value: string | number;
}

function transformFunctionToValue(transformFunction: TransformFunction) {
	return `${name}(${value})`;
}

export default function transform(...args: [TransformFunction | StyleValue]) {
	return {
		transform: args.map((arg) => transformFunctionToValue(arg)).join(' ')
	};
}
