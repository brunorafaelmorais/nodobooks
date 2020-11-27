import styled from 'styled-components'

type ContainerProps = {
  clipPathPercent: number
  iconSize?: number
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  color: #f2c94c;
  position: relative;

  > .star-container {
    width: ${props => props.iconSize * 5}px;
    height: ${props => props.iconSize}px;
    position: relative;
  }

  > .text {
    margin-left: 4px;
  }

  .star-box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;

    &.-color {
      color: #f2c94c;
      z-index: 1;
      clip-path: inset(0 ${props => props.clipPathPercent.toFixed(2)}% 0 0);
    }

    &.-gray {
      color: #eeedf5;
    }
  }
`
