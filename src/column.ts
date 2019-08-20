import { BorderStyleValue, DefaultValues, StyleValue } from './interfaces';

enum ColumnRuleWidth {
	MEDIUM = 'medium',
	THIN = 'thin',
	THICK = 'thick'
}

export function columnRule(
	width: ColumnRuleWidth | DefaultValues | StyleValue = ColumnRuleWidth.MEDIUM,
	style: BorderStyleValue | DefaultValues = BorderStyleValue.NONE,
	color: string
) {
	return {
		columnRuleWidth: width,
		columnRuleStyle: style,
		columnRuleColor: color
	};
}

export function columns(
	width: StyleValue | DefaultValues | 'auto' = 'auto',
	count: number | DefaultValues | 'auto' = 'auto'
) {
	return {
		columnWidth: width,
		columnCount: count
	};
}
