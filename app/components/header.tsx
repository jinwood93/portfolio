import React from "react";

const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="backdrop-blur bg-white/30 w-fit flex items-center justify-center gap-4 p-1 rounded-[24px] shadow-md">
        <div className="transition duration-300 ease-in-out hover:bg-[#D1F8EF] text-gray-500 font-semibold  cursor-pointer rounded-[24px] px-4 py-2">
          핵심역량
        </div>
        <div className="transition duration-300 ease-in-out hover:bg-[#D1F8EF] text-gray-500 font-semibold cursor-pointer rounded-[24px] px-4 py-2">
          기술
        </div>
        <div className="transition duration-300 ease-in-out hover:bg-[#D1F8EF] text-gray-500 font-semibold cursor-pointer rounded-[24px] px-4 py-2">
          경력
        </div>
        <div className="transition duration-300 ease-in-out hover:bg-[#D1F8EF] text-gray-500 font-semibold cursor-pointer rounded-[24px] px-4 py-2">
          프로젝트
        </div>
      </div>
    </div>
  );
};

export default Header;
