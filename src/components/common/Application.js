import React from 'react';
import { connect} from 'react-redux';
import Boards from './CommonBoards';
import Tabs from './CommonTabs';
import Tab from './CommonTabItem';
import Chat from '../chat/ChatPage';
import Carosuel from '../carousel/CarouselPage';
import Settings from '../settings/SettingsPage';
import {changeBoard} from "./CommonActions";


/**
 * This class presents application
 *
 * @class Application
 * @extends React.Component
 */
class Application extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidUpdate(nProps) {
		let { length, activeItem } = this.props;
	    if (activeItem != 'chat') {
		    if (length !== nProps.length) this.chat.blink(true);
	    }
	    else {
	        this.chat.blink(false);
	    }
	}

	render() {

		const {activeItem, onChangeBoard} = this.props;

		let tabs = [
			{
				label: "Chat",
				icon: "fa-comment",
				board: "chat",
				ref: node => this['chat'] = node
			},
			{
				label: "Carousel",
				icon: "fa-image",
				board: "carosuel",
			},
			{
				label: "Settings",
				icon: "fa-image",
				board: "settings"
			}
		];

		return (



			<div>
				<Tabs>
					{
						tabs.map((tab, index) =>
							<Tab
								key={index}
								{...tab}
								onClick={onChangeBoard}
								active={activeItem}
							/>
						)
					}
				</Tabs>
				<Boards>
					<Chat active={activeItem}/>
					<Carosuel active={activeItem}/>
					<Settings active={activeItem}/>
				</Boards>
			</div>
		)
	}

}

export default connect(
	(state) => {
		return {
			activeItem: state.common.activeItem,
			length: state.chat.messages.length
		}
	},
	(dispatch) => {
		return {
			onChangeBoard: (name) => {
				dispatch(changeBoard(name));
			}
		}
	}
)(Application);
