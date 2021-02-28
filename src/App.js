import React, { Component } from "react";
import { Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Explore from "./components/explore";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/explore" component={Explore} />
      </div>
    );
  }
}

export default App;
