import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {IconProps} from '../../globals/types';

export default (({color, size, style}) => (
  <Icon color={color} name="thumbs-down" size={size} style={style} />
)) as React.FC<IconProps>;
