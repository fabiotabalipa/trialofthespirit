import React from 'react';
import {Alert, Linking} from 'react-native';

import {ERR_LINK} from '../../globals/text';
import Component from './component';

interface CardContainerProps {
  description: string;
  icon: React.ReactNode;
  title: string;
  url: string;
}

const CardContainer: React.FC<CardContainerProps> = ({
  description,
  icon,
  title,
  url,
}) => {
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
};

export default CardContainer;
