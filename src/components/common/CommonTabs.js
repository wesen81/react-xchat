import React from 'react';

/**
 * This class presents the goups of tab buttons
 *
 * @class CommonTabs
 * @extends React.Component
 */
class CommonTabs extends React.Component{

	render() {
		const {children} = this.props;

		return <div className="nav">{children}</div>
	}
}

export default CommonTabs;