import AboutCard from "./AboutCard";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center mt-[10%]">
      <AboutCard />
      <div className="flex justify-center mt-8">
        <div className="w-[744px] h-[744px] rounded-full bg-slate-400 flex items-center justify-center">
          <div className="bg-red-500 rounded-full w-[570px] h-[570px] flex items-center justify-center">
            <div className="bg-black rounded-full w-[364px] h-[364px] flex items-center justify-center p-4">
              <img
                src="/crystal.png"
                className="w-[248px] h-[248px]"
                alt="Crystal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
