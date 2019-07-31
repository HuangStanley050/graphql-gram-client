import React from "react";
import Layout from "../components/layout";
import Background from "../assets/photo-1494753124839-84d9bbe79043.jpeg";
const Index = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Background})`,
    backgroundRpeat: "no repeat",
    backgroundSize: "contain",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <Layout>
      <div style={backgroundImageStyle}>
        <h1 style={{ color: "white" }}>GraphqlGram</h1>
      </div>
    </Layout>
  );
};

export default Index;
