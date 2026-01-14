import React from "react";
import "./pricing_card.css";
const Pricing_card = () => {
  return (
    <>
      <div className="price-container">
        <div className="price-head">
          <p className="p1-head">
            Online Paying <span className="price-bold">Installment</span>
          </p>
          <p className="p2-head">Mode Online</p>
          <p className="p3-head">
            From Scratch To Advanced – End-To-End Enterprise Generative AI
          </p>
          <div className="rupees">
            <p className="rs_inst">₹ 15,000/-</p>
         
          </div>
        </div>

        <div className="price-btn">
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
            <p>Schedule: Sat & Sun Only - 2 Hours Daily</p>
            <p>1 Year LMS Access</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing_card;
