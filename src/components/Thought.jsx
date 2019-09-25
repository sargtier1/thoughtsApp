import Card from 'react-bootstrap/Card'

export default function Thought({ thought }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title bg="secondary" text='white' style={cardStyle}>
          {thought.message}
        </Card.Title>
        <Card.Text>{thought.author}</Card.Text>
      </Card.Body>
    </Card>
  )
}

const cardStyle = { marginTop: '15px' }
