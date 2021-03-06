import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import { Container, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import Loader from "./loader";
import { get_ownFiles_start } from "../store/actions/ownFilesActions";

class SlideShow extends Component {
  componentDidMount() {
    this.props.getFiles(this.props.userId);
  }
  render() {
    const slides = this.props.files.map(file => (
      <div className="slideshow" key={file.fileName}>
        <img alt="slideshow_picture" src={file.download} />
        <p className="legend">{file.fileName}</p>
      </div>
    ));
    return (
      <Container className="mt-5">
        <Row>
          {this.props.loading && <Loader />}
          <Col xs="12" md={{ size: 8, offset: 2 }}>
            <Carousel showThumbs autoPlay showArrows stopOnHover infiniteLoop>
              {slides}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
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
    files: state.personal.files,
    loading: state.personal.loading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SlideShow);
