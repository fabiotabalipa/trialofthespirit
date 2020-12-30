import {systemWeights} from 'react-native-typography';
import styled from 'styled-components/native';
import {COLOR_BLACK, COLOR_MEDIUM_GREY} from '../../globals/constants';

export const Body = styled.View`
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`;

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  height: 88px;
  margin: 16px;
  padding: 16px;
  width: 296px;

  background-color: white;

  border-radius: 8px;
`;

Container.defaultProps = {
  style: {
    elevation: 11,
    shadowColor: COLOR_BLACK,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },
};

export const Description = styled.Text`
  font-size: 14px;
  text-align: center;

  color: ${COLOR_MEDIUM_GREY};
`;

Description.defaultProps = {
  style: systemWeights.regular,
};

export const Link = styled.Text`
  font-size: 16px;
  text-align: center;
  text-decoration: underline;

  color: ${COLOR_MEDIUM_GREY};
`;

Link.defaultProps = {
  style: systemWeights.regular,
};

interface TitleProps {
  color: string;
}

export const Title = styled.Text<TitleProps>`
  font-size: 16px;
  text-align: center;

  color: ${({color}) => color};
`;

Title.defaultProps = {
  style: systemWeights.bold,
};
