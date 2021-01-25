import React from 'react'
import { List } from 'semantic-ui-react'


export class PlaylistItem extends React.Component {

  render() {
    return (
      <List.Item as='a' href={this.props.url} onClick={(e) => this.handleClick(e)}>
        {this.props.title}
      </List.Item>
    )
  }

  handleClick(e) {
    e.preventDefault()
    this.props.onClick()
  }
}
