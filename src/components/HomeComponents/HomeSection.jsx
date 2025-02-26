import { useState, useEffect } from "react";
import homeLightOn from "../../assets/home-lights-on.png";
import homeLightOff from "../../assets/home-lights-off.png";
import { useNavigate } from "react-router-dom";
export default function HomeSection() {
  const navigate = useNavigate()
  const [isLightOn, setIsLightOn] = useState(false);
  const [bgSize, setBgSize] = useState("800px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBgSize("450px");
      } else if (window.innerWidth >= 640 && window.innerWidth <= 1024) {
        setBgSize("460px");
      } else {
        setBgSize("800px");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLightOn((prevState) => !prevState);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleNavigation = () =>{
    navigate("/app")
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 items-center p-6 sm:p-4 w-full"
      id="homeSection"
    >
      <div className="text-center sm:text-left mb-0 sm:mb-10 mt-36 sm:ml-10">
        <h1 className="font-bold text-3xl md:text-4xl sm:text-2xl mb-6">
          Control Your Home, Anytime, Anywhere
        </h1>
        <p className="text-base sm:text-sm md:text-lg w-full md:w-3/4 mx-auto md:mx-0">
          Experience the Ultimate in Home Automation. Effortlessly Manage Lighting, Security, Temperature, and More with
          Just a Tap on Your Phone Anytime You Need, From Anywhere in the World.
        </p>
        <button
          type="button"
          className="text-white mt-5 bg-[#A46E3D] hover:bg-customBlue3 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-6 md:px-10 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleNavigation}
        >
          Get Started
        </button>
      </div>

      <div
      className="w-full h-[450px] sm:h-[600px] rounded-lg"
      style={{
        backgroundImage: `url(${isLightOn ? homeLightOn : homeLightOff})`,
        backgroundSize: bgSize,
        backgroundPosition: "center",
        transition: "background 5s ease-in-out",
        backgroundRepeat: "no-repeat"
      }}
    ></div>
    </div>
  );
}
