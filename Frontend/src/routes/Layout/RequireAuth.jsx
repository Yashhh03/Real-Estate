import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";

export default function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  // if(!user) {
  //   return <Navigate to="/login" />
  // }

  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
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
