import React, { useState } from "react";

function HeaderSection() {
  const [tab, setTab] = useState("Learning Material");
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="w-[563px] p-3 h-[82px] bg-gradient-to-b from-[#EFF5FF] to-white  rounded-md flex items-center justify-center">
          <div className="w-[528px] h-[62px] flex items-center justify-around">
            <div
              onClick={() => setTab("Mentor Sessions")}
              className={`flex h-[61px] w-[243px] gap-3 items-center cursor-pointer justify-center ${tab==='Mentor Sessions' && "border border-[#A4E6FF] rounded-md bg-white shadow-lg font-bold"}`}
            >
              <img className="h-6 w-6" src="MentorSessions.svg" alt="" />
              <div className="text-[20px]">Mentor Sessions</div>
            </div>
            <div
              onClick={() => setTab("Learning Material")}
              className={`flex h-[61px] w-[243px] gap-3  cursor-pointer items-center justify-center ${tab==='Learning Material' && "border border-[#A4E6FF] rounded-md bg-white shadow-lg font-bold"}`}
            >
              <img className="h-6 w-6" src="LearningMaterials.svg" alt="" />
              <div className="text-[20px]">Learning Material</div>
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer items-center justify-center gap-3 px-5 py-3 h-[61px] border border-[#A4E6FF] rounded-lg">
          <img className="w-6 h-6" src="Info.svg" alt="" />
          <span className="text-[20px] font-bold">How it works</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
