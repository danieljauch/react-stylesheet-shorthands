import {
	BackgroundAttachment,
	BackgroundRepeat,
	BackgroundSize,
	BoxModelPositioning,
	StyleValue,
	DefaultValues
} from './interfaces';

export default function background(
	color: string = 'transparent',
	image: string = 'none',
	position: [StyleValue, StyleValue] | StyleValue = [ 0, 0 ],
	size: BackgroundSize | StyleValue | DefaultValues = 'auto',
	repeat: BackgroundRepeat | StyleValue = BackgroundRepeat.REPEAT,
	origin: BoxModelPositioning | DefaultValues = BoxModelPositioning.PADDING_BOX,
	clip: BoxModelPositioning | DefaultValues = BoxModelPositioning.BORDER_BOX,
	attachment: BackgroundAttachment | DefaultValues = BackgroundAttachment.SCROLL
) {
	let styles = {};

	if (color) styles.backgroundColor = color;
	if (image) styles.backgroundImage = image;
	if (position) {
		if (typeof position === object) {
			styles.backgroundPosition = position.join(' ');
		} else {
			styles.backgroundPosition = position;
		}
	}
	if (size) styles.backgroundSize = size;
	if (repeat) styles.backgroundRepeat = repeat;
	if (origin) styles.backgroundOrigin = origin;
	if (clip) styles.backgroundClip = clip;
	if (attachment) styles.backgroundAttachment = attachment;

	return { ...styles };
}
