import React from 'react'
import styles from './Button.module.css'

export default function Button() {
  const styles ={
    backgroundColor:"hsl(200,100%,50%)",
    colour : "white",
    padding : "10px 20px" ,
    borderRadius : "5px",
    border:"none",
    cursor: "pointer",
  }
  return (
    <>
    <button style={styles}>Click Here</button>
    </>
  )
}
