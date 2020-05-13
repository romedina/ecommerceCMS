import styled from 'styled-components'
import { CheckCircleOutlined } from '@material-ui/icons'

export const Content = styled.div`
  min-height: 350px;
  display: flex;
  background: #25ae88;
  padding: 50px 15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  color: #fff;
`
export const Title = styled.h1`
  color: inherit;
`
export const Icon = styled(CheckCircleOutlined)`
  color: inherit;
  font-size: 100px;
`

export const Message = styled.p`
  color: inherit;
  font-size: 1.3em;
  text-align: center;
`
