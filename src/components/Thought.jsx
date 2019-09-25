import Card from 'react-bootstrap/Card'

export default function Thought({ thought }) {
  
  return (
    <Card>
      <Card.boy>
        <Card.title bg={secondary} text="white" style={cardStyle}>{thought.message}</Card.title>
        <Card.Body>{thought.author}</Card.Body>
      </Card.boy>
    </Card>
  )
}

const cardStyle = { marginTop: "15px" }