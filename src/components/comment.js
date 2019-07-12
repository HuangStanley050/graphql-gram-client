import React from "react";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import {connect} from "react-redux";

const Comment = props => {
  return (
    <Card>
      <CardBody>
        {props.user === props.userId ? (
          <i
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "red",
              cursor: "pointer"
            }}
            className="fas fa-trash-alt"
          />
        ) : null}
        <CardTitle>{props.name} said:</CardTitle>
        <CardText>{props.comment}</CardText>
      </CardBody>
    </Card>
  );
};
const mapStateToProps = state => {
  return {
    userId: state.auth.userData.userId
  };
};
export default connect(mapStateToProps)(Comment);
