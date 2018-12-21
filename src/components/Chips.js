import React from "react";
import PropTypes from "prop-types";

const Chips = ({ tags, storyType }) => {
  tags.unshift(storyType);

  let chips = tags.map((chipText, index) => (
    <div key={index} className={index === 0 ? "chip type" : "chip"}>{chipText}</div>
  ));

  return <div className="chips-wrapper">{chips}</div>;
};

Chips.propTypes = {
  tags: PropTypes.array.isRequired
};

export default Chips;
