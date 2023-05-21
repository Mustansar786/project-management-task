import React from 'react'
import "./index.css";

export default function CustomButton({title, style, onClick}) {
  return (
    <div>
      <button className='button' style={{...style}} onClick={onClick}>{title}</button>
    </div>
  )
}
