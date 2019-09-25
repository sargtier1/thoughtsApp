import Container from 'react-bootstrap/Container'
import fetch from 'isomorphic-fetch'
import Thoughts from '../components/Thoughts'

function Index(props) {
  const { thoughts } = props
  return (
    <Container>
      <Thoughts thoughts={thoughts} />
    </Container>
  )
}

// this makes a call to the next server to grab the data BEFORE html is rendered
Index.getInitialProps = async ({ req }) => {
  const url = req ? `${req.protocol}://${req.get('Host')}` : ''
  const res = await fetch(`${url}/api/thoughts`)
  return {
    thoughts: await res.json()
  }
}

export default Index
