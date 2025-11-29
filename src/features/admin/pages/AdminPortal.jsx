import { Outlet } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import GlobalPreloader from "../../../components/GlobalPreloader";
import Footer from "../../../components/Footer";

function AdminPortal() {
  return (
    <>
      <NavBar />
      <GlobalPreloader>
        <main className="container">
          <Outlet />
        </main>
      </GlobalPreloader>
      <Footer />
    </>
  );
}

export default AdminPortal;
