import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {QUOTES_SCREEN} from '../../globals/constants';
import {useDispatch, useSelector} from '../../store';
import * as QuotesActions from '../../store/ducks/quotes/actions';
import Component from './component';

export default (() => {
  const result = useSelector((state) => state.result.data);
  const quotes = useSelector((state) => state.quotes);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPressLaunch = () => {
    dispatch(QuotesActions.load());
  };

  useEffect(() => {
    if (quotes.data.length > 0) {
      navigation.navigate(QUOTES_SCREEN);
    }
  }, [navigation, quotes.data]);

  return (
    <Component
      error={quotes.error}
      lastResult={result}
      loadingQuotes={quotes.loading}
      onPressLaunch={onPressLaunch}
    />
  );
}) as React.FC;
