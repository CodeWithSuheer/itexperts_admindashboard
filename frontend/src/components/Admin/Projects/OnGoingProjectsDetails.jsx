import React, { useState, useEffect } from "react";

const OnGoingProjectsDetails = () => {
  const [steps, setStep] = useState({
    stepsItems: [
      "InProgress",
      "Under Development",
      "Final Stages",
      "Delivered",
    ],
    currentStep: 1,
  });

  const ProjectStatus = 'Final Stages'; // Set your ProjectStatus here

  useEffect(() => {
    // Update the current step based on ProjectStatus
    switch (ProjectStatus) {
      case 'Under Development':
        setStep((prevState) => ({ ...prevState, currentStep: 2 }));
        break;
      case 'Final Stages':
        setStep((prevState) => ({ ...prevState, currentStep: 3 }));
        break;
      case 'Delivered':
        setStep((prevState) => ({ ...prevState, currentStep: 4 }));
        break;
      default:
        // For 'In Progress' or any other status
        setStep((prevState) => ({ ...prevState, currentStep: 1 }));
    }
  }, [ProjectStatus])

  return (
    <>
      <div className="py-10 px-32 md:px-32 rounded-md bg-white">
        {/* <--------STEP--------> */}
        <h1 className="text-center font-bold text-3xl mb-5">Status</h1>
        <div className="max-w-2xl mx-auto px-4 md:px-0">
          <ul
            aria-label="Steps"
            className="items-center text-gray-600 font-medium md:flex"
          >
            {steps.stepsItems.map((item, idx) => (
              <li
                aria-current={steps.currentStep === idx + 1 ? "step" : false}
                className="flex-1 last:flex-none flex gap-x-2 md:items-center"
                key={idx}
              >
                <div className="flex items-center flex-col gap-x-2">
                  <div
            className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${
              steps.currentStep >= idx + 1 ? "bg-red-600 border-red-600" : ""
            }`}
          >
            {steps.currentStep > idx + 1 || ProjectStatus === 'Delivered' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            ) : (
              <span className={`${
                steps.currentStep >= idx + 1 ? "bg-red-600 border-red-600 text-white" : ""
              }`}>{idx + 1}</span>
            )}
          </div>
                  <hr
                    className={`h-12 border md:hidden ${
                      idx + 1 === steps.stepsItems.length
                        ? "hidden"
                        : "" || steps.currentStep > idx + 1
                        ? "border-red-600"
                        : ""
                    }`}
                  />
                </div>
                <div className="h-8 flex items-center md:h-auto">
                  <h3
                    className={` text-sm ${
                      steps.currentStep === idx + 1 ? "text-red-600" : ""
                    }`}
                  >
                    {item}
                  </h3>
                </div>
                <hr
                  className={`hidden mr-2 w-full border md:block ${
                    idx + 1 === steps.stepsItems.length
                      ? "hidden"
                      : "" || steps.currentStep > idx + 1
                      ? "border-red-600"
                      : ""
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
        {/* <-------Client and Service Detail--------> */}
        <div className=" flex justify-between mt-10">
          <div className=" p-5 w-100 ">
            <p className="text-red-500 font-bold mb-3 text-3xl">
              Client Details:
            </p>
            <p className="mb-3 text-2xl">
              Ref No: <span className="text-gray-400">ITE-51413</span>
            </p>
            <p className="mb-3 text-2xl">
              Client Name:<span className="text-gray-400"> Dummy Client</span>
            </p>
            <p className="mb-3 text-2xl">
              Client Email:<span className="text-gray-400"> abc@gmail.com</span>
            </p>
            <p className="mb-3 text-2xl">
              Client Company Name:<span className="text-gray-400"> XYZ</span>
            </p>
          </div>
          <div className=" p-5 w-100">
            <p className="text-red-500 font-bold mb-3 text-3xl">
              Service Details:
            </p>
            <p className="mb-3 text-2xl">
              Service:<span className="text-gray-400"> Landing Page</span>
            </p>
            <p className="mb-3 text-2xl">
              Starting Date:<span className="text-gray-400"> 01-01-24</span>
            </p>
            <p className="mb-3 text-2xl">
              Deadline:<span className="text-gray-400"> 15-01-24</span>
            </p>
            <p className="mb-3 text-2xl">
              Invoice Status:<span className="text-gray-400"> Unpaid</span>
            </p>
            <p className="mb-3 text-2xl">
              Project Status:<span className="text-gray-400"> {ProjectStatus}</span>
            </p>
          </div>
        </div>
        {/* <------Upload File And Message Text Area-----> */}
        <section>
          <div className="mx-auto max-w-screen-xl py-8 sm:py-12">
            <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-2">
              <li>
                <div>
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-72 max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-8 h-8 text-gray-500 dark:text-gray-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>

                    <h2 class="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                      Upload File
                    </h2>

                    <p class="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                      Upload or darg & drop your ZIP File Only.{" "}
                    </p>

                    <button
                      type="button"
                      class="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-10 mt-5 py-2.5 me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
                    >
                      Choose File
                    </button>

                    <input
                      id="dropzone-file"
                      type="file"
                      class="hidden w-full h-80"
                    />
                  </label>
                </div>
              </li>

              <li>
                <label
                  for="message"
                  class="block mb-2 text-2xl text-gray-900 dark:text-white"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  rows="9"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write message here for client..."
                ></textarea>
                <button type="button"
                      class="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 mt-5 py-2.5 me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800">Send</button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default OnGoingProjectsDetails;
