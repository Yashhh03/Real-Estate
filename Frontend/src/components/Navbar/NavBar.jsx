import { useState } from "react";
import "./NavBar.scss";

export default function NavBar() {
  const [open, setOpen] = useState(false);

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
        <a href="/">Sign-in</a>
        <a href="/" className="register">
          Sign-up
        </a>
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
