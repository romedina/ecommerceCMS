import React from 'react'
import { Skeleton as SkeletonBase } from '@material-ui/lab'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

const ListItemsSheleton = () => {
  return (
    <Grid container justify='center' alignItems='center' spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Skeleton variant='rect' height={200} />
        <Skeleton variant='rect' height={20} />
        <Skeleton variant='rect' height={20} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Skeleton variant='rect' height={200} />
        <Skeleton variant='rect' height={20} />
        <Skeleton variant='rect' height={20} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Skeleton variant='rect' height={200} />
        <Skeleton variant='rect' height={20} />
        <Skeleton variant='rect' height={20} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Skeleton variant='rect' height={200} />
        <Skeleton variant='rect' height={20} />
        <Skeleton variant='rect' height={20} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Skeleton variant='rect' height={200} />
        <Skeleton variant='rect' height={20} />
        <Skeleton variant='rect' height={20} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Skeleton variant='rect' height={200} />
        <Skeleton variant='rect' height={20} />
        <Skeleton variant='rect' height={20} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Skeleton variant='rect' height={200} />
        <Skeleton variant='rect' height={20} />
        <Skeleton variant='rect' height={20} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Skeleton variant='rect' height={200} />
        <Skeleton variant='rect' height={20} />
        <Skeleton variant='rect' height={20} />
      </Grid>
    </Grid>
  )
}

const Skeleton = styled(SkeletonBase)`
  margin-bottom: 10px;
  border-radius: 8px;
`

export default ListItemsSheleton
