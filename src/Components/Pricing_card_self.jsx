import React from "react";
import "./pricing_card.css";
const Pricing_card_self = () => {
  return (
    <>
      <div className="price-container">
        <div className="price-head">
          <p className="p1-head">
            Self <span className="price-bold">Placed</span>
          </p>
          <p className="p2-head">Learn At Your Own Pace AnyWhere, AnyTime.</p>
          <p className="p3-head">
            From Scratch To Advanced – End-To-End Enterprise Generative AI
          </p>
          <div className="rupees">
            <p className="rs">₹ 9,997/-</p>
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
            <p>1 Year LMS Access</p>
            <p>Topics included :</p>
            <div className="topic_list">
              <ul className="list1">
                <li>Data Centre</li>
                <li>Cloud</li>
                <li>Big Data</li>
                
              </ul>
              <ul className="list2">
            <li>SnowFlake</li>
                <li>Enterprise GenAI (10 Real Projects)</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing_card_self;
