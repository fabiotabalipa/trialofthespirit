import React from 'react';
import {Alert, Linking} from 'react-native';

import {ERR_LINK} from '../../globals/text';
import Component from './component';

interface Props {
  description: string;
  icon: React.ReactNode;
  title: string;
  url: string;
}

export default (({description, icon, title, url}) => {
  const openURL = () => {
    Linking.openURL(url).catch((err) => {
      console.error('Error opening URL: ', err);
      Alert.alert('Error', ERR_LINK);
    });
  };

  return (
    <Component
      description={description}
      icon={icon}
      onPressLink={openURL}
      title={title}
    />
  );
}) as React.FC<Props>;
