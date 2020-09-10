import React, { Component } from "react";
import Color from "./color";
export default class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "grey", "blue", "yellow"],
    };
  }
  render() {
    return (
      <div>
        {this.state.colors.map((item, index) => (
          <Color key={index} color={item} />
        ))}
      </div>
    );
  }
}
