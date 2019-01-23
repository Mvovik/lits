import React, { Component } from "react";
import PropTypes from "prop-types";

const defaultStyles = {};

export default ({ style }) => {
  const customStyles = Object.assign({}, defaultStyles, style);
  return (
    <svg style={customStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
      <polygon
        style={{ fill: "#404040" }}
        points="7.4,1.6 6.4,0.6 4,3.1 1.6,0.6 0.6,1.6 3.1,4 0.6,6.4 1.6,7.4 4,4.9 6.4,7.4 7.4,6.4 4.9,4"
      />
    </svg>
  );
};
