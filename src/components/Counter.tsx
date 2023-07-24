import { decrement, increment, useCounterDispatch, useCounterSelector } from "../store/counterSlice"
const Counter = () => {
      const dispatch=useCounterDispatch()
  const value=useCounterSelector(state => state.counter.count)
  return (
    <div>
      <button onClick={()=>{
            dispatch(increment())
      }}> Increment</button>
      <button onClick={()=>{
            dispatch(decrement())
      }}>Decrement</button>
      {value}
    </div>
  )
}

export default Counter
