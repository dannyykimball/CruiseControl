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
        <h3>Current Speed</h3>
        <h1>{this.state.speed}</h1>
      </div>
    );
  }
}
