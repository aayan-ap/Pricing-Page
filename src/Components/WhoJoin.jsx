import React from "react";
import "./whoJoin.css";

function WhoJoin() {
  return (
    <>
      <div className="whojoin_container">
        <div className="who_join">
          <div className="whojoin_head">
            <h1>
              Who Should &nbsp;<span className="hlt">Join</span>&nbsp; ?
            </h1>
            <h3>Low Coding Required</h3>
          </div>
          <div className="whojoin_card_container">
            <div className="whojoin_card">
              <div className="whojoin_img">
                <img src="/src/assets/who_join/graduate.png"></img>
              </div>
              <div className="whojoin_card_content">
                <p className="head">Fresh Graduates</p>
                <p className="text">
                  Open To Recent Graduates Who Completed Graduation In Any
                  Stream.
                </p>
              </div>
            </div>
            <div className="whojoin_card">
              <div className="whojoin_img">
                <img src="/src/assets/who_join/proff.png"></img>
              </div>
              <div className="whojoin_card_content">
                <p className="head">Working Professionals</p>
                <p className="text">
                  Upgrade to a competency that can transition you to
                  higher-paying roles in modern IT industry.
                </p>
              </div>
            </div>
            <div className="whojoin_card">
              <div className="whojoin_img">
                <img src="/src/assets/who_join/career.png"></img>
              </div>
              <div className="whojoin_card_content">
                <p className="head">Change Your Career Path</p>
                <p className="text">
                  Launch your IT career with industry-relevant skills and proven
                  pathways to success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoJoin;
