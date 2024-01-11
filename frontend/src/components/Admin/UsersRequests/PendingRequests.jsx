import { useEffect, useState } from "react";
import { Modal, Button } from "keep-react";
import {  Trash } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { authorizeUserAsync, getAllUsersAsync, rejectUserAsync } from "../../../features/adminInfoSlice";

const PendingRequests = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersAsync());
  }, [dispatch]);
  const allUsers = useSelector((state) => state.adminInfo.allUsers).filter(
    (ele) => !ele.isAuthenticated
  );
  
  const handleApprove = (id) => {
    dispatch(authorizeUserAsync(id))
    .then(()=>{dispatch(getAllUsersAsync())})
  };

  const handleDelete = (id) => {
    dispatch(rejectUserAsync(id))
    .then(()=>{dispatch(getAllUsersAsync())})
  }
 
  return (
    <>
      <div className="py-10 px-4 md:px-8 rounded-md bg-white">
        <div className="items-start justify-between md:flex">
          <div className="max-w-4xl">
            <h3 className="text-gray-800 text-2xl font-semibold tracking-wide sm:text-3xl underline decoration-red-500 underline-offset-8">
              PENDING REQUESTS
            </h3>
            <p className="text-gray-700 text-lg mt-4">
              Here you can view and manage the pending requests from users who
              are awaiting approval to join the platform.
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
                {/* <th className="py-3 pr-6 text-lg">Role</th> */}
                <th className="py-3 pl-2 text-lg">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {allUsers.map((data, index) => (
                <tr key={index}>
                  <td className="pr-6 py-4 text-lg">{index + 1}</td>
                  <td className="pr-6 py-4 text-lg">{data.name}</td>
                  <td className="pr-6 py-4 text-lg">{data.email}</td>
                  {/* <td className="pr-6 py-4 text-lg">{data.role}</td> */}
                  <td className="whitespace-nowrap">
                    <button  onClick={()=>handleApprove(data._id)}  className="inline-block rounded-lg bg-gray-700 px-4 py-2.5 mx-1 text-md font-medium text-white focus:outline-none focus:ring active:bg-indigo-500">
                      Approved
                    </button>

                    <button
                      onClick={()=>handleDelete(data._id)}
                      className="inline-block rounded-lg border border-red-600 bg-red-600 text-white px-4 py-2.5 mx-1 text-md font-medium transition  focus:outline-none focus:ring active:bg-red-500"
                    >
                      Reject
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

export default PendingRequests;
