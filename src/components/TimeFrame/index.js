import React, { Component } from "react";

class TimeFrame extends Component {
  render() {
    const { onSelect } = this.props;
    return (
      <div>
        <button onClick={() => onSelect("daily")}>Daily</button>
        <button onClick={() => onSelect("weekly")}>Weekly</button>
        <button onClick={() => onSelect("monthly")}>Monthly</button>
      </div>
    );
  }
}

export default TimeFrame;
