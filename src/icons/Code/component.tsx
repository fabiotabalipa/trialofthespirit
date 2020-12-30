import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import {IconProps} from '../../globals/types';

const Code: React.FC<IconProps> = ({color, size, style}) => (
  <Icon color={color} name="code-outline" size={size} style={style} />
);

export default Code;
