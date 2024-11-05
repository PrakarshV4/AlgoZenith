import React, { useState } from "react";
import SideBarItem from "../../../components/SideBarItem";

function SideBar() {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  return (
    <div className="mt-15  w-[267px]">
      <SideBarItem
        setSelectedTab={setSelectedTab}
        selected={selectedTab === "Dashboard"}
        name={"Dashboard"}
        icon={"Dashboard.svg"}
      />
      <SideBarItem
        setSelectedTab={setSelectedTab}
        selected={selectedTab === "Learn"}
        name={"Learn"}
        icon={"Learn.svg"}
      />
      <SideBarItem
        setSelectedTab={setSelectedTab}
        selected={selectedTab === "Forums"}
        name={"Forums"}
        icon={"Forums.svg"}
      />
      <SideBarItem
        setSelectedTab={setSelectedTab}
        selected={selectedTab === "Upskill"}
        name={"Upskill"}
        icon={"Upskill.svg"}
      />
      <SideBarItem
        setSelectedTab={setSelectedTab}
        selected={selectedTab === "Contest"}
        name={"Contest"}
        icon={"Contest.svg"}
      />
      <SideBarItem
        setSelectedTab={setSelectedTab}
        selected={selectedTab === "Leaderboard"}
        name={"Leaderboard"}
        icon={"Leaderboard.svg"}
      />
    </div>
  );
}

export default SideBar;
