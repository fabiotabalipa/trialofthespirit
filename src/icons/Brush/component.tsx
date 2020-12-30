import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import {IconProps} from '../../globals/types';

const Brush: React.FC<IconProps> = ({color, size, style}) => (
  <Icon color={color} name="brush-outline" size={size} style={style} />
);

export default Brush;
