import { Sidebar } from "keep-react";
import {
  ChartBar,
  Chat,
  Handbag,
  LockKey,
  SignOut,
  File,
  ShoppingBagOpen,
  ShoppingCart,
  SquaresFour,
  TreeStructure,
  Users,
  List,
  PaperPlaneTilt,
  UserGear,
  UsersThree,
  FolderSimpleUser,
} from "phosphor-react";
import { Link, Outlet } from "react-router-dom";
import "./AdminPanel.css";
import { useState } from "react";

const AdminBody = () => {
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
                  Contact Queries
                </Sidebar.Item>
              </Link>
              {/* -------- ADMIN INFO'S --------  */}
              <Sidebar.Collapse
                icon={<UsersThree size={24} />}
                label="Admin's Info"
              >
                {/* -------- PENDING REQUESTS --------  */}
                <Link to="/adminpanel/pending-requests">
                  <Sidebar.Item icon={<PaperPlaneTilt size={24} />}>
                    Pending Requests
                  </Sidebar.Item>
                </Link>
                {/* -------- APPROVED USERS --------  */}
                <Link to="/adminpanel/approved-requests">
                  <Sidebar.Item icon={<UserGear size={24} />}>
                    Appproved Admins
                  </Sidebar.Item>
                </Link>
              </Sidebar.Collapse>
              {/* -------- Contact Queries --------  */}
              {/* <Link to="/adminpanel/usersinfo">
                <Sidebar.Item icon={<Users size={24} />}>
                  Users Info
                </Sidebar.Item>
              </Link> */}
              {/* -------- PROJECTS --------  */}
              <Link to="/adminpanel/projects">
                <Sidebar.Item href="#" icon={<FolderSimpleUser size={24} />}>
                  Projects
                </Sidebar.Item>
              </Link>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Link to="/">
                <Sidebar.Item icon={<SignOut size={24} />}>Logout</Sidebar.Item>
              </Link>
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