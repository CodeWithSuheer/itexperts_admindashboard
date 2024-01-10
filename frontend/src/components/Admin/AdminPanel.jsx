import React, { useEffect } from "react";
import AdminHeader from "./AdminHeader";
import AdminBody from "./AdminBody";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { approvedRequestsAsync, pendingRequestsAsync } from "../../features/adminInfoSlice";

const AdminPanel = () => {
  const dispatch = useDispatch();
  // HERE WE CALL ALL PENDING REQ..
  useEffect(() => {
    dispatch(pendingRequestsAsync());
    dispatch(approvedRequestsAsync());
  }, [dispatch]);

  return (
    <>
      <AdminHeader />
      <AdminBody />
    </>
  );
};

export default AdminPanel;
