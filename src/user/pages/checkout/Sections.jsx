import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import Summary from './summary'

const Sections = props => {
  return (
    <Flex>
      <section>{props.children}</section>
      <section>
        <Summary {...props} />
      </section>
    </Flex>
  )
}

Sections.propTypes = {
  children: propTypes.oneOfType([propTypes.array, propTypes.object])
}

const Flex = styled.div`
  max-width: 1000px;
  margin: auto;
  display: flex;
  justify-content: center;
  & section{
    width: 50%;
    margin-right: 30px;
    &:last-of-type {
      margin-right: 0px;
    }
  }
  @media screen and (max-width:700px){
    flex-wrap: wrap;
    & section {
      width: 100%;
      margin: auto!important;
      max-width: 500px;
      margin-bottom: 20px!important;
    }
  }
`

export default Sections
