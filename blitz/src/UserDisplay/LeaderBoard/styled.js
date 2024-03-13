import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
 body {
  margin: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://img.freepik.com/free-vector/abstract-blue-light-pipe-speed-zoom-black-background-technology_1142-8392.jpg?w=996&t=st=1706626834~exp=1706627434~hmac=4c00a02dca383e4dd627c27258394943c1ea88f72ad5e7c3ed9c8e7d72ffd69f');
  min-height: 100vh;
  background-size: cover;
  padding-bottom: 50px;
`

