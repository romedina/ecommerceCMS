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
export const Logo = styled.img`
  width: 55%;
  max-width: 300px;
  margin: auto;
`
export const Header = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  @media screen and (max-width: 60px){
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`
export const Service = styled.div`
  width: 55%;
  max-width: 300px;
  font-size: 1.5em;
  text-align: center;
  margin: auto;
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
export const Text = styled.div`
  font-weight: normal;
  text-align: center;
`
export const Barcode = styled.img`

`
export const BoxPrice = styled.div`
  background: #176aad;
  width: 90%;
  min-height: 100px;
  max-width: 300px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2em;
`
export const Instructions = styled.div`
  width: 45%;
  @media screen and (max-width: 400px){
    width: 100%; 
  }
`
export const InstructionsContent = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const PaynetStores = styled.img`
  width: 100%;
`
export const Button = styled(ButtonBase)`
  width: 300px;
  margin: auto;
  margin-top: 20px;
  display: block;
`
