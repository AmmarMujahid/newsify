import React from "react";
import Title from "./title";
import Image from "next/image";
import FeatureCard from "./featurecard";

const Features = () => {
  return (
    <section className="my-[100px]">
      <div className="flex flex-col items-center gap-[54px]">
        <div>
          <Title
            className="max-w-[885px]"
            title="Let Your Newsletter Do the talk"
            subtitle="Let`s clam it , today we don`t the time to talk or time to scroll over
        groups or other plateforms . So it is better for your automated
        newsletter to do the tlk. What cloud be done better? Stay connected to
        your community."
          />
        </div>

        <div>
          <Image
            src="/feature-dashboard.png"
            alt="Feature Dashboard"
            width={1253}
            height={680}
          />
        </div>

        <div className="flex gap-[26px]">
          <FeatureCard
            title="Direct Connections"
            description="No logins or anything is needed. Directly connect with everyone with only one permission. Let us control your business world for you. Easy, customizable and quick way of connecting with others"
          />

          <FeatureCard
            title="Direct Connections"
            description="No logins or anything is needed. Directly connect with everyone with only one permission. Let us control your business world for you. Easy, customizable and quick way of connecting with others"
          />

          <FeatureCard
            title="Direct Connections"
            description="No logins or anything is needed. Directly connect with everyone with only one permission. Let us control your business world for you. Easy, customizable and quick way of connecting with others"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
