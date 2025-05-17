import { Link } from "react-router-dom";
import Container from "./Container";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      className="bg-[url('/footer.png')] bg-cover text-white h-full"
      id="footer"
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center  gap-14 my-10 mt-40 text-sm">
          <div className="">
            <div className="">
              <p className="text-xl font-medium mb-5 pt-5 text-orange-600 ">
                Customer Services
              </p>
              <ul className="flex flex-col gap-1 ">
                <li className="hover:cursor-pointer py-1">FAQs</li>
                <li className="hover:cursor-pointer">Return Policy</li>
                <li className="hover:cursor-pointer py-1">Our Stores</li>
              </ul>
            </div>
          </div>
          <div className="">
            <p className="text-xl font-medium mb-5 pt-5 text-orange-600 ">
              Quick Link
            </p>
            <ul className="flex flex-col gap-1">
              <li className="cursor-pointer py-1">Home</li>
              <li className="cursor-pointer">Benefits</li>
              <li className="cursor-pointer py-1">About Us</li>
              <li className="cursor-pointer">Products</li>
              <li className="cursor-pointer py-1">Contact Us</li>
            </ul>
          </div>
          <div className="">
            <p className="text-xl font-medium mb-5 text-orange-600 ">
              Contact Us
            </p>
            <div className="">
              <div className="flex  items-center ">
                <div className="flex items-center justify-center gap-3 ">
                  <div className="">
                    <a
                      href="https://www.facebook.com/share/1Dfx7wUz2t/?mibextid=wwXIfr"
                      target="_blank"
                      className=""
                    >
                      <span className="">
                        <FaFacebookF size={20} color="blue" />
                      </span>
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="https://www.instagram.com/vicelpharmacy?igsh=ejBxaW9uZnA3eTZu&utm_source=qr"
                      target="_blank"
                      className=""
                    >
                      <span className="">
                        <FaInstagram size={20} color="red" />
                      </span>
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="https://wa.link/k5g70d"
                      target="_blank"
                      className=""
                    >
                      <span className="">
                        <FaWhatsapp size={20} color="green" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-3">
                <a
                  href="tel:+2347055577074"
                  className="flex items-center gap-3"
                >
                  <FaPhone size={15} />
                  <span className="">+2347055577074</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <hr className="" />
          <p className="py-5 text-xs text-center  ">
            Copyright &copy;Kedi Pharma {new Date().getFullYear()} <br />
            <span className="">All rights reserved.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
