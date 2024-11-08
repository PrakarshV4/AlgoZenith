import React from "react";

function Header() {
  return (
    <div className="h-40 w-full flex items-center justify-between">
      <div className="flex gap-6 ml-20 ">
        <img className="cursor-pointer" src="logo.svg" alt="" />
        <img src="AlgoZenithLogo.svg" className="cursor-pointer" alt="" />
        {/* <span className='text-[#172B4D] font-bold'>AlgoZenith</span> */}
      </div>
      <div className="w-36 flex justify-between items-center mr-16">
        <div className="flex justify-center items-center p-3 bg-[#E7F8FF]">
          <img className='cursor-pointer' src="Bell.svg" alt="" />
        </div>
        <div>
          <img className="h-16 w-16 cursor-pointer" src="Ellipse.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
