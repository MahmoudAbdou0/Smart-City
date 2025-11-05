import { Outlet } from "react-router-dom";
import NavBar from "../../../components/NavBar";

function UserPortal() {
  return (
    <>
      <NavBar />
      <main className="md:mx-40 px-5">
        <Outlet />
      </main>
    </>
  );
}

export default UserPortal;
