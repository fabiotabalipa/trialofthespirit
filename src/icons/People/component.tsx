import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import {IconProps} from '../../globals/types';

const People: React.FC<IconProps> = ({color, size, style}) => (
  <Icon color={color} name="people-outline" size={size} style={style} />
);

export default People;
