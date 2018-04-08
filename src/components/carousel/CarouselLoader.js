import React from 'react';

/**
 * This class presents the image preloader
 *
 * @class CarouselLoader
 * @extends React.Component
 */
class CarouselLoader extends React.Component {

	isHidden() {
		return this.props.hidden ? 'hide' : '';
	}


	render() {
		return(
			<div className={`carousel-loader ${this.isHidden()}`}>
				<i className="fa-circle-o-notch fa-spin"/>
			</div>
		);

	}

}

export default CarouselLoader;

