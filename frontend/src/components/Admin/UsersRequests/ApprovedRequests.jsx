import React, { useState } from "react";
import { Dropdown } from "keep-react";
import { Modal, Button } from "keep-react";
import { useDispatch, useSelector } from "react-redux";
import { MagnifyingGlass, Trash } from "phosphor-react";
import { CloudArrowUp } from "phosphor-react";

const ApprovedRequests = () => {
  const [showErrorModalX, setShowErrorModalX] = useState(false);
  const [deleteMsgId, setDeleteMsgId] = useState(null);
  const [roleUpdate_Id, setRoleUpdate_Id] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
  ];


  // HERE WE ARE GETTING DATA OF APPROVED REQUESTS   ---> WE CALL THIS FUNCTION IN ADMIN PANEL dispatch(approvedRequestsAsync());
  const approvedRequests = useSelector((state) => state.adminInfo.pendingRequests);
  console.log('approvedRequests',approvedRequests);

  // HANDLE ROLE UPDATE
  const onClick = (id) => {
    setShowModal(!showModal);
    setRoleUpdate_Id(id);
  };

  // DELETE MESSAGE MODAL FUNCTION
  const onClickErrorModal = (id) => {
    setShowErrorModalX(!showErrorModalX);
    setDeleteMsgId(id);
  };

  const delete_MsgId = tableItems.filter((data) => data.id === deleteMsgId);
  const roleUpdateId = tableItems.filter((data) => data.id === roleUpdate_Id);

  return (
    <>
      <div className="py-10 px-4 md:px-8 rounded-md bg-white">
        <div className="items-start justify-between md:flex">
          <div className="max-w-4xl">
            <h3 className="text-gray-800 text-2xl font-semibold tracking-wide sm:text-3xl underline decoration-red-500 underline-offset-8">
              APPROVED REQUESTS
            </h3>
            <p className="text-gray-700 text-lg mt-4">
              List of authorized admins.
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
                  {/* <td className="pr-6 py-4 text-lg">{item.role}</td> */}
                  <td className="whitespace-nowrap flex py-2">
                    <Dropdown
                      label={data.role}
                      size="sm"
                      dismissOnClick={true}
                      className="bg-gray-700 mx-1 text-white hover:bg-gray-700 hover:text-white"
                    >
                      <Dropdown.Item
                        onClick={() => onClick(data.id)}
                        className="text-md font-medium hover:bg-gray-300 hover:text-black"
                      >
                        Super Admin
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => onClick(data.id)}
                        className="text-md font-medium hover:bg-gray-300 hover:text-black"
                      >
                        Admin
                      </Dropdown.Item>
                    </Dropdown>
                    <button
                      onClick={() => onClickErrorModal(data.id)}
                      className="inline-block rounded-lg bg-red-600 px-4 py-2.5 mx-1 text-md font-medium text-white focus:outline-none focus:ring active:bg-red-500"
                    >
                      Unauthorized
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
          size="xl"
          show={showErrorModalX}
          onClose={onClickErrorModal}
        >
          <Modal.Header>Do you want to unauthorized {data.name}?</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-metal-500">
                This action will unauthorized the user.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="outlineGray" onClick={onClickErrorModal}>
              Cancel
            </Button>
            <Button type="primary" color="error" onClick={onClickErrorModal}>
              Unauthorized
            </Button>
          </Modal.Footer>
        </Modal>
      ))}

      {/* ------------- UPDATE ROLE MODAL ------------- */}
      {roleUpdateId.map((data, idx) => (
        <Modal
          icon={<CloudArrowUp size={28} color="#1B4DFF" />}
          size="xl"
          show={showModal}
        >
          <Modal.Header className="my-2">
            Do you want update the role of {data.name}?
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-metal-500">
                This action will update the role of {data.name}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="outlineGray" onClick={onClick}>
              Cancel
            </Button>
            <Button type="primary" onClick={onClick}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      ))}
    </>
  );
};

export default ApprovedRequests;
