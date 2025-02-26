import avatar from "../assets/Avatar.png"
import bell from "../assets/alarmIcon.svg"
export default function TopBar() {
  return (
<nav className="bg-[#062940] border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-end justify-end mx-auto p-4">
        <button
        className=" p-2 rounded-lg text-white hover:bg-[#324D5D]"
        >
        <img
        src={bell}
        alt="Logout"
        className="w-6 h-6"
        />
      </button>

      <button
        type="button"
        className="flex text-sm bg-white rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-10 h-10 rounded-full"
          src={avatar}
          alt="user photo"
        />
      </button>
      {/* Dropdown menu */}


    </div>

</nav>


  )
}
