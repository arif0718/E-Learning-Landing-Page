import React from 'react'
import './WedeliverBox.css'

const WedeliverBox = ({ color, text,text2,tc }) => {
  return (
    <>
      <div className="dliver-box" style={{
        backgroundColor:color,
        color:tc
      }}>
        <div className="number">{text}</div>
        <div className="number-text">{text2}</div>
      </div>
    </>
  )
}

export default WedeliverBox
