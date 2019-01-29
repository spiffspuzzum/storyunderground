import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <div className="nav-wrapper">
      <div className="nav-text-wrapper">
        <span className="site-title">
          <Link to="/">storyunderground.com</Link></span>
        <span className="site-subtitle">stories by robert norton</span>
      </div>
    </div>
  </nav>
);

export default Nav;
