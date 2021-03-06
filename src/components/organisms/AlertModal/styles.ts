import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const MessageBox = styled.div`
  max-width: 572px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${props => props.theme.gutters.md}px 0;

  > .icon {
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    margin-right: ${props => props.theme.gutters.md}px;

    > img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  > .text {
    line-height: 36px;
    flex: 1 1;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    margin: ${props => props.theme.gutters.xl}px 0;
  }

  @media screen and (max-width: 600px) {
    > .text {
      text-align: center;
      margin-top: ${props => props.theme.gutters.md}px;
    }
  }
`
