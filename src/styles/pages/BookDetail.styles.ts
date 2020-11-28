import styled from 'styled-components'

export const Container = styled.div`
  .content-box {
    display: flex;
    align-items: flex-start;
    padding-top: ${props => props.theme.gutters.sm}px;
    padding-bottom: ${props => props.theme.gutters.sm}px;

    > .left {
      width: 256px;
      position: relative;
      flex-shrink: 0;
      background: #efeef6;
    }

    > .right {
      flex: 1 1;
    }
  }

  @media screen and (min-width: 992px) {
    .content-box {
      padding-top: ${props => props.theme.gutters.xl}px;
      padding-bottom: ${props => props.theme.gutters.xl}px;

      > .right {
        margin-left: ${props => props.theme.gutters.md}px;
      }

      > .left {
        position: sticky;
        top: 0;
        padding-top: ${props => props.theme.gutters.md}px;
        padding-right: ${props => props.theme.gutters.md}px;
        padding-bottom: ${props => props.theme.gutters.md}px;
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
    }
  }

  @media screen and (max-width: 992px) {
    .content-box {
      > .left {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        padding: 131px ${props => props.theme.gutters.lg}px
          ${props => props.theme.gutters.lg}px
          ${props => props.theme.gutters.lg}px;
        z-index: 9;
        transition: all 0.2s;
        overflow-y: auto;

        &:not(.show) {
          transform: translateY(100%);
          opacity: 0;
          visibility: hidden;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .content-box {
      > .left {
        padding: 131px ${props => props.theme.gutters.sm}px
          ${props => props.theme.gutters.sm}px
          ${props => props.theme.gutters.sm}px;
      }
    }
  }
`
