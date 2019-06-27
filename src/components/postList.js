import React, {useEffect} from "react";
import Post from "./post";
import {get_posts_start} from "../store/actions/postActions";
import {connect} from "react-redux";
import Loader from "./loader";

const PostList = props => {
  useEffect(() => {
    props.getPosts();
  }, []); //when component mounted, fetch posts
  return props.loading ? (
    <Loader />
  ) : (
    props.posts.map(post => <Post key={post.fileName} data={post} />)
  );
};

const mapStateToProps = state => {
  return {
    posts: state.post.posts,
    loading: state.post.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(get_posts_start())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
