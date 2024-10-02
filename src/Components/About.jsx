import AboutCard from "./AboutCard";
import AboutSection from "./AboutScetion";

const About = () => {
    return (
        <>
            <section className=" mt-14">
                <div className="flex md:flex-row justify-between px-8">
                    <AboutCard />
                    <AboutSection />
                </div>
            </section>

            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="absoulute bottom-0 bg-[#26a6fc]">
                <path fill="#fff" fillOpacity="1" d="M0,320L60,288C120,256,240,192,360,192C480,192,600,256,720,272C840,288,960,256,1080,202.7C1200,149,1320,75,1380,37.3L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </>

    );
}

export default About;
