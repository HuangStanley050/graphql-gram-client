import React from "react";
import Layout from "../components/layout";
import PostList from "../components/postList";
import Upload from "../components/upload";

const Pictures = props => {
  return (
    <Layout>
      <PostList />
      <Upload />
    </Layout>
  );
};

export default Pictures;
