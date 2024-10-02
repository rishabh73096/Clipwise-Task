import { IoBasket } from "react-icons/io5";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar text-white flex items-center justify-between p-8">
        <div className="text-white text-[20px] font-semibold">
          Pop Rock Crystal
        </div>

        {/* Hamburger Menu for Small Devices */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <GiHamburgerMenu className="w-6 h-6" />
        </div>

        <div className={`flex items-center ${isOpen ? 'flex-col absolute top-16 left-0 w-full bg-[#26a6fc] p-4 md:flex-row md:static md:p-0' : 'hidden md:flex'}`}>
          <ul className="flex space-x-6  text-white mr-10 md:mr-0">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Help</li>
          </ul>

          <div className="ml-20 flex items-center">
            <p className="text-white font-bold bg-00 w-5 h-5 flex items-center justify-center rounded-full text-[10px]">
              00
            </p>
            <IoBasket className="w-7 h-8 text-white ml-1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
