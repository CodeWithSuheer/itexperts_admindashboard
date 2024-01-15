import React, { useState } from "react";
import { Modal, Button } from "keep-react";
import { Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const [showErrorModalX, setShowErrorModalX] = useState(false);
  const [deleteMsgId, setDeleteMsgId] = useState(null);
  const tableItems = [
    {
      id: 1,
      name: "Dummy Client",
      email: "suheer@gmail.com",
      order_id: "43543654",
      service: "Landing Page Services",
      invoice_status: "unpaid",
      project_status: "In Progress",
    },
    
  ];

  // DELETE MESSAGE MODAL FUNCTION
  const onClickErrorModal = (id) => {
    setShowErrorModalX(!showErrorModalX);
    setDeleteMsgId(id);
  };

  const delete_MsgId = tableItems.filter((data) => data.id === deleteMsgId);

  return (
    <>
      <div className="py-10 px-4 md:px-8 rounded-md bg-white">
        <div className="items-start justify-between md:flex">
          <div className="max-w-4xl">
            <h3 className="text-gray-800 text-2xl font-semibold tracking-wide sm:text-3xl">
              ONGOING PROJECTS{" "}
              <span className="text-lg font-normal">({tableItems.length})</span>
            </h3>
            {/* <p className="text-gray-700 text-lg mt-4">
              Here you can view and manage all ongoing projects.
            </p> */}
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
            Ongoing Projects
          </button>
          <button
            className="bg-white text-black border border-black hover:bg-[#F11900] hover:text-white hover:border-[#f11900] rounded-md mr-5"
            style={{ padding: "8px 25px" }}
          >
            Complete Projects
          </button>
        </div>

        <div className="mt-12 relative h-max overflow-auto">
          <table className="w-full table-auto text-md text-left overflow-auto">
            <thead className="text-[#242435] bg-[#F7F7F7] font-medium border-b">
              <tr>
                <th className="py-4 px-6 text-lg font-medium">Order Id</th>
                <th className="py-4 px-6 text-lg font-medium">Client</th>
                <th className="py-4 px-6 text-lg font-medium">Service</th>
                <th className="py-4 px-6 text-lg font-medium">Invoice Status</th>
                <th className="py-4 px-6 text-lg font-medium">Project Status</th>
                <th className="py-4 px-6 text-lg font-medium">Details</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {tableItems.map((item, idx) => (
                <tr key={idx}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <div>
                      <span className="block text-gray-700 text-md font-medium">
                        {item.name}
                      </span>
                      <span className="block text-gray-700 text-sm">
                        {item.email}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.order_id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.service}</td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    <span
                      className={`mx-4 px-3 py-2 rounded-full font-semibold text-sm capitalize ${
                        item.invoice_status == "Active"
                          ? "text-green-600 bg-green-50"
                          : "text-blue-600 bg-blue-50"
                      }`}
                    >
                      {item.invoice_status}
                    </span>
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    <span
                      className={`mx-4 px-3 py-2 rounded-full font-semibold text-sm capitalize ${
                        item.invoice_status == "Active"
                          ? "text-green-600 bg-green-50"
                          : "text-green-600 bg-green-50"
                      }`}
                    >
                      {item.project_status}
                    </span>
                  </td>
                  <td className="pr-0 py-4 text-lg ">
                    <Button
                      size="sm"
                      type="outlineGray"
                      className="bg-[#f11900] text-white border-[#f11900] hover:bg-[#f11900] hover:text-white"
                      onClick={() => navigate("/adminpanel/projectdetails")}
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
      {/* ------------- DELETE MESSAGE MODAL ------------- */}
      {delete_MsgId.map((data, idx) => (
        <Modal
          icon={<Trash size={28} color="#E92215" />}
          size="lg"
          show={showErrorModalX}
          onClose={onClickErrorModal}
        >
          <Modal.Header>Do you want to delete this request?</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-metal-500">
                This action will permanently remove the request.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="outlineGray" onClick={onClickErrorModal}>
              Cancel
            </Button>
            <Button type="primary" color="error" onClick={onClickErrorModal}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      ))}
    </>
  );
};

export default Projects;
