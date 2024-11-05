import React from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import ChaptersSection from "./ChaptersSection/ChaptersSection";
import PartsSection from "./PartsSection/PartsSection";

function Content() {
  return (
    <div className="border border-[#A4E6FF] rounded-2xl w-full ml-[55px] pt-[39px] px-[40px]">
      <HeaderSection />
      <div className="my-10 border border-b-[#A4E6FF]"></div>
      <div className="flex">
        <ChaptersSection/>
        <PartsSection />
      </div>
    </div>
  );
}

export default Content;
