import React from "react";
import Layout from "../components/layout";
import UserAuth from "../components/userAuthorization";

const Register = () => {
  return (
    <Layout>
      <h1 className="text-center mt-3">Register page</h1>
      <UserAuth authType="register" />
    </Layout>
  );
};

export default Register;
