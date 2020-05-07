import React from "react";
import "./speed.css";
import car from "../assets/car-driving.gif";

export default class currentSpeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 0,
      dspeed: 20,
      cruiseControl: false,
      display: "OFF",
    };
  }

  componentDidMount() {
    this.time();
  }

  brake() {
    if (this.state.speed > 0) {
      this.setState({ speed: this.state.speed - 5 });
    }
    if (this.state.speed < 5) {
      this.setState({ speed: 0 });
    }
    if (this.state.cruiseControl) {
      this.toggleCruiseControl();
    }
  }

  gas() {
    this.setState({ speed: this.state.speed + 5 });
  }

  ccDecrease() {
    if (this.state.dspeed > 20) {
      this.setState({ dspeed: this.state.dspeed - 1 });
    }
  }

  ccIncrease() {
    this.setState({ dspeed: this.state.dspeed + 1 });
  }

  toggleCruiseControl() {
    if (this.state.cruiseControl === true) {
      this.setState({ display: "OFF" });
      this.setState({ cruiseControl: false });
    } else {
      this.setState({ display: "ON" });
      this.setState({ cruiseControl: true });
    }
  }

  timeDecrement() {
    if (this.state.speed > 0) {
      this.setState({
        speed: this.state.speed - (1 + (this.state.speed % 1)),
      });
    }
  }

  adjSpeed() {
    var difference = this.state.dspeed - this.state.speed;
    if (difference * difference > 1) {
      difference = difference / 2;
      difference = difference - (difference % 0.5);
    }
    this.setState({ speed: this.state.speed + difference });
  }

  async time() {
    var counter = 0;
    while (1) {
      if (this.state.cruiseControl) {
        //cc on
        this.adjSpeed();
      } else {
        //cc off
        this.timeDecrement();
      }

      //time delay
      console.log(this.state.cruiseControl + " Time: " + counter);
      counter++;
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  render() {
    return (
      <div>
        <div className="format">
          <div className="section">
            <button className="smlbut" onClick={() => this.brake()}>
              Brake
            </button>
            <button className="smlbut" onClick={() => this.gas()}>
              Gas
            </button>
            <br />
            <button
              className="bigbut"
              onClick={() => this.toggleCruiseControl()}
            >
              Toggle Cruise Control
            </button>
            <br />
            <button className="smlbut" onClick={() => this.ccDecrease()}>
              – CC –
            </button>
            <button className="smlbut" onClick={() => this.ccIncrease()}>
              + CC +
            </button>
          </div>
          <div className="section">
            <h3>Current Speed</h3>
            <h1>{this.state.speed}</h1>
            <h3>Target Speed</h3>
            <h1>{this.state.dspeed}</h1>
          </div>
          <div className="section">
            <h3>Cruise Control</h3>
            <h1>{this.state.display}</h1>
          </div>
        </div>
        <img src={car} alt="car" className="img" />
      </div>
    );
  }
}
