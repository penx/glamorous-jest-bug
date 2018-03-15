import React from "react";
import ReactDOM from "react-dom";
import Input from "./Input";

const wrapper = <Input type="text" />;

describe("Component - Input renders", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });
});
