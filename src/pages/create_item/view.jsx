import React from 'react'
import styled from 'styled-components'
import Container from '../../components/container'
import { Paper , Box, Grid } from '@material-ui/core'
import Stepper from './steperr'

const View = (props) => {
  return (
    <Container>
      <Grid container justify="center" alignItems='center'>
        <Grid item xs={12} md={10}>
          <Paper>
            <Stepper {...props}/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}


export default View