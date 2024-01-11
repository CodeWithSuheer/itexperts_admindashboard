import { useState } from "react";
import { Sidebar } from "keep-react";
import {
  Chat,
  SignOut,
  PaperPlaneTilt,
  UserGear,
  UsersThree,
  Clock,
  Check,
  Browsers,
} from "phosphor-react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAsync, reset } from "../../features/authSlice";
import "./AdminPanel.css";

const AdminBody = () => {
  const dispatch = useDispatch();

  // HANDLE LOGOUT
  const handleLogout = () => {
    dispatch(logoutUserAsync()).then(() => {
      dispatch(reset());
    });
  };

  const admin = useSelector((state)=>state.auth.user);

  return (
    <>
      <div className="adminBody bg-slate-300 px-0">
        {/* ------------ DASHBOARD SIDE MENU ------------  */}
        <div className="admin_sideMenu max-w-72">
          <Sidebar
            className="pt-4"
            aria-label="Sidebar with multi-level dropdown example"
            style={{ minHeight: "92.1vh", backgroundColor: "#fff" }}
          >
            <Sidebar.ItemGroup>
              {/* -------- CONTACT QUERIES --------  */}
              <Link to="/adminpanel">
                <Sidebar.Item icon={<Chat size={24} />}>
                  <span className="text-xl">Contact Queries</span>
                </Sidebar.Item>
              </Link>
              {/* -------- ADMIN INFO'S --------  */}
              {admin?.superAdmin ? (<Sidebar.Collapse
                icon={<UsersThree size={24} />}
                label="Admin's Info"
                style={{ fontSize: "1.2rem" }}
              >
                
              <><Link to="/adminpanel/pending-requests">
                  <Sidebar.Item icon={<PaperPlaneTilt size={24} />}>
                    <span className="text-lg">Pending Requests</span>
                  </Sidebar.Item>
                </Link>
              
                <Link to="/adminpanel/approved-requests">
                  <Sidebar.Item icon={<UserGear size={24} />}>
                    <span className="text-lg">Appproved Admins</span>
                  </Sidebar.Item>
                </Link></>
              </Sidebar.Collapse>) : ''}
              {/* -------- PROJECTS --------  */}
              <Sidebar.Collapse
                icon={<Browsers size={24} />}
                label="Projects"
                style={{ fontSize: "1.2rem" }}
              >
                {/* -------- PENDING REQUESTS --------  */}
                <Link to="/adminpanel/ongoingprojects">
                  <Sidebar.Item icon={<Clock size={24} />}>
                    <span className="text-lg">Ongoing Projects</span>
                  </Sidebar.Item>
                </Link>
                {/* -------- APPROVED USERS --------  */}
                <Link to="/adminpanel/completedprojects">
                  <Sidebar.Item icon={<Check size={24} />}>
                    <span className="text-lg">Completed Projects</span>
                  </Sidebar.Item>
                </Link>
              </Sidebar.Collapse>
              
            </Sidebar.ItemGroup>
            {/* -------- LOGOUT --------  */}
            <Sidebar.ItemGroup>
              <Sidebar.Item
                className="cursor-pointer"
                onClick={handleLogout}
                icon={<SignOut size={24} />}
              >
                <span className="text-lg">Logout</span>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar>
        </div>
        {/* ------------ DASHBOARD DISPLAYER ------------  */}
        <div className="admin_display mx-8 mt-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminBody;
