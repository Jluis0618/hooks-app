import React, { useCallback } from 'react'

export const ShowIncrement = React.memo(({increment}) => {


    console.log("Me volvi a genrar")
  return (
    <button className='btn btn-primary' onClick={()=>{
        increment();
    }}>
        Incrementr
    </button> 
  )
})
