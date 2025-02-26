import UserSideBar from "../components/layout/UserSideBar";
import Avatar from "../assets/Avatar.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function UserRequest() {
  return (
    <div className="flex h-screen">
      <UserSideBar />
      <div className="flex flex-grow justify-center items-center  ml-0  md:ml-64 sm:ml-52 mt-20">
        <form className="w-auto sm:w-[60%] bg-[#083E61] p-6 rounded-lg shadow-[0px_10px_30px_rgba(0,0,0,0.4)] drop-shadow-2xl bg-opacity-20">
            <h1 className="flex justify-center items-center text-2xl mb-8 font-semibold">Support</h1>
          <div className="relative z-0 w-full mb-5 grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="floating_pic"
              className="text-lg text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
            >
              Profile Picture:
            </label>
            </div>
            <div className="w-14 text-sm bg-white rounded-full focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-600">
            <img
                  className="w-14 h-14 rounded-full"
                  src={Avatar}
                  alt="user photo"
                  crossOrigin="anonymous"
                />
                            </div>
          </div>
          <div className="relative z-0 w-full mb-5 grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="floating_name"
              className="text-lg text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
            >
              Full Name:
            </label>
            </div>
            <div>
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              className="w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-customBlue1 peer"
              placeholder=" "
              required
            />
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="floating_email"
              className="text-lg text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
            >
              Email:
            </label>
            </div>
            <div>
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:ring-0 focus:border-customBlue1 peer"
              placeholder=" "
              required
            />
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="floating_address"
              className="text-lg text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
            >
              Home Address:
            </label>
            </div>
            <div>
            <input
              type="text"
              name="floating_address"
              id="floating_address"
              className="w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-customBlue1 focus:outline-none focus:ring-0 focus:border-customBlue1 peer"
              placeholder=" "
              required
            />
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 grid grid-cols-2 gap-4">
            <div>
          <label
    htmlFor="message"
    className="block mb-2 text-lg font-medium text-white dark:text-white"
  >
    Your message:
  </label>
  </div>
  <div>
  <textarea
    id="message"
    rows={4}
    className="block p-2.5 w-full text-sm text-white bg-transparent  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Need help?"
    defaultValue={""}
  />
  </div>
          </div>

<div className="flex justify-center items-center ">
          <button
            type="submit"
            className="text-white bg-customBlue1 hover:bg-customBlue3 transition-transform duration-500 hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send <FontAwesomeIcon icon={faArrowRight} />

          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
