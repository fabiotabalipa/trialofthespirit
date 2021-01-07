import React, {useState} from 'react';
import {Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {QuotesService} from '../../services/quotes';

import {QUOTES_SCREEN} from '../../globals/constants';
import {ERR_FETCH_QUOTES} from '../../globals/text';
import {useDispatch, useSelector} from '../../store';
import {Creators as QuotesActions} from '../../store/ducks/quotes';
import Component from './component';

export default (() => {
  const [loadingQuotes, setLoadingQuotes] = useState<boolean>(false);

  const lastResult = useSelector((state) => state.lastResult);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPressLaunch = () => {
    setLoadingQuotes(true);
    QuotesService.fetchShuffledQuotes(10)
      .then((quotes) => {
        setLoadingQuotes(false);
        dispatch(QuotesActions.replaceQuotes(quotes));
        navigation.navigate(QUOTES_SCREEN);
      })
      .catch(() => {
        Alert.alert('Error', ERR_FETCH_QUOTES);
      });
  };

  return (
    <Component
      lastResult={lastResult.result}
      loadingQuotes={loadingQuotes}
      onPressLaunch={onPressLaunch}
    />
  );
}) as React.FC;
