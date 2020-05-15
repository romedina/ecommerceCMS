import styled from 'styled-components'
import { RadioGroup, Radio as RadioBase } from '@material-ui/core'

export const Content = styled(RadioGroup)`
  background: #fff;
`

export const Radio = styled(RadioBase)`
  margin-right: 10px;
  margin-left: 20px;
  @media screen and (max-width:700px) {
    margin-left: 10px;
  }
`

export const Option = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #cdcdcd;
  min-height: 90px;
`

export const Icon = styled.img`
  margin-right: 10px;
  padding: 3px;
  background: #cdcdcd4d;
  font-size: 30px;
  border-radius: 50%;
  color: #008ffd;
`

export const Text = styled('div')`
  font-size: 1.3em;
  margin-right: 10px;
`
export const Alert = styled.div`
  margin-bottom: 15px;
`
