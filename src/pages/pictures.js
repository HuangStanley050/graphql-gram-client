import React, { useEffect } from "react";
import Layout from "../components/layout";
import PostList from "../components/postList";
import Upload from "../components/upload";
// const handleScroll = () => {
//   if (
//     window.innerHeight + document.documentElement.scrollTop !==
//     document.documentElement.offsetHeight
//   )
//     //return;
//     console.log("Fetch more list items!");
// };
const Pictures = props => {
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <Layout>
      <PostList />
      <Upload />
    </Layout>
  );
};

export default Pictures;

/*
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
 */
