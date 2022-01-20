import styled from 'styled-components'
import { TopBar, Content } from './components'

const AppWrapper = styled.section`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const App =  (): JSX.Element => (
  <AppWrapper>
    <TopBar />
    <Content />
  </AppWrapper>
)
