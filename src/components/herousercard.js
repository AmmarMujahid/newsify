import React from "react";

const HeroUserCard = ({ className }) => {
  return (
    <div
      className={`w-[201px] h-[200px] bg-cover bg-[#1C1E1F] flex flex-col justify-start gap-[4px] rounded-3xl px-[16px] py-[16px] ${className}`}
      style={{ backgroundImage: "url(/hero-graphics.svg)" }}
    >
      <div className="flex gap-[8px] mb-[20px]">
        <span className="bg-[#ED3B3B] w-[10px] h-[10px] rounded-full"></span>
        <span className="bg-[#30C1FF] w-[10px] h-[10px] rounded-full"></span>
        <span className="bg-[#BEF848] w-[10px] h-[10px] rounded-full"></span>
      </div>
      <h5 className="text-[30px] leading-0.3 font-semibold text-white">
        411,891k
      </h5>
      <span className="text-[18px] leading-0.24 text-white">Total users</span>
    </div>
  );
};

export default HeroUserCard;
