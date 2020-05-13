import React from 'react'
import { Button, TitleCenter, Row, Content, Logo, Amount, PriceBox, Title, Text, PriceShadow, Body, InstructionsContent, Instructions } from './styled'
import LogoSRC from '../../../../../assets/logo.png'
import { Box } from '@material-ui/core'
import { companyName, payDayLimitForBank } from '../../../../../config'
import currency from '../../../../../helpers/currency'
import { object, number, string } from 'prop-types'
import { toString, addDays } from '../../../../../helpers/date'

const InstructionsSpei = props => {
  var payDayLimit = toString(addDays(props.creation_date, payDayLimitForBank))

  return (
    <>
      <Content>
        <Logo src={LogoSRC} />
        <Body>
          <Amount>
            <Title>Fecha limite de pago</Title>
            <Text>{payDayLimit}</Text>
            <Title>Beneficiario</Title>
            <Text>{companyName}</Text>
          </Amount>
          <PriceBox>
            <TitleCenter>Transferencia Interbancaria (SPEI)</TitleCenter>
            <br />
            <PriceShadow>
              $ {currency.formatMoney(props.amount)} MXN
            </PriceShadow>
          </PriceBox>
        </Body>
        <Body>
          <Title>Pasos para realizar el pago</Title>
          <InstructionsContent>
            <Instructions>
              <TitleCenter>Desde BBVA</TitleCenter>
              <ol>
                <li>Dentro del menú de "Pagar" seleccione la opción "De Servicios" e ingrese al siguiente "Número de convenio CIE":</li>
                <Row><span>Número de Convenio CIE:</span> {props.payment_method.agreement}</Row>
                <li>Ingrese los datos de registro para concluir con la operación.</li>
                <Row><span>Referencia:</span> {props.payment_method.name}</Row>
                <Row><span>Importe:</span> $ {currency.formatMoney(props.amount)} MXN</Row>
                <Row><span>Concepto:</span> Checkout</Row>
              </ol>
            </Instructions>
            <Instructions>
              <TitleCenter>Desde cualquier otro banco</TitleCenter>
              <ol>
                <li>
                  Ingresa a la selección de transferencia y pagos o pagos a otros bancos y proporciona los datos de la transferencia:
                </li>
                <Row><span>Beneficiario:</span> {companyName}</Row>
                <Row><span>Banco Destino:</span>BBVA Bancomer</Row>
                <Row><span>CLABE:</span>{props.payment_method.clabe}</Row>
                <Row><span>Concepto de Pago:</span> {props.payment_method.name}</Row>
                <Row><span>Referencia:</span> {props.payment_method.agreement}</Row>
              </ol>
            </Instructions>
          </InstructionsContent>
        </Body>
        <Box pt={4} pb={4}>
          <TitleCenter>¿Quieres conocer los bancos disponibles para nuestro servicio SPEI?</TitleCenter>
          <TitleCenter>Visita: www.openpay.mx/bancos.html</TitleCenter>
        </Box>
      </Content>
      <Button variant='contained' onClick={e => window.print()}>Imprimir instrucciones</Button>
    </>
  )
}

InstructionsSpei.propTypes = {
  payment_method: object,
  amount: number,
  creation_date: string
}

export default InstructionsSpei
