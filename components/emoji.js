import React from "react";
import PropTypes from "prop-types";

const Emoji = ({ emoji, className }) => {
  return <div className={`text-5xl ${className}`}>{emoji}</div>;
};

Emoji.propTypes = {};

export default Emoji;
