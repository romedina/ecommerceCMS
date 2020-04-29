import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import currency from '../../../helpers/currency'

const Summary = (props) => {
  if (props.currentStep !== 2) return null

  return (
    <Container>
      <Title>{props.title}</Title>
      <Picture src={props.picture === 'string' ? props.picture : props.picture.preview} />
      <Price>$ {currency.formatMoney(props.price)} MN</Price>
      <Description>{props.description}</Description>
    </Container>
  )
}

Summary.propTypes = {
  currentStep: propTypes.number,
  title: propTypes.string,
  description: propTypes.string,
  price: propTypes.number,
  picture: propTypes.oneOfType([propTypes.object, propTypes.string])
}

const Container = styled('div')`
  max-width: 500px;
  margin: auto;
  
`
const Title = styled('h2')`
  color: var(--main-blue-dark);
`
const Picture = styled('img')`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin: auto;
  display: block;
`
const Price = styled('h1')`
  color: var(--main-blue-dark);
`
const Description = styled('p')`
  color: var(--main-blue-dark);
  font-size: 1.2em;
`

export default Summary
