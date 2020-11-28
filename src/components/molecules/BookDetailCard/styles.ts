import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  > .image {
    width: 212px;
    flex-shrink: 0;
    margin-right: ${props => props.theme.gutters.md}px;

    > img {
      max-width: 100%;
      display: block;
      margin: auto;
    }
  }

  > .content {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .book-description {
    line-height: 24px;
    margin: ${props => props.theme.gutters.sm}px 0;
  }

  .author {
    margin-bottom: 4px;
  }

  .rating {
    margin-top: 4px;
    margin-left: -2px;
  }

  .price {
    margin-top: ${props => props.theme.gutters.sm}px;
  }

  .container-button-buy {
    margin-top: ${props => props.theme.gutters.sm}px;
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;

    > .image {
      box-shadow: 0px 24px 36px rgba(53, 49, 84, 0.28);
    }

    .info-mobile {
      display: none;
    }
  }

  @media screen and (max-width: 992px) {
    > .image {
      width: 165px;
      margin-top: ${props => props.theme.gutters.sm}px;
      margin-bottom: ${props => props.theme.gutters.sm}px;
      margin-left: auto;
      margin-right: auto;
    }

    .info-desktop {
      display: none;
    }

    .price {
      text-align: center;
    }

    .container-button-buy > button {
      width: 100%;
    }
  }
`
