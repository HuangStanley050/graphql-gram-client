import React from "react";
import Layout from "../components/layout";
import PostList from "../components/postList";

const Pictures = props => {
  return (
    <Layout>
      <h1>Protected</h1>
      <PostList />
    </Layout>
  );
};

export default Pictures;
