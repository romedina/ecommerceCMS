import React from 'react'
import styled from 'styled-components'
import { func, string } from 'prop-types'

const Search = props => {
  return (
    <SearchContent>
      <Input
        placeholder='Buscar'
        type='text'
        autoFocus
        onChange={props.onQueryChange} value={props.query}
      />
    </SearchContent>
  )
}

Search.propTypes = {
  onQueryChange: func,
  query: string
}

const SearchContent = styled.div`
  background: #fff;
  display: flex;
  width: 100%;;
  max-width: 400px;
  height: 30px;
`
const Input = styled.input`
  width: 100%;
  border: 1px solid var(--main-blue);
  outline: 0px;
  border-radius: 5px;
  padding: 0px 10px;
`

export default Search
