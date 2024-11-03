import React from "react";

function SideBarItem({ name, icon }) {
  return (
    <div className="flex items-center justify-start h-16 pl-6">
      <div className="mr-4">
        <img className="w-6 h-6" src={icon} alt="" />
      </div>
      <div>{name}</div>
    </div>
  );
}

export default SideBarItem;
