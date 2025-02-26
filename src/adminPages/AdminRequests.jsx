import Avatar  from "../assets/Avatar.png";
import AdminSideBar from "../components/layout/AdminSideBar";
import { useNavigate } from "react-router-dom";
export default function AdminRequests() {
    const requests = [
        {
            id: 1,
            img: Avatar,
            fullName: "Fatma Gamal",
            subject: "Support"
        },
        {
            id: "..",
            img: Avatar,
            fullName: "Fatma Gamal",
            subject: "Home Creation"
        },
    ]
    const nav = useNavigate()
    const handleNavigation = (subject) =>{
      if(subject === "Home Creation"){
        nav("/admin-create")
      }
      else{
        nav("/view-req")
      }
    }
  return (
        <div className="flex flex-col md:flex-row min-h-screen overflow-y-hidden">
            <div className="hidden md:block">
          <AdminSideBar />
          </div>

          <div className="flex flex-col flex-1 p-4 md:p-6 md:ml-64">
            <div className="mt:5 sm:mt-20 flex justify-between items-center mb-4 md:mb-8">
              <p className="text-2xl font-semibold">Requests</p>
              <p className="text-md font-semibold">NO.Requests: </p>
            </div>
    
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 p-4 md:p-6 rounded-lg shadow-2xl drop-shadow-2xl">
                <thead className="text-xs text-customBlue1 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                  <tr>
                    <th scope="col" className="px-6 py-3">Home ID</th>
                    <th scope="col" className="px-6 py-3">Requested By</th>
                    <th scope="col" className="px-6 py-3">Subject</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                    {requests.map((ele, index)=>(
                  <tr key={index} className=" dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b dark:border-gray-700 text-white text-center">
                  <th scope="row" className="px-6 py-4 font-medium dark:text-white">
                    {ele.id}
                  </th>
                  <td className="px-6 py-4 flex justify-center items-center gap-x-2"><img className="w-11 h-11 rounded-full bg-white" src={ele.img} alt="" /> <span>{ele.fullName}</span></td>
                  <td className="px-6 py-4">{ele.subject}</td>
                  <td className="px-6 py-4">
                    <button onClick={()=>handleNavigation(ele.subject)}
                    href="#" className="font-medium text-customBlue1 hover:text-customBlue3 dark:text-blue-500 transition-transform duration-500 hover:scale-105 bg-white rounded-lg px-5 py-1">
                      Go To
                    </button>
                  </td>
                </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
  )
}
