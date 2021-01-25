import React from 'react'
import { Segment, Header, List, Icon } from 'semantic-ui-react'


export class DocumentList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      documents: []
    }
  }

  componentDidMount() {
    const self = this
    // get document data
    fetch('documents.json')
    .then(res => res.json())
    .then(arr => self.setState({ documents: arr }))
  }

  render() {
    const items = this.state.documents.map((doc, index) => {
      return (
        <List.Item key={index} as='a' target="_blank" href={doc.file}>
          {doc.name}
        </List.Item>
      )
    })

    return (
      <Segment vertical>
        <Header size='large' textAlign="left">
          <Icon name='file pdf outline' color='red' />
          <Header.Content>
            Documents
          </Header.Content>
        </Header>

        <List ordered>
          {items}
        </List>
      </Segment>
    )
  }
}
