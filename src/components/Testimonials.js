import React from "react";
import TestimonialCard from "./testimonialcard";

const Testimonials = () => {
  return (
    <section className="container mx-auto my-[100px]">
      <div className="my-[36px]">
        <h2 className="text-[56px] font-bold leading-0.72">
          The <span className="text-primaryColor">Cutomer is Hero</span> <br />{" "}
          of Our Business
        </h2>
        <p className="text-[18px] leading-0.3">
          Newsify is your Email newsletter Webflow template we can build
          anything your dream.
        </p>
      </div>
      <div>
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
