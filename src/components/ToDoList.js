import React, { Component } from "react";
import ToDoListItem from "./ToDoListItem";

export class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      todoItem: "",
      backUpList: [],
    };
  }

  handleOnClick = () => {
    let todos = this.state.toDoList;
    let todo2 = this.state.backUpList;
    todos.push(this.state.todoItem);
    todo2.push(this.state.todoItem);
    this.setState({
      toDoList: todos,
      backUpList: todo2,
      todoItem: "",
    });
  };

  handletodoItemName = (e) => {
    this.setState({
      todoItem: e.target.value,
    });
  };

  removeItem = (value) => {
    var array = [...this.state.backUpList];
    var index = array.indexOf(value);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ toDoList: array, backUpList: array });
    }
  };

  handleSearchItem = (e) => {
    let itemName = e.target.value;

    var array = [...this.state.backUpList];

    var arrayFiltered = array.filter((item) => item.includes(itemName));

    this.setState({
      toDoList: arrayFiltered,
    });
  };

  render() {
    return (
      <div className="todoContainer">
        <div>
          <input
            placeholder="Add ToDos"
            value={this.state.todoItem}
            onChange={(e) => {
              this.handletodoItemName(e);
            }}
          ></input>{" "}
          <button onClick={this.handleOnClick}>Add</button>
        </div>
        <div>
          <input placeholder="Search" onChange={this.handleSearchItem}></input>
        </div>
        <div>
          {this.state.toDoList.map((item, index) => (
            <ToDoListItem
              removeItem={this.removeItem}
              item={item}
              key={index}
              index={index}
            />
          ))}
        </div>
        <style>{`
        .todoContainer{
            display:grid;
            grid-rows-template: auto auto auto;
            padding:0px 20%;
        }
        `}</style>
      </div>
    );
  }
}

export default ToDoList;
