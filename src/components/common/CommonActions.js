/**
 * Change board
 * @param {String} name as board name
 * @returns {Object}
 */
export const changeBoard = (name) => {
	return {
		type: 'CHANGE_BOARD',
		name: name
	}
};