import React from 'react'
import { List } from 'semantic-ui-react'


export class DocumentItem extends React.Component {

	render() {
		return (
			<List.Item as='a' target="_blank" href={this.props.href}>
				{this.props.title}
			</List.Item>
		)
	}
}
