import React from 'react'
import styled from 'styled-components'
import { CircularProgress, LinearProgress } from '@material-ui/core'
import propTypes from 'prop-types'

const Loading = (props) => {
  return (
    <FlexFullWidth>
      <Content>
        <Title>Estamos subiendo tu articulo</Title>
        <FLexCenter>
          <CircularProgressStyled color='secondary' />
        </FLexCenter>
        <LinearProgress value={(props.numPicturesUploaded / props.numPicturesToUpload) * 100} variant='determinate' color='secondary' />
        <Describe>Subiendo imagenes {props.numPicturesUploaded} de {props.numPicturesToUpload}</Describe>
      </Content>
    </FlexFullWidth>
  )
}
Loading.propTypes = {
  numPicturesToUpload: propTypes.number,
  numPicturesUploaded: propTypes.number
}

const FlexFullWidth = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
`

const Describe = styled('div')`
  font-size: 1.3em;
  color: var(--main-blue);
  margin-top: 20px;
  text-align: center;
`

const Title = styled('h2')`
  font-size: 1.5em;
  text-align: center;
  color: var(--main-blue);
`

const Content = styled('section')`
  width: 90%;
  max-width: 600px;
  margin: auto;
`

const FLexCenter = styled('section')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px auto;
`
const CircularProgressStyled = styled(CircularProgress)`
  margin:auto;
  width: 100px!important;
  height: 100px!important;
  
`

export default Loading
