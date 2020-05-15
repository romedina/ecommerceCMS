import styled from 'styled-components'
import InputBase from '../../../../../components/inputs/GroupInput'

export const Content = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 40px 10px;
`
export const Box = styled.div`
  border-radius: 5px;
  max-width: 450px;
  padding: 10px;
  margin-bottom: 10px;
  margin: auto;
`
export const Input = styled(InputBase)`
  margin-bottom: 15px;
  margin-right: ${props => props.marginRight || '0px'};
`
export const Leggend = styled.div`
  font-size: 1em;
  font-style: italic;
`
