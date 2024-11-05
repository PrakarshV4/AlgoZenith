import React from 'react'

function SubContentItem({icon, title}) {
  return (
    <div className='flex justify-between items-center h-[116px]'>
        <div className='flex items-center justify-center gap-3'>
            <img src={icon} alt="" />
            <span className='text-[20px] font-bold leading-10'>{title}</span>
        </div>

        <div className='flex text-[#17384D] items-center justify-center gap-3'>
            <img src="TealClock.svg" alt="" />
            <span >10:00</span>
        </div>
    </div>
  )
}

export default SubContentItem