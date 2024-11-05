import React from "react";

function ChapterItem({ chapterName, selected , setSelectedChapter}) {
  return (
    <div onClick={(e) => setSelectedChapter(chapterName)} className={`w-[343px] cursor-pointer flex justify-between items-center gap-[72px] px-4 py-6 border border-white border-b-[#A4E6FF] ${selected && "bg-[#EFF5FF] border-b-white rounded-lg"}`}>
      <div className={`text-[20px] ${selected && "font-bold"}`}>{chapterName}</div>
      {selected && (
        <div className="flex gap-2 items-center">
          <img className="h-6 w-6" src="Time.svg" alt="" />
          <span className="text-[#608AD2]">05:00:00</span>
        </div>
      )}
    </div>
  );
}

export default ChapterItem;
