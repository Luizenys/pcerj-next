import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InstitutionalCards(props) {
  return (
    <Card className="card-institucional" style={{ width: '18rem' }}>
        <div className="centraliza">
        <Card.Img className="image" variant="top" src={props.image} />
        </div>
      <Card.Body>
        <Card.Title className="title">{props.title}</Card.Title>
        <Card.Text className="data">
          {props.data}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default InstitutionalCards;