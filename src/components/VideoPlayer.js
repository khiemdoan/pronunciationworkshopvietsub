import React from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'
import ReactPlayer from 'react-player'

export class VideoPlayer extends React.Component {
  render() {
    return (
      <Container>
        <Header size='large'>
          <Icon name='film' color='green' />
          <Header.Content>
            Video
          </Header.Content>
        </Header>
        <ReactPlayer controls={true} onEnded={this.props.nextVideo} url={this.props.url}>
        </ReactPlayer>
      </Container>
    )
  }
}
