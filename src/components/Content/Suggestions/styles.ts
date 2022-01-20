import styled from 'styled-components'

export const SuggestionsWrapper = styled.div`
  position: sticky;
  top: 90px;
  
  a, a:visited, a:hover {
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    text-align: right;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;

    span {
      color: rgb(142, 142, 142);
      font-size: 14px;
      font-weight: 500;
    }

    a, a:visited, a:hover {
      color: rgb(38, 38, 38);
    }
  }

  .footer {
    margin-top: 20px;
    color: rgb(199, 199, 199);

    a, a:visited, a:hover {
      color: inherit;
      font-size: 11px;
      font-weight: normal;
      display: inline-block;

      &:not(:last-of-type):after {
        content: '·';
        margin: 0 0.25em 0 0.25em;
      }
    }

    p {
      text-transform: uppercase;
      font-size: 12px;
      margin-top: 20px;
    }
  }
`
