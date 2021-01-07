import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Body, Container, Description, Link, Title} from './style';

interface Props {
  description: string;
  icon: React.ReactNode;
  onPressLink(): void;
  title: string;
}

export default (({description, icon, onPressLink, title}) => (
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
)) as React.FC<Props>;
