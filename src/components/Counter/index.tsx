import { CounterContext } from '@/context[draft]/CounterContext'
import { useContext } from 'react'
import { Button } from '..';
import { useDispatch, useSelector } from 'react-redux'
type Props = {}

const Counter = () => {

  // const {state,dispatch} = useContext(CounterContext);
  // console.log("state", state);

  const dispatch = useDispatch()
  const { count } = useSelector((state: any) => state.counter)

  return (
    <div>
      Counter: {count}
      <Button type='primary' onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </Button>
      <Button type='primary' onClick={() => dispatch({ type: "DECREMENT" })}>
        decrement
      </Button>
      <Button type='primary' onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>
        Increase
      </Button>
    </div>
  )
}

export default Counter