import React from 'react';
import {Animated} from 'react-native';

import Svg, {Circle, Text} from 'react-native-svg';

import withAnimated from '../../hocs/WithAnimated';

const AnimatedCircle = withAnimated(Circle);

interface Props {
  baseColor: string;
  circumference: number;
  progressColor: string;
  radius: number;
  size: number;
  strokeDashoffset?: Animated.AnimatedMultiplication;
  strokeWidth: number;
  value: number;
}

export default (({
  baseColor,
  circumference,
  progressColor,
  radius,
  size,
  strokeDashoffset,
  strokeWidth,
  value,
}) => (
  <Svg height={size} width={size}>
    <Text
      dy=".3em"
      fill={value > 0 ? progressColor : baseColor}
      fontSize={size / 4}
      fontWeight={300}
      x="50%"
      y="50%"
      textAnchor="middle">
      {`${value}%`}
    </Text>
    <Circle
      cx={size / 2}
      cy={size / 2}
      fill="none"
      r={radius}
      stroke={progressColor}
      strokeWidth={strokeWidth}
    />
    <AnimatedCircle
      cx={size / 2}
      cy={size / 2}
      fill="none"
      r={radius}
      stroke={baseColor}
      strokeDasharray={`${circumference} ${circumference}`}
      strokeDashoffset={strokeDashoffset}
      // +1 px to avoid color leaking in some devices
      strokeWidth={strokeWidth + 1}
    />
  </Svg>
)) as React.FC<Props>;
