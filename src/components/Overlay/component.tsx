import React from 'react';
import {Animated, ImageProps} from 'react-native';

import {Backdrop, Button, ButtonText, Image, ImageFrame, Text} from './style';

interface Props {
  buttonText: string;
  height: number;
  imageSource: ImageProps['source'];
  onPressButton(): void;
  opacity: Animated.Value;
  text: string;
  width: number;
}

export default (({
  buttonText,
  height,
  imageSource,
  onPressButton,
  opacity,
  text,
  width,
}) => (
  <Backdrop height={height} style={{opacity}} width={width}>
    <ImageFrame>
      <Image source={imageSource} />
      <Text>{text}</Text>
    </ImageFrame>
    <Button onPress={onPressButton}>
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  </Backdrop>
)) as React.FC<Props>;
