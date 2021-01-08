import React, {useEffect, useState} from 'react';

import Component, {Level} from './component';

type Duration = 'forever' | 'long' | 'short';

interface Props {
  duration?: Duration;
  level: Level;
  text: string;
}

export default (({duration, level, text}) => {
  const [visible, setVisible] = useState(true);

  const dismiss = () => {
    setVisible(false);
  };

  const onPress = () => {
    dismiss();
  };

  useEffect(() => {
    if (duration === 'forever') {
      return;
    }

    setTimeout(
      () => {
        dismiss();
      },
      duration === 'short' ? 900 : 2500,
    );
  }, [duration]);

  return (
    <Component level={level} onPress={onPress} text={text} visible={visible} />
  );
}) as React.FC<Props>;
