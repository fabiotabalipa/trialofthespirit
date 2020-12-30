import React from 'react';

import {Container, Title} from './style';

interface HeaderProps {
  color: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({color, title}) => (
  <Container>
    <Title color={color}>{title}</Title>
  </Container>
);

export default Header;
