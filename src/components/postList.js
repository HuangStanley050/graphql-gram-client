import React, {useEffect, useState} from "react";
import Post from "./post";
import {get_posts_start} from "../store/actions/postActions";
import {connect} from "react-redux";
import {Container} from "reactstrap";
import PictureModal from "./pictureModal";
import {current_post} from "../store/actions/postActions";
import {get_comments_start} from "../store/actions/commentActions";
import Loader from "./loader";

const PostList = props => {
  const [modal, setModal] = useState(false);

  const toggle = postId => {
    setModal(!modal);
    props.setCurrentPost(postId);
    props.getComments();
  };

  useEffect(() => {
    props.getPosts();
  }, []); //when component mounted, fetch posts

  return props.loading ? (
    <Loader />
  ) : (
    <Container>
      {props.posts.map(post => {
        let postId = post.postId;
        return (
          <Post modalToggle={() => toggle(postId)} key={postId} data={post} />
        );
      })}
      <PictureModal
        postId={props.currentPostId}
        modalStatus={modal}
        toggle={toggle}
      />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.post.posts,
    loading: state.post.loading,
    currentPostId: state.post.currentPost
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(get_posts_start()),
    setCurrentPost: postId => dispatch(current_post(postId)),
    getComments: () => dispatch(get_comments_start())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
