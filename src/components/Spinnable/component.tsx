import React from 'react';
import {Animated} from 'react-native';

interface SpinnableProps {
  children: React.ReactNode;
  rotate: Animated.AnimatedInterpolation;
}

const Spinnable: React.FC<SpinnableProps> = ({children, rotate}) => (
  <Animated.View style={{transform: [{rotate}]}}>{children}</Animated.View>
);

export default Spinnable;
