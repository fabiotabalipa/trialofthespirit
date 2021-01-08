import {StyleProp, TextStyle} from 'react-native';

export interface Error {
  msg: string;
}

export interface IconProps {
  color: string;
  size: number;
  style?: StyleProp<TextStyle>;
}
