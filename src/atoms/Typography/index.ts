import styled, { css } from 'styled-components'

interface TypoProps {
  fullWidth?: boolean
  center?: boolean
  fontFace?: boolean
  color?: 'textBlack' | 'textGray'
}

const TypoBase = styled.span<TypoProps>`
  color: inherit;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      display: block;
      width: 100%;
    `};

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `};

  ${({ fontFace }) =>
    fontFace &&
    css`
      font-family: 'Montserrat', sans-serif;
    `};

  ${({ color }) =>
    color === 'textBlack' &&
    css`
      color: ${props => props.theme.colors.textBlack};
    `};

  ${({ color }) =>
    color === 'textGray' &&
    css`
      color: ${props => props.theme.colors.textGray};
    `};
`

export const TypoHeadline1 = styled(TypoBase).attrs({ as: 'h1' })`
  font-size: 96px;
`

export const TypoHeadline2 = styled(TypoBase).attrs({ as: 'h2' })`
  font-size: 60px;
`

export const TypoHeadline3 = styled(TypoBase).attrs({ as: 'h3' })`
  font-size: 48px;
`

export const TypoHeadline4 = styled(TypoBase).attrs({ as: 'h4' })`
  font-size: 34px;
`

export const TypoHeadline5 = styled(TypoBase).attrs({ as: 'h5' })`
  font-size: 24px;
  font-weight: 700;
`

export const TypoHeadline6 = styled(TypoBase).attrs({ as: 'h6' })`
  font-size: 20px;
  font-weight: 500;
`

export const TypoSubtitle1 = styled(TypoBase)`
  font-size: 18px;
  font-weight: 500;
`

export const TypoSubtitle2 = styled(TypoBase)`
  font-size: 16px;
  font-weight: 700;
`

export const TypoBody1 = styled(TypoBase)`
  font-size: 14px;
  font-weight: 500;
`

export const TypoBody2 = styled(TypoBase)`
  font-size: 12px;
  font-weight: 500;
`

export const TypoCaption = styled(TypoBase)`
  font-size: 10px;
  font-weight: 400;
`
