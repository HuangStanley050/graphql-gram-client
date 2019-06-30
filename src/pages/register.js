import React from "react";
import Layout from "../components/layout";
import UserAuth from "../components/userAuthorization";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Register = props => {
  if (props.isRegistered) {
    return <Redirect to="/login" />;
  }
  return (
    <Layout>
      <h1 className="text-center mt-3">Register page</h1>
      <UserAuth authType="register" />
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    isRegistered: state.auth.isRegistered
  };
};

export default connect(mapStateToProps)(Register);
