import React, { useState } from "react";

export default class currentSpeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 0,
    };
  }

  render() {
    return (
      <div>
        <h3>Target Speed</h3>
        <h1>{this.state.speed}</h1>
        <button onClick={() => this.setState({ speed: this.state.speed - 5 })}>
          –5
        </button>
        <button onClick={() => this.setState({ speed: this.state.speed - 1 })}>
          –
        </button>
        <button onClick={() => this.setState({ speed: this.state.speed + 1 })}>
          +
        </button>
        <button onClick={() => this.setState({ speed: this.state.speed + 5 })}>
          +5
        </button>
      </div>
    );
  }
}
