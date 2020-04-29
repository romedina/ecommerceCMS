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
import lastPosition from '../../../helpers/last_position'
import { CircularProgress } from '@material-ui/core'
import styled from 'styled-components'
import { toArray } from '../../../helpers/transformer'

const Home = () => {
  const dispatch = useDispatch()
  var { loading, items, limit, isfinally } = useSelector(state => state.items)
  items = toArray(items)

  const itemsFiltered = items.filter(item => item.isActive)

  // fetch items if not exist
  useEffect(() => {
    if ((itemsFiltered.length < limit) && !isfinally) {
      console.log(itemsFiltered)
      console.log(itemsFiltered.length)
      dispatch(fetchItems())
    }
  }, [itemsFiltered.length, isfinally])

  // pagination with scrolling
  useEffect(event => {
    const handleScroll = event => {
      const isInLastPosition = lastPosition(500)
      if (!loading && isInLastPosition && !isfinally) {
        dispatch(fetchItems())
      }
    }
    window.addEventListener('scroll', handleScroll)
    return event => window.removeEventListener('scroll', handleScroll)
  }, [loading, isfinally, dispatch])

  return (
    <LayoutUser>
      <Cover />
      <Container>
        <PageTitleUser>Productos</PageTitleUser>
        {loading && itemsFiltered.length === 0 && (<ListItemsSkeleton />)}
        {itemsFiltered.length > 0 && (
          <ListItem
            loading={loading}
            items={itemsFiltered}
          />
        )}
        {itemsFiltered.length > 0 && loading && (
          <LoaderContent>
            <CircularProgress />
          </LoaderContent>
        )}
      </Container>
      <FooterSecondary />
    </LayoutUser>
  )
}

const LoaderContent = styled.div`
  padding: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Home
