import React from "react";
import "./UsersRequests.css";
import { PaperPlaneTilt, UserGear } from "phosphor-react";

const UsersInfo = () => {
  return (
    <>
      <section class="bg-white rounded-xl">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold tracking-wide text-gray-800 lg:text-3xl underline decoration-red-500 underline-offset-8">
            USERS INFO
          </h1>

          <p class="mt-4 text-xl text-gray-700 xl:mt-6 ">
            View the list of pending user requests and approved users.
          </p>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {/* ----------- PENDING REQUESTS ----------- */}
            <div class="requests p-8 space-y-3 border-2 border-gray-400 rounded-xl hover:shadow-xl">
              <span class="inline-block text-red-600 ">
                <PaperPlaneTilt size={32} />
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize">
                Pending Requests
              </h1>

              <p class="text-gray-500">
                View and manage the pending requests from users awaiting
                approval to join.
              </p>

              <a
                href="#"
                class="inline-flex p-2 text-red-600 capitalize transition-colors duration-300 transform bg-gray-100 rounded-full rtl:-scale-x-100 hover:underline hover:text-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
            {/* ----------- APPROVED REQUESTS ----------- */}
            <div class="requests p-8 space-y-3 border-2 border-gray-400 rounded-xl hover:shadow-xl">
              <span class="inline-block text-red-600 ">
                <UserGear size={32} />
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize">
                Appproved Users
              </h1>

              <p class="text-gray-500">
                List of users who have been approved and granted access to the
                platform.
              </p>

              <a
                href="#"
                class="inline-flex p-2 text-red-600 capitalize transition-colors duration-300 transform bg-gray-100 rounded-full rtl:-scale-x-100 hover:underline hover:text-red-600 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UsersInfo;
