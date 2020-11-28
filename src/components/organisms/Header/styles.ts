import styled from 'styled-components'

export const Container = styled.header`
  z-index: 10;
  position: relative;

  > div {
    display: flex;
    flex-direction: column;
  }

  .logo-container {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  .logo-container > .logoText {
    margin-left: ${props => props.theme.gutters.xs - 1}px;
  }

  .link-to-home {
    display: inline-flex;
  }

  .content-logo {
    display: flex;
    align-items: center;
  }

  .burguer-menu {
    margin-left: -12px;
  }

  @media screen and (min-width: 992px) {
    padding-top: 26px;

    > div {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .logo-container > .logoText {
      margin-left: ${props => props.theme.gutters.sm}px;
    }

    .burguer-menu {
      display: none;
    }
  }

  @media screen and (max-width: 992px) {
    background: #0a0a0a;
    padding-top: ${props => props.theme.gutters.xs}px;
    position: sticky;
    top: 0;

    .logo-container > .logo {
      display: none;
    }

    .logo-container > .logoText {
      color: #fff;
    }

    .input-search {
      margin: ${props => props.theme.gutters.xs}px 0;
    }

    .input-search > button {
      color: #0a0a0a;
    }

    .input-search > input {
      background-color: #fff;
      color: #0a0a0a;

      &::-webkit-input-placeholder {
        color: #0a0a0a;
      }
      &::-moz-placeholder {
        color: #0a0a0a;
      }
      &:-ms-input-placeholder {
        color: #0a0a0a;
      }
      &:-moz-placeholder {
        color: #0a0a0a;
      }
    }

    .burguer-menu {
      color: #fff;
    }
  }
`
