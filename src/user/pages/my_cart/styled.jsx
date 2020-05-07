import styled from 'styled-components'
import ContainerBase from '../../components/container'

export const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const Summary = styled.div`
  background: var(--user-gray-light);
  padding: 10px;
  border-radius: 10px;
  width: 300px;
  font-size: 1.3em;
  font-weight: bold;
  text-align: right;
  & span {
    font-weight: normal;
    color: var(--user-gray);
    margin-right: 10px;
  }
  @media screen and (max-width:400px) {width: 100%}
`
export const Total = styled.div`
  margin-top: 10px;
  background: var(--user-black-light);
  padding: 10px;
  border-radius: 10px;
  width: 300px;
  font-size: 1.3em;
  font-weight: bold;
  text-align: right;
  & span {
    font-weight: normal;
    color: var(--user-gray);
    margin-right: 10px;
  }
  @media screen and (max-width:400px) {width: 100%}
`
export const Container = styled(ContainerBase)`
  max-width: 1000px;
`
export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`
export const ButtonStyled = styled.div`
  max-width:180px;
  padding-top: 15px;
  padding-bottom: 15px;
`
