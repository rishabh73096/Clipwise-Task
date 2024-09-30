const AboutCard = () => {
  return (
    <div className="max-w-sm h-[350px] mx-auto bg-white rounded-lg shadow-lg p-6 text-right">
      <h2 className="text-lg font-semibold text-gray-700">BEST PRICE</h2>
      <h1 className="text-2xl font-bold text-gray-800 my-2">Agate Phone Grip</h1>
      <div className="flex justify-end space-x-2 mb-4">
        <span className="text-lg line-through text-red-500">44.50$</span>
        <span className="text-xl font-bold text-gray-800">19.50$</span>
      </div>
      <p className="text-gray-600 mb-4">
        These Pop Rocks grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holidays, etc.! Just gently squeeze the sides to remove and swap out with another color and design.
      </p>
      <button className="bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition">
        BUY NOW
      </button>
    </div>
  );
};

export default AboutCard;
