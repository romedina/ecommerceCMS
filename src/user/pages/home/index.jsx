import React from 'react'
import LayoutUser from '../../components/layout_user'
import FooterSecondary from '../../components/footer_secondary'
import Cover from './cover'
import Container from '../../components/container'
import PageTitleUser from '../../components/page_title_user'
import ListItem from '../../components/list_items'

const Home = () => {
  return (
    <LayoutUser>
      <Cover />
      <Container>
        <PageTitleUser>Productos</PageTitleUser>
        <ListItem />
      </Container>
      <FooterSecondary />
    </LayoutUser>
  )
}

export default Home
