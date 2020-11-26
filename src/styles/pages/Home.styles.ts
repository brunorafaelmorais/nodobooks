import styled from 'styled-components'

export const Container = styled.div`
  .content-box {
    display: flex;
    align-items: flex-start;
    padding-bottom: ${props => props.theme.gutters.xl}px;

    > .left {
      width: 256px;
      position: relative;
      flex-shrink: 0;
      background: #efeef6;
      padding-top: ${props => props.theme.gutters.lg}px;
      padding-right: ${props => props.theme.gutters.lg}px;
      padding-bottom: ${props => props.theme.gutters.lg}px;
    }

    > .left::before {
      content: '';
      width: 50vw;
      height: 100%;
      background: #efeef6;
      position: absolute;
      top: 0;
      left: 0;
      margin-left: -50vw;
    }

    > .right {
      flex: 1 1;
      padding-top: ${props => props.theme.gutters.lg}px;
      padding-bottom: ${props => props.theme.gutters.lg}px;
    }
  }

  .container-list {
    position: relative;
  }
`
