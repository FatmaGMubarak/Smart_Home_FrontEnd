import { BrowserRouter as Router, HashRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages and Components
import RoleSelection from './pages/RoleSelection';
import Login from './components/Auth/Login';
import ApplicationForm from './components/ApplicationForm';
import ForgetPass from './components/Auth/ForgetPass';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import ResetPasswordForm from './components/Auth/ResetPasswordForm';
import SettingPassword from './components/Auth/SettingPassword';
import AuthGuard from './guard/AuthGuard';
import LandingPage from "./pages/LandingPage";
import UserRequest from "./pages/UserRequest";
import AdminUsers from "./adminPages/AdminUsers";
import AdminRequests from "./adminPages/AdminRequests";
import CreateHome from "./adminPages/CreateHome";
import ViewReq from "./adminPages/ViewReq";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/admin-dash"
            element={
              <AuthGuard>
                <AdminDashboard />
              </AuthGuard>
            }
          />
          <Route
            path="/user-dash"
            element={
              <AuthGuard>
                <UserDashboard />
              </AuthGuard>
            }
          />
          <Route index element={<LandingPage />} path="/" />
          <Route path="/role" element={<RoleSelection />} />
          <Route path="/app" element={<ApplicationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-pass" element={<ForgetPass />} />
          <Route path="/set-password" element={<SettingPassword />} />
          <Route path="/reset-pass/:token" element={<ResetPasswordForm />} />
          <Route path="/user-req" element={<UserRequest />} />
          <Route path="/admin-user" element={<AdminUsers />} />
          <Route path="/admin-req" element={<AdminRequests />} />
          <Route path="/admin-create" element={<CreateHome />} />
          <Route path="/view-req" element={<ViewReq />} />
        </Routes>
      </Router>


      <ToastContainer />
    </>
  );
};

export default App;
