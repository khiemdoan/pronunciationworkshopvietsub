import React from 'react';

export class VideoPlayer extends React.Component {

	constructor() {
		super()
	}

	componentDidMount() {
		this.refs.video.onended = this.videoEnded
	}

	componentWillReceiveProps(nextProps) {
		this.refs.video.src = nextProps.url
		if (nextProps.autoplay) {
			this.refs.video.play()
		}
	}

	render() {
		return (
			<div className="player">
				<video controls ref="video" style={{ width: '100%', height: '100%' }}></video>
			</div>
		);
	}

	videoEnded() {
		this.props.nextVideo()
	}
}
