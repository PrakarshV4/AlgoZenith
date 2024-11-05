import React from "react";

function HeaderSection() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="w-[563px] p-3 h-[82px] bg-gradient-to-b from-[#EFF5FF] to-white border-2 rounded-md flex items-center justify-center">
          <div className="w-[528px] h-[62px] flex items-center justify-around">
            <div className="flex h-[61px] w-[243px] gap-3 items-center justify-center">
              <img className="h-6 w-6" src="MentorSessions.svg" alt="" />
              <div className="text-[22px]">Mentor Sessions</div>
            </div>
            <div className="flex h-[61px] w-[243px] gap-3 items-center justify-center border border-[#A4E6FF] rounded-md bg-white shadow-lg font-bold">
              <img className="h-6 w-6" src="LearningMaterials.svg" alt="" />
              <div className="text-[22px]">Learning Material</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 px-5 py-3 h-[61px] border border-[#A4E6FF] rounded-lg">
          <img className="w-6 h-6" src="Info.svg" alt="" />
          <span className="text-[22px] font-bold">How it works</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
