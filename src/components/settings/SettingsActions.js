/**
 * Change image width value
 * @param {Number} width
 * @returns {Object}
 */
export const changeWidth = (width) => {
	return {
		type: 'CHANGE_IMAGE_WIDTH',
		width: width
	}
};

/**
 * Change image height value
 * @param {Number} height
 * @returns {Object}
 */
export const changeHeight = (height) => {
	return {
		type: 'CHANGE_IMAGE_HEIGHT',
		height: height
	}
};

/**
 * Change user name
 * @param {String} username
 * @returns {Object}
 */
export const changeUserName = (username) => {
	return {
		type: 'CHANGE_USER_NAME',
		userName: username
	}
};
