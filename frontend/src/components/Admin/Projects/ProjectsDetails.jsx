import React, { useState, useEffect } from "react";
import { Modal, Button } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
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
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FormInput } from "lucide-react";

const ProjectsDetails = () => {
  const { id } = useParams();
  const fileUploaded = true;
  const [steps, setStep] = useState({
    stepsItems: ["Planning", "Development", "Testing", "Completion"],
    currentStep: 1,
  });
  const [showModalX, setShowModalX] = useState(false);

  const Projects = useSelector((state) => state.project.allProjects);
  const ProjectsData = Projects.filter((data) => data.id === id);
  // console.log("ProjectsData", ProjectsData);

  const people = [
    {
      name: "John Doe",
      title: "Front-end Developer",
      department: "Engineering",
      email: "john@devui.com",
      role: "Developer",
      image:
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    },
  ];
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

  const onClickTwo = () => {
    setShowModalX(!showModalX);
  };

  return (
    <>
      <div className="py-14 px-14 md:px-16 rounded-md bg-white">
        {ProjectsData.map((data, index) => (
          <React.Fragment key={data.id}>
            <div className="flex justify-between">
              <h1 className="text-gray-800 text-2xl ml-10 mb-10 font-semibold tracking-wide sm:text-3xl underline decoration-red-500 underline-offset-8">
                PROJECT DETAILS
              </h1>
              <div className="button">
                <Link to={`/adminpanel/updateproject/${data.id}`}
                  className="block py-2.5 px-4 text-white font-medium bg-[#f11900] duration-150 hover:bg-[#f11900] active:bg-red-700 rounded-lg shadow-lg hover:shadow-none"
                >
                  Update Project
                </Link>
              </div>
            </div>

            {/* <------- CLIENTS AND SERVICE DETAILS --------> */}
            <section className="flex justify-between mx-1 mt-16">
              {/* ---------------- DETAILS-LEFT ---------------- */}
              <div
                className="details_left font-normal rounded-3xl text-gray-700"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <h2 className="tracking-wide">Client Details</h2>
                <div className="detail_line flex mt-3">
                  <span>
                    <EnvelopeSimple size={24} className="mt-1 mr-2" />
                  </span>
                  <span className="detail_line_title">Customer Id: </span>
                  <span>{data.customerId}</span>
                </div>
                <div className="detail_line flex">
                  <span>
                    <User size={24} className="mt-1 mr-2" />
                  </span>
                  <span className=" detail_line_title">Name: </span>
                  <span>{data.customerName}</span>
                </div>
                <div className="detail_line flex">
                  <span>
                    <EnvelopeSimple size={24} className="mt-1 mr-2" />
                  </span>
                  <span className="detail_line_title">Email: </span>
                  <span>{data.customerEmail}</span>
                </div>
                <div className="detail_line flex">
                  <span>
                    <Buildings size={24} className="mt-1 mr-2" />
                  </span>
                  <span className="detail_line_title">Company Name: </span>
                  <span>{data.companyName}</span>
                </div>
              </div>

              {/* ---------------- DETAILS-RIGHT ---------------- */}
              <div
                className="details_right font-normal rounded-3xl text-gray-700"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <h2 className="tracking-wide">Service Details</h2>
                {/* PROJECTS */}
                <div className="detail_line flex mt-3">
                  <span>
                    <Buildings size={24} className="mt-1 mr-2" />
                  </span>
                  <span className="detail_line_title">Project: </span>
                  <span>{data.projectTitle}</span>
                </div>
                {/* ORDER ID */}
                <div className="detail_line flex">
                  <span>
                    <FormInput size={24} className="mt-1 mr-2" />
                  </span>
                  <span className="detail_line_title">Order ID: </span>
                  <span>{data.orderId}</span>
                </div>
                {/* STARTING DATE */}
                <div className="detail_line flex">
                  <span>
                    <CalendarBlank size={24} className="mt-1 mr-2" />
                  </span>
                  <span className="detail_line_title">Starting: </span>
                  <span>{new Date(data.startDate).toLocaleDateString()}</span>
                </div>
                {/* DEADLINE */}
                <div className="detail_line flex">
                  <span>
                    <CalendarX size={24} className="mt-1 mr-2" />
                  </span>
                  <span className="detail_line_title">Deadline: </span>
                  <span>{new Date(data.Deadline).toLocaleDateString()}</span>
                </div>
                {/* INVOICE STATUS */}
                <div className="detail_line flex">
                  <span>
                    <Money size={24} className="mt-1 mr-2" />
                  </span>
                  <span className="detail_line_title">Invoice Status: </span>
                  <span>{data.paymentStatus}</span>
                </div>
              </div>
            </section>

            <section className="my-14">
              <h2 className="text-gray-700 block mb-2 ml-10 font-semibold tracking-wide text-3xl">
                Description
              </h2>
              <p className="ml-10 my-4 text-md tracking-wide leading-7">
                {data.projectDescription}
              </p>
            </section>

            {/* ---------------- STEPS ----------------  */}
            <section className="text-gray-700 my-20">
              <h2 className="text-gray-800 block text-lg mb-2 ml-10 font-semibold tracking-wide sm:text-3xl underline decoration-red-500 underline-offset-8">
                PROJECT PROGRESS
              </h2>

              <div class="flex items-center justify-start bg-white px-6 md:px-10 my-10">
                <div class="space-y-6 border-l-2 border-collapse">
                  {data.projectProgress.map((progress) => (
                    <div class="relative w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-red-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div class="ml-6">
                        <h4 class="font-bold text-red-500 text-lg">
                          {progress.title}
                        </h4>
                        <p class="mt-2 max-w-screen-xl text-md text-gray-500">
                          {progress.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pl-10 flex justify-start">
                <button
                  onClick={onClickTwo}
                  className="px-4 py-2.5 text-white text-sm bg-gray-800 rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2 focus:ring-none"
                >
                  Add Next Step
                </button>
              </div>
            </section>

            {/* <------Upload File And Message Text Area-----> */}
            <section>
              {/* <div className="mx-auto max-w-screen-xl py-8 sm:py-12"> */}
              <div className="my-10">
                <ul className="mx-auto grid w-full max-w-screen-xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-2">
                  {/* ---------------- FILE UPLOAD ----------------  */}
                  <li>
                    <div>
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-72 max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-8 h-8 text-gray-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                          />
                        </svg>

                        <h2 className="mt-1 font-medium tracking-wide text-gray-700">
                          Upload File
                        </h2>

                        <p className="mt-2 text-xs tracking-wide text-gray-500">
                          Upload or darg & drop your ZIP File Only.
                        </p>

                        <button
                          type="button"
                          className="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-10 mt-5 py-2.5 me-2 mb-2"
                        >
                          Choose File
                        </button>

                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden w-full h-80"
                        />
                      </label>
                    </div>
                  </li>
                  {/* ---------------- FILE UPLOAD TEXT ----------------  */}
                  <li>
                    <h2 className="text-4xl font-semibold text-gray-700">
                      Upload Project Zip File Here:
                    </h2>
                  </li>
                </ul>
              </div>
            </section>
          </React.Fragment>
        ))}
      </div>

      {/* --------------- ADD NEW STEP --------------- */}
      <Modal
        icon={<CloudArrowUp size={28} color="#f11900" />}
        size="3xl"
        show={showModalX}
        onClose={onClickTwo}
      >
        <Modal.Header>Add Next Steps</Modal.Header>
        <Modal.Body>
          <div className="">
            <div class="pb-2">
              <div class="mt-1 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-4">
                {/* --------------- TITLE --------------- */}
                <div class="sm:col-span-3">
                  <label
                    class="block text-sm font-medium leading-6 text-gray-900"
                    for="first-name"
                  >
                    Title
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      placeholder="Title"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm focus:outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* --------------- DESCRIPTION --------------- */}
                <div class="col-span-full">
                  <label
                    class="block text-sm font-medium leading-6 text-gray-900"
                    for="about"
                  >
                    Description
                  </label>
                  <div class="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      placeholder="Write the project description"
                      rows="3"
                      class="block py-3 px-3 w-full rounded-md border text-gray-900 shadow-sm focus:outline-none placeholder:text-gray-400 placeholder:text-md"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickTwo}>
            Cancel
          </Button>
          <Button
            type="primary"
            color="error"
            className="bg-[#f11900]"
            onClick={onClickTwo}
          >
            Add Next Step
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectsDetails;
