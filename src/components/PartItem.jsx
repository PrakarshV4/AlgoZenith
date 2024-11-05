import React, { useState } from "react";
import SubContentItem from "./SubContentItem";
import GradientRule from "./GradientRule";

function PartItem({ partName, title, subContent, completed }) {
  const [openDropdown, setOpenDropdown] = useState(true);
  return (
    <div className="pt-[33px] mb-4 shadow-md border border-[#A4E6FF]">
      <div className="flex items-center px-8 justify-between">
        <div className="flex flex-col">
          <span className="text-[20px] text-[#17384D]">{partName}</span>
          <span className="font-bold text-[21px]">{title}</span>
        </div>
        <div className="flex gap-4 text-[#17384D]">
          <div className="flex gap-2 justify-center items-center">
            <img className="h-6 w-6" src="Time.svg" alt="" />
            <span className="text-[18px] ">02:00:00</span>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <img className="h-6 w-6" src="Medium.svg" alt="" />
            <span className="text-[18px]">Medium</span>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <img className="h-6 w-6" src="Copy.svg" alt="" />
            <span className="text-[18px]">{subContent}</span>
          </div>

          <img
            onClick={() => setOpenDropdown((prev) => !prev)}
            src={openDropdown ? "DropDown.svg" : "DropUp.svg"}
            alt=""
          />
        </div>
      </div>
      <div className="flex px-8 mb-3 justify-end">
        <span className="px-[10px] py-[4px] bg-[#EFF5FF] rounded-md border border-[#99E4FF]">{completed}% completed</span>
      </div>

      <div className="bg-[#EFF5FF]">
        <div
          style={{ width: `${completed}%` }}
          className={`border-b-[10px] rounded-bl-full rounded-t-none border-white border-b-[#172B4D]`}
        ></div>
      </div>

      {!openDropdown && (
        <div className="flex px-8 flex-col gap-0">
          <SubContentItem icon={"Video.svg"} title={"Video 1"} />
          <GradientRule/>
          <SubContentItem icon={"Article.svg"} title={"Article 1"} />
          <GradientRule/>
          <SubContentItem icon={"Article.svg"} title={"Quiz 1"} />
          <GradientRule/>
          <SubContentItem icon={"Coding.svg"} title={"Coding Exercise 1"} />
          <GradientRule/>
          <SubContentItem icon={"Copy.svg"} title={"Combined Resource 1"} />
        </div>
      )}
    </div>
  );
}

export default PartItem;
