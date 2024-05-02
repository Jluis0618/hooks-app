import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
  
    const { counter, increment, decrement, reset } = useCounter(); // Esto es un custom hook para manejar el estado del Counter
  
  
    return (
   <>
     <div>Counter with Hook:  {counter}</div>
     <hr />
     <button className='btn btn-primary' onClick={increment}>+1</button>
     <button className='btn btn-primary' onClick={reset}>Reset</button>
     <button className='btn btn-primary' onClick={decrement}>-1</button>
   
   </>

  )
}
