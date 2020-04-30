import React from 'react'
import styled from 'styled-components'
import LoyaltyIcon from '@material-ui/icons/Loyalty'
import { string } from 'prop-types'

const NotFound = props => {
  return (
    <Content>
      <LoyaltyIconStyled />
      <Text>
        {props.message}
      </Text>
    </Content>
  )
}

NotFound.propTypes = {
  message: string
}

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  flex-direction: column;
  color: var(--user-gray-light);
`
const LoyaltyIconStyled = styled(LoyaltyIcon)`
  font-size: 150px;
  color: inherit;
`
const Text = styled.div`
  font-size: 1.5em;
  color: inherit;
  margin-top: 50px;
  text-align: center;
  @media screen and (max-width:500px){
    max-width: 80%;
  }
`
export default NotFound
