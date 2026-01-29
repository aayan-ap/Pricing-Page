import React, { useState } from "react";
import "./nav_res.css";
function NavRes() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className={`nav-left ${menuOpen ? "active" : ""}`}>
          <img
            className="nav-img"
            src="/assets/logo.png"
            alt="CloudAge Logo"
          ></img>
        </div>
        <div className="nav-right">
          <div>
            <a href="https://www.mycloudage.com/contact">Corporate Training</a>
          </div>
          <div>
            <a href="https://www.mycloudage.com/t&c">T&C</a>
          </div>  
          <div>
            <a href="#">Webinar </a>
          </div>
          <div>
            <a href="https://www.mycloudage.com/login">
              <button className="login">Log In</button>{" "}
            </a>
          </div>
        </div>
        <div className={`menu ${menuOpen ? "active" : ""}`}>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <img className="menu-icon" src="/assets/menu.svg"></img>
          </button>
          {/* <MenuIcon className="menu-icon"/> */}
        </div>
      </nav>
      <div className={`menu-list ${menuOpen ? "active" : ""}`}>
        <div className="menu-list-head">
          <div className="menu-head-text">
              <img
            className="menu-img"
            src="/assets/logo.png"
            alt="CloudAge Logo"
          ></img>
          </div>
          <div className="cross">
            {" "}
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              <img className="menu-icon" src="/assets/cross.svg"></img>
            </button>
          </div>
        </div>
        <div className="menu-list-link">
          <div>
            <a href="https://www.mycloudage.com/contact">Corporate Training</a>
          </div>
          <div>
            <a href="https://www.mycloudage.com/t&c">T&C</a>
          </div>
          <div>
            <a href="#">Webinar </a>
          </div>
          <div>
            <a href="https://www.mycloudage.com/login">Log In</a>
          </div>
        </div>
      </div>

      {/* wiil be do after some time */}
      {/* {open && (
        <div>
       <div>
            <a href="#">Corporate Training</a>
          </div>
          <div>
            <a href="#">T&C</a>
          </div>
          <div>
            <a href="#">Webinar </a>
          </div>
        </div>
      )} */}
    </>
  );
}

export default NavRes;
