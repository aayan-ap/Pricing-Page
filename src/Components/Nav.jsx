import React, { useState } from "react";
import "./nav.css";
function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <img className="nav-img" src="src/assets/logo.png" alt="CloudAge Logo"></img>
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
          <button className="menu-btn ">
               <img className="menu-icon" src="/src/assets/menu.png"></img>
           </button>
            {/* <MenuIcon className="menu-icon"/> */}
         
        
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
