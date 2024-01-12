import { useEffect, useState } from "react";
import { TextInput, Tabs } from "keep-react";
import { MagnifyingGlass, Trash, Chat } from "phosphor-react";
import { Modal, Button } from "keep-react";
import { X } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContactFormAsync,
  getAllFormsAsync,
} from "../../../features/contactFormSlice";
import "../AdminPanel.css";

const AllInvoices = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModalX, setShowModalX] = useState(false);
  const [showErrorModalX, setShowErrorModalX] = useState(false);
  const [Message, setMessage] = useState(null);
  const [deleteMsgId, setDeleteMsgId] = useState(null);

  const [name, setName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const DashboardData = useSelector((state) => state.contactForms.allForms);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  let filterdData;
  if (name) {
    filterdData = DashboardData.filter((item) => item.reference === name);
  } else {
    filterdData = DashboardData;
  }
  const [limit, setLimit] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filterdData.length / limit);
  const disabled = currentPage === totalPages;
  const disabled2 = currentPage === 1;

  // Calculate the index range for the currently displayed data
  const startIndex = (currentPage - 1) * limit;

  const endIndex = startIndex + limit;
  let displayedData = filterdData.slice(startIndex, endIndex);
  let searchData = [];
  if (searchQuery) {
    searchData = DashboardData.filter((data) =>
      data.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  displayedData = searchQuery.length > 1 ? searchData : displayedData;

  useEffect(() => {
    dispatch(getAllFormsAsync());
  }, [dispatch]);

  // VIEW MESSAGE MODAL FUNCTION
  const onClickTwo = (id) => {
    console.log(id);
    setShowModalX(!showModalX);
    setMessage(id);
  };

  // DELETE MESSAGE MODAL FUNCTION
  const onClickErrorModal = (id) => {
    setShowErrorModalX(!showErrorModalX);
    setDeleteMsgId(id);
  };

  // HANDLE CREATE INVOICE
  const handleCreateInvoice = (invoice_Id) => {
    navigate(`/adminpanel/invoice/${invoice_Id}`);
    console.log("invoice_Id", invoice_Id);
  };

  const filteredId = DashboardData.filter((data) => data.id === Message);
  const delete_MsgId = DashboardData.filter((data) => data.id === deleteMsgId);

  // HANDLE CREATE INVOICE
  const handleDelete = (id) => {
    dispatch(deleteContactFormAsync(id)).then(() => {
      dispatch(getAllFormsAsync());
    });
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
      <div className=" py-10 px-4 md:px-8 rounded-md bg-white">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              All Invoices
            </h3>
            {/* <p className="text-gray-600 mt-2">
              {DashboardData.length} Invoices
            </p> */}
          </div>
          <div className="mt-3 md:mt-0 flex gap-8">
            {/* ------------- SEARCH BAR ------------- */}
            <input
              type="text"
              placeholder="Search..."
              className=" ml-4 border text-black border-gray-500 w-72 rounded-lg px-4 py-2 focus:outline-none"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="mt-6">
          <Tabs aria-label="tabs" style="underline" borderPosition="bottom">
            <Tabs.Item
              title="All Invoices"
              className="custom-tab-title"
            ></Tabs.Item>
            <Tabs.Item
              title="Paid Invoices"
              className="custom-tab-title"
            ></Tabs.Item>
            <Tabs.Item
              title="UnPaid Invoices"
              className="custom-tab-title"
            ></Tabs.Item>
            <Tabs.Item
              title="Partially Paid Invoices"
              className="custom-tab-title"
            ></Tabs.Item>
          </Tabs>
        </div>

        <div className="-mt-2 relative h-max overflow-auto">
          {/* ------------- CONTACT QUERIES TABLE ------------- */}
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 pr-3 text-lg">Name</th>
                <th className="py-3 pr-3 text-lg">Date</th>
                <th className="py-3 pr-6 text-lg">Ref Number</th>
                <th className="py-3 pr-6 text-lg">Email Address</th>
                <th className="py-3 pr-6 text-lg">Invoice Status</th>
                <th className="py-3 pr-6 text-lg">Message</th>
                <th className="py-3 pl-14 text-lg">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {displayedData.length > 0 ? (
                displayedData.map((data, idx) => {
                  return (
                    <>
                      <tr key={idx} className="cursor-pointer">
                        <td className="pr-0 py-3 text-lg">{data.name}</td>
                        <td className="pr-3 py-3 text-lg">
                          {new Date(data.createdAt).toLocaleDateString()}
                        </td>
                        <td className="pr-6 py-3 text-lg">{data.refNumber}</td>
                        <td className="pr-6 py-3 text-lg">{data.email}</td>
                        <td className="pr-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-5 py-2 rounded-full font-semibold text-sm ${
                              data.status == "Active"
                                ? "text-green-600 bg-green-50"
                                : "text-red-600 bg-red-50"
                            }`}
                          >
                            Unpaid
                          </span>
                        </td>
                        <td
                          className="pr-6 py-3 text-lg font-semibold underline underline-offset-4 text-blue-700"
                          onClick={() => onClickTwo(data.id)}
                        >
                          Preview Invoice
                        </td>

                        <td className="flex items-center justify-center py-3">
                          {/* ---------- HANDLE CREATE INVOICE BUTTON ----------  */}

                          <div
                            onClick={() => onClickErrorModal(data.id)}
                            className="trash_button rounded-full bg-red-600 text-white p-2 ms-2.5 transition hover:scale-110"
                          >
                            <Trash size={24} />
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <tr>
                  <td className="px-6 py-4 text-2xl text-gray-950">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" flex justify-center mt-5 mb-5">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-lg">
            <li>
              <button
                onClick={() => {
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                  window.scroll({ top: 0, behavior: "smooth" });
                }}
                disabled={disabled2}
                className={`flex items-center justify-center px-5 h-11 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg ${
                  disabled2
                    ? "cursor-not-allowed bg-[#CCCCCC] text-black "
                    : "hover:bg-gray-600 hover:text-white "
                } `}
              >
                Previous
              </button>
            </li>
            <li>
              <span className="flex items-center justify-center px-5 h-11 leading-tight text-gray-500 bg-white border border-gray-300 ">
                {currentPage} / {totalPages}
              </span>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentPage((prev) => prev + 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                disabled={disabled}
                className={`flex items-center justify-center px-5 h-11 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg ${
                  disabled
                    ? "cursor-not-allowed bg-[#CCCCCC] text-black "
                    : "hover:bg-gray-600 hover:text-white"
                }`}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* ------------- VIEW MESSAGE MODAL ------------- */}
      {/* {filteredId.map((data, idx) => (
        <Modal
          icon={<Chat size={28} color="#1B4DFF" />}
          size="4xl"
          show={showModalX}
          onClose={onClickTwo}
        >
          <Modal.Header>Message</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-metal-500">
                {data.message}
              </p>
            </div>
          </Modal.Body>
        </Modal>
      ))} */}

      {/* ------------- DELETE MESSAGE MODAL ------------- */}
      {delete_MsgId.map((data, idx) => (
        <Modal
          icon={<Trash size={28} color="#E92215" />}
          size="lg"
          show={showErrorModalX}
          onClose={onClickErrorModal}
        >
          <Modal.Header>Do you want to delete this file?</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-metal-500">
                This action will permanently remove the query.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="outlineGray" onClick={onClickErrorModal}>
              Cancel
            </Button>
            <Button
              type="primary"
              color="error"
              onClick={() => handleDelete(data.id)}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      ))}

      {/* ----------------- PREVIEW INVOICE ----------------- */}
      <Modal
        size="4xl"
        show={showModalX}
        icon={<X size={28} onClick={onClickTwo} className="cursor-pointer" />}
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
            <p className="text-4xl text-black font-semibold modelHead me-14">
              Invoice
            </p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className=" flex justify-between">
            <div className=" p-2 w-100">
              <p className="modelClientText mb-2 text-base">Bill To:</p>
              <h1 className="modelClientHeadText mb-2 font-semibold text-lg">
                Webz Poland
              </h1>
              <p className="modelClientText mb-2 text-base">
                (+92) 334 41087865
              </p>
              <p className="modelClientText mb-2 text-base">info@gmail.com</p>
            </div>
            <div className=" p-2 w-100">
              <p className="modelClientText mb-2 text-base">From:</p>
              <h1 className="modelClientHeadText mb-2 font-semibold text-lg">
                Webz Poland
              </h1>
              <p className="modelClientText mb-2 text-base">
                (+92) 334 41087865
              </p>
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

export default AllInvoices;
