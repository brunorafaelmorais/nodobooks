import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;

  > button {
    width: 43px;
    height: 43px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    outline: none;
    border: 0;
    padding: 0;
    color: #fff;
    cursor: pointer;
  }

  > input {
    height: 43px;
    background: #0a0a0a;
    border-radius: 4px;
    color: #fff;
    font: 600 14px 'Montserrat', Arial, Helvetica, sans-serif;
    border: 0;
    outline: none;
    width: 100%;
    display: block;
    padding-right: ${props => props.theme.gutters.sm}px;
    padding-left: 43px;

    &::-webkit-input-placeholder {
      color: #fff;
    }
    &::-moz-placeholder {
      color: #fff;
    }
    &:-ms-input-placeholder {
      color: #fff;
    }
    &:-moz-placeholder {
      color: #fff;
    }
  }

  @media screen and (min-width: 992px) {
    max-width: 500px;
  }
`
