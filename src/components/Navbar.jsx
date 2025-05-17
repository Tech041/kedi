import { useContext } from "react";
import Container from "./Container";
import { GiHamburgerMenu } from "react-icons/gi";
const liStyles = "hover:cursor-pointer hover:text-orange-500";
import { MdClose } from "react-icons/md";
import Button from "./Button";
import { AppContext } from "../context/AppContext";

const mobileStyle = "cursor-pointer hover:text-green-600 w-[100px]";
const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);
  return (
    <header className=" fixed py-2 h-auto w-full border-b border-gray-400 bg-green-700 z-40 ">
      <Container>
        <div className="flex items-center hover:cursor-pointer">
          {/* logo */}
          <div className="flex-1 flex items-center gap-2 ">
            <img
              src="/logo.png"
              alt=""
              width={30}
              height={30}
              className="w-[30px] h-[30px] rounded-full"
            />
            <span className="text-xs text-white font-bold ">Kedi Pharma</span>
          </div>
          {/* nav links */}
          <nav className=" flex justify-between items-center gap-3 flex-[2] relative">
            <div className="flex-[3] hidden md:block ">
              <ul className="flex justify-center items-center gap-5 text-gray-200">
                <li className={liStyles}>Home</li>
                <li className={liStyles}>About us</li>
                <li className={liStyles}>Benefits</li>
                <li className={liStyles}>Products</li>
                <li className={liStyles}>Contact us</li>
              </ul>
            </div>
            <div className="flex-1 flex  items-center gap-4 justify-end ">
              <Button>Buy Now</Button>

              <div
                onClick={() => setIsOpen((prev) => !prev)}
                className="md:hidden z-40 cursor-pointer"
              >
                {isOpen ? (
                  <MdClose color="white" size={30} />
                ) : (
                  <GiHamburgerMenu size={20} color="white" />
                )}
              </div>
            </div>
          </nav>
          {/* Mobile nav */}
          <nav
            className={`${
              isOpen ? "right-0" : "right-[-100%]"
            } md:hidden absolute  top-0 h-screen  w-[70%] bg-orange-500 transition-all duration-700 ease-out z-30`}
          >
            <ul className="text-white mt-20 pt-10 flex flex-col gap-6 items-center  ">
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                Home
              </li>
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                About Us
              </li>
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                Benefits
              </li>

              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                Products
              </li>

              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                Contact Us
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
