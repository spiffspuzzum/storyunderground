import React, { Component } from "react";
import "./css/materialize.css";
import "./App.css";

import Nav from "./components/Nav";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Grid />
        <Footer />
      </div>
    );
  }
}

export default App;
