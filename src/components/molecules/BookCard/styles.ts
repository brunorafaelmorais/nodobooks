import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > .image {
    width: 100%;
    flex-shrink: 0;

    > a {
      display: block;
    }

    img {
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
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 14px;
    margin: ${props => props.theme.gutters.sm}px 0;
  }

  .buy-now {
    margin-top: ${props => props.theme.gutters.sm}px;
  }

  .book-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .author {
    margin-bottom: 4px;
  }

  .rating {
    margin-top: 4px;
    margin-left: -2px;
  }

  .book-title {
    height: 38px;
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
    align-items: center;

    > .image {
      width: 164px;
      box-shadow: 0px 24px 36px rgba(53, 49, 84, 0.28);
      margin-right: ${props => props.theme.gutters.md}px;
    }
  }

  @media screen and (min-width: 1200px) {
    > .image {
      width: 212px;
    }
  }

  @media screen and (max-width: 992px) {
    > .image {
      margin-bottom: ${props => props.theme.gutters.xs}px;
    }

    .buy-now {
      width: 100%;
    }

    .rating,
    .book-description {
      display: none;
    }

    .price {
      margin-top: ${props => props.theme.gutters.sm}px;
    }
  }
`
