import React, { useEffect } from 'react'
import LayoutUser from '../../components/layout_user'
import FooterSecondary from '../../components/footer_secondary'
import Cover from './cover'
import Container from '../../components/container'
import PageTitleUser from '../../components/page_title_user'
import ListItem from '../../components/list_items'
import ListItemsSkeleton from '../../components/list_items_skeleton'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../../../flux/items'

const Home = () => {
  const dispatch = useDispatch()
  const { loading, items } = useSelector(state => state.items)

  // fetch items if not exist
  useEffect(() => {
    if (items.length === 0) dispatch(fetchItems())
  }, [items, dispatch])

  return (
    <LayoutUser>
      <Cover />
      <Container>
        <PageTitleUser>Productos</PageTitleUser>
        {loading && (<ListItemsSkeleton />)}
        {!loading && (
          <ListItem
            loading={loading}
            items={items}
          />
        )}
      </Container>
      <FooterSecondary />
    </LayoutUser>
  )
}

export default Home
