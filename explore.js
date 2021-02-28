import React, { Component } from "react";
import Header from "./header";
import Explore_Body from "./explore_body";

class explore extends Component {
  render() {
    return (
      <div>
        <Header navExplore="active" />
        <Explore_Body />
      </div>
    );
  }
}

export default explore;
