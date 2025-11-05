import { Outlet } from "react-router-dom";
import NavBar from "../../../components/NavBar";

function AdminPortal() {
  return (
    <>
      <NavBar />
      <main className="md:mx-40">
        <Outlet />
      </main>
    </>
  );
}

export default AdminPortal;
