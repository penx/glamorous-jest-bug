import glamorous from "glamorous";
import React from "react";

import { Input as MyInput } from "govuk-react";

const Input = glamorous(MyInput)(({ color }) => ({
  border: color ? `4px solid ${color}` : undefined
}));

export default Input;
