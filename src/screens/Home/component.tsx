import React from 'react';
import {StatusBar} from 'react-native';

import {Header, LaunchButton} from '../../components';
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
import {LightSabers} from '../../icons';
import {Background, Body} from './style';

interface Props {
  lastResult: number | null;
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

export default (({lastResult, loadingQuotes, onPressLaunch}) => (
  <Background>
    <StatusBar barStyle="light-content" />
    <Body>
      <Header color={COLOR_YELLOW} title="Trial of the Spirit" />
      <LightSabers color={getLightSaberColor(lastResult)} size={88} />
      <LaunchButton
        color={COLOR_GREEN}
        loading={loadingQuotes}
        onPress={onPressLaunch}
        text="start"
        textColor={COLOR_DARK_GREY}
      />
    </Body>
  </Background>
)) as React.FC<Props>;
