import "./Layout.scss";
import NavBar from "../../components/Navbar/NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
