import PropTypes from "prop-types";
import React from "react";
import tinycolor from "tinycolor2";
import SaturationGradient from "../gradients/SaturationGradient";
import GradientSlider from "./GradientSlider";

const SaturationSlider = ({
  style,
  value,
  color,
  onValueChange,
  gradientSteps,
  onSlidingComplete
}) => {
  return (
    <GradientSlider
      gradient={
        <SaturationGradient color={color} gradientSteps={gradientSteps} />
      }
      style={style}
      step={0.01}
      maximumValue={1}
      value={value}
      thumbTintColor={tinycolor({ ...color, s: value }).toHslString()}
      onValueChange={onValueChange}
      onSlidingComplete={onSlidingComplete}
    />
  );
};

export default SaturationSlider;

SaturationSlider.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.shape({
    h: PropTypes.number.isRequired,
    s: PropTypes.number.isRequired,
    l: PropTypes.number.isRequired
  }).isRequired,
  onValueChange: PropTypes.func,
  onSlidingComplete: PropTypes.func,
  gradientSteps: PropTypes.number.isRequired
};
