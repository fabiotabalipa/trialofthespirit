import {systemWeights} from 'react-native-typography';
import styled from 'styled-components/native';

import {COLOR_BLACK} from '../../globals/constants';

interface ContainerProps {
  color: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  justify-content: center;

  height: 100px;
  width: 100px;
  padding: 8px;

  background-color: ${({color}) => color};

  border-radius: 50px;
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
  color: string;
}

export const Text = styled.Text<TextProps>`
  font-size: 18px;
  text-align: center;

  color: ${({color}) => color};
`;

Text.defaultProps = {
  style: systemWeights.bold,
};
