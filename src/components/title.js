import React from "react";

const Title = ({ title, subtitle, className }) => {
  return (
    <div className="flex flex-col gap-[25px] items-center">
      <h2 className="text-[56px] leading-0.72 font-bold text-center">
        {title}
      </h2>
      <p className={`text-[22px] leading-0.36 text-center ${className}`}>
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
