import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Modal } from "keep-react";
import { X, FileText  } from "phosphor-react";
import DashboardData from "../Dashboard/DashboardData";

const Invoice = () => {
  const { id } = useParams();
  const [showModalX, setShowModalX] = useState(false);
  const [services, setServices] = useState([
    { number: 1, name: "", amount: "" },
  ]);

  const data = DashboardData;

  const invoiceData = data.filter((data) => data.id == id);
  console.log("invoiceData", invoiceData);

  const onClickTwo = () => {
    setShowModalX(!showModalX);
  };

  const handleInputChange = (index, key, value) => {
    const updatedServices = [...services];
    updatedServices[index][key] = value;
    setServices(updatedServices);
  };

  const handleAddService = () => {
    const maxServiceNumber = Math.max(
      ...services.map((service) => service.number),
      0
    );
    const newServiceNumber = maxServiceNumber + 1;

    setServices([
      ...services,
      { number: newServiceNumber, name: "", amount: "" },
    ]);
  };

  const handleDeleteService = (index) => {
    const updatedServices = [...services];
    updatedServices.splice(index, 1);

    // Update service numbers after deletion
    updatedServices.forEach((service, i) => {
      service.number = i + 1;
    });

    setServices(updatedServices);
  };

  const tableItems = [
    {
      name: "Project Name",
      SubName: "Home page / logo / Mockups ",
      Price: "$7500",
    },
    {
      name: "Project Name",
      SubName: "Home page / logo / Mockups ",
      Price: "$7500",
    },
    {
      name: "Project Name",
      SubName: "Home page / logo / Mockups ",
      Price: "$7500",
    },
  ];

  return (
    <>
      <section class="max-w-7xl px-4 py-10 mx-auto bg-gray-50 rounded-md shadow-md">
        <h2 class="text-gray-800 text-2xl pl-10 font-bold tracking-wide sm:text-3xl underline decoration-red-500 underline-offset-8">
          CREATE INVOICE
        </h2>
        {/* {invoiceData.map((data) => ( */}
          <form className=" p-10">
            {/* -------------- CLIENT DETAILS --------------  */}
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              {/* ---------- NAME ---------- */}
              <div>
                <label class="text-gray-700 font-medium text-xl">
                  Client Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40  focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label
                  class="text-gray-700 font-medium text-xl"
                  for="emailAddress"
                >
                  Client Company Name
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40  focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label class="text-gray-700 font-medium text-xl" for="password">
                  Client Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40  focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label class="text-gray-700 font-medium text-xl">
                  Client Number
                </label>
                <input
                  type="number"
                  placeholder="Phone Number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40  focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label
                  class="text-gray-700  font-medium text-xl"
                  for="password"
                >
                  Invoice Date
                </label>
                <input
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40 focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label class="text-gray-700 font-medium text-xl">
                  Reference Number
                </label>
                <input
                  type="text"
                  placeholder="Reference Number"
                  class="block w-full px-4 py-2 text-lg mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40 focus:outline-none focus:ring"
                  readOnly
                />
              </div>
            </div>

            {/* -------------- SERVICES DETAILS --------------  */}
            <div className="mt-8">
              <h1 className="text-gray-700 ml-1 font-semibold text-2xl">
                Services
              </h1>

              <div className="border-solid border-2 border-gray-200 mt-3 p-5 rounded-lg">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-center gap-5 w-100 mb-2"
                  >
                    <input
                      type="number"
                      disabled
                      defaultValue={service.number}
                      className="block w-11 px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                    <input
                      type="text"
                      placeholder="Service Name"
                      value={service.name}
                      onChange={(e) =>
                        handleInputChange(index, "name", e.target.value)
                      }
                      className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                    <input
                      type="number"
                      placeholder="Service Amount"
                      value={service.amount}
                      onChange={(e) =>
                        handleInputChange(index, "amount", e.target.value)
                      }
                      className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                    <button
                      className=" h-10 w-24 text-xl text-white transition-colors duration-300 transform bg-[#D22B2B] rounded-md hover:bg-[#D22B2B] focus:outline-none focus:bg-[#D22B2B]"
                      onClick={() => handleDeleteService(index)}
                      type="button"
                    >
                      X
                    </button>
                  </div>
                ))}
                <button
                  className="mt-3 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#D22B2B] rounded-md hover:bg-[#D22B2B] focus:outline-none focus:bg-[#D22B2B]"
                  onClick={handleAddService}
                  type="button"
                >
                  Add Services
                </button>
              </div>
            </div>
            <div class="flex justify-center gap-10 mt-6">
              <button
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#D22B2B] rounded-md hover:bg-[#D22B2B] focus:outline-none focus:bg-[#D22B2B]"
                onClick={onClickTwo}
                type="button"
              >
                Preview Invoice
              </button>
            </div>
          </form>
        {/* ))} */}
      </section>

      {/* ----------------- PREVIEW INVOICE ----------------- */}
      <Modal
        size="4xl"
        show={showModalX}
        icon={<X size={30} onClick={onClickTwo} />}
      >
        <Modal.Header>
          {/* <div className="flex justify-between items-center border-b-4 border-gray-500 pb-2"> */}
          <div className="flex justify-between items-center">
          <img
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/ITEXPERTS_LOGO.png?v=1704170784"
                alt="keep"
                width="120"
                height="40"
                className=""
              />
            <p className="text-4xl text-black font-semibold modelHead me-14">Invoice</p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className=" flex justify-between">
            <div className=" p-2 w-100">
              <p className="modelClientText mb-2 text-base">Bill To:</p>
              <h1 className="modelClientHeadText mb-2 font-semibold text-lg">Webz Poland</h1>
              <p className="modelClientText mb-2 text-base">(+92) 334 41087865</p>
              <p className="modelClientText mb-2 text-base">info@gmail.com</p>
            </div>
            <div className=" p-2 w-100">
              <p className="modelClientText mb-2 text-base">From:</p>
              <h1 className="modelClientHeadText mb-2 font-semibold text-lg">Webz Poland</h1>
              <p className="modelClientText mb-2 text-base">(+92) 334 41087865</p>
              <p className="modelClientText mb-2 text-base">info@gmail.com</p>
              <p className="modelClientText text-base">
              3909 Heavner Avenue <br /> Mountain, GA 30083
              </p>
            </div>
          </div>
          <div className="flex justify-between mx-2 mt-5">
            <p className="text-base">Reference No: 00004 </p>
            <p className="text-base">04 December 2024 </p>
          </div>
          <div className="mt-5 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-200 text-black font-normal text-lg border-b">
                <tr>
                  <th className="py-3 px-6">Description</th>
                  <th className="py-3 px-6 text-end">SubTotal</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {tableItems.map((item, idx) => (
                  <tr key={idx}>
                    <td className="ps-5 py-4 whitespace-nowrap flex items-end gap-x-6">
                      {item.name} <br />
                      {item.SubName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-lg">
                      {item.Price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-200 text-black text-lg border-b">
                <tr>
                  <th className="py-3 px-6 font-bold">Description</th>
                  <th className="py-3 px-6 text-end">$150,000</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="flex justify-center gap-5 mt-5">
          <button
              class="px-6 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#D22B2B] rounded-md hover:bg-[#D22B2B] focus:outline-none focus:bg-[#D22B2B]"
              onClick={onClickTwo}
              type="button"
            >
              Generate Invoice
            </button>
            <button
              class="px-4 py-2.5 leading-5 text-black transition-colors duration-300 transform border-solid border-2 border-black bg-white rounded-md hover:bg-[#D22B2B] focus:outline-none "
              onClick={onClickTwo}
              type="button"
            >
              Download Invoice
            </button>
          </div>
        </Modal.Body>
      </Modal>


    </>
  );
};

export default Invoice;
