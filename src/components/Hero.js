import React from "react";
import Button from "./button";
import Image from "next/image";
import HeroCard from "./herocard";
import HeroUserCard from "./herousercard";

const Hero = () => {
  return (
    <section className="container mx-auto my-[100px]">
      <div className="flex gap-[9px] items-center">
        <span className="text-[20px] font-black">Hey, Everyone</span>
        <span>👋</span>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-[35px]">
          <h2 className="text-[80px] leading-0.96 font-semibold">
            Newsify is the email <br /> newsletter that works <br /> completely
            automated
          </h2>

          <p className="text-[22px] leading-0.34">
            Track connections in real time. See who your <br /> community being
            lead by and find the most active
          </p>

          <div className="flex gap-[10px]">
            <input
              type="text"
              placeholder="Your email adress"
              className="max-w-[355px] px-[22px] py-[12px] border-[1px] border-[#CCC] rounded-full"
            />
            <Button
              title="Register"
              className="px-[48px] py-[20px] leading-0.2 font-semibold"
            />
          </div>
        </div>

        <div className="shrink-0 relative">
          <Image
            src="/hero-phone.png"
            alt="Hero Phone"
            width={475}
            height={538}
          />
          <HeroCard className="absolute left-[16px] bottom-[-50px]" />
          <HeroUserCard className="absolute left-[-100px] top-[110px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
