import React from "react";
import Image from "next/image";
import Button from "./button";

const NewsletterCard = ({ picture, title, description }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <Image src={picture} alt="Newsletter" width={714} height={600} className="mb-[30px]" />

      <h3 className="text-[36px] font-bold leading-0.5">{title}</h3>

      <p className="text-[22px] leading-0.36">{description}</p>
      <Button
        title="Get start for free"
        className="px-[38px] py-[20px] leading-0.2"
      />
    </div>
  );
};

export default NewsletterCard;
