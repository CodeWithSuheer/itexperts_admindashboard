import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllClientsDataAsync } from "../../../features/UsersSlice";

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

  const clientsData = useSelector((state) => state.users.clientsData);
  console.log("clientsData", clientsData);

  useEffect(() => {
    dispatch(getAllClientsDataAsync())
  }, []);

  return (
    <div className="py-10 px-2 md:px-5 rounded-md bg-white">
      <div className="items-start justify-between md:flex">
        <div className="max-w-2xl">
          <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
            CLIENTS{" "}
            <span className="text-lg font-normal">
                ({clientsData.length})
              </span>
          </h3>
        </div>
        <div className="mt-3 md:mt-0">
          {/* ------------- SEARCH BAR ------------- */}
          {/* <input
            type="text"
            placeholder="Search..."
            className=" ml-4 border text-black border-gray-500 w-72 rounded-lg px-4 py-2 focus:outline-none"
          /> */}
        </div>
      </div>
      <div className="mt-12 shadow-sm rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-md text-left">
          <thead className="text-[#242435] bg-[#F7F7F7] font-medium border-b">
            <tr>
              <th className="py-4 px-2 text-lg font-medium">Sr. </th>
              <th className="py-4 px-6 text-lg font-medium">Name</th>
              <th className="py-4 px-6 text-lg font-medium">Date</th>
              <th className="py-4 px-6 text-lg font-medium">Customer Id</th>
              <th className="py-4 px-6 text-lg font-medium">Company</th>
              <th className="py-4 px-6 text-lg font-medium">Phone</th>
              <th className="py-4 px-6 text-lg font-medium">City</th>
              <th className="py-4 px-6 text-lg font-medium">Postal Code</th>
              <th className="py-4 px-6 text-lg font-medium"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {clientsData.map((data, idx) => (
              <tr key={idx}>
                    <td td className="pr-3 py-4 text-lg pl-3">{idx + 1}</td>
                    <td className="gap-x-3 px-6 whitespace-nowrap">
                      <span className="text-gray-700 text-md font-medium capitalize">
                        {`${data.firstName || ''} ${data?.lastName || ''}`}
                      </span>{" "}
                      <br />
                      <span className="text-gray-700 text-sm">{data?.email || ''}</span>
                    </td>
                    <td className="pr-3 py-3 text-lg pl-6">{new Date(data.createdAt).toLocaleDateString()}</td>
                    <td className="pr-3 py-3 text-lg pl-6">{data?.customerId || ''}</td>
                    <td className="pr-6 py-3 text-lg pl-6">{data?.companyName || ''}</td>
                    <td className="pr-6 py-3 text-lg pl-6">{data?.phoneNumber || ''}</td>
                    <td className="pr-6 py-3 text-lg pl-6">{data?.city || ''}</td>
                    <td className="pr-6 py-3 text-lg pl-6">{data?.postalCode || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
