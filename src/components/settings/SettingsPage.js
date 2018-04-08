import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Page from '../common/CommonPage';
import Panel from './SettingsPanel';
import Slider from './SettingsSlider'
import {changeWidth, changeHeight, changeUserName} from "./SettingsActions";

/**
 * This class presents the setting page
 *
 * @class SettingsPage
 * @extends React.Component
 */
class SettingsPage extends React.Component {


	componentDidMount() {
		// Set store
		this.props.onResetUserName(this.props);
	}


	render() {

		const {active, userName} = this.props;
		const {onChangeImageWidth, onChangeImageHeight, onChangeUserName} = this.props;
		const update = active==="settings";

		return (
			<Page name="settings" active={active=="settings"}>
				<Panel label="Photo settings"
				       collapse={true}>
					<Slider label="Width"
							defaultValue={640}
							onChange={onChangeImageWidth}
							update={update}/>
					<Slider label="Height"
							defaultValue={480}
							onChange={onChangeImageHeight}
							update={update}/>

				</Panel>
				<Panel label="Chat settings">
					<input type="text"
					       className="textfield"
					       placeholder="Enter username"
					       spellCheck={false}
						   defaultValue={userName}
						   ref="userNameEl"
						   onChange={onChangeUserName}
					/>
				</Panel>
			</Page>
		)
	}

}

SettingsPage.defaultProps = {
	userName: "Guest"
};

export default connect(
	(state) => {
		return {
			userName: state.settings.userName
		}
	},
	(dispatch) => {
		return {
			onChangeImageWidth: (value) => {
				dispatch(changeWidth(value));
			},
			onChangeImageHeight: (value) => {
				dispatch(changeHeight(value));
			},
			onChangeUserName: (e) => {
				dispatch(changeUserName(e.target.value));
			},
			onResetUserName:(props) => {
				dispatch(changeUserName(props.userName));
			}
		}
	}
)(SettingsPage);