import React from 'react'
import SideBarItem from '../../../components/SideBarItem'

function SideBar() {
  return (
    <div className='mt-15 pl-20' >
        <SideBarItem name={"Dashboard"} icon={"Dashboard.svg"}/>
        <SideBarItem name={"Learn"} icon={"Learn.svg"}/>
        <SideBarItem name={"Forums"} icon={"Forums.svg"}/>
        <SideBarItem name={"Upskill"} icon={"Upskill.svg"}/>
        <SideBarItem name={"Contest"} icon={"Contest.svg"}/>
        <SideBarItem name={"Leaderboard"} icon={"Leaderboard.svg"}/>
    </div>
  )
}

export default SideBar