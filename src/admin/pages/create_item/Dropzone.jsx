import React from 'react'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'
import { func, bool } from 'prop-types'

function DropZone (props) {
  const onDrop = (acceptedFiles, rejectedFiles) => {
    const files = acceptedFiles.map(file => {
      file.preview = URL.createObjectURL(file)
      return file
    })
    props.handleDrop(files)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/jpeg, image/png, image/jpg',
    onDrop,
    multiple: props.multiple
  })

  return (
    <Drop {...getRootProps()} isDragActive={isDragActive}>
      <input {...getInputProps()} />
      {!isDragActive && (
        <>
          <div>Arrastra los archivos</div>
          <div> o </div>
          <Select>Cargar fotos desde mi computadora</Select>
        </>
      )}
      {isDragActive && (
        <div>Suelta los archivos</div>
      )}
    </Drop>
  )
}

DropZone.propTypes = {
  handleDrop: func,
  multiple: bool
}

const Drop = styled('div')`
  border: ${props => props.isDragActive ? '1 px solid var(--main-blue)' : '1px dashed var(--main-blue-dark)'};
  width: 100%;
  max-width: 600px;
  background: var(--main-blue-light);
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: auto;
  outline: none;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  color: var(--main-blue-dark);
  & div {
    width: 100%
  }
`
const Select = styled('span')`
  border: 1px solid var(--main-blue-dark);
  padding: 1px 20px;
  border-radius: 5px;
  display: block;
`
export default DropZone
