import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import { VideoPlayer } from './VideoPlayer'
import { Playlist } from './Playlist'


export class PlayerWrapper extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			videos: [],
			currentIndex: 0,
			currentUrlVideo: "",
			autoplay: false,
		}
	}

	componentDidMount() {
		const self = this
		// get videos data
		fetch('videos.json').then(function (response) {
			return response.json()
		}).then(function (videos) {
			self.setState({
				videos: videos,
				currentIndex: 0,
				currentUrlVideo: videos[0].file,
			})
		})
	}

	changeVideo(index) {
		if (index < this.state.videos.length) {
			this.setState({
				currentIndex: index,
				currentUrlVideo: this.state.videos[index].file,
				autoplay: true,
			})
		}
	}

	nextVideo() {
		let currentIndex = this.state.currentIndex;
		if (currentIndex < this.state.videos.length) {
			currentIndex++;
			this.setState({
				currentIndex: currentIndex,
				currentUrlVideo: this.props.videos[currentIndex].file,
				autoplay: true,
			})
		}
	}

	render() {
		return (
			<Segment vertical>
				<Grid stackable celled='internally'>
					<Grid.Column width={11}>
						<VideoPlayer
							url={this.state.currentUrlVideo}
							autoplay={this.state.autoplay} />
					</Grid.Column>
					<Grid.Column width={5}>
						<Playlist
							videos={this.state.videos}
							changeVideo={(index) => this.changeVideo(index)}
							nextVideo={() => this.nextVideo()} />
					</Grid.Column>
				</Grid>
			</Segment>
		)
	}
}