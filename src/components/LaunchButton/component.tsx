import React from 'react';

import {Spinnable} from '../../components';
import {Spinner} from '../../icons';
import {Container, Text} from './style';

interface Props {
  color: string;
  loading: boolean;
  onPress(): void;
  text: string;
  textColor: string;
}

export default (({color, loading, onPress, text, textColor}) => (
  <Container color={color} disabled={loading} onPress={onPress}>
    {loading && (
      <Spinnable spin={loading}>
        <Spinner color={textColor} size={20} />
      </Spinnable>
    )}
    {!loading && <Text color={textColor}>{text}</Text>}
  </Container>
)) as React.FC<Props>;
