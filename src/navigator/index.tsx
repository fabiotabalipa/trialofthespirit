import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {
  CREDITS_SCREEN,
  HOME_SCREEN,
  QUOTES_SCREEN,
  TABS_ROUTE,
} from '../globals/constants';
import {Credits, Home, Quotes} from '../screens';
import modal from './modal';
import tabs, {tabBarOptions, tabCreditsIcon, tabHomeIcon} from './tabs';

export default (() => (
  <SafeAreaProvider>
    <NavigationContainer>
      <modal.Navigator
        headerMode="none"
        initialRouteName={TABS_ROUTE}
        mode="modal">
        <modal.Screen name={TABS_ROUTE}>
          {() => (
            <tabs.Navigator
              initialRouteName={HOME_SCREEN}
              tabBarOptions={tabBarOptions}>
              <tabs.Screen
                component={Home}
                name={HOME_SCREEN}
                options={{tabBarIcon: tabHomeIcon}}
              />
              <tabs.Screen
                component={Credits}
                name={CREDITS_SCREEN}
                options={{tabBarIcon: tabCreditsIcon}}
              />
            </tabs.Navigator>
          )}
        </modal.Screen>
        <modal.Screen component={Quotes} name={QUOTES_SCREEN} />
      </modal.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
)) as React.FC;
