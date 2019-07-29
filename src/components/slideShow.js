import React, { Component } from "react";

import { connect } from "react-redux";
import { get_ownFiles_start } from "../store/actions/ownFilesActions";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

class SlideShow extends Component {
  state = {
    activeIndex: 0
  };
  componentDidMount() {
    this.props.getFiles(this.props.userId);
  }
  onExiting = () => (this.animating = true);
  onExited = () => (this.animating = false);
  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.files.length - 1
        ? 0
        : this.state.activeIndex + 1;

    this.setState({ activeIndex: nextIndex });
  };
  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.files.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };
  goToIndex = newIndex => {
    if (this.animating) return;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    const slides = this.props.files.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.fileName}
        >
          <img className="w-100" src={item.download} alt={item.altText} />
          <CarouselCaption
            captionText={item.fileName}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });
    const controlledCaro = (
      <Container>
        <Row>
          <Col xs="12" md={{ size: 8, offset: 2 }}>
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators
                items={this.props.files}
                activeIndex={activeIndex}
                onClickHandler={this.goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={this.previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={this.next}
              />
            </Carousel>
          </Col>
        </Row>
      </Container>
    );

    return controlledCaro;
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
