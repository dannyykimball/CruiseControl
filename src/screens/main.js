import React from "react";
import "./main.css";
import CurrentSpeed from "../components/current-speed.component.js";
import TargetSpeed from "../components/target-speed.component.js";

export default function MainEngine() {
  return (
    <div className="background">
      <h1 className="title">Cruise Control</h1>
      <div className="currentSpeed">
        <CurrentSpeed />
      </div>
    </div>
  );
}
