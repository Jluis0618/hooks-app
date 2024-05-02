import React, { useState } from 'react'

export const CounterApp = () => {

    //maneja el estado
    const [state, setCounter] = useState({ //UseState para cambiar el estado de algo, en este caso un objeto
        counter1: 10,
        counter2: 20,
        counter3: 30,
    }) // Se puede usar con una sola cosa, como lo es un numero normal

    const {counter1, counter2, counter3} = state; // Desestructurar los counters del state

  return (
    <>
        <h1>Counter1: {counter1}</h1>
        <h1>Counter2: {counter2}</h1>
        <h1>Counter3: {counter3}</h1>

        <hr />
        <button 
        onClick={
            ()=> setCounter({
                ...state, //No importa cuantos objetos hayan antes o despues del counter, se mantendran igual
                counter1: counter1 + 1})
            }
        >+1</button>
    
    </>
  )
}
