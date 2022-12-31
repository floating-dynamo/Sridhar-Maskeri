import React from 'react'
import "./Bar.css"

const Bar = ({prof}) => {
  return (
    <div className='bar' >
        <div className='inner-bar' style={{width:`${prof}%`}}>
            <p>{prof}%</p>
        </div>
    </div>
  )
}
export default Bar