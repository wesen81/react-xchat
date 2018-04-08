import React from 'react';

/**
 * This class is base for Pages
 *
 * @class CommonPage
 * @extends React.Component
 */
class CommonPage extends React.Component {

	isActive() {
		const {active, name} = this.props;
		let result = typeof active === 'string' ? active === name : active;

		return result ? 'active' : '';
	}

	render() {
		const {name, children} = this.props;

		return (
			<div id={name} className={`page ${this.isActive()}`}>{children}</div>
		)
	};
}

export default CommonPage;