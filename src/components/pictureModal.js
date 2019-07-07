import React, {useState} from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  Input
} from "reactstrap";

const PictureModal = props => {
  const [modal, toggle] = useState(false);
  const [comment, setComment] = useState("");
  const toggleModal = e => {
    toggle(!modal);
  };
  const inputHandler = e => setComment(e.target.value);

  return (
    <section>
      <Modal
        isOpen={props.modalStatus}
        toggle={props.toggle}
        className={props.className}
      >
        <ModalHeader toggle={props.toggle}>Add Comment</ModalHeader>

        <InputGroup>
          <Input onChange={inputHandler} value={comment} />
        </InputGroup>

        <ModalFooter>
          <Button color="primary" onClick={props.toggle}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </section>
  );
};

export default PictureModal;
