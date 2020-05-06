import { ButtonBase } from '@material-ui/core'
import styled from 'styled-components'

const Button = styled(ButtonBase)`
  font-size: 1.2em;
  padding: 10px 0px;
  border-radius: 5px;
  color: ${props => props.variant === 'contained' ? '#fff' : 'initial'};
  border: ${props => props.variant === 'contained' ? '' : '1px solid var(--user-gray-light)'};
  background: ${props => props.variant === 'contained' ? 'var(--user-black)' : '#fff'};
`

export default Button
