import React from "react";
import AdminHeader from "./AdminHeader";
import AdminBody from "./AdminBody";
import { Outlet } from "react-router-dom";

const AdminPanel = () => {
  return (
    <>
      <AdminHeader />
      <AdminBody />
      {/* <Outlet /> */}
    </>
  );
};

export default AdminPanel;
