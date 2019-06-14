import PropTypes from "prop-types";
import React from "react";
import tinycolor from "tinycolor2";
import HueGradient from "../gradients/HueGradient";
import GradientSlider from "./GradientSlider";

const HueSlider = ({
  style,
  value,
  onValueChange,
  gradientSteps,
  onSlidingComplete
}) => {
  return (
    <GradientSlider
      gradient={<HueGradient gradientSteps={gradientSteps} />}
      style={style}
      step={1}
      maximumValue={359}
      value={value}
      thumbTintColor={tinycolor({ s: 1, l: 0.5, h: value }).toHslString()}
      onValueChange={onValueChange}
      onSlidingComplete={onSlidingComplete}
    />
  );
};

export default HueSlider;

HueSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onValueChange: PropTypes.func,
  onSlidingComplete: PropTypes.func,
  gradientSteps: PropTypes.number.isRequired
};
