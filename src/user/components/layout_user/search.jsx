import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import { dispatch } from '../../../store'
import { setActive, setQuery } from '../../../flux/search'
import { useLocation, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Search = props => {
  const query = useSelector(state => state.search.query)
  const onBlur = event => dispatch(setActive(false))
  const location = useLocation()
  const history = useHistory()

  const onQueryChange = event => {
    if (location.pathname !== '/search') history.push('/search')
    dispatch(setQuery(event.target.value))
  }

  return (
    <SearchContent>
      <Input
        type='text'
        autoFocus
        onBlur={onBlur}
        onChange={onQueryChange} value={query}
      />
      <Button>
        <SearchIcon />
      </Button>
    </SearchContent>
  )
}

const SearchContent = styled.div`
  background: #fff;
  display: flex;
  width: 100%;;
  max-width: 600px;
  height: 30px;
`
const Input = styled.input`
  width: 100%;
  border: 1px solid #cdcdcd;
  outline: 0px;
  border-radius: 5px 0px 0px 5px;
  padding: 0px 10px;
`
const Button = styled.div`
  background: #008FFD;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  color: #fff;
  border-radius: 0px 5px 5px 0px;
  cursor: pointer;
`

export default Search
