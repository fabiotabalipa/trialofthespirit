import React from 'react';
import {Animated} from 'react-native';

interface Props {
  children: React.ReactNode;
  rotate: Animated.AnimatedInterpolation;
}

export default (({children, rotate}) => (
  <Animated.View style={{transform: [{rotate}]}}>{children}</Animated.View>
)) as React.FC<Props>;
