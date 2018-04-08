import React from 'react';

/**
 * This class presents range slider
 *
 *  @class SettingsSlider
 *  @extends React.Component
 */
class SettingsSlider extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			position: 0
		};

		this.rendered = false;

		this.isMoving = false;
		this.isReady = false;
		this.maxRecord = 2000;

		this.handleStart = this.handleStart.bind(this);
		this.handleEnd = this.handleEnd.bind(this);
		this.handleMove = this.handleMove.bind(this);
	}

	componentWillMount() {
		let me = this;
		window.addEventListener('mouseup', me.handleEnd);
		window.addEventListener('touchend', me.handleEnd);
		window.addEventListener('mousemove', me.handleMove);
		window.addEventListener('touchmove', me.handleMove);

	}

	componentDidMount() {
			this.resetPosition();
	}

	componentDidUpdate() {
		if (this.props.update && this.rendered === false) {
			this.resetPosition();
			this.rendered = true;
		}
	}

	/**
	 * Reset slider position.
	 */
	resetPosition() {
		this.setPositionByPixel(this.props.defaultValue);
	}


	move(e) {

		let me     = this,
			{ tracerEl, buttonEl} = me,
			min, max, event, mousePos, position, record;

		if (me.isMoving) {

			min      = 0;
			max      = tracerEl.offsetWidth - buttonEl.offsetWidth;
			event    = e.changedTouches ? e.changedTouches[0] : e;
			mousePos = (event.pageX - tracerEl.offsetLeft - (buttonEl.offsetWidth / 2));
			position = (mousePos > max ? max : mousePos < min ? min : mousePos);
			record   = Math.floor((position / max) * me.maxRecord);

			me.setPositionByPixel(record);
		}
	}

	/**
	 * You can set the resolution of images
	 * @param {Number} pixel
	 * @param {Boolean} suspend
	 */
	setPositionByPixel(pixel, suspend) {

		pixel = pixel > this.maxRecord ? this.maxRecord : pixel;

		let me = this,
			{ buttonEl, tracerEl, textEl } = me,
			max      = tracerEl.offsetWidth - buttonEl.offsetWidth,
			position = Math.floor((pixel / me.maxRecord) * max);

		this.setState({
			position: position
		});

		textEl.value = pixel;

		if (!suspend) this.props.onChange(pixel);

	}

	handleStart(e) {
		this.isMoving = true;
		this.move(e)
	}

	handleEnd() {
		this.isMoving = false;
	}

	handleMove(e) {
		this.move(e)
	}

	render() {

		const {label} = this.props;

		const {position} = this.state;

		return (
			<div className="slider">
				<div className="tracer"
				     onMouseDown={this.handleStart}
				     onTouchStart={this.handleStart}
				     ref={node => this.tracerEl = node}>
					<div className="tracer-button"
					     style={{marginLeft: position}}
					     ref={node => this.buttonEl = node}/>
				</div>
				<div className="tooltip">
					<div className="label">
						{label} <br/> (px)
					</div>
					<input type="text"
					       readOnly={true}
					       className="textfield"
					       ref={node => this.textEl = node}/>

				</div>

			</div>
		)
	}

}

export default SettingsSlider;