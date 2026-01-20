import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <div className="footer_container">
        <div className="footer_logo">
          <img
            className="footer_img"
            src="src/assets/logo.png"
            alt="CloudAge Logo"
          ></img>
          <p>CloudAge Global Services Pvt Ltd</p>
        </div>
        <div className="connect">
          <p>Connect with us :</p>
          <div className="social">
            <a href="#">
              {" "}
              <img src="src/assets/social/fb.svg" alt="Facebook" />
            </a>
            <a href="#">
              {" "}
              <img src="src/assets/social/insta.svg" alt="Insta" />
            </a>
            <a href="#">
              {" "}
              <img src="src/assets/social/linkedIn.svg" alt="LinkedIn" />
            </a>
            <a href="#">
              {" "}
              <img src="src/assets/social/wp.svg" alt="Whatsapp" />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>© 2026 CloudAge Global</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
