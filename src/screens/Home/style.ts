import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import {COLOR_DARK_GREY} from '../../globals/constants';

export const Background = styled(SafeAreaView)`
  flex: 1;

  background-color: ${COLOR_DARK_GREY};
`;

export const Body = styled.View`
  align-items: center;
  flex: 1;
  justify-content: space-around;
  z-index: 0;
`;
