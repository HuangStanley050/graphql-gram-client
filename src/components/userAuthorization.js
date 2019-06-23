import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Input, Container} from "reactstrap";
import {connect} from "react-redux";
import {login_start} from "../store/actions/authActions";

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
  const submbitHandler = e => {
    e.preventDefault();
    if (props.authType === "login") {
      props.login({email, password});
      setEmail("");
      setPassword("");
    }
  };

  const RegisterBox = (
    <section style={{width: "420px", margin: "1rem auto"}}>
      <Container>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              onChange={inputHander}
              type="text"
              name="name"
              id="name"
              value={name}
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
              value={email}
              placeholder="jon_smith@example.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              onChange={inputHander}
              value={password}
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
              value={password2}
              name="confrimpassword"
              id="confirmpassword"
              placeholder="Retype your password"
            />
          </FormGroup>
          <Button style={{marginRight: "2rem"}} size="lg" color="primary">
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
    <section style={{width: "420px", margin: "1rem auto"}}>
      <Container>
        <Form onSubmit={submbitHandler}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              onChange={inputHander}
              type="email"
              name="email"
              id="email"
              value={email}
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
              value={password}
              placeholder="your password"
            />
          </FormGroup>
          <Button style={{marginRight: "2rem"}} size="lg" color="primary">
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

const mapDispatchToProps = dispatch => {
  return {
    login: userInfo => dispatch(login_start(userInfo))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UserAuth);
