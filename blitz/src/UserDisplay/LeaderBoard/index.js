import Header from '../LeaderBoard/Header'
import Leaderboard from '../LeaderBoard/Leaderb'

import {
  GlobalStyle,
  MainContainer,
  } from './styled'

const App = () => (
  <>
    <GlobalStyle />
    <MainContainer>
      <Header />
      <Leaderboard />
    </MainContainer>
  </>
)

export default App
