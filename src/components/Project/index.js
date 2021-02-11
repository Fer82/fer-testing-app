import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import "./style.css";

export default function Project(props) {

  const handleClick = (e) => {
    e.preventDefault()
    window.open(props.url, "_blank");
  }
  
  return (
    <div className="parent">
      <Card className="card">
        <Card.Img variant="top" src={props.image} />
        <Card.Body className="card-body-content">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <div className="card-button">
            <Button variant="primary" onClick={handleClick}>Visit Project</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

