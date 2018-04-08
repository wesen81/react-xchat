import React from 'react';
import Page from '../common/CommonPage';
import Messages from './ChatMessages';
import Form from './ChatForm';
import Socket from './ChatSocket';
import {addNewMessage} from "./ChatActions";
import {connect} from 'react-redux';


/**
 * This class presents the chat page
 *
 * @class ChatPage
 * @extends React.Component
 */
class ChatPage extends React.Component {

	render() {

		const {active, messages, userName} = this.props;
		const {onArrivalMessage} = this.props;

		return (
			<Page name="chat" active={active}>

				<Messages messages={messages}/>

				<Socket autoStart={true}
						onMessage={onArrivalMessage}
						ref={socket => this.socket = socket}>

						<Form userName={userName}/>
				</Socket>
			</Page>
		)
	}

}

export default connect(
	(state) => {
		return {
			messages: state.chat.messages,
			blink: state.chat.blink,
			userName: state.settings.userName
		}
	},
	(dispatch) => {
		return {
			onArrivalMessage: (owner, text, align) => {
				dispatch(addNewMessage(owner, text, align));
			}
		}
	}
)(ChatPage);