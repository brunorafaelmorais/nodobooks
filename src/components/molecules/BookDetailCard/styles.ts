import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  > .image {
    width: 212px;
    flex-shrink: 0;
    margin-right: ${props => props.theme.gutters.md}px;
    box-shadow: 0px 24px 36px rgba(53, 49, 84, 0.28);

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
`
