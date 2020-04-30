import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import LoyaltyIcon from '@material-ui/icons/Loyalty'

const NotFound = props => {
  return (
    <Content>
      <Picture />
      <Text>{props.message}</Text>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #008ffd6e;
  min-height: 60vh;
`
const Picture = styled(LoyaltyIcon)`
  font-size: 150px;
  color: inherit;
`
const Text = styled.div`
  width: 50%;
  text-align: center;
  margin-top: 50px;
  color: inherit;
  font-size: 1.5em;
  @media screen and (max-width:400px) {
    width: 80%
  }
`

NotFound.propTypes = {
  message: string
}

export default NotFound
