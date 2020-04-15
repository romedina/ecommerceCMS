import React, { useEffect } from 'react'
import LayoutAdmin from '../../components/layout_admin'
import { fetchItems, deleteItems, disable, enable } from '../../../flux/items'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Skeleton from './skeleton'
import PageTitle from '../../components/page_title'
import Article from '../../components/Article'
import styled from 'styled-components'
import { setAlert } from '../../../flux/alert'
import Admin from '../../hoc/admin'

const MyArticles = () => {
  const { loading, items } = useSelector(state => state.items)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchItems())
    }
  }, [dispatch, items])

  const handleEdit = (data) => {
    history.push('/create-item', JSON.parse(JSON.stringify(data)))
  }

  const handleDelete = (data) => {
    dispatch(setAlert({
      title: 'Seguro que quieres borrar este articulo',
      message: 'Una vez realizada esta accion no podras recurar la informacion',
      action: deleteItems(data.id),
      textAction: 'Eliminar'
    }))
  }

  const handleStatus = (data) => {
    console.log(data)
    if (data.isActive) {
      dispatch(setAlert({
        title: '¿Seguro quieres desabilitar este articulo?',
        message: 'Los articulos desabilitados no seran visibles para tus clientes.',
        action: disable(data.id),
        textAction: 'Desabilitar'
      }))
    } else {
      dispatch(enable(data.id))
    }
  }

  return (
    <LayoutAdmin>
      <PageTitle>Mis articulos</PageTitle>
      {loading && (
        <Skeleton />
      )}
      {!loading && (
        <Content>
          {items.map(item => (
            <Article
              key={item.id}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleStatus={handleStatus}
              {...item}
            />
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

export default Admin(MyArticles)
