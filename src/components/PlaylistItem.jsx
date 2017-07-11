import React from 'react'

export class PlaylistItem extends React.Component {

	render() {
		return (
			<div className="playlist-item">
				<a href={this.props.url} onClick={(e) => this.handleClick(e)}>
					{this.props.title}
				</a>
			</div>
		);
	}

	handleClick(e) {
		e.preventDefault()
		this.props.onClick()
	}
}
