import React from 'react'
import styled from 'styled-components'
import Select from '../../../components/select'
import propTypes from 'prop-types'

const months = [
  { Enero: 1 },
  { Febrero: 2 },
  { Marzo: 3 },
  { Abril: 4 },
  { Mayo: 5 },
  { Junio: 6 },
  { Julio: 7 },
  { Agosto: 8 },
  { Septiembre: 9 },
  { Octubre: 10 },
  { Noviembre: 11 },
  { Diciembre: 12 }
]

const years = [
  { 2020: 2020 },
  { 2021: 2021 },
  { 2022: 2022 },
  { 2023: 2023 },
  { 2024: 2024 },
  { 2025: 2025 },
  { 2026: 2026 },
  { 2027: 2027 },
  { 2029: 2029 },
  { 2029: 2029 }
]

const PeriodSelector = props => {
  const handleMonthCHange = event => {
    const year = props.currentPeriod.split('-')[1]
    const newPeriod = `${event.target.value}-${year}`
    props.setCurrentPeriod(newPeriod)
  }

  const handleYearChange = event => {
    const month = props.currentPeriod.split('-')[0]
    const newPeriod = `${month}-${event.target.value}`
    props.setCurrentPeriod(newPeriod)
  }

  return (
    <Content variant='outlined'>
      <SelectStyled value={props.currentPeriod.split('-')[0]} onChange={handleMonthCHange} options={months} />
      <SelectStyled value={props.currentPeriod.split('-')[1]} onChange={handleYearChange} options={years} />
    </Content>
  )
}

PeriodSelector.propTypes = {
  currentPeriod: propTypes.string,
  setCurrentPeriod: propTypes.func
}

const Content = styled.div`
  display: flex;
  margin-bottom: 15px;
`
const SelectStyled = styled(Select)`
  margin-right: 20px;
  min-width: 150px;
  & .MuiSelect-outlined.MuiSelect-outlined {
    padding: 5px;
    background: #008ffd;
    color: #fff;
  }
  &:last-of-type {
    margin-right: 0px;
  }
  & svg {
    color: #fff;
  }
  & .MuiOutlinedInput-notchedOutline {
    border: none; 
  }
`

export default PeriodSelector
