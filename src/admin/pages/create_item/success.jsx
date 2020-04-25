import React from 'react'
import styled from 'styled-components'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import propTypes from 'prop-types'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const Success = (props) => {
  const history = useHistory()

  const onViewClick = () => {
    history.push(`/item/${props.idCreated}`)
  }

  return (
    <FlexFullWidth>
      <Content id='success-component'>
        <IconSucces color='secondary' />
        <Describe>Su artículo se ha subido con éxito.</Describe>
        <ButtonContainer>
          <ButtonStyled onClick={props.onReset} variant='contained' color='primary'>Volver a publicar</ButtonStyled>
          <ButtonStyled onClick={onViewClick} variant='contained' color='primary'>Ver artículo</ButtonStyled>
        </ButtonContainer>
      </Content>
    </FlexFullWidth>
  )
}
Success.propTypes = {
  idCreated: propTypes.string,
  onReset: propTypes.func
}

const ButtonStyled = styled(Button)`
  margin-right: 20px;
  & :last-of-type {
    margin: 0px;
  }
  @media screen and (max-width:500px){
    font-size: .8em;
  }
`

const ButtonContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

const Describe = styled('div')`
  font-size: 1.8em;
  color: var(--main-blue);
  margin: auto;
  text-align: center;
  margin: 30px 0px;
`

const IconSucces = styled(CheckCircleOutlineIcon)`
  width: 200px;
  height: 200px;
  margin: auto;
  display: block;
`

const Content = styled('section')`
  width: 100%;
`

const FlexFullWidth = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
`

export default Success
