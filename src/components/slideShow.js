import React, { Component } from "react";

import { connect } from "react-redux";
import { get_ownFiles_start } from "../store/actions/ownFilesActions";

class SlideShow extends Component {
  componentDidMount() {
    this.props.getFiles(this.props.userId);
  }
  render() {
    console.log(this.props.files);
    return <h1>Slide show start again</h1>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFiles: id => dispatch(get_ownFiles_start(id))
  };
};
const mapStateToProps = state => {
  return {
    userId: state.auth.userData.userId,
    files: state.personal.files
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SlideShow);
