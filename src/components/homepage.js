import React, { Component } from "react";
import Header from "./header";
import Homepage_Body from "./homepage_body";

class homepage extends Component {
  render() {
    return (
      <div>
        <Header navHome="active" />
        <Homepage_Body />
      </div>
    );
  }
}

export default homepage;
