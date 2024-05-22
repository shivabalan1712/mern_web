import React from 'react'
import proPic from './assets/cardimg.jpg'

export default function Card() {
  return (
    <>
    <div className="card">
        <img className ="card-image" src ={proPic} alt="Profile Picture"></img>
        <h2 className="card-title">ShivX</h2>
        <p className ="card-text">Dual Degree Graduate</p>

    </div>
    </>
  )
}
