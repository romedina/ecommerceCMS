import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const Summary = (props) => {
  if (props.currentStep !== 2) return null

  return (
    <Container>
      <Title>{props.title}</Title>
      <Picture src={props.picture === 'string' ? props.picture : props.picture.preview} />
      <Price>{props.price} MN</Price>
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
  border: 1px dashed red;
  max-width: 600px;
  margin: auto;
`
const Title = styled('h3')`
  color: var(--main-blue-dark);
`
const Picture = styled('img')`
  width: 100%;
  max-width: 300px;
  height: 300px;
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
