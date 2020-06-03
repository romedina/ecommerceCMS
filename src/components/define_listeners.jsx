import { useEffect } from 'react'
import { dispatch } from '../store'
import { onCounterCHange } from '../modules/message'
import { onCounterChange } from '../modules/orders'
import { setCounter as setCounterOrder } from '../flux/orders'
import { setCounter } from '../flux/messages'
import { useSelector } from 'react-redux'
import { getConfig } from '../flux/config'

const DefineListeners = props => {
  const sessionId = useSelector(state => state.session.id)

  // getconfig
  useEffect(() => {
    if (sessionId) {
      dispatch(getConfig())
    }
  }, [sessionId])

  // subscribe on counter messages
  useEffect(any => {
    if (sessionId) {
      return onCounterCHange(counter => {
        dispatch(setCounter(counter))
      })
    }
  }, [sessionId])

  // subscribe on counter orders
  useEffect(any => {
    if (sessionId) {
      return onCounterChange(counter => {
        dispatch(setCounterOrder(counter))
      })
    }
  }, [sessionId])

  return props.children
}

export default DefineListeners
