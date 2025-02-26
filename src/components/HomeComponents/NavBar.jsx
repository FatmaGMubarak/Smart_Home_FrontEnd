import { useNavigate } from "react-router-dom"
import { Link } from "react-scroll"
import logo from "../../assets/Logo.png"
export default function NavBar() {
    const navigate = useNavigate()
  return (
    <nav className="bg-gradient-to-r from-[#021928] to-[#042a43] dark:bg-gray-900 w-full h-[10%] dark:border-gray-600 z-10 top-0 left-0 fixed">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div>
      <img className="h-10" src={logo} alt="" />
    </div>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
      onClick={()=>navigate("/role")}
        className="text-white bg-customBlue3 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-10 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer hover:bg-[#A46E3D]"
      >
        Login
      </button>
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
    <div
      className=" items-center justify-between hidden w-full md:flex md:w-auto"
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="homeSection"
          smooth={true}
          duration={300}
            className="block py-2 px-3 text-[#A46E3D] rounded md:bg-transparent md:text-[#A46E3D] md:p-0 md:dark:text-blue-500 cursor-pointer"
            aria-current="page"
            
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="serviceSection"
          smooth={true}
          duration={300}
            className="block py-2 px-3 text-customBlue5 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#A46E3D] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="pricingSection"
            className="block py-2 px-3 text-customBlue5 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#A46E3D] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="testimonialSection"
            className="block py-2 px-3 text-customBlue5 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#A46E3D] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="aboutUs"
          smooth={true}
          duration={300}
            className="block py-2 px-3 text-customBlue5 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#A46E3D] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
          >
            About Us
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
