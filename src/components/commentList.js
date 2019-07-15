import React, { useState } from "react";
import { Collapse, Button } from "reactstrap";
import { connect } from "react-redux";
import Comment from "./comment";
import CommentLoader from "./commentLoader";
const CommentList = props => {
  const [collapsed, setCollapsed] = useState(false);
  const showContent = e => {
    setCollapsed(!collapsed);
  };
  return (
    <section>
      {props.commentLoading ? (
        <CommentLoader />
      ) : (
        <Button
          color="primary"
          onClick={showContent}
          style={{ marginBottom: "1rem" }}
        >
          Show Comments{" "}
          <span style={{ color: "red" }}>{props.comments.length}</span>
        </Button>
      )}
      <Collapse isOpen={collapsed}>
        {props.comments.map(comment => {
          //console.log(comment);
          return (
            <Comment
              key={comment.id}
              comment={comment.comment}
              user={comment.userId}
              name={comment.userName}
              commentId={comment.id}
            />
          );
        })}
      </Collapse>
    </section>
  );
};
const mapStateToProps = state => {
  return {
    comments: state.post.comments,
    commentLoading: state.post.commentLoading
  };
};
export default connect(mapStateToProps)(CommentList);
