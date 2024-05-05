import React from "react";
import Title from "./title";
import NewsletterCard from "./newslettercard";

const Newsletter = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col gap-[80px]">
        <div>
          <Title
            title="More than a Newsletter"
            subtitle="Unlock the automated quality experience for everyone in the team."
          />
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-[120px]">
          <NewsletterCard
            picture={"/newsletter1.png"}
            title="Collect the needed information and see the result easily"
            description="Help your members find wjat matters to them Collect informations and creates graphics for them to understand their values. To have a smooth experience all members need a bit of guidence."
          />
          <NewsletterCard
            picture={"/newsletter2.png"}
            title="Use the analyzer AI to track your reports"
            description="A strong community could be lead by a strong guidence only. The guide in this tour may be automized already. Our analyzier Ai will track the parameters and will come real life reports"
          />
          <NewsletterCard
            picture={"/newsletter3.png"}
            title="Publish in one touch"
            description="Everything is under you control you can schedule your announcement plan your feeds and create posts with one click Being the right thing in the right time."
          />
          <NewsletterCard
            picture={"/newsletter4.png"}
            title="Connection is the key"
            description="When a member replied to another, they get the connection flow. This way we improve general efficeny of the team"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
