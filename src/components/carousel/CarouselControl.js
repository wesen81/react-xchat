import React from 'react';

/**
 * This class presents the pager, wehere the user can click and show new image
 *
 * @class CarouselControl
 * @extends React.Component
 */
class CarouselControl extends React.Component {

	render() {

		const {icon, align, onClick} = this.props;

		return (
			<div className={`carousel-control ${align}`} onClick={onClick}>
				<i className={`carousel-icon ${icon}`}/>
			</div>
		)

	}

}

export default CarouselControl;