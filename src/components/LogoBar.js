import React from "react";
import Image from "next/image";

const LogoBar = () => {
  return (
    <section className="bg-primaryColor px-[80px] py-[70px] my-[100px]">
      <div className="flex gap-[130px]">
        <Image src="/stripe.svg" alt="logo" width={110} height={46} />
        <Image src="/google.svg" alt="logo" width={132} height={43} />
        <Image src="/samsung.svg" alt="logo" width={164} height={24} />
        <Image src="/visa.svg" alt="logo" width={86} height={28} />
        <Image src="/spotify.svg" alt="logo" width={162} height={49} />
        <Image src="/linkedin.svg" alt="logo" width={153} height={44} />
        <Image src="/zoom.svg" alt="logo" width={152} height={49} />
      </div>
    </section>
  );
};

export default LogoBar;
