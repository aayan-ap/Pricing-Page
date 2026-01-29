import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <div className="footer_container">
        <div className="footer_logo">
          <img
            className="footer_img"
            src="/assets/logo.png"
            alt="CloudAge Logo"
          ></img>
          <p>CloudAge Global Services Pvt Ltd</p>
        </div>
        <div className="connect">
          <p>Connect with us :</p>
          <div className="social">
            <a target="_blank" href="https://www.facebook.com/people/Cloudage-Global-Services-Pvt-Ltd/61550914802449/">
              {" "}
              <img src="/assets/Social/fb.svg" alt="Facebook" />
            </a>
            <a target="_blank" href="https://www.instagram.com/cloudage.global/">
              {" "}
              <img src="/assets/Social/Insta.svg" alt="Insta" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/cloudage/">
              {" "}
              <img src="/assets/Social/linkedIn.svg" alt="LinkedIn" />
            </a>
            <a target="_blank" href="https://www.whatsapp.com/channel/0029Vau9b424SpkPGTM2ek0D">
              {" "}
              <img src="/assets/Social/wp.svg" alt="Whatsapp" />
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
