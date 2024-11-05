import React, { useState } from "react";
import ChapterItem from "../../../../components/ChapterItem";

function ChaptersSection() {
  const [selectedChapter, setSelectedChapter] = useState("Chapter 1");
  return (
    <div>
      <ChapterItem
        setSelectedChapter={setSelectedChapter}
        chapterName={"Chapter 1"}
        selected={selectedChapter==="Chapter 1"}
      />
      <ChapterItem
        setSelectedChapter={setSelectedChapter}
        chapterName={"Chapter 2"}
        selected={selectedChapter==="Chapter 2"}
      />
      <ChapterItem
        setSelectedChapter={setSelectedChapter}
        chapterName={"Chapter 3"}
        selected={selectedChapter==="Chapter 3"}
      />
      <ChapterItem
        setSelectedChapter={setSelectedChapter}
        chapterName={"Chapter 4"}
        selected={selectedChapter==="Chapter 4"}
      />
      <ChapterItem
        setSelectedChapter={setSelectedChapter}
        chapterName={"Chapter 5"}
        selected={selectedChapter==="Chapter 5"}
      />
    </div>
  );
}

export default ChaptersSection;
