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
      name: "Liam James",
      email: "liamjames@example.com",
      position: "Software engineer",
      salary: "$100K",
    },
    {
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      position: "Product designer",
      salary: "$90K",
    },
    {
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      position: "Front-end developer",
      salary: "$80K",
    },
    {
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      position: "Laravel engineer",
      salary: "$120K",
    },
    {
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      position: "Open source manager",
      salary: "$75K",
    },
  ];

  return (
    <>
      <section class="max-w-7xl px-4 py-10 mx-auto bg-gray-50 rounded-md shadow-md">
        <h2 class="text-gray-800 text-2xl pl-10 font-bold tracking-wide sm:text-3xl underline decoration-red-500 underline-offset-8">
          CREATE INVOICE
        </h2>
        {invoiceData.map((data) => (
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
                  value={data.ref}
                  placeholder={data.ref}
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
        ))}
      </section>

      {/* ----------------- PREVIEW INVOICE ----------------- */}
      <Modal
        icon={<FileText  size={28} color="#E92215" />}
        size="6xl"
        show={showModalX}
      >
        <Modal.Header>
          <div className="px-4 flex justify-between items-center border-b-4 border-gray-500 pb-2">
            <p>
              <span>Invoice:</span> 01/01/24
            </p>
            <p>
              <span>Status:</span> Pending
            </p>
            {/* <button class="px-8 py-2.5 leading-5 font-light text-white transition-colors duration-300 transform bg-[#D22B2B] rounded-md hover:bg-[#D22B2B] focus:outline-none focus:bg-[#D22B2B]">
              Download Invoice
            </button> */}
            <X size={32} onClick={onClickTwo} className="cursor-pointer hover:text-red-600" />
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="px-4 flex justify-between">
            {/* ----------------- FROM ----------------- */}
            <div className="p-5 w-100">
              <p className="my-2 text-xl">From</p>
              <h1 className="my-2 font-bold text-2xl">Webz Poland</h1>
              <p className=" text-xl">United States of America</p>
              <p className=" text-xl">71-123 Scotland,USA</p>
              <p className=" text-xl">Email: IT@it-experts.com</p>
              <p className=" text-xl">Phone: +48 222 444 666 33</p>
            </div>

            {/* ----------------- TO ----------------- */}
            <div className="p-5 w-100">
              <p className="my-2 text-xl">To</p>
              <h1 className="my-2 font-bold text-2xl">Bob Anderson</h1>
              <p className=" text-xl">United States of America</p>
              <p className=" text-xl">71-123 Scotland,USA</p>
              <p className=" text-xl">Email: client@client-email.com</p>
              <p className=" text-xl">Phone: +48 222 444 666 33</p>
            </div>
          </div>
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            {/* ----------------- TABLE ----------------- */}
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-black font-bold text-xl border-b">
                <tr className="divide-x">
                  <th className="py-3 px-6">Service</th>
                  <th className="py-3 px-6">Amount</th>
                  <th className="py-3 px-6">dummy</th>
                  <th className="py-3 px-6">Amount</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {tableItems.map((item, idx) => (
                  <tr key={idx} className="divide-x">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.position}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.salary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <table className="w-50 table-auto text-sm text-left flex justify-center mt-5 ">
              <tbody className="text-gray-600 divide-y border-solid border-2 border-gray-200">
                <tr className="divide-x">
                  <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6 text-2xl text-black font-bold">
                    SubTotal
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-2xl">
                    $ 8672
                  </td>
                </tr>
                <tr className="divide-x">
                  <td className="ps-6 pe-40 py-4 whitespace-nowrap flex items-center gap-x-6 text-2xl text-black font-bold">
                    Total
                  </td>
                  <td className="ps-6 pe-40 px-6 py-4 whitespace-nowrap text-2xl text-black font-bold">
                    $ 8672
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Invoice;
