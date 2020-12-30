import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Body, Container, Description, Link, Title} from './style';

interface CardProps {
  description: string;
  icon: React.ReactNode;
  onPressLink(): void;
  title: string;
}

const Card: React.FC<CardProps> = ({description, icon, onPressLink, title}) => (
  <Container>
    {icon}
    <Body>
      <Title color="black">{title}</Title>
      <Description>{description}</Description>
    </Body>
    <TouchableOpacity onPress={onPressLink}>
      <Link>link</Link>
    </TouchableOpacity>
  </Container>
);

export default Card;
