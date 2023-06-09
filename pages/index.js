import Carousel from "components/Carousel";
import Footer from "components/Footer";
import HomeCTA from "components/HomeCTA";
import HousingIsland from "components/HousingIsland";
import HousingModels from "components/HousingModels";
import Navbar from "components/Navbar";
import OtherWebsites from "components/OtherWebsites";
import OurTeam from "components/OurTeam";
import Partners from "components/Partners";
import Welcome from "components/Welcome";
export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Welcome />
      <OurTeam />
      <Partners />
      <HousingModels />
      <HomeCTA />
      <HousingIsland />
      <OtherWebsites />
      <Footer />
    </>
  );
}
