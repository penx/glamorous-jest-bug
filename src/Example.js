import glamorous from "glamorous";
import React from "react";

var InnerOne = glamorous.div(({
  color: '#F00'
}));

const InnerTwo = props => <InnerOne {...props} />;

const Example = glamorous(InnerTwo)(({ color }) => ({
  color: color ? color : undefined
}));

export default Example;
