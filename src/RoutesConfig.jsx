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
import GlobalPreloader from "./components/GlobalPreloader";
import AdminProtectedRoute from "./AdminProtectedRoute";
import ProtectedRoute from "./ProtectedRoute";

function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <GlobalPreloader>
              <Home />
            </GlobalPreloader>
          }
        />
        {/* Routes For Admin */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminPortal />
            </AdminProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="complaints" element={<AdminComplaints />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>
        {/* Routes For Users */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <UserPortal />
            </ProtectedRoute>
          }
        >
          <Route index element={<UserDashboard />} />
          <Route path="complaints" element={<UserComplaints />} />
          <Route path="utilities" element={<Utilities />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
        <Route
          path="login"
          element={
            <GlobalPreloader>
              <Login />
            </GlobalPreloader>
          }
        />
        <Route
          path="register"
          element={
            <GlobalPreloader>
              <Signup />
            </GlobalPreloader>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesConfig;
