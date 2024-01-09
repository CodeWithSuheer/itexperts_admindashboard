import React from "react";
import DashboardData from "../Dashboard/DashboardData";
import { TextInput } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";

const User = () => {
  return (
    <div className=" mt-10 py-10 mx-8 px-4 md:px-8 rounded-md bg-white">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
            Contact Queries
          </h3>
          <p className="text-gray-600 mt-2">{DashboardData.length} Member</p>
        </div>
        <div className="mt-3 md:mt-0 flex gap-8">
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
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6 text-lg">Name</th>
              <th className="py-3 pr-6 text-lg">Ref Number</th>
              <th className="py-3 pr-6 text-lg">Phone</th>
              <th className="py-3 pr-6 text-lg">Email Address</th>
              <th className="py-3 pr-6 text-lg">Company</th>
              <th className="py-3 pr-6 text-lg">Message</th>
              <th className="py-3 pr-6 text-lg">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {DashboardData.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4 text-lg">{item.name}</td>
                <td className="pr-6 py-4 text-lg">{item.ref}</td>
                <td className="pr-6 py-4 text-lg">{item.phone}</td>
                <td className="pr-6 py-4 text-lg">{item.email}</td>
                <td className="pr-6 py-4 text-lg">{item.company}</td>
                <td className="pr-6 py-4 text-lg">{item.Message}</td>
                <td className=" whitespace-nowrap">
                  <button
                    className="inline-block rounded bg-red-600 px-4 py-2.5 text-md font-medium text-white transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:bg-red-500"
                    href="/download"
                  >
                    Create Invoice
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
