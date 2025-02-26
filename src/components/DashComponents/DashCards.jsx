import bolt from "../../assets/bolt_9694887.png"
import machine from "../../assets/washing-machine_4544133.png"
import people from "../../assets/team_2816179.png"
import { useSelector,useDispatch } from "react-redux";
import { getUser } from "../../store/reducers/userSlice";
import { useEffect } from "react";
export default function DashCards() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  let houseHold = user?.home?.householdSize || ""
    useEffect(()=>{
      dispatch(getUser())
    },[dispatch])
    const card = [
      {
        img: bolt,
        title: "Energy Consumption",
        val: "12KWH",
        unit: "Per Hour",
      },
      {
        img: machine,
        title: "No. Appliances",
        val: "5",
        unit: "Devices",
      },
      {
        img: people,
        title: "HouseHold Size",
        val: `${houseHold}`,
        unit: "People",
      },
    ];
  
    return (
      <div className="flex justify-between items-center gap-6 w-full sm:w-[70%] pr-5 pl-2 sm:pl-0 sm:pr-0">
        {card.map((key, index) => (
          <div
            key={index}
            className="relative w-[30%] sm:w-[25%] bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-6 flex flex-col items-center justify-between h-fit shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-gray-800"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-200 rounded-full   absolute -top-1/4 sm:-top-1/3">
              <img
                className="w-12 h-12"
                src={key.img}
                alt={key.title}
              />
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {key.title}
            </span>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {key.val}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {key.unit}
            </span>
          </div>
        ))}
      </div>
    );
  }
  