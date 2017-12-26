import React from 'react'
import { PlaylistItem } from './PlaylistItem'

export class Playlist extends React.Component {

	handleClick(index) {
		this.props.changeVideo(index)
	}

	render() {
		const items = this.props.videos.map((video, index) => {
			return (
				<PlaylistItem
					key={index}
					title={video.name}
					url={video.file}
					onClick={() => this.handleClick(index)} />
			)
		})

		return (
			<div className="playlist">
				<div>
					<h2>Playlist</h2>
				</div>
				{items}
			</div>
		)
	}
}
