import React from "react";

export default class currentSpeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 10,
    };
  }

  componentDidMount() {
    this.timeDecrement();
  }

  brake() {
    if (this.state.speed >= 0) {
      this.setState({ speed: this.state.speed - 1 });
    }
  }

  gas() {
    this.setState({ speed: this.state.speed + 1 });
  }

  async timeDecrement() {
    while (true) {
      if (this.state.speed >= 0) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(this.speed);
        this.setState({ speed: this.state.speed - 1 });
      }
    }
  }

  render() {
    return (
      <div>
        <h3>Current Speed</h3>
        <h1>{this.state.speed}</h1>
        <button onClick={() => this.brake()}>Break</button>
        <button onClick={() => this.gas()}>Gas</button>
      </div>
    );
  }
}
