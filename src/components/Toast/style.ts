import {Pressable} from 'react-native';

import {systemWeights} from 'react-native-typography';
import styled from 'styled-components/native';
import {
  COLOR_BLACK,
  COLOR_DARK_GREY,
  COLOR_GREEN,
  COLOR_RED,
  COLOR_WHITE,
  COLOR_YELLOW,
} from '../../globals/constants';

interface FrameProps {
  backgroundColor:
    | typeof COLOR_DARK_GREY
    | typeof COLOR_GREEN
    | typeof COLOR_YELLOW
    | typeof COLOR_RED;
}

export const Frame = styled.View<FrameProps>`
  align-items: center;
  justify-content: center;

  opacity: 0.9;

  margin: 32px;
  padding: 24px;

  background-color: ${({backgroundColor}) => backgroundColor};

  border-radius: 8px;
`;

export const Container = styled(Pressable)`
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  padding-bottom: 72px;
`;

Container.defaultProps = {
  style: {
    elevation: 11,
    shadowColor: COLOR_BLACK,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },
};

interface TextProps {
  color: typeof COLOR_DARK_GREY | typeof COLOR_WHITE;
}

export const Text = styled.Text<TextProps>`
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  color: ${({color}) => color};
`;

Text.defaultProps = {
  style: systemWeights.semibold,
};
