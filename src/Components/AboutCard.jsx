const AboutCard = () => {
  return (
    <div className="h-[400px] w-[530px] rounded-lg p-2 text-right relative left-[30px] z-10">
      <p className="text-[40px] text1-color">BEST PRICE</p>
      <p className="text-[58px] font-bold text1-color">Agate Phone Grip</p>
      <div className="flex justify-end space-x-2 mb-4">
        <span className="text-[#70b8fb] line-through text-[21px] mt-[37px]">
          44.50$
        </span>
        <span className="text-[58px] text2-color font-bold">19.50$</span>
      </div>
      <div className="w-[385px] text-right ml-auto text-center">  
         <p className="text-gray-600 mb-4 text-color">
        These Pop Rocks grip tops can be swapped with other tops depending on
        your mood, outfit, nails, phone case, holidays, etc.! Just gently
        squeeze the sides to remove and swap out with another color and design.
      </p>
      </div>
     
      <button className="text-white font-semibold py-3 px-10 bg-[#70b8fb] hover:border-[#70b8fb] hover:border-[3px] hover:bg-white hover:text-[#70b8fb] text-[13px] rounded-xl mb-7">
        BUY NOW
      </button>
    </div>
  );
};

export default AboutCard;
