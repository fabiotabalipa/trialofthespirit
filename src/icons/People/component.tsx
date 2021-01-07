import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import {IconProps} from '../../globals/types';

export default (({color, size, style}) => (
  <Icon color={color} name="people-outline" size={size} style={style} />
)) as React.FC<IconProps>;
