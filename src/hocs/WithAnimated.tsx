import React from 'react';
import {Animated} from 'react-native';

export default (
  WrappedComponent: React.ComponentType<any>,
): Animated.AnimatedComponent<any> => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  class WithAnimated extends React.Component {
    static displayName = `WithAnimated(${displayName})`;

    render(): React.ReactNode {
      return <WrappedComponent {...this.props} />;
    }
  }

  return Animated.createAnimatedComponent(WithAnimated);
};
