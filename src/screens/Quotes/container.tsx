import React, {useRef, useState} from 'react';
import {ImageProps, useWindowDimensions} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  ANSWER_DISLIKE,
  ANSWER_LIKE,
  IMG_SRC_LEA,
  IMG_SRC_OBI_WAN,
  IMG_SRC_PALPATINE,
  QUOTE_TYPE_JEDI,
  QUOTE_TYPE_SITH,
  RESULT_BALANCED,
  RESULT_JEDI,
  RESULT_SITH,
} from '../../globals/constants';
import {
  TXT_RESULT_BALANCED,
  TXT_RESULT_JEDI,
  TXT_RESULT_SITH,
} from '../../globals/text';
import {Quotes} from '../../globals/types';
import {useDispatch, useSelector} from '../../store';
import {Creators as LastResultActions} from '../../store/ducks/last_result';
import {Creators as QuotesActions} from '../../store/ducks/quotes';

import Component from './component';

export default (() => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const quotes = useSelector((state) => state.quotes);
  const progress = useRef(0);

  const windowWidth = useWindowDimensions().width;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getQuotesWithAnswer = (answer: number): Quotes => {
    const quotesClone = [...quotes];
    quotesClone[currentIndex].answer = answer;
    return quotesClone;
  };

  const getResultImgSource = (): ImageProps['source'] => {
    if (result === RESULT_JEDI) {
      return IMG_SRC_OBI_WAN;
    }

    if (result === RESULT_SITH) {
      return IMG_SRC_PALPATINE;
    }

    return IMG_SRC_LEA;
  };

  const getResultText = (): string => {
    if (result === RESULT_JEDI) {
      return TXT_RESULT_JEDI;
    }

    if (result === RESULT_SITH) {
      return TXT_RESULT_SITH;
    }

    return TXT_RESULT_BALANCED;
  };

  const onClose = () => {
    navigation.goBack();
  };

  const onDislike = () => {
    if (quotes[currentIndex].answer) {
      return;
    }

    dispatch(QuotesActions.replaceQuotes(getQuotesWithAnswer(ANSWER_DISLIKE)));
    updateProgress();
    updateResult();
  };

  const onLike = () => {
    if (quotes[currentIndex].answer) {
      return;
    }

    dispatch(QuotesActions.replaceQuotes(getQuotesWithAnswer(ANSWER_LIKE)));
    updateProgress();
    updateResult();
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

  const updateProgress = () => {
    let p = 0;
    for (let i = 0; i < quotes.length; i++) {
      if (quotes[i].answer) {
        p++;
      }
    }

    progress.current = (p / quotes.length) * 100;
  };

  const updateResult = () => {
    if (progress.current >= 100) {
      let j = 0,
        s = 0;

      for (let i = 0; i < quotes.length; i++) {
        if (
          (quotes[i].answer === ANSWER_LIKE &&
            quotes[i].type === QUOTE_TYPE_JEDI) ||
          (quotes[i].answer === ANSWER_DISLIKE &&
            quotes[i].type === QUOTE_TYPE_SITH)
        ) {
          j++;
        }

        if (
          (quotes[i].answer === ANSWER_LIKE &&
            quotes[i].type === QUOTE_TYPE_SITH) ||
          (quotes[i].answer === ANSWER_DISLIKE &&
            quotes[i].type === QUOTE_TYPE_JEDI)
        ) {
          s++;
        }
      }

      setTimeout(() => {
        const r = j === s ? RESULT_BALANCED : j > s ? RESULT_JEDI : RESULT_SITH;

        setResult(r);

        const now = Date.now();
        dispatch(LastResultActions.setResult({result: r, ts: now}));
      }, 900);
    }
  };

  return (
    <Component
      answered={!!quotes[currentIndex].answer}
      index={currentIndex}
      onPressClose={onClose}
      onPressDislike={onDislike}
      onPressLike={onLike}
      onScroll={onScroll}
      progress={progress.current}
      quotes={quotes}
      resultImgSource={getResultImgSource()}
      resultText={getResultText()}
      showResult={!!result}
      slideWidth={windowWidth}
    />
  );
}) as React.FC;
