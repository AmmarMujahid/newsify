"use client";
import React, { useState } from "react";
import { AccordionClose, AccordionOpen } from "./assets";
import Title from "./title";

const accordionList = [
  {
    id: 1,
    title: "What is Team Newsify?",
    description:
      "It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!",
  },
  {
    id: 2,
    title: "What is Team Newsify?",
    description:
      "It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!",
  },
  {
    id: 3,
    title: "What is Team Newsify?",
    description:
      "It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!",
  },
];

const Questions = () => {
  return (
    <section className="container mx-auto">
      <div className="my-[100px]">
        <Title
          title="Freequently asked questions"
          subtitle="We`re happy to answer your questions"
        />
      </div>
      <div>
        <div>
          {accordionList.map((accordion) => (
            <AccordionComponent key={accordion.id} accordion={accordion} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AccordionComponent = ({ accordion }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="border-y border-[#DEDEDE]" key={accordion.id}>
      <h2>
        <button
          onClick={() => {
            // accordionOpen === accordion.id
            //   ? setAccordionOpen(0)
            //   : setAccordionOpen(accordion.id);
            setAccordionOpen(!accordionOpen);
          }}
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium text-black"
        >
          <span className="text-[36px] leading-0.46">
            What is Team Newsify?
          </span>
          {accordionOpen ? <AccordionClose /> : <AccordionOpen />}
        </button>
      </h2>
      <div
        className={`transition-all duration-500 ${
          accordionOpen ? "max-h-[999px]" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="py-[40px]">
          <p className="text-[22px] leading-0.36 text-[#786F77]">
            It is alomost completely automated as a system . You can schedule
            plan and create calenders for your upcoming males. You can Anylzer
            Ai, tracker , Ai reporter, Ai to create a smooth business plan for
            your and your teamateswith one click!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
