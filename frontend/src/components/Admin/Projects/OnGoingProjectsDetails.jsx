import React, { useState, useEffect } from "react";
import {
  User,
  EnvelopeSimple,
  Buildings,
  CalendarBlank,
  CalendarX,
  TrendUp,
  Money,
  Check,
} from "phosphor-react";
import "./OnGoingProjectsDetails.css";
import OnGoingProjectsDetailsData from "./OnGoingProjectsDetailsData";

const OnGoingProjectsDetails = () => {
  const [steps, setStep] = useState({
    stepsItems: ["Planning", "Development", "Testing", "Completion"],
    currentStep: 1,
  });

  const ProjectStatus = "Testing";

  useEffect(() => {
    switch (ProjectStatus) {
      case "Development":
        setStep((prevState) => ({ ...prevState, currentStep: 2 }));
        break;
      case "Testing":
        setStep((prevState) => ({ ...prevState, currentStep: 3 }));
        break;
      case "Completion":
        setStep((prevState) => ({ ...prevState, currentStep: 4 }));
        break;
      default:
        setStep((prevState) => ({ ...prevState, currentStep: 1 }));
    }
  }, [ProjectStatus]);

  return (
    <>
      <div className="py-14 px-32 md:px-28 rounded-md bg-white">
        <h1 className="text-gray-800 text-2xl mb-10 font-semibold tracking-wide sm:text-3xl underline decoration-red-500 underline-offset-8">
          PROJECT STATUS
        </h1>

        {/* <-------Client and Service Detail--------> */}
        {/* <div className="flex justify-between mt-10">
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
              Project Status:
              <span className="text-gray-400"> {ProjectStatus}</span>
            </p>
          </div>
        </div> */}

        {/* <-------Client and Service Detail--------> */}
        <section className="flex justify-between mx-8 mt-16">
          {/* ---------------- DETAILS-LEFT ---------------- */}
          <div className="details_left font-normal rounded-2xl shadow-xl">
            <h2>Client Details</h2>
            <div className="detail_line flex mt-3">
              <span>
                <EnvelopeSimple size={24} className="mt-1 mr-2" />
              </span>
              <span className="detail_line_title">Ref No: </span>
              <span>ITE-51413</span>
            </div>
            <div className="detail_line flex">
              <span>
                <User size={24} className="mt-1 mr-2" />
              </span>
              <span className=" detail_line_title">Name: </span>
              <span>Dummy Client</span>
            </div>
            <div className="detail_line flex">
              <span>
                <EnvelopeSimple size={24} className="mt-1 mr-2" />
              </span>
              <span className="detail_line_title">Email: </span>
              <span>abc@gmail.com</span>
            </div>
            <div className="detail_line flex">
              <span>
                <Buildings size={24} className="mt-1 mr-2" />
              </span>
              <span className="detail_line_title">Company Name: </span>
              <span>XYZ</span>
            </div>
          </div>

          {/* ---------------- DETAILS-RIGHT ---------------- */}
          <div className="details_right font-normal rounded-2xl shadow-xl">
            <h2>Service Details</h2>
            <div className="detail_line flex mt-3">
              <span>
                <Buildings size={24} className="mt-1 mr-2" />
              </span>
              <span className="detail_line_title">Project: </span>
              <span>Landing Page Service</span>
            </div>
            <div className="detail_line flex">
              <span>
                <CalendarBlank size={24} className="mt-1 mr-2" />
              </span>
              <span className="detail_line_title">Starting: </span>
              <span>15-01-24</span>
            </div>
            <div className="detail_line flex">
              <span>
                <CalendarX size={24} className="mt-1 mr-2" />
              </span>
              <span className="detail_line_title">Deadline: </span>
              <span>15-01-24</span>
            </div>
            <div className="detail_line flex">
              <span>
                <Money size={24} className="mt-1 mr-2" />
              </span>
              <span className="detail_line_title">Invoice Status: </span>
              <span>Unpaid</span>
            </div>
            <div className="detail_line flex">
              <span>
                <TrendUp size={24} className="mt-1 mr-2" />
              </span>
              <span className="detail_line_title">Project Status: </span>
              <span>Testing</span>
            </div>
          </div>
        </section>

        {/* ---------------- STEPS ----------------  */}
        {/* <div className="max-w-4xl my-20 mx-auto px-4 md:px-0">
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
                      steps.currentStep >= idx + 1
                        ? "bg-red-600 border-red-600"
                        : ""
                    }`}
                  >
                    {steps.currentStep > idx + 1 ||
                    ProjectStatus === "Delivered" ? (
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
                      <span
                        className={`${
                          steps.currentStep >= idx + 1
                            ? "bg-red-600 border-red-600 text-white"
                            : ""
                        }`}
                      >
                        {idx + 1}
                      </span>
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
                    className={` text-lg ${
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
        </div> */}

        {/* ---------------- STEPS ----------------  */}
        <section class="text-gray-600 body-font my-20">
          <h2 className="text-gray-800 block text-lg mb-2 ml-52 font-semibold tracking-wide sm:text-3xl underline decoration-red-500 underline-offset-8">
            PROJECT STEPS
          </h2>
          <div class="container px-5 pt-10 pb-16 mx-auto flex flex-wrap">
            {OnGoingProjectsDetailsData.map((data) => (
              <div class="flex relative py-10 sm:items-center md:w-2/3 mx-auto">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">
                  {data.id}
                </div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                    <Check size={46} />
                  </div>
                  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                      {data.title}
                    </h2>
                    <p class="leading-relaxed">{data.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="input_add_next_step mb-4 flex justify-end">
            <label
              htmlFor="UserEmail"
              className="relative block overflow-hidden rounded-md border border-gray-500 px-3 pt-3 shadow-sm focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="Email"
                className="peer h-8 w-56 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                Next Step
              </span>
            </label>
          </div>
          <div className="add_next_step_button flex justify-end">
            <button className="px-5 py-2.5 text-white bg-gray-800 rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2 focus:ring-none">
              Add Next Step
            </button>
          </div>
        </section>

        {/* <------Upload File And Message Text Area-----> */}
        <section>
          <div className="mx-auto max-w-screen-xl py-8 sm:py-12">
            <ul className="mt-6">
              <li>
                <div>
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-72 max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl"
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
                      Upload File
                    </h2>

                    <p class="mt-2 text-xs tracking-wide text-gray-500">
                      Upload or darg & drop your ZIP File Only.
                    </p>

                    <button
                      type="button"
                      class="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-10 mt-5 py-2.5 me-2 mb-2"
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
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default OnGoingProjectsDetails;
