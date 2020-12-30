import {Animated} from 'react-native';
import {systemWeights} from 'react-native-typography';

import styled from 'styled-components/native';

import {COLOR_WHITE, COLOR_YELLOW} from '../../globals/constants';

interface BackdropProps {
  height: number;
  width: number;
}

export const Backdrop = styled(Animated.View)<BackdropProps>`
  position: absolute;
  align-items: center;
  justify-content: space-around;
  z-index: 1;

  height: ${({height}) => height}px;
  padding: 40px;
  width: ${({width}) => width}px;

  background-color: rgba(0, 0, 0, 0.93);
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 56px;
  width: 144px;

  border: 3px ${COLOR_YELLOW};
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-size: 22px;
  text-align: center;

  color: ${COLOR_YELLOW};
`;

ButtonText.defaultProps = {
  style: systemWeights.bold,
};

export const Image = styled.Image`
  height: 128px;
  margin-bottom: 40px;
  width: 128px;
`;

export const ImageFrame = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 24px;
  text-align: center;

  color: ${COLOR_WHITE};
`;

Text.defaultProps = {
  style: systemWeights.semibold,
};
