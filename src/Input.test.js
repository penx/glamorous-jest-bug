import test from "tape";
import React from "react";
import ReactDOM from "react-dom";
import Input from "./Input.js";

const wrapper = <Input type="text" />;
const withError = <Input type="text" error="example" />;
const withWarning = <Input type="text" warning="example" />;

test("Component - Input renders", assert => {
  const div = document.createElement("div");
  ReactDOM.render(wrapper, div);
  assert.end();
  console.warn("hi");
});

test("Component - Input renders with error", assert => {
  const div = document.createElement("div");
  ReactDOM.render(withError, div);
  assert.end();
});

test("Component - Input renders with warning", assert => {
  const div = document.createElement("div");
  ReactDOM.render(withWarning, div);
  assert.end();
});
