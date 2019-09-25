import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Thought from './Thought'

export default function Thoughts(props) {
  const { thoughts } = props
  return (
    <Row>
      <Col xs={12}>
        <h2>Latest Though</h2>
      </Col>
      {thoughts &&
        thoughts.map(thought => (
          <Col key={thought._id} xs={12} sm={6} md={4} lg={3}>
            <Thought thought={thought} />
          </Col>
        ))}
      {!props.though && <Col xs={12}>Loading...</Col>}
    </Row>
  )
}
