import { useState } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.jpg" alt="" />
          <span>YS-Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <span>Test Name</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign-in</a>
            <a href="/" className="register">
              Sign-up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img src="/menu.png" onClick={() => setOpen((prev) => !prev)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Sign-in</a>
          <a href="/">Sign-up</a>
        </div>
      </div>
    </nav>
  );
}
