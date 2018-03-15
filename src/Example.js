import glamorous from "glamorous";
import React from "react";

var One = glamorous.div(({
  color: '#F00'
}));

const Two = props => <One {...props} />;

const Input = glamorous(Two)(({ color }) => ({
  color: color ? color : undefined
}));

export default Input;
