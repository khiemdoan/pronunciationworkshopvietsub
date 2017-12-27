import React from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'


export class VideoPlayer extends React.Component {

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
			<Container>
				<Header size='large'>
					<Icon name='film' color='green' />
					<Header.Content>
						Video
    			</Header.Content>
				</Header>
				<video controls ref="video" style={{ width: '100%', height: '100%' }}></video>
			</Container>
		)
	}

	videoEnded() {
		this.props.nextVideo()
	}
}
