import React, {useRef, useState} from 'react';
import {useWindowDimensions} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  ANSWER_DISLIKE,
  ANSWER_LIKE,
  QUOTE_TYPE_JEDI,
  QUOTE_TYPE_SITH,
  RESULT_BALANCED,
  RESULT_JEDI,
  RESULT_SITH,
} from '../../globals/constants';

import {useDispatch, useSelector} from '../../store';
import * as ResultActions from '../../store/ducks/result/actions';
import Component, {Answer} from './component';

export default (() => {
  const [answersMap, setAnswersMap] = useState<Map<number, Answer>>(
    new Map<number, Answer>(),
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const progress = useRef<number>(0);

  const quotes = useSelector((state) => state.quotes.data);
  const result = useSelector((state) => state.result.data);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;

  const onClose = () => {
    navigation.goBack();
  };

  const onDislike = () => {
    if (answersMap.has(currentIndex)) {
      return;
    }

    const faction =
      quotes[currentIndex].type === QUOTE_TYPE_JEDI
        ? QUOTE_TYPE_SITH
        : QUOTE_TYPE_JEDI;

    updateAnswersMap(currentIndex, {faction, type: ANSWER_DISLIKE});
    updateProgress();
  };

  const onLike = () => {
    if (answersMap.has(currentIndex)) {
      return;
    }

    const faction = quotes[currentIndex].type;

    updateAnswersMap(currentIndex, {faction, type: ANSWER_LIKE});
    updateProgress();
  };

  const onScroll = ({
    nativeEvent: {
      contentOffset: {x},
    },
  }: {
    nativeEvent: {contentOffset: {x: number}};
  }) => {
    const i = Math.round(x / windowWidth);
    if (i !== currentIndex) {
      setCurrentIndex(i);
    }
  };

  const updateAnswersMap = (k: number, v: Answer) => {
    setAnswersMap(new Map(answersMap.set(k, v)));
  };

  const updateProgress = () => {
    progress.current = (answersMap.size / quotes.length) * 100;

    if (progress.current >= 100) {
      let j = 0,
        s = 0;

      answersMap.forEach((v) => {
        if (v.faction === QUOTE_TYPE_JEDI) {
          j++;
        } else {
          s++;
        }
      });

      dispatch(
        ResultActions.setWithDelay(
          j === s ? RESULT_BALANCED : j > s ? RESULT_JEDI : RESULT_SITH,
        ),
      );
    }
  };

  return (
    <Component
      answered={answersMap.has(currentIndex)}
      currentAnswer={answersMap.get(currentIndex)}
      index={currentIndex}
      onPressClose={onClose}
      onPressDislike={onDislike}
      onPressLike={onLike}
      onScroll={onScroll}
      progress={progress.current}
      quotes={quotes}
      result={result}
      slideWidth={windowWidth}
    />
  );
}) as React.FC;
