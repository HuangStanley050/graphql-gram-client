import React from "react";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import {connect} from "react-redux";
import {delete_comment_start} from "../store/actions/commentActions";

const Comment = props => {
  const handleDelete = () => props.deleteComment(props.commentId);
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
            onClick={handleDelete}
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
const mapDispatchToProps = dispatch => {
  return {
    deleteComment: commentId => dispatch(delete_comment_start(commentId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);
