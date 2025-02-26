import { Link } from "react-scroll"

export default function Footer() {
  return (
    <footer className="bg-customBlue1 dark:bg-gray-900 w-full" id="aboutUs">
      <div className="mx-auto w-full flex flex-col justify-center items-center">
        <div className="grid gap-40 px-4 py-6 lg:py-8 sm:grid-cols-4 grid-cols-2 justify-between">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
          Logo
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
              <p className=" hover:text-[#B1C1B7]">
              Suez, Egypt
              </p>
              </li>
              <li className="mb-4">
              <p className="hover:text-[#B1C1B7]">
              support@smarthome.com
              </p>
              </li>
              <li className="mb-4">
              <p className=" hover:text-[#B1C1B7]">
              +20 111-235-6412
              </p>
              </li>
          </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
          Services
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <Link className="hover:underline hover:text-[#B1C1B7] cursor-pointer"
            to="energyMonitoring"
            smooth={true}
            duration={300}>
              Monitoring
            </Link>
          </li>
          <li className="mb-4">
            <Link className="hover:underline hover:text-[#B1C1B7] cursor-pointer"
            to="energyOptimization"
            smooth={true}
            duration={300}>
              Optimization
            </Link>
          </li>
          <li className="mb-4">
          <Link className="hover:underline hover:text-[#B1C1B7] cursor-pointer"
            to="energyControl"
            smooth={true}
            duration={300}>
              Automation
            </Link>
          </li>
          <li className="mb-4">
          <Link className="hover:underline hover:text-[#B1C1B7] cursor-pointer"
            to="energySuggestions"
            smooth={true}
            duration={300}>
            Suggestion
            </Link>
          </li>
          <li className="mb-4">
          <Link className="hover:underline hover:text-[#B1C1B7] cursor-pointer"
            to="energyVisualization"
            smooth={true}
            duration={300}>              
            Visualization
            </Link>
          </li>
          <li className="mb-4">
          <Link className="hover:underline hover:text-[#B1C1B7] cursor-pointer"
            to="energySecurity"
            smooth={true}
            duration={300}>              
            Protection
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
          Company
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
          <Link className="hover:underline hover:text-[#B1C1B7] cursor-pointer"
            to="homeSection"
            smooth={true}
            duration={300}>              
            Home
            </Link>
          </li>
          <li className="mb-4">
          <Link className="hover:underline hover:text-[#B1C1B7] cursor-pointer"
            to="serviceSection"
            smooth={true}
            duration={300}>              
            Services
            </Link>
          </li>
          <li className="mb-4">
          <Link className="hover:underline hover:text-[#B1C1B7] cursor-pointer"
            to="pricingSection"
            smooth={true}
            duration={300}>              
            Pricing
            </Link>
          </li>
          <li className="mb-4">
          <Link className="hover:underline hover:text-[#B1C1B7] cursor-pointer"
            to="testimonialSection"
            smooth={true}
            duration={300}>              
            Testimonials
            </Link>
          </li>
          <li className="mb-4">
          <Link className="hover:underline hover:text-[#B1C1B7] cursor-pointer"
            to="aboutUs"
            smooth={true}
            duration={300}>               
            Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
          Our Social Media
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="#" className="hover:underline hover:text-[#B1C1B7]">
              Instagram
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline hover:text-[#B1C1B7]">
              Facebook
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline hover:text-[#B1C1B7]">
              Twitter
            </a>
          </li>
        </ul>
        <div>
<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 w-full">© 2024 <a href="https://flowbite.com/" className="hover:underline"></a>. All Rights Reserved.
    </span>
    </div>
      </div>
      {/* <div>
        <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Join a Newsletter</h2>
        <>
  <label
    htmlFor="input-group-1"
    className="block mb-2 text-sm font-medium text-white dark:text-white"
  >
    Your Email
  </label>
  <div className="relative mb-6">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 16"
      >
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
      </svg>
    </div>
    <input
      type="text"
      id="input-group-1"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-customBlue4 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="email@gmail.com"
    />
  </div>
</>
<button
  type="button"
  className="text-white bg-customBlue4 hover:bg-gradient-to-br focus:ring-4 focus:outline-none hover:bg-[#B1C1B7] dark:focus:ring-blue-800 rounded-lg text-sm px-7 py-2.5 text-center me-2 mb-2"
>
  Send
</button>

    </div> */}
    </div>
    </div>
</footer>
  )
}
