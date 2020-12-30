import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import {IconProps} from '../../globals/types';

const Close: React.FC<IconProps> = ({color, size, style}) => (
  <Icon color={color} name="close-outline" size={size} style={style} />
);

export default Close;
