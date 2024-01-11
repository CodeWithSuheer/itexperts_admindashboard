import React, { useEffect } from "react";
import AdminHeader from "./AdminHeader";
import AdminBody from "./AdminBody";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AdminPanel = () => {
  const dispatch = useDispatch();
 
  

  return (
    <>
      <AdminHeader />
      <AdminBody />
    </>
  );
};

export default AdminPanel;
