import React from 'react';
import {StatusBar} from 'react-native';

import {Header, LaunchButton, Toast} from '../../components';
import {
  COLOR_BLUE,
  COLOR_DARK_GREY,
  COLOR_GREEN,
  COLOR_MEDIUM_GREY,
  COLOR_RED,
  COLOR_YELLOW,
  RESULT_BALANCED,
  RESULT_JEDI,
  RESULT_SITH,
} from '../../globals/constants';
import {Error} from '../../globals/types';
import {LightSabers} from '../../icons';
import {Result} from '../../store/ducks/result/types';
import {Background, Body} from './style';

interface Props {
  error: Error | null;
  lastResult: Result | null;
  loadingQuotes: boolean;
  onPressLaunch(): void;
}

const getLightSaberColor = (result: number | null): string => {
  switch (result) {
    case RESULT_BALANCED:
      return COLOR_GREEN;
    case RESULT_JEDI:
      return COLOR_BLUE;
    case RESULT_SITH:
      return COLOR_RED;
    default:
      return COLOR_MEDIUM_GREY;
  }
};

export default (({error, lastResult, loadingQuotes, onPressLaunch}) => (
  <Background>
    <StatusBar barStyle="light-content" />
    {error && <Toast level="error" text={error.msg} />}
    <Body>
      <Header color={COLOR_YELLOW} title="Trial of the Spirit" />
      <LightSabers color={getLightSaberColor(lastResult)} size={88} />
      <LaunchButton
        color={COLOR_GREEN}
        loading={loadingQuotes}
        onPress={onPressLaunch}
        text={lastResult ? 'retry' : 'start'}
        textColor={COLOR_DARK_GREY}
      />
    </Body>
  </Background>
)) as React.FC<Props>;
