import React from "react";

import Subfooter from "./Subfooter";

const Footer = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s6">
          <img
            id="footer-img"
            className="circle responsive-img"
            src="images/me.jpg"
            alt="Me wearing a bear mask"
          />
        </div>

        <div className="col l6 s6">
          <h5 className="white-text">Hi!</h5>
          <p className="grey-text text-lighten-4">
            My name is Robert Norton, and I wrote these books and short stories.
            I live in Portland, Oregon.
          </p>
          <p>Please enjoy.</p>
          <div
            className="fb-like"
            data-href="https://www.facebook.com/storyunderground"
            data-layout="button"
            data-action="like"
            data-size="large"
            data-show-faces="false"
            data-share="true"
          />
        </div>
      </div>
    </div>

    <Subfooter />
  </footer>
);

export default Footer;
