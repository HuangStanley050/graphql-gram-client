import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";

const Upload = props => {
  const [fileStore, setFile] = useState(null);
  const fileChangeHandler = e => {
    setFile(e.target.files[0]);
  };
  const uploadImage = e => {
    e.preventDefault();
    const formData = new FormData();
    //props.upload(fileStore);
    formData.append("file", fileStore);
    //props.upload(formData);
    console.log(formData);
    setFile(null);
  };
  const uploadStyle = {
    position: "fixed",
    display: "flex",
    bottom: "60px",
    width: "200px",
    right: "80px"
  };
  const inputStyle = {
    padding: "10px",
    width: "9rem",
    cursor: "pointer",
    display: "block",
    color: "red"
  };

  return (
    <Form style={uploadStyle}>
      <FormGroup>
        <Label style={inputStyle} for="exampleFile">
          <i style={{fontSize: "7rem"}} className="fas fa-plus-square" />
        </Label>
        <Input type="file" name="file" id="exampleFile" />
      </FormGroup>
      <FormGroup>
        <Button
          style={{
            ...inputStyle,
            color: "white",
            backgroundColor: "blue",
            borderColor: "unset"
          }}
        >
          <i style={{fontSize: "7rem"}} className="fas fa-upload" />
        </Button>
      </FormGroup>
    </Form>
  );
};

export default Upload;
