import LogOut from "../../assets/logout.png";
import { Link,useNavigate,useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../../store/reducers/authSlice";
import Modal from "../Confirm/Modal";
import { getUser } from "../../store/reducers/userSlice";
import { useEffect,useState } from "react";
import notify from "../../hooks/useNotification"
import logo from "../../assets/Logo.png"
export default function SideBar() {
  const user = useSelector((state)=>state.user.user)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isImageError, setIsImageError] = useState(false);
  const dispatch = useDispatch()
  const nav = useNavigate()
  const locate = useLocation()

  const handleLogOut = () => {
    setIsModalOpen(true);
  };
  const confirmLogout = () => {
    dispatch(logout());
    notify("you Logged out successfully", "success");
    nav("/");
  };

  const cancelLogOut = () => {
    setIsModalOpen(false);
  };

  useEffect(()=>{
    dispatch(getUser())
  },[dispatch])

  const isActive = (path) => location.pathname === path;

  return (
    <>
  <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-[#06273C] to-[#05456e] dark:bg-gray-800 dark:border-gray-700 pb-5 h-20">
    <div className="px-3 py-3 lg:px-3 lg:pl-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start rtl:justify-end gap-5 sm:gap-0">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              />
            </svg>
          </button>
          <a href="https://flowbite.com" className="flex ms-2 md:me-24">
            <img
              src={logo}
              alt="logo"
              className="h-10"
            />
          </a>
          <div className="flex justify-center items-start flex-col sm:flex-row gap-1">
              <h1 className="text-xs sm:text-xl font-semibold">Welcome Back!</h1>
              <h1 className="text-xs sm:text-xl font-semibold">Track Your Home Usage</h1>
              </div>
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown-user"
            >
              <div className="px-4 py-3" role="none">
                <p
                  className="text-sm text-gray-900 dark:text-white"
                  role="none"
                >
                  Neil Sims
                </p>
                <p
                  className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                  role="none"
                >
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>

              <div className="flex justify-end items-ce">
                        <button
                        className=" p-2 rounded-lg text-white hover:bg-[#324D5D] mr-3"
                        >
<svg
  fill="#FFFFFF"
  height="25px"
  width="25px"
  version="1.1"
  id="Capa_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 611.999 611.999"
  xmlSpace="preserve"
  stroke="#FFFFFF"
>
  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier">
    {" "}
    <g>
      {" "}
      <g>
        {" "}
        <g>
          {" "}
          <path d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203 C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578 c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626 h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856 c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626 C581.586,511.664,577.516,503.6,570.107,500.254z M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32 c13.726-17.32,23.407-38.135,30.244-58.866H484.434z M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082 c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826 c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z M306.001,577.485 c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z" />{" "}
          <path d="M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258 c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258 C323.259,126.96,315.532,119.235,306.001,119.235z" />{" "}
        </g>{" "}
      </g>{" "}
    </g>{" "}
  </g>
</svg>
                      </button>
              <button
                type="button"
                className="flex text-sm bg-white rounded-full focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-600"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-12 h-12 rounded-full"
                  src={user?.userProfilePic}
                  alt="user photo"
                  crossOrigin="anonymous"
                />
              </button>
              </div>
            </div>
    </div>

  </nav>
    <aside
        id="logo-sidebar"
        className="fixed top-5 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 mt-10"
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto bg-[#062940] dark:bg-gray-800">
          <div>
            <ul className="space-y-2 mt-10 font-medium">
              <li>
                <Link
                to={"/user-dash"}
                  className={`flex items-center p-2 rounded-lg dark:text-white  dark:hover:bg-gray-700  hover:scale-105 group ${isActive("/user-dash")?
                    "bg-[#324D5D]" : "hover:bg-customBlue1"
                  }`}
                >
                  <svg
                    className="w-5 h-5 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                to={"/user-req"}
                className={`flex items-center p-2 rounded-lg dark:text-white  hover:scale-105 dark:hover:bg-gray-700  group ${isActive("/user-req")?
                  "bg-[#324D5D]" : "hover:bg-customBlue1"
                }`}
              >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clipRule="evenodd" />
  <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
</svg>


                  <span className="flex-1 ms-3 whitespace-nowrap">Requests</span>
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="flex justify-center items-center p-2 rounded-lg text-white hover:bg-[#324D5D] mb-24"
            onClick={handleLogOut}
          >
            <img
              src={LogOut}
              alt="Logout"
              className="w-6 h-6 me-3 transform and scale-x-[-1]"
            />
            <span>Logout</span>
          </button>
          <Modal
            message="Are you sure you want to logout?"
            onConfirm={confirmLogout}
            onCancel={cancelLogOut}
            isOpen={isModalOpen}
          />
        </div>
      </aside>

</>

  )
}
