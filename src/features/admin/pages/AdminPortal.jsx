import { Outlet } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import GlobalPreloader from "../../../components/GlobalPreloader";

function AdminPortal() {
  return (
    <>
      <NavBar />
      <GlobalPreloader>
        <main className="container">
          <Outlet />
        </main>
      </GlobalPreloader>
    </>
  );
}

export default AdminPortal;
