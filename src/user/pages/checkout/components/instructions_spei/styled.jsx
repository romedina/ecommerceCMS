import styled from 'styled-components'
import ButtonBase from '../.././../../../components/inputs/Button'

export const Content = styled.div`
  background: #fff;
  border: 1px solid #cdcdcd;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  @media print {
    position: absolute;
    z-index: 1000;
    top: 0;
    width: 100%;
    right: 0;
    margin-top: 0px;
  }
`
export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  @media print {
    margin: 0px;
  }
`
export const Title = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`
export const TitleCenter = styled(Title)`
  text-align: center;
`
export const Text = styled.div`
  font-weight: normal;
`

export const Instructions = styled.div`
  width: 45%;
  @media screen and (max-width: 600px){
    width: 100%; 
  }
`
export const InstructionsContent = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`
export const Button = styled(ButtonBase)`
  width: 300px;
  margin: auto;
  margin-top: 20px;
  display: block;
`
export const Logo = styled.img`
  display: block;
  width: 50%;
  max-width: 250px;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 50px;
`
export const PriceBox = styled.div`
  width: 90%;
  min-height: 100px;
  text-align: center;
  max-width: 300px;
`
export const Amount = styled.div`
  width: 90%;
  min-height: 100%;
  text-align: center;
  margin-bottom: 20px;
`
export const PriceShadow = styled.div`
  background-color: #176aad;
  text-align: center;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: #fff;
  border-radius: 5px;
`
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 5px;
  & span {
    font-weight: bold;
    margin-right: 10px;
  }
`
