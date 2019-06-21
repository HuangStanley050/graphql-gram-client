import React from "react";
import Layout from "../components/layout";
import UserAuth from "../components/userAuthorization";

const Login = () => {
  return (
    <Layout>
      <h1 className="text-center mt-3">Login page</h1>
      <UserAuth authType="login" />
    </Layout>
  );
};

export default Login;
