import React, { useEffect } from 'react'
import LayoutAdmin from '../../components/layout_admin'
import { fetchItems } from '../../flux/items'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Skeleton from './skeleton'
import PageTitle from '../../components/page_title'
import Article from '../../components/Article'
import styled from 'styled-components'

const MyArticles = (props) => {
  const { loading, items } = useSelector(state => state.items)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchItems())
    }
  }, [dispatch, items])

  return (
    <LayoutAdmin>
      <PageTitle>Mis articulos</PageTitle>
      {loading && (
        <Skeleton />
      )}
      {!loading && (
        <Content>
          {items.map(item => (
            <Article key={item.id} {...item} />
          ))}
        </Content>
      )}
    </LayoutAdmin>
  )
}

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: stretch;
`

export default MyArticles
