import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import AdminPanel from "./components/Admin/AdminPanel";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import AdminHeader from "./components/Admin/AdminHeader";
import AdminBody from "./components/Admin/AdminBody";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Invoice from "./components/Admin/Invoice/Invoice";
import NotFound from "./components/NotFound/NotFound";
import UsersRequests from "./components/Admin/UsersRequests/UsersInfo";
import PendingRequests from "./components/Admin/UsersRequests/PendingRequests";
import ApprovedRequests from "./components/Admin/UsersRequests/ApprovedRequests";
import ProjectsPanel from "./components/Admin/Projects/ProjectsPanel";
import OnGoingProject from "./components/Admin/Projects/OnGoingProject";
import CompletedProjects from "./components/Admin/Projects/CompletedProjects";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* --------- INITIAL ROUTE --------- */}
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />

          {/* --------- DASHBOARD --------- */}
          <Route path="/adminpanel" element={<AdminPanel />}>
            <Route index element={<Dashboard />} />
            <Route path="usersinfo" element={<UsersRequests />} />
            <Route path="pending-requests" element={<PendingRequests />} />
            <Route path="approved-requests" element={<ApprovedRequests />} />
            <Route path="invoice/:id" element={<Invoice />} />
            <Route path="projects" element={<ProjectsPanel />} />
            <Route path="ongoingprojects" element={<OnGoingProject />} />
            <Route path="completedprojects" element={<CompletedProjects />} />
          </Route>

          {/* --------- AUTHENTICATION --------- */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
}

export default App;