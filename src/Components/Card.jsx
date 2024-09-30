import CardItem from "./CardItem";
import "../index.css";
import { AiFillCaretDown } from "react-icons/ai";

const Card = () => {
  return (
    <div className="mt-20 p-1">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-600">All Products</h1>
      <div className="flex flex-wrap justify-start items-center gap-[90px] mb-6 mx-11">
        <span className=" text-[14px] font-semibold text-gray-300 flex items-center text-gray-600">
          Filter: <span className="ml-2 font-bold text-gray-600"> All Products </span>  <AiFillCaretDown className="ml-1 text-gray-600" />
        </span>
        <span className="flex items-center text-gray-300 font-semibold text-[14px]">
          Sort: <span className="ml-3 font-bold  text-gray-600"> Best Selling </span> <AiFillCaretDown className="ml-1  text-gray-600" />
        </span>
      </div>

      <div className="flex flex-wrap justify-center ">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>

      <div className="flex justify-center mt-8">
        <button className="border-[#70b8fb] border-[2px] text-[#70b8fb] hover:text-white font-semibold py-2 px-8 rounded hover:bg-[#70b8fb] text-[12px] rounded-xl mb-7">
          View All
        </button>
      </div>
    </div>
  );
};

export default Card;
