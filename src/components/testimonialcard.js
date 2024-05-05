import React from "react";
import Image from "next/image";

const TestimonialCard = () => {
  return (
    <section className="container mx-auto">
      <div
        className="bg-[#1E1F20] w-full h-[664px] text-white py-[81px] pl-[81px] pr-[276px] rounded-[40px] flex flex-col justify-between bg-cover  "
        style={{ backgroundImage: "url(/test.svg)" }}
      >
        <p className="text-[56px] leading-0.72">
          I cant describe how great we feel using Newsify. It completely changed
          our workflow and the face we waste on truying to connect each
          other.Top Newsify!”
        </p>

        <div className="flex gap-[22px]">
          <Image
            src="/testimonial-user.png"
            alt="Testimonial User"
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-[12px]">
            <h5 className="text-[36px] leading-0.46 font-medium">
              Esther Jackson
            </h5>
            <Image src="/5star.svg" alt="Rating" width={85} height={15} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
