import React from "react";
import "./steps.css";
function Steps() {
  return (
    <>
      <div className="steps_container">
        <div className="steps_head">
          <h3>
            3 STEPS TO &nbsp;<span className="hlt">SUCCESS </span>
          </h3>
          <h1>Comprehensive IT Training Solutions</h1>
          <h2>
            Master in-demand technologies with focused all-in-one training
            program
          </h2>
        </div>
        <div className="steps_card_container">
          <div className="steps_card">
            <div className="steps_img">
              <img src="/src/assets/Ops_logo/ITOps.png"></img>
              <img src="/src/assets/Ops_logo/DevOps.png"></img>
            </div>
            <div className="steps_text">
              <div className="text_head">
                <h3>IT Ops & DevOps</h3>
              </div>
              <div className="steps_info">
                <p>
                  Master infrastructure management and continuous delivery
                  pipelines
                </p>
              </div>
            </div>
          </div>
          <div className="steps_card">
            <div className="steps_img">
              <img src="/src/assets/Ops_logo/SysOps.png"></img>
              <img src="/src/assets/Ops_logo/DataOps.png"></img>
            </div>
            <div className="steps_text">
              <div className="text_head">
                <h3>Sys Ops & DataOps</h3>
              </div>
              <div className="steps_info">
                <p>
                  System administration, cloud infrastructure, and data security
                </p>
              </div>
            </div>
          </div>
          <div className="steps_card">
            <div className="steps_img">
              <img className="ai_ops" src="/src/assets/Ops_logo/AIOps.png"></img>
              <img className="gen_ai" src="/src/assets/Ops_logo/GenAI.png"></img>
            </div>
            <div className="steps_text">
              <div className="text_head">
                <h3>AI Ops & GenAI</h3>
              </div>
              <div className="steps_info">
                <p>
                  Leverage AI for automated IT operations and intelligent
                  monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Steps;
