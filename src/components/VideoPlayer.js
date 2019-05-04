import React from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'
import { Player, ControlBar, PlaybackRateMenuButton } from 'video-react'
import '../../node_modules/video-react/dist/video-react.css'


export class VideoPlayer extends React.Component {

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.url !== this.props.url) {
			this.refs.player.load()
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
				<Player ref='player' autoPlay={this.props.autoplay} onEnded={this.props.nextVideo} src={this.props.url}>
					<ControlBar autoHide={true}>
						<PlaybackRateMenuButton
							rates={[2.0, 1.5, 1.0, 0.7, 0.5]}
							order={7.1}
						/>
					</ControlBar>
				</Player>
			</Container>
		)
	}
}
