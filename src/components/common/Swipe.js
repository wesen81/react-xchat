import React, {Component, Children, PropTypes} from 'react';
import ReactDOM from 'react-dom';

/**
 * Swipe Event
 *
 * @class Swipe
 * @extends React.Component
 */
class Swipe extends Component {

	constructor(props) {
		super(props);

		const {children} = this.props;

		let me = this,
			touchStartCoords =  {'x':-1, 'y':-1}, // X and Y coordinates on mousedown or touchstart events.
			touchEndCoords = {'x':-1, 'y':-1},// X and Y coordinates on mouseup or touchend events.
			direction = 'undefined',// Swipe direction
			minDistanceXAxis = 30,// Min distance on mousemove or touchmove on the X axis
			maxDistanceYAxis = 500,// Max distance on mousemove or touchmove on the Y axis
			maxAllowedTime = 3000,// Max allowed time between swipeStart and swipeEnd
			startTime = 0,// Time on swipeStart
			elapsedTime = 0;// Elapsed time between swipeStart and swipeEnd

		this.handleStart = (e) => {
			e = e ? e : window.event;
			e = (e.changedTouches) ? e.changedTouches[0] : e;
			touchStartCoords = {'x':e.pageX, 'y':e.pageY};
			startTime = new Date().getTime();
			me.props.onSwipeStart();
		};

		this.handleMove = (e) => {
			e = e ? e : window.event;
			e.preventDefault();
			me.props.onSwipeMove();
		};

		this.handleEnd = (e) => {
			e = e ? e : window.event;
			e = (e.changedTouches) ? e.changedTouches[0] : e;
			touchEndCoords = {'x':e.pageX - touchStartCoords.x, 'y':e.pageY - touchStartCoords.y};
			elapsedTime = new Date().getTime() - startTime;
			me.props.onSwipeEnd();

			if (elapsedTime <= maxAllowedTime){
				if (Math.abs(touchEndCoords.x) >= minDistanceXAxis && Math.abs(touchEndCoords.y) <= maxDistanceYAxis){
					direction = (touchEndCoords.x < 0)? 'left' : 'right';

					switch(direction){
						case 'left':
							me.props.onSwipeLeft();
							break;
						case 'right':
							me.props.onSwipeRight();
							break;
					}
				}
			}
		};
	}

	componentDidMount() {
		const {children} = this.props;

		let swipeTargetEl = ReactDOM.findDOMNode(this.refs.swipeTargetEl);

		swipeTargetEl.addEventListener('mousedown', this.handleStart);
		swipeTargetEl.addEventListener('touchstart', this.handleStart);
		swipeTargetEl.addEventListener('mousemove', this.handleMove);
		swipeTargetEl.addEventListener('touchmove', this.handleMove);
		swipeTargetEl.addEventListener('mouseup', this.handleEnd);
		swipeTargetEl.addEventListener('touchend', this.handleEnd);

	}

	renderChildren(props) {
		const {children} = this.props;

		return React.cloneElement(children, {
			ref: "swipeTargetEl"
		});
	}

	render() {
		return Children.only(this.renderChildren(this.props));
	}
}

Swipe.propTypes = {
	onSwipeStart: PropTypes.func,
	onSwipeMove: PropTypes.func,
	onSwipeEnd: PropTypes.func,
	onSwipeLeft: PropTypes.func,
	onSwipeRight: PropTypes.func,
};

Swipe.defaultProps = {
	onSwipeStart: () => {},
	onSwipeMove: () => {},
	onSwipeEnd: () => {},
	onSwipeLeft: () => {},
	onSwipeRight: () => {},
};

export default Swipe;