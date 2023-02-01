import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Titulo, Icon } from '../styles/pcStyle';

function PortalCards(props) {
    return (
      <Card className="card-portal" style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title className="title"><Icon inputColor={props.color}><a className={props.icon}></a><Titulo inputColor={props.color}>{props.title}</Titulo></Icon></Card.Title>
          <Card.Text className="text">
            {props.text}
          </Card.Text>
          <Button href={props.link} variant="warning">{props.button}</Button>
        </Card.Body>
      </Card>
    );
  }

export default PortalCards;