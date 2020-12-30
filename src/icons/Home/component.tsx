import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import {IconProps} from '../../globals/types';

const Home: React.FC<IconProps> = ({color, size, style}) => (
  <Icon color={color} name="home-outline" size={size} style={style} />
);

export default Home;
