import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserDashboard from "./features/users/pages/UserDashboard";
import AdminDashboard from "./features/admin/pages/AdminDashboard";
import Users from "./features/admin/pages/Users";
import Analytics from "./features/admin/pages/Analytics";
import AdminPortal from "./features/admin/pages/AdminPortal";
import UserPortal from "./features/users/pages/UserPortal";
import Notifications from "./features/users/pages/Notifications";
import Utilities from "./features/users/pages/Utilities";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserComplaints from "./features/users/pages/UserComplaints";
import AdminComplaints from "./features/admin/pages/AdminComplaints";
import UserProfile from "./features/users/pages/UserProfile";
import AdminProfile from "./features/admin/pages/AdminProfile";

function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {/* Routes For Admin */}
        <Route path="/admin" element={<AdminPortal />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="complaints" element={<AdminComplaints />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>
        {/* Routes For Users */}
        <Route path="/dashboard" element={<UserPortal />}>
          <Route index element={<UserDashboard />} />
          <Route path="complaints" element={<UserComplaints />} />
          <Route path="utilities" element={<Utilities />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesConfig;
