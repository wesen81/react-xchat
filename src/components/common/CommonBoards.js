import React from 'react';

/**
 * This class presenets the group of pages
 *
 * @class CommonBoards
 * @extends React.Component
 */
class CommonBoards extends React.Component {
	render() {

		const {children} = this.props;

		return (
			<div className="board">{children}</div>
		);
	};
}

export default CommonBoards;