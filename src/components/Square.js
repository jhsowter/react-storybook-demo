import React from "react";
import "./square.css";
export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props?.value,
    };
  }
  render() {
    return <button className="square">{this.state.value}</button>;
  }
}
