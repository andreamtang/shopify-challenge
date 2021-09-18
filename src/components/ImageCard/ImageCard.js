import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './ImageCard.css';

export default function ImageCard(props) {
  return (
    <Card className="mb-5 mx-auto bg-transparent Card" >
      <Card.Header className="border-bottom-0 CardHeader">
        <Card.Img className="CardImage" variant="top" src={props.url} alt="" />
      </Card.Header>
      <Card.Body className="CardBody">
        <Card.Title className="text-light CardTitle">
          <span className="CardTitle">{props.title}</span> • <span className="CardDate">{props.date}</span>
        </Card.Title>
        <Card.Text className="mb-2 CardDescription">
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}