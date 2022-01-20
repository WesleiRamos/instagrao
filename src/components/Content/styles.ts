import styled from 'styled-components'

const ContentWrapper = styled.main`
  max-width: 975px;
  width: 100%;
  display: grid;
  grid-template-columns: 620px 300px;
  justify-content: space-between;
  padding-top: 30px;

  @media (max-width: 999px) {
    justify-content: center;
    grid-template-columns: 614px;

    > *:last-child {
      display: none;
    }
  }

  @media (max-width: 614px) {
    padding-top: 0px;
    grid-template-columns: 100%;
  }
`

export default ContentWrapper
