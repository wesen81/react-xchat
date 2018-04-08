import React from 'react';

/**
 * This class presents chat form, where the user can send new messages
 *
 * @class ChatForm
 * @extends React.Component
 */
class ChatForm extends React.Component {

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	/**
	 * If user press SEND button
	 */
	handleClick() {
		this.sendMessage();
	}

	/**
	 * If user press ENTER
	 * @param {Event} e
	 */
	handleKeyDown(e) {
		if (e.nativeEvent.key === "Enter") {
			this.sendMessage();
		}
	}


	/**
	 * Send new message
	 */
	sendMessage() {
		const {messageEl} = this.refs;
		const {userName} = this.props;

		let message = messageEl.value;

		this.props.onSendMessage(userName, message);

		messageEl.value = '';

	}

	render() {

		return (
			<div className="footer">
				<input type="text"
				       className="textfield chat-massage"
				       spellCheck={false}
				       placeholder="Type here to chat"
					   ref="messageEl"
				       onKeyDown={this.handleKeyDown}
				/>
				<button
					className="btn chat-button"
					onClick={this.handleClick}
				>
					<i className="fa-send"/>
					Send
				</button>
			</div>
		);
	}

}

ChatForm.defaultProps = {
	userName: "NA_USER_NAME",
	onSendMessage: () => {}
};

export default ChatForm;