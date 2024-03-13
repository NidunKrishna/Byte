import styled, {createGlobalStyle,keyframes} from 'styled-components'

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
`
export const Font=styled.h1`
font-size:20px;
font-family:sans;
font-weight:300;
margin-top:30px;
color:#000080;
`
export const Status=styled.button`
background-color:black;
barder-radius:100%;
height:1px;
color:white;
`
export const NameInput = styled.input`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  width: 40%;
  height: 36px;
  border: none;
  border-bottom: 0.5px solid #cbd5e1;
  margin-bottom: 20px;
  outline: none;
`
export const MainContainer2 = styled.div`
  display: flex;
  flex-direction: column;
`

export const GlowingText = styled.h1`
  font-size: 200px;
  font-weight: 600;
  color: white;
  font-size: 100px;
  font-weight: bold;
  text-align: left;
  font-family:Cursive;

`;
export const Para=styled.p`
font-size:20px;
color:white;`

export const Span =styled.h1`
background: linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red);
-webkit-background-clip: text;
color: transparent;
font-size: 100px;
font-weight: bold;
text-align: leftr;`

export const Card=styled.div`
.
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  background-color: #fff;
  width: 300px; 
  height:300px;
  margin-top:10vh;
  margin-right:15vh;
  &:hover {
    box-shadow:
    inset 0 -3em 3em rgb(0 0 128 / 30%),
    0 0 0 2px white,
    0.3em 0.3em 1em rgb(0 0 128 / 60%);
    // transform: rotate(180deg);
}
`
export const Text=styled.div`
display:'flex'
justify-content:'column'
text-align:'center'
margin-top:80px;
fontFamily:'Rounded'
&:hover {
  box-shadow: 10px 5px 5px 10px 10px #c0c0c0;

}
`

export const Button3 = styled.button`
font-size: 16px;
font-weight: 200;
background-color:`

