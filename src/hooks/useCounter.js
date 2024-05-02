import { useState } from "react"

export const useCounter = (initialValue = 10) =>{ //Se crea el custom hook
    
    const [counter, setCounter] = useState(initialValue) // Todo custom hook depende de otro hook, en este caso use State
    
    const increment = ()=>{
        setCounter(counter+1);
    }
    const decrement = ()=>{
        setCounter(counter-1);
    }
    const reset = ()=>{
        setCounter(10);
    }

    return{
        counter,
        increment,
        decrement,
        reset,
    }
}