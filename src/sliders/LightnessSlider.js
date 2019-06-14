import PropTypes from "prop-types";
import React from "react";
import tinycolor from "tinycolor2";
import LightnessGradient from "../gradients/LightnessGradient";
import GradientSlider from "./GradientSlider";

const LightnessSlider = ({
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
        <LightnessGradient color={color} gradientSteps={gradientSteps} />
      }
      style={style}
      step={0.01}
      maximumValue={1}
      value={value}
      thumbTintColor={tinycolor({ ...color, l: value }).toHslString()}
      onValueChange={onValueChange}
      onSlidingComplete={onSlidingComplete}
    />
  );
};

export default LightnessSlider;

LightnessSlider.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.shape({
    h: PropTypes.number.isRequired,
    s: PropTypes.number.isRequired,
    l: PropTypes.number.isRequired
  }).isRequired,
  onValueChange: PropTypes.func.isRequired,
  onSlidingComplete: PropTypes.func.isRequired,
  gradientSteps: PropTypes.number.isRequired
};
