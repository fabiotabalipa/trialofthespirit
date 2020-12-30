import {systemWeights} from 'react-native-typography';
import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  z-index: 0;

  min-height: 80px;
`;

interface TitleProps {
  color: string;
}

export const Title = styled.Text<TitleProps>`
  font-size: 26px;
  text-align: center;

  color: ${({color}) => color};
`;

Title.defaultProps = {
  style: systemWeights.bold,
};
