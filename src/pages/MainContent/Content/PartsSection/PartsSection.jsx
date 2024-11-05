import React from 'react'
import PartItem from '../../../../components/PartItem'

function PartsSection() {
  return (
    <div className='w-full'>
        <PartItem partName={"PART-1"} title={"Lorem Ipsum Dolor Sit Amet"} subContent={5} completed={50}/>
        <PartItem partName={"PART-2"} title={"Lorem Ipsum Dolor Sit Amet"} subContent={12} completed={20}/>
        <PartItem partName={"PART-3"} title={"Lorem Ipsum Dolor Sit Amet"} subContent={12} completed={0}/>
    </div>
  )
}

export default PartsSection