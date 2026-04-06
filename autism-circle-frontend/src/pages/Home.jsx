import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import Services from "../components/home/Services";
import VisionMission from "../components/home/VisionMission";
import WhyUs from "../components/home/WhyUs";
import FAQPreview from "../components/home/FAQPreview";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <VisionMission />
      <WhyUs />
      <FAQPreview />
      <CTA />
    </>
  );
};

export default Home;