import glamorous from "glamorous";
import React from "react";

import { Input as GovukInput } from "govuk-react";

const GInput = glamorous(GovukInput)(({ error, warning }) => ({
  border: warning && !error ? `4px solid #0F0` : undefined
}));

const Input = props => <GInput {...props} />;

export default Input;
