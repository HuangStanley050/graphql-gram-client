import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login_start } from "../store/actions/authActions";

const useForm = () => {
  const [form, setValue] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const handleChange = e => {
    setValue({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const resetFields = fieldName => {
    setValue({
      ...form,
      [fieldName]: ""
    });
  };

  return [form, handleChange, resetFields];
};

const UserAuth = props => {
  const [form, handleChange, resetFields] = useForm();

  const submitHandler = e => {
    e.preventDefault();
    if (props.authType === "login") {
      props.login({ email: form.email, password: form.password });
      resetFields("email");
      resetFields("password");
    }
  };

  const RegisterBox = (
    <section style={{ width: "420px", margin: "1rem auto" }}>
      <Container>
        <Form onSubmit>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              value={form.name}
              placeholder="John Smith"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              value={form.email}
              placeholder="jon_smith@example.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              onChange={handleChange}
              value={form.password}
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
              onChange={handleChange}
              value={form.password2}
              name="password2"
              id="password2"
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
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              value={form.email}
              placeholder="jon_smith@example.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              value={form.password}
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

  if (props.isAuth) {
    return <Redirect to="/pictures" />;
  }

  return props.authType === "login" ? LoginBox : RegisterBox;
};

const mapDispatchToProps = dispatch => {
  return {
    login: userInfo => dispatch(login_start(userInfo))
  };
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAuth);
