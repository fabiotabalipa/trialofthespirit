import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {IconProps} from '../../globals/types';

const Like: React.FC<IconProps> = ({color, size, style}) => (
  <Icon color={color} name="thumbs-up" size={size} style={style} />
);

export default Like;