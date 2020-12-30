import React from 'react';
import {Animated, ImageProps} from 'react-native';

import {Backdrop, Button, ButtonText, Image, ImageFrame, Text} from './style';

interface OverlayProps {
  buttonText: string;
  height: number;
  imageSource: ImageProps['source'];
  onPressButton(): void;
  opacity: Animated.Value;
  text: string;
  width: number;
}

const Overlay: React.FC<OverlayProps> = ({
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
);

export default Overlay;
