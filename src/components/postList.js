import React, { useEffect, useState, useRef } from "react";
import Post from "./post";
import axios from "axios";
import { get_posts_start } from "../store/actions/postActions";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import PictureModal from "./pictureModal";
import {
  current_post,
  infinity_fetch_start
} from "../store/actions/postActions";
import { get_comments_start } from "../store/actions/commentActions";
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
    store.dispatch({ type: "POST_CHANGED" });
  }
};

const handleScroll = setIsFetching => {
  window.onscroll = function() {
    var d = document.documentElement;
    var offset = Math.round(d.scrollTop + window.innerHeight);
    var height = d.offsetHeight;

    // console.log("offset = " + offset);
    // console.log("height = " + height);

    if (offset === height) {
      //console.log("At the bottom");
      //props.infinite(props.currentPage);
      setIsFetching(true);
    } else {
      setIsFetching(false);
    }
  };
};

const PostList = props => {
  const [modal, setModal] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const postEndRef = useRef(null);

  store.subscribe(handleChange);

  const toggle = postId => {
    setModal(!modal);
    props.setCurrentPost(postId);
    props.getComments();
  };

  const scrollToBottom = () => {
    let end = postEndRef.current;
    end.scrollIntoView(true);
  };

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    //const cToken = { cancelToken: source.token };
    props.infinite(props.currentPage, { cancelToken: source.token });
    handleScroll(setIsFetching);
    return () => {
      source.cancel();
    };
  }, []); //when component mounted, fetch posts

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    //const cToken = { cancelToken: source.token };

    if (!isFetching) return;
    const state = store.getState();
    let currentPage = state.post.currentPage;
    let totalPages = state.post.totalPages;
    if (currentPage >= totalPages) return; //that means no more posts left to be fetched from the server

    props.infinite(props.currentPage, { cancelToken: source.token });
    scrollToBottom();
    return () => {
      source.cancel();
    };
  }, [isFetching]);

  return (
    <Container style={{ overFlow: "auto" }}>
      {props.loading ? <Loader /> : null}
      {props.posts.map(post => {
        let postId = post.postId;
        return (
          <Post modalToggle={() => toggle(postId)} key={postId} data={post} />
        );
      })}
      <div ref={postEndRef} className="currentPostStop" />
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
    //getPosts: () => dispatch(get_posts_start()),
    setCurrentPost: postId => dispatch(current_post(postId)),
    getComments: () => dispatch(get_comments_start()),
    infinite: (currentPage, cToken) =>
      dispatch(infinity_fetch_start(currentPage, cToken))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
