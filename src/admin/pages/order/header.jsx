import React from 'react'
import styled from 'styled-components'
import { toString } from '../../../helpers/date'
import ButtonBase from '../../../components/link'
import { string, object } from 'prop-types'
import { Divider } from '@material-ui/core'

const Header = props => {
  return (
    <>
      <Content>
        <Data>
          <Item>
            {props.user.email}
          </Item>
          <Item>
            <div>Id de orden:</div>
            <span>{props.id}</span>
          </Item>
          <Item>
            {toString(props.date.toDate())}
          </Item>
        </Data>
        <div>
          <span>Cambiar status:</span>
          {props.status === 'pending' && (<StatusPending>Pendiente de pago</StatusPending>)}
          {props.status === 'payed' && (<StatusPayed>Pagado</StatusPayed>)}
        </div>
      </Content>
      <Divider />
    </>
  )
}

Header.propTypes = {
  status: string,
  date: object,
  id: string,
  user: object
}

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  flex-wrap: wrap;
`

const Data = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 1.1em;
  color: var(--main-blue-dark);
  font-weight: bold;
  flex-wrap: wrap;
`
const Item = styled.div`
  margin-right: 20px;
  display: flex;
  flex-wrap: wrap;
  & div {
    color: gray;
    margin-right: 10px;
  }
  @media screen and (max-width:400px){
    flex-direction: column;
  }
`
const StatusPending = styled(ButtonBase)`
  min-width: 150px;
  background: orange;
  color: white;
  padding: 9px 0px;
  border-radius: 5px;
  margin-left: 10px;
`
const StatusPayed = styled(StatusPending)`
  background: green;
`
export default Header
