import {SafeAreaView} from 'react-native-safe-area-context';
import {systemWeights} from 'react-native-typography';
import styled from 'styled-components/native';

import {
  COLOR_BLACK,
  COLOR_DARK_GREY,
  COLOR_WHITE,
  COLOR_YELLOW,
} from '../../globals/constants';

export const AnswerContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  margin-bottom: 8px;
  padding: 8px;
  width: 100%;
`;

export const Background = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;

  background-color: ${COLOR_DARK_GREY};
`;

export const Body = styled.View`
  align-items: center;
  flex: 1;
  justify-content: space-around;
  z-index: 0;
`;

export const Card = styled.View`
  flex: 1;
  justify-content: center;

  padding: 8px;

  background-color: ${COLOR_DARK_GREY};
`;

Card.defaultProps = {
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

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  z-index: 0;

  height: 88px;
  padding: 8px;
  width: 100%;
`;

export const Question = styled.Text`
  font-size: 18px;
  text-align: center;

  color: ${COLOR_WHITE};
`;

Question.defaultProps = {
  style: systemWeights.regular,
};

interface SlideProps {
  width: number;
}

export const Slide = styled.View<SlideProps>`
  padding: 16px;
  width: ${({width}) => width}px;
`;

export const SlidesContainer = styled.ScrollView`
  max-height: 240px;
`;

export const Text = styled.Text`
  font-size: 20px;
  text-align: center;

  color: ${COLOR_YELLOW};
`;

Text.defaultProps = {
  style: systemWeights.semibold,
};
