import React from 'react'
import { Content, ActionsContent, Title, ButtonContent, Button } from './styled'
import Layout from '../../components/layout_user'
import Container from '../../components/container'
import Summary from './components/summary'
import Shipping from './components/shiping'
import MethodPay from './components/method_pay'
import InfoCard from './components/credit_card_form'
import Confirm from './components/confirm'

import { number, string, arrayOf, func } from 'prop-types'

const View = props => {
  return (
    <Layout>
      <Container>
        <Content>
          <ActionsContent>
            <Title>{props.steps[props.currentStep]}</Title>
            {props.currentStep === 0 && (
              <Shipping {...props} />
            )}
            {props.currentStep === 1 && (
              <MethodPay {...props} />
            )}
            {props.currentStep === 2 && (
              <InfoCard {...props} />
            )}
            {props.currentStep === 3 && (
              <Confirm {...props} />
            )}
            {props.currentStep < (props.steps.length - 1) && (
              <ButtonContent>
                {props.currentStep === 0 && (
                  <Button to='/my-cart'>Volver al carrito</Button>
                )}
                {props.currentStep > 0 && (
                  <Button onClick={props.goToStep(props.currentStep - 1)}>Volver</Button>
                )}
                <Button variant='contained' onClick={props.handleNext}>Continuar</Button>
              </ButtonContent>
            )}
          </ActionsContent>
          <Summary {...props} />
        </Content>
      </Container>
    </Layout>
  )
}

View.propTypes = {
  currentStep: number,
  steps: arrayOf(string),
  goToStep: func,
  handleNext: func
}

export default View
