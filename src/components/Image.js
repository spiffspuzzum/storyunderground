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

    //Select random length of time between 12 and 5 seconds
    // function randomNumber() {
    //   return Math.floor(Math.random() * (12000 - 5000) + 5000);
    // };

    
    // if (imagesArrayLength > 1) {
    //   setInterval( changeImage(), randomNumber());
    // }
    
    // const changeImage = () => {
    
    // };

  }

  componentWillUnmount() {
    
  };

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
