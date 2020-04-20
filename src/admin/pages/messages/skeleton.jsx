import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { Skeleton as SkeletonBase } from '@material-ui/lab'

const SkeletonComponent = props => {
  return (
    <GridContainer container justify='center' alignItems='center' spacing={5}>
      <Grid item xs={12} md={6}>
        <Skeleton variant='rect' height={60} />
        <Skeleton variant='rect' height={20} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Skeleton variant='rect' height={60} />
        <Skeleton variant='rect' height={20} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Skeleton variant='rect' height={60} />
        <Skeleton variant='rect' height={20} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Skeleton variant='rect' height={60} />
        <Skeleton variant='rect' height={20} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Skeleton variant='rect' height={60} />
        <Skeleton variant='rect' height={20} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Skeleton variant='rect' height={60} />
        <Skeleton variant='rect' height={20} />
      </Grid>
    </GridContainer>
  )
}

const Skeleton = styled(SkeletonBase)`
  border-radius: 10px;
  margin-bottom: 10px;
`
const GridContainer = styled(Grid)`
  max-width: 800px;
  width: 100%;
  margin: auto;
`

export default SkeletonComponent
