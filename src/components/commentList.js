import React, {useState} from "react";
import {Collapse, Button, CardBody, Card} from "reactstrap";
import {connect} from "react-redux";
import Comment from "./comment";
const CommentList = props => {
  const [collapsed, setCollapsed] = useState(false);
  const showContent = e => {
    setCollapsed(!collapsed);
  };
  return (
    <section>
      <Button
        color="primary"
        onClick={showContent}
        style={{marginBottom: "1rem"}}
      >
        Show Comments{" "}
        <span style={{color: "red"}}>{props.comments.length}</span>
      </Button>
      <Collapse isOpen={collapsed}>
        {props.comments.map(comment => {
          return (
            <Comment
              key={comment.id}
              comment={comment.comment}
              user={comment.userId}
              name={comment.userName}
            />
          );
        })}
      </Collapse>
    </section>
  );
};
const mapStateToProps = state => {
  return {
    comments: state.post.comments
  };
};
export default connect(mapStateToProps)(CommentList);

// <Card>
//   <CardBody>
//     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
//     terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
//     labore wes anderson cred nesciunt sapiente ea proident.
//   </CardBody>
// </Card>
