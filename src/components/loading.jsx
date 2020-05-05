import React from 'react'
import styled from 'styled-components'
import loaderIcon from '../assets/loader.svg'
import { useSelector } from 'react-redux'

const Loading = props => {
  const { isActive, message } = useSelector(state => state.loading)

  if (!isActive) return null

  return (
    <Backdrop>
      <Loader src={loaderIcon} />
      {message && (
        <Message>{message}</Message>
      )}
    </Backdrop>
  )
}

const Loader = styled.img`
  width: 100px!important;
  height: 100px!important;
`

const Message = styled.p`
  font-size: 1.2em;
  text-align: center;
  margin-top: 50px;
  width: 90%;
  max-width: 500px;
`

const Backdrop = styled.div`
  color: #fff;
  background: #000000b3;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default Loading
