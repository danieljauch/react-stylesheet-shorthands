import { DefaultValues, StyleValue } from './interfaces';

enum FlexDirection {
	ROW = 'row',
	ROW_REVERSE = 'row-reverse',
	COLUMN = 'column',
	COLUMN_REVERSE = 'column-reverse'
}

enum FlexWrap {
	NOWRAP = 'nowrap',
	WRAP = 'wrap',
	WRAP_REVERSE = 'wrap-reverse'
}

export function flex(
	grow: number | DefaultValues = 0,
	shrink: number | DefaultValues = 0,
	basis: StyleValue | DefaultValues | 'auto' = 'auto'
) {
	if (basis) {
		return {
			flex: `${grow} ${shrink} ${basis}`
		};
	} else if (shrink) {
		return {
			flex: `${grow} ${shrink}`
		};
	} else {
		return {
			flex: grow
		};
	}
}

export function flexFlow(
	direction: FlexDirection | DefaultValues = FlexDirection.ROW,
	wrap: FlexWrap | DefaultValues = FlexWrap.NOWRAP
) {
	return {
		flexDirection: direction,
		flexWrap: wrap
	};
}
