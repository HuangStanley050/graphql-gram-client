import React from "react";
import Layout from "../components/layout";
import PictureModal from "../components/pictureModal";

const Logout = () => (
  <Layout>
    <div
      style={{
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>Good Bye</h1>
    </div>
    <PictureModal />
  </Layout>
);

export default Logout;
