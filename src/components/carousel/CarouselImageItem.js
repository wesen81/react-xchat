import React from 'react';

/**
 * This class presents the image
 *
 * @class CarouselImageItem
 * @extends React.Component
 */
class CarouselImageItem extends React.Component {

	/**
	 * Get image is active
	 * @returns {string}
	 */
	isActive() {
		return this.props.active ? 'active' : ''
	}

	render() {
		const {src, width, height, onLoad} = this.props;

		return (
			<div className={`carousel-item ${this.isActive()}`}>
				<img src={src}
				     style={{width: width || 'auto', height: height || 'auto'}}
					 onLoad={onLoad}
				/>

			</div>
		)
	}

}

export default CarouselImageItem;