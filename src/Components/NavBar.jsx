import { IoBasket } from "react-icons/io5";

const NavBar = () => {
  return (
    <>
      <div className="navbar text-white flex items-center justify-between p-8">
        <div className="text-white text-[20px] font-semibold">
          Pop Rock Crystal
        </div>
        <div className="flex items-center ">
          <ul className="flex space-x-6 text-white mr-10">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Help</li>
          </ul>
          <div className="ml-20 flex items-center">
              <p className="text-white font-bold bg-00 w-5 h-5 flex items-center justify-center rounded-full text-[10px] ">
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
