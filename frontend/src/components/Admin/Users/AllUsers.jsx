import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAsync } from "../../../features/adminInfoSlice";
import { getAllUsersDataAsync } from "../../../features/UsersSlice";

const AllUsers = () => {
  const dispatch = useDispatch();
  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Software engineer",
      salary: "$100K",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Product designer",
      salary: "$90K",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Front-end developer",
      salary: "$80K",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Laravel engineer",
      salary: "$120K",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Open source manager",
      salary: "$75K",
    },
  ];

  const userData = useSelector((state) => state.users.userData);
  // console.log("userData", userData);

  useEffect(() => {
    dispatch(getAllUsersDataAsync());
  }, []);

  return (
    <div className="py-10 px-4 md:px-8 rounded-md bg-white">
      <div className="items-start justify-between md:flex">
        <div className="max-w-2xl">
          <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
            USERS{" "}
            <span className="text-lg font-normal">
                ({userData.length})
              </span>
          </h3>
        </div>
        <div className="mt-3 md:mt-0">
          {/* ------------- SEARCH BAR ------------- */}
          <input
            type="text"
            placeholder="Search..."
            className=" ml-4 border text-black border-gray-500 w-72 rounded-lg px-4 py-2 focus:outline-none"
            // value={searchQuery}
            // onChange={handleSearch}
          />
        </div>
      </div>
      <div className="mt-12 shadow-sm rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-md text-left">
          <thead className="text-[#242435] bg-[#F7F7F7] font-medium border-b">
            <tr>
              <th className="py-4 px-6 text-lg font-medium">Username</th>
              <th className="py-4 px-6 text-lg font-medium">Phone</th>
              <th className="py-4 px-6 text-lg font-medium">Position</th>
              <th className="py-4 px-6 text-lg font-medium">Salary</th>
              <th className="py-4 px-6 text-lg font-medium"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {userData.map((item, idx) => (
              <tr key={idx}>
                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/profile-pic.png?v=1704625675" className="w-10 h-10 rounded-full" />
                  <div>
                    <span className="block text-gray-700 text-md font-medium">
                      {item.name}
                    </span>
                    <span className="block text-gray-700 text-sm">
                      {item.email}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">03324700802</td>
                <td className="px-6 py-4 whitespace-nowrap">Developer</td>
                <td className="px-6 py-4 whitespace-nowrap">6541653</td>
                {/* <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="javascript:void()"
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </a>
                  <button
                    href="javascript:void()"
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
