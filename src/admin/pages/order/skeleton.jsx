import React from 'react'
import styled from 'styled-components'
import { Skeleton } from '@material-ui/lab'

const SkeletonComponent = props => {
  return (
    <Content>
      <TextContent>
        <SkeletonStyled variant='rect' height={25} />
        <SkeletonStyled variant='rect' height={25} />
        <SkeletonStyled variant='rect' height={25} />
      </TextContent>
      <SkeletonStyled variant='rect' height={50} />
      <SkeletonStyled variant='rect' height={50} />
      <SkeletonStyled variant='rect' height={50} />
      <SkeletonStyled variant='rect' height={50} />
      <SkeletonStyled variant='rect' height={50} />
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  width: 90%;
  max-width: 800px;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 50px;
`
const TextContent = styled.div`
  width: 400px;
  max-width: 100%;
  margin-bottom: 30px;
`
const SkeletonStyled = styled(Skeleton)`
  margin-bottom: 10px;
  border-radius: 5px;
  width: 100%;
`
export default SkeletonComponent
