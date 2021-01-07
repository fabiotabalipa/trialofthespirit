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
} from '../../globals/constants';
import {Quotes} from '../../globals/types';
import {Close, Dislike, Like} from '../../icons';
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

interface Props {
  answered: boolean;
  index: number;
  onPressClose(): void;
  onPressDislike(): void;
  onPressLike(): void;
  onScroll(event: object): void;
  progress: number;
  quotes: Quotes;
  resultImgSource: ImageProps['source'];
  resultText: string;
  showResult: boolean;
  slideWidth: number;
}

export default (({
  answered,
  index,
  onPressClose,
  onPressDislike,
  onPressLike,
  onScroll,
  progress,
  quotes,
  resultImgSource,
  resultText,
  showResult,
  slideWidth,
}) => (
  <Background>
    <Overlay
      buttonText="finish"
      imageSource={resultImgSource}
      onPressButton={onPressClose}
      show={showResult}
      text={resultText}
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
              answered
                ? quotes[index].answer === ANSWER_LIKE
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
              answered
                ? quotes[index].answer === ANSWER_DISLIKE
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
