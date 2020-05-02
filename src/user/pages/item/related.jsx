import React, { useEffect } from 'react'
import styled from 'styled-components'
import PageTitleUser from '../../components/page_title_user'
import ListItems from '../../components/list_items'
import { useSelector } from 'react-redux'
import { toArray } from '../../../helpers/transformer'
import { dispatch } from '../../../store'
import { fetchAll } from '../../../flux/items'
import { useParams } from 'react-router-dom'
import suffle from '../../../helpers/array_suffle'

const Related = props => {
  var { items, isfinally } = useSelector(state => state.items)
  const { id } = useParams()
  items = suffle(toArray(items).filter(item => item.id !== id))
  items = items.slice(0, 4)

  // fetch data
  useEffect(() => {
    if (items.length < 5 && !isfinally) {
      console.log('fetching data of inside related...')
      dispatch(fetchAll())
    }
  }, [])

  return (
    <Content>
      <PageTitleUser>Productos que te podrían gustar</PageTitleUser>
      <ListItemsStyled
        items={items}
      />
    </Content>
  )
}

const ListItemsStyled = styled(ListItems)`
  margin-top: 30px
`

const Content = styled.div`
  margin-top: 50px;
`

export default Related
