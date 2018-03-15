import glamorous from "glamorous";
import React from "react";
import PropTypes from "prop-types";

import { Input as GovukInput } from "govuk-react";
import { ORANGE } from "govuk-colours";

const GInput = glamorous(GovukInput)(({ error, warning }) => ({
  border: warning && !error ? `4px solid ${ORANGE}` : undefined
}));

const Input = props => <GInput {...props} />;

Input.defaultProps = {
  onChange: undefined,
  type: "text",
  value: undefined
};

Input.propTypes = {
  error: PropTypes.any,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
  warning: PropTypes.any
};

export default Input;
