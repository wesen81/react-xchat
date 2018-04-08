import React from 'react';

/**
 * This class presents the panel
 *
 * @class SettingsPanel
 * @extends React.Component
 */
class SettingsPanel extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			collapse: this.props.collapse
		};

		this.handleClick = this.handleClick.bind(this);
	}

	isCollpase() {
		return this.state.collapse ? 'collapse' : '';
	}

	handleClick() {
		this.setState({
			collapse: !this.state.collapse
		})
	}

	render() {

		const { name, label, children} = this.props;

		return (
			<div id={name}
			     className={`panel ${this.isCollpase()}`}
			     ref={panel => this.panel = panel} >
				<div className="panel-header"
				     onClick={this.handleClick} >
					{label}
				</div>
				<div className="panel-body">
					<div className="panel-wrapper">
						{children}
					</div>
				</div>
			</div>
		)
	};

}

export default SettingsPanel;