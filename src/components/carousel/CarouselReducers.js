/**
 * Reducer
 * @param state
 * @param action
 * @returns {Array}
 */

const images = [
	{
		src: "https://picsum.photos/640/480?random&v=1",
		pos: 0
	}
];

export const carousel = (state = { images: [...images], hideLoader: true, position: 0 }, action) => {

	switch (action.type) {
		case "ADD_NEW_IMAGE":
			return Object.assign({}, state, {
				images: [
					...state.images,
					{
						src: action.src,
						pos: action.pos,
						load: true
					}
				],
				position: action.pos,
				hideLoader: false
			});
		case "GO_TO_POSITION":
			return Object.assign({}, state, {
				position: action.position
			});
		case "HIDE_IMAGE_LOADER":
			return Object.assign({}, state, {
				hideLoader: action.hideLoader
			});
		default:
			return state;
	}
};