import React from "react";
import Container from "./Container";

const Benefits = () => {
  return (
    <section className="pt-10 bg-yellow-100 pb-5">
      <Container>
        <h1 className="capitalize text-center font-semibold text-xl md:text-2xl text-green-800">
          Our Porduct benefits
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 ">
          {/* left */}
          <div className=" flex-1 flex justify-center items-center w-full h-full">
            <div className="w-[80%] h-[60%]">
              <img src="/herbs.jpg" alt="" className="w-full h-full" />
            </div>
          </div>
          {/* right */}
          <div className="flex-1  font-semibold text-green-800 w-full h-full flex justify-center items-center ">
            <div className="">
              <h1 className="text-xl text-orange-700  text-center pb-2">
                Herbal products offer a variety of benefits, making them a
                popular choice for those seeking natural remedies. 
                
              </h1>
              <p className="py-2">
                Many herbal products support the body's ability to heal itself
                without synthetic chemicals.
              </p>
              <p className="">
                Compared to pharmaceuticals, herbal remedies often have milder
                side effects.
              </p>
              <p className="py-2">
                Many herbs contain antioxidants that help fight free radicals
                and promote overall health.
              </p>
              <p>
                Herbs such as peppermint and chamomile soothe digestive issues
                and improve gut health.
              </p>
              <p className="py-2">
                Herbal remedies are often more cost-effective than conventional
                medicine.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
