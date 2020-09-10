import React from "react";

const withRadioBtn = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        checked: false,
        styles: { backgroundColor: this.props.color },
      };
    }
    handlOnClick = () => {
      this.setState({ checked: !this.state.checked });
    };
    render() {
      return (
        <OriginalComponent {...this.props}>
          <div style={this.state.checked ? this.state.styles : null}>
            <label htmlFor={"radioBtn" + this.props.color}>
              {this.props.color}
            </label>
            <input
              type="radio"
              checked={this.state.checked}
              onClick={this.handlOnClick}
              name={"radioBtn" + this.props.color}
            ></input>
          </div>
        </OriginalComponent>
      );
    }
  }
  return NewComponent;
};

export default withRadioBtn;
