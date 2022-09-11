import React from 'react'
import image from "../../assets/image.png"

const style = {
  height: '100vh',
  width:'100vw'
}


export const Background=()=> {
  return (
    <div className='background'>
      <img src={image} style={style} ></img>
      
    </div>
  )
}
