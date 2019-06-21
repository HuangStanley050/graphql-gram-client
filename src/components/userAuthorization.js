import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";

const UserAuth = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const inputHander = e => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "confirmpassword":
        setPassword2(e.target.value);
        break;
      default:
        break;
    }
  };
  const RegisterBox = (
    <section style={{ width: "420px", margin: "1rem auto" }}>
      <Container>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              onChange={inputHander}
              type="text"
              name="name"
              id="name"
              placeholder="John Smith"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              onChange={inputHander}
              type="email"
              name="email"
              id="email"
              placeholder="jon_smith@example.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              onChange={inputHander}
              type="password"
              name="password"
              id="password"
              placeholder="your password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="confirmpassword">Confirm Password</Label>
            <Input
              type="password"
              onChange={inputHander}
              name="confrimpassword"
              id="confirmpassword"
              placeholder="Retype your password"
            />
          </FormGroup>
          <Button style={{ marginRight: "2rem" }} size="lg" color="primary">
            Submit
          </Button>
          <Button size="lg" color="danger">
            Reset
          </Button>
        </Form>
      </Container>
    </section>
  );
  const LoginBox = (
    <section style={{ width: "420px", margin: "1rem auto" }}>
      <Container>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              onChange={inputHander}
              type="email"
              name="email"
              id="email"
              placeholder="jon_smith@example.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              onChange={inputHander}
              type="password"
              name="password"
              id="password"
              placeholder="your password"
            />
          </FormGroup>
          <Button style={{ marginRight: "2rem" }} size="lg" color="primary">
            Submit
          </Button>
          <Button size="lg" color="danger">
            Reset
          </Button>
        </Form>
      </Container>
    </section>
  );
  return props.authType === "login" ? LoginBox : RegisterBox;
};

export default UserAuth;
