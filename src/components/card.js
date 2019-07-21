import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle,  Button } from 'reactstrap';

const MyCard = (props) => {
  return (
    <div>
      <Card className="d-flex flex-column mx-2">
        <CardImg top width="100%" src={props.src} />
        <CardBody>
          <CardTitle> {props.CardTitle} </CardTitle>
          <CardText> {props.CardText} </CardText>
          <Button onClick = {props.onClick} ></Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MyCard;