import React from 'react'
import { Message, Icon } from 'semantic-ui-react'


export class Footer extends React.Component {
  render() {
    return (
      <Message size='large' icon>
        <Icon name='like' color='red' />
        <Message.Content>
          Improve Your English by experiencing our Accent Reduction Course to learn English Pronunciation and American Accent.
        </Message.Content>
      </Message>
    )
  }
}
