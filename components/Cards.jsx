import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  const { button } = props;

  if (button == "none") {
    return (
      <Card className="card-acessar" style={{ width: '18rem' }}>
        <div className="centraliza">
          <Card.Img className="image" variant="top" src={props.image} />
        </div>
        <Card.Body>
          <Card.Title className="title">{props.title}</Card.Title>
          <Card.Text className="text">
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }else{
    return (
      <Card className="card-acessar" style={{ width: '18rem' }}>
        <div className="centraliza">
          <Card.Img className="image" variant="top" src={props.image} />
        </div>
        <Card.Body>
          <Card.Title className="title">{props.title}</Card.Title>
          <Card.Text className="text">
            {props.text}
          </Card.Text>
          <Button variant="warning">{props.button}</Button>
        </Card.Body>
      </Card>
    );
  }
  
}

export default Cards;