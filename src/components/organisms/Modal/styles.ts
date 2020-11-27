import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    flex-shrink: 0;
    position: relative;
    padding-top: ${props => props.theme.gutters.sm}px;
    padding-right: ${props => props.theme.gutters.sm}px;
    padding-left: ${props => props.theme.gutters.sm}px;

    &::before {
      content: '';
      width: 100%;
      height: ${props => props.theme.gutters.sm}px;
      position: absolute;
      bottom: -${props => props.theme.gutters.sm}px;
      left: 0;
      background-image: linear-gradient(#fff, rgba(255, 255, 255, 0));
    }
  }

  @media screen and (min-width: 600px) {
    .title {
      padding-top: ${props => props.theme.gutters.md}px;
      padding-right: ${props => props.theme.gutters.md}px;
      padding-left: ${props => props.theme.gutters.md}px;

      &::before {
        height: ${props => props.theme.gutters.md}px;
        bottom: -${props => props.theme.gutters.md}px;
      }
    }
  }
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.88);
  position: absolute;
  top: 0;
  left: 0;
`

export const Box = styled.div`
  width: calc(100% - ${props => props.theme.gutters.sm * 2}px);
  max-width: 750px;
  max-height: calc(100% - ${props => props.theme.gutters.sm * 2}px);
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const Content = styled.div`
  padding: ${props => props.theme.gutters.sm}px;
  flex: 1 1;
  overflow-y: auto;

  @media screen and (min-width: 600px) {
    padding: ${props => props.theme.gutters.md}px;
  }
`

export const ContainerCloseButton = styled.div`
  padding-right: ${props => props.theme.gutters.sm}px;
  padding-bottom: ${props => props.theme.gutters.sm}px;
  padding-left: ${props => props.theme.gutters.sm}px;
  display: flex;
  justify-content: flex-end;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: ${props => props.theme.gutters.sm}px;
    position: absolute;
    top: -${props => props.theme.gutters.sm}px;
    left: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0), #fff);
  }

  @media screen and (min-width: 600px) {
    padding-right: ${props => props.theme.gutters.md}px;
    padding-bottom: ${props => props.theme.gutters.md}px;
    padding-left: ${props => props.theme.gutters.md}px;

    &::before {
      height: ${props => props.theme.gutters.md}px;
      top: -${props => props.theme.gutters.md}px;
    }
  }
`
