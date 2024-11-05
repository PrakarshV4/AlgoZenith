import React, { useState } from "react";

function PartItem({ partName, title, subContent, completed }) {
    const [openDropdown, setOpenDropdown] = useState(true);
  return (
    <div className="pt-[38px] px-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span>{partName}</span>
          <span className="font-bold">{title}</span>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2 justify-center items-center">
            <img className="h-6 w-6" src="Time.svg" alt="" />
            <span className="text-2xl">02:00:00</span>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <img className="h-6 w-6" src="Medium.svg" alt="" />
            <span className="text-2xl">Medium</span>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <img className="h-6 w-6" src="Copy.svg" alt="" />
            <span className="text-2xl">{subContent}</span>
          </div>

          <img onClick={() => setOpenDropdown((prev)=> !prev)} src={openDropdown ? 'DropDown.svg' : 'DropUp.svg'} alt="" />
        </div>
      </div>
      <div className="flex justify-end">
        <span>{completed}% completed</span>
      </div>

      <div className="bg-[#EFF5FF]">
        <div
          style={{ width: `${completed}%` }}
          className={`border-b-[10px] rounded-bl-full rounded-t-none border-white border-b-[#172B4D]`}
        ></div>
      </div>
      
      {/* {openDropdown &&} */}
    </div>
  );
}

export default PartItem;
