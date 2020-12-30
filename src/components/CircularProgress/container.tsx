import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import Component from './component';

interface CircularProgressProps {
  baseColor: string;
  progressColor: string;
  toProgress: number;
  size: number;
  strokeWidth: number;
}

const CircularProgressContainer: React.FC<CircularProgressProps> = ({
  baseColor,
  progressColor,
  toProgress,
  size,
  strokeWidth,
}) => {
  const radius = useRef((size - strokeWidth) / 2).current;
  const circumference = useRef(radius * 2 * Math.PI).current;

  const progress = useRef(new Animated.Value(0));
  const strokeDashoffset = useRef<Animated.AnimatedMultiplication>();

  useEffect(() => {
    Animated.timing(progress.current, {
      duration: 900,
      toValue: toProgress,
      useNativeDriver: true,
    }).start();
  }, [radius, toProgress]);

  const alpha = progress.current.interpolate({
    inputRange: [0, 100],
    outputRange: [0, Math.PI * 2],
  });

  strokeDashoffset.current = Animated.multiply(alpha, radius);

  return (
    <Component
      baseColor={baseColor}
      circumference={circumference}
      progressColor={progressColor}
      radius={radius}
      size={size}
      strokeDashoffset={strokeDashoffset.current}
      strokeWidth={strokeWidth}
      value={toProgress}
    />
  );
};

export default CircularProgressContainer;
