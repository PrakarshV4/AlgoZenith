import React from "react";

function SideBarItem({ name, icon }) {
  return (
    <div className="flex items-center justify-start h-16 w-full">
      <div className="mr-4">
        <img className="w-6 h-6" src={icon} alt="" />
      </div>
      <div className="text-[24px]">{name}</div>
    </div>
  );
}

export default SideBarItem;
