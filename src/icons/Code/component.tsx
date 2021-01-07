import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import {IconProps} from '../../globals/types';

export default (({color, size, style}) => (
  <Icon color={color} name="code-outline" size={size} style={style} />
)) as React.FC<IconProps>;
