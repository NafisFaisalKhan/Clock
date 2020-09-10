import React, { Component } from "react";
import withRadioBtn from "./HOC/withRadioBtn";

class Color extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default withRadioBtn(Color);
