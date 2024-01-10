import React, { useState } from "react";
import { Modal, Button } from "keep-react";
import { MagnifyingGlass, Trash } from "phosphor-react";

const CompletedProjects = () => {
  const [showErrorModalX, setShowErrorModalX] = useState(false);
  const [deleteMsgId, setDeleteMsgId] = useState(null);
  const tableItems = [
    {
      id: 1,
      name: "Suheer Zahid",
      email: "suheer@gmail.com",
      role: "Admin",
    },
    {
      id: 2,
      name: "Haris Saeed",
      email: "haris@gmail.com",
      role: "Admin",
    },
    {
      id: 3,
      name: "Usama Jameel",
      email: "usama@gmail.com",
      role: "Admin",
    },
    {
      id: 4,
      name: "Arqum",
      email: "arqum@gmail.com",
      role: "Admin",
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
              COMPLETED PROJECTS
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
                <th className="py-3 pr-6 text-lg">Name</th>
                <th className="py-3 pr-6 text-lg">Email</th>
                {/* <th className="py-3 pr-6 text-lg">Role</th> */}
                <th className="py-3 pl-2 text-lg">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {tableItems.map((data, idx) => (
                <tr key={idx}>
                  <td className="pr-6 py-4 text-lg">{data.id}</td>
                  <td className="pr-6 py-4 text-lg">{data.name}</td>
                  <td className="pr-6 py-4 text-lg">{data.email}</td>
                  {/* <td className="pr-6 py-4 text-lg">{data.role}</td> */}
                  <td className="whitespace-nowrap">
                    <button className="inline-block rounded-lg bg-gray-700 px-4 py-2.5 mx-1 text-md font-medium text-white focus:outline-none focus:ring active:bg-indigo-500">
                      Approved
                    </button>

                    <button
                      onClick={() => onClickErrorModal(data.id)}
                      className="inline-block rounded-lg border border-red-600 bg-red-600 text-white px-4 py-2.5 mx-1 text-md font-medium transition  focus:outline-none focus:ring active:bg-red-500"
                    >
                      Reject
                    </button>
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

export default CompletedProjects;
