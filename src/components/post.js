import React from "react";
import {Row, Col} from "reactstrap";

import {Card, CardImg, CardText, CardBody, CardTitle, Button} from "reactstrap";

const Post = props => {
  const imageStyle = {
    objectFit: "cover",
    height: "700px"
  };
  return (
    <Row style={{marginBottom: "2rem"}}>
      <Col xs="12" md={{size: 8, offset: 2}}>
        <Card>
          <CardImg
            id="image_post"
            top
            width="100%"
            style={imageStyle}
            src={props.data.download}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{props.data.fileName}</CardTitle>

            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button onClick={props.modalToggle}>Add/View Comment</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Post;
