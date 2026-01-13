import React, { useState } from "react";
import "./nav.css";
import { Menu } from 'lucide-react';
function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <img className="nav-img" src="src\assets\logo.png"></img>
        </div>
        <div className="nav-right">
          <div>
            <a href="#">Corporate Training</a>
          </div>
          <div>
            <a href="#">T&C</a>
          </div>
          <div>
            <a href="#">Webinar </a>
          </div>
          <div>
            <a href="#">
              <button className="login">Log In</button>{" "}
            </a>
          </div>
        </div>
        <div className="menu">
          {" "}
          <button
            className="menu-btn"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <MenuIcon className="menu-icon"/>
          </button>
        </div>
      </nav>

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

export default Nav;
