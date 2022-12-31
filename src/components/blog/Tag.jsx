import React from 'react'
import './Tag.css'

const Tag = ({title = ""}) => {
  return (
    <div className='tag'>
        <p>#{title}</p>
    </div>
  )
}

export default Tag