import { useState } from "react";
import DashboardData from "../Dashboard/DashboardData";
import { TextInput } from "keep-react";
import { MagnifyingGlass, Trash } from "phosphor-react";
import { Modal, Button } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showModalX, setShowModalX] = useState(false);
  const [showErrorModalX, setShowErrorModalX] = useState(false);
  const [Message, setMessage] = useState(null);
  const [deleteMsgId, setDeleteMsgId] = useState(null);

  // VIEW MESSAGE MODAL FUNCTION
  const onClickTwo = (id) => {
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

  return (
    <>
      <div className=" py-10 px-4 md:px-8 rounded-md bg-white">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Contact Queries
            </h3>
            <p className="text-gray-600 mt-2">{DashboardData.length} Member</p>
          </div>
          <div className="mt-3 md:mt-0 flex gap-8">
            {/* ------------- SEARCH BAR ------------- */}
            <TextInput
              placeholder="Search Name & Email"
              color="gray"
              sizing="md"
              type="text"
              addon={<MagnifyingGlass size={20} color="#5E718D" />}
              addonPosition="left"
              style={{ width: "17rem" }}
            />
            <button
              className="inline-block rounded bg-red-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:bg-red-500"
              href="/download"
            >
              Export CSV
            </button>
          </div>
        </div>
        <div className="mt-12 relative h-max overflow-auto">
          {/* ------------- CONTACT QUERIES TABLE ------------- */}
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 pr-6 text-lg">Name</th>
                <th className="py-3 pr-6 text-lg">Ref Number</th>
                <th className="py-3 pr-6 text-lg">Phone</th>
                <th className="py-3 pr-6 text-lg">Email Address</th>
                <th className="py-3 pr-6 text-lg">Company</th>
                <th className="py-3 pr-6 text-lg">Message</th>
                <th className="py-3 pl-14 text-lg">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {DashboardData.map((data, idx) => (
                <>
                  <tr key={idx} className="cursor-pointer">
                    <td className="pr-6 py-3 text-lg">{data.name}</td>
                    <td className="pr-6 py-3 text-lg">{data.ref}</td>
                    <td className="pr-6 py-3 text-lg">{data.phone}</td>
                    <td className="pr-6 py-3 text-lg">{data.email}</td>
                    <td className="pr-6 py-3 text-lg">{data.company}</td>
                    <td
                      className="pr-6 py-3 text-lg font-semibold underline underline-offset-4 text-blue-700"
                      onClick={() => onClickTwo(data.id)}
                    >
                      View Message
                    </td>

                    <td className="flex items-center justify-center py-3">
                      {/* ---------- HANDLE CREATE INVOICE BUTTON ----------  */}
                      <button
                        className="inline-block rounded bg-gray-800 px-4 py-2.5 text-md font-medium text-white transition hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-none"
                        onClick={() => handleCreateInvoice(data.id)}
                      >
                        Generate Invoice
                      </button>

                      <div
                        onClick={() => onClickErrorModal(data.id)}
                        className="trash_button rounded-full bg-red-600 text-white p-2 ms-2.5 transition hover:scale-110"
                      >
                        <Trash size={24} />
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ------------- VIEW MESSAGE MODAL ------------- */}
      {filteredId.map((data, idx) => (
        <Modal
          icon={<CloudArrowUp size={28} color="#1B4DFF" />}
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
            <Button type="primary" color="error" onClick={onClickErrorModal}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      ))}
    </>
  );
};

export default Dashboard;
