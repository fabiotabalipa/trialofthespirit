import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import Component from './component';

interface Props {
  children: React.ReactNode;
  spin: boolean;
}

export default (({children, spin}) => {
  const rotation = useRef<Animated.AnimatedInterpolation>();
  const spinValue = useRef(new Animated.Value(0));

  const animation = useRef(
    Animated.loop(
      Animated.timing(spinValue.current, {
        duration: 900,
        toValue: 1,
        useNativeDriver: true,
      }),
    ),
  );

  useEffect(() => {
    if (!spin) {
      animation.current.stop();
      return;
    }

    animation.current.start();
  }, [spin]);

  rotation.current = spinValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return <Component children={children} rotate={rotation.current} />;
}) as React.FC<Props>;
