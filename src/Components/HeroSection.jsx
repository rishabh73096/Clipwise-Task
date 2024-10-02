import NavBar from "./NavBar.jsx"
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { SlMouse } from "react-icons/sl";
import { AiFillCaretDown } from "react-icons/ai";

const HeroSection = () => {
  return (
    <>
      <section className="terrabg ">
        <NavBar />
        <div className="flex md:flex-row justify-between p-10 px-14">
          <div className="mt-10 relative z-10"> {/* Use z-index for this section */}
            <h2 className="text-[35px] text-gray-100">
              Welcome to
              <h2 className="text-[55px] font-semibold text-gray-100">
                Pop Rock Crystal Shop!
              </h2>
            </h2>
            <p className="mt-4 text-gray-900 text-[16px] w-[400px]">
              Here you will find unique phone accessories, crystals, jewelry,
              and more. Free shipping inside the U.S. and our phone grips come
              with a limited warranty. Enjoy!
            </p>

            <div className="mt-6">
              <button className="bg-white text-gray-700 font-semibold p-3 px-8 shadow hover:bg-white transition duration-500 rounded-2xl text-[14px]">
                SHOP NOW
              </button>
              <button className="navbar font-semibold p-3 px-8 outline-none transition text-[14px]">
                About Us
              </button>
            </div>
          </div>

          <div className="flex justify-center bg-gray-100 rounded-[40px] hover:border-red-700 hover:cursor-pointer w-[450px] h-[450px] relative z-10 ">
            <div className=" relative z-10">
              <img
                src="/crystal.png"
                alt="Crystal Agate Phone Grip"
                className="pt-10 w-[302px] h-[312px] rounded-lg"
              />
              <p className="left-2 text-gray-400 font-semibold rounded p-2 text-center m-5">
                CRYSTAL AGATE PHONE GRIP - $18.99
              </p>
            </div>
          </div>

        </div>
        <div className="flex items-center justify-between w-[250px] absolute left-[70%] space-x-1 ">
          <span>
            <FaArrowLeft className="text-white w-7 h-7 arrow rounded-md p-2" />
          </span>
          <div className="flex space-x-3">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${index === 0 ? "bg-[#8A93E5]" : "bg-gray-400 border "
                  }`}
              ></div>
            ))}
          </div>
          <span>
            <FaArrowRight className="text-white w-7 h-7 p-2 arrow rounded-md font-bold" />
          </span>
        </div>

        <div className="mt-10 flex justify-center space-x-3">
          <div className="flex flex-col">
            <SlMouse className="text-xl text-gray-600" />
            <AiFillCaretDown className="text-[7px] ml-[6px] mt-2 text-gray-600" />
          </div>
          <p className="text-center text-black font-semibold text-[14px] text-gray-500">
            scroll down
          </p>
        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absoulute bottom-0">
        <path fill="#26a6fc" fillOpacity="1" d="M0,320L60,288C120,256,240,192,360,192C480,192,600,256,720,272C840,288,960,256,1080,202.7C1200,149,1320,75,1380,37.3L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </>
  );
};

export default HeroSection;
