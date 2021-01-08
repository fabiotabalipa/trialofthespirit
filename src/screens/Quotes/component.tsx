import React from 'react';
import {ImageProps, View} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';

import {CircularProgress, Dots, Overlay} from '../../components';
import {
  ANSWER_DISLIKE,
  ANSWER_LIKE,
  COLOR_BLUE,
  COLOR_GREEN,
  COLOR_MEDIUM_GREY,
  COLOR_RED,
  COLOR_WHITE,
  IMG_SRC_LEA,
  IMG_SRC_OBI_WAN,
  IMG_SRC_PALPATINE,
  RESULT_JEDI,
  RESULT_SITH,
} from '../../globals/constants';
import {
  TXT_RESULT_BALANCED,
  TXT_RESULT_JEDI,
  TXT_RESULT_SITH,
} from '../../globals/text';
import {Close, Dislike, Like} from '../../icons';
import {Faction, Quotes} from '../../store/ducks/quotes/types';
import {Result} from '../../store/ducks/result/types';
import {
  AnswerContainer,
  Background,
  Body,
  Card,
  Header,
  Question,
  Slide,
  SlidesContainer,
  Text,
} from './style';

export interface Answer {
  faction: Faction;
  type: number;
}

interface Props {
  answered: boolean;
  currentAnswer?: Answer;
  index: number;
  onPressClose(): void;
  onPressDislike(): void;
  onPressLike(): void;
  onScroll(event: object): void;
  progress: number;
  quotes: Quotes;
  result: Result;
  slideWidth: number;
}

const getResultImgSource = (result: Result): ImageProps['source'] => {
  if (result === RESULT_JEDI) {
    return IMG_SRC_OBI_WAN;
  }

  if (result === RESULT_SITH) {
    return IMG_SRC_PALPATINE;
  }

  return IMG_SRC_LEA;
};

const getResultText = (result: Result): string => {
  if (result === RESULT_JEDI) {
    return TXT_RESULT_JEDI;
  }

  if (result === RESULT_SITH) {
    return TXT_RESULT_SITH;
  }

  return TXT_RESULT_BALANCED;
};

export default (({
  answered,
  currentAnswer,
  index,
  onPressClose,
  onPressDislike,
  onPressLike,
  onScroll,
  progress,
  quotes,
  result,
  slideWidth,
}) => (
  <Background>
    <Overlay
      buttonText="finish"
      imageSource={getResultImgSource(result)}
      onPressButton={onPressClose}
      text={getResultText(result)}
      visible={!!result}
    />
    <Header>
      <TouchableOpacity onPress={onPressClose}>
        <Close color={COLOR_WHITE} size={50} />
      </TouchableOpacity>
    </Header>
    <Body>
      <View>
        <SlidesContainer
          horizontal
          onScroll={onScroll}
          pagingEnabled
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}>
          {quotes.map((quote) => (
            <Slide key={quote.id} width={slideWidth}>
              <Card>
                <Text>{`"${quote.text}"`}</Text>
              </Card>
            </Slide>
          ))}
        </SlidesContainer>
        <Dots
          color={COLOR_MEDIUM_GREY}
          dotSize={12}
          index={index}
          length={quotes.length}
        />
      </View>
      <CircularProgress
        baseColor={COLOR_MEDIUM_GREY}
        progressColor={COLOR_GREEN}
        toProgress={progress}
        size={120}
        strokeWidth={6}
      />
      <Question>Do you agree?</Question>
      <AnswerContainer>
        <TouchableOpacity disabled={answered} onPress={onPressLike}>
          <Like
            color={
              answered && currentAnswer
                ? currentAnswer.type === ANSWER_LIKE
                  ? COLOR_BLUE
                  : COLOR_MEDIUM_GREY
                : COLOR_WHITE
            }
            size={35}
          />
        </TouchableOpacity>
        <TouchableOpacity disabled={answered} onPress={onPressDislike}>
          <Dislike
            color={
              answered && currentAnswer
                ? currentAnswer.type === ANSWER_DISLIKE
                  ? COLOR_RED
                  : COLOR_MEDIUM_GREY
                : COLOR_WHITE
            }
            size={35}
          />
        </TouchableOpacity>
      </AnswerContainer>
    </Body>
  </Background>
)) as React.FC<Props>;
