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
  Files,
  FileText,
} from "phosphor-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAsync, reset } from "../../features/authSlice";
import "./AdminPanel.css";

const AdminBody = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  // HANDLE LOGOUT
  const handleLogout = () => {
    dispatch(logoutUserAsync()).then(() => {
      dispatch(reset());
    });
  };

  const admin = useSelector((state) => state.auth.user);

  return (
    <>
      <div className="adminBody bg-slate-300 px-0">
        {/* ------------ DASHBOARD SIDE MENU ------------  */}
        <div className="admin_sideMenu md:max-w-60 lg:max-w-72 mt-5 ">
          <Sidebar
            className="pt-6 rounded-md"
            aria-label="Sidebar with multi-level dropdown example"
            style={{ minHeight: "92.1vh", backgroundColor: "#fff" }}
          >
            <Sidebar.ItemGroup>
              <h1 className="text-gray-800 tracking-wide font-semibold text-2xl sm:text-sm lg:text-2xl mb-5 pt-1.5 text-center">
                ADMIN DASHBOARD
              </h1>

              {/* -------- CONTACT QUERIES --------  */}
              <Link to="/adminpanel">
                <Sidebar.Item
                  icon={
                    <Chat
                      size={24}
                      className={` ${
                        location.pathname === "/adminpanel" ? "text-white" : ""
                      }`}
                    />
                  }
                  className={
                    location.pathname === "/adminpanel" ? "active-link" : ""
                  }
                >
                  <span className="text-lg">Contact Queries</span>
                </Sidebar.Item>
              </Link>
              {/* -------- ADMIN INFO'S --------  */}
              {admin?.superAdmin ? (
                <Sidebar.Collapse
                  icon={<UsersThree size={24} />}
                  label="Admin's Info"
                  style={{ fontSize: "1.15rem" }}
                >
                  <>
                    <Link to="/adminpanel/pending-requests">
                      <Sidebar.Item
                        icon={
                          <PaperPlaneTilt
                            size={24}
                            className={` ${
                              location.pathname ===
                              "/adminpanel/pending-requests"
                                ? "text-white"
                                : ""
                            }`}
                          />
                        }
                        className={
                          location.pathname === "/adminpanel/pending-requests"
                            ? "active-link"
                            : ""
                        }
                      >
                        <span className="text-lg">Pending Requests</span>
                      </Sidebar.Item>
                    </Link>

                    <Link to="/adminpanel/approved-requests">
                      <Sidebar.Item
                        icon={
                          <UserGear
                            size={24}
                            className={` ${
                              location.pathname ===
                              "/adminpanel/approved-requests"
                                ? "text-white"
                                : ""
                            }`}
                          />
                        }
                        className={
                          location.pathname === "/adminpanel/approved-requests"
                            ? "active-link"
                            : ""
                        }
                      >
                        <span className="text-lg">Appproved Admins</span>
                      </Sidebar.Item>
                    </Link>
                  </>
                </Sidebar.Collapse>
              ) : (
                ""
              )}
              {/* -------- PROJECTS --------  */}
              <Sidebar.Collapse
                icon={<Browsers size={24} />}
                label="Projects"
                style={{ fontSize: "1.15rem" }}
              >
                {/* -------- PENDING REQUESTS --------  */}
                <Link to="/adminpanel/ongoingprojects">
                  <Sidebar.Item
                    icon={
                      <Clock
                        size={24}
                        className={` ${
                          location.pathname === "/adminpanel/ongoingprojects"
                            ? "text-white"
                            : ""
                        }`}
                      />
                    }
                    className={
                      location.pathname === "/adminpanel/ongoingprojects"
                        ? "active-link"
                        : ""
                    }
                  >
                    <span className="text-lg">Ongoing Projects</span>
                  </Sidebar.Item>
                </Link>
                {/* -------- APPROVED USERS --------  */}
                <Link to="/adminpanel/completedprojects">
                  <Sidebar.Item
                    icon={
                      <Check
                        size={24}
                        className={` ${
                          location.pathname === "/adminpanel/completedprojects"
                            ? "text-white"
                            : ""
                        }`}
                      />
                    }
                    className={
                      location.pathname === "/adminpanel/completedprojects"
                        ? "active-link"
                        : ""
                    }
                  >
                    <span className="text-lg">Completed Projects</span>
                  </Sidebar.Item>
                </Link>
              </Sidebar.Collapse>

              {/* -------- ALL INVOICE --------  */}
              <Link to="/adminpanel/all-invoice">
                <Sidebar.Item
                  icon={
                    <Files
                      size={24}
                      className={` ${
                        location.pathname === "/adminpanel/all-invoice"
                          ? "text-white"
                          : ""
                      }`}
                    />
                  }
                  className={
                    location.pathname === "/adminpanel/all-invoice"
                      ? "active-link"
                      : ""
                  }
                >
                  <span className="text-lg">All Invoices</span>
                </Sidebar.Item>
              </Link>

              {/* -------- GENERATE INVOICE --------  */}
              <Link to="/adminpanel/invoice">
                <Sidebar.Item
                  icon={
                    <FileText
                      size={24}
                      className={` ${
                        location.pathname === "/adminpanel/invoice"
                          ? "text-white"
                          : ""
                      }`}
                    />
                  }
                  className={
                    location.pathname === "/adminpanel/invoice"
                      ? "active-link"
                      : ""
                  }
                >
                  <span className="text-lg">Generate Invoice</span>
                </Sidebar.Item>
              </Link>
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
        <div className="admin_display mx-8 mt-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminBody;
