import React , {Children} from 'react';
import ChatForm from "./ChatForm";

const USER_CONNECTION = "User connection";
const USER_DISCONNECTION = "User disconnection";
const URL = "http://185.13.90.140:8081";


/**
 * Communication class, it uses the socket.io client
 *
 * @class ChatSocket
 * @extends React.Component
 */
class ChatSocket extends React.Component {

	constructor(props) {
		super(props);

		this.url = props.url || URL;
		this.debug = !!props.debug;

		if (props.autoStart) this.start();

	}

	renderChild() {
		let me = this;
		const {children} = this.props;

		return React.cloneElement(children, {
			onSendMessage: (user, message) => {
				me.fetch(user, message);
			}
		})
	}

	render() {
		return Children.only(
			this.renderChild()
		);
	}

	/**
	 * Start communication
	 */
	start() {
		let me     = this,
		    socket = io.connect(URL);

		this.SOCKET = socket;

		// if user connected to the chat
		socket.on('connect', function (data) {
			console.log(USER_CONNECTION);
		});

		socket.on("disconnect", function(data) {
			console.log(USER_DISCONNECTION);
		});

		socket.on("message", function(data) {

			let align, user, message, guest;

			if (data && data.user) {

				user    = data.user;
				message = data.message;

				if ("chatBot2000" === user) {
					align = "text-left";
				}
				else if ("echoBot2000" === user) {
					align = "text-right";
					guest = message.match(/^(\w+).*/)[1];
					message = message.replace(/.*:./, "");
				}

				console.log("CHAT-LOG: ", data);
				me.props.onMessage(guest || user, message, align, data);
			}
		});

	}

	/**
	 * Fetching message
	 * @param {String} user as user's nickname
	 * @param {String} msg as text content
	 */
	fetch(user, msg) {
		if (user && msg) {
			this.SOCKET
			    .emit('message',  { message: msg , user: user });
		}
		else {
			console.log("ERROR: Write username and message!");

			// If you want this:
			//
			// this.addLine(
			// 	"Missing username or message!",
			// 	"center",
			// 	true
			// )
		}
	}


}

ChatForm.defaultProps = {
	onMessage: () => {}
};

export default ChatSocket;