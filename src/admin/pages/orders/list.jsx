import React from 'react'
import styled from 'styled-components'
import { TableContainer, TableHead, TableCell, Table, TableRow, TableBody, Paper } from '@material-ui/core'
import { array } from 'prop-types'
import { toString } from '../../../helpers/date'
import { statusPayEs } from '../../../constants'
import { Link } from 'react-router-dom'

const OrderItem = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Fecha</TableCell>
            <TableCell align='left'>Id</TableCell>
            <TableCell align='left'>Correo</TableCell>
            <TableCell align='left'>Estado</TableCell>
            <TableCell align='left'> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.items.map((row) => (
            <TableRowStyled key={row.id} noview={!row.isViewed}>
              <TableCell align='left'>{toString(row.date.toDate())}</TableCell>
              <TableCell align='left'>{row.id}</TableCell>
              <TableCell align='left'>{row.user.email}</TableCell>
              <TableCellStatus status={row.status} align='left'>{statusPayEs[row.status]}</TableCellStatus>
              <TableCell align='left'><LinkStyled to={`/order/${row.period}/${row.id}`}>Ver pedido</LinkStyled></TableCell>
            </TableRowStyled>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const caclsulateColor = props => {
  if (props.status === 'payed') return 'green'
  if (props.status === 'pending') return 'orange'
  if (props.status === 'cancelled') return 'red'
  if (props.status === 'sent') return '#57b5fe'
}

OrderItem.propTypes = {
  items: array
}

const TableCellStatus = styled(TableCell)`
  font-weight: bold;
  color: ${caclsulateColor};
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
  background: var(--main-blue);
  padding: 5px 10px;
`

const TableRowStyled = styled(TableRow)`
  background: ${props => !props.noview ? 'none' : '#f0f8ff'};
`

export default OrderItem
