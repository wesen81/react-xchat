const URL = "https://picsum.photos/{width}/{height}?random&v={ts}";

/**
 * Generate new image
 * @param {Number} position
 * @param {Number} width
 * @param {Number} height
 * @returns {Object}
 */
export const addNewImage = (position, width, height) => {

	let src = URL.replace('{width}', width)
	             .replace('{height}', height)
	             .replace('{ts}', new Date().valueOf());

	return {
		type: "ADD_NEW_IMAGE",
		src: src,
		pos: position
	}
};

/**
 * Go image position in list
 * @param {Number} position
 * @returns {Object}
 */
export const goToPosition = (position) => {
	return {
		type: "GO_TO_POSITION",
		position: position
	}
};

/**
 * Hide or show image preloader
 * @param {Boolean} value
 * @returns {Object}
 */
export const hideImageLoader = (value) => {
	return {
		type: "HIDE_IMAGE_LOADER",
		hideLoader: value
	}
};