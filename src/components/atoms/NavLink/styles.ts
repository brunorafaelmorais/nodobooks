import styled, { css } from 'styled-components'

type ContainerProps = {
  isActive?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  height: 40px;
  position: relative;
  transition: all 0.2s;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  a,
  span {
    transition: all 0.1s;
  }

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
  }

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: ${props => props.theme.colors.primary};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    border-radius: 100%;
    transition: all 0.2s;
  }

  ${props =>
    !props.isActive &&
    css`
      &::before {
        opacity: 0;
        visibility: hidden;
      }

      a:hover > span {
        color: ${props => props.theme.colors.primaryTint};
        text-decoration: underline;
      }
    `}

  ${props =>
    props.isActive &&
    css`
      padding-left: 20px;
    `}
`
