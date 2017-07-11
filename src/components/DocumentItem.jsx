import React from 'react'

export class DocumentItem extends React.Component {

	render() {
		return (
			<li>
				<a target="_blank" href={this.props.href}>{this.props.title}</a>
			</li>
		);
	}
}
