import React from 'react'
import PartItem from '../../../../components/PartItem'

function PartsSection() {
  return (
    <div className='w-full'>
        <PartItem partName={"PART-1"} title={"Lorem Ipsum Dolor Sit Amet"} subContent={5} completed={50}/>
        <PartItem partName={"PART-1"} title={"Lorem Ipsum Dolor Sit Amet"} subContent={5} completed={70}/>
        <PartItem partName={"PART-1"} title={"Lorem Ipsum Dolor Sit Amet"} subContent={5} completed={10}/>
    </div>
  )
}

export default PartsSection