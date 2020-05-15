import styled from 'styled-components'
import ButtonBase from '../../../components/inputs/Button'

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width:700px){
    flex-direction: column
  }
`
export const ActionsContent = styled.div`
  width: 60%;
  @media screen and (max-width:700px) {
    width: 100%;
  }
`

export const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 20px;
`
export const Button = styled(ButtonBase)`
  min-width: 200px;
  margin-top: 20px;
  margin-right: 15px;
  &:last-of-type {
    margin-right: 0px;
  }
  @media screen and (max-width:700px) {
    min-width: 49%;
  }
`

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width:700px) {
    justify-content: space-between;
  }
`
