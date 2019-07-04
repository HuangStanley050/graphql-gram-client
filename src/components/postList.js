import React, {useEffect, useState} from "react";
import Post from "./post";
import {get_posts_start} from "../store/actions/postActions";
import {connect} from "react-redux";
import {Container} from "reactstrap";
import PictureModal from "./pictureModal";
import Loader from "./loader";

const PostList = props => {
  const [modal, setModal] = useState(false);
  const toggle = e => {
    setModal(!modal);
  };

  useEffect(() => {
    props.getPosts();
  }, []); //when component mounted, fetch posts

  return props.loading ? (
    <Loader />
  ) : (
    <Container>
      {props.posts.map(post => (
        <Post modalToggle={toggle} key={post.fileName} data={post} />
      ))}
      <PictureModal modalStatus={modal} toggle={toggle} />
    </Container>
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
