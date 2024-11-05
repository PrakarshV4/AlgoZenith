import React from "react";

function SideBarItem({ name, icon, selected, setSelectedTab }) {
  return (
    <div
      onClick={(e) => setSelectedTab(name)}
      className={`flex cursor-pointer items-center justify-start h-16 w-full ${
        selected && "bg-[#D6F4FF] text-[#172B4D] font-bold rounded-lg"
      }`}
    >
      <div className="mr-4 ">
        <img className={`w-6 h-6 ml-[20px] fill-red-600`} src={icon} alt="" />
      </div>
      <div className={`text-[24px] mr-5`}>{name}</div>
    </div>
  );
}

export default SideBarItem;
