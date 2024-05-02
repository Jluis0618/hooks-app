import React, { useLayoutEffect, useRef, useState } from 'react'

export const Character = ({image, name}) => {

  const imgRef = useRef()
  const [boxSize,setBoxSize] = useState({width: 0, height:0 })

  useLayoutEffect(() => {
    const {height, width} = imgRef.current.getBoundingClientRect()
    setBoxSize({height, width})
  }, [image])


  return (
    <>
    <blockquote 
            className="blockquote text-end"
            style={{display:'flex'}}>
          <img ref={imgRef} src={image} className="mb-1"></img>
          <footer className="mt-1 blockquote-footer">{name}</footer>
        </blockquote>

    <code>{JSON.stringify(boxSize)}</code>
    </>
        
  )
}
