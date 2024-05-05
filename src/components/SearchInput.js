import React from "react";
import SearchIcon from "./assets";

const SearchInput = ({ placeholder, className }) => {
  return (
    <div className="relative flex items-center">
      <SearchIcon className="absolute left-[20px]" />

      <input
        type="text"
        placeholder={placeholder}
        className={`pl-[50px] py-[20px] rounded-full border-[1px] boredr-[#CCCCCC] ${className}`}
      />
    </div>
  );
};

export default SearchInput;
