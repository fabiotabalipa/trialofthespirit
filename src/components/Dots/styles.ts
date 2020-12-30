import styled from 'styled-components/native';

interface DotProps {
  active: boolean;
  color: string;
  size: number;
}

export const Dot = styled.View<DotProps>`
  height: ${({size}) => size}px;
  margin: 0 4px;
  width: ${({size}) => size}px;

  background-color: ${({active, color}) => (active ? color : 'transparent')};
  border: 2px solid ${({color}) => color};
  border-radius: ${({size}) => Math.round(size / 2)}px;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
