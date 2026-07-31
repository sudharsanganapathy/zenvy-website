import Hero from "../components/home/Hero";
import FeaturedDrops from "../components/home/FeaturedDrops";
import Manifesto from "../components/home/Manifesto";
import Gallery from "../components/home/Gallery";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDrops />
      <Manifesto />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;