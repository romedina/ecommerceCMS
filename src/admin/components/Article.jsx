import React from 'react'
import propTypes, { string } from 'prop-types'
import styled from 'styled-components'
import shortText from '../../helpers/short_text'
import { Button } from '@material-ui/core'
import currency from '../../helpers/currency'
import { useHistory } from 'react-router-dom'

const Article = (props) => {
  const history = useHistory()

  const onCLick = event => {
    history.push(`/item/${props.id}`)
  }

  return (
    <Wrapped>
      <ItemContent onClick={onCLick}>
        {!props.isActive && (<Shadow />)}
        <Picture src={props.picture} />
        <Actions>
          <Price> $ {currency.formatMoney(props.price)}</Price>
          <Title>{props.title}</Title>
          <Description>{shortText(props.description)}</Description>
        </Actions>
        <ButtonContainer onClick={event => event.stopPropagation()}>
          <ButtonStyled onClick={() => props.handleEdit(props)} color='secondary' variant='outlined'>Editar</ButtonStyled>
          <ButtonStyled onClick={() => props.handleStatus(props)} color='secondary' variant='contained'>{props.isActive ? 'Desactivar' : 'Activar'}</ButtonStyled>
          <ButtonStyled onClick={() => props.handleDelete(props)} color='secondary' variant='contained'>Eliminar</ButtonStyled>
        </ButtonContainer>
      </ItemContent>
    </Wrapped>
  )
}

Article.propTypes = {
  picture: propTypes.string,
  price: propTypes.oneOfType([propTypes.string, propTypes.number]),
  description: propTypes.string,
  title: propTypes.string,
  handleEdit: propTypes.func,
  handleDelete: propTypes.func,
  handleStatus: propTypes.func,
  isActive: propTypes.bool,
  id: string
}

const Wrapped = styled.article`
  width: 25%;
  padding: 10px;
  @media screen and (max-width:1400px){ width:33%; padding: 5px;}
  @media screen and (max-width:1100px){ width:50% }
  @media screen and (max-width:750px){ width:100% }
  @media screen and (max-width:700px){ width:50% }
  @media screen and (max-width:500px){ width:100% }
`

const ItemContent = styled('div')`
  cursor: pointer;
  position: relative;
  border-radius: 7px;
  overflow: hidden;
  display: block;
  min-height: 100%;
  border: 1px solid #008ffd38;
  transition: all 300ms;
  &:hover{
    box-shadow: 0px 0px 5px #008ffd38;
    transform: scale(1.03)
  }
`
const Picture = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`

const Actions = styled.div`
  padding: 8px;
  margin-bottom: 35px;
`

const Price = styled.div`
  text-align: left;
  font-size: 1.3em;
  color: var(--main-blue);
  font-weight: bold;
`
const Description = styled.p`
  color: var(--main-blue-dark);
  text-align: left;
`

const Title = styled.div`
  color: var(--main-blue-dark);
  font-size: 1.2em;
  text-align: left;
  margin-top: 10px;
  font-weight: bold;
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
  width: 100%;
  padding: 0px 6px;
  z-index: 2;
`
const ButtonStyled = styled(Button)`
  text-align: center;
  width: 32%;
  font-size: .7em;
  border-radius: 15px;
`
const Shadow = styled.div`
  width: 100%;
  height: 100%;
  position:absolute;
  background: #0000003b;
  z-index: 1;
`
export default Article
