import { Container, Header } from 'semantic-ui-react'
import { Footer } from './components/Footer'
import { PlayerWrapper } from './components/PlayerWrapper'
import { DocumentList } from './components/DocumentList'

function App() {
  return (
    <Container className="raised very padded segment">
      <Header size='huge' textAlign='center'>
        Pronunciation Workshop Vietsub
      </Header>
      <PlayerWrapper />
      <DocumentList />
      <Footer />
    </Container>
  );
}

export default App;
