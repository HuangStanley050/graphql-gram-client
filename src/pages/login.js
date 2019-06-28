import React from "react";
import Layout from "../components/layout";
import UserAuth from "../components/userAuthorization";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const Login = props => {
  if (props.isAuth) {
    return <Redirect to="/pictures" />;
  }
  return (
    <Layout>
      <h1 className="text-center mt-3">Login page</h1>

      <UserAuth authType="login" />
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps)(Login);
