import React from 'react';

import {Dot, Container} from './styles';

interface Props {
  color: string;
  index: number;
  length: number;
  dotSize: number;
}

export default (({color, index, length, dotSize}) => {
  const dots = [];

  for (let i = 0; i < length; i++) {
    dots.push(
      <Dot active={i === index} color={color} size={dotSize} key={i} />,
    );
  }

  return <Container>{dots}</Container>;
}) as React.FC<Props>;
