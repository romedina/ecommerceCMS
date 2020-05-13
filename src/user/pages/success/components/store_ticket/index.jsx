import React from 'react'
import { Button, PaynetStores, Content, Logo, Header, Service, Body, Title, Text, Barcode, BoxPrice, Instructions, InstructionsContent } from './styled'
import Logosrc from '../../../../../assets/logo.png'
import paynetStoresSrc from '../../../../../assets/paynetStores.gif'
import paynetLogo from '../../../../../assets/paynet.png'
import currency from '../../../../../helpers/currency'
import { string, object, number } from 'prop-types'

const StoreTickect = props => {
  const onPrint = event => {
    window.print()
  }

  return (
    <>
      <Content>
        <Header>
          <Logo src={Logosrc} />
          <Service>
            Servicio a pagar:
            <img src={paynetLogo} />
          </Service>
        </Header>
        <Body>
          <Title>Orden:</Title>
          <Text>{props.order_id}</Text>
        </Body>
        <Body>
          <Title>Fecha limite de pago:</Title>
          <Text>{props.creation_date}</Text>
        </Body>
        <Body>
          <Title>Codigo de barras:</Title>
          <Barcode src={props.payment_method.barcode_url} />
          <Text>{props.payment_method.reference}</Text> <br />
          <Text>En caso de no poder leer el código de barras, escribir el código tal como se muestra.</Text>
        </Body>
        <Body>
          <BoxPrice>
            Total a pagar <br />
            {currency.formatMoney(props.amount)} MXN
          </BoxPrice>
        </Body>
        <InstructionsContent>
          <Instructions>
            <h3>Como realizar el pago</h3>
            <ol>
              <li>Acude a cualquier tienda afiliada</li>
              <li>Entrega al cajero el código de barras y menciona que realizarás un pago de servicio Paynet</li>
              <li>Realizar el pago en efectivo por $9,000.00 MXN </li>
              <li>Conserva el ticket para cualquier aclaración</li>
            </ol>
          </Instructions>
          <Instructions>
            <h3>Instrucciones para el cajero</h3>
            <ol>
              <li>Ingresar al menú de Pago de Servicios</li>
              <li>Seleccionar Paynet</li>
              <li>Escanear el código de barras o ingresar el núm. de referencia</li>
              <li>Ingresa la cantidad total a pagar</li>
              <li>Cobrar al cliente el monto total más la comisión</li>
              <li>Confirmar la transacción y entregar el ticket al cliente</li>
            </ol>
          </Instructions>
        </InstructionsContent>
        <PaynetStores src={paynetStoresSrc} />
      </Content>
      <Button onClick={onPrint} variant='contained'>Imprimir ticket</Button>
    </>
  )
}

StoreTickect.propTypes = {
  order_id: string,
  creation_date: string,
  payment_method: object,
  amount: number

}

export default StoreTickect
