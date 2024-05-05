import React from "react";
import Title from "./title";
import SearchIcon from "./assets";
import SearchInput from "./SearchInput";
import Button from "./button";

const Cta = () => {
  return (
    <section className="container mx-auto my-[160px]">
      <div className="bg-[#C7F2AB] max-w-full h-[600px] rounded-[30px] flex flex-col items-center gap-[50px] justify-center">
        <Title
          title="Let`s Start Something Great"
          subtitle="Sign up with your email adress to be informed about discounts and new recruits from all campaigns!"
        />

        <div className="relative">
        <SearchInput placeholder="Enter your email" className="w-[495px]" />
        <Button title="Free Trial" className="px-[38px] py-[16px] absolute top-[5px] right-[5px]" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
