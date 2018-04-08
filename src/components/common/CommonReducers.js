export const common = (state = { activeItem: "chat"}, action) => {
	switch (action.type) {
		case "CHANGE_BOARD":
			return Object.assign({}, state, {
				activeItem: action.name
			});
		default:
			return state;
	}
};