import { StyleValue, TransformFunction } from './interfaces';
import { transformFunctionToValue } from './helpers';

export default function transform(...args: [TransformFunction | StyleValue]) {
	return {
		transform: args.map((arg) => transformFunctionToValue(arg)).join(' ')
	};
}
