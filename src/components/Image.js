import React, { Component } from "react";
import PropTypes from "prop-types";

class Image extends Component {
  state = {
    imageIndex: 0
  };

  constructor(props) {
    super(props);
    this.images = this.props.images;
  }

  componentDidMount(props) {
    let imagesArrayLength = this.images.length;

    function randomNumber() {
      return Math.floor(Math.random() * (12000 - 5000) + 5000);
    }

    if (imagesArrayLength > 1) {
      setInterval(() => {
        if (this.state.imageIndex < imagesArrayLength - 1) {
          this.setState(prevState => ({
            imageIndex: prevState.imageIndex + 1
          }));
        } else {
          this.setState({ imageIndex: 0 });
        }
      }, randomNumber());
    }
  }

  render() {
    const { images } = this.props;

    return (
      <img
        alt={images[this.state.imageIndex].altText}
        src={images[this.state.imageIndex].src}
      />
    );
  }
}

Image.propTypes = {
  images: PropTypes.array.isRequired
};

export default Image;
