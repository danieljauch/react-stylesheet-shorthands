import { DefaultValues, FontSize, FontStyle, FontVariant, FontWeight, StyleValue } from './interfaces';

export default function font(
	style: FontStyle | DefaultValues = FontStyle.NORMAL,
	variant: FontVariant | DefaultValues = FontVariant.NORMAL,
	weight: FontWeight | DefaultValues = FontWeight.NORMAL,
	size: FontSize | StyleValue | DefaultValues = FontSize.MEDIUM,
	family: string | DefaultValues = ''
) {
	let styles = {};

	if (style) styles.fontStyle = style;
	if (variant) styles.fontVariant = variant;
	if (weight) styles.fontWeight = weight;
	if (size) styles.fontSize = size;
	if (family) styles.fontFamily = family;

	return { ...styles };
}
