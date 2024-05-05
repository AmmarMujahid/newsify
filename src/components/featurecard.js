import React from "react";

// const bgLight = {`max-w-[400px] max-h-[360px] pt-[95px] px-[24px] pb-[58px] bg-[#F7F7F7] ${className}`}
// const bgDark = {`max-w-[400px] max-h-[360px] pt-[95px] px-[24px] pb-[58px] bg-primaryColor ${className}`}



const FeatureCard = ({ className, title, description }) => {
  return (
    <div
      className = {`max-w-[400px] max-h-[360px] pt-[95px] px-[24px] pb-[58px] bg-[#F7F7F7] ${className}`}
    >
      <div className="relative">
        <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full bg-[#F7F7F7] border-white border-8 absolute right-[36%] top-[-140px]">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.481 8.96069C11.481 8.37277 11.9575 7.89624 12.5454 7.89623L26.5963 7.89616C26.8786 7.89606 27.1494 8.00827 27.349 8.20789C27.5486 8.40752 27.6608 8.6783 27.6608 8.96072V23.0116C27.6608 23.5996 27.1843 24.0761 26.5964 24.0761C26.0085 24.0761 25.5318 23.5995 25.5318 23.0115L25.5317 11.5306L9.28354 27.7788C8.86782 28.1945 8.19379 28.1945 7.77809 27.7788C7.36238 27.3631 7.36237 26.6891 7.77809 26.2734L24.0263 10.0252L12.5455 10.0252C11.9576 10.0252 11.481 9.54862 11.481 8.96069Z"
              fill="black"
            />
          </svg>
        </div>

        <h6 className="text-[22px] leading-0.3 font-semibold mb-[24px]">{title}</h6>

        <p className="text-[18px] leading-0.3">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
