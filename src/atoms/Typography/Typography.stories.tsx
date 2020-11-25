import { storiesOf } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'
import {
  TypoHeadline1,
  TypoHeadline2,
  TypoHeadline3,
  TypoHeadline4,
  TypoHeadline5,
  TypoHeadline6,
  TypoSubtitle1,
  TypoSubtitle2,
  TypoBody1,
  TypoBody2,
  TypoCaption
} from '.'

storiesOf('Typography', module)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add('Headline 1', () => <TypoHeadline1>Headline 1</TypoHeadline1>)
  .add('Headline 2', () => <TypoHeadline2>Headline 2</TypoHeadline2>)
  .add('Headline 3', () => <TypoHeadline3>Headline 3</TypoHeadline3>)
  .add('Headline 4', () => <TypoHeadline4>Headline 4</TypoHeadline4>)
  .add('Headline 5', () => <TypoHeadline5>Headline 5</TypoHeadline5>)
  .add('Headline 6', () => <TypoHeadline6>Headline 6</TypoHeadline6>)
  .add('Subtitle 1', () => <TypoSubtitle1>Subtitle 1</TypoSubtitle1>)
  .add('Subtitle 2', () => <TypoSubtitle2>Subtitle 2</TypoSubtitle2>)
  .add('Body 1', () => <TypoBody1>Body 1</TypoBody1>)
  .add('Body 2', () => <TypoBody2>Body 2</TypoBody2>)
  .add('Caption', () => <TypoCaption>Caption</TypoCaption>)
  .add('Variants', () => (
    <>
      <TypoBody1 color="textBlack" fullWidth>
        Text black
      </TypoBody1>
      <TypoBody1 color="textGray" fullWidth>
        Text gray
      </TypoBody1>
      <TypoBody1 center fullWidth>
        Text center
      </TypoBody1>
    </>
  ))
  .add('With font-face', () => (
    <TypoSubtitle2 fontFace>With font-face</TypoSubtitle2>
  ))
