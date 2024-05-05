import React from "react";

const HeroCard = ({ className }) => {
  return (
    <div
      className={`flex gap-[67px] px-[24px] py-[16px] shadow-lg max-w-[416px] max-h-[88px] rounded-xl bg-white ${className}`}
    >
      <div className="flex flex-col gap-[4px] items-center">
        <span className="text-[10px] font-medium leading-0.16">Opened</span>
        <span className="text-[24px] font-medium leading-0.3">926</span>
        <div className="bg-[#D9D9D9] w-[74px] h-[6px] rounded-full">
          <div className="bg-[#5840B8] w-[64px] h-[6px] rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-col gap-[4px] items-center">
        <span className="text-[10px] font-medium leading-0.16">Clicked</span>
        <span className="text-[24px] font-medium leading-0.3">81K</span>
        <div className="bg-[#D9D9D9] w-[74px] h-[6px] rounded-full">
          <div className="bg-[#4DC5FC] w-[57px] h-[6px] rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-col gap-[4px] items-center">
        <span className="text-[10px] font-medium leading-0.16">Subscriber</span>
        <span className="text-[24px] font-medium leading-0.3">490</span>
        <div className="bg-[#D9D9D9] w-[74px] h-[6px] rounded-full">
          <div className="bg-[#5EBB0F] w-[37px] h-[6px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
