import React from "react";
import { useEffect, useState } from "react";
import { TextInput, Tabs } from "keep-react";
import { Trash, PencilSimple } from "phosphor-react";
import { Modal, Button, Tooltip } from "keep-react";
import { X } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContactFormAsync,
  getAllFormsAsync,
} from "../../../features/contactFormSlice";
import {
  deleteInvoicesAsync,
  getAllInvoicesAsync,
} from "../../../features/invoiceSlice";
import Icons from "../Icons";
import "../AdminPanel.css";
import { Mail, Phone, CreditCard } from "lucide-react";

const AllInvoices = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModalX, setShowModalX] = useState(false);
  const [showErrorModalX, setShowErrorModalX] = useState(false);
  const [Message, setMessage] = useState("");
  const [deleteMsgId, setDeleteMsgId] = useState(null);
  const [name, setName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // CALL TO GET ALL INVOICES
  useEffect(() => {
    dispatch(getAllInvoicesAsync());
  }, [dispatch]);

  // HERE WE GET DATA USING USESELECTOR FROM STATE
  const InvoicesData = useSelector((state) => state.invoice.allInvoices);
  // console.log("InvoicesData", InvoicesData);

  const Modal_id = InvoicesData.filter((data) => data.id === Message);

  // HANDLE SEARCH FUNCTION
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  let filterdData;
  if (name) {
    filterdData = InvoicesData.filter((item) => item.reference === name);
  } else {
    filterdData = InvoicesData;
  }

  // THESE STATE ARE RELATED TO PAGINATION
  const [limit, setLimit] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filterdData.length / limit);
  const disabled = currentPage === totalPages;
  const disabled2 = currentPage === 1;

  const startIndex = (currentPage - 1) * limit;

  const endIndex = startIndex + limit;
  let displayedData = filterdData.slice(startIndex, endIndex);
  let searchData = [];
  if (searchQuery) {
    searchData = InvoicesData.filter((data) =>
      data.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  displayedData = searchQuery.length > 1 ? searchData : displayedData;

  // VIEW MESSAGE MODAL FUNCTION
  const openModal = (id) => {
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

  // HANDLE CREATE INVOICE
  const handleDelete = (id) => {
    dispatch(deleteInvoicesAsync(id)).then(() => {
      dispatch(getAllInvoicesAsync());
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

  // const filteredId = InvoicesData.filter((data) => data.id === Message);
  const delete_MsgId = InvoicesData.filter((data) => data.id === deleteMsgId);

  return (
    <>
      <div className=" py-10 px-4 md:px-8 rounded-md bg-white">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              All Invoices{" "}
              <span className="text-lg font-normal">
                ({InvoicesData.length})
              </span>
            </h3>
            {/* <p className="text-gray-600 mt-2">
              {DashboardData.length} Invoices
            </p> */}
          </div>
          <div className="mt-3 md:mt-0 flex gap-8">
            {/* ------------- SEARCH BAR ------------- */}
            <div className="search_bar mr-10">
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>

                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-[#D9D9D9] rounded-lg focus:border-red-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300"
                  placeholder="Search name & email"
                />
              </div>
            </div>
          </div>
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
            Paid
          </button>
          <button
            className="bg-white text-black border border-black hover:bg-[#F11900] hover:text-white hover:border-[#f11900] rounded-md mr-5"
            style={{ padding: "8px 25px" }}
          >
            Partially Payment
          </button>
          <button
            className="bg-white text-black border border-black hover:bg-[#F11900] hover:text-white hover:border-[#f11900] rounded-md mr-5"
            style={{ padding: "8px 25px" }}
          >
            Unpaid
          </button>
        </div>

        {/* ------------- TABS ------------- */}
        <div className="-mt-2 relative h-max overflow-auto">
          {/* ------------- CONTACT QUERIES TABLE ------------- */}
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-[#242435] bg-[#F7F7F7] font-medium border-b">
              <tr>
                <th className="py-4 px-6 text-lg font-medium pl-3">Name</th>
                <th className="py-4 px-6 text-lg font-medium">Customer ID</th>
                <th className="py-4 px-6 text-lg font-medium">Order ID</th>
                <th className="py-4 px-6 text-lg font-medium">Amount</th>
                <th className="py-4 px-6 text-lg font-medium">Invoice Type</th>
                <th className="py-3 pr-6 text-lg font-medium">View Invoice</th>
                <th className="py-3 pl-14 text-lg font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {InvoicesData.map((data, index) => (
                <React.Fragment key={index}>
                  {/* Iterate over each invoice */}
                  {data.invoices.map((invoice, invoiceIndex) => (
                    <tr
                      key={`${index}-${invoiceIndex}`}
                      className="cursor-pointer"
                    >
                      {/* ------------- CUSTOMER ID ------------- */}
                      <td className="gap-x-3 px-6 whitespace-nowrap">
                        <span className="text-gray-700 text-lg font-medium">
                          {invoice.to.name}
                        </span>{" "}
                        <br />
                        <span className="text-gray-700 text-md">
                          {invoice.to.email}
                        </span>
                      </td>

                      <td className="pl-6 py-3 text-lg">{data.customerId}</td>
                      <td className="pl-6 py-3 text-lg">{invoice.orderId}</td>
                      <td className="pl-6 py-3 text-lg">${invoice.amount}</td>

                      <td className="pl-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-5 py-2 rounded-full capitalize font-semibold text-sm ${
                            data.paymentStatus === "unpaid"
                              ? "text-red-600 bg-red-50"
                              : data.paymentStatus === "paid"
                              ? "text-blue-600 bg-blue-50"
                              : data.paymentStatus === "partiallypaid"
                              ? "text-yellow-600 bg-yellow-50"
                              : ""
                          }`}
                        >
                          {data.paymentStatus}
                        </span>
                      </td>

                      {/* ---------- PREVIEW BUTTON ----------  */}
                      <td
                        className="pr-6 py-3 text-lg font-semibold underline underline-offset-4 text-[#F11900]"
                        onClick={() => openModal(data.id)}
                      >
                        Preview Invoice
                      </td>

                      <td className="flex items-center justify-center py-3">
                        {/* ---------- EDIT BUTTON ----------  */}
                        <div
                          className="rounded-full bg-gray-200 text-gray-800 p-2 ms-2.5 transition hover:scale-110"
                          onClick={() => onClickErrorModal(data.id)}
                        >
                          <PencilSimple size={24} />
                        </div>

                        {/* ---------- DELETE BUTTON ----------  */}
                        <div
                          className="trash_button rounded-full bg-red-600 text-white p-2 ms-2.5 transition hover:scale-110"
                          onClick={() => onClickErrorModal(data.id)}
                        >
                          <Trash size={24} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
              {/* If no data is available */}
              {InvoicesData.length === 0 && (
                <tr>
                  <td className="px-6 py-4 text-lg text-gray-950">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* --------------- PAGINATION --------------- */}
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

      {/* ---------- DELETE MESSAGE MODAL ---------- */}
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

      {/* ------------- PREVIEW INVOICE ------------- */}
      {Modal_id.map((data, index) => (
        <Modal
          size="4xl"
          show={showModalX}
          icon={<X size={28} onClick={openModal} className="cursor-pointer" />}
        >
          <Modal.Header>
            {/* <div className="flex justify-between items-center border-b-4 border-gray-500 pb-2"> */}
            <div className="flex justify-between items-center mt-2">
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
          <Modal.Body
          // style={{ minHeight: "40rem" }}
          >
            <div className=" flex justify-between">
              {data.invoices[0] && (
                <>
                  <div className=" p-2 w-100">
                    <p className="modelClientText mb-2 text-base">Bill To:</p>
                    <h1 className="modelClientHeadText mb-2 font-semibold text-lg capitalize">
                      {data.invoices[0].to.name}
                    </h1>
                    <p className="modelClientText flex items-center mb-2 text-base">
                      <Phone size={18} className="mr-1" />
                      {data.invoices[0].to.phone}
                    </p>
                    <p className="modelClientText flex items-center mb-2 text-base">
                      <Mail size={18} className="mr-1" />
                      {data.invoices[0].to.email}
                    </p>
                    <p className="modelClientText flex items-center mb-2 text-base">
                      <CreditCard size={20} className="mr-1" />
                      {data.invoices[0].customerId}
                    </p>
                  </div>
                </>
              )}
              <div className=" p-2 w-100">
                <p className="modelClientText mb-2 text-base">From:</p>
                <h1 className="modelClientHeadText mb-2 font-semibold text-lg">
                  IT EXPERTS
                </h1>
                <p className="modelClientText mb-2 text-base">
                  (+92) 334 41087865
                </p>
                <p className="modelClientText mb-2 text-base">
                  itexperts@gmail.com
                </p>
                <p className="modelClientText text-base">
                  3909 Heavner Avenue <br /> Mountain, GA 30083
                </p>
              </div>
            </div>
            {data.invoices[0] && (
              <>
                <div className="flex justify-between mx-2 mt-5">
                  <data className="left flex flex-col">
                    <p className="text-base">
                      <span className="font-semibold">Order Id: </span>
                      {data.invoices[0].orderId}{" "}
                    </p>
                    {data.invoices[0].invoiceType === "half" ? (
                      <>
                        <p className="modelClientText flex items-center mb-2 text-base">
                          <span className="font-semibold mr-2">
                            Invoice Type:
                          </span>
                          Partially Payment
                        </p>
                      </>
                    ) : null}
                  </data>

                  <p className="text-base">
                    <span className="font-semibold">Due Date: </span>
                    {new Date(data.invoices[0].dueDate).toLocaleDateString()}
                  </p>
                </div>
              </>
            )}
            <div className="mt-5 shadow-sm overflow-x-auto">
              <table className="w-full table-auto text-sm text-left">
                <thead className="bg-gray-200 text-black font-normal text-lg border-b">
                  <tr>
                    <th className="py-3 px-6 tracking-wide">Description</th>
                    <th className="py-3 px-6 text-end">SubTotal</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 border-b-2 divide-y">
                  {data.invoices[0].service.map((service, idx) => (
                    <tr key={idx}>
                      <td className="ps-5 py-4 text-lg whitespace-nowrap flex items-end gap-x-6">
                        {service.serviceName} <br />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-lg">
                        ${service.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* ------------- INVOICE TOTAL ------------- */}
              <div className="w-full flex justify-end pr-3 mb-6">
                <div className="pt-2 flex flex-col text-lg text-right">
                  {/* SUB TOTAL */}
                  <div className="invoice_total py-2.5 w-60 font-medium flex justify-end items-center gap-6">
                    <div className="total_amount text-right mr-3">
                      Sub Total
                    </div>
                    <div className="invoice_heading w-16">
                      ${data.invoices[0].amount + data.invoices[0].discount}
                    </div>
                  </div>
                  {/* DISCOUNT */}
                  <div className="invoice_total py-2.5 w-60 font-medium flex justify-end items-center gap-6">
                    <div className="total_amount text-right mr-3">Discount</div>
                    <div className="invoice_heading w-16">
                      ${data.invoices[0].discount}
                    </div>
                  </div>
                  {/* TOTAL AMOUNT */}
                  <div className="border-t py-2.5 w-60 font-semibold flex justify-end items-center gap-6">
                    <div className="total_amount text-right mr-3">
                      Total Amount
                    </div>
                    <div className="invoice_heading w-16">
                      ${data.invoices[0].amount}
                    </div>
                  </div>
                </div>

                {/* <thead className="bg-gray-200 text-black text-lg border-b">
                  <tr>
                    <th className="py-3 px-6 font-bold">Total</th>
                    <th className="py-3 px-6 text-end">
                      ${data.invoices[0].amount}
                    </th>
                  </tr>
                </thead> */}
              </div>
            </div>
            <div className="flex justify-center gap-5 mt-5">
              {/* <button
                className="px-6 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#D22B2B] rounded-md hover:bg-[#D22B2B] focus:outline-none focus:bg-[#D22B2B]"
                onClick={openModal}
                type="button"
              >
                Generate Invoice
              </button> */}
              <button
                className="px-6 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#D22B2B] rounded-md hover:bg-[#D22B2B] focus:outline-none focus:bg-[#D22B2B]"
                onClick={openModal}
                type="button"
              >
                Download Invoice
              </button>
            </div>
          </Modal.Body>
        </Modal>
      ))}
    </>
  );
};

export default AllInvoices;
