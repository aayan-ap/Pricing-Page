import React from "react";
import "./pricing_card.css";
const Pricing_card_onsite = () => {
  return (
    <>
      <div className="price-container-onsite">
        <div className="price-head">
          <p className="p1-head">
            <span className="price-bold">On Site</span>
          </p>
          <p className="p2-head-onsite">
            Clover Hills Plaza, 9th Floor, NIBM, Undri Road, Pune, Maharashtra
            411048
          </p>
          <p className="p3-head-onsite">
            On-Site <br></br>Program Mr K. Turk Will Conduct Sessions Virtually From The
            UAE, Streamed Live At Clover Hills Plaza (Via Projector).
          </p>
          <div className="rupees">
            <p className="rs">₹ 35,000/-</p>
          </div>
        </div>

        <div className="price-btn-onsite">
          <a href="#">
            <button>Get Started</button>
          </a>
        </div>
        <div className="foot-content">
          <p className="foot-head">What you will get</p>
          <div className="content-list">
            <p>Instructor: Director K-Turk</p>
            <p>Duration: 3 Months</p>
            <p>Time: 2:15 PM IST</p>
            <p>3 Month's Office Access For Practice</p>
             <p>Parking Included & Reimbursed</p>
            <p>1 Year LMS Access</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing_card_onsite;
