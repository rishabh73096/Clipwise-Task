import "../index.css";

const AboutSection = () => {
  return (
    <div className="flex justify-center bottom-16 rounded-full outer-gola relative z-0 ">
      <div className="w-[624px] h-[624px] rounded-full bg-white flex items-center justify-center opacity-1">
        <div className="bg-white rounded-full w-[460px] h-[460px] flex items-center justify-center shadow-md inner-gola opacity-1 relative z-10">
          <div className="bg-white rounded-full w-[295px] h-[295px] flex items-center justify-center p-4 shadow-md inner-gola ">
            <img
              src="/crystal.png"
              className="w-[218px] h-[218px]"
              alt="Crystal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
