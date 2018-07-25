import React, { Component } from "react";
import i1 from "../../assets/img/portfolio-1.jpg";
import i2 from "../../assets/img/portfolio-2.jpg";
import i3 from "../../assets/img/portfolio-3.jpg";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import React_Bootstrap_Carousel from 'react-bootstrap-carousel'

const styles = { height: 400, width: "100%" };

class AsyncSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
 /* onSelect = (active, direction) => {
    // console.log(`active=${active} && direction=${direction}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    if (leftIcon && rightIcon) {
      this.setState({
        leftIcon: undefined,
        rightIcon: undefined
      });
    } else {
      this.setState({
        leftIcon: <span className="glyphicon glyphicon-glass" />,
        rightIcon: <span className="glyphicon glyphicon-music" />
      });
    }
  };*/
  render() {
   /* let { leftIcon, rightIcon } = this.state;
    var React_Bootstrap_Carousel = require("react-bootstrap-carousel")
    return (
      <div className="col-md-12" style={{ marginTop: 20 }}>
        <React_Bootstrap_Carousel
          animation={true}
          autoplay={this.state.autoplay}
          slideshowSpeed={7000}
          defaultActiveIndex={0}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          onSelect={this.onSelect}
          ref={r => (this.slider = r)}
        >
          <div style={{ height: 400 }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://www.w3schools.com/bootstrap/ny.jpg"
            />
            <div className="carousel-caption">Image</div>
          </div>
          <div style={{ ...styles, backgroundColor: "aqua" }}>
            <video className="carousel-center" controls style={{ width: "75%" }} height="250">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
            <div className="carousel-caption">Video</div>
          </div>
          <div
            style={{
              height: 400,
              width: "100%",
              backgroundColor: "lightpink"
            }}
          >
            <div className="carousel-center">center Text</div>
            <div className="carousel-caption">Text</div>
          </div>
          <div style={{ ...styles, backgroundColor: "lightblue" }}>
            <span>text</span>
            <div className="carousel-caption">Text</div>
          </div>
          <div style={{ ...styles, backgroundColor: "lightblue" }}>
            <div className="carousel-center">
              <iframe
                style={{ width: 500 }}
                height="250"
                src="https://www.youtube.com/embed/MhkGQAoc7bc?showinfo=0"
                frameBorder="0"
                allowFullScreen
              />
            </div>
            <div className="carousel-caption">Youtube</div>
          </div>
        </React_Bootstrap_Carousel>
      </div>
    );*/
  }
}

export default AsyncSlider;
