import React from 'react'
import styled from 'styled-components'
import { Box, Typography } from '@material-ui/core'
import Dropzone from './Dropzone'
import Previews from './previews'

const Multimedia = (props) => {

  if (props.currentStep !== 1) return null

  return (
    <Box>
      <TextContainer>
        <Title>Foto Principal</Title>
        <SubTitle>Agrega una foto principal a tu producto</SubTitle>
      </TextContainer>
      {!props.picture && (
        <Dropzone 
          multiple={false}
          handleDrop={props.handleDropPicture}
        />
      )}
      <Previews 
        pictures={props.picture ? [props.picture] : []}
        handleDelete={props.handleDeletePicture}
      />
      <TextContainer>
        <Title>Foto Principal</Title>
        <SubTitle>Agrega una foto principal a tu producto</SubTitle>
      </TextContainer>
      {props.pictures.length < 10 && (
        <Dropzone 
          handleDrop={props.handleDropPictures}
          {...props} 
        />
      )}
      <Previews 
        pictures={props.pictures || []}
        handleDelete={props.handleDeletePictures}
      />
    </Box>
  )
}

const TextContainer = styled('div')`
  margin-top: 30px;
  margin-bottom: 10px;
`

const Title = styled('h6')`
  font-size: 1.5em;
  padding: 0px;
  margin: 0px;
  color: var(--main-blue-dark);
`

const SubTitle = styled(Typography)`
  color: var(--main-blue-dark)
`

export default Multimedia
