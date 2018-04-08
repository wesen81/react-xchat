export const settings = (state = {}, action) => {
	switch (action.type) {
		case "CHANGE_IMAGE_WIDTH":
			return Object.assign({}, state, {
				imageWidth: action.width
			});
		case "CHANGE_IMAGE_HEIGHT":
			return Object.assign({}, state, {
				imageHeight: action.height
			});
		case "CHANGE_USER_NAME":
			return Object.assign({}, state, {
				userName: action.userName
			});
		default:
			return state;
	}
};