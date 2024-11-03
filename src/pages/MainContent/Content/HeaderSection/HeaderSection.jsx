import React from "react";

function HeaderSection() {
  return (
    <div>
      <div className="flex">
        <div className="w-[563px] p-3 h-[82px] bg-gradient-to-b from-[#EFF5FF] to-white border-2 rounded-md flex items-center justify-center">
          <div className="w-[528px] h-[62px] flex items-center justify-around">
            <div className="flex h-[61px] w-[243px] gap-3 items-center justify-center">
              <img className="h-6 w-6" src="MentorSessions.svg" alt="" />
              <div>Mentor Sessions</div>
            </div>
            <div className="flex h-[61px] w-[243px] gap-3 items-center justify-center">
              <img className="h-6 w-6" src="LearningMaterials.svg" alt="" />
              <div>Learning materials</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
