let messageID = 0;

/**
 * Add new message
 * @param {String} owner
 * @param {String} text
 * @param {String} align
 * @returns {Object}
 */
export const addNewMessage = (owner, text, align) => {
	return {
		type: 'ADD_NEW_MESSAGE',
		id: messageID++,
		owner: owner,
		text: text,
		align: align
	}
};