import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {COLOR_DARK_GREY, COLOR_WHITE, COLOR_YELLOW} from '../globals/constants';
import {Home, People} from '../icons';

export const tabBarOptions = {
  activeTintColor: COLOR_YELLOW,
  inactiveTintColor: COLOR_WHITE,
  style: {backgroundColor: COLOR_DARK_GREY},
};

export const tabHomeIcon = ({color, size}: {color: string; size: number}) =>
  React.createElement(Home, {color, size});

export const tabCreditsIcon = ({color, size}: {color: string; size: number}) =>
  React.createElement(People, {color, size});

export default createBottomTabNavigator();
