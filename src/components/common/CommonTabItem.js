import React from 'react';

/**
 * This class presents the tab buttons
 *
 * @class CommonTabItem
 * @extends React.Component
 */
class CommonTabItem extends React.Component {

	constructor(prop) {
		super(prop);

		this.state = {
			blink: prop.blink
		}
	}

	/**
	 * Get button status
	 * @returns {string}
	 */
	isActive() {
		return this.props.active === this.props.board ? 'active' : '';
	}

	/**
	 * Get button blink status
	 * @returns {string}
	 */
	isBlink() {
		return this.state.blink ? 'blinked' : '';
	}

	/**
	 * Set blink
	 * @param {Boolean} value
	 */
	blink(value) {
		this.setState({
			blink: value
		})
	}

	render() {

		const {icon, label, board, onClick} = this.props;

		return (
			<div className={`nav-button ${this.isActive()} ${this.isBlink()}`}
			     onClick={()=> onClick(board) }
			     ref={button => this.button = button}
			>
				<a href={`#${board}`} className="nav-wrapper">
					<i className={`nav-icon ${icon}`}/>
					<div className="nav-label">{label}</div>
				</a>
			</div>
		)

	}

}

export default CommonTabItem;