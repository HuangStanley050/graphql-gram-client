import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {get_ownFiles_start} from "../store/actions/ownFilesActions";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const SlideShow = props => {
  props.getFiles(props.userId);
  return <h1>Slide show</h1>;
};
const mapDispatchToProps = dispatch => {
  return {
    getFiles: id => dispatch(get_ownFiles_start(id))
  };
};
const mapStateToProps = state => {
  return {
    userId: state.auth.userData.userId
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SlideShow);
