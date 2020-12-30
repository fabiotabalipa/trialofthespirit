import {SafeAreaView} from 'react-native-safe-area-context';
import {systemWeights} from 'react-native-typography';
import styled from 'styled-components/native';

import {COLOR_DARK_GREY, COLOR_WHITE} from '../../globals/constants';

export const Background = styled(SafeAreaView)`
  align-items: center;
  flex: 1;

  background-color: ${COLOR_DARK_GREY};
`;

export const Text = styled.Text`
  font-size: 14px;
  text-align: center;

  margin: 16px;

  color: ${COLOR_WHITE};
`;

Text.defaultProps = {
  style: systemWeights.regular,
};
