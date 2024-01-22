import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllProjectsAsync } from "../../../features/ProjectSlice";
import { useDispatch, useSelector } from "react-redux";

const Projects = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("all");

  // CALL TO GET ALL INVOICES
  useEffect(() => {
    dispatch(getAllProjectsAsync());
  }, [dispatch]);

  // HERE WE GET DATA USING USESELECTOR FROM STATE
  const ProjectsData = useSelector((state) => state.project.allProjects);
  // console.log("ProjectsData", ProjectsData);

  const [filteredProjects, setFilteredProjects] = useState(ProjectsData);

  const handleOngoingFilter = () => {
    const onGoingProjects = ProjectsData.filter((item) => !item.completed);
    setFilteredProjects(onGoingProjects);
    setActiveTab("ongoingProject");
  };
  const handleCompletedFilter = () => {
    const completedProjects = ProjectsData.filter((item) => item.completed);
    setFilteredProjects(completedProjects);
    setActiveTab("completedProject");
  };
  const handleAllProjectFilter = () => {
    setFilteredProjects(ProjectsData);
    setActiveTab("all");
  };

  useEffect(() => {
    setFilteredProjects(ProjectsData);
  }, [ProjectsData]);

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
          <div className="">
            <Link
              to="/adminpanel/addProjects"
              className="block py-2.5 px-4 text-white font-medium bg-[#f11900] duration-150 hover:bg-[#f11900] active:bg-red-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Add Project
            </Link>
          </div>
        </div>

        {/* ------------- TABS ------------- */}
        <div className="my-8 flex justify-between items-center">
          <div className="my-1 flex justify-start items-center">
            <button
              className={`${
                activeTab === "all"
                  ? "bg-[#F11900] text-white"
                  : "bg-white text-black border border-black hover:bg-[#F11900] hover:text-white hover:border-[#f11900]"
              } rounded-md mr-5`}
              style={{ padding: "8px 25px" }}
              onClick={handleAllProjectFilter}
            >
              All
            </button>
            <button
              className={`${
                activeTab === "ongoingProject"
                  ? "bg-[#F11900] text-white"
                  : "bg-white text-black border border-black hover:bg-[#F11900] hover:text-white hover:border-[#f11900]"
              } rounded-md mr-5`}
              style={{ padding: "8px 25px" }}
              onClick={handleOngoingFilter}
            >
              Ongoing Projects
            </button>
            <button
              className={`${
                activeTab === "completedProject"
                  ? "bg-[#F11900] text-white"
                  : "bg-white text-black border border-black hover:bg-[#F11900] hover:text-white hover:border-[#f11900]"
              } rounded-md mr-5`}
              style={{ padding: "8px 25px" }}
              onClick={handleCompletedFilter}
            >
              Complete Projects
            </button>
          </div>

          {/* ------------- SEARCH BAR ------------- */}
          <div className="search_bar mr-1">
            <div class="relative mt-4 md:mt-0">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  class="w-5 h-5 text-red-600"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>

              <input
                type="text"
                //value={searchQuery}
                //onChange={handleSearch}
                class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-[#D9D9D9] rounded-lg focus:border-red-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300"
                placeholder="Search name & email"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 relative h-max overflow-auto">
          <table className="w-full table-auto text-md text-left overflow-auto">
            <thead className="text-[#242435] bg-[#F7F7F7] font-medium border-b">
              <tr>
                <th className="py-4 px-6 text-lg font-medium">Sr. </th>
                <th className="py-4 px-6 text-lg font-medium">Name</th>
                <th className="py-4 px-6 text-lg font-medium">Project Title</th>
                <th className="py-4 px-6 text-lg font-medium">Customer ID</th>
                <th className="py-4 px-6 text-lg font-medium">Order Id</th>
                <th className="py-4 px-6 text-lg font-medium">Deadline</th>
                <th className="py-4 px-6 text-lg font-medium">Amount</th>
                <th className="py-4 px-6 text-lg font-medium">
                  Invoice Status
                </th>
                <th className="py-4 px-6 text-lg font-medium">View Details</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {filteredProjects.map((data, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 ">{idx + 1}</td>
                  <td className="px-6 py-4 ">{data.customerName}</td>
                  <td className="px-6 py-4  text-red-600">
                    {data.projectTitle}
                  </td>
                  <td className="px-6 py-4  text-red-600">{data.customerId}</td>
                  <td className="px-6 py-4 text-md">{data.orderId}</td>
                  <td className="px-6 py-4 ">
                    {new Date(data.Deadline).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 ">{data.amount}</td>
                  <td className="pl-6 py-4">
                    <span
                      className={`px-5 py-2 rounded-full capitalize font-semibold text-sm ${
                        data.paymentStatus === "unpaid"
                          ? "text-red-600 bg-red-50"
                          : data.paymentStatus === "paid"
                          ? "text-blue-600 bg-blue-50"
                          : data.paymentStatus === "partially paid"
                          ? "text-yellow-600 bg-yellow-50"
                          : ""
                      }`}
                    >
                      {data.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/adminpanel/projectdetails/${data.id}`}
                      onClick={() => window.scroll(0, 0)}
                      className="bg-[#f11900] text-white text-sm px-3 py-2 rounded-lg"
                    >
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
