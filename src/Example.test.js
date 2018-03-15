import React from "react";
import ReactDOM from "react-dom";
import Example from "./Example";

describe("Component - Example", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Example type="text" />, div);
  });
});
