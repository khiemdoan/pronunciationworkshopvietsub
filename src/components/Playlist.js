import React from 'react'
import { Container, Header, List, Icon } from 'semantic-ui-react'
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
      <Container>
        <Header size='large'>
          <Icon name='list' color='blue' />
          <Header.Content>
            Playlist
          </Header.Content>
        </Header>
        <List>
          {items}
        </List>
      </Container>
    )
  }
}
