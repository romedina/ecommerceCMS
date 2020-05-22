import styled from 'styled-components'
import ButtonBase from '../../../../../components/inputs/Button'

export const Content = styled.div`
  width: 35%;
  margin-left: 10px;
  background: #cdcdcd;
  position: sticky;
  top: 90px;
  background: #fff;
  padding: 50px;
  border-radius: 5px;
  z-index:1;
  @media screen and (max-width:900px) {
    width: 40%;
    padding: 20px 20px;
  }
  @media screen and (max-width:700px){
    position: static;
    width: 100%;
    margin: auto;
    margin-top: 20px;
  }
`

export const Title = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
`
export const Box = styled.div`
  border-bottom: 1px solid #cdcdcd;
  margin-bottom: 20px;
  font-size: 1.1em;
  &:last-of-type {
    border: none;
  }
`
export const Row = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`
export const Button = styled(ButtonBase)`
  width: 100%;
  margin-top: 30px;
`
export const ShadowPaypal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  width: 400px;
  opacity: 0.001;
`
