import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #ddd;
  padding: ${props => props.theme.gutters.xs}px;
  display: flex;
  align-items: flex-start;
  border-radius: 4px;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    flex-shrink: 0;
    margin-right: ${props => props.theme.gutters.xs}px;
    border-radius: 4px;
  }

  > .content {
    flex: 1 1;
    display: flex;
    flex-direction: column;

    .book-title {
      margin: 4px 0;
    }

    .book-title::first-letter {
      text-transform: capitalize;
    }

    .book-description {
      margin: ${props => props.theme.gutters.xs}px 0;
    }

    .rating {
      margin-left: -2px;
    }
  }
`
