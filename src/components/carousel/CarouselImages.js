import React from 'react';
import {connect} from 'react-redux'
import Image from './CarouselImageItem';

/**
 * This class presents the group of images
 *
 * @class CarouselImages
 * @extends React.Component
 */
class CarouselImages extends React.Component {

	render() {

		const {position, images, baseWidth, baseHeight} = this.props;
		const {onImageLoadEnd} = this.props;

		return (
			<div className="carousel-body"
				 ref={node => this.bodyEl = node}>
				{images.map((item, index) => (
					<Image key={index} {...item}
						   active={item.pos == position}
						   width={baseWidth}
					       height={baseHeight}
					       onLoad={onImageLoadEnd}
					/>
				))}
			</div>
		)
	}
}
export default CarouselImages;