import React from 'react'
import styled from 'styled-components'
import Item from './item'
import propTypes from 'prop-types'

const ListItems = (props) => {
  return (
    <FlexContent>
      {props.items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </FlexContent>
  )
}
ListItems.propTypes = {
  items: propTypes.array
}

const FlexContent = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
`

export default ListItems
