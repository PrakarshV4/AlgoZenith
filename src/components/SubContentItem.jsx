import React from 'react'

function SubContentItem({icon, title}) {
  return (
    <div>
        <div className='flex items-center justify-center gap-3'>
            <img src={icon} alt="" />
            <span>{title}</span>
        </div>

        <div className='flex items-center justify-center gap-3'>
            <img src="Time.svg" alt="" />
            <span>10:00</span>
        </div>
    </div>
  )
}

export default SubContentItem