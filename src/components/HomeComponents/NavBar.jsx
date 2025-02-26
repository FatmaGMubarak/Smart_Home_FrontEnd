import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../../assets/Logo.png";

export default function NavBar() {
  const links = [
    {
      name:"Home",
      id:"homeSection",
    },
    {
      name:"Services",
      id:"serviceSection",
    },
    {
      name:"Pricing",
      id:"pricingSection",
    },
    {
      name:"Testimonials",
      id:"testimonialSection",
    },
    {
      name:"About Us",
      id:"aboutUs",
    },
  ]
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("homeSection");

  return (
    <nav className="bg-gradient-to-r from-[#021928] to-[#042a43] dark:bg-gray-900 w-full h-[10%] dark:border-gray-600 z-10 top-0 left-0 fixed">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <img className="h-10" src={logo} alt="" />
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={() => navigate("/role")}
            className="text-white bg-customBlue3 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-10 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer hover:bg-[#A46E3D]"
          >
            Login
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={300}
                  spy={true}
                  onSetActive={() => setActiveSection(item.id)}
                  className={`block py-2 px-3 rounded cursor-pointer transition-colors duration-300 ${
                    activeSection === item.id ? "text-[#A46E3D]" : "text-customBlue5"
                  } hover:text-[#A46E3D]`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
