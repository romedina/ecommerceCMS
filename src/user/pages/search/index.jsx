import React, { useEffect } from 'react'
import Responsive from '../../../components/responsive'
import Layout from '../../components/layout_user'
import SearchBar from '../../components/layout_user/search'
import Skeleton from '../../components/list_items_skeleton'
import { SearchContent } from './styled'
import { useSelector } from 'react-redux'
import { fetchAll } from '../../../flux/items'
import { dispatch } from '../../../store'
import { toArray } from '../../../helpers/transformer'
import Container from '../../components/container'
import ListItems from '../../components/list_items'
import NotFounf from './notFound'

const Search = props => {
  var { isfinally, items, loading } = useSelector(state => state.items)
  const query = useSelector(state => state.search.query)
  items = toArray(items).filter(item => item.title.toLowerCase().includes(query.toLowerCase()))

  // fetch all items
  useEffect(() => {
    if (!isfinally && !!query) {
      console.log('fetching')
      dispatch(fetchAll())
    }
  }, [!!query, isfinally])

  console.log(items)

  return (
    <Layout>
      <Container>
        <Responsive rule='max-width:699px'>
          <SearchContent>
            <SearchBar />
          </SearchContent>
        </Responsive>
        {loading && !items.length && !!query && (
          <Skeleton />
        )}
        {!!items.length && !!query && (
          <ListItems items={items} />
        )}
        {!items.length && !!query && !loading && (
          <NotFounf message='No encontramos resultados de busqueda' />
        )}
        {!query && (
          <NotFounf message='Encuentra tu articulo favorito' />
        )}
      </Container>
    </Layout>
  )
}

export default Search
