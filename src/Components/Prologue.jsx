import React from "react";
import "./prologue.css";
function Prologue() {
  return (
    <>
      <div className="prologue_container">
        <div className="prologue_head">
          <h1>Director's Prologue</h1>
        </div>
        <div className="prologue_text">
          <div className="prlogue_para">
            <p>
              "Innovation meets opportunity in the tech industry. We empower
              individuals and organizations to thrive in a digital-first economy
              with industry-relevant training in IT Ops, DevOps, SysOps,
              DataOps, and AI Ops. Our practical, result-driven programs bridge
              the gap between academic knowledge and real-world expertise,
              equipping you with the skills and confidence to excel in
              high-demand IT roles and become leaders in your field. Join
              CloudAge to elevate your career, embrace innovation, and shape the
              future of technology. Your journey to success starts now."
            </p>
          </div>
          <div className="name">
            <p>
              K Turk <br></br>IT Director
            </p>
          </div>
          <div className="statics">
            <div className="exp">
              <h1>25+</h1>
              <h3>Years Experience</h3>
            </div>
            <div className="exp">
              <h1>4000+</h1>
              <h3>Candidates Placed</h3>
            </div>
            <div className="exp">
              <h1>99.00%</h1>
              <h3>Satisfaction</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prologue;
