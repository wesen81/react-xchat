import React from 'react';
import Message from './ChatMessageItem';

/**
 * This class presents the group of message items
 *
 * @class ChatMessages
 * @extends React.Component
 */
class ChatMessages extends React.Component {

	componentDidUpdate(nextProps) {
		if (this.props.messages.length !== nextProps.messages.length) {
			this.scrollTo();
		}
	}

	scrollTo() {
		let height = this.area.scrollHeight;
		this.area
		    .scrollTo(0, height);

	}

	render() {

		const {messages} = this.props;

		return (
			<div className="chat-area flow"
				ref={area => this.area = area}>
				{/*{this.props.messages.length}*/}
				{
					messages.map((line) =>
						<Message
							key={line.id}
							{...line}
						/>
					)
				}

			</div>
		)
	}

}

export default ChatMessages