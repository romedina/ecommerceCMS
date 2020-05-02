import React from 'react'
import styled from 'styled-components'
import Delete from '@material-ui/icons/Delete'
import { func, array } from 'prop-types'

const Previews = (props) => {
  return (
    <Container>
      {props.pictures.map((picture, index) =>
        <ItemContent key={index}>
          <DeleteIcon onClick={() => props.handleDelete(picture)} />
          <Picture
            src={typeof picture === 'string' ? picture : picture.preview}
          />
        </ItemContent>
      )}
    </Container>
  )
}

Previews.propTypes = {
  handleDelete: func,
  pictures: array
}

export default Previews

const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
`
const ItemContent = styled('div')`
  display: block;
  padding: 10px;
  box-sizing: border-box;
  width: 20%;
  position: relative;
  @media screen and (max-width:800px) {
    width: 25%
  }
  @media screen and (max-width:500px) {
    width: 33%
  }
`
const Picture = styled('img')`
  width: 100%;
  height: 150px;
  border-radius: 5px;
  display: block;
  object-fit: cover;
  box-sizing: border-box;
  overflow: hidden;
  @media screen and (max-width:1100px) {
    height: 100px
  }
`
const DeleteIcon = styled(Delete)`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #000;
  cursor: pointer;
`
