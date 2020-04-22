import React from 'react'
import styled from 'styled-components'
import { Grid, Box } from '@material-ui/core'
import { Skeleton as SkeletonBase } from '@material-ui/lab'

const Skeleton = props => {
  return (
    <Box p={{ xs: 2, md: 5 }}>
      <Grid container justify='center' alignItems='center' spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <SkeletonStyled variant='rect' height={150} />
          <SkeletonStyled variant='rect' height={30} />
          <SkeletonStyled variant='rect' height={30} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkeletonStyled variant='rect' height={150} />
          <SkeletonStyled variant='rect' height={30} />
          <SkeletonStyled variant='rect' height={30} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkeletonStyled variant='rect' height={150} />
          <SkeletonStyled variant='rect' height={30} />
          <SkeletonStyled variant='rect' height={30} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkeletonStyled variant='rect' height={150} />
          <SkeletonStyled variant='rect' height={30} />
          <SkeletonStyled variant='rect' height={30} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkeletonStyled variant='rect' height={150} />
          <SkeletonStyled variant='rect' height={30} />
          <SkeletonStyled variant='rect' height={30} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkeletonStyled variant='rect' height={150} />
          <SkeletonStyled variant='rect' height={30} />
          <SkeletonStyled variant='rect' height={30} />
        </Grid>
      </Grid>
    </Box>
  )
}

const SkeletonStyled = styled(SkeletonBase)`
  border-radius: 5px;
  margin-bottom: 10px;
`
export default Skeleton
