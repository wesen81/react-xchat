export const chat = (state = { messages: [] }, action) => {
	switch (action.type) {
		case "ADD_NEW_MESSAGE":
			return Object.assign({}, state, {
				messages: [
					...state.messages,
					{
						id: action.id,
						owner: action.owner,
						text: action.text,
						align: action.align
					}
				],
			});
		case "BLINK_TAB":
			return Object.assign({}, state, {
				blink: action.blink
			});
		default:
			return state;
	}
};