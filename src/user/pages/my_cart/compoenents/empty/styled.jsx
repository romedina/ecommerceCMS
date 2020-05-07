import styled from 'styled-components'
import { LocalOfferOutlined } from '@material-ui/icons'

export const Content = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: #fff;
  flex-direction: column;
  color: var(--empty-messages)
`
export const Text = styled.div`
  width: 80%;
  margin-top: 30px;  
  font-size: 1.5em;
  text-align: center;
  color: inherit;
`
export const Icon = styled(LocalOfferOutlined)`
  color: inherit;
  display: block;
  font-size: 100px;
`
