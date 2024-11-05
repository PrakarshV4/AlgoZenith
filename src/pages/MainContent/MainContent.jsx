import React from "react";
import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";

function MainContent() {
  return (
    <div>
      <div className="flex mt-15 pr-16 pl-20">
        <SideBar />
        <Content />
      </div>
    </div>
  );
}

export default MainContent;
