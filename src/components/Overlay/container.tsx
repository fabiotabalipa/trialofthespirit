import React, {useEffect, useRef} from 'react';
import {Animated, ImageProps, useWindowDimensions} from 'react-native';

import Component from './component';

interface Props {
  buttonText: string;
  imageSource: ImageProps['source'];
  onPressButton(): void;
  text: string;
  visible: boolean;
}

export default (({buttonText, imageSource, onPressButton, text, visible}) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        duration: 900,
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  }, [opacity, visible]);

  return visible ? (
    <Component
      buttonText={buttonText}
      height={windowHeight}
      imageSource={imageSource}
      onPressButton={onPressButton}
      opacity={opacity}
      width={windowWidth}
      text={text}
    />
  ) : null;
}) as React.FC<Props>;
