import React from 'react'
import styled from 'styled-components'
import ContainerBase from './container'
import { Grid } from '@material-ui/core'
import { CreditCard, LocalShipping, HttpsOutlined } from '@material-ui/icons'

const FooterSecondary = () => {
  return (
    <FullWidth>
      <ContainerBase>
        <ContainerSections container justify='center' alignItems='stretch' spacing={1}>
          <Section item xs={4}>
            <IconContainer><HttpsOutlined /></IconContainer>
            <Describe> Compra 100% segura</Describe>
          </Section>
          <Section item xs={4}>
            <IconContainer><CreditCard /></IconContainer>
            <Describe>Pagos con targeta o paypal</Describe>
          </Section>
          <Section item xs={4}>
            <IconContainer><LocalShipping /></IconContainer>
            <Describe>Envios a todo Mexico</Describe>
          </Section>
        </ContainerSections>
      </ContainerBase>
    </FullWidth>
  )
}
const IconContainer = styled('div')`
  background: var(--user-primary);
  width: 100px;
  height: 100px;
  margin: auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  & svg {
    font-size: 3em;
  }
  @media screen and (max-width:600px){
    width: 95%;
  }
`
const Section = styled(Grid)`
  border-right: 1px dashed var(--user-gray);
  text-align: center;
  font-weight: bold;
  font-size: 1.3em;
  color: gray;
  &:last-of-type {
    border-right: none;
  }
  @media screen and (max-width:600px){
    font-size: 1em;
    border-right: none;
  }
`
const Describe = styled('p')`
  width: 80%;
  margin: 20px auto;
  @media screen and (max-width:600px){
    width: 100%
  }
`
const FullWidth = styled('div')`
  background: var(--user-gray-light);
`
const ContainerSections = styled(Grid)`
  padding: 40px 0px;
  @media screen and (max-width:600px){
    padding: 0px 0px;
  }
`

export default FooterSecondary
