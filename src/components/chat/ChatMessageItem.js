import React from 'react';

/**
 * This class presents message lines
 *
 * @class ChatMessageItem
 * @extends React.Component
 */
class ChatMessageItem extends React.Component {

	render() {

		const {owner, text, align} = this.props;

		return (
			<div className={`msg ${align}`}>
				<span className="sender">{owner}: </span>
				{text}
			</div>
		)
	}

}

export default ChatMessageItem;