import styled from 'styled-components';

export const StoriesWrapper = styled.main`
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(219, 219, 219);
  width: 100%;
  padding: 16px 0;
  height: 118px;
  overflow: hidden;
  border-radius: 2px;

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, 80px);
    min-width: 100%;
    width: max-content;
    break-inside: avoid-column;
    overflow: hidden;

    .story {
      width: 80px;
      height: 90px;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 4px;

      p {
        margin-top: 5px;
      }
    }
  }

  @media (max-width: 614px) {
    border: none;
    border-bottom: 1px solid rgb(219, 219, 219);
  }
`
