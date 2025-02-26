import UserSideBar from "../components/layout/UserSideBar";
import houseIcon from "../assets/dashHouse.png";
import snowFlake from "../assets/rb_16543.png";
import EnergyGraph from "../components//DashComponents/EnergyGraph";
import DashCards from "../components//DashComponents/DashCards";
import DateTime from "../components/DashComponents/DateTime";
import TemperatureDisplay from "../components/DashComponents/TemperatureDisplay";
import { getUser } from "../store/reducers/userSlice";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
export default function DashBoard() {
  const user = useSelector((state)=>state.user.user)
  const homeID = user?.home?._id.match(/.{1,4}/g).join('-')
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUser())
  },[dispatch])
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <div className="relative flex-grow w-full">
        <UserSideBar />

        <div className="absolute bg-[#073552] right-0 sm:top-28 sm:w-[20%] md:w-[25%] top-28 w-[75%] h-auto rounded-lg flex items-center text-white p-4 shadow-lg ">
          <img
            src={houseIcon}
            alt="ID Card"
            width={60}
            height={60}
            className="mr-4 transform and scale-x-[-1]"
          />
          <div className="flex flex-col justify-center items-start flex-1">
            <p className="text-lg font-semibold">Residence</p>
            <p className="text-sm">{user?.fullName}'s residence</p>
          </div>
        </div>

        <div className="absolute bg-[#073552] -right-3 sm:right-0 md:-right-1 top-56 sm:top-60 md:top-64 w-[40%] sm:w-[20%] md:w-[16%] h-auto rounded-2xl flex flex-col sm:flex-col md:flex-col sm:flex-1 items-center text-white p-4 shadow-lg">
          <div className="flex justify-start items-center gap-x-3">
            <div className="flex items-center gap-x-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
              >
                <path
                  d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <p className="text-lg font-semibold">{user?.home?.address || ""}</p>
              </div>
            </div>
            <div className="flex">
              <img src={snowFlake} alt="" width={40} height={40} />
            </div>
          </div>
          <TemperatureDisplay/>
            <DateTime/>
        </div>
      </div>

      {/* Centered Graph */}
      <div className="flex justify-start sm:justify-center md:justify-center items-center mt-24 sm:mt-7 w-full px-4 sm:px-8 md:ml-16">
        <EnergyGraph />
      </div>

      {/* Dash Cards */}
      <div className="flex flex-grow justify-center items-center sm:items-center sm:px-8 md:px-16 w-full ml-0 sm:ml-0 md:ml-32 mt-8 ">
        <DashCards />
      </div>
    </div>
  );
}
