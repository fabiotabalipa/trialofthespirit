import {createStackNavigator} from '@react-navigation/stack';

import {QUOTES_SCREEN, TABS_ROUTE} from '../globals/constants';

export type ModalRouteParams = {
  [TABS_ROUTE]: undefined;
  [QUOTES_SCREEN]: {index: number};
};

export default createStackNavigator<ModalRouteParams>();
