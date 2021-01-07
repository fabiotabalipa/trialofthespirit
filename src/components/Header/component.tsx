import React from 'react';

import {Container, Title} from './style';

interface Props {
  color: string;
  title: string;
}

export default (({color, title}) => (
  <Container>
    <Title color={color}>{title}</Title>
  </Container>
)) as React.FC<Props>;
