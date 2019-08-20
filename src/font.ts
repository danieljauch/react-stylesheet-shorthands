import { DefaultValues, StyleValue } from './interfaces';

enum FontStyle {
	NORMAL = 'normal',
	ITALIC = 'italic',
	OBLIQUE = 'oblique'
}

enum FontVariant {
	NORMAL = 'normal',
	SMALL_CAPS = 'small-caps'
}

enum FontWeight {
	NORMAL = 'normal',
	BOLD = 'bold',
	BOLDER = 'bolder',
	LIGHTER = 'lighter',
	WEIGHT_100 = 100,
	WEIGHT_200 = 200,
	WEIGHT_300 = 300,
	WEIGHT_400 = 400,
	WEIGHT_500 = 500,
	WEIGHT_600 = 600,
	WEIGHT_700 = 700,
	WEIGHT_800 = 800,
	WEIGHT_900 = 900
}

enum FontSize {
	MEDIUM = 'medium',
	XX_SMALL = 'xx-small',
	X_SMALL = 'x-small',
	SMALL = 'small',
	LARGE = 'large',
	X_LARGE = 'x-large',
	XX_LARGE = 'xx-large',
	SMALLER = 'smaller',
	LARGER = 'larger'
}

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
