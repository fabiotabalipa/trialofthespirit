import React from 'react';

import {Dot, Container} from './styles';

interface DotsProp {
  color: string;
  index: number;
  length: number;
  dotSize: number;
}

const Dots: React.FC<DotsProp> = ({color, index, length, dotSize}) => {
  const dots = [];

  for (let i = 0; i < length; i++) {
    dots.push(
      <Dot active={i === index} color={color} size={dotSize} key={i} />,
    );
  }

  return <Container>{dots}</Container>;
};

export default Dots;
