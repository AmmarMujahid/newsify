import Cta from "@/components/Cta";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Questions from "@/components/Questions";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoBar />
      <Features />
      <Newsletter />
      <Testimonials />
      <Questions />
      <Cta />
    </>
  );
}
