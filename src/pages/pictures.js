import React from "react";
import Layout from "../components/layout";
import PostList from "../components/postList";
import Upload from "../components/upload";

const Pictures = props => {
  return (
    <Layout>
      <h1>Protected</h1>
      <PostList />
      <Upload />
    </Layout>
  );
};

export default Pictures;
