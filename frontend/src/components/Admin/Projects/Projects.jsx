import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllProjectsAsync } from "../../../features/ProjectSlice";
import { useDispatch, useSelector } from "react-redux";

const Projects = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // CALL TO GET ALL INVOICES
  useEffect(() => {
    dispatch(getAllProjectsAsync());
  }, [dispatch]);

  // HERE WE GET DATA USING USESELECTOR FROM STATE
  const ProjectsData = useSelector((state) => state.project.allProjects);
  // console.log("ProjectsData", ProjectsData);

  return (
    <>
      <div className="py-10 px-4 md:px-8 rounded-md bg-white">
        <div className="items-start justify-between md:flex">
          <div className="max-w-4xl">
            <h3 className="text-gray-800 text-2xl font-semibold tracking-wide sm:text-3xl">
              ALL PROJECTS{" "}
              <span className="text-lg font-normal">
                ({ProjectsData.length})
              </span>
            </h3>
          </div>
          <Link
            to="/adminpanel/addProjects"
            className="block py-2.5 px-4 text-white font-medium bg-[#f11900] duration-150 hover:bg-[#f11900] active:bg-red-700 rounded-lg shadow-lg hover:shadow-none"
          >
            Add Project
          </Link>
        </div>

        {/* ------------- TABS ------------- */}
        <div className="my-10 flex justify-start items-center">
          <button
            className="bg-[#F11900] text-white rounded-md mr-5"
            style={{ padding: "8px 25px" }}
          >
            All
          </button>
          <button
            className="bg-white text-black border border-black hover:bg-[#F11900] hover:text-white hover:border-[#f11900] rounded-md mr-5"
            style={{ padding: "8px 25px" }}
          >
            Ongoing Projects
          </button>
          <button
            className="bg-white text-black border border-black hover:bg-[#F11900] hover:text-white hover:border-[#f11900] rounded-md mr-5"
            style={{ padding: "8px 25px" }}
          >
            Complete Projects
          </button>
        </div>

        <div className="mt-12 relative h-max overflow-auto">
          <table className="w-full table-auto text-md text-left overflow-auto">
            <thead className="text-[#242435] bg-[#F7F7F7] font-medium border-b">
              <tr>
                <th className="py-4 px-6 text-lg font-medium">Sr. </th>
                <th className="py-4 px-6 text-lg font-medium">Name</th>
                <th className="py-4 px-6 text-lg font-medium">Project Title</th>
                <th className="py-4 px-6 text-lg font-medium">Customer ID</th>
                <th className="py-4 px-6 text-lg font-medium">Date</th>
                <th className="py-4 px-6 text-lg font-medium">Deadline</th>
                <th className="py-4 px-6 text-lg font-medium">Amount</th>
                <th className="py-4 px-6 text-lg font-medium">Invoice Status</th>
                <th className="py-4 px-6 text-lg font-medium">View Details</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {ProjectsData.map((data, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 ">{idx + 1}</td>
                  <td className="px-6 py-4 ">{data.customerName}</td>
                  <td className="px-6 py-4  text-red-600">{data.projectTitle}</td>
                  <td className="px-6 py-4  text-red-600">{data.customerId}</td>
                  <td className="px-6 py-4 text-md">{new Date(data.startDate).toLocaleDateString()}</td>
                  <td className="px-6 py-4 ">{new Date(data.Deadline).toLocaleDateString()}</td>
                  <td className="px-6 py-4 ">{data.amount}</td>
                  <td className="pl-6 py-4">
                    <span className={`px-5 py-2 rounded-full capitalize font-semibold text-sm ${
                      data.paymentStatus === "unpaid"
                        ? "text-red-600 bg-red-50"
                        : data.paymentStatus === "paid"
                        ? "text-blue-600 bg-blue-50"
                        : data.paymentStatus === "partially paid"
                        ? "text-yellow-600 bg-yellow-50"
                        : ""
                        }`}>
                        {data.paymentStatus}
                    </span>     
                      </td>
                  <td className="px-6 py-4">
                    <Link to={`/adminpanel/projectdetails/${data.id}`} onClick={()=>window.scroll(0,0)} className="bg-[#f11900] text-white px-4 py-2.5 rounded-lg">
                      View Details
                    </Link>
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

export default Projects;
