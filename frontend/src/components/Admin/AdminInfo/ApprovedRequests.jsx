import React, { useEffect, useState } from "react";
import { Dropdown } from "keep-react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllUsersAsync,
  rejectUserAsync,
  updateRoleAsync,
} from "../../../features/adminInfoSlice";

const ApprovedRequests = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersAsync());
  }, [dispatch]);
  const approvedUsers = useSelector((state) => state.adminInfo.allUsers).filter(
    (ele) => ele.isAuthenticated && ele.id !== "659d33bad568c4d134b6aed3"
  );

  // HANDLE ROLE UPDATE

  const handleUnauthorize = (id) => {
    dispatch(rejectUserAsync(id)).then(() => {
      dispatch(getAllUsersAsync());
    });
  };

  const handleUpdateRole = (id, superAdmin) => {
    console.log(id, superAdmin);
    dispatch(updateRoleAsync({ id, superAdmin })).then(() => {
      dispatch(getAllUsersAsync());
    });
  };

  const displayRole = (role) => {
    if (role) {
      return <p>Super Admin</p>;
    } else {
      return <p>Admin</p>;
    }
  };

  return (
    <>
      <div className="py-10 px-4 md:px-8 rounded-md bg-white">
        <div className="items-start justify-between md:flex">
          <div className="max-w-4xl">
            <h3 className="text-gray-800 text-2xl font-semibold tracking-wide sm:text-3xl underline decoration-red-500 underline-offset-8">
              ADMINS
            </h3>
            <p className="text-gray-700 text-lg mt-4">
              List of authorized admins.
            </p>
          </div>
          {/* <div className="mt-3 md:mt-0"></div> */}
        </div>
        <div className="mt-12 relative h-max">
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 pr-6 text-lg">Id</th>
                <th className="py-3 pr-6 text-lg">Name</th>
                <th className="py-3 pr-6 text-lg">Email</th>
                <th className="py-3 pr-6 text-lg">Role</th>
                <th className="py-3 pl-2 text-lg">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {approvedUsers.map((data, index) => (
                <tr key={index}>
                  <td className="pr-6 py-4 text-lg">{index + 1}</td>
                  <td className="pr-6 py-4 text-lg">{data.name}</td>
                  <td className="pr-6 py-4 text-lg">{data.email}</td>
                  <td className="pr-6 py-4 text-lg">{displayRole(data.superAdmin)}</td>
                  <td className="whitespace-nowrap flex py-2">
                    <Dropdown
                      label="Update Role"
                      size="sm"
                      dismissOnClick={true}
                      className="bg-gray-700 mx-1 text-white hover:bg-gray-700 hover:text-white"
                    >
                      <Dropdown.Item
                        onClick={() => handleUpdateRole(data.id, true)}
                        className="text-md font-medium hover:bg-gray-300 hover:text-black"
                      >
                        Super Admin
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleUpdateRole(data.id, false)}
                        className="text-md font-medium hover:bg-gray-300 hover:text-black"
                      >
                        Admin
                      </Dropdown.Item>
                    </Dropdown>
                    <button
                      onClick={() => handleUnauthorize(data.id)}
                      className="inline-block rounded-lg bg-red-600 px-4 py-2.5 mx-1 text-md font-medium text-white focus:outline-none focus:ring active:bg-red-500"
                    >
                      Unauthorized
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ApprovedRequests;
