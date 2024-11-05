import React from 'react'
import ChapterItem from '../../../../components/ChapterItem'

function ChaptersSection() {
  return (
    <div>
        <ChapterItem chapterName={"Chapter 1"} selected/>
        <ChapterItem chapterName={"Chapter 2"} />
        <ChapterItem chapterName={"Chapter 3"} />
        <ChapterItem chapterName={"Chapter 4"} />
        <ChapterItem chapterName={"Chapter 5"} />
    </div>
  )
}

export default ChaptersSection