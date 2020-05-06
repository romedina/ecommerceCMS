import styled from 'styled-components'
import CheckRoundedIcon from '@material-ui/icons/CheckRounded'

export const Content = styled.div`
  display: flex;
  background: #fff;
  border: 1px solid #cdcdcd;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`
export const Title = styled.h1`
  color: inherit;
`
export const Icon = styled(CheckRoundedIcon)`
  color: inherit;
  font-size: 100px;
`

export const Message = styled.p`
  color: inherit;
  font-size: 1.1em;
  text-align: center;
`
