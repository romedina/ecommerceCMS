import React, { useState } from 'react'
import { AppBar, IconButton, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { Toolbar } from './styled'
import { string } from 'prop-types'
import MenuMobile from '../menu_mobile'

const HeaderMobile = props => {
  const [isMenuActive, setMenuActive] = useState(false)

  const handleOpenMenu = props => setMenuActive(true)

  const handleClose = props => setMenuActive(false)

  return (
    <>
      <MenuMobile
        isMenuActive={isMenuActive}
        handleClose={handleClose}
        handleOpenMenu={handleOpenMenu}
      />
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='h6'>
            {props.title}
          </Typography>
          <IconButton edge='start' aria-label='menu' onClick={handleOpenMenu}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

HeaderMobile.propTypes = {
  title: string
}

export default HeaderMobile
