import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Art from './components/Art/Art';
import Footer from "./components/Footer";
import "./css/materialize.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route path="/art" component={Art} />
          <Route path="/" component={Homepage} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
