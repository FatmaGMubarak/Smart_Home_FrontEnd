import Avatar from "../assets/Avatar.png";
import AdminSideBar from "../components/layout/AdminSideBar";

export default function AdminUsers() {
  const users = [
    {
      id: 1,
      img: Avatar,
      fullName: "Fatma Gamal",
      email: "fatmagmoubarak@gmail.com",
      mobile: "+20 1096890544",
    },
    {
      id: 2,
      img: Avatar,
      fullName: "Fatma Gamal",
      email: "fatmagmoubarak@gmail.com",
      mobile: "+20 1096890544",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-y-hidden">
      <div className="hidden md:block">
        <AdminSideBar />
      </div>

      <div className="flex flex-col flex-1 p-4 md:p-6 md:ml-64">
        <div className="mt:5 sm:mt-20 flex justify-between items-center mb-4 md:mb-8">
          <p className="text-xl md:text-2xl font-semibold">Users</p>
          <p className="text-sm md:text-md font-semibold">NO.Users:</p>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 p-4 md:p-6 rounded-lg shadow-2xl drop-shadow-2xl">
            <thead className="text-xs text-customBlue1 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
              <tr>
                <th scope="col" className="px-4 md:px-6 py-3">Home ID</th>
                <th scope="col" className="px-4 md:px-6 py-3">Photo</th>
                <th scope="col" className="px-4 md:px-6 py-3">User Name</th>
                <th scope="col" className="px-4 md:px-6 py-3">Email</th>
                <th scope="col" className="px-4 md:px-6 py-3">Mobile</th>
                <th scope="col" className="px-4 md:px-6 py-3">View</th>
              </tr>
            </thead>
            <tbody>
              {users.map((ele, index) => (
                <tr key={index} className="dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b dark:border-gray-700 text-white text-center">
                  <th scope="row" className="px-4 md:px-6 py-4 font-medium dark:text-white">{ele.id}</th>
                  <td className="px-4 md:px-6 py-4">
                    <img className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white" src={ele.img} alt="" />
                  </td>
                  <td className="px-4 md:px-6 py-4">{ele.fullName}</td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">{ele.email}</td>
                  <td className="px-4 md:px-6 py-4">{ele.mobile}</td>
                  <td className="px-4 md:px-6 py-4">
                    <button
                      href="#"
                      className="font-medium text-customBlue1 hover:text-customBlue3 transition-transform duration-500 hover:scale-105  dark:text-blue-500 bg-white rounded-lg px-3 py-1 md:px-5"
                    >
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
  );
}
