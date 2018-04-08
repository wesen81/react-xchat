import React from 'react';
import {connect} from 'react-redux';
import Page from '../common/CommonPage';
import Control from './CarouselControl';
import Images from './CarouselImages';
import Loader from './CarouselLoader';
import Swipe from '../common/Swipe';

import {addNewImage, goToNextImage, goToPrevImage, goToPosition, hideImageLoader} from "./CarouselActions";

/**
 * This class presents the carousel page
 *
 * @class CarouselPage
 * @extends React.Component
 */
class CarouselPage extends React.Component {

	render() {

		const {active, width, height, hideLoader, images, position} = this.props;
		const {onGoToPrevImage, onGoToNextImage, onImageLoadEnd} = this.props;

		return (
			<Page name="carousel" active={active == "carosuel"}>
				<Swipe
					onSwipeLeft={() => onGoToPrevImage(this.props)}
					onSwipeRight={() => onGoToNextImage(this.props)}>

					<Images images={images}
							baseWidth={width}
							baseHeight={height}
							position={position}
							onImageLoadEnd={onImageLoadEnd}
					/>

				</Swipe>
				<Control icon="fa-angle-left"
						 align="left"
						 onClick={() => onGoToPrevImage(this.props)}
				/>
				<Control icon="fa-angle-right"
						 align="right"
						 onClick={() => onGoToNextImage(this.props)}
				/>
				<Loader hidden={hideLoader}/>

			</Page>
		)
	}

}

export default connect(
	(state) => {
		return {
			width: state.settings.imageWidth,
			height: state.settings.imageHeight,
			hideLoader: state.carousel.hideLoader,
			position: state.carousel.position,
			images: state.carousel.images
		}
	},
	(dispatch) => {
		return {
			onImageLoadEnd: (e) => {
				dispatch(hideImageLoader(true))
			},
			onGoToNextImage: (props) => {
				let {position, images, width, height} = props,
					nextPosition = position + 1,
					result;

					result = images.find(item => {
						return (item.pos == nextPosition)
					});

					if (!result) {
						dispatch(addNewImage(nextPosition, width, height))
					}
					else {
						dispatch(goToPosition(nextPosition));
					}

			},
			onGoToPrevImage: (props) => {
				let {position, images, width, height} = props,
				    prevPosition = position - 1,
				    result;

				result = images.find(item => {
					return (item.pos == prevPosition)
				});

				if (!result) {
					dispatch(addNewImage(prevPosition, width, height))
				}
				else {
					dispatch(goToPosition(prevPosition));
				}

			}
		}
	}
)(CarouselPage);