const CardItem = () => {
    return (
      <div className="w-[272px] h-[348px] rounded overflow-hidden shadow-lg p-1 bg-white m-2 transform transition-transform duration-300 hover:scale-102 flex flex-col items-center mb-4 rounded-3xl ga">
        <img src="/crystal.png" alt="Crystal Agate Phone Grip  " className=" rounded-lg mb-1 w-[178px] h-[178px]" />
        <p className="text-lg text-gray-600 mb-2 text-center uppercase">Crystal Agate Phone Grip</p>
        <p className="text-lg text-gray-900 mb-4 font-bold text-center">$18.99</p>
        <button className="border-[#70b8fb] border-[3px] text-[#70b8fb] hover:text-white font-semibold py-3 px-10 rounded hover:bg-[#70b8fb] text-[12px] rounded-xl mb-7">
          BUY NOW
        </button>
      </div>
    );
  };
  
  export default CardItem;
  