import React, { useState } from "react";
import { connect } from "react-redux";
import { add_comment_start } from "../store/actions/postActions";
import CommentList from "./commentList";
import { Button, Modal, ModalFooter, InputGroup, Input } from "reactstrap";

const PictureModal = props => {
  const [comment, setComment] = useState("");

  const inputHandler = e => setComment(e.target.value);
  const submitComment = e => {
    if (comment === "") {
      alert("Unable to add empty comment");
      return;
    }
    //props.toggle(props.postId);

    props.add_comment(comment);
    setComment("");
  };
  return (
    <section>
      <Modal
        isOpen={props.modalStatus}
        toggle={() => props.toggle(props.postId)}
        className={props.className}
      >
        <InputGroup>
          <Input
            onChange={inputHandler}
            value={comment}
            placeholder="add a comment..."
          />
        </InputGroup>
        <CommentList />
        <ModalFooter>
          <Button color="primary" onClick={submitComment}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={() => props.toggle(props.postId)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </section>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    add_comment: comment => dispatch(add_comment_start(comment))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(PictureModal);
