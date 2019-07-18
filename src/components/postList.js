import React, {useEffect, useState} from "react";
import Post from "./post";
import {get_posts_start} from "../store/actions/postActions";
import {connect} from "react-redux";
import {Container} from "reactstrap";
import PictureModal from "./pictureModal";
import {current_post, infinity_fetch_start} from "../store/actions/postActions";
import {get_comments_start} from "../store/actions/commentActions";
import store from "../storeSetup";
import Loader from "./loader";

let currentValue = "";

const select = state => {
  return state.post.currentPost;
};

const handleChange = () => {
  let previousValue = currentValue;
  currentValue = select(store.getState());

  if (previousValue !== currentValue) {
    store.dispatch({type: "POST_CHANGED"});
  }
};

const PostList = props => {
  const [modal, setModal] = useState(false);
  //const [post,setPost]=useState("");
  store.subscribe(handleChange);

  const toggle = postId => {
    setModal(!modal);
    props.setCurrentPost(postId);
    props.getComments();
  };

  useEffect(() => {
    //props.getPosts();
    props.infinite(props.currentPage);
    window.onscroll = function() {
      var d = document.documentElement;
      var offset = Math.round(d.scrollTop + window.innerHeight);
      var height = d.offsetHeight;

      console.log("offset = " + offset);
      console.log("height = " + height);

      if (offset === height) {
        console.log("At the bottom");
      }
    };
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
    currentPostId: state.post.currentPost,
    postChanged: state.post.postChanged,
    comments: state.post.comments,
    currentPage: state.post.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(get_posts_start()),
    setCurrentPost: postId => dispatch(current_post(postId)),
    getComments: () => dispatch(get_comments_start()),
    infinite: currentPage => dispatch(infinity_fetch_start(currentPage))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
