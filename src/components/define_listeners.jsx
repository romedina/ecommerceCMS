import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { onCounterCHange } from '../modules/message'
import { onCounterChange } from '../modules/orders'
import { setCounter as setCounterOrder } from '../flux/orders'
import { setCounter } from '../flux/messages'

const DefineListeners = props => {
  const dispatch = useDispatch()
  // subscribe on counter messages
  useEffect(any => {
    return onCounterCHange(counter => {
      dispatch(setCounter(counter))
    })
  }, [])

  // subscribe on counter messages
  useEffect(any => {
    return onCounterChange(counter => {
      dispatch(setCounterOrder(counter))
    })
  }, [])

  return props.children
}

export default DefineListeners
