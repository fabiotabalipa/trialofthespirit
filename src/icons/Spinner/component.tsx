import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {IconProps} from '../../globals/types';

const Spinner: React.FC<IconProps> = ({color, size, style}) => (
  <Icon color={color} name="circle-notch" size={size} style={style} />
);

export default Spinner;
