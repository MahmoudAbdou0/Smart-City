import { Outlet } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

import GlobalPreloader from "../../../components/GlobalPreloader";

function UserPortal() {
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

export default UserPortal;
