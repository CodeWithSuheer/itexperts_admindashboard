import React, { useState } from "react";
import { Modal, Button } from "keep-react";
import { MagnifyingGlass, Trash } from "phosphor-react";

const OnGoingProject = () => {
  const [showErrorModalX, setShowErrorModalX] = useState(false);
  const [deleteMsgId, setDeleteMsgId] = useState(null);
  const tableItems = [
    {
      id: 1,
      name: "Dummy Client",
      ref: "ITE-654",
      service: "Landing Page Services",
      invoice_status: "unpaid",
      project_status: "In Progress",
    },
    {
      id: 2,
      name: "Dummy Client",
      ref: "ITE-664",
      service: "React JS Website",
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
            <h3 className="text-gray-800 text-2xl font-semibold tracking-wide sm:text-3xl underline decoration-red-500 underline-offset-8">
              ONGOING PROJECTS
            </h3>
            <p className="text-gray-700 text-lg mt-4">
              Here you can view and manage all ongoing projects.
            </p>
          </div>
          {/* <div className="mt-3 md:mt-0"></div> */}
        </div>
        <div className="mt-12 relative h-max">
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 pr-6 text-lg">Id</th>
                <th className="py-3 pr-6 text-lg">Client Name</th>
                <th className="py-3 pl-2 text-lg">Ref No</th>
                <th className="py-3 pr-6 text-lg">Service</th>
                <th className="py-3 pr-6 text-lg">Invoice Status</th>
                <th className="py-3 pl-2 text-lg">Project Status</th>
                <th className="py-3 pl-2 text-lg">Details</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {tableItems.map((data, idx) => (
                <tr key={idx}>
                  <td className="pr-0 py-4 text-lg capitalize">{data.id}</td>
                  <td className="pr-0 py-4 text-lg capitalize">{data.name}</td>
                  <td className="pr-0 py-4 text-lg capitalize tracking-wide text-red-600">
                    {data.ref}
                  </td>
                  <td className="pr-0 py-4 text-lg capitalize">
                    {data.service}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-2 rounded-full font-semibold text-sm capitalize ${
                        data.invoice_status == "Active"
                          ? "text-green-600 bg-green-50"
                          : "text-blue-600 bg-blue-50"
                      }`}
                    >
                      {data.invoice_status}
                    </span>
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-2 rounded-full font-semibold text-sm capitalize ${
                        data.invoice_status == "Active"
                          ? "text-green-600 bg-green-50"
                          : "text-blue-600 bg-blue-50"
                      }`}
                    >
                      {data.project_status}
                    </span>
                  </td>
                  <td className="pr-0 py-4 text-lg ">
                    <Button
                      size="md"
                      type="outlineGray"
                      className="bg-red-600 text-white hover:bg-red-700 hover:text-white"
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

export default OnGoingProject;
