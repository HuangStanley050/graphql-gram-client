import React from "react";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";

const Comment = props => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{props.user} said:</CardTitle>
        <CardText>{props.comment}</CardText>
      </CardBody>
    </Card>
  );
};

export default Comment;
