import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { upload_start } from "../store/actions/uploadActions";
import fs from "fs";

const Upload = props => {
  const [fileStore, setFile] = useState(null);
  const fileChangeHandler = e => {
    setFile(e.target.files[0]);
  };
  const uploadImage = e => {
    e.preventDefault();
    const formData = new FormData();
    //props.upload(fileStore);
    formData.append(0, fs.createReadStream);
    formData.append("file", fileStore);
    props.upload(formData);
    //console.log(formData.get("file"));
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
          <i style={{ fontSize: "7rem" }} className="fas fa-plus-square" />
        </Label>
        <Input
          onChange={fileChangeHandler}
          type="file"
          name="file"
          id="exampleFile"
        />
      </FormGroup>
      <FormGroup>
        <Label style={{ ...inputStyle, color: "blue" }}>
          <i
            onClick={uploadImage}
            style={{ fontSize: "7rem" }}
            className="fas fa-upload"
          />
        </Label>
      </FormGroup>
    </Form>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    upload: file => dispatch(upload_start(file))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Upload);
