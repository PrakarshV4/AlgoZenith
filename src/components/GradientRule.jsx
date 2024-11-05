import React from 'react'

function GradientRule() {
  return (
    <div>
        {/* <div className="h-px opacity-40 bg-gradient-to-r from-white via-black to-white"></div> */}
        <div className="h-px w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.4),rgba(0,0,0,0.4),rgba(255,255,255,0.4))]"></div>
        {/* <div className="h-px w-full bg-white-black-white border-b-[1px] border-b-[linear-gradient(to_right,rgba(255,255,255,1),rgba(0,0,0,0.4),rgba(255,255,255,0.4))]"></div> */}
    </div>
  )
}

export default GradientRule