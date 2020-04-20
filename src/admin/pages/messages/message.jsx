import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import { Avatar as AvatarBase } from '@material-ui/core'
import User from '../../../assets/user.svg'

const Message = props => {
  const date = props.date.toDate()
  return (
    <Wrapper id={props.id}>
      <Content isActive={props.isActive} onClick={event => props.showMessage(props)}>
        <Avatar src={User} />
        <Data>
          <Name>{props.name}</Name>
          <span>{props.email}</span>
          <span>{date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}</span>
        </Data>
      </Content>
    </Wrapper>
  )
}

Message.propTypes = {
  name: propTypes.string,
  date: propTypes.object,
  email: propTypes.string,
  id: propTypes.string,
  isActive: propTypes.bool,
  showMessage: propTypes.func
}

const Wrapper = styled.div`
  padding: 10px;
  width: 50%;
  @media screen and (max-width:950px) {
    width: 100%;
    max-width: 400px;
    margin: auto;
  }
`
const Content = styled.div`
  background: ${props => props.isActive ? '#0090ff42' : '#fff'};
  padding: 10px;
  border: 1px solid var(--main-blue);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Data = styled.div`
  width: 100%;
  & span {
    display: block
  }
`
const Avatar = styled(AvatarBase)`
  width: 70px;
  height: 70px;
  min-width: 70px;
  min-height: 70px;
  margin-right: 10px;
`
const Name = styled.h4`
  margin: 5px 0px;
`

export default Message
