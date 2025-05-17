import { useContext } from "react";
import Button from "./Button";
import Container from "./Container";
import OurCategories from "./OurCategories";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);

  return (
    <section
      className="bg-[url('/hero.png')] bg-cover h-[850px] md:h-[600px] w-full pt-24"
      id="home"
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center h-full w-full ">
          {/* left */}
          <div className="flex-1 ">
            <div className="w-full h-full">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-center md:text-start">
                Feel The Natural Power
              </h1>
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-start">
                Elevate Your Focus
              </h2>
              <h3 className="text-sm md:text-lg font-semibold text-center md:text-start">
                With Natural Products
              </h3>
            </div>
            <div className="pt-4">
              <h1 className="text-center md:text-start">
                Enhance your well-being with natural remedies, experience the
                true essence of a healthy life, and reap abundant rewards.
              </h1>
              <div className="py-4 flex justify-center items-center md:justify-start">
                <Button>
                  <a href="#products" className="">
                    Explore Now
                  </a>
                </Button>
              </div>{" "}
            </div>
          </div>
          {/* right */}
          <div className="flex-1 flex justify-center items-center w-full h-full ">
            {/* images */}
            {/* slide */}

            {!isOpen && (
              <div className="w-[300px] h-[80%]  flex justify-center items-center ">
                <OurCategories />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
