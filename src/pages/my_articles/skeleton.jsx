import React from 'react'
import { Skeleton } from '@material-ui/lab'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import Responsive from '../../components/responsive'

const SkeletonGroup = () => {
  return (
    <Grid container justify='center' alignItems='center' spacing={5}>
      <Grid item xs={12} sm={6} md={4}>
        <SkeletonStyled variant='rect' height={200} />
        <SkeletonStyled variant='rect' height={20} />
        <SkeletonStyled variant='rect' height={20} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SkeletonStyled variant='rect' height={200} />
        <SkeletonStyled variant='rect' height={20} />
        <SkeletonStyled variant='rect' height={20} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SkeletonStyled variant='rect' height={200} />
        <SkeletonStyled variant='rect' height={20} />
        <SkeletonStyled variant='rect' height={20} />
      </Grid>
      <Responsive rule='min-width:600px'>
        <Grid item xs={12} sm={6} md={4}>
          <SkeletonStyled variant='rect' height={200} />
          <SkeletonStyled variant='rect' height={20} />
          <SkeletonStyled variant='rect' height={20} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkeletonStyled variant='rect' height={200} />
          <SkeletonStyled variant='rect' height={20} />
          <SkeletonStyled variant='rect' height={20} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkeletonStyled variant='rect' height={200} />
          <SkeletonStyled variant='rect' height={20} />
          <SkeletonStyled variant='rect' height={20} />
        </Grid>
      </Responsive>
    </Grid>
  )
}

const SkeletonStyled = styled(Skeleton)`
  margin-bottom: 10px;
  border-radius: 8px;
`

export default SkeletonGroup
