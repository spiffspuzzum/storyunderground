import React from "react";
import PropTypes from "prop-types";

const Links = ({ links }) => {
  let linkButtons = links.map( link => {
    return (
      <a
        className="waves-effect waves-light btn-large"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        key={link.href}
      >
        {link.linkText}
      </a>
    );
  });

  return <div className="center-align links-wrapper">{linkButtons}</div>;
};

Links.propTypes = {
  links: PropTypes.array.isRequired
};

export default Links;
