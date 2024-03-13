import styled from 'styled-components'

export const HeaderContainer = styled.div`
 // display: flex;
//   justify-content:center;
  width: 112%;
`

export const HeaderElementsContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 90%;
  @media screen and (min-width: 768px) {
    max-width: 1100px;
  }
  display:flex;
  justify-content:space-around;
`

export const Logo = styled.img`
  height: 150px;
`

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-family: 'Serif';
  font-weight: 500;
  font-size: 36px;
  margin: 0px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    font-size: 46px;
  }

`

export const Description = styled.p`
  text-align: center;
  color: #e2e8f0;
  font-family: 'Roboto';
  font-size: 16px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
