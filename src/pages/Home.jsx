import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Benefits from "../components/Benefits";
import OurProducts from "../components/OurProducts";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <OurProducts />
      <Footer />
    </div>
  );
};

export default Home;
