import { useEffect, useState } from "react";
import { TextInput } from "keep-react";
import { MagnifyingGlass, Trash, Chat } from "phosphor-react";
import { Modal, Button } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContactFormAsync,
  getAllFormsAsync,
} from "../../../features/contactFormSlice";
import "./Dashboard.css";

const Dashboard = () => {
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
  const [limit, setLimit] = useState(8);
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

  return (
    <>
      <div className=" py-10 px-4 md:px-8 rounded-md bg-white">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Contact Queries
            </h3>
            <p className="text-gray-600 mt-2">
              {DashboardData.length} Total Queries
            </p>
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
            <button className="inline-block rounded bg-red-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:bg-red-500">
              Export CSV
            </button>
          </div>
        </div>
        <div className="mt-12 relative h-max overflow-x-auto">
          {/* ------------- CONTACT QUERIES TABLE ------------- */}
          <table className="contact_table w-full table-auto text-sm text-left overflow-x-auto">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 pr-3 text-lg">Name</th>
                <th className="py-3 pr-3 text-lg">Date</th>
                <th className="py-3 pr-6 text-lg">Ref Number</th>
                <th className="py-3 pr-6 text-lg">Phone</th>
                <th className="py-3 pr-6 text-lg">Email</th>
                <th className="py-3 pr-6 text-lg">Company</th>
                <th className="py-3 pr-6 text-lg">Message</th>
                <th className="py-3 pl-6 text-lg">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {displayedData.length > 0 ? (
                displayedData.map((data, idx) => {
                  return (
                    <>
                      <tr key={idx} className="cursor-pointer">
                        <td className="pr-3 py-3 text-lg">{data.name}</td>
                        <td className="pr-3 py-3 text-lg">
                          {new Date(data.createdAt).toLocaleDateString()}
                        </td>
                        <td className="pr-6 py-3 text-lg">{data.refNumber}</td>
                        <td className="pr-6 py-3 text-lg">{data.phone}</td>
                        <td className="pr-6 py-3 text-lg">{data.email}</td>
                        <td className="pr-6 py-3 text-lg">{data.company}</td>
                        <td
                          className="pr-1 py-3 text-lg font-semibold underline underline-offset-4 text-blue-700"
                          onClick={() => onClickTwo(data.id)}
                        >
                          View Message
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
      {filteredId.map((data, idx) => (
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
      ))}

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
    </>
  );
};

export default Dashboard;
