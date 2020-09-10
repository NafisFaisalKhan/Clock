import React, { Component } from "react";

export class ToDoListItem extends Component {
  render() {
    return (
      <div onClick={() => this.props.removeItem(this.props.item)}>
        {this.props.index + 1}
        {")  "}
        {this.props.item}
      </div>
    );
  }
}

export default ToDoListItem;
