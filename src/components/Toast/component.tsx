import React from 'react';
import {Modal} from 'react-native';

import {
  COLOR_DARK_GREY,
  COLOR_GREEN,
  COLOR_RED,
  COLOR_WHITE,
  COLOR_YELLOW,
} from '../../globals/constants';
import {Container, Frame, Text} from './style';

export type Level = 'error' | 'info' | 'success' | 'warning';

interface Props {
  level: Level;
  onPress(): void;
  text: string;
  visible: boolean;
}

const getBackgroundColorFromLevel = (level: Level) => {
  switch (level) {
    case 'error':
      return COLOR_RED;
    case 'success':
      return COLOR_GREEN;
    case 'warning':
      return COLOR_YELLOW;
    default:
      return COLOR_DARK_GREY;
  }
};

const getTextColorFromLevel = (level: Level) => {
  if (level === 'success' || level === 'warning') {
    return COLOR_DARK_GREY;
  }

  return COLOR_WHITE;
};

export default (({level, onPress, text, visible}) => (
  <Modal animationType="fade" transparent visible={visible}>
    <Container onPress={onPress}>
      <Frame backgroundColor={getBackgroundColorFromLevel(level)}>
        <Text color={getTextColorFromLevel(level)}>{text}</Text>
      </Frame>
    </Container>
  </Modal>
)) as React.FC<Props>;
