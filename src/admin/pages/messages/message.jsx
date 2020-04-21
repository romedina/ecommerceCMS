import React from 'react'
import styled from 'styled-components'
import propTypes, { oneOfType } from 'prop-types'
import { Paper } from '@material-ui/core'

const Message = props => {
  const date = props.date.toDate()

  return (
    <Wrapper id={props.id}>
      <Content elevation={2}>
        <Header>
          <div>
            <Name>{props.name}</Name>
            <div> {props.email} </div>
            <div> {props.number} </div>
            <Date> {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()} </Date>
          </div>
        </Header>
        <MessageContent>{props.content}</MessageContent>
      </Content>
    </Wrapper>
  )
}

Message.propTypes = {
  name: propTypes.string,
  date: propTypes.object,
  email: propTypes.string,
  id: propTypes.string,
  content: propTypes.string,
  number: oneOfType([propTypes.number, propTypes.string])
}

const Wrapper = styled.div`
  padding: 20px;
  width: 50%;
  @media screen and (max-width:950px) {
    width: 100%;
    max-width: 400px;
    margin: auto;
  }
`
const Content = styled(Paper)`
  background: ${props => props.isActive ? '#0090ff42' : '#fff'};
  padding: 10px;
`
const MessageContent = styled.div`
  padding: 5px;
  border-radius: 5px;
  background: #d8edfe;
  min-height: 140px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--main-blue-dark);
`
const Name = styled.h3`
  margin: 0px;
`
const Date = styled.div`
  color: var(--main-blue)
`
export default Message
