import React from 'react'
import { Skeleton as SkeletonBase } from '@material-ui/lab'
import { Grid, Box } from '@material-ui/core'
import styled from 'styled-components'

const Skeleton = props => {
  return (
    <Box p={3}>
      <Grid container justify='center' alignItems='stretch' spacing={5}>
        <Grid item xs={12} md={4}>
          <SkeletonStyled variant='rect' height={200} />
          <Grid container justify='center' spacing={3}>
            <Grid item xs={3}>
              <SkeletonStyled height={60} />
            </Grid>
            <Grid item xs={3}>
              <SkeletonStyled height={60} />
            </Grid>
            <Grid item xs={3}>
              <SkeletonStyled height={60} />
            </Grid>
            <Grid item xs={3}>
              <SkeletonStyled height={60} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <SkeletonStyled variant='rect' height={30} />
          <SkeletonStyled variant='rect' height={20} />
          <SkeletonStyled variant='rect' height={20} />
          <SkeletonStyled variant='rect' height={20} />
          <SkeletonStyled variant='rect' height={20} />
          <SkeletonStyled variant='rect' height={20} />
        </Grid>
      </Grid>
    </Box>
  )
}

const SkeletonStyled = styled(SkeletonBase)`
  border-radius: 7px;
  margin-bottom: 20px;
`

export default Skeleton
