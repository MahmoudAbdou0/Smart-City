import { Outlet } from "react-router-dom";
import NavBar from "../../../components/NavBar";
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
    </>
  );
}

export default UserPortal;
