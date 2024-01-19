import React from "react";

const AddProjects = () => {
  return (
    <>
      <div className="py-10 px-4 md:px-8 rounded-md bg-white">
        {/* HEADER */}
        <div className="items-start justify-between md:flex">
          <div className="max-w-4xl">
            <h3 className="text-gray-800 text-2xl font-semibold tracking-wide sm:text-3xl">
              ADD PROJECTS
            </h3>
          </div>
        </div>
        {/* BODY */}
        <div className="addProjects_body mt-14">
          {/* --------------- FIRST ROW --------------- */}
          <div className="mb-4 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
            <div>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  placeholder="Company Name"
                  autoComplete="given-name"
                  className="block w-full pl-5 pr-3 py-3 text-lg font-normal placeholder:text-gray-500 placeholder:text-lg text-gray-500 bg-gray-100 outline-none focus:border-gray-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  placeholder="Project Title"
                  autoComplete="given-name"
                  className="block w-full pl-5 pr-3 py-3 text-lg font-normal placeholder:text-gray-500 placeholder:text-lg text-gray-500 bg-gray-100 outline-none focus:border-gray-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  placeholder="Project Status"
                  autoComplete="given-name"
                  className="block w-full pl-5 pr-3 py-3 text-lg font-normal placeholder:text-gray-500 placeholder:text-lg text-gray-500 bg-gray-100 outline-none focus:border-gray-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* --------------- SECOND ROW --------------- */}
          <div className="mb-4 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  placeholder="Customer ID"
                  autoComplete="given-name"
                  className="block w-full pl-5 pr-3 py-3 text-lg font-normal placeholder:text-gray-500 placeholder:text-lg text-gray-500 bg-gray-100 outline-none focus:border-gray-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  placeholder="Order ID"
                  autoComplete="given-name"
                  className="block w-full pl-5 pr-3 py-3 text-lg font-normal placeholder:text-gray-500 placeholder:text-lg text-gray-500 bg-gray-100 outline-none focus:border-gray-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* --------------- THIRD ROW --------------- */}
          <div className="mb-4 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <div className="mt-1.5">
                <label
                  className="text-gray-600 ml-1 font-medium text-lg"
                  htmlFor="password"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  name="first-name"
                  placeholder="Company Name"
                  autoComplete="given-name"
                  className="block w-full mt-1 pl-5 pr-3 py-3 text-lg font-normal placeholder:text-gray-500 placeholder:text-lg text-gray-500 bg-gray-100 outline-none focus:border-gray-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <div className="mt-1.5">
                <label
                  className="text-gray-600 ml-1 font-medium text-lg"
                  htmlFor="password"
                >
                  Deadline
                </label>
                <input
                  type="date"
                  name="first-name"
                  placeholder="Project Title"
                  autoComplete="given-name"
                  className="block w-full mt-1 pl-5 pr-3 py-3 text-lg font-normal placeholder:text-gray-500 placeholder:text-lg text-gray-500 bg-gray-100 outline-none focus:border-gray-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* --------------- FORTH ROW --------------- */}
          <div className="mb-4 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
            <div>
              <div className="mt-1.5">
                <label
                  className="text-gray-700 ml-1 font-medium text-lg"
                  htmlFor="password"
                >
                  Project Progress
                </label>
                <input
                  type="text"
                  name="first-name"
                  placeholder="Project Description"
                  autoComplete="given-name"
                  className="block mt-1 w-full pl-5 pr-3 py-3 text-lg font-normal placeholder:text-gray-500 placeholder:text-lg text-gray-500 bg-gray-100 outline-none focus:border-gray-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <div className="mt-1.5">
                <label
                  className="text-gray-700 ml-1 font-medium text-lg"
                  htmlFor="password"
                ></label>
                <input
                  type="text"
                  name="first-name"
                  placeholder="Project Title"
                  autoComplete="given-name"
                  className="block w-full pl-5 pr-3 py-3 text-lg font-normal placeholder:text-gray-500 placeholder:text-lg text-gray-500 bg-gray-100 outline-none focus:border-gray-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* --------------- FIFTH ROW --------------- */}
          <div className="mb-4 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  placeholder="Total Amount"
                  autoComplete="given-name"
                  className="block w-full pl-5 pr-3 py-3 text-lg font-normal placeholder:text-gray-500 placeholder:text-lg text-gray-500 bg-gray-100 outline-none focus:border-gray-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  placeholder="Amount Status"
                  autoComplete="given-name"
                  className="block w-full pl-5 pr-3 py-3 text-lg font-normal placeholder:text-gray-500 placeholder:text-lg text-gray-500 bg-gray-100 outline-none focus:border-gray-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* --------------- SIXTH ROW --------------- */}
          <div class="sm:col-span-2 pt-2">
            <label
              class="flex flex-col items-center w-full max-w-screen py-10 mx-auto mt-2 text-center bg-gray-100 border-gray-300 cursor-pointer rounded-xl"
              for="dropzone-file"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>

              <h2 class="mt-1 font-medium tracking-wide text-gray-700">
                Upload Attactment
              </h2>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>

          <div className="flex justify-center mt-7">
            <button className="block py-2.5 px-6 text-white font-medium bg-[#f11900] duration-150 hover:bg-[#f11900] active:bg-red-700 rounded-lg shadow-lg hover:shadow-none">
              Add Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProjects;
